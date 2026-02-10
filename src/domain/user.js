// User entity
class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  // Example static CRUD methods (for demonstration)
  static create(data) {
    // Normally handled by repository, here for demo
    return new User(Date.now().toString(), data.name, data.email);
  }

  static update(user, data) {
    user.name = data.name || user.name;
    user.email = data.email || user.email;
    return user;
  }

  static delete(user) {
    // In real app, handled by repository
    return null;
  }
}

module.exports = User;
