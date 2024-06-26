// export type TopLevelCategory = 'Courses' | 'Services' | 'Books' | 'Products';

export enum TopLevelCategory {
    Courses,
    Services,
    Books,
    Products
}

export interface IPage {
  _id: string
  tags: string[]
  firstCategory: TopLevelCategory
  secondCategory: string
  alias: string
  title: string
  category: string
  tagsTitle: string
  metaTitle: string
  metaDescription: string
  advantages: Advantage[]
  createdAt: string
  updatedAt: string
  __v: number
  seoText: string
  hh: HH
  qas: Qa[]
  addresses: any[]
  categoryOn: string
  blog: Blog
  sravnikus: Sravnikus
  learningclub: Learningclub
}

export interface Advantage {
  title: string
  description: string
  _id: string
}

export interface HH {
  count: number
  juniorSalary: number
  middleSalary: number
  seniorSalary: number
  updatedAt: string
  _id: string
}

export interface Qa {
  question: string
  answer: string
}

export interface Blog {
  h1: string
  metaTitle: string
  metaDescription: string
  views: number
  _id: string
}

export interface Sravnikus {
  metaTitle: string
  metaDescription: string
  seoText: string
  qas: any[]
  _id: string
}

export interface Learningclub {
  metaTitle: string
  metaDescription: string
  qas: any[]
  _id: string
}
