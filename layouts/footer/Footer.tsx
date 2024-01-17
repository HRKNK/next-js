import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

interface IFooter extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children?: ReactNode;
};

const Footer = (props: IFooter) => {
    return (
        <div>
            FOOTER
        </div>
    );
};

export default Footer;