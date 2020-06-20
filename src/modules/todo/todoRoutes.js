import { Router } from 'express';

import todoGetAll from './controllers/todoGetAll';
import todoGetById from './controllers/todoGetById';
import todoUpdateById from './controllers/todoUpdateById';
import todoCreate from './controllers/todoCreate';
import todoDeleteById from './controllers/todoDeleteById';
import todoChangeStatusById from './controllers/todoChangeStatusById';

const router = Router();

router.get('/', todoGetAll);
router.post('/', todoCreate);
router.get('/:todoId', todoGetById);
router.patch('/:todoId', todoUpdateById);
router.put('/:todoId', todoChangeStatusById);
router.delete('/:todoId', todoDeleteById);

export default router;
