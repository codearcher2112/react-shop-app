import { useContext, } from 'react';
import { ProductContext, } from '../contexts/ProductContext.jsx';
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
                                <div className="product-item bg-amber-100" key={product.id}>
                                    <div className="product-item__image-wrapepr w-full aspect-square">
                                        <img className="product-item__image block w-full h-full object-contain" src={product.image} alt=""/>
                                    </div>

                                    <div className="product-item__info">
                                        {product.title}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </motion.main>
    )
}

export default Home;
