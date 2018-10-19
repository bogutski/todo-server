import mongoose from 'mongoose';
import Group from '../groupModel';

export default async function groupCreate(req, res) {
  const _id = new mongoose.Types.ObjectId();

  const group = new Group({
    _id,
    name: req.body.name,
    description: req.body.description,
  });

  group
    .save()
    .then(() => {
      res.status(201).json('Group created');
    })
    .catch(err => {
      res.status(500).json(err);
    });
}
