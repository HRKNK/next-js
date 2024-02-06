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
import Sort from '@/components/Sort/Sort';

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
	return (
		// <AppContextProvider menu={menu} firstCategory={TopLevelCategory.Courses}>
		<div>
			{"Это главная страница"}
		</div>
		// </AppContextProvider>
	)
}
