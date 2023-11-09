import React from 'react';
import ProductCartBookingInfo from '../cart/booking-info';
import ProductCartPriceDetail from '../cart/price';
import ProductPayHeading from './heading';
import ProductPayStatus from './status';

function ProductPay() {
    return (
        <section
            style={{
                border: "1px solid lightgray"
            }}
            className='product__cart rounded-2xl w-[35%] p-6 shadow-xl'
        >
            <ProductPayHeading />

            <ProductCartBookingInfo />

            <ProductCartPriceDetail />

            <ProductPayStatus />
        </section>
    );
}

export default ProductPay;