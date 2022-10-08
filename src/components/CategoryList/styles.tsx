import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 6px;
  margin: 15px 0px 20px;
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

  input {
    margin-top: 30px;
    border: none;
    background-color: #ededed;
    height: 40px;
    width: 300px;
    padding-left: 10px;
  }
`

export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 60px 60px 30px;

  .span {
  }
`

export const Table = styled.table`
  margin-top: 30px;
  table-layout: fixed;

  th {
    color: #0E1207;
    white-space: nowrap;
  }

  td, th {
    text-align: left;
    padding: 10px;
    white-space: pre-wrap;
  }

  tr:nth-child(even) {
    background-color: #fceccc;
  }
`

export const ButtonArea = styled.div`
  display: flex;
  justify-content: center;

  button {
    align-self: center;
    border: none;
    height: 40px;
    font-weight: 900;
    cursor: pointer;
    margin: 5px;
    background-color: transparent;
    color: white;
    text-transform: uppercase;
    &:hover {
      svg {
      color: #dd373a;
    }
    }
  }

  svg {
    height: 29px;
    width: 30px;
    color: black;
    transition: 0.25s;
  }
`
