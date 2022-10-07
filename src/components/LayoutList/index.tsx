import React from 'react'
import CategoryList from '../CategoryList';
import Menu from '../Menu';
import { Container } from './styles'

const LayoutMain: React.FC = () => (
  <Container>
    <Menu />
    <CategoryList />
  </Container>
)

export default LayoutMain;
