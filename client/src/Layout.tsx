import React from 'react'
import styled from 'styled-components'

import Header from './components/Header'

interface Props {
  children: JSX.Element
}

function Layout({ children }: Props) {
  return (
    <Layout.Container>
      <Header />
      {children}
    </Layout.Container>
  )
}

Layout.Container = styled.div`
  margin: 0 11%;
  min-height: 100vh;
  margin-bottom: 30px;
`

export default Layout
