let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `*Hola 👋🏻, Bienvenido a los grupos oficiales, te invito a unete a los grupos oficiales para pasar un rato agradable usando el Bot o platicando con la familia de Goku-Black-Bot-MD*

➤ Grupos oficiales del bot:
  1) *${nn}*
  
  2) *${nnn}*

➤ Grupo oficial de Goku-Black-Bot-MD 
 *${nnnt}*

➤ Grupo oficial de Goku-Black-Bot-MD 
*${nnnt2}*

➤ Grupo del col 3 (sin limite)
*${nnntt}*

➤ Infomarte sobre las nuevas actualizaciones del bot
*${nna}*
 
➤ *¡Visita todos los enlaces oficiales en un único lugar!*
https://atom.bio/baileybotmd

 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

*Enlace de Goku-Black-Bot-MD*
*${nnnttt}*`.trim() 
conn.reply(m.chat, info, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: `${wm}`,
body: '', previewType: 0, thumbnail: imagen2, sourceUrl: nna}}})
//conn.fakeReply(m.chat, info, '0@s.whatsapp.net', 'Goku-Black-Bot-MD', 'status@broadcast')
}
handler.command = /^linkgc|grupos|gruposgatabot|gatabotgrupos|gruposdegatabot|groupofc|gruposgb|grupogb|groupgb$/i
export default handler
