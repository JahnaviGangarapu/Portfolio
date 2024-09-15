import styled from "styled-components";
import _default from "../../default";

export const Document = styled.img`
    display: none;
    height: 70px;
    width: fit-content;
    background-color: #000;
    border-radius: 10px;
    &:hover{
        cursor: pointer;
        opacity: 0.8;
    }
`
export const Span = styled.span`
overflow: hidden;
display: -webkit-box;
max-width: 100%;
-webkit-line-clamp: 4;
-webkit-box-orient: vertical;
text-overflow: ellipsis;
`
export const SectionDesc = styled.div`
background: ${({ theme }) => theme.card};
width: 900px;
border-radius: 10px;
border: 0.1px solid #00FFFF;
padding: 92px 16px;
margin-left:130px;
margin-top:20px;
justify-content: space-between;
position: relative;
overflow: hidden;
display: flex;
flex-direction: column;
gap: 12px;
transition: all 0.3s ease-in-out;
&:hover{
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
    transform: translateY(-5px);
}
@media only screen and (max-width: 768px){
    padding: 10px;
    gap: 8px;
    width: 300px;
}

&:hover ${Document}{
    display: flex;
}

&:hover ${Span}{
    overflow: visible;
    -webkit-line-clamp: unset;

}

`;

export const Title = styled.div`
font-size: 22px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
margin-top: 12px;
      font-size: 32px;
  }
`;

export const SectionContent=styled.div`
font-size: 18px;
text-align: center;
max-width: 1000px;
color: ${({ theme }) => theme.text_secondary};
@media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
}`;