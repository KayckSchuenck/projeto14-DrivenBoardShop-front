import { Link } from "react-router-dom";
import { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../contexts/usercontext";
import Produto from "./Produto";

export default function Main() {
    const {produtos}=useContext(UserContext)
    const rato=['camundongo','hamster','ratazana']
    console.log(produtos)
    return (
        // <Container>
        //     { produtos ?
        //     produtos.map(produto=>{
        //     <Link key={produto.idProduto} to={`/produtos/${produto.idProduto}`}>
        //         <Produto img={produto.imagem} descricao={produto.descricao} valor={produto.valor}/>
        //     </Link>
        //     }):
        //     <h1>Loading</h1>}
        // </Container>
        
        <div className="rato">
            {produtos?
            rato.map((animal)=>{
                console.log(animal)
            })
        
            : <>Loading</>}
        
        </div>
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