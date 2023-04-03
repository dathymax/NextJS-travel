import { Form, FormProps } from 'antd';
import React, { ReactNode } from 'react';

interface CustomFormProps extends FormProps {
    children: ReactNode
}

function CustomForm({ children, ...rest }: CustomFormProps) {
    return (
        <Form {...rest} layout="vertical">
            {children}
        </Form>
    );
}

export default CustomForm;