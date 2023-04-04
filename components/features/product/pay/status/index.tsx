import React from 'react';
import { AiOutlineDollarCircle } from "react-icons/ai"

function ProductPayStatus() {
    return (
        <div className='flex items-center justify-center text-[13px] text-gray-400'>
            <AiOutlineDollarCircle className='mr-2' />
            Free cancellation until 3:00 PM on May 15, 2021
        </div>
    );
}

export default ProductPayStatus;