import classNames from 'classnames';

const FilterButtons = ({ active, handleClick }) => {
    const categories = [
        "all",
        "men's clothing",
        "women's clothing",
        "jewelery",
        "electronics",
    ];

    return (
        <div className="sticky top-[86px] flex justify-center items-center gap-4 py-5 px-5">
            {categories.map(item => {
                return (
                    <button
                        key={item}
                        type="button"
                        className={classNames(
                            "px-4 py-2 uppercase",
                            { "bg-blue-100 text-black": active === item.toLowerCase() },
                            { "bg-gray-200 text-gray-800": active !== item.toLowerCase() }
                        )}
                        onClick={() => handleClick(item.toLowerCase())}
                    >
                        {item}
                    </button>
                )
            })}
        </div>
    );
}

export default FilterButtons;
