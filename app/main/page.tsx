'use client';

import { Rating } from '@/components/public.api';
import React, { useState } from 'react';

const main = () => {
    const [rating, setRating] = useState<number>(1);
    const [editable, setEditable] = useState<boolean>(true);
    return (
        <div>
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