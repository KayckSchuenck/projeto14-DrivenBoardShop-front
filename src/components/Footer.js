import styled from "styled-components";

export default function Footer(){
    return(
        <Container>
            <a href="https://github.com/KayckSchuenck">Feito por Kayck</a>
            <a href="https://github.com/perseu120">Feito por Josimar</a>
            <a href="https://www.driven.com.br/sobre-nos">Sobre nos</a>
            <a href="https://page.driven.com.br/inscricoes?utm_source=site">Fale conosco (xx) x xxxx-xxxxx</a>
            <a href="https://www.driven.com.br/">BootCamp Driven FullStack</a>
        </Container>
    );
}

const Container = styled.footer`
    display: flex;
    width: 100vw;
    margin-top: 0.5rem;
    height: 80px;
    justify-content: space-around;
    align-items: center;    
    margin-top: 0.5rem;
    font-family: 'Source Sans Pro',sans-serif;
    font-size: 1.2rem;
    color: #222;
    text-transform: uppercase;
    background-color: rgb(235, 235, 235);
`