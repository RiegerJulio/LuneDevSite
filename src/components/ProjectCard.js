import React from 'react';
import Title from './Title';

class ProjectCard extends React.Component {
  render() {
    const { image, name, description, className, projectSide } = this.props;
    return (
      <div className={className}>

        <div className="projectIMG">
          <img className="project-image" src={image} alt={`${image} imagem`} />
        </div>
        <div className={projectSide}>
          <Title title={name}/>
          <p className="project-description"> {description}</p>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
