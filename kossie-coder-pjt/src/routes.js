import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import EditPage from "./pages/EditPage";
import ListPage from "./pages/ListPage";
import ShowPage from "./pages/ShowPage";
const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/blogs",
    component: ListPage,
  },
  {
    path: "/blogs/create",
    component: CreatePage,
  },
  {
    path: "/blogs/:blogId/edit",
    component: EditPage,
  },
  {
    path: "/blogs/:blogId",
    component: ShowPage,
  },
];
export default routes;
