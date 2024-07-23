import "./App.css";
import Profile from "./components/Profile/Profile";
import user from "./components/json/user.json";
import FriendsList from "./components/FriendList/FriendList";
import friends from "./components/json/friends.json";
import Transactions from "./components/Transactions/Transactions";
import transactions from "./components/json/transactions.json";

function App() {
  return (
    <>
      <Profile userInfo={user} />
      <FriendsList friends={friends} />
      <Transactions transactions={transactions} />
    </>
  );
}

export default App;
