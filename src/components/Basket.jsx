import { useContext } from 'react';
import { BasketContext } from '../contexts/BasketContext.jsx';
// import { Link } from 'react-router-dom';
// import BasketItem from './BasketItem.jsx';
import { CgClose } from 'react-icons/cg';

const Basket = () => {
    const { isOpen, handleClose } = useContext(BasketContext);

    return (
        <div className={`basket fixed top-0 z-20 w-full h-full bg-white shadow-2xl transition-all duration-500 ease-in-out md:max-w-lg ${isOpen ? 'right-0' : '-right-full'}`}>
            <div className="flex justify-between items-center gap-x-3 py-4">
                <div className="">
                    Shopping Basket - (0) products
                </div>

                <button type="button" className="" onClick={handleClose}>
                    <CgClose className='text-5xl'/>
                </button>
            </div>
        </div>
    )
}

export default Basket;
