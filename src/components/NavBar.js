import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../contexts/cartContext";
import { UserContext } from "../contexts/usercontext";

export default function NavBar() {
    const {cartItems}=useContext(CartContext)
    const {user}=useContext(UserContext)
    return (
        <Container>
            <Link to='telainicial'>
                <img src="https://i.pinimg.com/originals/9c/07/6e/9c076e9b07ddd9569fbd503c32244a1d.png"/>
            </Link >
            <Link to='/produtos/skates'>Skate</Link>
            <Link to='/produtos/longs'>LongBoard</Link>
            <Link to='/produtos/pecas'>Peças</Link>
            {(user 
            ?   <>
                `Olá ${user.name.split(' ',1)}`
                <Link to='/tela-inicial'>
                <ion-icon name="person-circle-outline"></ion-icon>
                Logout
                </Link>
                </>
            :   <>
                <Link to='/login-cadastro'>
                <ion-icon name="person-circle-outline"></ion-icon>
                Login/Cadastro
                </Link>
                </>
            )}
            <Flex>
            <ion-icon name="cart-outline"></ion-icon>
            <span>{cartItems.itens}</span> 
            <Link to='/carrinho'>Carrinho</Link>
            </Flex>
        </Container>

    );
}

const Container = styled.nav`
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;    
    margin-top: 0.5rem;
    font-family: 'Source Sans Pro',sans-serif;
    font-size: 1.2rem;
    color: #222;
    text-transform: uppercase;
    transition: 300ms ease;
    span{
        background-color: #222;
        color: #fff;
        padding: 0 0.2rem;
        margin-right: 2px;
       }

    img{
            border-radius: 50%;
            width: 5rem;
            height: 5rem;
       }

    a{
        text-decoration: none;
        color: #222;
        cursor: pointer;
        padding: 1rem 1.2rem;
        transition: 300ms ease;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    a:first-child{
        padding: 5px 0;
    }
    a:hover{
        background-color: #222;
        color:#fff;
    }
    @media (max-width:800px){
        a{
            padding: 0.2rem 0.2rem 0.2rem 0.2rem;
            font-size:1.1rem;
        }
        img{
            width: 50px;
            height: 50px;
        }
    }
`
const Flex=styled.div`
display: flex;
justify-content: center;
align-items: center;
`