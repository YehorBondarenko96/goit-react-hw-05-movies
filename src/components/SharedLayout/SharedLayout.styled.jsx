import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
padding: 0;
`;

export const Header = styled.header`
box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
height: 60px;
padding-left: 30px;
display: flex;
align-items: center;
`;

export const Link = styled(NavLink)`
color: black;
text-decoration: none;
font-weight: 500;
font-size: 22px;
margin-left: 20px;

&.active {
    color: #83093b;
}
`;

export const Main = styled.main`
padding: 0 20px;
`;