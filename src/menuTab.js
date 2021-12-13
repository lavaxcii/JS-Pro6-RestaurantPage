const generateMenuTab = () => {
  const tabContent = document.querySelector('.tabContent');
  while (tabContent.firstChild) {
    tabContent.removeChild(tabContent.lastChild);
  };
  const generateP = document.createElement('p');
  generateP.innerText = 'We the People of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defence, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the United States of America.'
  tabContent.appendChild(generateP);
}

export default generateMenuTab;