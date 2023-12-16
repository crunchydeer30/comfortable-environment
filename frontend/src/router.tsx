import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom';

import HomePage from './pages/Home';
import NotFoundPage from './pages/NotFound';
import MapPage from './pages/Map';
import SubmissionsPage from './pages/Submissions';
import SubmissionPage from './pages/Submission';
import AppLayout from './ui/Layout/AppLayout';
import SignInPage from './pages/Sign In';

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