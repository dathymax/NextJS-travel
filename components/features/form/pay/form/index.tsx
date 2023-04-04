"use client"

import React, { useState } from 'react';
import InfoTrip from './info-trip';
import PayFormCreditCard from './type/creditCard';
import PayFormPaypal from './type/paypal';

function ConfirmAndPayForm() {
    const [paymentType, setPaymentType] = useState<string>("creditCard");

    const handleChangeTypePayment = (type: string): void => {
        setPaymentType(type);
    }

    return (
        <div>
            <InfoTrip />

            <div className="flex items-center justify-between mb-5">
                <h2 className="text-2xl font-bold">
                    Pay with
                </h2>

                <div className="flex items-center">
                    <button
                        className={`${paymentType === "creditCard" ? "bg-gray-700 text-white" : "text-gray-500 bg-transparent hover:text-black"} py-1 px-3 rounded-2xl font-bold text-[14px] mx-2 cursor-pointer transition-all`}
                        onClick={() => handleChangeTypePayment("creditCard")}
                    >
                        Credit card
                    </button>
                    <button
                        className={`${paymentType === "paypal" ? "bg-gray-700 text-white" : "text-gray-500 bg-transparent hover:text-black"} py-1 px-3 rounded-2xl font-bold text-[14px] mx-2 cursor-pointer transition-all`}
                        onClick={() => handleChangeTypePayment("paypal")}
                    >
                        Paypal
                    </button>
                </div>
            </div>

            {paymentType === "creditCard" ? <PayFormCreditCard /> : <PayFormPaypal />}
        </div>
    );
}

export default ConfirmAndPayForm;