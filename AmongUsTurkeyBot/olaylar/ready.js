const chalk = require('chalk')
module.exports = (client) => {

//  WATCHING : canlı ders izliyor
//  LISTENING : xxtentacion dinliyor
//  PLAYING  : cyberpunk 2077 oynuyor 

    client.user.setActivity("Youtube",{ type: "WATCHING"} );
    client.user.setActivity("Cyberpunk 2077",{type: "PLAYING" } );
    client.user.setActivity("XXTentacion",{type: "LISTENING" } )
    client.user.setActivity("canlı ders",{ type: "WATCHING"} );

    var logmesajı = chalk.bold.red("Oynuyor kısmı basari ile ayarlandi. \n")+ 
                chalk.italic.yellow("Jspanco : " + client.user.presence.game )
    console.log(logmesajı)
}