import styled from "styled-components";

import { Flex } from "../../defaultStyles"
import logout from "../../images/logout.svg";
import profile from "../../images/profile.svg";

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    height: 24px;
    margin: 28px 32px;
`;
const Link = styled.a`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #666F9C;
    margin-left: 10px;
    margin-right:10px;
    cursor: pointer;
`;

export const LinksWrapper: React.FC = () => {
    return (
        <Wrapper>
            <Flex>
                <img src={profile} />
                <Link>My Account</Link>
            </Flex>
            <Flex>
                <img src={logout} />
                <Link>Logout</Link>
            </Flex>
        </Wrapper>
    )
}