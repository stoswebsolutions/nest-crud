import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { BooksService } from './books.service';
import { BookDto } from './dtos/book.dto';
import { Book } from './schemas/book.schema';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  async findAll(): Promise<Book[]> {
    return this.booksService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Book> {
    return this.booksService.findOne(id);
  }

  @Post()
  async create(@Body() bookDto: BookDto): Promise<Book> {
    return this.booksService.create(bookDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() bookDto: BookDto): Promise<Book> {
    return this.booksService.update(id, bookDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.booksService.remove(id);
  }
}