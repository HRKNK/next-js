'use client';

import { Rating } from '@/components/public.api';
import { Metadata } from 'next/types';
import React, { useState } from 'react';

// metadata - не работает с 'use client';
// export const metadata: Metadata = {
//   title: 'This main page',
//   description: 'none',
// }

const main = () => {
    const [rating, setRating] = useState<number>(1);
    const [editable, setEditable] = useState<boolean>(true);
    return (
        <div style={{backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignContent:'center', height: '100vh'}}>
            <Rating 
                isEditable={editable} 
                currentRating={rating} 
                setEditable={setEditable} 
                setRating={setRating}
            />
        </div>
    );
};

export default main;