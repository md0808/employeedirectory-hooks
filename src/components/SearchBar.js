import React from "react";

function SearchBar() {
  return (
    <div className='row'>
      <form className='col s12'>
        <div className='row center-align'>
          <div className='input-field col s8 offset-s2'>
            <textarea
              id='icon_prefix2'
              className='materialize-textarea'
            ></textarea>
            <label for='icon_prefix2'>Search Employee</label>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
