import Group from '../groupModel';

export default async function groupUpdateById(req, res) {
  const id = req.params.groupId;

  Group.update({ _id: id }, { $set: req.body })
    .exec()
    .then(doc => {
      if (doc.n) {
        res.status(200).json('Group updated');
      } else {
        res.status(400).json('Group not found');
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
}
