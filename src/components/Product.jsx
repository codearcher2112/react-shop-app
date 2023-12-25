// import { useContext } from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { id, image, category, title, price } = product;

    return (
        <div className="product-item shadow-lg">
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
                <button type="button" className="product-item__button uppercase">
                    Add to cart
                </button>

                <Link to={`/product/${id}`}>
                    Learn More
                </Link>
            </div>
        </div>
    )
}

export default Product;
