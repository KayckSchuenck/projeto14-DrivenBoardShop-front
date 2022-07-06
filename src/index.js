import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import { UserContext } from './contexts/usercontext';
import { useState } from 'react';
import './assets/reset.css'
import './assets/style.css'



function App(){
    const [user,setUser]=useState({})
    return (
        <UserContext.Provider value={{user,setUser}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/login-cadastro" element={<TelaLoginCadastro />} />
                    <Route path="/telainicial" element={<TelaInicial />} />
                    <Route path="/carrinho" element={<TelaCarrinho />} />
                    <Route path="confirmacao" element={<TelaConfirmacao />} />
                    <Route path="/produtos/:idProduto" element={<TelaProduto />} />
                    <Route path="/categorias/:categoria" element={<TelaProduto />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
}

ReactDOM.render(
    <App />, document.querySelector('.root')
  );
