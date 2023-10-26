import 'dotenv/config';
import app from './app';
import { AppDataSource } from './data-source';

AppDataSource.initialize()
  .then((): void => {
    const PORT: number = Number(process.env.PORT) || 3000;

    console.log('Server is running');

    app.listen(PORT, () =>
      console.log(`App is running on port ${PORT}`)
    );
  })
  .catch((err: unknown): void => {
    console.error(
      'Error during Data Source initialization',
      err
    );
  });
