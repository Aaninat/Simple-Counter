import React from "react"

function SecondsCounter(props){

    let texto = props.seconds.toString()
    let unidades = texto[texto.length-1]
    let decenas = texto[texto.length-2]
    let centenas = texto[texto.length-3]
    let mil = texto[texto.length-4]
    let diez = texto[texto.length-5]
    let cien= texto[texto.length-6]

    return <div>
  
<button id = "cien" className="btn btn-success">{cien==undefined? 0:cien}</button>
<button id = "diez" className="btn btn-success">{diez==undefined? 0:diez}</button>
<button id = "mil" className="btn btn-success">{mil==undefined? 0:mil}</button>
<button id = "centenas" className="btn btn-success">{centenas==undefined? 0:centenas}</button>
<button id = "decenas" className="btn btn-success">{decenas==undefined? 0:decenas}</button>
<button id = "unidades"className="btn btn-success">{unidades}</button>


  </div>
}

export default SecondsCounter;