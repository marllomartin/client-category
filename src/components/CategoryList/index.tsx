import React, { useCallback, useEffect, useState } from 'react'
import ClipLoader from "react-spinners/ClipLoader"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoTrashOutline } from "react-icons/io5"
import { Category } from '../../interfaces/ICategory';
import { Container, LoaderContainer, Table, ButtonArea } from './styles';

const CategoryList: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);


  const loadCategories = useCallback(async () => {
    try {
      setLoading(true);
      fetch('https://cnctesteapl.azurewebsites.net/odata/CategoriaCliente?$select=id,nome,descricao&$Filter=IdEntidadeSindical/Id eq 6a8be2a2-2636-43d4-b9c0-002a50888604', {
        method: 'GET',
      })
        .then((response) => response.json())
        .then((res) => {
          setLoading(false);
          setCategories(res.value);
        });
    } catch (error) {
      console.log(error);
    }
  }, [setCategories, setLoading]);

  const deleteCategory = async (id: string) => {
    const test = toast.loading("Please wait...");
    try {
      fetch(`https://cnctesteapl.azurewebsites.net/odata/CategoriaCliente(${id})`, {
        method: 'DELETE',
      })
        .then((response) => {
          loadCategories()
          if (response.status === 200) {
            toast.update(
              test,
              {
                render: "Categoria excluída com sucesso!",
                type: "success",
                closeButton: null,
                autoClose: 5000,
                isLoading: false
              }
            )
          }
          if (response.status === 500) {
            toast.update(
              test,
              {
                render: "Algo deu errado",
                type: "error",
                closeButton: null,
                autoClose: 5000,
                isLoading: false
              }
            );
          }
        })
    } catch (error) {
      console.log(error);
    }
  }

  const handleDelete = async (id: any) => {
    await deleteCategory(id);
  }

  useEffect(() => {
    loadCategories();
  }, [loadCategories]);

  return (
    <>
      <Container>
        <header>Listagem de Categorias</header>
        {loading ?
          <LoaderContainer>
            <ClipLoader color={"orange"} />
          </LoaderContainer>
          :
          <Table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Descrição</th>
                <th>Excluir</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category: Category) => {
                return (
                  <tr key={category.Id}>
                    <td>{category.Nome}</td>
                    <td>{category.Descricao ? category.Descricao : "Não informado."}</td>
                    <td>
                      <ButtonArea>
                        <button onClick={() => handleDelete(category.Id)}><IoTrashOutline /></button>
                      </ButtonArea>
                    </td>
                  </tr>)
              })}
            </tbody>
          </Table>
        }
      </Container>
      <ToastContainer />
    </>
  )
}

export default CategoryList;
