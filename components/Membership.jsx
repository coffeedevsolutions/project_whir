import React from 'react'
import PricingTier from './PricingTier';

export const Membership = () => {
  return (
    <div className="flex-col">
        <h1 className='head_text text-center mb-12'>
      Name of Company
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center '> Membership Plans </span>
    </h1>
        <div className="app">
            <PricingTier />
        </div>
    </div>
    
    
  )
}

export default Membership;