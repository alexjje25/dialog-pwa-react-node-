import React from 'react'
import { Img } from 'react-image'
import { useParams } from 'react-router'

import Grid from '../../components/Card/Grid'
import ImageCard from '../../components/Card/ImageCard'

import UserCard from '../../components/Card'
import {User, useUserDetailsQuery}  from '../../apollo'
import {
  Container,
  Title,
  Info,
  InfoItem,
  Labelinfo,
  InfoItemV,
  UserContainer,
} from './styles'

interface Params {
  id: string
}

function Profile() {
  const { id } = useParams<Params>()
  const { data} = useUserDetailsQuery({ variables: { id } })

  const user = React.useMemo(() => {
    if (!data) return
    return data.find
  }, [data])

  if (!user ) {
    return (
      <div>
       
      </div>
    )
  }

  return (
    <Container>
      <UserContainer>
        <Img
          src={user.picture}
          loader={<ImageCard />}
          alt="userProfileImage"
          loading="lazy"
        />

        <Info>
          <InfoItem>
            <Labelinfo>name: </Labelinfo>
            <InfoItemV>{user.name}</InfoItemV>
          </InfoItem>
          <InfoItem>
            <Labelinfo>age: </Labelinfo>
            <InfoItemV>{user.age}</InfoItemV>
          </InfoItem>
          <InfoItem>
            <Labelinfo>email: </Labelinfo>
            <InfoItemV>{user.email}</InfoItemV>
          </InfoItem>
        </Info>
      </UserContainer>

      <Title>Friends:</Title>
      <Grid>
        {user.friends.map(friend => (
          <UserCard data={friend as User} />
        ))}
      </Grid>
    </Container>
  )
}

export default Profile
