import mysql from 'mysql2/promise';

const DEFAULT_CONFIG = {
  host: '127.0.0.1',
  user: 'root',
  port: 3306,
  password: '',
  database: 'moviesdb',
};
const connectionString = process.env.DATABASE_URL ?? DEFAULT_CONFIG;

const connection = await mysql.createConnection(connectionString);

export class MovieModel {
  static async getAll({ genre }) {
    console.log('getAll');

    if (genre) {
      const lowerCaseGenre = genre.toLowerCase();

      const [genres] = await connection.query(
        'SELECT id, name FROM genre WHERE LOWER(name) = ?;',
        [lowerCaseGenre]
      );

      if (genres.length === 0) return [];

      const [{ id }] = genres;

      return [];
    }

    const [movies] = await connection.query(
      'SELECT title, year, director, duration, poster, rate, id FROM movie;'
    );

    return movies;
  }

  static async getById({ id }) {
    const [movies] = await connection.query(
      `SELECT title, year, director, duration, poster, rate, id
        FROM movie WHERE id = ?;`,
      [id]
    );

    if (movies.length === 0) return null;

    return movies[0];
  }

  static async create({ input }) {
    const {
      genre: genreInput,
      title,
      year,
      duration,
      director,
      rate,
      poster,
    } = input;

    const [uuidResult] = await connection.query('SELECT UUID() uuid;');
    const uuid = uuidResult[0].uuid;
    try {
      await connection.query(
        `INSERT INTO movie (id, title, year, director, duration, poster, rate)
          VALUES (?, ?, ?, ?, ?, ?, ?);`,
        [uuid, title, year, director, duration, poster, rate]
      );
    } catch (e) {
      console.log('Error creating movie');
    }

    const [movies] = await connection.query(
      `SELECT title, year, director, duration, poster, rate, id
        FROM movie WHERE id = ?;`,
      [uuid]
    );

    return movies[0];
  }

  static async delete({ id }) {}

  static async update({ id, input }) {}
}
