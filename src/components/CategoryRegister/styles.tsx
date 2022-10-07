import styled from "styled-components";

export const Container = styled.div`
  border-radius: 6px;
  margin: 15px 20px 0px;
  padding: 33px;
  background-color: #fff;
  box-shadow: 0 5px 10px rgba(0,0,0,0.1);

  header {
    width: 100%;
    position: relative;
    white-space: nowrap;
    font-size: 20px;
    font-weight: 600;
    color: #0E1207;
  }

  header::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -5px;
    height: 3px;
    width: 27px;
    border-radius: 8px;
    background-color: orange;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 5px;
  background-color: #fff;
`

export const InputContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  width: 100%;

  label {
    margin-top: 15px;
    margin-bottom: 5px;
  }
  input {
    border: none;
    background-color: #ededed;
    height: 40px;
    width: 100%;
    min-width: 80px;
    padding-left: 10px;
    margin: 5px;
  }
`

export const ButtonArea = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  button {
    align-self: center;
    border: none;
    border-radius: 25px;
    width: 170px;
    height: 40px;
    font-weight: 700;
    cursor: pointer;
    background-color: navy;
    color: white;
    text-transform: uppercase;
  }

  .button:disabled {
    background-color: #b7b7b7;
    pointer-events: none;
  }
`
