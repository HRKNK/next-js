import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

interface ISidebar extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children?: ReactNode;
};

const Sidebar = (props: ISidebar): JSX.Element => {
    return (
        <div {...props}>
            SIDEBAR
        </div>
    );
};

export default Sidebar;