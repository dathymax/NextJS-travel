import React from 'react';

function ProductCard() {
    return (
        <div
            style={{
                border: "1px solid lightgray"
            }}
            className='product__cart rounded-2xl w-[30%] p-6'
        >
            <div className="heading flex items-center justify-between">
                <div>
                    <div className="price">
                        $119
                        $109
                        /night
                    </div>
                    <div className="vote">
                        4.8
                        (256 reviews)
                    </div>
                </div>
                <div className="user">
                    123
                </div>
            </div>

            <div className="checkinout">
                checkinout
            </div>

            <div className="actions">
                actions
            </div>

            <div className="price-info">
                price-info
            </div>
        </div>
    );
}

export default ProductCard;