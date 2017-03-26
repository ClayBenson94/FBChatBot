var login = require('facebook-chat-api');
var info = require('../loginInfo.json');

// Create simple echo bot
login({email: info.user, password: info.pass}, (loginErr, api) => {
    if (loginErr) return console.error(loginErr);

    api.listen((apiErr, message) => {
        api.sendMessage(message.body, message.threadID);
    });
});
