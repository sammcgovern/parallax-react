import styled from "styled-components";
import { Flex, H2 } from "../../defaultStyles"
import { CategoryItem } from "./categoryItem";

const Wrapper = styled.div`
    margin-top: 60px;
`;

export const Categories: React.FC = () => {
    return (
        <Wrapper>
            <H2>Categories</H2>
            <Flex>
                <CategoryItem title="CSS" fileName="laptop" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                <CategoryItem title="Web" fileName="web" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                <CategoryItem title="Miscellaneous" fileName="desktopDownload" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
            </Flex>
            </Wrapper>
    )
}