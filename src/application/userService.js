// User service (use case)
class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async createUser(name, email) {
    // ...business logic...
    return this.userRepository.create({ name, email });
  }

  async getUsers() {
    return this.userRepository.findAll();
  }
}

module.exports = UserService;
