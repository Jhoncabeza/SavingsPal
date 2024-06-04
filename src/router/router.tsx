import { Navigate, useRoutes } from "react-router-dom";
import _LayoutBaseCard from "../HOC/_LayoutBaseCard/_LayoutBaseCard";
import { UserView } from "../features/Users";
import { LoansView } from "../features/Loans";
import NotFoundPage from "../features/NotFoundPage/NotFoundPage";
import PaymentView from "../features/Payment/View/PaymentView";
import FineView from "../features/Fine";
import ContributionsView from "../features/Contributions";
import ActivitiesView from "../features/Activities";
import StaticsView from "../features/Statics";

const Router = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <_LayoutBaseCard />,
      children: [
        { element: <Navigate to="/Users" />, index: true },
        { path: "Users", element: <UserView /> },
      ],
    },
    {
      path: "/",
      element: <_LayoutBaseCard />,
      children: [
        { element: <Navigate to="/Loans" />, index: true },
        { path: "Loans", element: <LoansView /> },
      ],
    },
    {
      path: "/",
      element: <_LayoutBaseCard />,
      children: [
        { element: <Navigate to="/Fines" />, index: true },
        { path: "Fines", element: <FineView /> },
      ],
    },
    {
      path: "/",
      element: <_LayoutBaseCard />,
      children: [
        { element: <Navigate to="/Contributions" />, index: true },
        { path: "Contributions", element: <ContributionsView /> },
      ],
    },
    {
      path: "/",
      element: <_LayoutBaseCard />,
      children: [
        { element: <Navigate to="/Activities" />, index: true },
        { path: "Activities", element: <ActivitiesView /> },
      ],
    },
    {
      path: "/",
      element: <_LayoutBaseCard />,
      children: [
        { element: <Navigate to="/Payments" />, index: true },
        { path: "Payments", element: <PaymentView /> },
      ],
    },
    {
      path: "/",
      element: <_LayoutBaseCard />,
      children: [
        { element: <Navigate to="/Statistics" />, index: true },
        { path: "Statistics", element: <StaticsView /> },
      ],
    },
    {
      path: "*",
      element: <_LayoutBaseCard />,
      children: [{ path: "*", element: <NotFoundPage /> }],
    },
  ]);
  return routes;
};

export default Router;
