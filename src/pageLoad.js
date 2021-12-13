const generatePageContent = () => {
  const content = document.querySelector('#content');

  const header = document.createElement('header');
  const pHeader = document.createElement('p');
  const pFooter = document.createElement('p');
  const footer = document.createElement('footer');
  
  header.appendChild(pHeader).innerText = 'Welcome to our magnificient restaurant!';
  footer.appendChild(pFooter).innerText = 'Magnificient family business since 1947';

  content.appendChild(header);

  const tabWrap = document.createElement('div');
  tabWrap.classList.add('tabWrap');
  content.appendChild(tabWrap);
  for (let i = 1; i < 3; i++) {
    const tabWrap = document.querySelector('.tabWrap');
    const bDiv = document.createElement('button');
    const div = document.createElement('div');
    div.classList.add(`tabDiv${i}`);
    bDiv.classList.add(`button${i}`)
    if (div.classList.contains('tabDiv1')) {
      tabWrap.appendChild(div).appendChild(bDiv).innerText = `CONTACT`;
    } else {
      tabWrap.appendChild(div).appendChild(bDiv).innerText = `MENU`;
    };
  };
  const tabContentWrap = document.createElement('div');
  tabContentWrap.classList.add('tabContentWrap');
  const tabContent = document.createElement('div');
  tabContent.classList.add('tabContent');
  content.appendChild(tabContentWrap).appendChild(tabContent).innerText = 'Choose either contact or menu tab';

  content.appendChild(footer);

  return content;
};

export default generatePageContent;