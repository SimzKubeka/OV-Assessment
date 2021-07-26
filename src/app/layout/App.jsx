import { Container } from 'semantic-ui-react';
import { Route } from 'react-router-dom';
import NavBar from '../../features/bars/nav/NavBar';
import ClientDashboard from './clientSide/ClientDashboard';
import HomePage from './homepage/HomePage';
import AdminDashboard from './adminSide/AdminDashboard';

function App() {
  return (
    <>
      <Route exact path='/' component={HomePage} />
      <Route
        path={'/(.+)'}
        render={() => (
          <>
            <NavBar />
            <Container className='main'>
              <Route path='/clientside' component={ClientDashboard} />
              <Route path='/adminside' component={AdminDashboard} />
            </Container>
          </>
        )}
      />
    </>
  );
}

export default App;
