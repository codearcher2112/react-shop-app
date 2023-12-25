import { useState, createContext } from 'react';

export const BasketContext = createContext();

const BasketProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => setIsOpen(false);

    return (
        <BasketContext.Provider value={{ isOpen, setIsOpen, handleClose }}>
            {children}
        </BasketContext.Provider>
    )
}

export default BasketProvider;
