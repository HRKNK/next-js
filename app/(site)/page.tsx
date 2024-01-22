// Корневой маршрут :host/
// page.tsx - зарезервированное имя маршрутизации

import styles from './page.module.css'
import { Metadata } from 'next/types';
import Header from '@/layouts/header/Header';
import Sidebar from '@/layouts/sidebar/Sidebar';
import Footer from '@/layouts/footer/Footer';

// generateMetadata зарезервированное имя
// вычисляемые метаданные
export async function generateMetadata (): Promise<Metadata> {
  // fetch запрос (аки асинхрон)
  return {
	title: 'My application',
	icons: './url.ico', // имеет более низкий приоритет перед файловой структурой favicon.ico
  }
}

async function getMenu(firstCategory: number) {
	const res = await fetch('https://courses-top.ru/api/', {
		method: 'POST',
		body: JSON.stringify({
			firstCategory,
		}),
		headers: new Headers({'content-type': 'application/json'}),
	})
	return res.json();
}

export default async function Home() {
	const menu = await getMenu(0);

	return (
		<div className={styles.wrapper}>
			<Header className={styles.header}/>
			<Sidebar className={styles.sidebar}/>
			<div className={styles.body}>
				{JSON.stringify(menu)}
			</div>
			<Footer className={styles.footer}/>
		</div>
	)
}
