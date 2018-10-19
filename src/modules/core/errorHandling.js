export default function errorHandling(app) {
  app.use((req, res, next) => res.status(404).json('API not found')); // eslint-disable-line no-unused-vars

  app.use((error, req, res, next) => {
    // eslint-disable-line no-unused-vars
    res.status(error.status || 500);
    res.json(error.message);
  });
}
