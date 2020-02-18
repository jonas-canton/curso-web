import React from 'react'

// O nome "props" é uma convenção

// Todo componente que exporta mais de um elemento precisa ser envolvido por uma única tag
// Ex.: <div><h1>Oi</h1><h2>Tchau</h2></div>
// No exemplo acima, a div está envolvendo os 2 elementos h1 e h2
// Ou pode-se, no lugar na div, utilizar a tag <React.Fragment>, que não gerará nenhuma tag HTML
// Podemos também utilizar apenas a tag <Fragment> quando importamos ela junto com o React:
// import React, { Fragment } from 'react'

// export default props => 
//     <React.Fragment>
//         <h1>Bom dia {props.nome}!</h1>
//         <h2>Até breve!</h2>
//     </React.Fragment>

// Também podemos exportar mais de um elemento através de um array:

export default props => [
    <h1 key='h1'>Bom dia, {props.nome}!</h1>,
    <h2 key='h2'>Até breve!</h2>
]

// No caso de exportar via array, o React pede para que seja informada uma propriedade "key" para cada elemento