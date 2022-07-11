import axios from "axios";
import { useContext } from "react";
import styled from "styled-components"
import { UserContext } from "../contexts/usercontext";

export default function Header() {

    const { setProdutos} = useContext(UserContext);

    function retornarCategoria(tipo){

        const promise = axios.get(`https://back-projeto14.herokuapp.com/produtos/categorias/${tipo}`);
        promise.then((response)=>{
            setProdutos(response.data);
        })
        .catch((err)=>{
            alert("Erro ao retornar os produtos, tente novamente")
            console.log(err)
        })
    }

    return (
        <Container>
            <section onClick={()=>retornarCategoria('skates')}><img src="https://s2.glbimg.com/8HqPBA7mOv-iJmiRzENHYik9ueo=/0x0:4317x3454/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2019/q/Y/Abb9TySwiZFtnyJoPAfg/homem-skatista-cruiser.jpg" alt=""></img><p>Skate</p></section>
            <section onClick={()=>retornarCategoria('longs')}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSL4mwQNWAbrUDSnzLhmEAa0YKzdP_I5SDiVzW7beqnau-YUD1KQCGAK6JV2aEfq8Ancc&usqp=CAU" alt=""></img><p>LongBoard</p></section>
            <section onClick={()=>retornarCategoria('pecas')}><img src="https://http2.mlstatic.com/D_NQ_NP_766529-MLB48988477531_012022-O.jpg" alt=""></img><p>Peças</p></section>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100vw;
    position: relative;
    margin-bottom: 1rem;
    

    section{
        position: relative;
        img{
            box-sizing: border-box;
            width: 30vw;
            height: 40vh;
            
        }
        p{
            width: 100%;
            height: 100%;
            background: #22222299;
            color: #fff;
            font-size: 32px;
            top: 0;
            margin-block-end: 0;
            margin-block-start: 0;
            padding: 0.5rem 0;
            position: absolute;
            z-index: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            align-content: center;
            text-transform: uppercase;
            transition: 300ms ease;
        }
        p:hover{
            background-color: transparent;
            display: none;
            cursor: pointer;
        }
    }
`