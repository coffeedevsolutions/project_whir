"use client";

import { useState, useEffect } from "react";

import { FoodList, BoozeList, WeedList } from "./Menulist";
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

  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

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
        <div>
          <button onClick={() => handleItemClick('food')} className="m-8 gap-10 font-satoshi font-bold">Food</button>
          <button onClick={() => handleItemClick('booze')} className="m-8 gap-10 font-satoshi font-bold">Drinks</button>
          <button onClick={() => handleItemClick('weed')} className="m-8 gap-10 font-satoshi font-bold">Cannabis</button>
        </div>
        <div>
          {selectedItem === 'food' && <FoodComponent />}
          {selectedItem === 'booze' && <BoozeComponent />}
          {selectedItem === 'weed' && <WeedComponent />}
        </div>
      </div>

      {/* All Prompts */}
      {searchText ? (
        <PromptCardList
          data={searchedResults}
          handleTagClick={handleTagClick}
        />
      ) : (
        <PromptCardList data={allPosts} handleTagClick={handleTagClick} />
      )}

    </section>
  );
};

export default Feed;