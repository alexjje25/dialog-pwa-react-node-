import React from 'react'
import styled from 'styled-components'

interface Props {
  onSubmit: (text: string) => void
  initialValue?: string
}

function Searchuser({ onSubmit, initialValue = '' }: Props) {
  const [search, setSearchValue] = React.useState(initialValue)

  return (
    <Searchuser.Container>
      <input
        value={search}
        onChange={e => setSearchValue(e.currentTarget.value)}
        type="text"
        placeholder="Search"
        aria-label="search"
        onKeyDown={event => {
          //clicando em "enter" ele retorna o name pesquisado
          if (event.key === 'Enter') {
            onSubmit(search)
          }
        }}
      />
    </Searchuser.Container>
  )
}

Searchuser.Container = styled.div`
  min-width: 30%;

  input {
    height: 2.8rem;
    border-radius: 25px;
    padding: 12px;
    border: 1px solid #fff;
    color: #fff;
    width: 100%;
    font-size: 18px;
    transition: all 0.2s;
    background: black;
    
    backdrop-filter: blur(5.5px);
    -webkit-backdrop-filter: blur(5.5px);
    border-radius: 13px;
    transition: all 0.2s;

    &:focus {
      transform: scale(1.02);
      border-color: #fff;
    }

    &::placeholder {
      color: #ddd;
    }
  }
`

export default Searchuser
