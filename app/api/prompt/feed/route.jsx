import Prompt from "@models/prompt";
import User from "@models/user";
import { connectToDB } from "@utils/database";

export const GET = async () => {
  try {
    await connectToDB();

    // Fetch prompts from the database
    const prompts = await Prompt.find().lean();

    // Fetch user information from the database
    const users = await User.find().lean();

    // Combine prompts and user information into a single object
    const data = { prompts, users };

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch data", { status: 500 });
  }
};

