const _ = require('lodash');
let request = require('request');
var UserInfo      = require('../../Models/UserInfo');
var BankingBonus = require('../../../config/banking.json');
let Bank_history = require('../../Models/Bank/Bank_history');
var validator     = require('validator');
var helper        = require('../../Helpers/Helpers');
let apikey = `59d0d79c-fc59-44bf-9a12-834c8c68eb8a`;
var dateFormat = require('dateformat');
module.exports = function(client, data){
    if (!!data && !!data.sotien && !!data.captcha) {
        let money = data.sotien>>0;
        if (!validator.isLength(data.captcha, { min: 4, max: 4 })) {
            client.red({ notice: { title: '', text: 'Captcha không đúng!', load: false } });
        }else if (validator.isEmpty(data.sotien)) {
            client.red({ notice: { title: '', text: 'Vui lòng nhập số tiền nạp!', load: false } });
        }else if (money < BankingBonus.min) {
			client.red({notice: {title:'LỖI', text: `Nạp tối thiểu ${helper.numberWithCommas(BankingBonus.min)}, tối đa ${helper.numberWithCommas(BankingBonus.max)}`, load: false }});
		}else{
            let checkCaptcha = new RegExp('^' + data.captcha + '$', 'i');
            checkCaptcha = checkCaptcha.test(client.captcha);
            if (checkCaptcha) {
                let request_id = ''+Math.floor(Math.random() * Math.floor(99999999999999)) * 2 + 1;
                let url = `http://mopay3.vnm.bz:10007/api/MM/RegCharge?chargeType=bank&amount=${money}&apiKey=${apikey}&requestId=${request_id}`;
                request.get({
                    url: url,
                    headers: {'Content-Type': 'application/json'}
                }, function (err, httpResponse, body){
                    try{
                        data = JSON.parse(body);
                        if (data.stt == 1) {
                            UserInfo.findOne({id: client.UID}, 'name', function(err, check){
                                let nap = new Object();
                                nap.syntax = data.data.code;
                                nap.bank_number = data.data.phoneNum;
                                nap.bank_accname = data.data.phoneName;
                                nap.bank_name = data.data.bank_provider;
                                
                                //let data = body[0];
                                Bank_history.create({uid:client.UID ,transId: nap.syntax,bank:nap.bank_name, number:nap.bank_number, name:nap.bank_accname, namego:check.name, hinhthuc:1, money:money, time:new Date()});
                                //data.syntax = check.name;
                                client.red({ shop:{banking:{nap:nap}}});
                                client.red({ notice: { title: '', text: `Yêu cầu nạp tiền thành công`, load: false } });
								var now = new Date();
								let time = dateFormat(now,"h:MM:ss TT, dddd, mmmm dS");
							let text = `===Manager===\nTài khoản: ${client.username}\nĐã đặt lệnh nạp bank: \nMệnh giá: ${money}\nThời gian: ${time}`;
					redT.telegram.sendMessage(-1001570502045, text, {parse_mode:'markdown', reply_markup:{remove_keyboard: true}});
                            });
                        }else{
                            client.red({ notice: { title: '', text: 'Yêu cầu nạp thẻ thất bại', load: false } }); 
                        } 
                    }catch(e){
                        client.red({ notice: { title: '', text: 'Yêu cầu nạp thẻ thất bại', load: false } }); 
                    }
                });  
            }
            else{
                client.red({ notice: { title: '', text: 'Mã xác nhận không chính xác!', load: false } });
            }
        }
    }
    client.c_captcha('bankingController');

}