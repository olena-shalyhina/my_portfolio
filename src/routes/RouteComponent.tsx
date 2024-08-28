import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { AboutPage } from '../pages/AboutPage';
import { SkillsPage } from '../pages/SkillsPage';
import { ContactsPage } from '../pages/ContactsPage';
import { ProjectsPage } from '../pages/ProjectsPage';

export const RouteComponent: FC = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path={`me`} element={<HomePage />} />
      <Route path={`about`} element={<AboutPage />} />
      <Route path={`skills`} element={<SkillsPage />} />
      <Route path={`projects`} element={<ProjectsPage />} />
      <Route path={`contacts`} element={<ContactsPage />} />
    </Routes>
  );
};
