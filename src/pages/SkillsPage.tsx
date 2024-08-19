import { FC } from 'react';
import { getUniqueId } from '../utils/guid';
import css from '../assets/icons/css-3.svg';
import html from '../assets/icons/html-5.svg';
import js from '../assets/icons/js.svg';
import node from '../assets/icons/node-js.svg';
import git from '../assets/icons/git.svg';
import react from '../assets/icons/react.svg';
import redux from '../assets/icons/redux.svg';
import figma from '../assets/icons/figma.svg';
import wordpress from '../assets/icons/wordpress.svg';

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
    'REACT HOOK FORM',
    'CHART.JS',
    'GIT/GITHUB',
    'NPM',
    'YARN',
    'PHP',
    'WORDPRESS',
  ];

  const icons = [react, redux, html, node, js, css, git, figma, wordpress];

  return (
    <section className="skills_section text-info pb-3 mt-2">
      <h2 className="text-uppercase">My skills</h2>
      <div className="skill_ikons_wrapper">
        <div>
          <span>
            {icons &&
              icons.map((icon) => (
                <img key={getUniqueId()} src={icon} alt={`${icon} logo`}></img>
              ))}
          </span>
          <span>
            {icons &&
              icons.map((icon) => (
                <img key={getUniqueId()} src={icon} alt={`${icon} logo`}></img>
              ))}
          </span>
        </div>
      </div>
      <div className="skills_list_wrapper d-flex flex-wrap  justify-content-evenly align-items-center gap-2 py-3 ">
        {skills &&
          skills.map((skill) => (
            <div
              key={getUniqueId()}
              className="skill_box bg-dark fw-bold  d-flex  justify-content-center align-items-center"
            >
              {skill}
            </div>
          ))}
      </div>
    </section>
  );
};
