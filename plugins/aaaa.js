
let handler = async(m, { conn, text, usedPrefix, command }) => {
  if (command == '4vs4') {
    m.reply(`╭──────⚔──────╮
   4𝗩𝗦4 𝗖𝗢𝗠𝗣𝗘𝗧𝗜𝗧𝗜𝗩𝗢 
╰──────⚔──────╯

🕓 𝗛𝗢𝗥𝗔: 
📑 𝗥𝗘𝗚𝗟𝗔𝗦: 𝗖𝗟𝗞

╭─────────────╮
│ 𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔 
│🥷🏻 ➤ 
│🥷🏻 ➤  
│🥷🏻 ➤ 
│🥷🏻 ➤ 
╰─────────────╯
╭─────────────╮
│ 𝗦𝗨𝗣𝗟𝗘𝗡𝗧𝗘𝗦 
│🥷🏻 ➤  
│🥷🏻 ➤ 
╰─────────────╯`)
    
  }

  if (command == '6vs6') {
    m.reply(`*MODO: 6VS6 🎮*

    *VS:*
    *HORA:*
    
    *JUGADORES ⚔*
    
      1️⃣
      2️⃣
      3️⃣
      4️⃣
      5️⃣
      6️⃣
   
      
    *SUPLENTES ⚙*
    
      1️⃣
      2️⃣

    
    *DONADOR DE SALA! 💰*
    
      1️⃣`)
    
  }

  if (command == '12vs12') {
    m.reply(`╭──────⚔──────╮
          12 𝗩𝗘𝗥𝗦𝗨𝗦 12
╰──────⚔──────╯

🕓 𝗛𝗢𝗥𝗔: 🇲🇽 🇨🇴
👕 𝗖𝗢𝗟𝗢𝗥: 

╭─────────────╮
│ 𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔 1
│👑 ➤ 
│🥷🏻 ➤  
│🥷🏻 ➤ 
│🥷🏻 ➤ 
╰─────────────╯
╭─────────────╮
│ 𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔 2
│👑 ➤ 
│🥷🏻 ➤  
│🥷🏻 ➤ 
│🥷🏻 ➤ 
╰─────────────╯
╭─────────────╮
│ 𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔 3
│👑 ➤ 
│🥷🏻 ➤  
│🥷🏻 ➤ 
│🥷🏻 ➤ 
╰─────────────╯
╭─────────────╮
│ 𝗦𝗨𝗣𝗟𝗘𝗡𝗧𝗘𝗦 
│🥷🏻 ➤  
│🥷🏻 ➤
│🥷🏻 ➤
╰─────────────╯`)
    
  }

  if (command == '16vs16') {
    m.reply(`*MODO: 16VS16 🎮*

    *VS:*
    *HORA:*
    
    *ESCUADRA 1 ⚔*
    
      1️⃣
      2️⃣
      3️⃣
      4️⃣

    
    *ESCUADRA 2 ⚔*
    
      1️⃣
      2️⃣
      3️⃣
      4️⃣

    
    *ESCUADRA 3 ⚔*
    
      1️⃣
      2️⃣
      3️⃣
      4️⃣

    
    *ESCUADRA 4 ⚔*
    
      1️⃣
      2️⃣
      3️⃣
      4️⃣

    
    *SUPLENTES ⚙*
    
      1️⃣
      2️⃣
      3️⃣

    
    *DONADOR DE SALA! 💰*
    
      1️⃣`)
    
  }

  if (command == 'interno4vs4') {
    m.reply(`*MODO: 4VS4 INTERNO🎮*

    *VS:*
    *HORA:*
    
    *⚔ESCUADRA 1 ⚔*
    
      1️⃣
      2️⃣
      3️⃣
      4️⃣
    
    *⚔ESCUADRA 2 ⚔*
    
      1️⃣
      2️⃣
      3️⃣
      4️⃣

    
    *DONADOR DE SALA! 💰*
    
      1️⃣`)
    
  }

  if (command == 'interno6vs6') {
    m.reply(`*MODO: 6VS6 INTERNO 🎮*

    *VS:*
    *HORA:*
    
    *⚔ESCUADRA 1⚔*
    
      1️⃣
      2️⃣
      3️⃣
      4️⃣
      5️⃣
      6️⃣
   
      
    *⚔ESCUADRA 2 ⚔*
    
      1️⃣
      2️⃣
      3️⃣
      4️⃣
      5️⃣
      6️⃣

    
    *DONADOR DE SALA! 💰*
    
      1️⃣`)
    
  }

}
    
handler.help = handler.command = ['4vs4', '6vs6', '12vs12', '16vs16', 'interno4vs4', 'interno6vs6']
handler.tags = ['list']
export default handler
