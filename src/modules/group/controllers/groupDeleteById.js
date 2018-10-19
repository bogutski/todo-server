import Group from '../groupModel';

const groupDeleteById = (req, res) => {
  const id = req.params.groupId;
  Group.remove({ _id: id })
    .exec()
    .then(doc => {
      if (doc.n) {
        res.status(200).json('Group deleted');
      } else {
        res.status(400).json('Group not found');
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};

export default groupDeleteById;
