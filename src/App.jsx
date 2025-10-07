import React from 'react'
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';

const App = () => {
  return (
    <div className="overflow-x-hidden">
<Hero/>
<Services />
<Contact />
    </div>
  )
}

export default App
