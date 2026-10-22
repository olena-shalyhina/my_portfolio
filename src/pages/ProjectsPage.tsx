import { FC } from 'react';
import { projects } from '../serviсes/api';
import '../styles/projectsPage.scss';

export const ProjectsPage: FC = () => {
  return (
    <section
      className='projects-section text-secondary mb-2 mb-xxl-3'
      aria-labelledby='projects-title'
    >
      <h2 id='projects-title' className='page_title text-uppercase h5 d-lg-none'>
        My projects
      </h2>
      <div className='projects-grid'>
        {projects.map((project, index) => (
          <article
            className='project-card'
            key={project.name}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className='project-card__image'>
              <img
                src={project.img}
                alt={`${project.name} project preview`}
                loading='lazy'
                decoding='async'
              />
            </div>
            <div className='project-card__content'>
              <h3 className='project-card__title'>{project.name}</h3>
              <ul
                className='project-card__skills'
                aria-label={`${project.name} technologies`}
              >
                {project.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
              <div className='project-card__actions'>
                <a
                  className='btn btn-outline-accent btn-sm'
                  href={project.linkPreview}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Preview
                </a>
                <a
                  className='btn btn-outline-accent btn-sm'
                  href={project.linkGH.trim()}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  GitHub
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
