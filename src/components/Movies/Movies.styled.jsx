import styled from "styled-components";

export const SearchForm = styled.form`
margin: 20px auto;
display: flex;
align-items: center;
width: 100%;
max-width: 600px;
background-color: #fff;
border: 2px #000 solid;
border-radius: 30px;
overflow: hidden;
`;

export const SearchFormInput = styled.input`
display: inline-block;
width: 100%;
font-size: 20px;
border: none;
outline: none;
padding-left: 30px;
padding-right: 4px;
`;

export const SearchFormButton = styled.button`
display: inline-block;
    width: 58px;
    height: 48px;
    border: 0;
    background-image: url('./svg/loupe_79257.svg#Layer_1');
    background-size: 55%;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.6;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    outline: none;

    &:hover {
        opacity: 1;
    }
    `;
  
  export const SearchFormButtonLabel = styled.span`
  position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    clip-path: inset(50%);
    border: 0;
    `;