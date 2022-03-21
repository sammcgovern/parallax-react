import styled from "styled-components";

export const H1 = styled.h1`
    font-family: Inter;
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    line-height: 60px;
    letter-spacing: -0.01em;
    text-align: left;
    margin: 10px 0px;
`;

export const H2 = styled.h2`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.01em;
  color: #292C3E;
`;

export const Page = styled.div`
  background: #F0F1F5;
  padding: 40px;
  width: 100%;
`;
export const Flex = styled.div`
  display: flex;
  
`;
export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
export const FlexCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TableWrapper = styled.div`
    background: #FFFFFF;
    border-radius: 8px;
    padding: 40px;
    margin-top: 40px;
    table {
        border-collapse: collapse;
        width: 100%;
        margin-bottom: 40px;
    }   
    th {
        border-bottom: 1pt solid #292C3E;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 24px;
        color: #292C3E;
        text-align: left;
    }
    td {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 24px;
        color: #292C3E;
        padding: 12px 0px;
        img { 
          margin-left: 11px;
        }
    }
    td.title{
        font-weight: 700;
        font-size: 14px;
    }
`;
