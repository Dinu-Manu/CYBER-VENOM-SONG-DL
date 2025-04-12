const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {    
SESSION_ID: process.env.SESSION_ID || 'SAHAS-MD=DpZUlYCJ#ItlBqT-xgbJXCIF4dsrS6bXmXBg0O8RXWMvfMIrgJ2U',
POSTGRESQL_URL: process.env.POSTGRESQL_URL || 'postgres://izumimd_meje_user:0Vhm5vKGZ7ORt2FlJBQf4d6EtRdeuE8z@dpg-cn0o2imn7f5s73fa46q0-a.frankfurt-postgres.render.com/izumimd_meje',
OWNER_NUMBER: process.env.OWNER_NUMBER || '94765527900', 
PREFIX:  process.env.PREFIX || ['.'] ,
JID: process.env.JID || "120363287634683059@newsletter",
WACHLINK: process.env.WACHLINK || `https://whatsapp.com/channel/0029Vb8WOgSBPzjfG09WEn10`,
FOOTER: '> *©ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀʜᴀꜱ & ᴅɪɴᴜᴡᴀ*',
DIRECTION: true,
LOGO: process.env.LOGO || `https://files.catbox.moe/siaqr5.jpg`     
};
