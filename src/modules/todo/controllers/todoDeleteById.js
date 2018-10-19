import Todo from '../todoModel';

const todoDeleteById = (req, res) => {
  const id = req.params.todoId;
  Todo.remove({ _id: id })
    .exec()
    .then(doc => {
      if (doc.n) {
        res.status(200).json('Todo deleted');
      } else {
        res.status(400).json('Todo not found');
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};

export default todoDeleteById;
