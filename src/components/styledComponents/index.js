import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    color: white;
    background-color: ${props => props.disabled ? 'grey' : 'black'};
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
    &:hover {
        color: black;
        background-color: white;
    }
    @media(max-width: 768px){
        background-color: blue;
    }
    @media(min-width: 769px){
        background-color: black;
    }
`

export default function StyleTheComponents() {
  return (
    <Button disabled>Click me</Button>
  )
}
