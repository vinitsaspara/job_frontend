import { useState } from "react";
import Navbar from "./components/shared/Navbar";
import { createBrowserRouter } from "react-router-dom";
import Login from "./components/auth/login";
import Signup from "./components/auth/Signup";
import Home from "./components/Home";
import Jobs from "./components/Jobs";
import Profile from "./components/Profile";
import JobDescription from "./components/JobDescription";
import Companies from "./components/admin/Companies";
import CompanySetup from "./components/admin/CompanySetup";
import { RouterProvider } from "react-router-dom";
import Browse from "./components/Browse";
import CompanayCreate from "./components/admin/CompanayCreate";
import CompanyJob from "./components/admin/CompanyJob";
import Postjob from "./components/admin/Postjob";
import Applicants from "./components/admin/Applicants";
import ProtectedRoute from "./components/admin/ProtectedRoute";

const appRouter = createBrowserRouter([
  // user paths
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/jobs",
    element: <Jobs />,
  },
  {
    path: "/description/:id",
    element: <JobDescription />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },

  // admin paths
  {
    path: "/admin/companies",
    element: <ProtectedRoute><Companies /></ProtectedRoute> 
  },
  {
    path: "/admin/companies/create",
    element: <ProtectedRoute><CompanayCreate /></ProtectedRoute>
  },
  {
    path: "/admin/companies/:id",
    element: <ProtectedRoute><CompanySetup /></ProtectedRoute>
  },  
  {
    path: "/admin/jobs",
    element: <ProtectedRoute><CompanyJob /></ProtectedRoute>
  },
  {
    path: "/admin/jobs/create",
    element: <ProtectedRoute><Postjob /></ProtectedRoute>
  },
  {
    path: "/admin/jobs/:id/applicants",
    element: <ProtectedRoute><Applicants /></ProtectedRoute>
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
