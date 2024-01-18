import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

interface IHeader extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children?: ReactNode;
};

const Header = (props: IHeader): JSX.Element => {
    return (
        <div {...props}>
            HEADER
        </div>
    );
};

export default Header;