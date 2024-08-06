
let AngryBirds_red = require('../../../Models/AngryBirds/AngryBirds_red');
module.exports = function(client, data){
	if(!!data && !!data.page){
		let page = data.page>>0; // trang
		if (page < 1) {
			client.red({notice:{text: 'DỮ LIỆU KHÔNG ĐÚNG...', title: 'THẤT BẠI'}});
			page = null;
			client = null;
		}else{
			let kmess = 10;
			AngryBirds_red.countDocuments({name: client.profile.name}).exec(function(err, total){
				AngryBirds_red.find({name: client.profile.name}, 'id win bet time', {sort:{'_id':-1}, skip: (page-1)*kmess, limit: kmess}, function(err, result) {
					Promise.all(result.map(function(obj){
						obj = obj._doc;
						delete obj._id;
						return obj;
					}))
					.then(resultArr => {
						client.red({mini:{arb:{log:{data:resultArr, page:page, kmess:kmess, total:total}}}});
						page = null;
						kmess = null;
						total = null;
						client = null;
					})
				});
			});
		}
	}
};
