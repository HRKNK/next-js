import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

interface ISidebar extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children?: ReactNode;
};

const Sidebar = (props: ISidebar) => {
    return (
        <div>
            
        </div>
    );
};

export default Sidebar;