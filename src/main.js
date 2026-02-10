// Entry point for Express
const app = require('./infrastructure/framework/expressApp');

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Express server running on port ${PORT}`);
});
