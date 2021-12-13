const generateContactTab = () => {
  const tabContent = document.querySelector('.tabContent');
  while (tabContent.firstChild) {
    tabContent.removeChild(tabContent.lastChild);
  };
  const generateP = document.createElement('p');
  generateP.innerText = 'Full Faith and Credit shall be given in each State to the public Acts, Records, and judicial Proceedings of every other State. And the Congress may by general Laws prescribe the Manner in which such Acts, Records and Proceedings shall be proved, and the Effect thereof.'
  tabContent.appendChild(generateP);
}

export default generateContactTab;