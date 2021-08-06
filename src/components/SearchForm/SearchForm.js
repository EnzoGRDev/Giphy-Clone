import React,{ useState } from "react";

function SearchForm({onSubmit}) {
  const [keyword, setKeyword] = useState('');

  const handleChange = (evt) => {
    setKeyword(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit(keyword);
  };

  return (
    <div className="content-form">
      <form onSubmit={handleSubmit} className="content-search">
        <input
          className="input-search"
          type="text"
          onChange={handleChange}
          value={keyword}
          placeholder="Buscar Gif..."
        />
        <button className="search__button">
          <i className="fas fa-search search__icon"></i>
        </button>
      </form>
    </div>
  );
}

export default React.memo(SearchForm)