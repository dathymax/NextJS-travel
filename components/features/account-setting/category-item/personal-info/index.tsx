"use client"

import CustomForm from '@/components/custom/form/Form'
import CustomFormItem from '@/components/custom/form/FormItem'
import { UserProfileType } from '@/types/features/user'
import { Col, Form, Input, Row } from 'antd'
import Link from 'next/link'
import React, { useEffect } from 'react'
import "./personalInfo.scss"

type TypeProps = {
    userInfo: UserProfileType
}

const PersonalInfo: React.FC<TypeProps> = ({ userInfo }: TypeProps) => {
    const [form] = Form.useForm();

    useEffect(() => {
        if (userInfo) {
            form.setFieldsValue(userInfo);
        }
    }, [userInfo])

    const onFinish = (values: UserProfileType) => {
        console.log(values)
    }

    return (
        <section className='information'>
            <div className="heading flex items-center justify-between mb-12">
                <h2>Personal info</h2>
                <Link href={"/user-profile"} className={"heading__link primary--hover--bg"}>View profile</Link>
            </div>

            <p className='mb-6 font-bold'>Account info</p>

            <CustomForm
                form={form}
                onFinish={onFinish}
            >
                <Row gutter={12} wrap>
                    <Col span={12}>
                        <CustomFormItem
                            label="Display name"
                            name="displayName"
                        >
                            <Input />
                        </CustomFormItem>
                    </Col>
                    <Col span={12}>
                        <CustomFormItem
                            label="Real name"
                            name="realName"
                        >
                            <Input />
                        </CustomFormItem>
                    </Col>

                    <Col span={12}>
                        <CustomFormItem
                            label="Phone number"
                            name="phone"
                        >
                            <Input />
                        </CustomFormItem>
                    </Col>
                    <Col span={12}>
                        <CustomFormItem
                            label="Email"
                            name="email"
                        >
                            <Input />
                        </CustomFormItem>
                    </Col>

                    <Col span={24}>
                        <CustomFormItem
                            label="Bio"
                            name="bio"
                        >
                            <Input />
                        </CustomFormItem>
                    </Col>
                </Row>
            </CustomForm>

            {/* <form className='information__form'>
                <div className="form__wrapper">
                    <div className="form__item">
                        <label htmlFor="displayName">Display name</label>
                        <input type="text" name="displayName" id='displayName' placeholder='Enter your display name' />
                    </div>
                    <div className="form__item">
                        <label htmlFor="realName">Real name</label>
                        <input type="text" name="realName" id='realName' placeholder='Enter your real name' />
                    </div>
                </div>

                <div className="form__wrapper">
                    <div className="form__item">
                        <label htmlFor="phone">Phone number</label>
                        <input type="tel" id='phone' name="phone" placeholder='Enter your phone number' />
                    </div>
                    <div className="form__item">
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email' name="email" placeholder='Enter your email' />
                    </div>
                </div>

                <div className="form__wrapper">
                    <div className="form__item">
                        <label htmlFor="bio">Bio</label>
                        <input type="text" id='bio' name="bio" placeholder='About yourself in a few words' />
                    </div>
                </div>
            </form> */}
        </section>
    )
}

export default PersonalInfo;