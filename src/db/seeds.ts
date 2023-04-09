import mongoose from 'mongoose';
import { Category } from '../app/models/Category';

mongoose.connect('mongodb://localhost:27017')
  .then(() => console.log('Connected to mongoDB!'))
  .catch((error) => console.log(error));

const seedDB = async () => {
  await Category.deleteMany({});
  await Category.insertMany([
    {
      name: 'Italiana',
    },
    {
      name: 'Japonesa',
    },
  ]);

  const categories = await Category.find();

  await Category.insertMany([
    {
      name: 'Pizza',
      parent: String(categories[0]._id)
    },
    {
      name: 'Lasanha',
      parent: String(categories[0]._id)
    },
    {
      name: 'Sushi',
      parent: String(categories[1]._id)
    },
    {
      name: 'Temaki',
      parent: String(categories[1]._id)
    },
  ]);

};

seedDB().then(() => {
  console.log('Success!');
  mongoose.connection.close();
});
