import styled from 'styled-components';


export const HomeContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
`

export const Content = styled.div`
width: 100vw;
display: flex;
align-items: center;
justify-content: center;
background-color: rgba(0, 0, 0, 0.76);
`

export const Input = styled.input`
    border: 1px solid #ddd;
    height: 3.5rem;
    padding: 0px 2rem; 
    border-radius: 0.25rem 0 0 0.25rem;
    font-size: 1.3rem;


    &:focus,
    &:active {
    outline: none;
    box-shadow: none;
    }
`;

export const Button = styled.button`
    height: 3.65rem;
    padding: 0 2rem; 
    font-size: 1.3rem;
    border: 1px solid #111111;
    background: #111111;
    color: #fff;
    border-radius: 0 .25rem .25rem 0;
    cursor: pointer;
`;

export const ErrorMsg = styled.span`
    display: block;
    font-size: 1.3rem;
    color: red;
    margin-top : 1rem;
`