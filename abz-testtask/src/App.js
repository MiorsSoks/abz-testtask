import './App.scss';
import AppBar from './AppBar';
import Hero from './Hero'
import UsersList from './UsersList'
import RegistrationForm from './RegistrationForm'

function App() {
  return (
    <div>
      <AppBar></AppBar>
      <Hero></Hero>
      <UsersList></UsersList>
      <RegistrationForm></RegistrationForm>
    </div>
  );
}

export default App;
