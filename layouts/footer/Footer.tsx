import classNames from 'classnames';
import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import style from './footer.module.css';
import { format } from 'date-fns';

interface IFooter extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children?: ReactNode;
};

const Footer = ({className, ...props}: IFooter): JSX.Element => {
	return (
		<footer className={classNames(className, style.footer)} {...props}>
			<div>OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены</div>
			<a href='#' target='_blank'>Пользовательское соглашение</a>
			<a href='#' target='_blank'>Политика конфиденциальности</a>
		</footer>
	);
};

export default Footer;