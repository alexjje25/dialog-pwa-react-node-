import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';



export type Scalar = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};


export type Friend = {
  __typename?: 'Friend';
  _id: Scalar['String'];
  index: Scalar['Int'];
  picture: Scalar['String'];
  age: Scalar['Int'];
  eyeColor: Scalar['String'];
  name: Scalar['String'];
  company: Scalar['String'];
  email: Scalar['String'];
  phone: Scalar['String'];
};

export type Query = {
  __typename?: 'Query';
  list: Array<User>;
  find: User;
};




export type QueryFindArgs = {
  id: Scalar['String'];
};

export type User = {
  __typename?: 'User';
  _id: Scalar['String'];
  email: Scalar['String'];
  index: Scalar['Int'];
  picture: Scalar['String'];
  age: Scalar['Int'];
  eyeColor: Scalar['String'];
  name: Scalar['String'];
  company: Scalar['String'];
  phone: Scalar['String'];
  greeting: Scalar['String'];
  friends: Array<Friend>;
};




export type UsersListQuery = (
  { __typename?: 'Query' }
  & { list: Array<(
    { __typename?: 'User' }
    & Pick<User, '_id' | 'name' | 'age' | 'eyeColor' | 'company' | 'email' | 'picture'>
  )> }
);




export type UserDetailsQuery = (
  { __typename?: 'Query' }
  & { find: (
    
    { __typename?: 'User' }
    & Pick<User, '_id' | 'name' | 'age' | 'email' | 'picture'>
    & { friends: Array<(
      { __typename?: 'Friend' }
      & Pick <Friend, 'picture' | 'name' | 'age' | 'eyeColor' | 'company' | 'email'> )>
    }
  ) }
);


export const UsersListDocument = gql`
    query Listuser($search: String) {
    list(name: $search) {
    _id
    name
    age
    eyeColor
    company
    email
    picture
  }
}
    `;


export function useUsersListQuery(baseOptions?: Apollo.QueryHookOptions<UsersListQuery >) {
        return Apollo.useQuery<UsersListQuery >(UsersListDocument, baseOptions);
      }
export function useUsersListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersListQuery>) {
          return Apollo.useLazyQuery<UsersListQuery >(UsersListDocument, baseOptions);
        }
export type UsersListQueryHookResult = ReturnType<typeof useUsersListQuery>;
export type UsersListLazyQueryHookResult = ReturnType<typeof useUsersListLazyQuery>;
export type UsersListQueryResult = Apollo.QueryResult<UsersListQuery>;

export const DetailsDocument = gql`
    query UserDetails($id: String!) {
  find(id: $id) {
    _id
    name
    age
    email
    picture
    friends {
      picture
      name
      age
      eyeColor
      company
      email
    }
  }
}
    `;
    
export function useUserDetailsQuery(baseOptions: Apollo.QueryHookOptions<UserDetailsQuery>) {
        return Apollo.useQuery<UserDetailsQuery>(DetailsDocument, baseOptions);
      }
export function useUserDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserDetailsQuery>) {
          return Apollo.useLazyQuery<UserDetailsQuery>(DetailsDocument, baseOptions);
        }
export type UserDetailsQueryHookResult = ReturnType<typeof useUserDetailsQuery>;
export type UserDetailsLazyQueryHookResult = ReturnType<typeof useUserDetailsLazyQuery>;
export type UserDetailsQueryResult = Apollo.QueryResult<UserDetailsQuery>;