import morgan from 'morgan';

export default function logger(app) {
  app.use(morgan('dev'));
}
