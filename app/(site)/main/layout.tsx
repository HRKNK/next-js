// layout оборачивает страницу (обязательный компонент)
// точка входа в приложение

import type { Metadata } from 'next'
// import { Noto_Sans } from 'next/font/google'

// import Head from 'next/head'

// подключение шрифта (оптимальная загрузка при ssr) // const noto_sans = Noto_Sans({ weight: '400', subsets: ['cyrillic'] });
// const noto_sans = Noto_Sans({ weight: ['400', '500', '600', '700'], subsets: ['cyrillic'] });
// подключение:
// open_sans.className - для классов / open_sans.style - для прямого style

// метаданные. имеет самый низкий приоритет и позволяет себя переопределять на уровне страниц.
// так же имеет merge эффект (объединение объектов с метаданными)
// metadata - не работает с 'use client';
export const metadata: Metadata = {
  title: 'This main page',
  description: 'none',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <>
      {children}
    </>
  )
}
