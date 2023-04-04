"use client"

import React, { useState } from 'react';
import { AiOutlineCheck, AiOutlinePlus } from "react-icons/ai"

function ProductCartActions() {
    const [saved, setSaved] = useState<boolean>(false);

    const handleChangeSaveProduct = (): void => {
        setSaved(prev => !prev)
    }

    return (
        <div className="actions flex items-center gap-3 mb-6">
            <div
                className={`flex items-center justify-center primary--hover--bg w-[30%] rounded-3xl text-center cursor-pointer py-3 font-bold ${saved ? "bg-[var(--primary)] text-white" : ""}`}
                style={{ border: "2px solid lightgray" }}
                onClick={handleChangeSaveProduct}
            >
                Save {saved ? <AiOutlineCheck className='ml-2' /> : <AiOutlinePlus className='ml-2' />}
            </div>
            <div
                className='bg-[var(--primary)] rounded-3xl text-center cursor-pointer py-3 font-bold w-[70%] text-white'
                style={{ border: "2px solid transparent" }}
            >
                Reserve
            </div>
        </div>
    );
}

export default ProductCartActions;