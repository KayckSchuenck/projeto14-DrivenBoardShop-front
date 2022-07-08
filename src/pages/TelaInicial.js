import styled from "styled-components";
import NavBar from "../components/NavBar.js";
import Header from "../components/Header.js"
import Main from "../components/Main.js";


export default function TelaInicial(){

    return(
        <Container>

            <Header />
            <Main />
        
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`