npm install -g @nestjs/cli
nest new nest-crud
cd nest-crud
npm install --save @nestjs/mongoose mongoose
nest generate module books
nest generate controller books
nest generate service books
nest generate class books/dtos/book.dto
src/books/dtos/book.dto.ts
src/books/schemas/book.schema.ts
npm run start:dev

POST: http://localhost:3000/books
GET: http://localhost:3000/books
GETID: http://localhost:3000/books/65fd43a87a38181f280297bc
PUT: http://localhost:3000/books/65fd43a87a38181f280297bc
Delete: http://localhost:3000/books/65fd40c300bf2bb29a44adca