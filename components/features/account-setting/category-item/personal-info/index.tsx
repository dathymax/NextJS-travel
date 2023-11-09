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
    }, [userInfo, form])

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
        </section>
    )
}

export default PersonalInfo;