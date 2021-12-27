const app = require('./app.js');
const log = require('./app/log.js')

app.set('port', process.env.PORT || 4040);
const server = app.listen(app.get('port'), () => {
    console.log("\n");
    log("d", "Developed by arwi74");
    log("+", `Working on port: ${ server.address().port }`);
    log("+", "Status: ON");
});