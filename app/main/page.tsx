'use client';

import { Rating } from '@/components/public.api';
import React, { useState } from 'react';

const main = () => {
    const [rating, setRating] = useState<number>(1);
    return (
        <div>
            <Rating isEditable={true} currentRating={rating} setRating={setRating}></Rating>
        </div>
    );
};

export default main;