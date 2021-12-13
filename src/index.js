import './styleRePa.css';
import generatePageContent from './pageLoad';
import generateContactTab from './contactTab';
import generateMenuTab from './menuTab';

const homePage = (() => {
  const switchTabsEnabled = () => {
    const contactBtn = document.querySelector('.button1');
    const menuBtn = document.querySelector('.button2');
    contactBtn.addEventListener('click', () => {
      console.log(true);
      generateContactTab();
    });
    menuBtn.addEventListener('click', () => {
      console.log(true);
      generateMenuTab();
    });
  };
  
  return {
    generatePageContent,
    switchTabsEnabled
  }
})();

homePage.generatePageContent();
homePage.switchTabsEnabled();
