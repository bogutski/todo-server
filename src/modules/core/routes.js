import todoRouter from '../todo/todoRoutes';
import infoRouter from '../info/infoRoutes';

export default function routes(app) {
  app.use('/todo', todoRouter);
  app.use('/info', infoRouter);
}
