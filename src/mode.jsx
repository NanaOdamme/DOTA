import React, { useState } from 'react';

const Theme = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  return (
    <section className>
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <button onClick={toggleDarkMode} className="p-2 rounded-full mx-5 text-white">
        <i className={`bi ${isDarkMode ? 'bi-moon-stars' : 'bi-sun'}`}></i>
      </button>
    </div>
    </section>
  );
}
export default Theme;