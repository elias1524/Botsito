let handler = async (m, { text, conn }) => {
    let user = global.db.data.users[m.sender]
    user.afk = new Date * 1
    user.afkReason = text
    await conn.reply(m.chat, `Diego es gay gente confirmado positivo^⁠_⁠^`, m)
}

handler.help = ['gays']
handler.tags = ['Diego']
handler.command = ['Gay']

export default handler
