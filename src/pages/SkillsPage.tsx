import { FC } from 'react';
// import css from '../assets/icons/css-3.svg';
import '../styles/SkillsPage.scss';

export const SkillsPage: FC = () => {
  const skills = [
    'JAVASCRIPT (ES6+)',
    'TYPESCRIPT',
    'REACT',
    'REDUX',
    'HTML 5',
    'CSS 3',
    'SASS/SCSS',
    'BOOTSTRAP 5',
    'RESPONSIVE LAYOUT',
    'AXIOS',
    'React Hook Form',
    'CHART.JS',
    'GIT/GITHUB',
    'NPM',
    'YARN',
    'PHP',
    'WORDPRESS',
  ];

  // const icons = [];

  return (
    <section className="skills_section text-info row">
      <h1 className="text-uppercase">My skills</h1>
      <span className="skills_ikons_galery p-2">
        {/* {icons && icons.map((icon) => <img src={icon} alt="" />)} */}
      </span>
      <div className="skills_wrapper d-flex flex-wrap  justify-content-evenly align-items-center gap-3 py-3 ">
        {skills &&
          skills.map((skill) => (
            <div className="skill_box bg-dark fw-bold  d-flex  justify-content-center align-items-center">
              {skill}
            </div>
          ))}
      </div>
    </section>
  );
};
