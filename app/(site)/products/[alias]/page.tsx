import getPage from '@/api/page';
import { notFound } from 'next/navigation';
import React from 'react';

// вложенный team имеет общий с main layout (рендерится только компонент маршрутизации)

// получение динамического адреса(алиаса)
const Team = async ({ params }: {params: {alias: string}}) => {
    const page = await getPage(params.alias);

    // 404
    if(!page) {
        notFound();
    }

    return (
        <div>
            {`Страница c адресом: ${params.alias}}`}
        </div>
    );
};

export default Team;