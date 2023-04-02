import { FormItemProps, Form } from 'antd';
import React, { ReactNode } from 'react';

interface MyFormItemProps extends FormItemProps { }

function CustomFormItem({ ...rest }: MyFormItemProps, children: ReactNode) {
    return (
        <Form.Item {...rest}>
            {children}
        </Form.Item>
    );
}

export default CustomFormItem;