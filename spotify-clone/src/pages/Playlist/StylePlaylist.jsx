import styled from "styled-components";
import HeadPhone from "../../assets/notas_musicais.jpg"
// background-image:url(${img}) ;
export const ContainerInput = styled.div`
    display: flex;
    flex-direction:column ;
    align-items:center ;
    width:100vw ;
    font-size: 0.9em;
   
   
    background-image:url(${HeadPhone}) ;
    background-position:  center;
    background-repeat:no-repeat;
    background-size:cover ;
    height:100vh ;
    padding-top:1em ;


h1{
    color: #fff;
}



input{
    width:400px ;
    height:5vh ;
    border-radius:8px ;
    text-align: center;
    margin-bottom:1em ;
    font-size:1.6em ;
    border-image: linear-gradient(20deg,red,blue) 10;
    outline:none ;
    
}

button{
    width:412px ;
    font-size: 1.2rem;
    background-image:linear-gradient(20deg, red, blue);
    border: none;
    outline:none ;
    color: #fff;
}

button:hover{
    background-image:linear-gradient(20deg, green, purple);
}
`

export const MusicName = styled.div`
    display:flex ;
    justify-content:space-between;
    width:18vw ;
    padding-top: 2em;
    border-bottom: 1px solid #fff;


span{
    font-size:1.6em ;
    color:#fff ;
    
   
}

span a{
    color: #ddd;
    text-align:right ;
}



svg{
    font-size:1.6em ;
    cursor:pointer ;
    color: #ddd;
   
}

svg:hover{
    color:#eee;
    border-image: linear-gradient(20deg,red,blue) 10;
}


`