import styled from "styled-components";

import search from "../../images/search.svg";

const SearchBar = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
min-width: 600px;
align-items: center;
padding: 4px 4px 4px 16px;
height: 48px;
margin: 12px 16px;
top: 16px;
background: #FFFFFF;
border: 1px solid #E0E2EB;
box-sizing: border-box;
border-radius: 4px;

`;

const SearchText = styled.div`

`;

const SearchButton = styled.div`
  img {
    height: 20px;
    width: 20px;
  }
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  display: flex;
  background: #292C3E;
  border-radius: 4px;

`;

export const Search: React.FC = () => {
  return (
    <SearchBar>
      <SearchText>Search by keyword</SearchText>
      <SearchButton>
        <img src={search} />
      </SearchButton>
    </SearchBar>
  )
}