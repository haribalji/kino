import React, { createContext, useContext, useState, useEffect } from "react";

// Create the context
export const RssDataContext = createContext();

// Export a custom hook for using the context
export const useRssData = () => useContext(RssDataContext);

// Create a provider component
export function RssDataProvider({ children }) {
  const [rssData, setRssData] = useState([]);
  const [loading, setLoading] = useState(true); // Start loading as true
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    // Fetch data from a remote URL
    fetch('/rss_data.json')
// Replace with your remote URL
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setRssData(data); // Set the data received from the remote source
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message); // Set the error message
      })
      .finally(() => {
        setLoading(false); // Stop loading regardless of the fetch outcome
      });
  }, []); // Empty dependency array ensures this runs once when the component mounts

  return (
    <RssDataContext.Provider value={{ rssData, loading, error }}>
      {children}
    </RssDataContext.Provider>
  );
}

