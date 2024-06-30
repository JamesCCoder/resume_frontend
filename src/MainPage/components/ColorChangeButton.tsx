import React,{useState, useEffect} from 'react';
import './ColorChangeButton.scss';

const ColorChangeButton: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
   useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const handleClick = () => {
    const root = document.documentElement;
   
    const currentBackColor = getComputedStyle(root).getPropertyValue('--global-backcolor').trim();
    const currentFontColor = getComputedStyle(root).getPropertyValue('--global-fontcolor').trim();
    const currentDecoColor = getComputedStyle(root).getPropertyValue('--global-decocolor').trim();
    const currentDecoColorSecond = getComputedStyle(root).getPropertyValue('--global-decocolor-second').trim();
  
    const newBackColor = currentBackColor === 'rgb(30, 29, 38)' ?  'rgb(30, 29, 38)': 'rgb(240, 255, 240)';
    const newFontColor = currentFontColor === 'white' ? 'white': 'rgb(30, 29, 38)';
    const newDecoColor = currentDecoColor === 'rgb(0, 255, 165)' ? 'rgb(0, 255, 165)':'rgb(46, 139, 87)';
    const newDecoColorSecond = currentDecoColorSecond === 'rgb(45,44,50)' ? 'rgb(45,44,50)':'rgb(64, 220, 165)';

    root.style.setProperty('--global-backcolor', newBackColor);
    root.style.setProperty('--global-fontcolor', newFontColor);
    root.style.setProperty('--global-decocolor', newDecoColor);
    root.style.setProperty('--global-decocolor-second', newDecoColorSecond);
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="theme-toggle-container">
      <div className={`theme-toggle-button ${isDarkMode ? 'dark' : 'light'}`} onClick={handleClick}>
        <div className="toggle-circle"></div>
      </div>
    </div>
  );
};

export default ColorChangeButton;
