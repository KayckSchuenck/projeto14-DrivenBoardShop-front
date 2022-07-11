import axios from "axios";
import { useEffect, useState,useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { CartContext } from "../contexts/cartContext";

export default function TelaProduto(){
    const {cartItems,setCartItems}=useContext(CartContext)
    const {idProduto} = useParams();

    const [qtd, setQtd] = useState(1);
    const [produto, setProduto] = useState({});

    const Item = {
        idProduto:parseInt(idProduto),
        qtd
    }

    function addItemCarrinho(){

        const keys = Object.keys(localStorage);
       
        const chaveExiste = keys.find((key)=> key ===`${idProduto}`);
        
        if(chaveExiste){
            const ItemSalvoCarrinho =JSON.parse(localStorage.getItem(`${idProduto}`))
            const itemAtualizado = {
                idProduto:parseInt(idProduto),
                qtd:ItemSalvoCarrinho.qtd+qtd
            }
            
            localStorage.setItem(`${idProduto}`, JSON.stringify(itemAtualizado));
            return;
        }

        localStorage.setItem(`${idProduto}`, JSON.stringify(Item));
        setCartItems(cartItems+1)
    }


    useEffect(()=>{

        const promise = axios.get(`https://back-projeto14.herokuapp.com/produtos/${idProduto}`);

        promise.then((response)=>{
            setProduto(response.data);
        })

        promise.catch((err)=>{
            console.log(err);
        })

    },[])


    return(
        <Container>
            <Grid1>
                <img src={produto.imagem} alt="imagem produto"></img>
            </Grid1>
            <Grid2>
                <Descricao>
                    {produto.descricao}
                </Descricao>
                <Preco>
                    R$ {produto.valor}
                </Preco>
                
                <Quantidade>
                    <p>Quantidade</p>
                    <input type="button" onClick={()=>{qtd > 1?setQtd(qtd-1):setQtd(qtd) }}  value="-"></input>
                    <input type="number" min={1} onChange={(e)=>{setQtd(parseInt(e.target.value))}} value={qtd}></input>
                    <input type="button" onClick={()=>{setQtd(qtd+1)}}   value="+"></input>
                </Quantidade>

                <BotoesConteiner>
                    <BotaoComprar onClick={addItemCarrinho} >Adicionar ao carrinho</BotaoComprar>
                </BotoesConteiner>
                

            </Grid2>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10vw;
    height: 50vh;
`
const Grid1 = styled.div`
    img{
        width: 33vw;
        height: 33vh;
    }
    margin:10px;
    width: 33vw;
`
const Grid2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-content: space-between;
    width: 33vw;
    margin: 10px;
    img{
        width: 33vw;
        height: 33vh;
        
    }
`
const Descricao = styled.h1`
    margin: 2rem 0 0;
    font-size: 32px;
    font-weight: 400;
    box-sizing: border-box;
    font-family: source sans pro,sans-serif;
    color: #222;
    margin-bottom: 1rem;

`

const Preco = styled.p`
    font-size: 32px;
    box-sizing: border-box;
    margin-bottom: 2rem;
`
const Quantidade = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    padding: 0.5rem 1rem;
    border: 1px solid #ebebeb;
    margin-bottom: 10px;    
    width: 25vw;

    p{
        font-size: 16px;
        color: #222;
        margin-right: 10px;
    }

    input{
        width: 4vw;
        text-align: center;
        justify-content: center;
        align-items: center;
        align-content: center;
    }
    input[type=number]{
        border: 1px solid gray;
        border-radius: 5px;
        height:24px
    }
    input[type=number]::-webkit-inner-spin-button { 
        -webkit-appearance: none;
    }
`
const BotoesConteiner = styled.div`
    display: flex;
    flex-direction: column;

`

const BotaoComprar = styled.button`
    font-weight: 400;
    text-align: center;
    padding: 1.25rem 0;
    text-transform: uppercase;
    font-size: 16px;
    width: 25vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #222;
    color: #f1aa00;
    margin-bottom: 1rem;
`