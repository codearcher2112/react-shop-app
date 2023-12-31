import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BasketItemContext } from '../contexts/BasketItemContext.jsx';
import { motion } from 'framer-motion';

const Product = ({ product }) => {
    const { id, image, category, title, price } = product;

    const { addToBasket } = useContext(BasketItemContext);

    return (
        <motion.div
            className="product-item shadow-lg"
            key={id}
            layout
            initial={{
                opacity: 0
            }}
            animate={{
                opacity: 1
            }}
            exit={{
                opacity: 0
            }}
            transition={{ duration: 0.4 }}
        >
            <div className="product-item__image-wrapepr w-full aspect-square">
                <img className="product-item__image block w-full h-full object-contain"
                     src={image}
                     alt={`${title} - ${category}`}
                />
            </div>

            <div className="product-item__info">
                <div className="product-item__category">
                    {category}
                </div>

                <h2 className="product-item__title">
                    <Link to={`/product/${id}`}>
                        {title}
                    </Link>
                </h2>

                <div className="product-item__price">
                    $ {price}
                </div>
            </div>

            <div className="product-item__buttons-warpper">
                <button
                    type="button"
                    className="product-item__button uppercase"
                    onClick={() => addToBasket(product, id)}
                >
                    Add to cart
                </button>

                <Link to={`/product/${id}`}>
                    Learn More
                </Link>
            </div>
        </motion.div>
    )
}

export default Product;
