const printToDom = (divId, stringToPrint) => {
  $(`#${divId}`).html(stringToPrint);
};


const eventListener = () => {
  $('body').on('click', 'button', (e) => {
    const recipeToCalculate = e.target.id;
    e.preventDefault();
    printToDom('recipeZone', recipeToCalculate);
  })
};

const init = () => {
  eventListener();
};

init();