import { useState, useContext, } from 'react';
import { ProductContext, } from '../contexts/ProductContext.jsx';
import Product from '../components/Product.jsx';
import FilterButtons from '../components/FilterButtons.jsx';
import { motion, AnimatePresence } from 'framer-motion';

const Home = () => {
    const { products } = useContext(ProductContext);

    const [activeCategory, setActiveCategory] = useState(null);

    const handleCategoryClick = (category) => {
        setActiveCategory(category === 'all' ? null : category.toLowerCase());
    };

    const filteredProducts = activeCategory
        ? products.filter(product => product.category.toLowerCase() === activeCategory)
        : products;

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
            <section className="products min-h-screen py-20">
                <div className="products__container !max-w-7xl container">
                    <FilterButtons active={ activeCategory } handleClick={ handleCategoryClick } />

                    <div className="products__inner grid grid-cols-1 gap-5 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                        <AnimatePresence>
                            {filteredProducts.map(product => {
                                return (
                                    <Product key={product.id} product={product} />
                                )
                            })}
                        </AnimatePresence>
                    </div>
                </div>
            </section>
        </motion.main>
    )
}

export default Home;
