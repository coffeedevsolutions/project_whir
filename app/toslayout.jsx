import React from 'react'
import "@styles/globals.css";

import Nav from '@components/Nav';
import TermsOfService from '@components/TermsOfService';


const toslayout = ({ children }) => (
    <html lang='en'>
      <body>
        <Provider>
          <div className='main'>
            <div className='gradient' />
          </div>
  
          <main className='app'>
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
      <footer>
        <Footer />
      </footer>
    </html>
  );

export default toslayout;
