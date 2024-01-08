import styled from "styled-components";

export const Button = styled.button`
margin: 20px 0 20px 20px;
padding: 10px 20px; 
font-size: 16px; 
background-color: #3498db;
color: #fff; 
border: none;
cursor: pointer;

&::before {
    content: '\\2190';
    margin-right: 5px;
    font-size: 18px;
}
`;

export const BriefInfoMov = styled.div`
display: flex;
// border-bottom: 2px solid #000;
box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.3);
`;

export const ImgInfoMov = styled.img`
margin: 0 0 15px 20px;
`;

export const TextInfoMov = styled.div`
margin-left: 15px;
`;