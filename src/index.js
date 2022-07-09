import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import { UserContext } from './contexts/usercontext';
import { CartContext } from './contexts/cartContext';
import { useState } from 'react';
import './assets/reset.css'
import './assets/style.css'
import TelaInicial from './pages/TelaInicial';
import TelaLoginCadastro from './authScreens/telalogincadastro';
import NavBar from './components/NavBar';
import TelaProduto from './pages/TelaProduto';

function App(){
    const [user,setUser]=useState()
    const [cartItems,setCartItems]=useState(Object.keys(localStorage).length)
    const [produtos, setProdutos] = useState([]);
    return (
        <UserContext.Provider value={{user,setUser, produtos, setProdutos}}>
            <CartContext.Provider value={{cartItems,setCartItems}}>
                <BrowserRouter>
                    <NavBar />
                    <Routes>
                        <Route path="/login-cadastro" element={<TelaLoginCadastro />} />
                        <Route path="/telainicial" element={<TelaInicial />} />
                        <Route path="/produtos/:idProduto" element={<TelaProduto />} />
                       {/* <Route path="/carrinho" element={<TelaCarrinho />} />
                        <Route path="confirmacao" element={<TelaConfirmacao />} />
                        <Route path="/categorias/:categoria" element={<TelaProduto />} /> */}
                    </Routes>
                </BrowserRouter>
            </CartContext.Provider>
        </UserContext.Provider>
    )
}

ReactDOM.render(
    <App />, document.querySelector('.root')
);
