import styled from "styled-components"
import img from "../../assets/home-bkg.jpg"


export const Container = styled.div`
    width: 100vw ;
    height:100% ;
    background-image:url(${img}) ;
    background-position:center;
    background-size:cover;
    background-repeat: no-repeat;
   
    
`

export const Button = styled.div`
    display:flex ;
    width: 100vw;
    height:100vh ;
    justify-content: center;
    align-items:center ;
    font-size:2em ;
   
a{
    color: #fff;
    border: 2px solid;
    width: 200px;
    text-align:center ;
    padding: 0.1em;
    border-image: linear-gradient(45deg,red,blue) 10;
} 


`

export const Header = styled.header`
    display:flex ;
    justify-content:flex-end ;
    padding-right:4em ;

h2{
    margin:1em ;
    color: #fff;
    font-size:1.6em ;
    cursor: pointer;
    
}
`