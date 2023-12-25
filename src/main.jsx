import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import ProductProvider from './contexts/ProductContext.jsx';
import BasketProvider from './contexts/BasketContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BasketProvider>
            <ProductProvider>
                <App />
            </ProductProvider>
        </BasketProvider>
    </React.StrictMode>,
)
