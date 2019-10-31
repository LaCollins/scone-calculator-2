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

const sconeRecipe = () => {
  $('body').on('click', 'button', (e) => {
    const  largeSconeQuantity = $('#largeScone').val();
    let smallSconeQuantity = $('#smallScone').val();
    const recipeToCalculate = e.target.id;
    e.preventDefault();
    let domString = '';
    if (smallSconeQuantity > 8 && recipeToCalculate === 'blueberry') {
      const totalMini = smallSconeQuantity * 6;
      window.alert(`WARNING: This recipe will make ${totalMini} mini bluberry scones. Please make sure you have entered the correct number of PACKS before continuing.`);
    } else if (smallSconeQuantity > 8 && recipeToCalculate === 'orange') {
      const totalMini = smallSconeQuantity * 3;
      window.alert(`WARNING: This recipe will make ${totalMini} mini orange scones. Please make sure you have entered the correct number of PACKS before continuing.`);
    };

    for (let i = 0; i < sconeTypes.length; i ++) {
      if (smallSconeQuantity > 0 && recipeToCalculate === 'apple') {
        window.alert('WARNING: You can not calculate mini scones for apple! Quantity set to zero.');
        $('#smallScone').val(0);
        smallSconeQuantity = 0;
      };

      if (recipeToCalculate === sconeTypes[i].type) {
        const totalCream = ((largeSconeQuantity * sconeTypes[i].heavyCreamLS) + (smallSconeQuantity * sconeTypes[i].heavyCreamSS));
        const totalMix = ((largeSconeQuantity * sconeTypes[i].mixLS) + (smallSconeQuantity * sconeTypes[i].mixSS));
        const totalAdd = ((largeSconeQuantity * sconeTypes[i].ingredLS) + (smallSconeQuantity * sconeTypes[i].ingredSS));

        domString += `
        <div id="recipeContainer">
          <h2>Recipe</h2>
          <h3><b>Heavy Cream:</b> ${totalCream} grams</h3>
          <h3><b>Scone Mix:</b> ${totalMix} grams</h3>
          <h3><b>${sconeTypes[i].ingredType}</b> ${totalAdd} grams</h3>
        </div>`;
      }
      printToDom('recipeZone', domString);
    }
  })
};

const init = () => {
  sconeRecipe();
};

init();