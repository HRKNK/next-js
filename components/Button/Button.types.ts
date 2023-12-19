import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

// типизация атрибутов Button (внутри можно найти описание под теги)
export interface IButton extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: ReactNode;
    appearance: 'primary' | 'ghost';
}

// пример для p:
// interface I extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>
// дженерик на месте HTMLAttributes определяет специальные свойства тега