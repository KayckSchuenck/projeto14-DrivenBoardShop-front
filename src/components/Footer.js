import styled from "styled-components";

export default function Footer(){

    return(
        <Container>
<<<<<<< HEAD
            <a href="#">Feito por Kayck e Josimar</a>
            <a href="https://github.com/KayckSchuenck" target="_blank">Sobre nos</a>
            <a href="https://page.driven.com.br/inscricoes?utm_source=site" target="_blank">fale conosco (00) 0 0000-0000</a>
            <a href="https://www.driven.com.br/" target="_blank">BootCamp Driven FullStack</a>
=======
            <a href="https://github.com/KayckSchuenck" target="_blank" rel="noopener noreferrer">Kayck Schuenck</a>
            <a href="https://github.com/perseu120" target="_blank" rel="noopener noreferrer">Perseu Josimar</a>
            <a href="https://page.driven.com.br/inscricoes?utm_source=site" target="_blank" rel="noopener noreferrer">Fale conosco (00) 9 0000-0000</a>
            <a href="https://www.driven.com.br/" target="_blank" rel="noopener noreferrer">BootCamp Driven FullStack</a>
>>>>>>> 91b66b984546a837872163fda52057b7a7dc4977
        </Container>
    );
}

const Container = styled.footer`
    display: flex;
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
<<<<<<< HEAD
    a:visited {
    color: #222;
}
=======
    a{
        color:#222;
    }
>>>>>>> 91b66b984546a837872163fda52057b7a7dc4977
`