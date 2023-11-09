import Rating from '@/components/common/rating';
import Image from 'next/image';
import React from 'react';

function ProductCartHeading() {
    return (
        <div className="heading flex items-center justify-between mb-3">
            <div>
                <div className="price">
                    <span className="text-gray-300 font-bold text-3xl line-through mr-2">$119</span>
                    <span className='text-black text-3xl font-bold mr-2'>$109</span>
                    <span className="text-gray-600">/night</span>
                </div>

                <Rating />
            </div>
            <div className="user">
                <Image width={60} height={60} src="/assets/mock/avatar.jpg" alt="avatar" className='w-[60px] h-[60px] rounded-full' />
            </div>
        </div>
    );
}

export default ProductCartHeading;