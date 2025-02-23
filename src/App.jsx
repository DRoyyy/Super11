import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Available from "./components/Available/Available";
import Subscription from "./components/Subscription/Subscription";
import Footer from "./components/Footer/Footer";
import SelectedPlayersList from "./components/SelectedPlayersList/SelectedPlayersList";

function App() {
  const [credit, setCredit] = useState(0);
  const [creditClaimed, setCreditClaimed] = useState(false);

  const [showAvailable, setShowAvailable] = useState(true);
  const [selectedPlayersList, setSelectedPlayersList] = useState([]);

  const addFreeCredit = () => {
    setCredit(1100);
    setCreditClaimed(true);
  };

  const handleShowAvailable = (t) => {
    setShowAvailable(t);
  };

  const handleSelectedPlayer = (player) => {
    if (credit - player.price >= 0) {
      if (selectedPlayersList.length <= 10) {
        if (!selectedPlayersList.some((p) => p.id === player.id)) {
          setCredit(credit - player.price);
          const newSelectedPlayersList = [...selectedPlayersList, player];
          setSelectedPlayersList(newSelectedPlayersList);
          alert("You successfully added one player 🎉!");
        } else {
          alert("You cannot select a player twice!");
        }
      } else {
        alert("You cannot select more than 11 players!");
      }
    } else {
      alert("Insufficient credit to select this player!");
    }
  };

  const handleDeletePlayer = (id, price) => {
    const newSelectedPlayersList = selectedPlayersList.filter(
      (p) => p.id !== id
    );
    setSelectedPlayersList(newSelectedPlayersList);
    setCredit(credit + price);
  };

  return (
    <>
      <Header
        addFreeCredit={addFreeCredit}
        credit={credit}
        creditClaimed={creditClaimed}
      ></Header>
      <div className="flex items-center justify-center max-w-screen-2xl mx-auto">
        <button
          onClick={() => handleShowAvailable(true)}
          className={`font-semibold px-5 py-3 border rounded-l-lg ${
            showAvailable ? "bg-yellow-400" : "bg-white"
          }`}
        >
          Available
        </button>
        <button
          onClick={() => handleShowAvailable(false)}
          className={`font-semibold px-5 py-3 border rounded-r-lg ${
            !showAvailable ? "bg-yellow-400" : "bg-white"
          }`}
        >
          Selected
        </button>
      </div>
      <div className="relative">
        {showAvailable ? (
          <Available handleSelectedPlayer={handleSelectedPlayer}></Available>
        ) : (
          <SelectedPlayersList
            selectedPlayersList={selectedPlayersList}
            handleDeletePlayer={handleDeletePlayer}
            handleShowAvailable={handleShowAvailable}
          ></SelectedPlayersList>
        )}
        <Subscription></Subscription>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
