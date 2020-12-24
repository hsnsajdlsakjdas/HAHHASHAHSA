//guildMemberRemove = bir kişi sunucudan çıktığında çalıaşcak fonksiyon
module.exports = (client, member) => {

var kanal = client.channels.get("790572380061040651")
 kanal.send(`:outbox_tray: | **${member.user.username}** adlı kişi sunucudan çıkış yaptı. `)

}
