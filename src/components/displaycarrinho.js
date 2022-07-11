import { useState,useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { CartContext } from '../contexts/cartContext'

export default function DisplayCarrinho({ nome,qtd,valor,img,index,id,produtosCarrinho,setValorTotal }){
    const [contador,setContador]=useState(qtd)
    const [subtotal,setSubtotal]=useState(valor*qtd)
    const {cartItems,setCartItems}=useContext(CartContext)
    const myRoute=`/produtos/${id}`

    function updateLocal(operacao){
        const MyItem=JSON.parse(localStorage.getItem(id))
        MyItem.qtd+=operacao
        const MyItemString=JSON.stringify(MyItem)
        localStorage.setItem(id,MyItemString)
    }

    function updateQuantities(operacao){
        setContador(contador+operacao)
        setSubtotal(valor*(contador+operacao))
        setValorTotal(prevState=>{
            prevState=[Number(prevState)]
            let newValue=[...prevState]
            newValue[index]=valor*(contador+operacao)
            console.log(newValue)
            return newValue.reduce((a, b) => a + b, 0).toFixed(2)
        })
    }

    function removeItem(){
        localStorage.removeItem(id)
        produtosCarrinho.splice(index,1)
        setCartItems(cartItems-1)
    }

    function decrementar(){
        if(contador>1) {
            updateQuantities(-1)
            updateLocal(-1)
        } else alert("A quantidade mínima é 1")
    }

    function incrementar(){
        if(contador<19) {
            updateQuantities(1)
            updateLocal(1)
        } else alert("Limite de itens")
    }
    return(
        <Flex>
            <Left>
                <Link to={myRoute}>
                    <img src={img}/> 
                    <span>{nome}</span>
                </Link>
            </Left>
            <Right>
                <Block>
                    <Flex>
                        <Caixinha onClick={decrementar}>-</Caixinha>
                        <div>{contador}</div>
                        <Caixinha onClick={incrementar}>+</Caixinha>
                        <div onClick={removeItem}>Remover Item</div>
                    </Flex>
                </Block>
                <span>{`R$ ${valor}`}</span>
                <span>{`R$ ${subtotal}`}</span>
            </Right>
        </Flex>
    )
}

const Flex=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50%;
    div:nth-child(even){
        border-radius: 5px;
        margin: 0 2px;
    }
    div:nth-child(4){
        margin-left:5px;
        cursor: pointer;
    }
`

const Left=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 150px;
    a{
        display: flex;
        align-items: center;
        justify-content: center;
        color: black;
        img{
            border: 1px solid #f1f1f1;
            border-radius: 5px;
            margin: 10px;
            max-width: 75px;
            max-height: 75px;
        }
       
    }

`
const Right=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 65vw;
    padding: 10px;
    span{
        margin-left: 5px;
    }

`
const Caixinha=styled.div`
    cursor: pointer;
    background-color: #f1f1f1;
    border-radius: 5px;
`
const Block=styled.div`
div{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.5rem .5rem;
        border: 1px solid #ebebeb;
    }
`