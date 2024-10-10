import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../Context/AuthProvider";
import Login from "../Pages/Authentication/Login";
import Dashboard from "../Pages/LandingPage/Dashboard";
import BlankLayout from "../Layouts/BlankLayout";
import Users from "../Pages/Users/Users";
import Location from "../Pages/Locations/Location";
import Chemicals from "../Pages/Chemicals/Chemicals";
import Institutes from "../Pages/Locations/Institutes";
import StorageLocations from "../Pages/Locations/StorageLocations";
import ResearchCentres from "../Pages/Locations/ResearchCentres";
import Laboratories from "../Pages/Locations/Laboratories";
import Approvals from "../Pages/Approvals/Approvals";
import HigherApprovals from "../Pages/HigherApprovals/HigherApprovals";
import Experiments from "../Pages/Experiments/Experiments";
import Orders from "../Pages/Orders/Orders";

// ProtectedRoute to ensure only authenticated users can access certain routes
const ProtectedRoute = ({ children }) => {
  const { auth } = useContext(AuthContext);

  if (!auth?.isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};

// PublicRoute to ensure that authenticated users cannot access the login page
const PublicRoute = ({ children }) => {
  const { auth } = useContext(AuthContext);

  if (auth?.isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

// Define your routes
export const routes = [
  {
    path: "/",
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
    layout: "default", // Will use DefaultLayout
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
    layout: "blank", // Will use BlankLayout
  },
  {
    path: "/users",
    element: (
      <ProtectedRoute>
        <Users />
      </ProtectedRoute>
    ),
    layout: "blank", // Will use BlankLayout
  },
  {
    path: "/location",
    element: (
      <ProtectedRoute>
        <Location />
      </ProtectedRoute>
    ),
    layout: "blank", // Will use BlankLayout
  },
  {
    path: "/institutes",
    element: (
      <ProtectedRoute>
        <Institutes />
      </ProtectedRoute>
    ),
    layout: "blank", // Will use BlankLayout
  },
  {
    path: "/storagelocations",
    element: (
      <ProtectedRoute>
        <StorageLocations />
      </ProtectedRoute>
    ),
    layout: "blank", // Will use BlankLayout
  },
  {
    path: "/researchcentres",
    element: (
      <ProtectedRoute>
        <ResearchCentres />
      </ProtectedRoute>
    ),
    layout: "blank", // Will use BlankLayout
  },
  {
    path: "/laboratories",
    element: (
      <ProtectedRoute>
        <Laboratories />
      </ProtectedRoute>
    ),
    layout: "blank", // Will use BlankLayout
  },
  {
    path: "/chemicals",
    element: (
      <ProtectedRoute>
        <Chemicals />
      </ProtectedRoute>
    ),
    layout: "blank", // Will use BlankLayout
  },
  {
    path: "/approvals",
    element: (
      <ProtectedRoute>
        <Approvals />
      </ProtectedRoute>
    ),
    layout: "blank", // Will use BlankLayout
  },
  {
    path: "/higherApprovals",
    element: (
      <ProtectedRoute>
        <HigherApprovals />
      </ProtectedRoute>
    ),
    layout: "blank", // Will use BlankLayout
  },
  {
    path: "/orders",
    element: (
      <ProtectedRoute>
        <Orders />
      </ProtectedRoute>
    ),
    layout: "blank", // Will use BlankLayout
  },
  {
    path: "/experiments",
    element: (
      <ProtectedRoute>
        <Experiments />
      </ProtectedRoute>
    ),
    layout: "blank", // Will use BlankLayout
  },
  {
    path: "*",
    element: <BlankLayout />,
    layout: "blank", // Will use BlankLayout
  },
];
