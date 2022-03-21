import styled from "styled-components";
import { NavItem } from "./navItem";

const Wrapper = styled.div`
    background: #292C3E;
    width: 260px;
    padding-top: 30px;
`;

const NavCategory = styled.div`
    margin: 40px 20px 0px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    color: #F0F1F5;
`;

export const Navigation: React.FC = () => {
    return (
       <Wrapper>
           <NavItem fileName="dashboard" title="Dashboard" />
           <NavCategory>Training</NavCategory>
           <NavItem fileName="courses" title="Courses" />
           <NavItem fileName="library" title="Library" />
           <NavCategory>Need help?</NavCategory>
           <NavItem fileName="support" title="Support" />
        </Wrapper>
    )
}