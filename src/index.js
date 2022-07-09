import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import { UserContext } from './contexts/usercontext';
import { CartContext } from './contexts/cartContext';
import { useState } from 'react';
import './assets/reset.css'
import './assets/style.css'
import TelaLoginCadastro from './telas/telalogincadastro';
import TelaCarrinho from './telas/telacarrinho'
import TelaConfirmacao from './telas/telaconfirmacao';
import NavBar from './components/NavBar';

function App(){
    const [user,setUser]=useState()
    const [cartItems,setCartItens]=useState({itens:0})
    return (
        <UserContext.Provider value={{user,setUser}}>
            <CartContext.Provider value={{cartItems,setCartItens}}>
                <BrowserRouter>
                    <NavBar />
                    <Routes>
                        <Route path="/login-cadastro" element={<TelaLoginCadastro />} />
                        {/* <Route path="/telainicial" element={<TelaInicial />} />
                        <Route path="/produtos/:idProduto" element={<TelaProduto />} />
                        <Route path="/categorias/:categoria" element={<TelaProduto />} /> */}
                        <Route path="/carrinho" element={<TelaCarrinho />} />
                        <Route path="/confirmacao" element={<TelaConfirmacao />} />
                    </Routes>
                </BrowserRouter>
            </CartContext.Provider>
        </UserContext.Provider>
    )
}

ReactDOM.render(
    <App />, document.querySelector('.root')
  );
