import Rating from '@/components/common/rating';
import React from 'react';

function ProductPayHeading() {
    return (
        <div className='flex items-center gap-6'>
            <img src="/assets/images/nb-1.jpg" alt="mock" className='w-[170px] h-[170px] rounded-xl' />

            <div>
                <p className='text-black font-bold'>
                    Spectacular views of Queenstown
                </p>

                <div className="flex items-center text-[12px]">
                    <span className='text-gray-500'>
                        Hosted by
                    </span>
                    <img src="/assets/mock/avatar.jpg" alt="avatar" className='w-[20px] h-[20px] rounded-full mx-1' />
                    <span className="text-black font-bold">
                        Zoe Towne
                    </span>
                </div>

                <div className="flex items-center gap-3 my-3 text-[12px]">
                    <span className='text-gray-500'>1 private bath</span>
                    <span className='text-gray-500'>1 bedroom</span>
                </div>

                <hr className='my-3' />

                <Rating />
            </div>
        </div>
    );
}

export default ProductPayHeading;