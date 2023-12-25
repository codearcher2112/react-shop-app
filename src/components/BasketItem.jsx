const BasketItem = ({ item }) => {
    const { id, title, image, price, amount } = item;
    return (
        <div className="basket__item">
            {title}
        </div>
    )
}

export default BasketItem;
