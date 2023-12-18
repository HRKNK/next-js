import Image from 'next/image'
import styles from './page.module.css'
import { Metadata } from 'next/types';
import { Htag } from '@/components/Htag/Htag';

// generateMetadata зарезервированное имя
// вычисляемые метаданные
export async function generateMetadata (): Promise<Metadata> {
  // fetch запрос (аки асинхрон)
  return {
	title: 'My application',
	icons: './url.ico', // имеет более низкий приоритет перед файловой структурой favicon.ico
  }
}

export default function Home() {
  return (
	<main style={{display: 'flex', justifyContent: 'center', alignContent:'center', height: '100vh'}}>
		<div>
			<Htag tag='h1'>Заголовок 2</Htag>
		</div>
	</main>
  )
}
