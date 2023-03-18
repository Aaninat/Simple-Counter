//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import SecondsCounter from "./component/secondsCounter.jsx";


let contador = 0;
setInterval(() => {
  
    
    //render your react application
    ReactDOM.render(<SecondsCounter seconds = {contador}/>, document.querySelector("#app"));
    contador++
},500)


