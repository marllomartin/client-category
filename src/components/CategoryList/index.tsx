import React, { useEffect, useState } from 'react'
import { Container } from './styles';

const CategoryList: React.FC = () => {
  const [categoriesList, setCategoriesList] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const categories = async () =>
    setLoading(true);
  fetch('https://cnctesteapl.azurewebsites.net/odata/CategoriaCliente?$select=nome,descricao&$Filter=IdEntidadeSindical/Id eq 6a8be2a2-2636-43d4-b9c0-002a50888604', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;odata=verbose',
    },
  })
    .then((response) => response.json())
    .then((res) => {
      setLoading(false);
      setCategoriesList(res.value);
    });

  useEffect(() => {
    categories();
  }, []);

  return (
    <>
      <Container>
        {!loading ? categoriesList?.map(category => {
          return <p key={Math.random()}>{category.Nome} {category.Descricao}</p>
        }) : <p>Carregando...</p>}
      </Container>
    </>
  )
}

export default CategoryList;
