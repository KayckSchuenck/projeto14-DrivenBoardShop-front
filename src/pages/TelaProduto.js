import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

export default function TelaProduto(){

    const {idProduto} = useParams();

    const [qtd, setQtd] = useState(1);
    const [produto, setProduto] = useState({});

    const Item = {
        idProduto,
        qtd
    }

    function addItemCarrinho(){

        const keys = Object.keys(localStorage);
       
        const chaveExiste = keys.find((key)=> key ===`${idProduto}`);
        
        if(chaveExiste){
            const ItemSalvoCarrinho =JSON.parse(localStorage.getItem(`${idProduto}`))
            const itemAtualizado = {
                idProduto,
                qtd:ItemSalvoCarrinho.qtd+qtd
            }
            
            localStorage.setItem(`${idProduto}`, JSON.stringify(itemAtualizado));
            return;
        }

        localStorage.setItem(`${idProduto}`, JSON.stringify(Item));
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
                    <input type="button" onClick={()=>{setQtd(qtd+1)}}   value="+"></input>
                    <input type="number" min={1} onChange={(e)=>{setQtd(parseInt(e.target.value))}} value={qtd}></input>
                    <input type="button" onClick={()=>{qtd > 1?setQtd(qtd-1):setQtd(qtd) }}  value="-"></input>
                </Quantidade>

                <BotoesConteiner>
                    <BotaoComprar >comprar</BotaoComprar>

                    <BotaoAddCarrinho onClick={addItemCarrinho} >Adicionar ao carrinho</BotaoAddCarrinho>
                </BotoesConteiner>
                

            </Grid2>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    margin: 2rem;
    width: 100wh;
    div{
        
    }
`
const Grid1 = styled.div`
    box-sizing: border-box;
    img{
        width: 30rem;
        height: 30rem;

    }
`
const Grid2 = styled.div`
    box-sizing: border-box;
    width: 33%;
    img{
        width: 30rem;
        height: 30rem;

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
    padding: 0.5rem 1.25rem;
    border: 1px solid #ebebeb;
    width: fit-content;
    margin-left: 1rem;
    font-weight: 400;
    margin-bottom: 1rem;

    p{
        font-size: 16px;
        box-sizing: border-box;
        font-family: source sans pro,sans-serif;
        color: #222;
    }

    input{
        width: 2.5rem;
        text-align: center;
        justify-content: center;
        align-items: center;
        align-content: center;
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
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #222;
    color: #f1aa00;
    margin-bottom: 1rem;
`
const BotaoAddCarrinho = styled.button`
    font-weight: 400;
    text-align: center;
    padding: 1.25rem 0;
    text-transform: uppercase;
    font-size: 16px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ebebeb;
    color: #707070;
`