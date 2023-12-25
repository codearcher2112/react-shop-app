import { Link } from 'react-router-dom';

const BasketItem = ({ item }) => {
    const { id, title, image, price, amount } = item;
    return (
        <div className="basket__item">
            <div className="basket__item-inner-wrapper flex items-center gap-x-4">
                <div className="basket__item-image-wrapper w-20">
                    <Link className="basket__item-image-link block w-full h-full" to={`/product/${id}`}>
                        <img className="basket-item__image block w-full h-full object-contain"
                             src={image}
                             alt={title}
                        />
                    </Link>
                </div>

                <div className="basket__item-info grow">
                    <div className="basket__item-title-wrapper">
                        <h3 className="basket__item-title">
                            <Link className="basket__item-title-link" to={`/product/${id}`}>
                                {title}
                            </Link>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BasketItem;
