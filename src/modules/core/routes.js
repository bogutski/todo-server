import groupRouter from '../group/groupRoutes';
import infoRouter from '../info/infoRoutes';

export default function routes(app) {
  app.use('/group', groupRouter);
  app.use('/info', infoRouter);
}
