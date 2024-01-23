import { getMenu, getPage } from '@/api/page';
import { notFound } from 'next/navigation';
import { Metadata } from 'next/types';
import React from 'react';

export const metadata: Metadata = {
  title: 'Product page',
  description: 'none',
};

// генерация (алиаса/динамического адреса) как статической страницы 
export async function generateStaticParams() {
    const menu = await getMenu(0);
    /** /// Список статических страниц
    * @return @types { alias: string }[]
    */ 
    return menu.flatMap(item => item.pages.map(page => ( {alias: page.alias} )));
    // return menu[0].pages.map(page => ( {alias: page.alias}));
}

// получение динамического адреса(алиаса)
const Team = async ({ params }: {params: {alias: string}}) => {
    // const page = await getPage(params.alias);
    // 404
    // if(!page) {
    //     notFound();
    // }

    return (
        <div>
            {`Страница c адресом: ${params.alias}`}
        </div>
    );
};

export default Team;