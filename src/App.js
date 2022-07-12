import logo from './logo.svg';
import './App.css';
import User from './User';

function App() {
  const  myFriends = {
    friendsName1: 'Petya',
    friendsName2: 'Pasha',
    friendsName3: 'Vasya',
  }

  function sayHi(){
    return 'Hello'
  }

  return (
    <div className="App">
      <header className="App-header">
        <User name = "Zhenya" age = {24} func = {sayHi()} obj = {myFriends}/>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
