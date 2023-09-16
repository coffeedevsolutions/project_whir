"use client";

import React, { useState, useEffect } from 'react';
import PromptCard from './Promptcard';

const WeedComponent = () => {
  const [weedPrompts, setWeedPrompts] = useState([]);

  useEffect(() => {
    // Make a GET request to fetch prompts with selectedCategories "Weed"
    fetch("/api/prompt/feed") // Replace with the actual API endpoint for fetching weed prompts
      .then((response) => response.json())
      .then((data) => {
        // Filter the prompts to only include those with the "Weed" tag
        const filteredPrompts = data.filter((prompt) => prompt.selectedCategories.includes("Weed"));
        setWeedPrompts(filteredPrompts);
      })
      .catch((error) => {
        console.error("Failed to fetch weed prompts:", error);
      });
  }, []);

  return (
    <div className='mt-16 prompt_layout'>
      {weedPrompts?.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          selectedCategories={post.selectedCategories}
        />
      ))}
    </div>
  );
}

export default WeedComponent;
