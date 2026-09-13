import { Compass } from "lucide-react";
import Index from "./pages/Index.jsx";
import Concepts from "./pages/Concepts.jsx";
import Methods from "./pages/Methods.jsx";
import Industry from "./pages/Industry.jsx";
import Career from "./pages/Career.jsx";
import Roadmap from "./pages/Roadmap.jsx";
import Resources from "./pages/Resources.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Compass className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Concepts",
    to: "/concepts",
    icon: <Compass className="h-4 w-4" />,
    page: <Concepts />,
  },
  {
    title: "Methods",
    to: "/methods",
    icon: <Compass className="h-4 w-4" />,
    page: <Methods />,
  },
  {
    title: "Industry",
    to: "/industry",
    icon: <Compass className="h-4 w-4" />,
    page: <Industry />,
  },
  {
    title: "Career",
    to: "/career",
    icon: <Compass className="h-4 w-4" />,
    page: <Career />,
  },
  {
    title: "Roadmap",
    to: "/roadmap",
    icon: <Compass className="h-4 w-4" />,
    page: <Roadmap />,
  },
  {
    title: "Resources",
    to: "/resources",
    icon: <Compass className="h-4 w-4" />,
    page: <Resources />,
  },
];
