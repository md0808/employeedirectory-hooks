import React from "react";

function SearchBar({ userSearch }) {
  return (
    <div className='row'>
      <form className='col s12'>
        <div className='row center-align'>
          <div className='input-field col s8 offset-s2'>
            <textarea
              id='icon_prefix2'
              className='materialize-textarea'
              onChange={e => userSearch(e)}
            ></textarea>
            <label for='icon_prefix2'>Search Employee</label>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
