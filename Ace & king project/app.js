const body = document.querySelector('body');
let card;

let cardContainer;

function createCards() {
	let id = 1;
	for (let i = 0; i < 3; i++) {
		cardContainer = document.createElement('div');
		cardContainer.setAttribute('id', id++);
		body.append(cardContainer);
		card = document.createElement('img');
		card.setAttribute(
			'src',
			'https://images.squarespace-cdn.com/content/v1/5abd8db4620b85fa99f15131/1542340370193-2M2GEBIZH1EOVZWXAL2R/ke17ZwdGBToddI8pDm48kHWzSshJXR3awtTpu27O8pAUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8PaoYXhp6HxIwZIk7-Mi3Tsic-L2IOPH3Dwrhl-Ne3Z2HJVGOXx9WFeQDYkSiL52RCeFwTXzKLXN-j1fKEB_iLMKMshLAGzx4R3EDFOm1kBS/Card+Back+2.0+-+Poker+Size+-+Blue_shw.png'
		);
		cardContainer.append(card);

		cardContainer.className = 'card';
		card.className = 'image';
		cardContainer.addEventListener('click', clickOnCard);
	}
}

function randomNumber() {
	return Math.floor(Math.random() * 3 + 1);
}

function clickOnCard(el) {
	el = event.target.parentElement.id;
	let number = randomNumber();
	const cards = document.getElementsByTagName('div');
	let situ;

	for (const card of cards) {
		if (el == number) {
			card.firstChild.src =
				'https://i7.pngguru.com/preview/458/229/186/king-of-spades-playing-card-suit-jack-queen.jpg';
			document.getElementById(el).firstChild.src =
				"https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.0-9/13817_935979743119727_1778994190686838398_n.jpg?_nc_cat=107&_nc_sid=174925&_nc_ohc=Jb1T9p4VxHUAX9TgaCY&_nc_ht=scontent.ftlv5-1.fna&oh=3214c1f9a28220b247153ecc27f45104&oe=5EEDD855";
			situ = 'won';
		} else {
			card.firstChild.src =
				'https://i7.pngguru.com/preview/458/229/186/king-of-spades-playing-card-suit-jack-queen.jpg';
			document.getElementById(number).firstChild.src =
				'https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.0-9/13817_935979743119727_1778994190686838398_n.jpg?_nc_cat=107&_nc_sid=174925&_nc_ohc=Jb1T9p4VxHUAX9TgaCY&_nc_ht=scontent.ftlv5-1.fna&oh=3214c1f9a28220b247153ecc27f45104&oe=5EEDD855';
			situ = 'lost';
		}
	}

	if (situ === 'won') {
		document.addEventListener("click",handler,true);
		winLoseNotice('You Won');
		setTimeout(endOfRound, 2000);
	} else if (situ === 'lost') {
		document.addEventListener("click",handler,true);
		winLoseNotice('You Lost');
		setTimeout(endOfRound, 2000);
	}

	
}
function handler(e){
    e.stopPropagation();
    e.preventDefault();
}



function endOfRound() {
	const cards = document.getElementsByTagName('div');

	for (const card of cards) {
		card.firstChild.src =
			'https://images.squarespace-cdn.com/content/v1/5abd8db4620b85fa99f15131/1542340370193-2M2GEBIZH1EOVZWXAL2R/ke17ZwdGBToddI8pDm48kHWzSshJXR3awtTpu27O8pAUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8PaoYXhp6HxIwZIk7-Mi3Tsic-L2IOPH3Dwrhl-Ne3Z2HJVGOXx9WFeQDYkSiL52RCeFwTXzKLXN-j1fKEB_iLMKMshLAGzx4R3EDFOm1kBS/Card+Back+2.0+-+Poker+Size+-+Blue_shw.png';
		document.removeEventListener('click', handler, true);
	}
}

function winLoseNotice(winLose) {
	const notice = document.createElement('h3');
	body.append(notice);
	notice.innerHTML = winLose;
	notice.className = 'notice';
	setTimeout(() => {
		notice.classList.add('unvisible');
	}, 1500);
}

createCards();

// https://w0.pngwave.com/png/929/679/war-ace-of-spades-playing-card-ace-of-spades-png-clip-art.png'
