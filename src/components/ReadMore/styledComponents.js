// Import the styled-components library
import styled from 'styled-components'

// MainContainer component
export const MainContainer = styled.div`
  max-width: 800px;
  max-height: 100vh;
  margin: 0 auto;
  padding: 20px;
`

// CardContainer component
export const CardContainer = styled.div`
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`

// MainHeading component
export const MainHeading = styled.h1`
  color: #333;
  font-size: 24px;
  margin-bottom: 10px;
  text-align: center;
  font-family: Roboto;
`

// MainPara component
export const MainPara = styled.p`
  color: #1e293b;
  font-size: 16px;
  text-align: center;
`

// Description component
export const Description = styled.p`
  color: #1e293b;
  font-size: 14px;
  max-height: ${props => (props.expanded ? 'none' : '100px')};
  overflow: hidden;
  transition: max-height 0.3s ease; /* Add smooth transition */
`

// Image component
export const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 4px;
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px; /* Adjust margin as needed */
`

export const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`
