import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

interface IHeader extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children?: ReactNode;
};

const Header = (props: IHeader) => {
    return (
        <div>
            
        </div>
    );
};

export default Header;