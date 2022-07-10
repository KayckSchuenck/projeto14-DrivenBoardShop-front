import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../contexts/cartContext";
import { UserContext } from "../contexts/usercontext";
import axios from "axios";


export default function NavBar() {
    const {cartItems}=useContext(CartContext)
    const {user}=useContext(UserContext)

    const { setProdutos} = useContext(UserContext);

    function retornarPecas(){

        const promise = axios.get("http://localhost:5000/produtos/pecas");

        promise.then((response)=>{
            setProdutos(response.data);
        })

        promise.catch((err)=>{
            console.log(err)
        })
    }
    function retornarLongs(){
        const promise = axios.get("http://localhost:5000/produtos/longs");

        promise.then((response)=>{
            setProdutos(response.data);
        })

        promise.catch((err)=>{
            console.log(err)
        })
    }
    function retornarSkate(){
        const promise = axios.get("http://localhost:5000/produtos/skate");

        promise.then((response)=>{
            setProdutos(response.data);
        })

        promise.catch((err)=>{
            console.log(err)
        })
    }
    function retornarProdutos(){
        const promise = axios.get("http://localhost:5000/produtos");

        promise.then((response)=>{
            setProdutos(response.data);
        })

        promise.catch((err)=>{
            console.log(err)
        })
    }

    return (
        <Container>
            <Link onClick={retornarProdutos} to='/telainicial'>
                <img src="https://i.pinimg.com/originals/9c/07/6e/9c076e9b07ddd9569fbd503c32244a1d.png" alt="logo chorao skate park"/>
            </Link >
            <Link onClick={retornarSkate} to='/telainicial'>Skate</Link>
            <Link onClick={retornarLongs} to='/telainicial'>LongBoard</Link>
            <Link onClick={retornarPecas} to='/telainicial'>Peças</Link>
            {(user 
            ?   <>
                `Olá ${user.name}`
                <Link to='/tela-inicial'>
                Logout
                </Link>
                </>
            :   <>
                <Link to='/login-cadastro'>Cadastre-se</Link>
                <Link to='/login-cadastro'>
                <ion-icon name="person-circle-outline"></ion-icon>
                Login
                </Link>
                </>
            )}
            <Flex>
            <ion-icon name="cart-outline"></ion-icon>
            <span>{cartItems}</span> 
            <Link to='/carrinho'>Carrinho</Link>
            </Flex>
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
        padding: 1.5rem 2rem;
        transition: 300ms ease;
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