import axios from 'axios';
import { useState,useEffect,useContext } from 'react/';
import styled from 'styled-components'
import { Link,useNavigate } from 'react-router-dom';
import DisplayCarrinho from '../components/displaycarrinho'
import { UserContext } from '../contexts/usercontext';
import { CartContext } from '../contexts/cartContext';

export default function TelaCarrinho(){
    const [produtosCarrinho,setProdutosCarrinho]=useState()
    const [valorTotal,setValorTotal]=useState()
    const {user}=useContext(UserContext)
    const {setCartItems}=useContext(CartContext)
    const navigate=useNavigate()   

    function getLocalStorage(){
       const allKeys = Object.keys(localStorage)
       const parser=[]
        if(allKeys.length>0){
            allKeys.map(key=>{
                parser.push(JSON.parse(localStorage.getItem(key)))
            })
        }
        return parser
    }
    

    function emptyCart(){
        localStorage.clear()
        setCartItems(0)
        setProdutosCarrinho()
    }

    function checkout(){
        if(user) navigate('/confirmacao')
        else navigate('/login-cadastro')
    }
    
    useEffect(()=>{
        const body=getLocalStorage()
        const promise=axios.post(`https://back-projeto14.herokuapp.com/produtos`,body)
        promise
        .then(elem=>{
            setProdutosCarrinho(elem.data.produtos)
            setValorTotal([elem.data.valor].reduce((a, b) => a + b, 0).toFixed(2))
        })
        .catch(error=>
            alert(error.response.data)
        )
    },[])
    return(
        <>
        <h2>Carrinho de compras</h2>
        <Flex>
            <span>Produto</span>
            <div>
                <Quant>Qtde</Quant>
                <Unidade>Unit</Unidade>
                <SubTotal>Subtotal</SubTotal>
            </div>
        </Flex>
        {(produtosCarrinho 
        ?   
        produtosCarrinho.map((e,index)=>
        <DisplayCarrinho 
        nome={e.nomeProduto} 
        qtd={JSON.parse(localStorage.getItem(e.idProduto)).qtd} 
        valor={e.valor} 
        img={e.imagem} 
        id={e.idProduto} 
        setValorTotal={setValorTotal}
        key={index}
        index={index}
        produtosCarrinho={produtosCarrinho}/>)
        : <>Nenhum item no carrinho</>
        )}
        <Flex>
            <div onClick={emptyCart}>Esvaziar carrinho</div>
            <Link to='/'>
                Continuar comprando
            </Link>
            <p>
            {valorTotal ? <>Total: R$ {valorTotal}</>: <>R$ 0.00</>}   
            </p>
            <button onClick={checkout}>Finalizar compra</button>
        </Flex>
        </>
    )
}

const Flex=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #f1f1f1;
    height: 30px;
    font-size: 14px;
    border-radius: 5px;
    box-shadow: 2px 4px 8px 4px #00000082;
    span{
        margin-left: 30px;
    }
    a{
        text-decoration: none;
        color:black
    }
`

const Quant = styled.span`
    position: absolute;
    top: 120px;
    right: 470px;
    font-family: Arial;
    color: #666;
`
const Unidade = styled.span`
    position: absolute;
    top: 120px;
    right: 140px;
    font-family: Arial;
    color: #666;
`
const SubTotal = styled.span`
    position: absolute;
    top: 120px;
    right: 40px;
    font-family: Arial;
    color: #666;
`
