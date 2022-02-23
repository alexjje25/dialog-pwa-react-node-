import React from 'react'
import { Img } from 'react-image'

import  { User } from '../../apollo'
import ImagePlaceholder from './ImageCard'
import {
  Container,
  Info,
  InfoItem,
  InfoItemLabel,
  InfoItemValue,
  ContentWrapper,
} from './styles'

type Usersearch = Pick <User,'picture' | 'email' | '_id' | 'name' | 'age' | 'eyeColor' | 'company'>

interface Props {
  data: Usersearch
  onClick?: (_id: string) => void
}

const info: Partial<keyof Usersearch>[] = [
  'name',
  'age',
  'eyeColor',
  'company',
  'email',
]

function Card({ data, onClick }: Props) {
  return (
    <Container onClick={() => onClick?.(data._id)}>
      <ContentWrapper>
        <Img
          src={data.picture}
          loader={<ImagePlaceholder />}
          alt="userCardImage"
         
        />

        <Info>
          {info.map(key => (
            <InfoItem key={key}>
              <InfoItemLabel>{key}: </InfoItemLabel>
              <InfoItemValue>{data[key]}</InfoItemValue>
            </InfoItem>
          ))}
        </Info>
      </ContentWrapper>
    </Container>
  )
}

export default Card
