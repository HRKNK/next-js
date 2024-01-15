'use client';

import React, { useEffect, useState } from 'react';
import { IRating } from './Rating.types';
import Star from '../../public/star.svg';
import styles from './Rating.module.css';
import classNames from 'classnames';


const Rating = ({isEditable = true, currentRating, setEditable, setRating, ...props}: IRating) => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        createStars(currentRating);
    }, [currentRating]);

    const createStars = (targetRating: typeof currentRating) => {
        const updateArray = ratingArray.map((el: JSX.Element, i: number): JSX.Element => {
                return ( 
                    <Star className={classNames(styles.star, {
                        [styles.filled]: i < targetRating,
                        [styles.editable]: isEditable,
                    })}
                    onMouseEnter={() => setViewStars(i+1)}
                    onMouseLeave={() => setViewStars(currentRating)}
                    onClick={() => onClickRating(targetRating)}
                    />
                );
        });
        setRatingArray(updateArray);
    };

    const setViewStars = (i: number) => {
        isEditable && createStars(i);
    };

    const onClickRating = (rating: number) => {
        if(!isEditable) return;
        setRating(rating);
        setEditable(!isEditable);
    };

    return (
        <div {...props}>
            {ratingArray.map((r,i) => <span key={i}>{r}</span>)}
        </div>
    );
};

export default Rating;