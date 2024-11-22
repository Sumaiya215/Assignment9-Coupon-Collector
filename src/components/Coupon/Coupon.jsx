import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';

const Coupon = ({coupon, shop_link}) => {
    const {coupon_code, description,expiry_date,coupon_type,condition} = coupon;
   
    const handleCopy = (coupon_code) => {
        toast.success(`Coupon Code ${coupon_code} copied successfully!`);
    }
    return (
        <div className='card bg-base-100 flex flex-col 
        justify-between p-6 rounded-lg shadow-lg'>
            <h3 className='text-xl font-bold mb-2'>{coupon_code}</h3>
            <p>{description}</p>
            <p>{expiry_date}</p>
            <p>{coupon_type}</p>
            <p>{condition}</p>
            <div className='card-actions justify-end'>
                <CopyToClipboard text={coupon_code} onCopy={() => 
                    handleCopy(coupon_code)}>
                <button className='btn mr-2'>Copy Code</button>
                </CopyToClipboard>
                <button className='btn'
                  onClick={() => window.open(shop_link,"_blank")}
                >Use Now</button>
            </div>
        </div>
    );
};

export default Coupon;