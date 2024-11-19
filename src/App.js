import { Routes, Route, Outlet } from 'react-router-dom';

import Home from './routes/home/home.component';
import SignIn from './routes/sign-in/sign-in.component';
import Navigation from './routes/navigation/navigation.component';

const App = () => {

  return (
    <Routes>
      <Route path='/' element= { <Navigation />}>
      <Route path='/signIn' element={<SignIn/>}/>
      <Route index element= { <Home />}/>
      </Route>
    </Routes>
  )
}

export default App;
