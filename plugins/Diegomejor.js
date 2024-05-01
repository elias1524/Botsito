let handler = async (m, { conn, usedPrefix, command, paypal }) => {
conn.sendMessage(m.chat, {text:'*No etiquetes al mejor programador etc xd es el mejor by:diego*'},  { quoted: m })
}
handler.help = ['pagina']
handler.tags = ['info']
handler.command = /^@573012482597$/i
export default handler
