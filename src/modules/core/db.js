import mongoose from 'mongoose';

export default function mongoConnection() {
  mongoose.set('useCreateIndex', true);
  mongoose.connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PWD}@${
      process.env.MONGO_HOST
    }/${process.env.MONGO_DB_NAME}`,
    { useNewUrlParser: true },
  );

  mongoose.connection.on('error', () => {
    throw new Error('Unable to connect to database');
  });

  // When the connection is disconnected
  mongoose.connection.on('disconnected', () => {
    console.log('Mongoose default connection disconnected');
  });
}
