import fs, { promises } from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command }) => {
try {
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = conn.getName(m.sender)
let user = global.db.data.users[m.sender]
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
const lugarFecha = moment().tz('America/Lima')
const formatoFecha = {
weekdays: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
}
lugarFecha.locale('es', formatoFecha)
const horarioFecha = lugarFecha.format('dddd,DD [de] MMMM [del] YYYY│[Hora:]HH:mm A').replace(/^\w/, (c) => c.toUpperCase())

let menu = `┏━━━━━━━━━━━━━━━━┓
┃ ~FN ESPORT BOT~
┃   HOLA JEFE YEIKO
┃   EN QUE TE AYUDO
┃ ⭓¡𝘏𝘰𝘭𝘢! @${m.sender.split("@")[0]}
┗━━━━━━━━━━━━━━
 
╭━ [  𝐈𝐍𝐅𝐎 𝐃𝐄𝐋 𝐁𝐎𝐓 ⛅ ] 
*┃➤ 🤖 Bot : FN ESPORT*
*┃➤ DUEÑO : YEIKO*
 ╰━━━━━━━━━━━━⬣

 ╭━〔 🎮 *FREE FIRE* 🎮 〕
*┃➤ 🗺️ .bermuda*
*┃➤ 🗺️ .kalahari*
*┃➤ 🗺️ .alpes*
*┃➤ 🗺️ .purgatorio*
*┃➤ 🗺️ .nexterra*
*┃➤ 📆.agendasemanal*
*┃➤ 🏆 4vs4*
*┃➤ 🏆 6vs6*
*┃➤ 🏆 12vs12*
*┃➤ 🏆 16vs16*
*┃➤ 🏆 interno4vs4*
*┃➤ 🏆 interno6vs6*
┊➺ 🖨️ .reglasclk
┊➺ 🖨️ .reglaslideres
┊➺ 🖨️ .reglaslideres2
 ╰━━━━━━━━━━━━

 ╭━〔 🎰 𝐉𝐔𝐄𝐆𝐎𝐒 🎰 〕
*┃➤ 🎳 .mates*
*┃➤ 🎳 .ppt*
*┃➤ 🎳 .prostituto <@tag>*
*┃➤ 🎳 .prostituta <@tag>*
*┃➤ 🎳 .gay2 <@tag>*
*┃➤ 🎳 .lesbiana <@tag>*
*┃➤ 🎳 .pajero <@tag>*
*┃➤ 🎳 .pajera <@tag>*
*┃➤ 🎳 .puto <@tag>*
*┃➤ 🎳 .puta <@tag>*
*┃➤ 🎳 .manco <@tag>*
*┃➤ 🎳 .manca <@tag>*
*┃➤ 🎳 .rata <@tag>*
*┃➤ 🎳 .negro <@tag>*
*┃➤ 🎳 .negra <@tag>*
*┃➤ 🎳 .fea <@tag>*
*┃➤ 🎳 .feo <@tag>*
*┃➤ 🎳 .sinpoto <@tag>*
*┃➤ 🎳 .sintetas <@tag>*
*┃➤ 🎳 .sinpito <@tag>*
*┃➤ 🎳 .adoptada <@tag>*
*┃➤ 🎳 .adoptado <@tag>*
*┃➤ 🎳 .love*
*┃➤ 🎳 .simisimi*
*┃➤ 🎳 .pregunta*
*┃➤ 🎳 .cuando*
*┃➤ 🎳 .ship5*
*┃➤ 🎳 .abrazo*
*┃➤ 🎳 .ship2*
*┃➤ 🎳 .formarpareja*
*┃➤ 🎳 .cancion*
*┃➤ 🎳 .pista*
*┃➤ 🎳 .ruleta*
*┃➤ 🎳 .zodiac*
*┃➤ 🎳 .odio*
*┃➤ 🎳 .ship*
*┃➤ 🎳 .sorteo*
*┃➤ 🎳 .minovia*
*┃➤ 🎳 .minovio*
*┃➤ 🎳 .kchero*
*┃➤ 🎳 .kchero*
 ╰━━━━━━━━━━━━
 ╰━━━━━━━━━━━━

 ╭━〔 🎭 *IMAGENES* 🎭 〕
*┃➤ 🎨 .goku*
*┃➤ 🎨 .naruto*
 ╰━━━━━━━━━━━━

 ╭━〔 🛜 𝐆𝐄𝐍𝐄𝐑𝐀 𝐏𝐋𝐀𝐓𝐀𝐅𝐎𝐑𝐌𝐀𝐒 🛜 〕
*┃➤ 🎫 .cuentas*
 ╰━━━━━━━━━━━━

 ╭━〔 🏴‍☠️ 𝐆𝐑𝐔𝐏𝐎 𝐃𝐄 𝐒𝐎𝐑𝐓𝐄𝐎𝐒 🏴‍☠️ 〕
*┃➤ 🎯 .sorteo*
*┃➤ 🎯 .ruleta*
*┃➤ 🧟‍♀️ .deathnote*
*┃➤ 🧙🏼‍♂️ .donarsala*
 ╰━━━━━━━━━━━━

 ╭━〔 ⚙️ 𝐀𝐂𝐓𝐈𝐕𝐀𝐑 𝐎 𝐃𝐄𝐒𝐀𝐂𝐓𝐈𝐕𝐀𝐑 ⚙️ 〕
*┃➤ ✅ .enable*
*┃➤ ❌ .disable*
 ╰━━━━━━━━━━━━

 ╭━〔 🈴 𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐒 🈴 〕
*┃➤ 🎧 .play*
*┃➤ 🎧 .play.1*
*┃➤ 🎧 .play2.2*
*┃➤ 🎧 .ytv.2*
*┃➤ 🎧 .yta.2*
*┃➤ 🎧 .playlist*
*┃➤ 🎧 .spotify*
*┃➤ 🎧 .spotifydl*
*┃➤ 🎧 .tiktok*
*┃➤ 🎧 .instagram*
*┃➤ 🎧 .mediafire*
*┃➤ 🎧 .gdrive*
*┃➤ 🎧 .twitter*
*┃➤ 🎧 .yta*
*┃➤ 🎧 .ytv*
*┃➤ 🎧 .imagen*
*┃➤ 🎧 .iaimagen*
*┃➤ 🎧 .pinteres*
*┃➤ 🎧 .igstory*
 ╰━━━━━━━━━━━━

 ╭━〔 ♨️ 𝐆𝐑𝐔𝐏𝐎𝐒 ♨️〕
*┃➤ 👻 .kick*
*┃➤ 👻 .grupo*
*┃➤ 👻 .promote*
*┃➤ 👻 .demote*
*┃➤ 👻 .demote*
*┃➤ 👻 .link*
*┃➤ 👻 .invocar*
*┃➤ 👻 .setwelcome*
*┃➤ 👻 .setbye*
*┃➤ 👻 .hidetag*
*┃➤ 👻 .fantasmas*
*┃➤ 👻 .kickfantasmas*
 ╰━━━━━━━━━━━━
 
 *╭━〔 🎬 𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐈𝐃𝐎𝐑𝐄𝐒 🎬𠀠〕*
*┃➤ 🖲️ .toimg*
*┃➤ 🖲️ .tomp3*
*┃➤ 🖲️ .toptt*
*┃➤ 🖲️ .tovideo*
*┃➤ 🖲️ .tts*
 ╰━━━━━━━━━━━━

*╭━〔 ☄️ 𝐄𝐅𝐄𝐂𝐓𝐎𝐒 𝐘 𝐋𝐎𝐆𝐎𝐒 ☄️ 〕*
*┃➤ 🎴.mensajefalso*
*┃➤ 🎴 .logocorazon*
*┃➤ 🎴 .ytcomment*
*┃➤ 🎴 .hornycard*
*┃➤ 🎴 .itssostupid*
*┃➤ 🎴 .pixelar*
 ╰━━━━━━━━━━━━

*╭━〔 💌 𝐅𝐑𝐀𝐒𝐄𝐒 𝐘 𝐓𝐄𝐗𝐓𝐎𝐒 💌〕*
*┃➤ 👿 .verdad*
*┃➤ 😈 .reto*
 ╰━━━━━━━━━━━━
 
╭━〔 ✨ 𝐁𝐔𝐒𝐂𝐀𝐃𝐎𝐑𝐄𝐒 ✨  〕*
*┃➤ 🌐 .xnxxsearch*
*┃➤ 🌐 .google*
*┃➤ 🌐 .letra*
*┃➤ 🌐 .wikipedia*
*┃➤ 🌐 .ytsearch*
*┃➤ 🌐 .playstore*
*┃➤ 🌐 .mercadolibre*
*┃➤ 🌐񓐠.pornhubsearch*
 ╰━━━━━━━━━━━━

 ╭━〔 🌝 𝐇𝐄𝐑𝐑𝐀𝐌𝐈𝐄𝐍𝐓𝐀𝐒 🌝 〕
*┃➤ 📡 .clima*
*┃➤ 📡 .ocr*
*┃➤ 📡 .calc*
*┃➤ 📡 .del*
*┃➤ 📡 .whatmusic*
*┃➤ 📡 .qrcode*
*┃➤ 📡 .traducir*
 ╰━━━━━━━━━━━━

*╭━〔 💎 𝐄𝐂𝐎𝐍𝐎𝐌𝐈𝐀𝐒 💎 〕*
*┃➤ 🪙 .verificar*
*┃➤ 🪙 .unreg*
*┃➤ 🪙 .minar*
*┃➤ 🪙 .buy*
*┃➤ 🪙 .work*
*┃➤ 🪙 .mendigar*
*┃➤ 🪙 .transfer*
 ╰━━━━━━━━━━━━

 ╭━〔  𝐒𝐓𝐈𝐂𝐊𝐄𝐑𝐒 ⛅  〕
*┃➤ 🩻 .s*
*┃➤ 🩻 .emojimix*
*┃➤ 🩻 .attp*
*┃➤ 🩻.qc*
 
‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎★ 𝙀𝘿𝙄𝙏𝘼𝙍 𝙀𝙁𝙀𝘾𝙏𝙊𝙎 𝘿𝙀 𝘼𝙐𝘿𝙄𝙊 ★
┊➺ 🎛️ .𝘦𝘥𝘪𝘵𝘢𝘳𝘣𝘢𝘴𝘴
┊➺ 🎛️ .𝘦𝘥𝘪𝘵𝘢𝘳𝘷𝘪𝘣𝘳𝘢
┊➺ 🎛️ .𝘦𝘥𝘪𝘵𝘢𝘳𝘣𝘭𝘰𝘸𝘯
┊➺ 🎛️ .𝘦𝘥𝘪𝘵𝘢𝘳𝘥𝘦𝘦𝘱
┊➺ 🎛️ .𝘦𝘥𝘪𝘵𝘢𝘳𝘦𝘢𝘳𝘳𝘢𝘱𝘦
┊➺ 🎛️ .𝘦𝘥𝘪𝘵𝘢𝘳𝘧𝘢𝘴𝘵
┊➺ 🎛️ .𝘦𝘥𝘪𝘵𝘢𝘳𝘧𝘢𝘵
┊➺ 🎛️ .𝘦𝘥𝘪𝘵𝘢𝘳𝘯𝘪𝘨𝘩𝘵𝘤𝘰𝘳𝘦
┊➺ 🎛️ .𝘦𝘥𝘪𝘵𝘢𝘳𝘳𝘰𝘣𝘰𝘵
┊➺ 🎛️ .𝘦𝘥𝘪𝘵𝘢𝘳𝘴𝘭𝘰𝘸
┊➺ 🎛️ .𝘦𝘥𝘪𝘵𝘢𝘳𝘴𝘮𝘰𝘰𝘵𝘩
┊➺ 🎛️ .𝘦𝘥𝘪𝘵𝘢𝘳𝘵𝘶𝘱𝘢𝘪

★ 𝙀𝙁𝙀𝘾𝙏𝙊𝙎 𝘿𝙀 𝘼𝙐𝘿𝙄𝙊 ★
┊➺ 🎤 .𝘣𝘢𝘴𝘴
┊➺ 🎤 .𝘣𝘭𝘰𝘸𝘯j
┊➺ 🎤 .𝘥𝘦𝘦𝘱 
┊➺ 🎤 .𝘦𝘢𝘳𝘳𝘢𝘱𝘦
┊➺ 🎤 .𝘧𝘢𝘴𝘵
┊➺ 🎤 .𝘧𝘢𝘵
┊➺ 🎤 .𝘯𝘪𝘨𝘩𝘵𝘤𝘰𝘳𝘦
┊➺ 🎤 .𝘳𝘦𝘷𝘦𝘳𝘴𝘦
┊➺ 🎤 .𝘳𝘰𝘣𝘰𝘵
┊➺ 🎤 .𝘴𝘭𝘰𝘸
┊➺ 🎤 .𝘴𝘮𝘰𝘰𝘵𝘩
┊➺ 🎤 .𝘵𝘶𝘱𝘢𝘪
┊➺ 🎤 .𝘦𝘤𝘩𝘰
┊➺ 🎤 .𝘥𝘪𝘴𝘵𝘰𝘳𝘵𝘪𝘰𝘯
┊➺ 🎤 .𝘱𝘪𝘵𝘤𝘩
┊➺ 🎤 .𝘳𝘦𝘷𝘦𝘳𝘣
┊➺ 🎤 .𝘧𝘭𝘢𝘯𝘨𝘦𝘳


★ 𝙋𝙍𝙊𝙋𝙄𝙀𝙏𝘼𝙍𝙄𝙊(𝘼) ★
┊➺ 🔐.creadores
╰━━━━━━━━━━━━

*FN ESPORT BOT*
`.trim()
 
const img = ['https://telegra.ph/file/cf5d90bba77d3bebad841.jpg',
'https://telegra.ph/file/cf5d90bba77d3bebad841.jpg',
'https://telegra.ph/file/cf5d90bba77d3bebad841.jpg']
await conn.sendMessage(m.chat, { image: { url: img.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, global.conn.user.jid] }, { quoted: fkontak })
	
} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}}

handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|menucompleto|allmenu|allm|m|\?)$/i
//handler.register = true
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}  
