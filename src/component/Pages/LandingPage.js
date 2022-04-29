import React from 'react';
import Page1 from './page1';
import Page2 from './page2';
import Page3 from './page3';
import Page4 from './page4';
import Page5 from './page5';
import Page6 from './page6';
import Footer from './Footer';




export default function LandingPage() {
  //**************************************************/
  return (
    <div >
    
      <main>
        <Page1/>
        {/*************************************************/}
        <Page2 id="2"/>
        {/*************************************************/}
        <Page3 id="3"/>
        {/*************************************************/}
        <Page4 id="4"/>
        {/*************************************************/}
        <Page5 id="5"/>
        {/*************************************************/}
        <Page6 id="6"/>
        {/*************************************************/}
        <Footer />
      </main>
    </div>

  );

  //******************************************** */
}