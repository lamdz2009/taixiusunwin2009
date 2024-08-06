
let angrybird  = require('./bot_hu/angrybird');
let bigbabol   = require('./bot_hu/bigbabol');
let candy      = require('./bot_hu/candy');
let sexandzen      = require('./bot_hu/sexandzen');
let daohaitac      = require('./bot_hu/daohaitac');
let longlan    = require('./bot_hu/longlan');
//let thuonghai    = require('./bot_hu/thuonghai');
let royal    = require('./bot_hu/royal');
let sieuxe    = require('./bot_hu/sieuxe');
let zeus    = require('./bot_hu/zeus');
let caoboi    = require('./bot_hu/caoboi');
let tamhung    = require('./bot_hu/tamhung');
let mini3cay   = require('./bot_hu/mini3cay');
let minipoker  = require('./bot_hu/minipoker');
let vqred      = require('./bot_hu/vqred');
let dmanhhung      = require('./bot_hu/dmanhhung');

module.exports = function(io, listBot){
 	setTimeout(() =>{
		angrybird(io, listBot);
	//	mini3cay(io, listBot);
		minipoker(io, listBot);
	}, 20000);
	setTimeout(() =>{
		bigbabol(io, listBot);
	}, 20000); 

	setTimeout(() =>{
		candy(io, listBot);
	}, 20000);
	setTimeout(() =>{
		sexandzen(io, listBot);
	}, 20000);
	setTimeout(() =>{
		daohaitac(io, listBot);
	}, 20000);
	
	setTimeout(() =>{
		longlan(io, listBot);
	}, 20000);
//setTimeout(() =>{
//		thuonghai(io, listBot);
//;	}, 20000);
	setTimeout(() =>{
		royal(io, listBot);
	}, 20000);
	setTimeout(() =>{
		sieuxe(io, listBot);
	}, 20000);

	setTimeout(() =>{
		vqred(io, listBot);
	}, 20000);
	setTimeout(() =>{
		dmanhhung(io, listBot);
	}, 20000);

	setTimeout(() =>{
		tamhung(io, listBot);
	}, 20000);
	setTimeout(() =>{
		caoboi(io, listBot);
	}, 20000);
	setTimeout(() =>{
		zeus(io, listBot);
		listBot = null;
		io = null;
	}, 20000);
};
