import { Link } from "react-router-dom";
import styled from "styled-components";
import Produto from "./Produto";

export default function Main({produtos}) {
    return (
        <Container>
            { produtos ?
            produtos.map(produto=>{
            <Link key={produto.idProduto} to={`/produtos/${produto.idProduto}`}><Produto img={produto.imagem} descricao={produto.descricao} valor={produto.valor}/></Link>}):
            <h1>Loading</h1>}
        </Container>
    )
}

const Container = styled.main`
    overflow: hidden;
    flex-wrap: wrap;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-around;


    a{
        img{
            max-width: 100%;
            max-height: 100%;
            transition: .5s ease;
            will-change: opacity;
        }
    }
`