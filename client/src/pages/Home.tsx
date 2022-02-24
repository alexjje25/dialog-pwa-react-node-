import React from 'react'
import { useHistory } from 'react-router'

import UserCard from '../components/Card'
import { useUsersListQuery } from '../apollo'
import useSearch from '../hooks/useSearch'

import Failed from '../components/Card/Failed'
import GridList from '../components/Card/Grid'

function Home() {
  const { query } = useSearch()
  const { data,  error } = useUsersListQuery({
    variables: { search: query },
  })
  const history = useHistory()

 

  if (error || data?.list.length === 0) {
    return <Failed />
  }

  return (
    <GridList>
      {data?.list.map(user => (
        <UserCard
          key={user._id}
          data={user}
          onClick={id => history.push(`/${id}`)}
        />
      ))}
    </GridList>
  )
}

export default Home
