import React from 'react';

const PricingTier = () => {
  return (
    <div className="flex justify-center space-x-10 font-satoshi">
      {/* Pricing Tier 1 */}
      <div className="w-2/3 bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold">Basic</h2>
        <p className="text-gray-600">$1/month</p>
        <ul className="mt-4">
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
        </ul>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Select
        </button>
      </div>

      {/* Pricing Tier 2 */}
      <div className="w-2/3 bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold">Pro</h2>
        <p className="text-gray-600">$3/month</p>
        <ul className="mt-4">
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
        </ul>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Select
        </button>
      </div>

      {/* Pricing Tier 3 */}
      <div className="w-2/3 bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold">Premium</h2>
        <p className="text-gray-600">$5/month</p>
        <ul className="mt-4">
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
        </ul>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Select
        </button>
      </div>
    </div>
  );
};

export default PricingTier;