let handler = async (m, { conn, usedPrefix, isOwner }) => {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:creador 🇦🇱\nFN:creadorl 🇦🇱\nORG:creador 🇦🇱\nTITLE:\nitem1.TEL;waid=593993370003:593993370003\nitem1.X-ABLabel: Jeffo 🇦🇱\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:Daniel 🇦🇱U+2069\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: 'Creador', contacts: [{ vcard }] }}, {quoted: m})
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['creadores', 'creator', 'creador', 'dueño'] 

export default handler
