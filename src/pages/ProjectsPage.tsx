import { FC } from 'react';
import Starfish2 from '../assets/starfish2.jpg';
import ShipmentsCrud from '../assets/shipments-crud.jpg';
import PriceCalculate from '../assets/price-calculate.jpg';
import Weather from '../assets/weather2.jpg';
import BookStore from '../assets/book-store.jpg';

import '../styles/ProjectsPage.scss';

export const ProjectsPage: FC = () => {
  interface IProject {
    name: string;
    img: string;
    skills: string[];
    link: string;
  }
  const projects: IProject[] = [
    {
      name: '1',
      img: Starfish2,
      skills: ['HTML', 'CSS'],
      link: 'https://olena-shalyhina.github.io/online_restaurant_react/',
    },
    {
      name: '2',
      img: ShipmentsCrud,
      skills: ['HTML', 'CSS'],
      link: 'https://olena-shalyhina.github.io/shipments_crud_page/',
    },
    {
      name: '3',
      img: PriceCalculate,
      skills: ['HTML', 'CSS'],
      link: 'https://olena-shalyhina.github.io/price_calculator/',
    },
    {
      name: '4',
      img: Weather,
      skills: ['HTML', 'CSS'],
      link: 'https://olena-shalyhina.github.io/weather-app/',
    },
    {
      name: '5',
      img: BookStore,
      skills: ['HTML', 'CSS'],
      link: 'https://olena-shalyhina.github.io/book-store/',
    },
  ];

  return (
    <section className="skills_section text-info pb-3 mt-2">
      <h2 className="text-uppercase">My projects</h2>
      <div className="d-flex flex-wrap  justify-content-center align-items-center gap-5 py-2">
        {projects &&
          projects.map((project) => (
            <a
              href={project.link}
              key={project.name}
              className="project_card_wrapper d-flex flex-row border border-2 border-info"
              target="blank"
            >
              <div
                className="project_card_front"
                style={{
                  backgroundImage: `url(${project.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>

              {/* <div className="project_card_back">
              <p>{project.name}</p>
              <ul>
                {project.skills &&
                  project.skills.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </div> */}
            </a>
          ))}
      </div>
    </section>
  );
};
