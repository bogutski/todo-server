import { Router } from 'express';
import { info } from './infoControllers';

const router = Router();

router.get('/', info);

export default router;
