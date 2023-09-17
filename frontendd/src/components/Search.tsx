"use client";
import axios from 'axios';
import React, { useState } from 'react';
import Result from './Result';
import '../styles/Search.css';
import { ClipLoader } from 'react-spinners';

const Search = () => {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState('');
  const [loading, setLoading] = useState(false);
  const [inputError, setInputError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

   
    const urlRegex = /^(https?|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]$/;

    if (!search.match(urlRegex)) {
      setInputError('Please enter a valid URL');
      return;
    }

    setInputError('');
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
      <div className='form-box'>
        <div>{inputError && <p className="error-message">{inputError}</p>}</div>
        <form action="" onSubmit={handleSubmit}>
          <input type="text" placeholder='Enter your site' value={search} onChange={(e) => setSearch(e.target.value)} />
          <button type="submit">
            {loading ? (
              <ClipLoader
                color="#75e947"
                loading={loading}
                size={17}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            ) : (
              <>Search</>
            )}
          </button>
       
        </form>
      </div>
      <div className='res-upper'>
        {loading ? (
          <ClipLoader
            color="#75e947"
            loading={loading}
            size={75}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          <Result searchResults={searchResults} />
        )}
      </div>
    </>
  )
}

export default Search;
