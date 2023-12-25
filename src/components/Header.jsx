import Headroom from 'react-headroom/src';
import { useContext } from 'react';
import { BasketContext } from '../contexts/BasketContext.jsx';
import { FaBagShopping } from 'react-icons/fa6';

const Header = () => {
    const { isOpen, setIsOpen } = useContext(BasketContext);

    return (
        <Headroom>
            <header className="header bg-blue-100">
                <div className="header__container !max-w-7xl container">
                    <div className="header__inner py-4">
                        <div>Header Component</div>

                        <button type="button" onClick={() => setIsOpen(!isOpen)}>
                            <FaBagShopping className='text-2xl' />
                        </button>
                    </div>
                </div>
            </header>
        </Headroom>
    )
}

export default Header;
