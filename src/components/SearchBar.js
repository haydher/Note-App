import { SearchBarStyle } from "./styles/SearchBar.style";

const SearchBar = () => {
 return (
  <SearchBarStyle>
   <input type="text" name="search" id="search" placeholder="Search.." />
   <div className="searchBtn">
    <img src="imgs/search.svg" alt="Search Button" />
   </div>
  </SearchBarStyle>
 );
};

export default SearchBar;
