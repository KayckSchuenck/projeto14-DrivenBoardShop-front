import styled from "styled-components";
import Header from "../components/Header.js"
import Main from "../components/Main.js";
import { UserContext } from "../contexts/usercontext.js";
import { useContext, useEffect } from "react";
import axios from "axios";


export default function TelaInicial(){

    const {produtos, setProdutos} = useContext(UserContext);

    useEffect(()=>{

        const promise = axios.get("http://localhost:5000/produtos");

        promise.then((response)=>{
            setProdutos(response.data);
        })

        promise.catch((err)=>{
            console.log(err)
        })

    },[]);

    return(
        <Container>

            <Header />
            <Main produtos={produtos} />
            <footer>feito por Kayck e Josimar</footer>
        
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`