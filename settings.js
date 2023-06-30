/*
    * Created By ArxzyDev
    * Don't forget to subscribe
    * https://youtube.com/c/arxzydev
    
    * Sosmed
    |> Instagram : https://instagram.com/arxzydev_
    |> FaceBook : https://facebook.com/hzzy_gota
    |> Youtube : https://youtube.com/c/arxzydev
    
    * Notes:
    |> Jangan Setting" Sc ini!!!, Minusnya Error
    |> Settings Aja Di Settings.js
    |> Beli No Enc? Tydak Di Jual
    |> Jangan Diperjualkan
*/

const fs = require('fs')
const chalk = require('chalk')

global.apikey = '-' // https://api.lolhuman.xyz
global.neo = '-' // https://api.neoxr.my.id

//—————「 Set Nama Bot & Own 」—————//
global.namabot = 'Arxzy-MD'
global.simbol = 'ぎ'
global.owner = '6285786539008'
global.namaowner = 'Fahrul'
global.premium = ['6285786539008','6281548514255','6285786539008','6285786539008','6285786539008','6285786539008']
//—————「 Set Wm 」—————//
global.packname = ''
global.author = '@fahrul'
global.prefa = ['/', '.']

//—————「 Set Message 」—————//
global.mess = {
    done: 'Done ✅',
    prem: 'Feature Only For User _*PREMIUM*_',
    admin: 'Feature Only for _*Admin Group*_',
    botAdmin: 'Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !',
    owner: 'Feature Only for _*owner*_',
    group: 'Feature Only for _*Group Chat*_',
    private: 'Feature Only for _*Private Chat*_',
    wait: 'Wait a Moment, for Process',
    endLimit: 'Your imit has run out, Wait at 12 at night',
    error: '_*Sorry Features Error*_',
}

//—————「 Set Image 」—————//
global.image = 'https://telegra.ph/file/03c23dae2dc06b823a732.jpg'
global.imageurl = 'https://telegra.ph/file/03c23dae2dc06b823a732.jpg'
global.link = 'https://youtube.com/@fahrul2951'
global.isLink = `-`
global.thumb = fs.readFileSync('./media/thumb.jpg')

//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})