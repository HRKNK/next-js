import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

interface ISidebar extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children?: ReactNode;
};

const Sidebar = ({children, ...props}: ISidebar): JSX.Element => {
    return (
        <div {...props}>
            {children}
        </div>
    );
};

export default Sidebar;