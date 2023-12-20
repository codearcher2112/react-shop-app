import { motion } from 'framer-motion';

const ProductDetails = () => {
    return (
        <motion.div
            className="product-details"
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
            Product Details Page
        </motion.div>
    )
}

export default ProductDetails;
