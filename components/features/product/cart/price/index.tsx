import React from 'react';

function ProductCartPriceDetail() {
    return (
        <div className="price-info mb-6">
            <h3 className="text-2xl font-bold mb-3">
                Price details
            </h3>

            <div className="flex items-center px-3 justify-between">
                <p className='text-[14px] text-gray-500'>$119 x 7 nights</p>
                <p className='text-[14px] text-black'>$833</p>
            </div>
            <div className="flex items-center px-3 justify-between">
                <p className='text-[14px] text-gray-500'>10% campaign discount</p>
                <p className='text-[14px] text-black'>-$125</p>
            </div>
            <div className="flex items-center px-3 justify-between">
                <p className='text-[14px] text-gray-500'>Service fee</p>
                <p className='text-[14px] text-black'>$103</p>
            </div>
            <div className="flex items-center px-3 justify-between bg-gray-100 rounded-lg">
                <p className='text-[14px] text-black'>Total</p>
                <p className='text-[14px] text-black'>$833</p>
            </div>
        </div>
    );
}

export default ProductCartPriceDetail;