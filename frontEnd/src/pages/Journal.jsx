import React, { useState, useEffect } from "react";
import axios from "axios";

const Journal = () => {
  const [entries, setEntries] = useState([]);
  const [currentEntry, setCurrentEntry] = useState("");
  const [currentTag, setCurrentTag] = useState("diary");
  const [loading, setLoading] = useState(false);

  const username = localStorage.getItem("username"); // Replace with the actual username or get it dynamically

  const fetchEntries = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:5000/api/journals/${username}`);
      setEntries(response.data.data);
    } catch (error) {
      console.error("Error fetching entries:", error);
    } finally {
      setLoading(false);
    }
  };

  const addEntry = async () => {
    if (currentEntry.trim() !== "") {
      const currentDate = new Date().toLocaleDateString();

      try {
        setLoading(true);
        await axios.post(`http://localhost:5000/api/journals/${username}`, {
          username,
          date: currentDate,
          tag: currentTag,
          description: currentEntry,
        });

        // Refetch entries after adding a new one
        await fetchEntries();

        // Reset the currentEntry state
        setCurrentEntry("");
      } catch (error) {
        console.error("Error adding entry:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    // Fetch entries when the component mounts
    fetchEntries();
  }, [username]);

  return (
    <>
      <h1>Journal</h1>
      <div className="flex">
        <button
          className={`mr-2 px-4 py-2 ${
            currentTag === "diary" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setCurrentTag("diary")}
        >
          Diary
        </button>
        <button
          className={`mr-2 px-4 py-2 ${
            currentTag === "gratitude"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
          onClick={() => setCurrentTag("gratitude")}
        >
          Gratitude
        </button>
        <button
          className={`px-4 py-2 ${
            currentTag === "affirmations"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
          onClick={() => setCurrentTag("affirmations")}
        >
          Affirmations
        </button>
      </div>
      <textarea
        value={currentEntry}
        onChange={(e) => setCurrentEntry(e.target.value)}
        className="block w-full border p-2 my-4"
        placeholder="Write your entry here..."
      />
      <button
        onClick={addEntry}
        className="px-4 py-2 bg-blue-500 text-white"
        disabled={loading}
      >
        {loading ? "Adding Entry..." : "Add Entry"}
      </button>
      <div className="mt-4">
        {loading ? (
          <p>Loading entries...</p>
        ) : entries && entries.length > 0 ? (
          entries.map((entry, index) => (
            <div key={index} className="border p-2 my-2">
              <p>Date: {entry.date}</p>
              <p>{entry.description}</p>
              <p>Tag: {entry.tag}</p>
            </div>
          ))
        ) : (
          <p>No entries found.</p>
        )}
      </div>
    </>
  );
};

export default Journal;
