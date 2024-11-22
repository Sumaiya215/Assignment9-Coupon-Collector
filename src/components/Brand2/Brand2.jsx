

const Brand2 = ({ brand }) => {
    const { brand_logo, brand_name, rating, description, isSaleOn } = brand;
    return (
        <div className="max-w-6xl mx-auto  mt-6 mb-8">
            <div className="card card-side  bg-base-200 p-8 flex justify-between items-center shadow-xl">
                <div className="flex flex-col items-center">
                    <img className="w-[100px] h-[100px]"
                        src={brand_logo} alt="Movie" />
                    <h2 className=" text-xl mt-2 font-bold text-center">{brand_name}</h2>
                    <p className=" font-semibold">Rating:
                        <div className="rating rating-sm mx-2">
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-400 text-sm" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-400" defaultChecked />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-400" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-400" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-400" />
                        </div>
                        {rating}</p></div>
                <div className="text-center ">
                    <h2 className="card-title mb-3">{brand_name}</h2>
                    <p>{description}</p>
                </div>
                <div className="">
                    <button className="btn text-base text-white font-bold bg-cyan-600">View Coupons</button>
                    {
                        isSaleOn && <p className="text-cyan-700 text-lg 
                            font-semibold mt-4 ml-8 animate-bounce">Sale is on</p>
                    }
                </div>
            </div>
        </div>


    );
};

export default Brand2;