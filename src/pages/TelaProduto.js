import styled from "styled-components";

export default function TelaProduto(){
    return(

        <Container>
            <Grid1>
                <img src="https://images.tcdn.com.br/img/img_prod/790379/skate_longboard_owl_sports_monster_speed_357_1_20200629114137.jpg"></img>
            </Grid1>
            <Grid2>
                <Descricao>
                    SKATE LONGBOARD COMPLETO OWL SPORTS MONSTER SPEED
                </Descricao>
                <Preco>
                    R$ 589,90
                </Preco>

                <Quantidade>
                    <p>Quantidade</p>
                    <input type="button"  value="+"></input>
                    <input type="number" value="0"></input>
                    <input type="button" value="-"></input>
                </Quantidade>

                <BotoesConteiner>
                    <BotaoComprar>comprar</BotaoComprar>

                    <BotaoAddCarrinho >Adicionar ao carrinho</BotaoAddCarrinho>
                </BotoesConteiner>
                

            </Grid2>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    margin: 2rem;
    width: 100wh;
    div{
        
    }
`
const Grid1 = styled.div`
    box-sizing: border-box;
    img{
        width: 30rem;
        height: 30rem;

    }
`
const Grid2 = styled.div`
    box-sizing: border-box;
    width: 33%;
    img{
        width: 30rem;
        height: 30rem;

    }
`
const Descricao = styled.h1`
    margin: 2rem 0 0;
    font-size: 32px;
    font-weight: 400;
    box-sizing: border-box;
    font-family: source sans pro,sans-serif;
    color: #222;
    margin-bottom: 1rem;

`

const Preco = styled.p`
    font-size: 32px;
    box-sizing: border-box;
    margin-bottom: 2rem;
`
const Quantidade = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    padding: 0.5rem 1.25rem;
    border: 1px solid #ebebeb;
    width: fit-content;
    margin-left: 1rem;
    font-weight: 400;
    margin-bottom: 1rem;

    p{
        font-size: 16px;
        box-sizing: border-box;
        font-family: source sans pro,sans-serif;
        color: #222;
    }

    input{
        width: 2.5rem;
        text-align: center;
        justify-content: center;
        align-items: center;
        align-content: center;
    }
`
const BotoesConteiner = styled.div`
    display: flex;
    flex-direction: column;

`

const BotaoComprar = styled.button`
    font-weight: 400;
    text-align: center;
    padding: 1.25rem 0;
    text-transform: uppercase;
    font-size: 16px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #222;
    color: #f1aa00;
    margin-bottom: 1rem;
`
const BotaoAddCarrinho = styled.button`
    font-weight: 400;
    text-align: center;
    padding: 1.25rem 0;
    text-transform: uppercase;
    font-size: 16px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ebebeb;
    color: #707070;
`