import Image from 'next/image'
import styles from './page.module.css'
import { Metadata } from 'next/types';
import Htag from '@/components/H-tag/Htag';
import Button from '@/components/Button/Button';
import Logo from '../public/next.svg';
import Ptag from '@/components/P-tag/Ptag';
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

export default function Home() {
  return (
	<main style={{backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignContent:'center', height: '100vh'}}>
		<div>
			<br />
			<Htag tag='h2'>Type title</Htag>
			<br />
			<Button appearance='primary'>Button 2</Button>
			<Button appearance='ghost'>Button 1</Button>
			<br />
			{/* <Logo/> */}
			<Ptag size='m'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus ad dicta eaque eveniet</Ptag>
			<br />
			<Tag size='m' color='red'>hh.ru</Tag>
			<Tag size='m' color='green'>-10 000 ₽</Tag>
			<Tag size='m' color='ghost'>Photoshop</Tag>
			<Tag size='m' href='https://github.com/HRKNK' color='lilac'>Web дизайн</Tag>
		</div>
	</main>
  )
}
