"use client";
import axios from 'axios';
import React, { useState } from 'react'

const Search = () => {

    const [search, setSearch] = useState('')
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
          const response  = await axios.post("http://localhost:8000/user" , {
            search
          })
          console.log(response)
          setSearch('')
        } catch (error) {
          console.log(error)
        }
    }

  return (
    <form action="" onSubmit={handleSubmit}>
    <input type="text" placeholder='Enter your site' value={search} onChange={(e) => setSearch(e.target.value)}/>
    </form>
  )
}

export default Search