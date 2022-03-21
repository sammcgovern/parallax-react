import styled from "styled-components";
import { LinksWrapper } from "./linksWrapper";
import { Logo } from "./logo";
import { Search } from "./search";

const AppBar = styled.div`
background: #FFFFFF;
box-shadow: 0px 8px 24px -10px rgba(0, 0, 0, 0.24);
height: 80px;
display: flex;
justify-content: space-between;

`;

export const Header: React.FC = () => {
    return (
        <AppBar>
            <Logo />
            <Search />
            <LinksWrapper />
        </AppBar>
    )
}