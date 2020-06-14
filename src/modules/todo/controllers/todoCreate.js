import mongoose from 'mongoose';
import Todo from '../todoModel';

export default async function todoCreate(req, res) {
  const _id = new mongoose.Types.ObjectId();

  const todo = new Todo({
    _id,
    name: req.body.name,
    description: req.body.description,
    done: req.body.done || false,
  });

  todo
    .save()
    .then(() => {
      res.status(201).json('Todo created');
    })
    .catch(err => {
      res.status(500).json(err);
    });
}
