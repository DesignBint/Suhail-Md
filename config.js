const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348145625318";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_49_08_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5LFxuICAgICAgICA4MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDMzLFxuICAgICAgICAyLFxuICAgICAgICA3MixcbiAgICAgICAgMTU3LFxuICAgICAgICA3NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDU0LFxuICAgICAgICAxMTksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxODEsXG4gICAgICAgIDAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNixcbiAgICAgICAgNTYsXG4gICAgICAgIDkwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDg3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDksXG4gICAgICAgIDEzMixcbiAgICAgICAgNzYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDc2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjI2LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjI3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxODcsXG4gICAgICAgIDE0NixcbiAgICAgICAgNTAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTUyLFxuICAgICAgICAxODcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjE3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDYwLFxuICAgICAgICAxMixcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDksXG4gICAgICAgIDIwMixcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTU5LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA1NSxcbiAgICAgICAgNzksXG4gICAgICAgIDcyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjUwLFxuICAgICAgICA3MSxcbiAgICAgICAgODUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjA1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDYzLFxuICAgICAgICA0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjU1LFxuICAgICAgICA0NixcbiAgICAgICAgMTIwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTI5LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzksXG4gICAgICAgIDk1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxODEsXG4gICAgICAgIDE5LFxuICAgICAgICAxODEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDU1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDM4LFxuICAgICAgICA2NCxcbiAgICAgICAgMSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTYwLFxuICAgICAgICA1MixcbiAgICAgICAgMzAsXG4gICAgICAgIDIyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTkzLFxuICAgICAgICA4NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTksXG4gICAgICAgIDIxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA4OCxcbiAgICAgICAgMjE1LFxuICAgICAgICA3NyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDUyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTAzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAzNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDY5LFxuICAgICAgICA5MixcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDcsXG4gICAgICAgIDM2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjE3LFxuICAgICAgICA0LFxuICAgICAgICAxODMsXG4gICAgICAgIDU3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjA5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDM2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTYxLFxuICAgICAgICA3MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDExNyxcbiAgICAgICAgNzksXG4gICAgICAgIDcwLFxuICAgICAgICA5NyxcbiAgICAgICAgNCxcbiAgICAgICAgMTYyLFxuICAgICAgICA5MyxcbiAgICAgICAgMjMwLFxuICAgICAgICA5NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTY0LFxuICAgICAgICA3MCxcbiAgICAgICAgMTc3LFxuICAgICAgICA4OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEwLFxuICAgICAgICAyNixcbiAgICAgICAgODAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjksXG4gICAgICAgIDgzLFxuICAgICAgICAxMjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDkwLFxuICBcImFkdlNlY3JldEtleVwiOiBcImloUFEyVFpRRi9BOE9mWTB1VDVuTGxQeTRLRGllcHp3NEVLeUpBYy9xcDQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjhkUXRkYWhzUlppUVZPTXc5alppTVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMzA0MjI3Y2QtOTZhYi00ODkwLTllOWEtMjUyZDZhYmFkMDgxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5NyxcbiAgICAgIDExLFxuICAgICAgMTQsXG4gICAgICAyMTAsXG4gICAgICAyNDMsXG4gICAgICAxMTYsXG4gICAgICAyMTMsXG4gICAgICAxMzMsXG4gICAgICAxMTcsXG4gICAgICAyMjYsXG4gICAgICA1NyxcbiAgICAgIDE1MyxcbiAgICAgIDE2NixcbiAgICAgIDI0NyxcbiAgICAgIDUxLFxuICAgICAgNSxcbiAgICAgIDI0MyxcbiAgICAgIDIyNixcbiAgICAgIDI1MCxcbiAgICAgIDIwN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4MSxcbiAgICAgIDU1LFxuICAgICAgMzgsXG4gICAgICAxNjQsXG4gICAgICAyOSxcbiAgICAgIDMxLFxuICAgICAgMTQ3LFxuICAgICAgODIsXG4gICAgICAyNDYsXG4gICAgICAyMjcsXG4gICAgICAxNzgsXG4gICAgICAxMzcsXG4gICAgICAyMzEsXG4gICAgICAzNixcbiAgICAgIDI0NSxcbiAgICAgIDI0NixcbiAgICAgIDIwLFxuICAgICAgMjMwLFxuICAgICAgNTQsXG4gICAgICAxNjdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSENKU1FLN1RcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNDU2MjUzMTg6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcImRlc2lnbiBiaW50XCIsXG4gICAgXCJsaWRcIjogXCI3Njg5MzAwMDgyNzEwOToyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BITHlwd0VFTGl5dUxVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiaTJMTlRaa0hSR0VqWndHVWxxTDFXYnB4aFBxR2tQTVNCTnZ0bE5KMlJXQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJUWU9hSStwZjB3NkIvZzhvdlBraFc3cTdWVkhJOUhjbVlDZVhMTy9YU2JhQ0tRa1l6TUtSYVN0N3BCaXNFSlV6TllnNkN2WTNGdVAyeHRyNXBrbG9Cdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJTVW9hTFAwWW5aMkpJNGc2S3FXOE5UZFNGQmFHbWUxeHIvZ2hETGJkaU9McDMwQ0RhWm5pd2R5VXBJVW1OOWdVSXVUSjh3SWlYMkVXT3pQMDZ5ZDNqZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTQ1NjI1MzE4OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDk2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI2ODU3NTZcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
