import styled from "styled-components";

export default function TelaProduto(){
    return(

        <Container>
            <Grid1>
                <img src="https://images.tcdn.com.br/img/img_prod/790379/skate_longboard_owl_sports_monster_speed_357_1_20200629114137.jpg"></img>
            </Grid1>
            <Grid2>
                <p>
                    SKATE LONGBOARD COMPLETO OWL SPORTS MONSTER SPEED
                </p>
                <p>
                    R$ 589,90
                </p>

                <div>
                    <p>quantidade</p>
                    <input type="button"  value="+"></input>
                    <input type="number" value="0"></input>
                    <input type="button" value="-"></input>
                </div>

                <button>comprar</button>
                <br/>
                <br/>
                <button >Adicionar ao carrinho</button>

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
    img{
        width: 30rem;
        height: 30rem;

    }
`