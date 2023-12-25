import { useState, createContext } from 'react';

export const BasketItemContext = createContext();
const BasketItemProvider = ({ children }) => {
    const [basket, setBasket] = useState([]);

    const addToBasket = (product, id) => {
        const newItem = {
            ...product,
            amount: 1,
        }

        const basketItem = basket.find((item) => {
            return item.id === id;
        });

        if (basketItem) {
            const newBasket= [...basket].map((item) => {
               if (item.id === id) {
                   return { ...item, amount: basketItem.amount + 1 };
               } else {
                   return item;
               }
            });

            setBasket(newBasket)
        } else {
            setBasket([...basket, newItem]);
        }
    }

    return (
        <BasketItemContext.Provider value={{ basket, addToBasket }}>
            {children}
        </BasketItemContext.Provider>
    )
}

export default BasketItemProvider;
