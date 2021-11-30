import { SearchBarStyle } from "./styles/SearchBar.style";
import { ReactComponent as SearchBtn } from "../icons/search.svg";

const SearchBar = () => {
 return (
  <SearchBarStyle>
   <input type="text" name="search" id="search" placeholder="Search.." />
   <div className="searchBtn">
    <SearchBtn />
   </div>
  </SearchBarStyle>
 );
};

export default SearchBar;
