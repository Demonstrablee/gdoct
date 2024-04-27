// SearchBox.js
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SearchBox() {
  var triggerString = "Do I have";
  const navigate = useNavigate(); // move to another page

  const randomSearches = [
    "Trendy",
    "Stellar",
    "Adventurous",
    "Hungry",
    "Funny",
    "Doooley",
    // Add more search terms as needed
  ];

  const userPQS = [
    "How old are you?",
    "What is your Ethnic Background?",
    "What is your Sex?",
    "What is your prefered type of medical care?\n(holistic, hospital, medicial, etc)",
    "What is your Economic Status?",
  ];

  const [searchTerm, setSearchTerm] = useState("Grate");
  const [triggered, setTriggered] = useState(false);
  const [index, setIndex] = useState(0);

  function incrementIndex() {
    if (index < userPQS.length - 1) {
      setIndex(index + 1);
    } else {
      //go to the next page for diagnosis
      navigate("/dia");
    }
  }
  function decrementIndex() {
    if (index > 0) {
      setIndex(index - 1);
    }
  }

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      // if the search is not empty
      window.location.href = `https://www.google.com/search?q=${encodeURIComponent(
        searchTerm
      )}`;
    }
  };

  function handleSubmit() {
    // add the users answers to an array or some where to store them
    console.log("yippee!");
  }

  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  //Check the contents of the search for if google doctor is needed
  useEffect(() => {
    if (searchTerm.includes(triggerString)) {
      setTriggered(true);
    } else {
      setTriggered(false);
    }
  }, [handleKeyPress]); //everytime handel keypress is triggred run this

  //Random Search
  const getRandomSearchTerm = () => {
    const randomIndex = Math.floor(Math.random() * randomSearches.length);
    return randomSearches[randomIndex];
  };

  const handleRandSearch = () => {
    const randomTerm = getRandomSearchTerm(); // get random term
    setSearchTerm(randomTerm);

    if (searchTerm.trim() !== "") {
      // if the search is not empty
      window.location.href = `https://www.google.com/search?q=${encodeURIComponent(
        randomTerm
      )}`;
    }
  };

  return (
    <div>
      <div>
        <h1 className={triggered ? "title slideUp" : "title"}>
          {triggered ? "Google Doctor" : "Google"}
        </h1>
        <h2 className={triggered ? "user fade-in" : "invisible"}>
          {userPQS[index]}
        </h2>
      </div>

      <div>
        <input
          className="searchBox"
          type="text"
          onChange={(event) => setSearchTerm(event.target.value)}
          onKeyDown={triggered ? handleSubmit : handleKeyPress}
        />
      </div>
      <div className="searchButtons">
        <button onClick={triggered ? decrementIndex : handleSearch}>
          {triggered ? "Previous" : "Google Search"}
        </button>
        <button
          className="randomSearch"
          onClick={triggered ? incrementIndex : handleRandSearch}
        >
          {triggered ? "Next" : "I'm Feeling Lucky"}
        </button>
      </div>
      <h4 className="">
        {triggered
          ? "Try our Google Doctor Prototype"
          : "Welcome to our Prototype of Google Doctor!"}{" "}
      </h4>
    </div>
  );
}

export default SearchBox;
