import React from 'react'
import CategoryList from '../CategoryList';
import Header from '../Header';
import Menu from '../Menu';
import { Container } from './styles'

const LayoutMain: React.FC = () => (
  <Container>
    <Header />
    <Menu />
    <CategoryList />
  </Container>
)

export default LayoutMain;
