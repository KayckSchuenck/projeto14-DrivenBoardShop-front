import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { useState,useContext } from "react"
import axios from "axios"
import { UserContext } from '../contexts/usercontext';

export default function TelaLoginCadastro() {
    const navigate=useNavigate()
    const {setUser} = useContext(UserContext);
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    function clearLoginInputs(){
        setEmail("")
        setPassword("")
    }

    function clearSignUpInputs(){
        return {
            name:'',
            email:'',
            password:''
        }
    }

    const [postForm,setPostForm]=useState(clearSignUpInputs)
    function handleForm(e){
        setPostForm({
            ...postForm,
            [e.target.name]:e.target.value
        })
    }

    function handleLoginSubmit(e){
        e.preventDefault()
        const loginPost={
            email,
            password
        }
        const promise=axios.post("https://back-projeto14.herokuapp.com/login",loginPost)
        promise.then((element)=>{
            const {name,userId,token}=element.data;
            setUser({
            name,
            userId,
            token
            })
            navigate('/')
        })
        promise.catch(erro=>{
            alert(`Erro ${erro.response.status}, tente novamente`);
            clearLoginInputs()
        })
    }

    function handleSignUpSubmit(e){
        e.preventDefault()
        const promise=axios.post("https://back-projeto14.herokuapp.com/sign-up",postForm)
        setPostForm(clearSignUpInputs)
        promise.then(()=>{
            alert("Conta criada com sucesso")
        })
        promise.catch(erro=>{
            alert(`${erro.response.data.message}`);
        })
    }

    return (
        <Container>
            <Left>
                <h1>Já tenho cadastro</h1>
                <Form onSubmit={handleLoginSubmit}>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Seuemail@123.com" id='email1' value={email} onChange={e=>setEmail(e.target.value)} required/>
                    <label htmlFor="password">Senha</label>
                    <input type="password" placeholder="*****" id='password1' value={password} onChange={e=>setPassword(e.target.value)} required/>
                    <button type="submit">Entrar</button>
                </Form>
            </Left>
            <Right>
                <h1>Cadastre-se</h1>
                <Form onSubmit={handleSignUpSubmit}>
                    <label htmlFor="name">Nome</label>
                    <input type="text" placeholder="Seu nome" name="name" id='name' value={postForm.name} onChange={handleForm} required/>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Seuemail@123.com" name="email" id='email2' value={postForm.email} onChange={handleForm} required/>
                    <label htmlFor="password">Senha</label>
                    <input type="password" placeholder="*****" name="password" id='password2' value={postForm.password} onChange={handleForm} required/>
                    <button type="submit">Cadastrar</button>
                </Form>
            </Right>
        </Container>
    )
}

const Form=styled.form`
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 325px;
label{
    width: 100%;
    text-align: left;
    font-weight: 400;
}
input{
    width: 100%;
    height: 50px;
    margin: 5px 0 30px;
    border-radius: 5px;
    border: 1px solid #c3c7c3;
    padding:10px
}
button{
    width: 100%;
    background-color: rgb(45,45,45);
    color: #fff;
    margin: 10px 0 15px;
    padding: 10px;
    text-align: center;
    font-size: 18px;
    border-radius: 3px;
    border-bottom: 3px solid black;
    transition: background-color 300ms ease-in;
}
button:hover{
    background-color: black;
}
`
const Container=styled.div`
background-color: #fafafa;
display: flex;
align-items: center;
justify-content: space-between;
padding: 2vh 50px;
margin-top: 20px;
margin-bottom: 10px;
border:2px solid #c3c7c3;      
box-shadow: 2px 4px 8px 4px #00000082;
border-radius: 5px;
font-size: 18px;
@media(max-width: 800px) {
    flex-direction: column;
  }
`
const Left=styled.div`
height: 420px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
padding-right: calc(50% - 325px);
border-right:1px dashed grey;
@media(max-width: 800px) {
    border-bottom:1px dashed grey;
    border-right:none;
    height: 400px;
  }
`
const Right=styled.div`
height: 420px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
@media(max-width: 800px) {
    margin-top: 42px;
  }
`