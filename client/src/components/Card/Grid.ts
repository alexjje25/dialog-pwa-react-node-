import styled from 'styled-components'

const Grid = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 5fr));

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export default Grid
