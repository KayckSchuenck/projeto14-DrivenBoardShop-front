import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import { UserContext } from './contexts/usercontext';
import { CartContext } from './contexts/cartContext';
import { useState } from 'react';
import './assets/reset.css'
import './assets/style.css'
import TelaInicial from './telas/TelaInicial';
import TelaLoginCadastro from './telas/telalogincadastro';
import TelaCarrinho from './telas/telacarrinho'
import TelaConfirmacao from './telas/telaconfirmacao';
import NavBar from './components/NavBar';
import TelaProduto from './telas/TelaProduto';
import Footer from './components/Footer';

function App(){
    const [user,setUser]=useState()
    const [cartItems,setCartItems]=useState({itens:0})
    const [produtos, setProdutos] = useState();
    return (
        <UserContext.Provider value={{user,setUser,produtos,setProdutos}}>
            <CartContext.Provider value={{cartItems,setCartItems}}>
                <BrowserRouter>
                    <NavBar />
                    <Routes>
                        <Route path="/login-cadastro" element={<TelaLoginCadastro />} />
                        <Route path="/" element={<TelaInicial />} />
                        <Route path="/produtos/:idProduto" element={<TelaProduto />} />
                        <Route path="/carrinho" element={<TelaCarrinho />} />
                        <Route path="/confirmacao" element={<TelaConfirmacao />} />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </CartContext.Provider>
        </UserContext.Provider>
    )
}

ReactDOM.render(
    <App />, document.querySelector('.root')
);
