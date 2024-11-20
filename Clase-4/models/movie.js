import { randomUUID } from 'node:crypto'
import { readJSON } from ' ../utils.js '

const movies = readJSON('../movies.json')

export class MovieModel {
  static getAll = async ({ genre }) => {
    if (genre) {
      return movies.filter((movie) =>
        movie.genre.some((g) => g.toLowerCase() === genre.toLowerCase())
      )
    }
    return movies
  }

  static async getById({ id }) {
    const movie = movies.find((movie) => movie.id === id)
    return movie
  }

  static async create(input) {
    const newMovie = {
      id: randomUUID(),
      ...input,
    }
    movies.push(newMovie)

    return newMovie
  }
}
