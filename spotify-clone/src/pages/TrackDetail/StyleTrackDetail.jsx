import styled from "styled-components";

export const TrackContainer = styled.div`
    display:flex ;
    flex-direction:column ;
    width:100vw ;
    height:100vh ;
    align-items:center ;
    padding-top:3em ;
   

p{
    font-size:2em ;
    font-weight:500 ;
    font-family:sans-serif ;
}

form{
    display: flex;
    flex-direction:column ;
    width:400px ;
    gap: 1em;
    

}

input{
    font-size:1.4em ;
    font-family:sans-serif ;
    border:none ;
    border-bottom:1px solid #000 ;
    outline:none ;
    margin-bottom:1em;
 
}

button{
    background-image:linear-gradient(20deg, green, blue);
    color:#FFF ;
}

`
