import { FC } from 'react';
import { getUniqueId } from '../utils/guid';
import { icons } from '../serviсes/api';
import { skills } from '../serviсes/api';
import '../styles/SkillsPage.scss';

export const SkillsPage: FC = () => {
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
