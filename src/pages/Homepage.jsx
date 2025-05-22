import { useState, useEffect } from "react";
import axios from "axios";

//API KEY 

export default function Homepage() {
  // Our api key from some third-party API.
  const apiKey = "2eb30dba45f2448597d2e61ad03b1942";
//   const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=2eb30dba45f2448597d2e61ad03b1942`;

  // State to hold the data.
  const [data, setData] = useState(null);
  const [query, setQuery] = useState("Gaming");

  // Function to fetch data.
  const getData = async () => {
    try {
      const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=2eb30dba45f2448597d2e61ad03b1942`;  
      const response = await axios.get(url);
      setData(response.data);
    } catch(e) {
      console.error(e)
    }
  };

  // useEffect to run getData when component mounts.
  useEffect(() => {
    getData();
  }, []);

  // loaded function for when data is fetched.
const loaded = () => {
    return (
      <div>
      <h1> News</h1>
      <h3>Do you hate the news?</h3>
      <h4>Yeah... Let's just filter it by what we like.</h4>
      <input
        type="text"
        value={query}
        onChange={(e)=> setQuery(e.target.value)}/>
      <button onClick={getData}>Search</button>  
    
      <ul>
        {data.articles.map((article, index) => (
          <li key={index}>
            <a href={article.url} target="_blank">
              <h3>{article.title}</h3>
            </a>
            <p>{article.description}</p>
            {article.urlToImage && (
              <img src={article.urlToImage} width="500" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
  };


  // Function for when data doesn't exist.
  const loading = () => {
    return <h1>Loading...</h1>;
  };

  // If data exists, run the loaded function; otherwise, run loading.
  return data ? loaded() : loading();
}

// //export default function Homepage(){
//     return <h1> News </h1>;
// }