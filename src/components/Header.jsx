import Headroom from 'react-headroom/src';

const Header = () => {
    return (
        <Headroom>
            <header className="header bg-blue-100">
                <div className="header__container !max-w-7xl container">
                    <div className="header__inner py-4">
                        Header Component
                    </div>
                </div>
            </header>
        </Headroom>
    )
}

export default Header;
