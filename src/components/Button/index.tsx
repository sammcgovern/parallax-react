import styled from "styled-components";

import downArrow from "../../images/downArrow.svg";

const ButtonElement = styled.button`
    background: none;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #2C1674;
    img{ 
        margin-left: 10px;
    }
`;

export const Button: React.FC<{ onClick: () => void; title: string, }> = ({ onClick, title }) => {
    return (
        <ButtonElement onClick={onClick}>
            {title}
            <img src={downArrow} />
        </ButtonElement>
    )
}