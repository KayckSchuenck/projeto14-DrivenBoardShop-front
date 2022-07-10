import axios from 'axios';
import { useState,useEffect,useContext } from 'react/';
import styled from 'styled-components'
import { Link,useNavigate } from 'react-router-dom';
import DisplayCarrinho from '../components/displaycarrinho'
import { CartContext } from '../contexts/cartContext';
import { UserContext } from '../contexts/usercontext';

export default function TelaCarrinho(){
    const [produtosCarrinho,setProdutosCarrinho]=useState()
    const {cartItens,setCartItens}=useContext(CartContext)
    const {user}=useContext(UserContext)
    const navigate=useNavigate()
    let parser=[]
    let allKeys;

    function getLocalStorage(){
        const allKeys = Object.keys(localStorage)
        if(allKeys.length>0){
            parser=allKeys.map(key=>{
                return JSON.parse(localStorage.getItem(key))
            })
        }
    }

    function emptyCart(){
        localStorage.clear()
        navigate('/confirmacao')
    }

    function checkout(){
        if(user.token) navigate('/confirmacao')
        else navigate('/login-cadastro')
    }
   
    useEffect(()=>{
        getLocalStorage()
        const promise=axios.post(`https://projeto13-back.herokuapp.com/produtos`,parser)
        promise
        .then(elem=>{
            setProdutosCarrinho(elem.data.produtos)
            setCartItens({...cartItens,valor:[elem.data.valor]})
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
                <span>Qtde</span>
                <span>Unit</span>
                <span>Subtotal</span>
            </div>
        </Flex>
        {(produtosCarrinho 
        ?
        produtosCarrinho.map((e,index)=>
        <DisplayCarrinho nome={e.nome} qtd={parser[index].qtd} valor={e.valor} img={e.img} id={e.idProduto} key={index} storageKeys={allKeys[index]} produtosCarrinho={produtosCarrinho}/>
        )
        : <>Nenhum item no carrinho</>
        )}
        <Flex>
            <div onClick={emptyCart}>Esvaziar carrinho</div>
            <Link to='/telainicial'>
                Continuar comprando
            </Link>
            <p>
            {cartItens ? <>Total: R$ {cartItens.valor.reduce((total, entry) => entry.time + total, 0).toFixed(2)}</>: <>R$ 0.00</>}
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
a{
    text-decoration: none;
}
`
