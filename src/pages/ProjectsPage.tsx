import { FC } from 'react';
import { Button } from 'react-bootstrap';
import { projects } from '../serviсes/api';
import '../styles/projectsPage.scss';

export const ProjectsPage: FC = () => {
  return (
    <section className="skills_section d-flex flex-column  justify-content-between text-info mt-2">
      <h2 className="text-uppercase pb-3">My projects</h2>
      <div className="d-flex flex-wrap  justify-content-center align-items-center gap-4 gap-md-5 py-3">
        {projects &&
          projects.map((project) => (
            <div className="card bg-dark" key={project.name}>
              <div
                className="front border border-3 border-info"
                style={{
                  backgroundImage: `url(${project.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
              <div className="back d-flex flex-column align-items-center justify-content-between py-3 bg-dark text-info border border-3 border-info">
                <h5 className="text-uppercase text-success">{project.name}</h5>
                <ul className="d-flex align-items-center justify-content-center gap-2 flex-wrap small p-1">
                  {project.skills &&
                    project.skills.map((skill) => (
                      <li
                        className="border border-info px-1 rounded-1"
                        key={skill}
                      >
                        {skill}
                      </li>
                    ))}
                </ul>
                <div>
                  <Button
                    variant="outline-success"
                    size="sm"
                    className="text-info mx-3"
                    href={project.linkPreview}
                    target="_blank"
                  >
                    Preview
                  </Button>
                  <Button
                    variant="outline-success"
                    size="sm"
                    className="text-info mx-3"
                    href={project.linkGH}
                    target="_blank"
                  >
                    GitHub
                  </Button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};
