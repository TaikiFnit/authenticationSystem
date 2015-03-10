var express = require('express');
var router = express.Router();

// ダミーのユーザーデータ
var members = {
  taiki: 'fnit',
  fnit: 'taiki'
};

/* GET home page. */
router.get('/', function(req, res, next) {

  /* cookie */
  var msg = 'hello';

  var cookie = req.cookies;

  if(cookie != undefined){
    msg += '(saved: ' + cookie.msg + ')';
  }

  /* session

  var msg = '';
  if(req.session.login != true){
    msg = 'Plase Login.';
  } else {
    msg = 'ID:' + req.session.name + ' でログインしています';
  }

  */

  res.render('index', { 
    title: 'Express',
    msg: msg
   });
});

router.post('/', function(req, res, next){

  /* cookie */
  var text1 = req.body.text1;
  res.cookie("msg", text1, {maxAge: 600000});
  msg = '「' + text1 + '」と送信しました';

  /* session 
  var name = req.body.name;
  var pass = req.body.pass;
  var msg = '';
  var member_pass = members[name];
  if(member_pass == pass){
    res.session.login = true;
    req.session.name = name;
    msg = '"' + name + '"でログインしました。';
  } else {
    req.session.login = false;
    msg = 'ログインに失敗しました';
  }
  */

  res.render('index', {
    title: 'Express',
    msg : msg
  });
});

module.exports = router;
