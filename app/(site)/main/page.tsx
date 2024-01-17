'use client';

import Tag from '@/components/Tag/Tag';
import { Button, Htag, Ptag, Rating } from '@/components/public.api';
import React, { useState } from 'react';

const Main = () => {
    const [rating, setRating] = useState<number>(1);
    const [editable, setEditable] = useState<boolean>(true);
    return (
        <div>
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
			<br />
		    </div>
            <Rating 
                isEditable={editable} 
                currentRating={rating} 
                setEditable={setEditable} 
                setRating={setRating}
            />
        </div>
    );
};

export default Main;