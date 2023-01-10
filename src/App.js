// import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Data from "./data/filmdata";
import Filmai from "./components/filmai";
import { useEffect, useMemo, useState } from "react";
// import Item from "./components/item";

function App() {
  const box = Data;

  const list1 = [];
  for (let i = 0; i < box.length; i++) {
    list1.push(<Filmai filmai={box[i]}></Filmai>);
  }
  console.log(list1);

  const [filmList, setFilmList] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState();

  useEffect(() => {
    setFilmList(Data);
  }, []);

  function getFilteredList() {
    if (!selectedCategory) {
      return filmList;
    }
    return filmList.filter((Data) => Data.category === selectedCategory);
  }
  console.log(filmList);

  let filteredlist1 = useMemo(getFilteredList, [selectedCategory, filmList]);
  console.log(filteredlist1);

  const list2 = [];
  for (let i = 0; i < filteredlist1.length; i++) {
    list2.push(<Filmai filmai={filteredlist1[i]}></Filmai>);
  }
  console.log(list2);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  return (
    <div className="container bg-secondary">
      <div className="text-emphasis-secondary pt-4">
        <h1 class="display-5 text-center text-white">
          Geriausių filmų sąrašas!
          <hr></hr>
        </h1>

        <div className="row text-center mt-5 bg-secondary bg-opacity-50">
          {list1};
        </div>

        <hr></hr>
        <h3 class="displsy-5 text-center text-white mt-5">Filmų kategorijos</h3>
        <div className="row text-center mt-5 bg-secondary bg-opacity-50">
          <div className="searchfil">
            <div className="app">
              <div className="filter-container ">
                <div className="mb-3 fw-bold">Filtruoti pagal kategoriją:</div>
                <div>
                  <select
                    list="category-list"
                    id="category-list"
                    onChange={handleCategoryChange}
                  >
                    <option value="">All</option>
                    <option value="Drama">Drama</option>
                    <option value="Documentary">Documentary</option>
                    <option value="Animation">Animation</option>
                    <option value="Horror">Horror</option>
                    <option value="Family">Family</option>
                    <option value="Foreign">Foreign</option>
                    <option value="Music">Music</option>
                    <option value="Action">Action</option>
                    <option value="New">New</option>
                    <option value="Sci-Fi">Sci-Fi</option>
                    <option value="Sports">Sports</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Classics">Classics</option>
                    <option value="Games">Games</option>
                    <option value="Children">Children</option>
                    <option value="Travel">Travel</option>
                  </select>

                  <div className="row text-center mt-5 bg-secondary bg-opacity-50">
                    {list2}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
