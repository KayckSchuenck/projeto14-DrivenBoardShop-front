import styled from "styled-components";
import Produto from "./Produto";

export default function Main() {

    return (
        <Container>
            <Produto img={'https://images.tcdn.com.br/img/img_prod/789131/shape_skate_maple_vertical_pro_tie_dye_skull_8_12_253_1_08fba829ef4501751578834b7397f125.jpg'} descricao={"Shape de Maple Skate Pills"} valor={"R$ 229,90"}/>
            <Produto img={'https://images.tcdn.com.br/img/img_prod/789131/shape_skate_maple_vertical_pro_tie_dye_skull_8_12_253_1_08fba829ef4501751578834b7397f125.jpg'} descricao={"Shape de Maple Skate Pills"} valor={"R$ 229,90"}/>
            <Produto img={'https://images.tcdn.com.br/img/img_prod/789131/shape_skate_maple_vertical_pro_tie_dye_skull_8_12_253_1_08fba829ef4501751578834b7397f125.jpg'} descricao={"Shape de Maple Skate Pills"} valor={"R$ 229,90"}/>
            <Produto img={'https://images.tcdn.com.br/img/img_prod/789131/shape_skate_maple_vertical_pro_tie_dye_skull_8_12_253_1_08fba829ef4501751578834b7397f125.jpg'} descricao={"Shape de Maple Skate Pills"} valor={"R$ 229,90"}/>
            <Produto img={'https://images.tcdn.com.br/img/img_prod/789131/shape_skate_maple_vertical_pro_tie_dye_skull_8_12_253_1_08fba829ef4501751578834b7397f125.jpg'} descricao={"Shape de Maple Skate Pills"} valor={"R$ 229,90"}/>
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