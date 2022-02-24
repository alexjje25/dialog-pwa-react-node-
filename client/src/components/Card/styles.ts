import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 2px solid white;
  width: auto;
  padding: 22px 12px;
  border-radius: 15px;
  cursor: pointer;
  background: #000;
  
  

  img {
    width: 100%;
    max-width: 200px;
    align-self: center;
  }


`

export const ContentWrapper = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Info = styled.div`
  margin-top: 0.5rem;
`

export const InfoItem = styled.div`
  display: flex;
  gap: 5px;
`

export const InfoItemLabel = styled.strong``

export const InfoItemValue = styled.div`
  word-break: break-word;
`
