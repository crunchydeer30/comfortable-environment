import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import MapPage from './pages/MapPage';
import SubmissionsPage from './pages/SubmissionsPage';
import SubmissionPage from './pages/SubmissionPage';
import AppLayout from './ui/Layout/AppLayout';
import SignInPage from './pages/SignInPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/map" element={<MapPage />} />
      <Route path="/login" element={<SignInPage />} />        
      <Route path="/submissions">
        <Route index element={<SubmissionsPage />} />
        <Route path=":id" element={<SubmissionPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  ),
);

export default router;