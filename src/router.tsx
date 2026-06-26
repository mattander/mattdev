import { Link, Outlet, createRootRoute, createRoute } from "@tanstack/react-router";
import { ThemeToggle } from "./components/ThemeToggle";
import { HomePage } from "./routes/HomePage";

function RootLayout() {
  return (
    <>
      <header className="site-header" aria-label="Matt Anderson">
        <Link className="wordmark" to="/" aria-label="Matt Anderson">
          <img className="brand-mark" src="/brand-mark.svg" alt="" aria-hidden="true" />
          <span>Matt Anderson</span>
        </Link>
        <nav className="site-nav" aria-label="Primary">
          <a href="#work">Work</a>
          <a href="#projects">Projects</a>
        </nav>
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
