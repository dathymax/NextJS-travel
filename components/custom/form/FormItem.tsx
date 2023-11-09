import { FormItemProps, Form, Input } from 'antd';
import React, { ReactNode } from 'react';
import "./form.scss";

interface MyFormItemProps extends FormItemProps {
    children: ReactNode
}

function CustomFormItem({ ...rest }: MyFormItemProps) {
    return (
        <Form.Item
            className='custom__form-item'
            {...rest}
        >
            {rest.children}
        </Form.Item>
    );
}

export default CustomFormItem;