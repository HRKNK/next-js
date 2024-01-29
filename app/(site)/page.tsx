// Корневой маршрут :host/
// page.tsx - зарезервированное имя маршрутизации

import styles from './page.module.css'
import { Metadata } from 'next/types';
import Header from '@/layouts/header/Header';
import Sidebar from '@/layouts/sidebar/Sidebar';
import Footer from '@/layouts/footer/Footer';
import { getMenu } from '@/api/page';
import Menu from '@/widgets/menu/Menu';
import { Htag } from '@/components/public.api';
import Tag from '@/components/Tag/Tag';

// generateMetadata зарезервированное имя
// вычисляемые метаданные
export async function generateMetadata (): Promise<Metadata> {
  // fetch запрос (аки асинхрон)
  return {
	title: 'My application',
	icons: './url.ico', // имеет более низкий приоритет перед файловой структурой favicon.ico
  }
}

export default async function Home() {
	const menu = await getMenu(0);

	return (
		// <AppContextProvider menu={menu} firstCategory={TopLevelCategory.Courses}>
			<div className={styles.wrapper}>
				<Header className={styles.header}/>
				<Sidebar className={styles.sidebar}>
					{/* {menu.map(i => (<li key={i._id.secondCategory}>{i._id.secondCategory}</li>) )} */}
					<Menu nav_item={menu}></Menu>
				</Sidebar>
				<main className={styles.body}>
					<header>
						<Htag tag='h1'>{'Курсы по Photoshop'}</Htag>
						<Tag color='gray' size='s'>10</Tag>
					</header>
					{'BODY'}
				</main>
				<Footer className={styles.footer}/>
			</div>
		// </AppContextProvider>
	)
}
