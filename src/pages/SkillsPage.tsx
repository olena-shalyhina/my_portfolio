import { FC } from 'react';
import { getUniqueId } from '../utils/guid';
import { icons } from '../serviсes/api';
import { skills } from '../serviсes/api';
import '../styles/skillsPage.scss';

export const SkillsPage: FC = () => {
  return (
    <section className='skills_section text-secondary my-3 d-flex flex-column gap-lg-3 '>
      <h3 className='text-uppercase text-secondary d-lg-none'>My skills</h3>
      <div className='skill_ikons_wrapper'>
        <div>
          <span>
            {icons &&
              icons.map((icon) => (
                <img
                  key={getUniqueId()}
                  src={icon}
                  alt={`${icon} skill-icon`}
                ></img>
              ))}
          </span>
          <span>
            {icons &&
              icons.map((icon) => (
                <img
                  key={getUniqueId()}
                  src={icon}
                  alt={`${icon} skill-icon`}
                ></img>
              ))}
          </span>
        </div>
      </div>
      <div className='skills_list_wrapper d-flex flex-wrap  justify-content-evenly align-items-center gap-3 gap-xxl-4 py-3 my-xxl-4 '>
        {skills &&
          skills.map((skill) => (
            <div
              key={getUniqueId()}
              className='skill_box bg-info d-flex justify-content-center align-items-center w-25 text-light fw-medium'
            >
              {skill}
            </div>
          ))}
      </div>
    </section>
  );
};
