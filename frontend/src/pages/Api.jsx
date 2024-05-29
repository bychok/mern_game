import React, { useState } from "react";

const ApiSearchBar = () => {
  const Access_Key = "2QYBVfHvSrOrgfCF-sts_HgSCxKdk3sYxnN5rXqaeag";
  const [img, setImg] = useState("");
  const [res, setRes] = useState([]);

  const fetchRequest = async () => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?page=1&query=${img}&client_id=${Access_Key}`
      );
      const data = await response.json();
      setRes(data.results);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const handleInputChange = (e) => {
    setImg(e.target.value);
  };

  const handleSearchClick = () => {
    if (img) {
      fetchRequest();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearchClick();
    }
  };

  return (
    <div className="api-search-container">
      <div className="search-bar-wrapper">
        <input
          className="search-input"
          type="text"
          placeholder="Search Anything..."
          value={img}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
        />
        <button
          type="submit"
          className="search-button"
          onClick={handleSearchClick}
        >
          Search
        </button>
      </div>
      <div className="results">
        {res.map((image) => (
          <img key={image.id} src={image.urls.small} alt={image.description} />
        ))}
      </div>
    </div>
  );
};

export default ApiSearchBar;
