import { useContext, } from 'react';
import { ProductContext, } from '../contexts/ProductContext.jsx';
import Product from '../components/Product.jsx';
import { motion } from 'framer-motion';

const Home = () => {
    const { products } = useContext(ProductContext);

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
            <section className="products">
                <div className="products__container !max-w-7xl container">
                    <div className="products__inner grid grid-cols-1 gap-5 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                        {products.map(product => {
                            return (
                                <Product key={product.id} product={product} />
                            )
                        })}
                    </div>
                </div>
            </section>
        </motion.main>
    )
}

export default Home;
