import React from 'react'
import { Container } from './styles'
import Header from '../Header'
import Menu from '../Menu'

const LayoutMain: React.FC = () => (
  <Container>
    <Header />
    <Menu />
  </Container>
)

export default LayoutMain;
