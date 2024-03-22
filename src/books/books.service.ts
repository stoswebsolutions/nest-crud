// src/books/books.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BookDto } from './dtos/book.dto'; 
import { Book } from './schemas/book.schema'; // Import the Book interface

@Injectable()
export class BooksService {
  constructor(@InjectModel('Book') private bookModel: Model<Book>) {}

  async findAll(): Promise<Book[]> {
    return this.bookModel.find().exec();
  }

  async findOne(id: string): Promise<Book> {
    return this.bookModel.findById(id).exec();
  }

  async create(bookDto: BookDto): Promise<Book> {
    const createdBook = new this.bookModel(bookDto);
    return createdBook.save();
  }

  async update(id: string, bookDto: BookDto): Promise<Book> {
    return this.bookModel.findByIdAndUpdate(id, bookDto, { new: true }).exec();
  }

  async remove(id: string): Promise<void> {
    await this.bookModel.findByIdAndDelete(id).exec();
  }
}
