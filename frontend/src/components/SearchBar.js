import React, { useState } from 'react';
import './Style.css'; 
// The SearchBar functional component accepts a prop 'onSearch' which is a function 
// that will be called when the search is submitted.
function SearchBar({ onSearch }) {
  // 'searchTerm' state is initialized to an empty string and will hold the current value of the search input.
  // 'setSearchTerm' is a function that will be used to update 'searchTerm'.
  const [searchTerm, setSearchTerm] = useState('');

  // 'handleInputChange' is a function that is called every time the user types in the input field.
  // It updates the 'searchTerm' state with the current value of the input field.
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // 'handleSubmit' is a function that is called when the form is submitted.
  // It prevents the default form submission behavior and calls the 'onSearch' prop
  // with the current 'searchTerm' as its argument.
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submit action which refreshes the page.
    onSearch(searchTerm); // Calls the onSearch function passed as a prop from the parent component.
  };


  return (
    <header class="masthead">
          <div className="search-container">
            <form onSubmit={handleSubmit} >
                  <input
                    type="number"
                    className="search-bar"
                    placeholder="Enter Zip code"
                    onChange={handleInputChange}
                  />
                  <button className='btn'>Search</button>
            </form>
        </div>
      </header>
  );

}

export default SearchBar; // Exports the SearchBar component for use in other parts of the application.
