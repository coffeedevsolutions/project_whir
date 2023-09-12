// FoodComponent.js
"use client";

import React from 'react';
import PromptCard from './Promptcard';




const FoodComponent = ({ data, handleTagClick, handleItemClick }) => {
  return (
    <div className='mt-16 prompt_layout'>
      {data?.map((post) => {
        // Assuming 'selectedCategory' is a string property containing the category
        // Adjust the category comparison based on your data structure
        if (post.selectedCategories === 'Food') {
          return (
            <PromptCard
              key={post._id}
              post={post}
              handleTagClick={handleTagClick}
              handleItemClick={handleItemClick}
            />
          );
        } else {
          // Render nothing if the category doesn't match 'Food'
          return null;
        }
      })}
    </div>
  );
}

export default FoodComponent;
