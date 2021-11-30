import "./styles.css";
import User from "./User";
import UserList from "./UserList";

export default function App() {
  return (
    <div className="App">
      <h1>Komunikacja z REST API</h1>
      <h2>Zadanie 1</h2>
      <UserList />
      <User />
    </div>
  );
}
