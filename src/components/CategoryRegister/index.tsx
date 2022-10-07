import React, { useState } from 'react'
import { Category } from '../../interfaces/ICategory';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ButtonArea, Container, Form, InputContainer, InputGroup } from './styles';

const CategoryRegister: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const postCategory = async (data: Category) => {
    try {
      const url = "https://cnctesteapl.azurewebsites.net/odata/CategoriaCliente";
      const promise = fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;odata=verbose',
        },
        body: JSON.stringify(data),
      })
      toast.promise(
        promise,
        {
          pending: 'Aguarde...',
          success: 'Cadastro realizado com sucesso!',
          error: 'Ocorreu algum erro'
        }
      )
    } catch (error) {
      console.log(error);
    }
  }

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }

  const handleChangeDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    const data = {
      "Nome": name,
      "Descricao": description,
      "_IdEntidadeSindical": "6a8be2a2-2636-43d4-b9c0-002a50888604"
    }
    event.preventDefault();
    await postCategory(data);
    setName("");
    setDescription("");
  }

  return (
    <>
      <Container>
        <header>Cadastro de Categoria</header>
        <Form onSubmit={handleSubmit}>
          <InputContainer>
            <InputGroup>
              <label htmlFor="name">Nome da Categoria*:</label>
              <input
                id="name"
                value={name}
                type="text"
                placeholder={`Ex: "Consumidor"`}
                autoComplete="off"
                onChange={handleChangeName}
                required={true}
              />
            </InputGroup>
            <InputGroup>
              <label htmlFor="description">Descrição:</label>
              <input
                id="description"
                value={description}
                type="text"
                placeholder="Breve descrição da categoria"
                autoComplete="off"
                onChange={handleChangeDescription}
                required={false}
              />
            </InputGroup>
          </InputContainer>
          <ButtonArea>
            <button type="submit">Cadastrar</button>
          </ButtonArea>
        </Form>
      </Container>
      <ToastContainer />
    </>
  )
}

export default CategoryRegister;
