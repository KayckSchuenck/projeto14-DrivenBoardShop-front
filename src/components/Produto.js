import styled from "styled-components";

export default function Produto({img, descricao, valor}) {
    return (
        <Container>
            <img src={img} alt="imagem do produto"></img>

            <Descricao>{descricao}</Descricao>

            <Valor>R$ {valor.toFixed(2)}</Valor>
        </Container>
    )
}

const Container = styled.div`
    height: 22rem;
    width: 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    transition: .5s ease;
    will-change: opacity;

    &:hover {
        background-color: #e9e9e9;
        
    }

 
    img{
        box-sizing: border-box;
        height: 12rem
    }
    
`
const Valor = styled.p`

    overflow: hidden;
    text-overflow: ellipsis;
    align-items: center;
    font-weight: 700;
    
    color: #222;
`
const Descricao = styled.p`
    overflow: hidden;
    text-overflow: ellipsis;
    align-items: center;
    font-weight: 400;
    height: 6rem;
    color: #999;
`
