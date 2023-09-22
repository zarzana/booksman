import { Book, CreateBook } from "../protocols/book";
import { CreateReview } from "../protocols/review";

import prisma from "../database";

export async function getBooks() {
  return prisma.books.findMany();
}

export async function getBook(id: number) {
  return prisma.books.findUnique({ where: { id } });
}

export async function createBook(book: CreateBook) {
  return prisma.books.create({ data: book });
}

export async function reviewBook(bookReview: CreateReview) {
  const { bookId, grade, review } = bookReview;
  return prisma.books.update({ data: { grade, review }, where: { id: bookId } })
}