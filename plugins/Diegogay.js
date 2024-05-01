let handler = async (m, { conn, usedPrefix, command, paypal }) => {
conn.sendMessage(m.chat, {text:'*Chicos ustedes sabes que diego es gay?le gusta los pitos xd*'},  { quoted: m })
}
handler.help = ['pito']
handler.tags = ['Diego']
handler.command = /^pito$/Diego
export default handler
