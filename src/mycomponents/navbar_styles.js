import styled from 'styled-components';


export const ButtonContainer = styled.button`
text-transform : capitalize;
font-size : 1.4rem;
background : transparent;
border : 0.5px solid white;
color : white;
cursor : pointer;
transition: all 0.5s ease-in-out;
&:hover{
    background : grey;
}
`
export const Span = styled.span`
margin : 0.3rem;
`
export const Nav=styled.nav`
background-color : black;
& img  {
    width : 30px;
    filter : invert();
}
& img:hover{
    color: green !important;
    filter: invert(90%);
}

& Link:hover{
    color: yellow !important;
}
`


