'use client';

import React, { useEffect, useState } from 'react';
import { IRating } from './Rating.types';
import Star from '../../public/star.svg';
import styles from './Rating.module.css';
import classNames from 'classnames';


const Rating = ({isEditable = true, rating = 3, setRating, ...props}: IRating) => {


    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        createStars(rating);
    }, [rating]);

    const createStars = (currentRating: typeof rating) => {
        const updateArray = ratingArray.map((el: JSX.Element, i: number): JSX.Element => {
                return ( 
                    <Star className={classNames(styles.star, {
                        [styles.filled]: i < currentRating,
                    })}
                    onMouseEnter={() => setViewStars(i+1)}
                    onMouseLeave={() => setViewStars(rating)}
                    onClick={() => onClickRating(rating)}
                    />
                );
        });
        setRatingArray(updateArray);
    };

    const setViewStars = (i: number) => {
        isEditable && createStars(i);
    };

    const onClickRating = (rating: number) => {
        isEditable && setRating(rating);
    };

    return (
        <div {...props}>
            {ratingArray.map((r,i) => <span key={i}>{r}</span>)}
        </div>
    );
};

export default Rating;