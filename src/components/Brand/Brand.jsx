

const Brand = ({ brand }) => {
    const { brand_name, brand_logo, coupons, category } = brand;
    return (
        <div className="card card-compact bg-base-100 w-48 shadow-xl mb-16">
            <figure>
                <img
                    src={brand_logo}
                    className="w-[200px] h-[200px] "
                    alt={brand_name} />
            </figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{brand_name}</h2>
                <p className="font-semibold ">Total Coupons: {coupons.length}</p>
                <p className="font-semibold ">Category: {category}</p>

            </div>
        </div>
    );
};

export default Brand;