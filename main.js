var express = require('express'),
    app = express(),
    port = 3000,
    cmd = require('node-cmd');

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/send', (req, res) => {
    
    var titlen = req.query.title;
    var title = titlen.toUpperCase();
    var msgn = req.query.msg;
    var msg = msgn.toUpperCase();
    var code = req.query.code;

    if(code == 'fdh1b3187a') {
        var command = "notify-send " + "\"" + title + "\"" + ' ' + "\"" + msg + "\"";

        console.log(command)
    
        cmd.get(
            command,
            (err, data, stderr) => {
                res.redirect('/');
                console.log(data);
            }
        );
    } else {
        res.redirect('/');
    }
    
 });

app.listen(port, () => {
    console.log('My Alert running on port ' + port)
})