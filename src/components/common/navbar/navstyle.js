import styled from "styled-components";
// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../../resources/styles/font.css"

export const Linkz = styled(Link)`
  text-decoration: none;
  color: black;
  font-family: "LexendDeca-Regular";
`;
export const Navigation=styled.div`
    width: 95px;
    height: 730px;
    background-color:white;
    color: green;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 8rem;
    padding: 0 1rem;
    border-style: solid ;
    border-color: green;
`;


export const Combothree = styled.div`
display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    margin: 100px 0px 0px 0px;
    

`;


export const Searchbox = styled.div`
  gap:2px;
  color:red;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding:20px;
`;
export const Logo = styled.img`
  width: 50px;
`;

// export const Linko = styled.Link`
// text-decoration: none;
  
// `;