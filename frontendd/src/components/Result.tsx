import React, { useState, useEffect } from 'react';

interface IPROPS {
  searchResults?: any;
}

const Result: React.FC<IPROPS> = ({ searchResults }) => {
  console.log(searchResults,"results");
  console.log(searchResults.onpage_score,"results");


  const [searchResultData, setSearchResultData] = useState<any>(null);

  // useEffect(() => {
  //   if (searchResults) {
  //     setLoading(true);
  //     fetch(`http://localhost:8000/user/${searchResults}`)
  //       .then(response => {
  //         if (response.ok) {
  //           console.log(response);
  //           setLoading(false);
  //         } else {
  //           throw new Error('Error retrieving page');
  //         }
  //       })
  //       .then(data => {
  //         setSearchResultData(data);
  //         setLoading(false);
  //       })
  //       .catch(error => {
  //         console.error(error);
  //         setLoading(false);
  //       });
  //   }
  // }, [searchResults]);

  return (
    <div>
      <h2>Search Results</h2>
    
     { searchResults ? (
        <ul>
        {searchResults.onpage_score}
        </ul>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default Result;
