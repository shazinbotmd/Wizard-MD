//═══════[© 2022 Xeon Bot Inc.]════════\\

//~you can re-upload but tag my channel
//or put my channel link in the description.
//~you can recode or copy the codes but give
//credit.
//~Thank you to LORD BUDDHA, ME AND MY 
//FAMILY.

//═══════[modules]════════\\

const fs = require('fs')
const chalk = require('chalk')
const fetch = require('node-fetch')

//═══════[api website]════════\\
global.APIs = {
	zenz: 'https://zenzapi.xyz', //credit zenz, thank you so much bro <3
}
//═══════[api key of the website]════════\\
global.APIKeys = {
	'https://zenzapi.xyz': '805a6c3fa9', //thank you to zenz
}

//═══════[modification]════════\\
global.owner = ['918113921898'] //owner number, u can put multiple owner number, within quotations and seperated by comma.
global.pemilik = ['918113921898'] //another owner number
global.premium = ['918113921898'] //premium number
global.pengguna = 'ɴᴇᴇʀᴀᴊ-x0' //username
global.botnma = 'ᴍɪʟʟɪᴇ-ᴍᴅ' //bot name
global.ownernma = 'ɴᴇᴇʀᴀᴊ-x0' //owner name
global.packname = 'ɴᴇᴇʀᴀᴊ-x0' //sticker package name
global.author = '💋 ᴍɪʟʟɪᴇ 💋' //sticker author name
global.sessionName = 'session' //session name
global.prefa = ['#','!','/',''] //prefix
global.sp = '├✪' //design
global.gclink = 'https://chat.whatsapp.com/HZ4c5yrsd0g8OfELZGySFZ'
global.gitowner = 'https://github.com/Neeraj-x0'
global.sc = 'https://github.com/Neeraj-x0/Wizard-MD'
global.mess = {
    success: 'Done ✓',
    admin: 'This Feature Is Only For Admin!',
    botAdmin: 'Bot Must Be Admin First!',
    owner: 'This Feature Is Only For Owner',
    group: 'Feature Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This feature in only for the bot number',
    wait: 'In process...',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
global.limitawal = {
    premium: "Infinity", //premium user limit
    free: 100 //free user limit
}
global.thumburl = 'https://i.pinimg.com/474x/de/bd/b2/debdb24645169bf95eecd49f3144315f.jpg'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
