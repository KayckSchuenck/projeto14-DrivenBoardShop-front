import styled from "styled-components";

export default function Produto({img, descricao, valor}) {
    return (
        <Container>
            <a href="#"> <img src={img} alt=""></img></a>

            <p><a href="#">{descricao}</a></p>

            <p>{valor}</p>
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
        height: 24rem;
        width: 12rem;
    }
        p{
            overflow: hidden;
            text-overflow: ellipsis;
            align-items: center;
        }
        a{
            overflow: hidden;
            text-overflow: ellipsis;
            align-items: center;
            cursor: pointer;
        }
`
