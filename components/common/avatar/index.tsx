import React, { ReactNode } from 'react';
import { Avatar, AvatarProps } from 'antd';

interface TypeProps extends AvatarProps {
    children?: ReactNode
}

function AvatarComponent({ children, ...rest }: TypeProps) {
    return (
        <Avatar {...rest} children={children} />
    );
}

export default AvatarComponent;