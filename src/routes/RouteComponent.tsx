import { FC } from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { AboutPage } from '../pages/AboutPage';
import { SkillsPage } from '../pages/SkillsPage';
import { ContactsPage } from '../pages/ContactsPage';
import { ProjectsPage } from '../pages/ProjectsPage';

export const RouteComponent: FC = () => {
  return (
    <Routes>
      <Route index element={<Navigate to='/home' replace />} />
      <Route path={`home`} element={<HomePage />} />
      <Route path={`about`} element={<AboutPage />} />
      <Route path={`skills`} element={<SkillsPage />} />
      <Route path={`projects`} element={<ProjectsPage />} />
      <Route path={`contacts`} element={<ContactsPage />} />
    </Routes>
  );
};
