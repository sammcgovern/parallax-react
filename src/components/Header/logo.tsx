import styled from "styled-components";
import logo from "../../images/logo.png";

const Wrapper = styled.div`
    width: 56px;
    height: 56px;
    margin: 12px 24px;
`;

export const Logo: React.FC = () => {
    return (
        <Wrapper>
            <img src={logo} />
        </Wrapper>
    )
}