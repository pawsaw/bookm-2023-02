export type ISBN = string;

export interface Book {
  id: string;
  title: string;
  subtitle: string;
  isbn: ISBN;
  abstract: string;
  author: string;
  publisher: string;
  price: string;
  numPages: number;
  cover: string;
  userId: number;
}
