// Prisma implementation for PostgreSQL
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class UserRepositoryPostgres {
  async create(user) {
    // Use Prisma to create user
    const created = await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
      },
    });
    return created;
  }

  async findAll() {
    // Use Prisma to fetch all users
    return await prisma.user.findMany();
  }

  async update(id, data) {
    // Use Prisma to update user
    return await prisma.user.update({
      where: { id },
      data,
    });
  }

  async delete(id) {
    // Use Prisma to delete user
    return await prisma.user.delete({
      where: { id },
    });
  }
}

module.exports = UserRepositoryPostgres;
