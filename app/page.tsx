'use client'

import Header from '../components/Header';
import React, { useState } from 'react';

export default function Home() {
  const [content, setContent] = useState('home');

  return(
    <div>
      <Header setContent={setContent}/>
      <main className="container mx-auto p-4">
        <div className="mx-auto text-center bg-slate-100">
          <h2 className="text-2xl font-bold">Welcome</h2>
          <p>This is a simple personal website using Next.js and TailwindCSS.</p>
        </div>

        <div>
        {content === 'home' && <p>Welcome to my website!</p>}
        {content === 'about' && <p>This is the about section.</p>}
        {content === 'contact' && <p>This is the contact form.</p>}
        </div>
        
      </main>
    </div>
    
  );
};
