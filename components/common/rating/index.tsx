import React from 'react';
import { AiFillStar } from "react-icons/ai"

function Rating() {
    return (
        <div className="flex items-center">
            <AiFillStar className='text-yellow-300 text-xl' /> <span className="font-bold mx-2">4.8</span>
            <span className='text-[13px] text-gray-400'>(256 reviews)</span>
        </div>
    );
}

export default Rating;