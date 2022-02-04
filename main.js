const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

//Si collega il contenitore con una variabile
const container = document.getElementById('icon-container');

//Richiamo la funzione sotto scritta
createIcons(container, icons);

//Richiamo con una variabile la selezione di opzioni
const selector = document.getElementById('options-icons');

//Si aggiunge l'event listener per il cambio di selezione
selector.addEventListener('change', 

	function () {

		let changeIcons = this.value;

		if (changeIcons == "") {
			createIcons(container, icons);
		} else {

			const filterIcons = icons.filter(typeIcon => {

				if (typeIcon.type == changeIcons) {
					return true;
				}
				return false;
			});

			createIcons(container, filterIcons);

		}

	}
	
	
	
)

//Creata la funzione per scrivere le icone
function createIcons (container, icons) {

    let content = '';

    icons.forEach(iconObject => {

    content += `<div id="icon-box">
                    <i class="color-${iconObject.color} ${iconObject.family} ${iconObject.prefix}${iconObject.name}"></i>
                    <div class="text-icon">${iconObject.name}</div>
                </div>
                `;
    });

    container.innerHTML = content;

}

