import React from 'react';
import ConfirmAndPayForm from './form';
import ConfirmAndPayHeading from './heading';

function ConfirmAndPay() {
    return (
        <div className='w-[35%]'>
            <ConfirmAndPayHeading />

            <hr className='my-8' />

            <ConfirmAndPayForm />
        </div>
    );
}

export default ConfirmAndPay;