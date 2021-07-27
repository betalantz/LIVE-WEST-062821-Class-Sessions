import React from "react";

function Search({searchTerm, onChangeSearch}) {

  function handleChange(e){
    onChangeSearch(e.target.value)
  }
  return (
    <div className="ui search">
      <div className="ui icon input">
        {/* we pass the searchTerm along with the setter callBack function so that this input will be controlled by state like a form, but the state is on the Parent */}
        <input className="prompt" value={searchTerm} onChange={handleChange}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
