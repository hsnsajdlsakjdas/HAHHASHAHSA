//guildMemberAdd = bir kişi sunucuya girdiğinde çalıaşcak fonksiyon

module.exports = (client, member) => {

var kanal = client.channels.get("790572380061040651")

console.log(member.user.bot)
if(member.user.bot === true) {
  kanal.send("Bu kişi bir bot olarak giriş yaptı.")
} 
 kanal.send(`:inbox_tray: | <@${member.id}> adlı kişi sunucuya giriş yaptı. `)

}
