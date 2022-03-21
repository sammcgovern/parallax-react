import styled from "styled-components";
import useImage from "../Navigation/useImage";
import navigationCircleRight from "../../images/navigationCircleRight.svg";
import { Flex } from "../../defaultStyles";

const Card = styled.div`
    width: 250px;
    height: 250px;
    background: #FFFFFF;
    box-shadow: 0px 8px 24px -16px rgba(0, 0, 0, 0.24);
    border-radius: 8px;
    margin-right: 24px;
    padding: 24px 16px;
    img {
        margin-bottom: 24px;
    }
    div {
        margin-bottom: 24px;
        img {
            margin-left: 10px;
        }
    }
`;
const Heading = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #292C3E;
`;
const Description = styled.div`
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 24px;
/* or 171% */
color: #292C3E;
`;

export const CategoryItem: React.FC<{ title: string, fileName: string ,  description: string}> = ({ title, fileName, description }) => {
    const { image } = useImage(fileName);
    return (
        <Card>
            <img src={image} />
            <Heading>{title}</Heading>
            <Description>{description}</Description>
            <Flex>View  <img src={navigationCircleRight} /></Flex>
        </Card>

    )
}