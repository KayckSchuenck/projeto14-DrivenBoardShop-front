import styled from "styled-components";

export default function NavBar() {
    return (
        <Container>

            <figure>
                <img src="https://i.pinimg.com/originals/9c/07/6e/9c076e9b07ddd9569fbd503c32244a1d.png"></img>
            </figure>
            <a href="#">Skate</a>
            <a href="#">LongBoard</a>
            <a href="#">Peças</a>
            <a href="#">Cadastre-se</a>
            <a href="#">Login</a>

            <figure><ion-icon name="cart-outline"></ion-icon><span>0</span> <a href="#">Carrinho</a></figure>

        </Container>

    );
}

const Container = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    margin-top: 0.5rem;

    font-family: source sans pro,sans-serif;
    font-size: 1.4rem;
    color: #222;
    text-transform: uppercase;
    transition: 300ms ease;

    figure{
       img{
            border-radius: 50%;
            width: 5rem;
            height: 5rem;
            
       }
       span{
        background-color: #222;
        color: #fff;
        padding: 0 0.2rem;
       }
    }

    a{
        text-decoration: none;
        color: #222;
        cursor: pointer;
        padding: 1.5rem 2rem;
        transition: 300ms ease;
    }
    a:hover{
        background-color: #222;
        color:#fff;
    }
`