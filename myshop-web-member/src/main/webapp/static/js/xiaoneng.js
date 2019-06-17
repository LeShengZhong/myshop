var NTKF_PARAM="";        
function addxn(){
 $.ajax({
                url: 'http://shop.xtep.com.cn/ajax/GetXNKF.aspx?action=get',
                dataType: 'jsonp',
                success: function (json) {
                var data = eval(json);
                var uid = data.uid;
                var uname = data.uname;
                NTKF_PARAM = {siteid: 'kf_9707', settingid: 'kf_9707_1414986472014', uid: 'vsahring_" + uid  + "',uname: '" + uname + "', isvip: '0',  userlevel: '0'};
                }
            });
addxnkf();
}
 
function addxnkf()
{

    var script = document.createElement('script');
    script.setAttribute('src', 'http://dl.ntalker.com/js/xn6/ntkfstat.js?siteid=kf_9707');
    script.onload = function() {
        console.log('NTKF is success....');
    }
    document.body.appendChild(script);
}

