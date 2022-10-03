import styled from "styled-components";
// import { CreateGlobalStyle } from 'styled-components';

export const Forminput=styled.form`

display: flex;
flex-direction: column;
align-items: flex-start;
gap:25px;
margin: 140px;
`;


export const Container =styled.div`
    width: 40rem;
    border-radius: 5px;
    background-color: rgba(0, 255, 0, 0.1);
    padding: 10px;
    margin: 25px 85px;
`;
  
  export const Col25=styled.div` 
    float: left;
    width: 25%;
    margin-top: 6px;
  `;
  
  export const Col75=styled.div`
    float: left;
    width: 75%;
    margin-top: 6px;
  `;
  
  
  export const Row=styled.div`

    &:after{
    content: "";
    display: table;
    clear: both;
  }
  `;



export const Inputtag=styled.input`

     width: 100%;
     padding: 12px;
     border: 1px solid #ccc;
     border-radius: 4px;
     resize: vertical;
  `;
export const Texttag=styled.textarea`

width: 100%;
padding: 12px;
border: 1px solid #ccc;
border-radius: 4px;
resize: vertical;
`;

export const Labletag=styled.label`
padding: 12px 130px 12px 0;
  display: inline-block;

`;
