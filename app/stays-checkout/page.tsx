import ConfirmAndPay from '@/components/features/form/pay';
import ProductPay from '@/components/features/product/pay';
import React from 'react';

function StaysCheckoutPage() {
    return (
        <div className='flex items-center justify-center gap-20'>
            <ConfirmAndPay />
            <ProductPay />
        </div>
    );
}

export default StaysCheckoutPage;