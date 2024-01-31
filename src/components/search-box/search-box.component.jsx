
import './search-box.style.css'
const SearchBox =({className,placeholder,onChangeHandler})=>{

    return (
      <input
        type="search"
        className="search-box"
        placeholder="search monsters"
        onChange={onChangeHandler}
      />
    );
  }


export default SearchBox;
