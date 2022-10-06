import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Main from './pages/Main';
import List from './pages/List';

import GlobalStyle from './styles/GlobalStyle';

const App: React.FC = () => (
  <>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/CategoriaCliente" element={<List />} />
    </Routes>
    <GlobalStyle />
  </>
)

export default App;
