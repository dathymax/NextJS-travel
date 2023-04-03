import Checkbox from '@/components/common/checkbox'
import CustomForm from '@/components/custom/form/Form'
import CustomFormItem from '@/components/custom/form/FormItem'
import { Col, Input, Row } from 'antd'
import React from 'react'

const Payments: React.FC = () => {
    return (
        <section>
            <h2 className='mb-12'>Payment methods</h2>

            <div className="payment mb-10">
                <h3 className="heading">Credit card</h3>
                <div className="flex items-center justify-between w-full">
                    <div className="label">
                        <p>Visa ••••••1667</p>
                        <span>Expiration: 03/2026</span>
                    </div>
                    <div className="feature primary--hover--bg cursor-pointer">
                        Add payment method
                    </div>
                </div>
            </div>

            <div className="payment mb-10">
                <h3 className="heading mb-6">Add new credit card</h3>

                <CustomForm className='information__form'>
                    <Row gutter={12} wrap>
                        <Col span={24}>
                            <CustomFormItem
                                label="Card number"
                                name="cardNumber"
                            >
                                <Input placeholder='XXX XXX XXX XXX' />
                            </CustomFormItem>
                        </Col>

                        <Col span={24}>
                            <CustomFormItem
                                label="Card holder"
                                name="cardHolder"
                            >
                                <Input placeholder='XXX XXX XXX XXX' />
                            </CustomFormItem>
                        </Col>

                        <Col span={12}>
                            <CustomFormItem
                                label="EXPIRATION DATE"
                                name="expirationDate"
                            >
                                <Input placeholder='MM/YY' />
                            </CustomFormItem>
                        </Col>
                        <Col span={12}>
                            <CustomFormItem
                                label="CVC"
                                name="cvc"
                            >
                                <Input placeholder='CVC' />
                            </CustomFormItem>
                        </Col>
                    </Row>

                    <CustomFormItem>
                        <Checkbox>
                            Save card
                        </Checkbox>
                    </CustomFormItem>
                </CustomForm>

                <hr className='my-10' />
            </div>

            <div className="payment">
                <h3 className="heading">Coupons</h3>
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-between w-full">
                        <div className="label">
                            <p>Coupons</p>
                            <span>No coupon added</span>
                        </div>
                        <div className="feature primary--hover--bg cursor-pointer">
                            Add
                        </div>
                    </div>

                    <hr className='bg-gray-300 w-[1px] h-[50px] mx-8' />

                    <div className="flex items-center justify-between w-full">
                        <div className="label">
                            <p>Gift credit</p>
                            <span>No gift credit added</span>
                        </div>
                        <div className="feature primary--hover--bg cursor-pointer">
                            Add
                        </div>
                    </div>
                </div>
                <hr className='bg-gray-300 my-10' />
            </div>
        </section>
    )
}

export default Payments