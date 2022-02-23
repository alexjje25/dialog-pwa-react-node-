import { readFile } from '../utils/file'
import { User } from '../entities/User'

type Filter = (value: User, index: number) => boolean

export class Service {
  static find = async (filter?: Filter): Promise<User[]> => {
    const users = await readFile<User>('users')
    return filter ? users.filter(user => filter(user, user.index)) : users
  }
  static Id = async (id: string): Promise<User | undefined> => {
    const users = await readFile<User>('users')
    return users.find(user => user._id === id)
  }
}
