
let telegram = require('../../Models/Telegram');
let Phone    = require('../../Models/Phone');
let UserInfo = require('../../Models/UserInfo');
let helpers  = require('../../Helpers/Helpers');

module.exports = function(redT, id, contact) {
	let phoneCrack = helpers.phoneCrack(contact);
	if (phoneCrack) {
		Phone.findOne({'phone':phoneCrack.phone}, 'uid region phone', function(err, check1){
			if (check1) {
				try {
					telegram.create({'form':id, 'phone':phoneCrack.phone}, function(err, cP){
						phoneCrack = null;
						if (!!cP) {
							UserInfo.findOneAndUpdate({id:check1.uid}, {$set:{veryphone:true,veryold:true}, $inc:{red:0}}).exec(function(err, info){
								if(!!info){
									redT.telegram.sendMessage(id, '_XÁC THỰC THÀNH CÔNG_\nChào Mừng *'+info.name+'*, chúc bạn chơi game vui vẻ...\n\n*HƯỚNG DẪN*\n\nNhập:\n*OTP*:           Lấy mã OTP miễn phí.\n', {parse_mode: 'markdown',reply_markup: {remove_keyboard: true}});
									if (void 0 !== redT.users[check1.uid]) {
										redT.users[check1.uid].forEach(function(client){
											client.red({notice:{title:'THÀNH CÔNG', text: 'Xác thực thành công.!\nChúc các bạn may mắn tại BK88.CLUB...'}, user:{red:info.red*1+0, phone:helpers.cutPhone(check1.region+check1.phone), veryphone:true}});
										});
									}
									redT = null;
									id = null;
								}
							});
						}else{
							redT.telegram.sendMessage(id, '_Thao tác thất bại_', {parse_mode: 'markdown',reply_markup: {remove_keyboard: true}});
							redT = null;
							id = null;
						}
					});
				} catch (error) {
					redT.telegram.sendMessage(id, '_Thao tác thất bại_', {parse_mode: 'markdown',reply_markup: {remove_keyboard: true}});
					redT = null;
					id = null;
					phoneCrack = null;
				}
			}else{
				redT.telegram.sendMessage(id, 'Số điện thoại này chưa được đăng ký. Vui lòng đăng ký tại _BK88.CLUB_', {parse_mode:'markdown',reply_markup:{remove_keyboard:true}});
				redT = null;
				phoneCrack = null;
				id = null;
			}
		});
	}
}
