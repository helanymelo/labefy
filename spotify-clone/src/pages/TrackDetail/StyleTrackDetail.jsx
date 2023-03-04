import styled from "styled-components";

export const TrackContainer = styled.div`
    display:flex ;
    flex-direction:column ;
    width:100vw ;
    height:100vh ;
    align-items:center ;
    padding-top:3em ;
    background-color:#000 ;

h2{
    color:#fff ;
}

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
    width:600px ;
    height:5vh ;
    font-size:1.4em ;
    font-family:sans-serif ;
    border:none ;
    border-bottom:1px solid #000 ;
    outline:none ;
    margin-bottom:1em;
    border-radius: 5px;
    
 
}

button{
    background-image:linear-gradient(20deg, green, blue);
    color:#FFF ;
    width:602px ;
    height:5vh ;
    border:none ;
    margin-bottom:2em ;
    outline:none ;
}

button:hover{
    background-image:linear-gradient(20deg, pink, purple, pink);
}

`

export const ContainerInfo = styled.div`    
    display:flex ;
    justify-content:space-between ;
    width:30vw ;
   
    border-bottom: 1px solid #fff;
    align-items: center;

svg{
    font-size:1em ;
    cursor:pointer ;
    color: #ddd;
}

span{
    font-size:1.4em ;
    color:#fff ;
    padding-top:1.2em ;
}


`
