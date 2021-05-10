const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = selectedDiv.innerHTML + textToPrint;
};

export default { printToDom };
