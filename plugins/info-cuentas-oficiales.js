let media = 'https://qu.ax/dcAc.mp4'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let str = `\`『 ＣＵＥＮＴＡＳ ＯＦＩＣＩＡＬＥＳ 』\`

\`𝙉𝙪𝙢𝙚𝙧𝙤 𝙙𝙚𝙡 𝙗𝙤𝙩 𝙤𝙛𝙘 (Goku-Black)\`
> *1(505)814-5540*

\`𝙉𝙪𝙢𝙚𝙧𝙤 𝙙𝙚𝙡 𝙗𝙤𝙩 𝙤𝙛𝙘 (Goku-Bot)\`
> **

 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
 
\`『 ᴳᶦᵗᴴᵘᵇ ᵒᶠᶦᶜᶦᵃˡ 』\`   
* ** 

\`『 ᴳʳᵘᵖᵒ ᵒᶠᶦᶜᶦᵃˡ ¹ 』\`   
* ** 

\`『  ᴳʳᵘᵖᵒ ᵒᶠᶦᶜᶦᵃˡ ²  』\`   
* *$* 

\`『  ᶜᵃⁿᵃˡ ᵈᵉ ᵂʰᵃᵗˢᴬᵖᵖ / ᵘᵖᵈᵃᵗᵉ  』\`   
* ** 

\`『  ᵃˢᶦˢᵗᵉⁿᶜᶦᵃ ᵖᵃʳᵃ ᵘˢᵘᵃʳᶦᵒˢ ᶠᵃᶜᵉᵇᵒᵒᵏ 』\`   
* ** 

\`『  ᵍʳᵘᵖᵒ ᵀᵉˡᵉᵍʳᵃᵐ 』\`   
* ** 

\`『  ᵀᶦᵏᵀᵒᵏ 』\`   
* ** 

\`『  ʸᵒᵘᵀᵘᵇᵉ 』\`   
* ** 

\`『  ᴳʳᵘᵖᵒ ᶠᵃᶜᵉᵇᵒᵒᵏ 』\`   
* ** 

 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
\`『 ⱽᶦˢᶦᵗᵃ ᵗᵒᵈᵒˢ ˡᵒˢ ᵉⁿˡᵃᶜᵉˢ ᵒᶠᶦᶜᶦᵃˡᵉˢ ᵉⁿ ᵘⁿ ᵘⁿᶦᶜᵒ ˡᵘᵍᵃʳ 』\`   
• Lo pondré en breve 

${wm}`
await conn.sendFile(m.chat, media, 'loli.mp4', str, fkontak)}
handler.command = /^cuentasoficiales|cuentas|cuentaofc$/i
handler.register = true
export default handler
