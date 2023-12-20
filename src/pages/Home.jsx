import { useContext, } from 'react';
import { ProductContext, } from '../contexts/ProductContext.jsx';

const Home = () => {
    const { products } = useContext(ProductContext);
    console.log(products);

    return (
        <main className="home">
            Home Page
        </main>
    )
}

export default Home;
