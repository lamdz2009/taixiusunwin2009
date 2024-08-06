
let HU           = require('../../../Models/HU');
let Caoboi_red  = require('../../../Models/Caoboi/Caoboi_red');
let Caoboi_user = require('../../../Models/Caoboi/Caoboi_user');
let Caoboi_percent = require('../../../Models/Caoboi/Caoboi_percent');
let MegaJP_user  = require('../../../Models/MegaJP/MegaJP_user');
let MegaJP_nhan  = require('../../../Models/MegaJP/MegaJP_nhan');
let TopVip       = require('../../../Models/VipPoint/TopVip');
let UserInfo  = require('../../../Models/UserInfo');
let Helpers   = require('../../../Helpers/Helpers');
let randomPer = null;

function random_usingPer(){
		let a = (Math.random()*1000)>>0;
		if(a>0 && a< randomPer.item0){
			return 0;
		}else if(a> randomPer.item0 && a<randomPer.item1){
			return 1;
		}
		else if(a> randomPer.item1 && a<randomPer.item2){
			return 2;
		}
		else if(a> randomPer.item2 && a<randomPer.item3){
			return 3;
		}
		else if(a> randomPer.item3 && a<randomPer.item4){
			return 4;
		}
		else if(a> randomPer.item4 && a<randomPer.item5){
			return 5;
		}
		else if(a> randomPer.item5 && a<randomPer.item6){
			return 6;
		}
		else if(a> randomPer.item6 && a<randomPer.item7){
			return 7;
		}
		else if(a> randomPer.item7 && a<randomPer.item8){
			return 8;
		}
		else if(a> randomPer.item8 && a<randomPer.item9){
			return 9;
		}
		else if(a> randomPer.item9 && a<randomPer.item10){
			return 10;
		}else{
			return 0;
		}
}
function random_T3(){
	let a = (Math.random()*66)>>0;
	if (a == 65) {
		// 65
		return 0;
	}else if (a >= 63 && a < 65) {
		// 63 64
		return 0;
	}else if (a >= 60 && a < 63) {
		// 60 61 62
		return 0;
	}else if (a >= 56 && a < 60) {
		// 56 57 58 59
		return 0;
	}else if (a >= 51 && a < 56) {
		// 51 52 53 54 55
		return 6;
	}else if (a >= 45 && a < 51) {
		// 45 46 47 48 49 50
		return 5;
	}else if (a >= 38 && a < 45) {
		// 38 39 40 41 42 43 44
		return 4;
	}else if (a >= 30 && a < 38) {
		// 30 31 32 33 34 35 36 37
		return 3;
	}else if (a >= 21 && a < 30) {
		// 21 22 23 24 25 26 27 28 29
		return 2;
	}else if (a >= 11 && a < 21) {
		// 11 12 13 14 15 16 17 18 19 20
		return 1;
	}else{
		// 0 1 2 3 4 5 6 7 8 9 10
		return 0;
	}
}
function random_T1(){
	let a = (Math.random()*66)>>0;
	if (a == 65) {
		// 65
		return 10;
	}else if (a >= 63 && a < 65) {
		// 63 64
		return 9;
	}else if (a >= 60 && a < 63) {
		// 60 61 62
		return 8;
	}else if (a >= 56 && a < 60) {
		// 56 57 58 59
		return 7;
	}else if (a >= 51 && a < 56) {
		// 51 52 53 54 55
		return 6;
	}else if (a >= 45 && a < 51) {
		// 45 46 47 48 49 50
		return 5;
	}else if (a >= 38 && a < 45) {
		// 38 39 40 41 42 43 44
		return 4;
	}else if (a >= 30 && a < 38) {
		// 30 31 32 33 34 35 36 37
		return 3;
	}else if (a >= 21 && a < 30) {
		// 21 22 23 24 25 26 27 28 29
		return 2;
	}else if (a >= 11 && a < 21) {
		// 11 12 13 14 15 16 17 18 19 20
		return 1;
	}else{
		// 0 1 2 3 4 5 6 7 8 9 10
		return 0;
	}
}

function random_T2(){
	let a = (Math.random()*2)>>0;
	if (a == 1) {
		return 8;
	}else{
		return 7;
	}
}

function random_cel2(){
	let a = (Math.random()*28)>>0;
	if (a == 27) {
		// 27
		return 6;
	}else if (a >= 25 && a < 27) {
		// 25 26
		return 5;
	}else if (a >= 22 && a < 25) {
		// 22 23 24
		return 4;
	}else if (a >= 18 && a < 22) {
		// 18 19 20 21
		return 3;
	}else if (a >= 13 && a < 18) {
		// 13 14 15 16 17
		return 2;
	}else if (a >= 7 && a < 13) {
		// 7 8 9 10 11 12
		return 1;
	}else{
		// 0 1 2 3 4 5 6
		return 0;
	}
}

function check_win(data, line){
	let win_icon = 0;
	let win_type = null;
	let thaythe  = 0;  // Thay Thế (WinD)
	let arrT     = []; // Mảng lọc các bộ

	for (let i = 0; i < 5; i++) {
		let dataT = data[i];
		if (dataT == 10) {
			++thaythe;
		}
		if (void 0 === arrT[dataT]) {
			arrT[dataT] = 1;
		}else{
			arrT[dataT] += 1;
		}
	}

	arrT.forEach(function(c, index) {
		if (index != 7 && index != 8 && index != 10) {
			arrT[index] += thaythe;
		}
	});
	arrT = arrT.map(function(c, index){
		let X = 0;
		if (index == 10) {
			if (c == 2) {
				X = 8;
			}else if(c == 3){
				X = 50;
			}else if(c == 4){
				X = 1000;
			}else if(c == 5){
				X = 8000;
			}
		}else if (index == 9) {
			if (c == 2) {
				X = 4;
			}else if(c == 3){
				X = 25;
			}else if(c == 4){
				X = 100;
			}else if(c == 5){
				X = 5000;
			}
		}else if (index == 8) {
			if(c == 3){
				X = 75;
			}else if(c == 4){
				X = 150;
			}else if(c == 5){
				X = 450;
			}
		}else if (index == 7) {
			if(c == 3){
				X = 75;
			}else if(c == 4){
				X = 150;
			}else if(c == 5){
				X = 450;
			}
		}else if (index == 6) {
			if(c == 3){
				X = 20;
			}else if(c == 4){
				X = 75;
			}else if(c == 5){
				X = 500;
			}
		}else if (index == 5) {
			if(c == 3){
				X = 16;
			}else if(c == 4){
				X = 60;
			}else if(c == 5){
				X = 375;
			}
		}else if (index == 4) {
			if(c == 3){
				X = 12;
			}else if(c == 4){
				X = 45;
			}else if(c == 5){
				X = 275;
			}
		}else if (index == 3) {
			if(c == 3){
				X = 10;
			}else if(c == 4){
				X = 30;
			}else if(c == 5){
				X = 150;
			}
		}else if (index == 2) {
			if(c == 3){
				X = 5;
			}else if(c == 4){
				X = 25;
			}else if(c == 5){
				X = 50;
			}
		}else if (index == 1) {
			if(c == 3){
				X = 5;
			}else if(c == 4){
				X = 10;
			}else if(c == 5){
				X = 25;
			}
		}else if (index == 0) {
			if(c == 3){
				X = 2;
			}else if(c == 4){
				X = 5;
			}else if(c == 5){
				X = 10;
			}
		}
		return {icon:index, lanve:c, x:X};
	});
	arrT.sort(function(a, b){return b.x-a.x});
	let win = arrT[0];
	data = null;
	win_icon = null;
	win_type = null;
	thaythe  = null;
	arrT     = null;
	return {line:line, win:win.icon, type:win.lanve};
}

function gameBonusX(bet, x){
	if (x == 0) {
		return ((((Math.random()*(28-8+1))+8))>>0)*bet;
	}else{
		return bet*x;
	}
}

function gameBonus(client, bet){
	let map = [
		gameBonusX(bet, 0),
		gameBonusX(bet, 0),
		gameBonusX(bet, 0),
		gameBonusX(bet, 0),
		gameBonusX(bet, 0),
		gameBonusX(bet, 0),
		gameBonusX(bet, 0),
		gameBonusX(bet, 0),
		gameBonusX(bet, 0),
		gameBonusX(bet, 0),
	];

	map = Helpers.shuffle(map); // tráo bài lần 1
	map = Helpers.shuffle(map); // tráo bài lần 2
	map = Helpers.shuffle(map); // tráo bài lần 3

	Promise.all(map.map(function(obj){
		return {isOpen:false, bet:obj};
	}))
	.then(result => {
		client.Caoboi.bonus = result;
	});
}

function loadCached(bet){
		randomPer = Caoboi_percent.findOne({type:bet}).exec();
		if(!!randomPer){
				randomPer.item1 = randomPer.item0 + randomPer.item1;
				randomPer.item2 = randomPer.item1 + randomPer.item2;
				randomPer.item3 = randomPer.item2 + randomPer.item3;
				randomPer.item4 = randomPer.item3 + randomPer.item4;
				randomPer.item5 = randomPer.item4 + randomPer.item5;
				randomPer.item6 = randomPer.item5 + randomPer.item6;
				randomPer.item7 = randomPer.item6 + randomPer.item7;
				randomPer.item8 = randomPer.item7 + randomPer.item8;
				randomPer.item9 = randomPer.item8 + randomPer.item9;
				randomPer.item10 = randomPer.item9 + randomPer.item10;
		}
}
module.exports = function(client, data){
	if (!!data && !!data.cuoc && Array.isArray(data.line)) {
		let bet  = data.cuoc>>0;                   // Mức cược
		let line = Array.from(new Set(data.line)); // Dòng cược // fix trùng lặp
		if (!(bet == 100 || bet == 1000 || bet == 10000) || line.length < 1) {
			client.red({Caoboi:{status:0}, notice:{text:'DỮ LIỆU KHÔNG ĐÚNG...', title:'THẤT BẠI'}});
		}else{
			client.Caoboi = void 0 === client.Caoboi ? {id:'', bet:bet, bonus:null, bonusL:0, bonusWin:0, free:0} :client.Caoboi;
			client.Caoboi.bet = bet;
			let tongCuoc = bet*line.length;
			UserInfo.findOne({id:client.UID}, 'red name', function(err, user){
				if (!user || client.Caoboi.free === 0 && user.red < tongCuoc) {
					client.red({Caoboi:{status:0, notice:'Bạn không đủ R để quay.!!'}});
				}else{
					let config = Helpers.getConfig('Caoboi');
					let phe = red = 2;    // Phế
					let addQuy = (tongCuoc*0.005)>>0;
					let line_nohu = 0;
					let bet_win   = 0;
					let free      = 0;
					let type      = 0;   // Loại được ăn lớn nhất trong phiên
					let isFree    = false;
					let nohu      = false;
					let isBigWin  = false;
					let balans    = user.red-tongCuoc;
					// tạo kết quả
					HU.findOne({game:'Caoboi', type:bet}, {}, function(err2, dataHu){
						if (dataHu === null){
							return void 0;
						}
						let uInfo      = {hu:0};
						let mini_users = {hu:0};
						let huUpdate   = {bet:addQuy, hu:0};
						let celSS = null;
						if(line.length<15){
							console.log("Caoboi, Số dòng chọn: "+line.length)
							celSS = [
								random_T3(), 2, random_T3(),
								random_T3(), random_T3(), 0,
								random_T3(), 0, 8,
								1, 7, 3,
								1, random_T3(), 9,
							
							];
							console.log(celSS)
						}else{
							console.log("Caoboi, Số dòng chọn: "+line.length)
							celSS = [
								random_T3(), 2, random_T3(),
								random_T3(), random_T3(), 0,
								random_T3(), 0, 8,
								1, 7, 3,
								1, random_T3(), 9,

							];
						}
						 if (config.chedo == 0) {
							celSS = [
								random_T3(), random_T3(), random_T3(),
								random_T3(), random_T3(), 3,
								random_T2(), 0,           2,
								1, 1, 4,
								0, 0, 0,
							];
						 }else if(config.chedo == 1){
						// trung bình
							celSS = [
								random_T3(),   random_T3(), random_T3(),
								random_T3(),   random_T3(), random_T3(),
								random_cel2(), 0,           2,
								1, 1, random_T2(),
								0, 0, 0,
							];
						 }else{
							celSS = [
								random_T3(),   random_T3(),   random_T3(),
								random_T3(),   random_T3(),   random_T3(),
								random_cel2(), random_cel2(), 2,
								1, 1, random_T2(),
								0, 0, 0,
							];
						 }
						celSS = Helpers.shuffle(celSS); // tráo bài lần 1
						celSS = Helpers.shuffle(celSS); // tráo bài lần 2
						celSS = Helpers.shuffle(celSS); // tráo bài lần 3
						let cel1 = [celSS[0],  celSS[1],  celSS[2]];  // Cột 1
						let cel2 = [celSS[3],  celSS[4],  celSS[5]];  // Cột 2
						let cel3 = [celSS[6],  celSS[7],  celSS[8]];  // Cột 3
						let cel4 = [celSS[9],  celSS[10], celSS[11]]; // Cột 4
						let cel5 = [celSS[12], celSS[13], celSS[14]]; // Cột 5
						let freeScreen = celSS.filter(x => x==7).length;
						if (freeScreen >= 5) {
							checkWin = true;
							// free x18
							free += 18;
							isFree = true;
						}else if (freeScreen == 4){
							// free x6
							checkWin = true;
							free += 6;
							isFree = true;
						}else if (freeScreen == 3){
							// free x3
							checkWin = true;
							free += 3;
							isFree = true;
						}
						let bonusScreen = celSS.filter(x => x==8).length;

						if (bonusScreen >= 5) {
							// Bonus 5
							client.Caoboi.bonusL = 5;
							gameBonus(client, bet);
						}else if (bonusScreen == 4){
							// Bonus 4
							client.Caoboi.bonusL = 4;
							gameBonus(client, bet);
						}else if (bonusScreen == 3){
							// Bonus 3
							client.Caoboi.bonusL = 3;
							gameBonus(client, bet);
						}
						let quyHu     = dataHu.bet;
						let checkName = (client.profile.name == dataHu.name);
						if (checkName) {
							line_nohu = ((Math.random()*line.length)>>0);
							line_nohu = line[line_nohu];
						}
						// kiểm tra kết quả
						Promise.all(line.map(function(selectLine){
							switch(selectLine){
								case 1:
									if (!!line_nohu && line_nohu == selectLine) {
										cel1[1] = 9;
										cel2[1] = 9;
										cel3[1] = 9;
										cel4[1] = 9;
										cel5[1] = 9;
									}
									return check_win([cel1[1], cel2[1], cel3[1], cel4[1], cel5[1]], selectLine);
									break;

								case 2:
									if (!!line_nohu && line_nohu == selectLine) {
										cel1[0] = 9;
										cel2[0] = 9;
										cel3[0] = 9;
										cel4[0] = 9;
										cel5[0] = 9;
									}
									return check_win([cel1[0], cel2[0], cel3[0], cel4[0], cel5[0]], selectLine);
									break;

								case 3:
									if (!!line_nohu && line_nohu == selectLine) {
										cel1[2] = 9;
										cel2[2] = 9;
										cel3[2] = 9;
										cel4[2] = 9;
										cel5[2] = 9;
									}
									return check_win([cel1[2], cel2[2], cel3[2], cel4[2], cel5[2]], selectLine);
									break;

								case 4:
									if (!!line_nohu && line_nohu == selectLine) {
										cel1[2] = 9;
										cel2[1] = 9;
										cel3[0] = 9;
										cel4[1] = 9;
										cel5[2] = 9;
									}
									return check_win([cel1[2], cel2[1], cel3[0], cel4[1], cel5[2]], selectLine);
									break;

								case 5:
									if (!!line_nohu && line_nohu == selectLine) {
										cel1[0] = 9;
										cel2[1] = 9;
										cel3[2] = 9;
										cel4[1] = 9;
										cel5[0] = 9;
									}
									return check_win([cel1[0], cel2[1], cel3[2], cel4[1], cel5[0]], selectLine);
									break;

								case 6:
									if (!!line_nohu && line_nohu == selectLine) {
										cel1[1] = 9;
										cel2[0] = 9;
										cel3[0] = 9;
										cel4[0] = 9;
										cel5[1] = 9;
									}
									return check_win([cel1[1], cel2[0], cel3[0], cel4[0], cel5[1]], selectLine);
									break;

								case 7:
									if (!!line_nohu && line_nohu == selectLine) {
										cel1[1] = 9;
										cel2[2] = 9;
										cel3[2] = 9;
										cel4[2] = 9;
										cel5[1] = 9;
									}
									return check_win([cel1[1], cel2[2], cel3[2], cel4[2], cel5[1]], selectLine);
									break;

								case 8:
									if (!!line_nohu && line_nohu == selectLine) {
										cel1[0] = 9;
										cel2[0] = 9;
										cel3[1] = 9;
										cel4[2] = 9;
										cel5[2] = 9;
									}
									return check_win([cel1[0], cel2[0], cel3[1], cel4[2], cel5[2]], selectLine);
									break;

								case 9:
									if (!!line_nohu && line_nohu == selectLine) {
										cel1[2] = 9;
										cel2[2] = 9;
										cel3[1] = 9;
										cel4[0] = 9;
										cel5[0] = 9;
									}
									return check_win([cel1[2], cel2[2], cel3[1], cel4[0], cel5[0]], selectLine);
									break;

								case 10:
									if (!!line_nohu && line_nohu == selectLine) {
										cel1[1] = 9;
										cel2[2] = 9;
										cel3[1] = 9;
										cel4[0] = 9;
										cel5[1] = 9;
									}
									return check_win([cel1[1], cel2[2], cel3[1], cel4[0], cel5[1]], selectLine);
									break;

								case 11:
									if (!!line_nohu && line_nohu == selectLine) {
										cel1[1] = 9;
										cel2[0] = 9;
										cel3[1] = 9;
										cel4[2] = 9;
										cel5[1] = 9;
									}
									return check_win([cel1[1], cel2[0], cel3[1], cel4[2], cel5[1]], selectLine);
									break;

								case 12:
									if (!!line_nohu && line_nohu == selectLine) {
										cel1[0] = 9;
										cel2[1] = 9;
										cel3[1] = 9;
										cel4[1] = 9;
										cel5[0] = 9;
									}
									return check_win([cel1[0], cel2[1], cel3[1], cel4[1], cel5[0]], selectLine);
									break;

								case 13:
									if (!!line_nohu && line_nohu == selectLine) {
										cel1[2] = 9;
										cel2[1] = 9;
										cel3[1] = 9;
										cel4[1] = 9;
										cel5[2] = 9;
									}
									return check_win([cel1[2], cel2[1], cel3[1], cel4[1], cel5[2]], selectLine);
									break;

								case 14:
									if (!!line_nohu && line_nohu == selectLine) {
										cel1[0] = 9;
										cel2[1] = 9;
										cel3[0] = 9;
										cel4[1] = 9;
										cel5[0] = 9;
									}
									return check_win([cel1[0], cel2[1], cel3[0], cel4[1], cel5[0]], selectLine);
									break;

								case 15:
									if (!!line_nohu && line_nohu == selectLine) {
										cel1[2] = 9;
										cel2[1] = 9;
										cel3[2] = 9;
										cel4[1] = 9;
										cel5[2] = 9;
									}
									return check_win([cel1[2], cel2[1], cel3[2], cel4[1], cel5[2]], selectLine);
									break;

								case 16:
									if (!!line_nohu && line_nohu == selectLine) {
										cel1[1] = 9;
										cel2[1] = 9;
										cel3[0] = 9;
										cel4[1] = 9;
										cel5[1] = 9;
									}
									return check_win([cel1[1], cel2[1], cel3[0], cel4[1], cel5[1]], selectLine);
									break;

								case 17:
									if (!!line_nohu && line_nohu == selectLine) {
										cel1[1] = 9;
										cel2[1] = 9;
										cel3[2] = 9;
										cel4[1] = 9;
										cel5[1] = 9;
									}
									return check_win([cel1[1], cel2[1], cel3[2], cel4[1], cel5[1]], selectLine);
									break;

								case 18:
									if (!!line_nohu && line_nohu == selectLine) {
										cel1[0] = 9;
										cel2[0] = 9;
										cel3[2] = 9;
										cel4[0] = 9;
										cel5[0] = 9;
									}
									return check_win([cel1[0], cel2[0], cel3[2], cel4[0], cel5[0]], selectLine);
									break;

								case 19:
									if (!!line_nohu && line_nohu == selectLine) {
										cel1[2] = 9;
										cel2[2] = 9;
										cel3[0] = 9;
										cel4[2] = 9;
										cel5[2] = 9;
									}
									return check_win([cel1[2], cel2[2], cel3[0], cel4[2], cel5[2]], selectLine);
									break;

								case 20:
									if (!!line_nohu && line_nohu == selectLine) {
										cel1[0] = 9;
										cel2[2] = 9;
										cel3[2] = 9;
										cel4[2] = 9;
										cel5[0] = 9;
									}
									return check_win([cel1[0], cel2[2], cel3[2], cel4[2], cel5[0]], selectLine);
									break;

								case 21:
									if (!!line_nohu && line_nohu == selectLine) {
										cel1[2] = 9;
										cel2[0] = 9;
										cel3[0] = 9;
										cel4[0] = 9;
										cel5[2] = 9;
									}
									return check_win([cel1[2], cel2[0], cel3[0], cel4[0], cel5[2]], selectLine);
									break;

								case 22:
									if (!!line_nohu && line_nohu == selectLine) {
										cel1[1] = 9;
										cel2[0] = 9;
										cel3[2] = 9;
										cel4[0] = 9;
										cel5[1] = 9;
									}
									return check_win([cel1[1], cel2[0], cel3[2], cel4[0], cel5[1]], selectLine);
									break;

								case 23:
									if (!!line_nohu && line_nohu == selectLine) {
										cel1[1] = 9;
										cel2[2] = 9;
										cel3[0] = 9;
										cel4[2] = 9;
										cel5[1] = 9;
									}
									return check_win([cel1[1], cel2[2], cel3[0], cel4[2], cel5[1]], selectLine);
									break;

								case 24:
									if (!!line_nohu && line_nohu == selectLine) {
										cel1[0] = 9;
										cel2[2] = 9;
										cel3[0] = 9;
										cel4[2] = 9;
										cel5[0] = 9;
									}
									return check_win([cel1[0], cel2[2], cel3[0], cel4[2], cel5[0]], selectLine);
									break;

								case 25:
									if (!!line_nohu && line_nohu == selectLine) {
										cel1[2] = 9;
										cel2[0] = 9;
										cel3[2] = 9;
										cel4[0] = 9;
										cel5[2] = 9;
									}
									return check_win([cel1[2], cel2[0], cel3[2], cel4[0], cel5[2]], selectLine);
									break;
							}
						}))
						.then(result => {
							result = result.filter(function(line_win){
								let checkWin = false;
								if(!nohu && line_win.win == 10) {
									if (line_win.type === 5) {
										// x8000
										checkWin = true;
										bet_win += bet*8000;
									}else if (line_win.type === 4){
										// x1000
										checkWin = true;
										bet_win += bet*1000;
									}else if (line_win.type === 3){
										// x50
										checkWin = true;
										bet_win += bet*50;
									}else if (line_win.type === 2){
										// x8
										checkWin = true;
										bet_win += bet*8;
									}
								} else if (line_win.win == 9) {
									if (line_win.type === 5) {
										checkWin = true;
										// Nổ Hũ
										type = 2;
										if (!nohu) {
											let okHu = (quyHu-Math.ceil(quyHu*phe/100))>>0;
											bet_win += okHu;
											HU.updateOne({game:'Caoboi', type:bet}, {$set:{name:'', bet:dataHu.min}}).exec();
											red && client.redT.sendInHome({pushnohu:{title:'Caoboi', name:client.profile.name, bet:okHu}});
										}else{
											let okHu = (dataHu.min-Math.ceil(dataHu.min*phe/100))>>0;
											bet_win += okHu;
											red && client.redT.sendInHome({pushnohu:{title:'Caoboi', name:client.profile.name, bet:okHu}});
										}
											huUpdate.hu += 1;
											uInfo.hu += 1;
											mini_users.hu += 1;
											nohu = true;
									}else if (!nohu && line_win.type === 4){
										// x100
										checkWin = true;
										bet_win += bet*100;
									}else if (!nohu && line_win.type === 3){
										// x25
										checkWin = true;
										bet_win += bet*25;
									}else if (!nohu && line_win.type === 2){
										// x4
										checkWin = true;
										bet_win += bet*4;
									}
								}else if(!nohu && line_win.win == 6) {
									if (line_win.type === 5) {
										// x500
										checkWin = true;
										bet_win += bet*500;
									}else if (line_win.type === 4){
										// x75
										checkWin = true;
										bet_win += bet*75;
									}else if (line_win.type === 3){
										// x20
										checkWin = true;
										bet_win += bet*20;
									}
								}else if(!nohu && line_win.win == 5) {
									if (line_win.type === 5) {
										// x375
										checkWin = true;
										bet_win += bet*375;
									}else if (line_win.type === 4){
										// x60
										checkWin = true;
										bet_win += bet*60;
									}else if (line_win.type === 3){
										// x16
										checkWin = true;
										bet_win += bet*16;
									}
								}else if(line_win.win == 4) {
									if (line_win.type === 5) {
										// x275
										checkWin = true;
										bet_win += bet*275;
									}else if (line_win.type === 4){
										// x45
										checkWin = true;
										bet_win += bet*45;
									}else if (line_win.type === 3){
										// x12
										checkWin = true;
										bet_win += bet*12;
									}
								}else if(!nohu && line_win.win == 3) {
									if (line_win.type === 5) {
										// x150
										checkWin = true;
										bet_win += bet*150;
									}else if (line_win.type === 4){
										// x30
										checkWin = true;
										bet_win += bet*30;
									}else if (line_win.type === 3){
										// x10
										checkWin = true;
										bet_win += bet*10;
									}
								}else if(!nohu && line_win.win == 2) {
									if (line_win.type === 5) {
										// x50
										checkWin = true;
										bet_win += bet*50;
									}else if (line_win.type === 4){
										// x25
										checkWin = true;
										bet_win += bet*25;
									}else if (line_win.type === 3){
										// x5
										checkWin = true;
										bet_win += bet*5;
									}
								}else if(!nohu && line_win.win == 1) {
									if (line_win.type === 5) {
										// x25
										checkWin = true;
										bet_win += bet*25;
									}else if (line_win.type === 4){
										// x10
										checkWin = true;
										bet_win += bet*10;
									}else if (line_win.type === 3){
										// x5
										checkWin = true;
										bet_win += bet*5;
									}
								}else if(!nohu && line_win.win == 0) {
									if (line_win.type === 5) {
										// x10
										checkWin = true;
										bet_win += bet*10;
									}else if (line_win.type === 4){
										// x5
										checkWin = true;
										bet_win += bet*5;
									}else if (line_win.type === 3){
										// x2
										checkWin = true;
										bet_win += bet*2;
									}
								}
								return checkWin;
							});
							let tien = 0;
							if (client.Caoboi.free > 0) {
								tien = bet_win;
								client.Caoboi.free -= 1;
							}else{
								tien = bet_win-tongCuoc;
							}
							if (!nohu && bet_win >= tongCuoc*2.24) {
								isBigWin = true;
								//type = 1;
								//if (red) {
									bet_win >= 10000 && client.redT.sendInHome({news:{t:{game:'Caoboi', users:client.profile.name, bet:bet_win, status:2}}});
								//}
							}
							if (free > 0) {
								client.Caoboi.free += free;
							}

							let thuong = 0;
									uInfo.red = tien;
									uInfo.totall = tien;
									huUpdate.redPlay = tongCuoc;
									uInfo.redPlay = tongCuoc;
									mini_users.bet = tongCuoc;
									mini_users.totall = tien;
								if (tien > 0){
									huUpdate.redWin = tien;
									uInfo.redWin = tien;
									mini_users.win = tien;         // Cập nhật Số Red đã Thắng
								}
								if (tien < 0){
									let tienLost = tien*-1;
									huUpdate.redLost = tienLost;
									uInfo.redLost = tienLost;
									mini_users.lost = tienLost; // Cập nhật Số Red đã Thua
								}

								Caoboi_red.create({'name':client.profile.name, 'type':type, 'win':bet_win, 'bet':bet, 'kq':result.length, 'line':line.length, 'time':new Date()}, function (err4, small) {
									client.red({Caoboi:{status:1, cel:[cel1, cel2, cel3, cel4, cel5], line_win:result, win:bet_win, free:client.Caoboi.free, isFree:isFree, isBonus:client.Caoboi.bonusL, isNoHu:nohu, isBigWin:isBigWin, phien:small.id}, user:{red:user.red-tongCuoc}});
									client.Caoboi.id = small._id.toString();
								});

								MegaJP_user.findOne({uid:client.UID}, {}, function(err, updateMega){
									if (!!updateMega) {
										if (tien > 0){
											updateMega['win'+bet] += tien;
										}
										if (tien < 0){
											updateMega['lost'+bet] += tien*-1;
										}

										let MWin    = updateMega['win'+bet];
										let MLost   = updateMega['lost'+bet];
										let MUpdate = updateMega['last'+bet];
										let RedHuong = MLost-MWin-MUpdate;
										if (bet !== 10000) {
											if (RedHuong > bet*4000) {
												updateMega[bet] += 1;
												updateMega['last'+bet] += RedHuong;
												MegaJP_nhan.create({'uid':client.UID, 'room':bet, 'to':103, 'sl':1, 'status':true, 'time':new Date()});
											}
										}else{
											if (RedHuong > bet*1000) {
												updateMega[bet] += 1;
												updateMega['last'+bet] += RedHuong;
												MegaJP_nhan.create({'uid':client.UID, 'room':bet, 'to':103, 'sl':1, 'status':true, 'time':new Date()});
											}
										}
										updateMega.save();
									}
								});
							HU.updateOne({game:'Caoboi', type:bet}, {$inc:huUpdate}).exec();
							UserInfo.updateOne({id:client.UID},{$inc:uInfo}).exec();
							Caoboi_user.updateOne({'uid':client.UID}, {$set:{time:new Date()}, $inc:mini_users}).exec();
							let vipStatus = Helpers.getConfig('topVip');
							if (!!vipStatus && vipStatus.status === true) {
								TopVip.updateOne({'name':client.profile.name}, {$inc:{vip:tongCuoc}}).exec(function(errV, userV){
									if (!!userV && userV.n === 0) {
										try{
							    			TopVip.create({'name':client.profile.name, 'vip':tongCuoc});
										} catch(e){
										}
									}
								});
							}
						})
					})
				}
			});
		}
	}
};
