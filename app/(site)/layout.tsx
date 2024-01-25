// layout оборачивает страницу (обязательный компонент)
// точка входа в приложение

import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'
import './globals.css'
// import Head from 'next/head'

// подключение шрифта (оптимальная загрузка при ssr) // const noto_sans = Noto_Sans({ weight: '400', subsets: ['cyrillic'] });
const noto_sans = Noto_Sans({ weight: ['200','400', '500', '600', '700'], subsets: ['cyrillic'] });
// подключение:
// open_sans.className - для классов / open_sans.style - для прямого style

// метаданные. имеет самый низкий приоритет и позволяет себя переопределять на уровне страниц.
// так же имеет merge эффект (объединение объектов с метаданными)
// metadata - не работает с 'use client';
export const metadata: Metadata = {
  title: 'Next App',
  description: 'Generated by create next app',
}

export default function RootSiteLayout({children}: {children: React.ReactNode}) {
  return (
    <>
    {/* <Head> // устаревший метод объявления метаданных (next v11)
		<title>Next App</title>
		<meta name="description" content="Generated by create next app" />
		<link rel="icon" href="/favicon.ico" />
	</Head> */}
    <html lang="en">
      <body className={noto_sans.className}>
        {/* style={{backgroundColor: 'white', width: '55vw', margin: '0 auto', height: '100vh'}} className={noto_sans.className} */}
        {/* <nav>
          <ul>
            <li>Главная</li>
            <li>О нас</li>
            <li>Что-то ещё</li>
          </ul>
        </nav> */}
        {children}
      </body>
    </html>
    </>
  )
}
