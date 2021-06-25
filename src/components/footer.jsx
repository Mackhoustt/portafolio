const pieDePagina= styled.div `footer{
    background-color: #2c3e50;
    width: 100%;
    padding: 5px;

  
    display: flex;
    justify-content: space-between;
    align-items: center;

    flex-wrap: wrap;
    flex-direction: row;
}



footer div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-items: center;

}
footer div a{
    color: white;
    text-align: center;
    text-decoration: none;
    padding: 10px;
    flex-flow: row wrap;

}

footer div a:hover{
    background-color: green;
}`
const contenidoCabeza=()=>{
    return(          
    <pieDePagina footer>
        <pieDePagina div>
        <H4>Donde puedes encontrarnos:</H4>
        <a href="" ><img src="./image/logo twitter.png" alt="" srcset=""  class="imagenes" alt="" srcset=""><h6>Twitter</h6></a>
        <a href=""><img src="./image/logo ig.png" alt=""><h6>Instagram</h6></a>
        </pieDePagina div>
        </pieDePagina>)
}