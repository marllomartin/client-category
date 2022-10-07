import React from 'react'
import { Container } from './styles'
import Menu from '../Menu'
import CategoryRegister from '../CategoryRegister'

const LayoutMain: React.FC = () => (
  <Container>
    <Menu />
    <CategoryRegister />
  </Container>
)

export default LayoutMain;
