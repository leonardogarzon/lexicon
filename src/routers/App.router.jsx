import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import PortalLayout from "@components/portalLayout/PortalLayout.component";
import LoadingComponent from "@components/loading/Loading.component";

const LoginPage = lazy(() => import("@pages/Login.page"));
const ClientsPage = lazy(() => import("@pages/Clients.page"));
const FormPage = lazy(() => import("@pages/Form.page"));

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<LoadingComponent />}>
        <LoginPage />
      </Suspense>
    ),
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<LoadingComponent />}>
        <LoginPage />
      </Suspense>
    ),
  },
  {
    path: "/clients",
    element: (
      <PortalLayout>
        <Suspense fallback={<LoadingComponent />}>
          <ClientsPage />
        </Suspense>
      </PortalLayout>
    ),
  },
  {
    path: "/form",
    element: (
      <PortalLayout>
        <Suspense fallback={<LoadingComponent />}>
          <FormPage />
        </Suspense>
      </PortalLayout>
    ),
  },
]);

export default AppRouter;
