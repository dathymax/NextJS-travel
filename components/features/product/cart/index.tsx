"use client"

import React from 'react';
import ProductCartActions from './actions';
import ProductCartBookingInfo from './booking-info';
import ProductCartHeading from './heading';
import ProductCartPriceDetail from './price';
import ReportProperty from './report';

function ProductCard() {
    return (
        <section
            style={{
                border: "1px solid lightgray"
            }}
            className='product__cart rounded-2xl w-[30%] p-6'
        >
            <ProductCartHeading />

            <ProductCartBookingInfo />

            <ProductCartActions />

            <ProductCartPriceDetail />

            <ReportProperty />
        </section>
    );
}

export default ProductCard;