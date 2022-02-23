
import { Arg, FieldResolver, Query, Resolver, Root } from 'type-graphql'

import { User } from '../entities/User'
import { Service } from '../services/Service'
import { NameRegex } from '../utils/regex'

@Resolver(() => User)
export class Resolveruserfriend {
  
  @FieldResolver()
  async friends(
    @Root() user: User,
    @Arg('name', { nullable: true }) name?: string,
  ) {
    if (name) {
      const regex = NameRegex(name)

      return user.friends.filter(friend => regex.test(friend.name))
    }

    return user.friends
  }

  
  @Query(() => [User])
  async list(@Arg('name', { nullable: true }) name?: string) {
    if (name) {
      const regex = NameRegex(name)

      return Service.find(user => regex.test(user.name))
    }

    return Service.find()
  }

  @Query(() => User)
  async find(@Arg('id') id: string) {
    return Service.Id(id)
  }
}
