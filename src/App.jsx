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
// import JobPageFetchingDataUsingUseEffectExampleOnly from "./pages/JobPageFetchingDataUsingUseEffectExampleOnly"; THIS IS EXAMPLE OF FETCHING DATA USE USEEFFECT!!
import JobPage, { jobLoader } from "./pages/JobPage";
{
  /* added { jobLoader } because we using params to fetch data from the API and not useEffect anymore */
}
import AddJobPage from "./pages/AddJobPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/jobs" element={<JobsPage />} />
      <Route path="/add-job" element={<AddJobPage />} />
      {/* <Route path="/jobs/:id" element={<JobPageFetchingDataUsingUseEffectExampleOnly />} /> */}
      <Route path="/jobs/:id" element={<JobPage />} loader={jobLoader} />
      {/* added loader={jobLoader} to this because we not using useEffect to fetch data we are using params */}
      {/* the colon signifies that itt is dynamic  */}
      <Route path="*" element={<NotFoundPage />} />
      {/* using the asterisks is like a catch all meaning if there is any page not found in our website them the 404 will show */}
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
