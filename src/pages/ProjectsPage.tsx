import { FC } from 'react';
import Starfish from '../assets/starfish.jpg';
import ShipmentsCrud from '../assets/shipments-crud.jpg';
import PriceCalculate from '../assets/price-calculate.jpg';
import Weather from '../assets/weather2.jpg';
import BookStore from '../assets/book-store.jpg';

import '../styles/ProjectsPage.scss';
import { Button } from 'react-bootstrap';

export const ProjectsPage: FC = () => {
  interface IProject {
    name: string;
    img: string;
    skills: string[];
    linkPreview: string;
    linkGH: string;
  }
  const projects: IProject[] = [
    {
      name: 'Starfish Restaurant',
      img: Starfish,
      skills: [
        'Vite',
        'TypeScript',
        'React',
        'Redux Toolkit',
        'React Router',
        'React Hook Form',
        'React Bootstrap',
        'SASS',
      ],
      linkPreview: 'https://olena-shalyhina.github.io/online_restaurant_react/',
      linkGH: 'https://github.com/olena-shalyhina/online_restaurant_react',
    },
    {
      name: 'Shipments Crud Page',
      img: ShipmentsCrud,
      skills: ['React', 'Redux', 'Redux Thunk', 'React Bootstrap', 'Axios'],
      linkPreview: 'https://olena-shalyhina.github.io/shipments_crud_page',
      linkGH: 'https://github.com/olena-shalyhina/shipments_crud_page',
    },
    {
      name: 'Price Calculate',
      img: PriceCalculate,
      skills: ['React', 'Redux', 'Chart.js', 'React Bootstrap', 'HTML', 'CSS'],
      linkPreview: 'https://olena-shalyhina.github.io/price_calculator',
      linkGH: 'https://github.com/olena-shalyhina/price_calculator',
    },
    {
      name: 'Weather App',
      img: Weather,
      skills: ['React', 'Axios', 'HTML', 'CSS'],
      linkPreview: 'https://olena-shalyhina.github.io/weather-app/',
      linkGH: ' https://github.com/olena-shalyhina/weather-app',
    },
    {
      name: 'Bookstore',
      img: BookStore,
      skills: ['JS', 'HTML', 'CSS'],
      linkPreview: 'https://olena-shalyhina.github.io/book-store/',
      linkGH: 'https://github.com/olena-shalyhina/book-store',
    },
  ];

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
