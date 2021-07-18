import { useState } from 'react';
import { Container } from 'semantic-ui-react';
import { Route } from 'react-router-dom';
import NavBar from '../../features/bars/nav/NavBar';
import ClientDashboard from './clientSide/ClientDashboard';
import HomePage from './homepage/HomePage';
import AdminDashboard from './adminSide/AdminDashboard';
import AddToCartModal from './clientSide/AddToCartModal';

function App() {
  const [modalShown, setModalShown] = useState(false);

  const showModalHandler = () => {
    setModalShown(true);
  };

  const hideModalHandler = () => {
    setModalShown(false);
  };
  return (
    <>
      {modalShown && <AddToCartModal onClose={hideModalHandler} />}
      <Route exact path='/' component={HomePage} />
      <Route
        path={'/(.+)'}
        render={() => (
          <>
            <NavBar />
            <Container className='main'>
              <Route
                path='/clientside'
                component={ClientDashboard}
                onShowModal={showModalHandler}
              />
              <Route path='/adminside' component={AdminDashboard} />
            </Container>
          </>
        )}
      />
    </>
  );
}

export default App;
