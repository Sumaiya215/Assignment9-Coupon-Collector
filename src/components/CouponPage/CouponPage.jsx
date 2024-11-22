

import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Coupon from '../Coupon/Coupon';

const CouponPage = () => {
    const brand = useLoaderData();
    const {brand_logo,brand_name,rating,shop_link} = brand;

    return (
        <div className='max-w-6xl mx-auto my-10'>
            <div className='flex justify-center items-center mb-8'>
                <div className='flex items-center gap-4'>
                    <img src={brand_logo}
                    alt={brand_name} className='w-20 h-20 rounded-full'/>

                    <div>
                        <h2 className='text-3xl font-bold mb-2'>{brand_name}</h2>
                        <p className='flex items-center gap-2'>
                            <span className='text-base font-semibold '>Rating:</span>
                        <div className="rating rating-sm mx-2">
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-400 text-sm" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-400" defaultChecked />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-400" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-400" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-400" />
                        </div>{rating}
                        </p>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6'>
                {
                    brand.coupons.map(coupon =><Coupon coupon={coupon} 
                    shop_link={shop_link}></Coupon> )
                }
            </div>


        </div>
    );
};

export default CouponPage;