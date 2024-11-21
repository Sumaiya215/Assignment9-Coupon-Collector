import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const TopBrands = () => {
    return (
        <div className="text-center my-12">
            <h2 className="text-4xl font-bold">Top Brands</h2>
            <p className="mt-3 text-gray-600 font-semibold mb-8">Here are few brands for sale this winter</p>
            <div className="max-w-6xl mx-auto mb-8">
            <Marquee pauseOnHover={true}  className="space-x-10">
                <Link to="/brands">
                    <img className="w-[100px] h-[100px] mr-8" src="https://i.ibb.co.com/Q6QY9Xd/yellow.jpg" alt="" />
                </Link>
                <Link to="/brands">
                   <img className="w-[100px] h-[100px] mr-8" src="https://i.ibb.co.com/GtRrYtB/aarong.png" alt="" />
                </Link>
                <Link to="/brands">
                    <img className="w-[100px] h-[100px] mr-8" src="https://i.ibb.co.com/b6mWcWj/cats-eye.jpg" alt="" />
                </Link>
                <Link to="/brands">
                    <img className="w-[100px] h-[100px] mr-8" src="https://i.ibb.co.com/PrtphFs/infinity-mega-mall.png" alt="" />
                </Link>
                <Link to="/brands">
                    <img className="w-[100px] h-[100px] mr-8" src="https://i.ibb.co.com/XLmX74x/texmart.jpg" alt="" />
                </Link>
                <Link to="/brands">
                    <img className="w-[100px] h-[100px]" src="https://i.ibb.co.com/jwgkrt8/kay-kraft.png" alt="" />
                </Link>
            </Marquee>
            </div>
        </div>
    );
};

export default TopBrands;