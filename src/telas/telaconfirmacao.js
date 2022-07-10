import axios from "axios"
import styled from 'styled-components'
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function TelaConfirmacao(){
    const navigate=useNavigate()

    function clearInputs(){
        return {
            endereco:'',
            cidade:'',
            cep:''
        }
    }

    const [postForm,setPostForm]=useState(clearInputs)
    function handleForm(e){
        setPostForm({
            ...postForm,
            [e.target.name]:e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        let parser=[]
        const allKeys = Object.keys(localStorage)
        if(allKeys.length>0){
            parser=allKeys.map(key=>{
                return JSON.parse(localStorage.getItem(key))
            })
        }
        const postConfirmacao={
            endereco:postForm,
            produtos:parser
        }
        axios.post(`https://projeto13-back.herokuapp.com/confirmacao`,postConfirmacao)
        .then(()=>{
            alert("Seu pedido foi confirmado")
            localStorage.clear()
            navigate('/telainicial')

        })
        .catch(()=>alert("Erro processando seu pedido, tente novamente"))
    }
    return (
        <>
        <Form>
        <h1>Seu endereço</h1>
                <Form onSubmit={handleSubmit}>
                    <label htmlFor="endereco">Endereço</label>
                    <input type="text" placeholder="Rua das flores, 25" name="endereco" id='endereco' value={postForm.endereco} onChange={handleForm} required/>
                    <label htmlFor="cidade">Cidade-UF</label>
                    <input type="text" placeholder="São Paulo-SP" name="cidade" id='cidade' value={postForm.cidade} onChange={handleForm} required/>
                    <label htmlFor="cep">CEP</label>
                    <input type="text" placeholder="36000-000" name="cep" id='cep' value={postForm.cep} onChange={handleForm} required/>
                    <button type="submit">Confirmar o pedido</button>
                </Form>
        </Form>
        </>
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
    background-color: #37f331;
    color: #fff;
    margin: 10px 0 15px;
    padding: 10px;
    text-align: center;
    font-size: 18px;
    border-radius: 3px;
    border-bottom: 3px solid #28bc23;
    transition: background-color 300ms ease-in;
}
button:hover{
    background-color: #28bc23;
}
`