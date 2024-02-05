import { requestDelay } from '@/api/page';
import Link from 'next/link';
import React from 'react';

// вложенный team имеет общий с main layout (рендерится только компонент маршрутизации)
const Team = async () => {
    
    {/* имитация лоадинга */}
    const delay = await requestDelay(2000);
    
    return (
        <div>
            <nav>
                {/* имитация лоадинга */}
                {delay}

                {/* при клике на тег А происходит перерисовка целого DOM-a */}
                {/* механизм префетчинга/запроса (компонент линк делает заранее прелоад страниц/повышает перформанс) 
                    в остальном работает как реакт-навигация (изменение контента) */}
                <li><Link prefetch href={'/main'}>{'MAIN'}</Link></li>
                {/* 
                    href = путь, куда навигировать ИЛИ объект href={{pathname: '', query: ''}}
                    as = путь отображаемый в адресной строке браузера
                    replace = удаляет предыдущий history (откуда выполнен переход)
                    scroll: true = скроллит страницу к её началу
                    prefetch: true = презагрузка страницы
                    passHref = прокидывание href во вложенный компонент
                */}

            </nav>
        </div>
    );
};

export default Team;