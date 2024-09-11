import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";
import JobPage from "./pages/JobPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/jobs" element={<JobsPage />} />
      <Route path="/jobs/:id" element={<JobPage />} />{" "}
      {/* the colon signifies that itt is dynamic  */}
      <Route path="*" element={<NotFoundPage />} />{" "}
      {/* using the asterisks is like a catch all meaning if there is any page not found in our website them the 404 will show */}
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
