# Clean & Hexagonal Architecture Demo

This project demonstrates how to structure a Node.js/NestJS app using Clean/Hexagonal Architecture, with easy switching between MongoDB and PostgreSQL.

## Structure

- `src/domain/` - Entities and business logic
- `src/application/` - Use cases/services
- `src/infrastructure/db/` - DB implementations (MongoDB, Postgres)
- `src/infrastructure/framework/` - Framework implementations (Express, NestJS)
- `src/main.js` - Express entry point
- `src/main-nest.ts` - NestJS entry point (commented)

## How to Use

1. **Install dependencies**
   - For Express/MongoDB: `npm install express mongodb`
   - For Postgres: `npm install pg`
   - For NestJS: `npm install @nestjs/core @nestjs/common`

2. **Choose DB and Framework**
   - By default, Express + MongoDB is enabled.
   - To use Postgres, uncomment the Postgres lines in `expressApp.js` and comment MongoDB lines.
   - For NestJS, see `main-nest.ts` and `nestApp.ts` (commented code for reference).

3. **Run Express App**
   ```bash
   node src/main.js
   ```

4. **Switching**
   - You can switch between Node/Nest and Mongo/Postgres by changing the relevant lines in the code (see comments).

## Example Endpoints
- `POST /users` `{ "name": "Test", "email": "test@example.com" }`
- `GET /users`

---

You can extend this structure to add more entities, use cases, or frameworks/databases as needed.
