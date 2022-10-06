import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  border-radius: 6px;
  margin: 30px 20px;
  padding: 33px;
  background-color: #fff;
  box-shadow: 0 5px 10px rgba(0,0,0,0.1);
`

const SpinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`
export const LoaderContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  background: rgba(0, 0, 0, 0.834);
  z-index: 1;

  .spinner {
    width: 64px;
    height: 64px;
    border: 8px solid;
    border-color: #3d5af1 transparent #3d5af1 transparent;
    border-radius: 50%;
    animation: SpinAnimation 1.2s linear infinite;
    animation-name: ${SpinAnimation};
    animation-duration: 8s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}
`
