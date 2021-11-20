const aoijs = require("aoi.js")

const bot = new aoijs.Bot({
token: process.env.token, 
prefix: "!", 
intents: "all" 
})

//Events
bot.onMessage()
const loader = new aoijs.LoadCommands(bot)
 loader.load(bot.cmd,"./komutlar/")
//Command Example
bot.command({
name: "ping",
code: `Pong! \`$ping\`ms`
})

//Ready Event
bot.readyCommand({
    channel: "",
    code: `$log[Ready on $userTag[$clientID]]`
})