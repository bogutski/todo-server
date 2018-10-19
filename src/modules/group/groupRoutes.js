import { Router } from 'express';

import groupGetAll from './controllers/groupGetAll';
import groupGetById from './controllers/groupGetById';
import groupUpdateById from './controllers/groupUpdateById';
import groupCreate from './controllers/groupCreate';
import groupDeleteById from './controllers/groupDeleteById';

const router = Router();

router.get('/', groupGetAll);

router.post('/', groupCreate);

router.get('/:groupId',  groupGetById);

router.patch(
  '/:groupId',
  groupUpdateById,
);

router.delete(
  '/:groupId',
  groupDeleteById,
);


export default router;
