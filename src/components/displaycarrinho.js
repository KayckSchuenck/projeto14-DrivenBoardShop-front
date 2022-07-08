import { useState,useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { CartContext } from '../contexts/cartContext'

export default function DisplayCarrinho(props){
    const {nome,qtd,valor,img,key}=props
    const {setCartItens}=useContext(CartContext)
    const [contador,setContador]=useState(qtd)
    const [subtotal,setSubtotal]=useState(valor*qtd)
    const myRoute=`/produtos/${props.id}`
    function decrementar(){
        if(contador>0) {
            setContador(contador-1)
            setSubtotal(valor*(contador-1))
            setCartItens(prevState=>{
                let newValue=[...prevState.valor]
                newValue[key]=valor*(contador-1)
                return {...prevState,valor:newValue}
            })
        }
    }
    function incrementar(){
        if(contador<19) {
            setContador(contador+1)
            setSubtotal(valor*(contador+1))
            setCartItens(prevState=>{
                let newValue=[...prevState.valor]
                newValue[key]=valor*(contador+1)
                return {...prevState,valor:newValue}
            })
        } else alert("Limite de itens")
    }
    return(
        <Flex>
            <Left>
            <Link to={myRoute}>
                <img src={img}/> 
                {nome}
            </Link>
            </Left>
            <Right>
                <Caixinha onClick={decrementar}>-</Caixinha>
                {contador}
                <Caixinha onClick={incrementar}>+</Caixinha>
                {`R$ ${valor}`}
                {`R$ ${subtotal}`}
            </Right>
        </Flex>
    )
}

const Flex=styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`
const Caixinha=styled.div`
height: 10px;
width: 10px;
background-color: #f1f1f1;
`