const sconeTypes = [
  { type: 'blueberry',
    heavyCreamLS: 37,
    heavyCreamSS: 60,
    mixLS: 53,
    mixSS: 85,
    ingredLS: 22,
    ingredSS: 35,
    ingredType: 'Blueberries: '
  },
  { type: 'cinnamon',
    heavyCreamLS: 37,
    heavyCreamSS: 30,
    mixLS: 58,
    mixSS: 46,
    ingredLS: 17,
    ingredSS: 14,
    ingredType: 'Cinnamon Chips: '
  },
  { type: 'orange',
    heavyCreamLS: 39,
    heavyCreamSS: 31,
    mixLS: 67,
    mixSS: 54,
    ingredLS: 7,
    ingredSS: 5,
    ingredType: 'Orange Zest: '
},
  { type: 'apple',
    heavyCreamLS: 35,
    heavyCreamSS: 0,
    mixLS: 50,
    mixSS: 0,
    ingredLS: 25,
    ingredSS: 0,
    ingredType: 'Apple Filling: '
  },
];

const printToDom = (divId, stringToPrint) => {
  $(`#${divId}`).html(stringToPrint);
};

// const eventListener = () => {
//   $('body').on('click', 'button', (e) => {
//     const recipeToCalculate = e.target.id;
//     e.preventDefault();
//     printToDom('recipeZone', recipeToCalculate);
//   })
// };

const sconeRecipe = () => {
  $('body').on('click', 'button', (e) => {
    const  largeSconeQuantity = $('#largeScone').val();
    const smallSconeQuantity = $('#smallScone').val();
    const recipeToCalculate = e.target.id;
    e.preventDefault();
    let domString = '';

    for (let i = 0; i < sconeTypes.length; i ++) {
      if (recipeToCalculate === sconeTypes[i].type) {
        domString += largeSconeQuantity + smallSconeQuantity + sconeTypes[i].ingredType;
      }
    }
    printToDom('recipeZone', domString);
  })
};

const init = () => {
  sconeRecipe();
};

init();