import fs from 'fs'
import path from 'path'
import { promisify } from 'util'

export async function readFile<T>(identify = 'users'): Promise<T[]> {
  try {
    const Jsondata = await promisify(fs.readFile)(
      path.resolve(__dirname, '..', 'data', `${identify}.json`),
      { encoding: 'utf-8' },
    )

    if (!Jsondata) {
      return []
    }

    return JSON.parse(Jsondata)
  } catch (err) {
    console.log(err)
    throw new Error(`Path not found: `)
  }
}
