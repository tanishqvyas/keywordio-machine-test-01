// constants
import { routes } from "../constants/routes.constants";

// pages
import PageNotFound from "../pages/PageNotFound";
import Dashboard from "../pages/Dashboard";
import CreateAds from "../pages/CreateAds";

export const navRoutes = [
  {
    name: "Dashboard",
    path: routes.DASHBOARD,
    documentTitle: "Dashboard",
  },
  {
    name: "Create Ads",
    path: routes.CREATE_ADS,
    documentTitle: "Create Ads",
  },
];

export const pageRoutes = [
  {
    name: "Dashboard",
    path: routes.DASHBOARD,
    element: <Dashboard />,
  },
  {
    name: "Home",
    path: routes.HOME,
    element: <Dashboard />,
  },
  {
    name: "Create Ads",
    path: routes.CREATE_ADS,
    element: <CreateAds />,
  },
  {
    name: "Page Not Found",
    path: routes.NOT_FOUND,
    element: <PageNotFound />,
  },
];
