import{
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import NavBar from './components/NavBar';
import routes from './routes';

function MainPage() {
  return(
    <Router>
      <NavBar />
      <div className="container">
        <Switch>
          {routes.map((route) => {
            return <Route key={route.path} exact path={route.path} component={route.component} />
          })}
        </Switch>
      </div>
    </Router>
  );
}
{/*
  <Route path="/" exact>
            <HomePage />
          </Route>,
          <Route path="/blogs" exact>
            <ListPage />
          </Route>,
          <Route path="/blogs/create" exact>
            <CreatePage />
          </Route>,
          <Route path="/blogs/edit" exact>
            <EditPage />
          </Route>
*/}
export default MainPage;