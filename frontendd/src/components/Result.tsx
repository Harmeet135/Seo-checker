import React, { useState, useEffect } from "react";
import { FcApproval, FcBookmark } from "react-icons/fc";
import "../styles/Result.css";

interface IPROPS {
  searchResults?: any;
}

const Result: React.FC<IPROPS> = ({ searchResults }) => {
  const [searchResultData, setSearchResultData] = useState<any>(null);

  return (
    <div className="res-box">
      {searchResults ? (<div id="res-cont"><div id="res"> Result For - </div><div> {searchResults.url}</div></div>): (
      <h2>Search Results</h2>
      )}

      {searchResults ? (
        <ul>
          <div id="score">
            <h1>Score - {searchResults.onpage_score} </h1>
          </div>
          <div className="wee-boxes">
          <div className="we-box">
            <h1>
              {searchResults.resource_errors.errors &&
                searchResults.resource_errors.errors.length > 0 ? (
               
                  <FcBookmark />
                  ) : (
                    <FcApproval />
                  )}
              Error :
              {searchResults.resource_errors.errors
                ? searchResults.resource_errors.errors.length
                : 0}
            </h1>
          </div>

          <div className="we-box">
            <h1>
              {searchResults.resource_errors.warnings &&
              searchResults.resource_errors.warnings.length > 0 ? (
                <FcBookmark />
              ) : (
                <FcApproval />
              )}
              Warnings :{" "}
              {searchResults.resource_errors.warnings
                ? searchResults.resource_errors.warnings.length
                : 0}
            </h1>
          </div>
          </div>
        </ul>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default Result;
