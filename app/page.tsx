'use client'

import Header from '../components/Header';
import React, { useState } from 'react';

import HomeContent from '@/components/content/HomeContent';
import ContactContent from '@/components/content/ContactContent';
import BioContent from '@/components/content/BioContent';
import ResumeContent from '@/components/content/ResumeContent';
import NameComponent from '@/components/NameComponent';
import HorizontalDivider from '@/components/HorizontalDivider';

export default function Home() {
  const [content, setContent] = useState('home');

  // Function to render content based on state
  const renderContent = () => {
    switch (content) {
      case 'home':
        return <HomeContent />;
      case 'bio':
        return <BioContent />;
      case 'resume':
        return <ResumeContent />;
      case 'contact':
        return <ContactContent />;
      default:
        return;
    }
  }

  return(
    <div>
      <Header setContent={setContent}/>

      <div className="text-6xl font-bold text-center">
        <NameComponent />
      </div>

      <HorizontalDivider />

      <main className="container mx-auto p-4">
        {renderContent()}
      </main>
    </div>


  );
      {/*
       <main className="container mx-auto p-4">
        <div className="mx-auto text-center bg-slate-100">
          <h2 className="text-2xl font-bold">Welcome</h2>
          <p>This is a simple personal website using Next.js and TailwindCSS.</p>
        </div>

        <div>
        {content === 'home' && <p>Welcome to my website!</p>}
        {content === 'about' && <p>This is the about section.</p>}
        {content === 'resume' && <p>View my resume below</p>}
        {content === 'contact' && <p>This is the contact form.</p>}
        </div>
        
      </main>
    */}
};
