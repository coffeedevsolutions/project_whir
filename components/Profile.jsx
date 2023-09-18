"use client";

import PromptCard from "./Promptcard";
import Link from "next/link";

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <section className='w-full'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>{name} Profile</span>
      </h1>
      <p className='desc text-left'>{desc}</p>

      <div className="flex gap-3 mt-9 md:gap-5 justify-center">
        <Link href='/Membership' className='bigblack_btn w-4/5 font-satoshi font-semibold'>
          View Membership Perks
        </Link>
      </div>

      <div className='mt-10 prompt_layout'>
        {data.map((post) => (
          <PromptCard
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;