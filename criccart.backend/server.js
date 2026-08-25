const express = require('express');
const cors = require('cors');
require('dotenv').config();

const sequelize = require('./config/db');
const Product = require('./models/Product');
const User = require('./models/User');
const productsData = require('./data/products');

const app = express();

app.use(cors());
app.use(express.json());

sequelize.authenticate()
  .then(() => console.log('MySQL Database connected successfully...'))
  .catch(err => console.error('Database connection error:', err));

const seedDatabase = async () => {
  try {
    const count = await Product.count();
    if (count === 0) {
      await Product.bulkCreate(productsData);
      console.log('🌱 Database seeded with initial products!');
    }
  } catch (error) {
    console.error('Error seeding database:', error);
  }
};

sequelize.sync({ alter: true })
  .then(() => {
    console.log('Database synchronized...');
    seedDatabase();
  })
  .catch(err => console.error('Database sync error:', err));

const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend is working!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
