import React, { useState } from "react";

const Journal = () => {
  const [entries, setEntries] = useState([]);
  const [currentEntry, setCurrentEntry] = useState("");
  const [currentTag, setCurrentTag] = useState("diary");
  //db connections
  const addEntry = () => {
    if (currentEntry.trim() !== "") {
      const currentDate = new Date().toLocaleDateString();
      setEntries([
        ...entries,
        { text: currentEntry, tag: currentTag, date: currentDate },
      ]);
      setCurrentEntry("");
    }
  };

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
      <button onClick={addEntry} className="px-4 py-2 bg-blue-500 text-white">
        Add Entry
      </button>
      <div className="mt-4">
        {entries.map((entry, index) => (
          <div key={index} className="border p-2 my-2">
            <p>Date: {entry.date}</p>
            <p>{entry.text}</p>
            <p>Tag: {entry.tag}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Journal;
