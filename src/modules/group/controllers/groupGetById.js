import Group from '../groupModel';

const groupGetById = (req, res) => {
  const id = req.params.groupId;
  Group.findById(id)
    .select('-__v')
    .exec()
    .then(doc => {
      if (doc) {
        res.status(200).json(doc);
      } else {
        res.status(404).json('No group for provided id');
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

export default groupGetById;
