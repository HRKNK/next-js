import getPage from '@/api/page';
import { notFound } from 'next/navigation';
import { Metadata } from 'next/types';
import React from 'react';

export const metadata: Metadata = {
  title: 'Product page',
  description: 'none',
};

// генерация (алиаса/динамического адреса) как статической страницы 
export async function generateStaticParams() {
    const menu = {pages: [{alias: 'page1'},{alias: 'page2'},{alias: 'page3'}]};
    /** 
    * @return @types { alias: string }[]
    */
    return menu.pages.map(page => ({alias: page.alias}));
}

// получение динамического адреса(алиаса)
const Team = async ({ params }: {params: {alias: string}}) => {
    // const page = await getPage(params.alias);

    // // 404
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