import React from 'react';
import { TbFlag3 } from "react-icons/tb"

function ReportProperty() {
    return (
        <p className='text-[13px] hover:text-[var(--primary)] flex items-center justify-center cursor-pointer'>
            <TbFlag3 className='mr-2' />
            Report this property
        </p>
    );
}

export default ReportProperty;