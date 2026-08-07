import { FC } from 'react';
import { Button } from 'react-bootstrap';
import { projects } from '../serviсes/api';
import '../styles/projectsPage.scss';

export const ProjectsPage: FC = () => {
  return (
    <section className='skills_section d-flex flex-column  justify-content-between text-secondary my-2 my-xxl-3'>
      <h5 className='text-uppercase d-lg-none pb-3'>My projects</h5>
      <div className='d-flex flex-wrap justify-content-center  align-items-center gap-4 gap-lg-5 gap-xxl-4 py-3 py-xxl-0 my-xxl-0'>
        {projects &&
          projects.map((project) => (
            <div
              className='card bg-dark col-11 col-md-5 col-lg-4 col-xxl-4'
              key={project.name}
            >
              <div
                className='front border border-1 border-secondary'
                style={{
                  backgroundImage: `url(${project.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
              <div className='back d-flex flex-column align-items-center justify-content-around py-3 text-secondary border border-1 border-secondary'>
                <h6 className='text-uppercase  text-accent'>{project.name}</h6>
                <ul className='d-flex align-items-center justify-content-center gap-2 flex-wrap small p-3 p-xxl-4'>
                  {project.skills &&
                    project.skills.map((skill) => (
                      <li
                        className='border border-secondary rounded-2 text-light bg-secondary px-1 py-1'
                        key={skill}
                      >
                        {skill}
                      </li>
                    ))}
                </ul>
                <div className='d-flex gap-3 justify-content-around'>
                  <Button
                    variant='outline-accent'
                    size='sm'
                    href={project.linkPreview}
                    target='_blank'
                  >
                    <span>Preview</span>
                  </Button>
                  <Button
                    variant='outline-accent'
                    size='sm'
                    href={project.linkGH}
                    target='_blank'
                  >
                    <span>GitHub</span>
                  </Button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};
