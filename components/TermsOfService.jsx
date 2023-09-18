import React from 'react';

const TermsOfService = ({ title, content }) => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-semibold">{title}</h2>
      <div className="mt-4 text-gray-700">{content}</div>
    </div>
  );
};

export default TermsOfService;