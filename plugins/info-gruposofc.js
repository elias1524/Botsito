let media = './Menu2.jpg'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
    await conn.sendMessage(m.chat, { react: { text: '📇', key: m.key } })
let str = `ᴛᴇ ɪɴᴠɪᴛᴏ ᴀ ᴜɴɪʀᴛᴇ ᴀ ʟᴀ ғᴀᴍɪʟɪᴀ ᴅᴇ  ɢᴏᴋᴜ-ʙʟᴀᴄᴋ
𝐆𝐑𝐔𝐏𝐎 𝐋𝐈𝐍𝐊 🌸 https://chat.whatsapp.com/Igsky5kNI7cDMsBJU6gcKB
*_╰━━━━━━━━━━━━━━━━⊜_*`
await conn.sendFile(m.chat, media, 'gata.mp4', str, fkontak)}

handler.command = /^grupos|linksk|gruposofc|gruposoficiales$/i
handler.register = true
handler.exp = 33

export default handler