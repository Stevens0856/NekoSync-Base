const chalk = require("chalk")
const fs = require("fs")

global.ownerNumber = ["628XXXXX@s.whatsapp.net"]
global.nomerOwner = "628XXXXX"
global.nomorOwner = ['628XXXXX']
global.namaDeveloper = "NightCore"
global.namaBot = "NekoSync Base"
global.packname = "Created By : \nNightCore MD"
global.author = "Assistant Bot\nbit.ly/MyOwnWhatsAppChannel"
global.thumb = fs.readFileSync("./media/thumb.png")
global.menu = fs.readFileSync("./media/menu.png")
global.tekspushkon = ""
global.tekspushkonv1 = ""
global.tekspushkonv2 = ""
global.tekspushkonv3 = ""
global.limitawal = {
    free: 100,
    premium: 1000
};

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})