import React, { useState, useEffect } from 'react';
import PromptCard from './Promptcard';

const FoodComponent = () => {
  const [foodPrompts, setFoodPrompts] = useState([]);
  const [users, setUsers] = useState([]);



  useEffect(() => {
    // Make a GET request to fetch data from the server
    fetch("/api/prompt/feed") // Replace with the actual API endpoint for fetching data
      .then((response) => response.json())
      .then((data) => {
        // Extract prompts and users from the fetched data
        const { prompts, users } = data;

        // Filter the prompts to only include those with the "Food" tag
        const filteredPrompts = prompts.filter((prompt) =>
          prompt.selectedCategories.includes("Food")
        );

        setFoodPrompts(filteredPrompts);
        setUsers(users);
      })
      .catch((error) => {
        console.error("Failed to fetch data:", error);
      });
  }, []);

  return (
    <div className='mt-16 prompt_layout'>
      {foodPrompts?.map((post) => {
        // Find the user associated with the post
        const user = users.find((u) => u._id);

        // Debugging: Output relevant information to the console
        console.log("post:", post);
        console.log("user:", user);

        return (
          <PromptCard
            key={post._id}
            post={post}
            selectedCategories={post.selectedCategories}
            user={post.user} // Pass the user information to PromptCard
          />
        );
      })}
    </div>
  );
}

export default FoodComponent;