import { FC } from 'react';
import { icons } from '../serviсes/api';
import '../styles/SkillsPage.scss';

const skills = [
  'React',
  'TypeScript',
  'JavaScript',
  'React Native',
  'Expo',
  'React Navigation',
  'Redux Toolkit',
  'React Hooks',
  'React Hook Form',
  'React Router',
  'REST APIs / Axios',
  'Material UI',
  'Figma → React UI',
  'Responsive UI',
  'HTML5',
  'CSS / Sass',
  'Bootstrap',
  'Node.js',
  'Express.js',
  'PostgreSQL',
  'Supabase',
  'Git / GitHub',
];

export const SkillsPage: FC = () => {
  return (
    <section className='skills_section text-secondary my-3 d-flex flex-column gap-3 gap-xxl-5'>
      <h3 className='text-uppercase text-secondary d-lg-none'>My skills</h3>
      <div className='skill_ikons_wrapper'>
        <div>
          <span>
            {icons.map((icon, index) => (
              <img
                key={`${icon}-${index}`}
                src={icon}
                alt={`${icon} skill-icon`}
              />
            ))}
          </span>
          <span>
            {icons.map((icon, index) => (
              <img
                key={`${icon}-${index}`}
                src={icon}
                alt={`${icon} skill-icon`}
              />
            ))}
          </span>
        </div>
      </div>
      <div className='skills_list_wrapper d-flex flex-wrap justify-content-evenly align-items-center gap-3 gap-xxl-4 p-3'>
        {skills.map((skill, index) => (
          <div
            key={skill}
            style={{ animationDelay: `${index * 30}ms` }}
            className='skill_box bg-info d-flex justify-content-center align-items-center text-light fw-medium text-uppercase rounded-5'
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};
