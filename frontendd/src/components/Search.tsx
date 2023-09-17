"use client";
import axios from 'axios';
import React, { useState } from 'react';
import Result from './Result';
import '../styles/Search.css';

const Search = () => {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:8000/user", {
        search
      });
      setSearchResults(response.data.tasks[0].result[0].items[0]);
      console.log(response.data.tasks[0].result[0].items[0]);
      setLoading(false);
      setSearch(''); 
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  return (
    <>
    <div  className='form-box'>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter your site' value={search} onChange={(e) => setSearch(e.target.value)} />
        <button type="submit">Search</button>
      </form>
      </div>
      <div className='res-upper'>
      {loading ? <p>Loading...</p> : <Result searchResults={searchResults} />}
      </div>
    </>
  )
}

export default Search;
