import { useState,useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { CartContext } from '../contexts/cartContext'

export default function DisplayCarrinho({ nome,qtd,valor,img,key,storageKeys,id,produtosCarrinho }){
    const {setCartItens}=useContext(CartContext)
    const [contador,setContador]=useState(qtd)
    const [subtotal,setSubtotal]=useState(valor*qtd)
    const myRoute=`/produtos/${id}`

    function updateLocal(operacao){
        const MyItem=localStorage.getItem(storageKeys)
        JSON.parse(MyItem)
        MyItem.qtd+=operacao
        const MyItemString=JSON.stringify(MyItem)
        localStorage.setItem(storageKeys,MyItemString)
    }

    function updateQuantities(operacao){
        setContador(contador+operacao)
        setSubtotal(valor*(contador+operacao))
        setCartItens(prevState=>{
            let newValue=[...prevState.valor]
            newValue[key]=valor*(contador+operacao)
            return {...prevState,valor:newValue}
        })
    }

    function removeItem(){
        localStorage.removeItem(storageKeys)
        produtosCarrinho.splice(key,1)
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
                <div>
                    <Flex>
                        <Caixinha onClick={decrementar}>-</Caixinha>
                        {contador}
                        <Caixinha onClick={incrementar}>+</Caixinha>
                    </Flex>
                    <div onClick={removeItem}>Remover Item</div>
                </div>
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
const Left=styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`
const Right=styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`