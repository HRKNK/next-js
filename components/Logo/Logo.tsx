import classNames from 'classnames';
import style from './Logo.module.css';
import { ILogo } from './Logo.types';
import LogoOwlTop from '@/public/logo-owl-top.svg';

const Logo = ({naming, className, ...props}: ILogo): JSX.Element => {
	return (
		<div {...props} className={classNames(style.logo__wrapper, className)}>
			<LogoOwlTop className={style.logo}/>
			{naming && <h2>OWL<span>top</span></h2>}
		</div>
	)
} 

export default Logo;