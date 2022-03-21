import styled from "styled-components";
import useImage from "./useImage";

const NavLink = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    color: #F0F1F5;
`;
const Item = styled.div`
    display:flex;
    margin: 20px;
    img {
        margin-right: 10px;
    }
`;
export const NavItem: React.FC<{ title: string, fileName: string }> = ({ title, fileName }) => {
    const { image } = useImage(fileName);
    return (
        <Item>
            <img src={image} />
            <NavLink>{title}</NavLink>
        </Item>

    )
}