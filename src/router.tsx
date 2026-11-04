import { Link, Outlet, createRootRoute, createRoute } from "@tanstack/react-router";
import { BrandMark } from "./components/BrandMark";
import { ThemeToggle } from "./components/ThemeToggle";
import { HomePage } from "./routes/HomePage";

function RootLayout() {
  return (
    <>
      <header className="site-header" aria-label="Matt Anderson">
        <Link className="wordmark" to="/" aria-label="Matt Anderson">
          <BrandMark className="brand-mark" />
          <span>Matt Anderson</span>
        </Link>
        <ThemeToggle />
      </header>
      <Outlet />
    </>
  );
}

const rootRoute = createRootRoute({
  component: RootLayout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

export const routeTree = rootRoute.addChildren([indexRoute]);
