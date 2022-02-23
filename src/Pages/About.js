import React from 'react';
import Employees from '../components/Employees';
import Paragraph from '../components/Paragraph';
import Title from '../components/Title';
import employees from '../data/employees-data';

import aboutLogo from '../images/Site/logo_purple.png'
import logotype from '../images/Site/logotype_white.png'


const paragraphContent = `A Lune nasceu com a vontade de atender a demanda de websites com uma cara jovem e despojada, visando sempre a diversidade e o humor. Para nós, o seu desejo é uma ordem! Venha conhecer a nossa equipe!`;

const manifesto = `Papel e caneta criam ideias, assinam contratos, e até mesmo salvam vidas. O começo de algo que pode durar uma eternidade, normalmente se começa com um papel e uma caneta. Sejam piadas, manifestos como este, e até mesmo sites. Porém, um papel e uma caneta sem seu 'condutor' não são nada. Esses objetos não tem criatividade, vontade, paixão ou vida. Porém, são ótimas ferramentas que podem te levar à lua (e até mesmo te salvar caso esteja preso). E é com todos esses valores que esperamos usar papel e caneta para escrever não só o nosso futuro, como o futuro de todos que cruzarem com a gente. Ser Lune é ser operador de papéis e canetas. É usar eles para tocar os céus. É ir mais distante do que poderia se imaginar.`;

class About extends React.Component {
  render() {
    return (
      <div className="content">
        <Paragraph paragraphContent={paragraphContent} />
        <img src={aboutLogo} className="about-logo" alt="Logo da Lune" />
        <Paragraph paragraphContent={manifesto} />
        <img src={logotype} className="about-logotype" alt="Logotipo da Lune" />
        <Title title="TEAM" />
        <div className = "luners">
        {employees.map((empregado) => {
          return (
            <Employees
              key={empregado.id}
              sourceImage={empregado.image}
              altText={empregado.altimage}
              employeeName={empregado.name}
              employeeDescription={empregado.description}
              linkedin={empregado.linkedin}
              className={empregado.id % 2 === 0 ? 'employees-right' : 'employees-left'}
              employeeSide={empregado.id % 2 === 0 ? 'employee-side-right' : 'employee-side-left'}
            />
          );
        })} </div>
      </div>
    );
  }
}

export default About;
