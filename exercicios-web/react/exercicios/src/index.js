import React from 'react' // Responsável por converter todos os JSXs
import ReactDom from 'react-dom'

// import BomDia from './componentes/BomDia' // Componentes criados por mim precisam estar com letra maiúscula, para diferenciar das tags HTML

// const elemento = <h1>React</h1> // Isso é um JSX
// Sempre acrescentar a tag de fechamento nos componentes
// ReactDom.render(<BomDia nome="Jonas" />, document.getElementById('root'))

// *******************************************************************************************

// import Multi, { BoaNoite } from './componentes/Multiplos' // O label Multi funcionará por causa do "export default" do componente

// ReactDom.render(
//     <div>
//         <Multi.BoaTarde nome="Ana" />
//         <BoaNoite nome="Bia" />
//     </div>
// , document.getElementById('root'))

// *******************************************************************************************

// import Saudacao from './componentes/Saudacao'

// ReactDom.render(
//     <div>
//         <Saudacao tipo="Bom dia" nome="João" />
//     </div>
// , document.getElementById('root'))

// *******************************************************************************************

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDom.render(
    <div>
        <Pai nome="Paulo" sobrenome="Silva">
            {/* Como passar os componentes Filhos por aqui */}
            <Filho nome="Pedro" />
            <Filho nome="Paulo" />
            <Filho nome="Carla" />
        </Pai>
    </div>
, document.getElementById('root'))