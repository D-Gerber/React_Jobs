import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

const JobPageFetchingDataUsingUseEffectExampleOnly = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await fetch(`/api/jobs/${id}`);
        const data = await res.json();
        setJob(data);
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, []);

  return loading ? <Spinner /> : <h1>{job.title}</h1>;
};

export default JobPageFetchingDataUsingUseEffectExampleOnly;

// // import { useState, useEffect } from "react"; Only needed if we use the useState or useEffect hook to fetch data.
// // import Spinner from "../components/Spinner"; don't need the spinner because we not using useEffect anymore
// import { useParams, useLoaderData } from "react-router-dom";

// const JobPage = () => {
//   const { id } = useParams();
//   const job = useLoaderData();
//   // FETCHING DATA USING useEFFECT HOOK by REACT-ROUTER-DOM
//   /*
//   const [job, setJob] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchJob = async () => {
//       try {
//         const res = await fetch(`/api/jobs/${id}`);
//         const data = await res.json();
//         setJob(data);
//       } catch (error) {
//         console.log("Error fetching data", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchJob();
//   }, []);
//  */

//   return <h1>{job.title}</h1>;
//   /*loading ? <Spinner /> : */
//   // not using loading anymore because we not using useEffect to fetch data from the API so we only need to return the h1 for now.
// };

// const jobLoader = async ({ params }) => {
//   const res = await fetch(`/api/jobs/${params.id}`);
//   const data = await res.json();
//   return data;
// };

// export { JobPage as default, jobLoader };
