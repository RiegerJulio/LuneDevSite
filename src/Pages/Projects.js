import React from 'react';
import ProjectCard from '../components/ProjectCard';
import Title from '../components/Title';
import projectsData from '../data/projectsData';


class Projects extends React.Component {

  render() {

    return (
      <div className = "ruler">
        <div className="title" ><Title title={ 'Projetos' }/></div>
        <div className="content">
          <div className="projects-container">
            {projectsData.map((project) => (
              <ProjectCard
                key={project.id}
                image={project.image}
                name={project.name}
                description={project.description}
                className={project.id % 2 === 0 ? 'project-left' : 'project-right'}
                projectSide={project.id % 2 === 0 ? 'project-side-left' : 'project-side-right'}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;


// Falta puxar o componente Projetos criado pelo iago