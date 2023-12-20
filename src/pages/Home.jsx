import { useContext, } from 'react';
import { ProductContext, } from '../contexts/ProductContext.jsx';
import { motion } from 'framer-motion';

const Home = () => {
    const { products } = useContext(ProductContext);
    console.log(products);

    return (
        <motion.main
            className="home"
            initial={{
                opacity: 0
            }}
            animate={{
                opacity: 1
            }}
            exit={{
                opacity: 0
            }}
        >
            Home Page
        </motion.main>
    )
}

export default Home;
