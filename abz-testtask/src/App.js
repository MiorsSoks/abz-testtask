import AppBar from "./AppBar";
import Hero from "./Hero";
import UsersList from "./UsersList";
import RegistrationForm from "./RegistrationForm";

function App() {
  return (
    <div className="page">
      <AppBar></AppBar>
      <div className="main-container">
        <Hero></Hero>
        <UsersList></UsersList>
        <RegistrationForm></RegistrationForm>
      </div>
    </div>
  );
}

export default App;
