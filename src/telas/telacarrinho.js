import axios from 'axios';
import { useState,useEffect,useContext } from 'react/';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import DisplayCarrinho from '../components/displaycarrinho'
import { CartContext } from '../contexts/cartContext';

export default function TelaCarrinho(){
    const [produtosCarrinho,setProdutosCarrinho]=useState()
    const {cartItens,setCartItens}=useContext(CartContext)
    let toObject;
    useEffect(()=>{
        const allKeys = Object.keys(localStorage);
        if(allKeys.length>0){
            const toObject=allKeys.map(key=>{
                JSON.parse(localStorage.getItem(key))
            })
            const promise=axios.post(`https://projeto13-back.herokuapp.com/produtos/`,toObject)
            promise
            .then(elem=>{
                setProdutosCarrinho(elem.data.produtos)
                setCartItens({...cartItens,valor:[elem.data.valor]})
            }) 
            .catch(error=>
                alert(error.response.data)
            )
        }
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
        <DisplayCarrinho nome={e.nome} qtd={toObject[index].qtd} valor={e.valor} img={e.img} id={toObject[index].idProduto} key={index}/>
        )
        : <>Nenhum item no carrinho</>
        )}
        <Link to='/telainicial'>
            Continuar comprando
        </Link>
        Total:{`R$ ${cartItens.valor.reduce((total, entry) => entry.time + total, 0).toFixed(2)}`}
        <Link to='/confirmacao'>
            Finalizar compra
        </Link>
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
`