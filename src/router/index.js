import Discover from "@/view/discover";
import Mine from "@/view/mine";
import Friend from "@/view/friend";

const routes = [
  {
    path: "/",
    exact: true,
    component: Discover,
  },
  {
    path: "/mine",
    component: Mine,
  },
  {
    path: "/friend",
    component: Friend,
  },
];
export default routes;
