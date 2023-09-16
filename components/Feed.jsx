"use client";

import { useState, useEffect } from "react";

import FoodComponent from "./Foodcomp";
import BoozeComponent from "./boozecomp";
import WeedComponent from "./weedcomp";
import PromptCard from "./Promptcard";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className='mt-16 prompt_layout'>
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [allPosts, setAllPosts] = useState([]);

  // Search states
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);

  const [selectedItem, setSelectedItem] = useState("All"); // Initialize with "All"

  const fetchPosts = async () => {
    const response = await fetch("/api/prompt");
    const data = await response.json();

    setAllPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const filterPrompts = (searchtext) => {
    const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
    return allPosts.filter(
      (item) =>
        regex.test(item.creator.username) ||
        regex.test(item.tag) ||
        regex.test(item.prompt)
    );
  };

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    // debounce method
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPrompts(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  const handleTagClick = (tagName) => {
    setSearchText(tagName);

    const searchResult = filterPrompts(tagName);
    setSearchedResults(searchResult);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

    // Filter the PromptCards based on the selected category
    const filteredPromptCards =
    selectedItem === "Food"
      ? allPosts.filter((post) => post.category === "Food")
      : selectedItem === "Drink"
      ? allPosts.filter((post) => post.category === "Drink")
      : selectedItem === "Weed"
      ? allPosts.filter((post) => post.category === "Weed")
      : allPosts;

  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input
          type='text'
          placeholder='Search for a tag or a username'
          value={searchText}
          onChange={handleSearchChange}
          required
          className='search_input peer'
        />
      </form>

      <div>
        <div className="text-center">
        <button
            onClick={() => handleItemClick("All")}
            className="m-8 gap-10 font-satoshi font-bold"
          >
            All
          </button>
          <button
            onClick={() => handleItemClick("Food")}
            className="m-8 gap-10 font-satoshi font-bold"
          >
            Food
          </button>
          <button
            onClick={() => handleItemClick("Drink")}
            className="m-8 gap-10 font-satoshi font-bold"
          >
            Drinks
          </button>
          <button
            onClick={() => handleItemClick("Weed")}
            className="m-8 gap-10 font-satoshi font-bold"
          >
            Cannabis
          </button>
        </div>
        <div>
          {selectedItem === "Food" && <FoodComponent />}
          {selectedItem === "Drink" && <BoozeComponent />}
          {selectedItem === "Weed" && <WeedComponent />}
        </div>
      </div>

      {/* All Prompts */}
      {searchText ? (
        <PromptCardList
          data={searchedResults}
          handleTagClick={handleTagClick}
          handleItemClick={handleItemClick} // Pass the handler down to PromptCardList
        />
      ) : (
        <PromptCardList
          data={filteredPromptCards}
          handleTagClick={handleTagClick}
          handleItemClick={handleItemClick} // Pass the handler down to PromptCardList
        />
      )}

    </section>
  );
};

export default Feed;