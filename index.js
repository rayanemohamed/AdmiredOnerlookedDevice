const express = require("express");
const app = express();

app.listen(() => console.log("start btrolie"));

app.use('/ping', (req, res) => {
  res.send(new Date());
});

const Discord = require('discord.js');
const client = new Discord.Client();
const cmd = require("node-cmd");
const ms = require("ms");
const fs = require('fs');
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const simpleytapi = require('simple-youtube-api')
const util = require("util")
const gif = require("gif-search");
const jimp = require("jimp");
const guild = require('guild');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const pretty = require("pretty-ms");
const moment = require('moment');
const request = require('request');
const dateFormat = require('dateformat');

//لا تلعب اي شي في الكود

const prefix = "t!"
const developers = "687458493124444170"


///bot حاله


client.on('ready', function() {
      setInterval(async () => {
    const statuslist = [
      `t!help | Serving ${client.guilds.size} servers`,
      `t!help | Serving ${client.channels.size} channels`,
      `t!help | Serving ${client.users.size} users`
    ];
    const random = Math.floor(Math.random() * statuslist.length);

    try {
      await client.user.setPresence({
        game: {
          name: `${statuslist[random]}`,
          type: "Watching"
          //url: 'https://www.twitch.tv/rayane_tv'
        },
        status: "DND"
      });
    } catch (error) {
      console.error(error);
    }
  }, 10000);
});
	 console.log(`Ready to serve in ${client.channels.size} channels on ${client.guilds.size} servers, for a total of ${client.users.size} users.`);


////////

client.on("message", message => {
  if (message.author.bot) return;
  if (message.content === prefix + "help") {
    const embed = new Discord.RichEmbed()

      .setColor("BLACK")
      .setTimestamp()

      .setTitle("**All Commands**").setDescription(`



> **Giveaway Commands** :tada:

${prefix}setgiveaway  *|* 
> **Music Commands** :headphones:

${prefix}play *|* ${prefix}stop *|* ${prefix}skip *|* ${prefix}pause *|* ${prefix}forceskip *|* ${prefix}Queue *|* ${prefix}skipto *|* ${prefix}Volume *|* ${prefix}np *|* ${prefix}repeat
> **Protection Commands** :shield:

${prefix}antibots on/off *|* ${prefix}setLog *|* ${prefix}antispread on/off  *|* ${prefix}limitbans  *|* ${prefix}limitkick  *|* ${prefix}limitroleDelete  *|* ${prefix}limitchannelDelete *|* 
> **Invite Commands** :jigsaw:
⚠️Does Not Work ⚠️
${prefix}set-welcomer [name channel] *|*  ${prefix}setinv [name channel] *|* ${prefix}invites *|* ${prefix}info *|* ${prefix}topinvites 
> **Ticket Commands** :tickets:

 ${prefix}mtickets *|* ${prefix}new *|* ${prefix}close *|* ${prefix}add *|* ${prefix}remove *|* ${prefix}tr-set 
> **Games Command** :video_game:

 ${prefix}Sra7a *|* ${prefix}lwkhiruk *|* ${prefix}Za7f  *|* ${prefix}khawatir *|* ${prefix}cuttweet *|* ${prefix}mariam *|* ${prefix}love *|* ${prefix}xo [@uesr] *|* ${prefix}profile 
> **Commands Admin ** 🔌

${prefix}ban *|*  ${prefix}kick *|*  ${prefix}mute *|* ${prefix}unmute | ${prefix}lock *|* ${prefix}unlock *|* ${prefix}hide *|* ${prefix}show *|* 
${prefix}role *|* ${prefix}role all *|* ${prefix}role humans *|* ${prefix}role bots *|* ${prefix}say *|* ${prefix}embed *|*
> **Commands Credit ** 💳

${prefix}credits *|*  ${prefix}daily *|* ${prefix}ping *|* ${prefix}avatar *|* ${prefix}user *|*  ${prefix}uptime + Link *|* 
> **Other Commands** ✨

${prefix}toggleLog *|* ${prefix}set-sug *|* ${prefix}sug *|* ${prefix}bot  *|* ${prefix}clear *|* ${prefix}top text *|*  ${prefix}top voice | ${prefix}top *|* ${prefix}server *|* ${prefix}vote *|*  ${prefix}devs

[**invite**](https://discord.com/api/oauth2/authorize?client_id=759181829852233768&permissions=8&scope=bot) **|** [**Support**](https://discord.gg/DbdrXVh)  📎 
`);

    message.channel.send({ embed });
  }
});



/////كود كريدت

const cool = [];

client.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  const args = message.content.split(" ");
  const credits = require("./credits.json");
  const path = "./credits.json";
  const mention =
    message.mentions.users.first() ||
    client.users.get(args[1]) ||
    message.author;
  const mentionn = message.mentions.users.first() || client.users.get(args[1]);
  const author = message.author.id;
  const balance = args[2];
  const daily = Math.floor(Math.random() * 350) + 10;

  if (!credits[author]) credits[author] = { credits: 50 };
  if (!credits[mention.id]) credits[mention.id] = { credits: 50 };
  fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {
    if (err) console.log(err);
  });

  if (message.content.startsWith(prefix + "credit")) {
    if (args[0] !== `${prefix}credit` && args[0] !== `${prefix}credits`) return;

    if (args[2]) {
      if (isNaN(args[2]))
        return message.channel.send(
          "**:heavy_multiplication_x:| هذه الخانة يجب ان تتكون من ارقام وليس احرف.**"
        );
      if (mention.bot)
        return message.channel.send(
          `**:heavy_multiplication_x:| ${
          message.content.split(" ")[1]
          } لم يتم العثور على**`
        );
      if (mention.id === message.author.id)
        return message.channel.send(
          "**:heavy_multiplication_x:| لا يمكنك تحويل كردت لنفسك**"
        );
      if (credits[author].credits < balance)
        return message.channel.send(
          "**:heavy_multiplication_x:| أنت لا تملك هذا القدر من الكردت**"
        );
      var one = Math.floor(Math.random() * 9) + 1;
      var two = Math.floor(Math.random() * 9) + 1;
      var three = Math.floor(Math.random() * 9) + 1;
      var four = Math.floor(Math.random() * 9) + 1;

      var number = `${one}${two}${three}${four}`;

      message.channel
        .send(`**:heavy_dollar_sign:| \`${number}\`, أكتب الرقم للأستمرار**`)
        .then(m => {
          message.channel
            .awaitMessages(m => m.author.id === message.author.id, {
              max: 1,
              time: 10000
            })
            .then(c => {
              if (c.first().content === number) {
                m.delete();
                message.channel.send(
                  `**:atm:| ${message.author.username}, قام بتحويل \`${balance}\` لـ ${mention}**`
                );
                credits[author].credits += -balance;
                credits[mention.id].credits += +balance;
                fs.writeFile(path, JSON.stringify(credits, null, 5), function(
                  err
                ) {
                  if (err) console.log(err);
                });
              } else if (c.first().content !== number) {
                m.delete();
                message.channel.send(
                  `** :money_with_wings: | تم الغاء الإرسال**`
                );
              }
            });
        });
    }
    if (!args[2]) {
      if (mention.bot)
        return message.channel.send(
          `**:heavy_multiplication_x:| ${
          message.content.split(" ")[1]
          } لم يتم العثور على**`
        );
      message.channel.send(
        `**${mention.username}, your :credit_card: balance is **${credits[mention.id].credits}`
      );
    }
  }
  if (message.content.startsWith(prefix + "daily")) {
    if (cool.includes(message.author.id))
      return message.channel.send(
        `**:heavy_dollar_sign: | \ , يجب عليك انتظار  يوم لأخذ المبلغ مرة اخرى**`
      );
    if (mentionn) {
      var one = Math.floor(Math.random() * 9) + 1;
      var two = Math.floor(Math.random() * 9) + 1;
      var three = Math.floor(Math.random() * 9) + 1;
      var four = Math.floor(Math.random() * 9) + 1;

      var number = `${one}${two}${three}${four}`;

      message.channel
        .send(`**:atm: | \`${number}\`, قم بكتابة الرقم للأستمرار**`)
        .then(async m => {
          message.channel
            .awaitMessages(msg => msg.author.id === message.author.id, {
              max: 1,
              time: 20000,
              errors: ["time"]
            })
            .then(collected => {
              if (collected.first().content === number) {
                m.delete();
                collected.first().delete();
                credits[mentionn.id].credits += +daily;
                fs.writeFile(path, JSON.stringify(credits, null, 5), function(
                  err
                ) {
                  if (err) console.log(err);
                });

                message.channel.send(
                  `**:atm: | \`${daily}\`, تم تسليم المبلغ**`
                );
              }
              if (collected.first().content !== number) {
                return m.delete();
              }
            });
        });
    } else if (!mentionn) {
      credits[author].credits += +daily;
      fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {
        if (err) console.log(err);
      });

      message.channel.send(`**:atm: | \`${daily}\`, تم اعطائك المبلغ**`);
    }
    cool.unshift(message.author.id);

    setTimeout(() => {
      cool.shift(message.author.id);
      message.author
        .send("**:atm: | `Daily`, يمكنك الحصول على الكردت المجانية الان**")
        .catch();
    }, ms("1d"));
  }
});


////كود معلومات البوت
client.on("message", message => {
  if (message.content === prefix + "bot") {
    const bot = new Discord.RichEmbed()
      .setAuthor(client.user.username, client.user.avatarURL)
      .setColor("RANDOM")
      .addField(
        "> :ping_pong:  ** PING**",
        [`➪ ${Date.now() - message.createdTimestamp}` + " **ms**"],
        true
      )
      .addField("> :homes: **SERVERS** :  ", `➪ ${client.guilds.size} `, true)
      .addField(
        "> :pager: ** CHANNELS** : ",
        `➪ ${client.channels.size} `,
        true
      )
      .addField("> :pushpin: **USERS** : ", `➪ ${client.users.size} `, true)
      .addField(
        "> :mechanic: **DEVLOPER** :  ",
        `➪ <@687458493124444170> + <@378717840993157130> `,
        true
      ) // تعديل اساسي غير الايدي لايدي حسابك
      .setImage("")
      .setFooter(message.author.username, message.client.avatarURL);
    message.channel.send(bot);
  }
});

client.on("message", async message => {
  if (message.content.startsWith(prefix + "clear")) {
    try {
      let num;
      let args = message.content.split(/[ ]+/);
      let word = args.slice(1).join(" ");
      if (!isNaN(word)) {
        num = parseInt(word);

        if (num <= 100 && num > 1) {
          message.delete();
          message.channel.bulkDelete(num);
          message.channel
            .send(
              "```javascript\n" + num + " messages have been deleted." + "```"
            )
            .then(message => message.delete(4000));
        } else
          message.reply(
            "**You must enter a number between 2 and 100 for me to clear!**"
          );
      } else {
        message.reply(
          "**You must enter a number between 2 and 100 for me to clear!**"
        );
      }
    } catch (err) {
      message.channel.send("There was an error!\n" + err).catch();
    }
  }
});
client.on("message", message => {
  if (message.content.startsWith("t!devs")) {
    message.channel.send({
      embed: new Discord.RichEmbed()

        .setThumbnail(
          "https://cdn.discordapp.com/attachments/755103317801304078/756205327946350762/received_606005716948521.jpeg"
        )

        .setColor("BLACK")
        .setTitle("``Developer`` ")
        .addField("**Name**", `<@687458493124444170> + <@378717840993157130> `, true)
        .addField("**Year**", `18`, true)
        .addField("**Country**", `MA`, true)
    });
  }
});

client.on("message", message => {
  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command === "say") {
    if (!message.channel.guild)
      return message.channel
        .send("هذا الأمر فقط للسيرفرات")
        .then(m => m.delete(5000));
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send("للأسف لا تمتلك صلاحية ADMINISTRATOR");
    message.delete();
    message.channel.sendMessage(args.join(" "));
  }

  if (command == "embed") {
    if (!message.channel.guild)
      return message.channel
        .send("هذا الأمر فقط للسيرفرات")
        .then(m => m.delete(5000));
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send("للأسف لا تمتلك صلاحية MANAGE_MESSAGES");
    let say = new Discord.RichEmbed()
      .setDescription(args.join("  "))
      .setColor("BLACK");
    message.channel.sendEmbed(say);
    message.delete();
  }
});

///ticket

const category = "category-id";
let mtickets = true;
let tchannels = [];
let current = 0;

client.on("message", async message => {
  if (message.author.bot || message.channel.type === "dm") return;
  let args = message.content.split(" ");
  let author = message.author.id;
  if (args[0].toLowerCase() === `${prefix}heeeeelsasaollooop`) {
    let embed = new Discord.RichEmbed().addField(``);
    await message.channel.send(
      `:white_check_mark: , **هذه قائمة بجميع اوامر البووت.**`
    );
    await message.channel.send(embed);
  } else if (args[0].toLowerCase() === `${prefix}new`) {
    if (mtickets === false)
      return message.channel.send(
        `**تـم ايـقـاف الـتـذاكـر بـواسـطة أحـد مـن الادارة**`
      );
    if (!message.guild.me.hasPermission("MANAGE_CHANNELS"))
      return message.channel.send(
        `**الـبـوت غـيـر قـادر عـلـي صـنـع روم تـحقق مـن الـرتـبـة**`
      );
    console.log(current);
    let openReason = "";
    current++;
    message.guild.createChannel(`ticket-${current}`, "text").then(c => {
      tchannels.push(c.id);
      c.setParent(category);
      message.channel.send(`**تـم فـتـح تـذكرتـك**`);
      c.overwritePermissions(message.guild.id, {
        READ_MESSAGES: false,
        SEND_MESSAGES: false
      });
      c.overwritePermissions(message.author.id, {
        READ_MESSAGES: true,
        SEND_MESSAGES: true
      });

      if (args[1])
        openReason = `\nReason: [ **__${args.slice(1).join(" ")}__** ]`;
      let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .setColor("#36393e")
        .setDescription(`**Wait Admin To Answer You**${openReason}`);
      c.send(`${message.author}`);
      c.send(embed);
    });
  } else if (args[0].toLowerCase() === `${prefix}mtickets`) {
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(`**هـذا الأمـر للأدارة فـقـط**`);
    if (args[1] && args[1].toLowerCase() === "enable") {
      mtickets = true;
      message.channel.send(`**تـم تـفـعـيـل نـظـام الـتذاكـر**`);
    } else if (args[1] && args[1].toLowerCase() === "disable") {
      mtickets = false;
      message.channel.send(`**تـم اغـلاق نـظـام الـتذاكـر**`);
    } else if (!args[1]) {
      if (mtickets === true) {
        mtickets = false;
        message.channel.send(`**تـم اغـلاق نـظـام الـتذاكـر**`);
      } else if (mtickets === false) {
        mtickets = true;
        message.channel.send(`**تـم تـفـعـيـل نـظـام الـتذاكـر**`);
      }
    }
  } else if (args[0].toLowerCase() === `${prefix}close`) {
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        `**انـت لـسـت مـن ادارة الـسـيـرفـر لـتـنـفـيذ هذا الأمـر`
      );
    if (
      !message.channel.name.startsWith("ticket-") &&
      !tchannels.includes(message.channel.id)
    )
      return message.channel.send(`**هـذا لـيـس روم تـيـكـيـت**`);

    message.channel.send(`**جـاري قـفـل الـروم تـلـقـائـيـا بـعـد 5 ثـوانـي**`);
    tchannels.splice(tchannels.indexOf(message.channel.id), 1);
    setTimeout(() => message.channel.delete(), 5000); //لحد هنا
  } else if (message.content == prefix + `remove`) {
    if (!message.channel.name.startsWith("ticket-")) {
      return message.channel.send(`**This command only for the tickets**`);
    }
    let member = message.mentions.members.first();
    if (!member || member.id === client.user.id) {
      return message.channel.send(`**Please mention the user**`);
    }
    if (
      !message.channel
        .permissionsFor(member)
        .has(["SEND_MESSAGES", "VIEW_CHANNEL", "READ_MESSAGE_HISTORY"])
    ) {
      return message.channel.send(
        `**${member.user.tag}** is not in this ticket to remove them`
      );
    }
    message.channel.overwritePermissions(member.id, {
      SEND_MESSAGES: false,
      VIEW_CHANNEL: false,
      READ_MESSAGE_HISTORY: false
    });
    message.channel.send(
      `**Done \nSuccessfully removed \`${member.user.tag}\` from the ticket**`
    );
  } else if (message.content == prefix + `add`) {
    if (!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS"))
      return message.channel.send(
        `**Error** \nI Don\'t have MANAGE_CHANNELS Permission to do this`
      );
    if (!message.channel.name.startsWith("ticket-"))
      return message.channel.send(`**This command only for the tickets**`);
    let member = message.mentions.members.first();
    if (!member) return message.channel.send(`**Please mention the user**`);
    if (
      message.channel
        .permissionsFor(member)
        .has(["SEND_MESSAGES", "VIEW_CHANNEL", "READ_MESSAGE_HISTORY"])
    )
      return message.channel.send(
        `this member already in this ticket :rolling_eyes:`
      );
    message.channel.overwritePermissions(member.id, {
      SEND_MESSAGES: true,
      VIEW_CHANNEL: true,
      READ_MESSAGE_HISTORY: true
    });
    message.channel.send(
      `**Done \nSuccessfully added <@${member.user.id}> to the ticket**`
    );
  } else if (args[0].toLowerCase() === `${prefix}reeeeeeeeeestart`) {
    if (!devs.includes(message.author.id))
      return message.channel.send(
        `:tools:, **أنت لست من ادارة السيرفر لأستخدام هذا الأمر.**`
      );
    message.channel.send(`:white_check_mark:, **جارى اعادة تشغيل البوت.**`);
    client.destroy();
  }
});

//// كود معلومات الشخص او اليوزر
client.on("message", pixelbot => {
  // itzZa1D - Codes Team.
  if (pixelbot.content.startsWith(prefix + "user")) {
    // itzZa1D - Codes Team.
    if (pixelbot.author.bot) return;
    if (!pixelbot.guild)
      return pixelbot.reply("**:x: - This Command is only done on Servers**");
    pixelbot.guild.fetchInvites().then(invites => {
      // itzZa1D - Codes Team.
      let personalInvites = invites.filter(
        i => i.inviter.id === pixelbot.author.id
      );
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      var roles = pixelbot.member.roles
        .map(roles => `**__${roles.name}__ |**`)
        .join(` `);
      let pixeluser = new Discord.RichEmbed() // itzZa1D - Codes Team.
        .setColor("RANDOM")
        .setTitle("> **__USER INFO__** ⚙️") // itzZa1D - Codes Team.
        .setAuthor(pixelbot.author.username, pixelbot.author.avatarURL)
        .addField(
          "> 🧰 **__USER✵NAME :__**    ",
          pixelbot.author.username,
          true
        )
        .addField(
          "> 💎 **__USER✵ID :__** ",
          pixelbot.author.id,
          true
        ) // itzZa1D - Codes Team.
        .addField(
          "> 🚪 **__JOINED✵AT :__**   ",
          moment(pixelbot.joinedAt).format("D/M/YYYY h:mm a "),
          true
        )
        .addField(
          "> 🦠 **__CREATED✵AT :__**    ",
          moment(pixelbot.author.createdAt).format("D/M/YYYY h:mm a "),
          true
        )
        .setTimestamp(); // itzZa1D - Codes Team.

      pixelbot.channel.sendEmbed(pixeluser).then(c => { }); // itzZa1D - Codes Team.
    });
  }
}); // itzZa1D - Codes Team.

var top = require("./top.json");
function save() {
  fs.writeFileSync("./top.json", JSON.stringify(top, null, 4));
}
client.on("voiceStateUpdate", async function(oldMember, newMember) {
  if (newMember.user.bot) return;
  if (!top[newMember.guild.id]) top[newMember.guild.id] = {};
  if (!top[newMember.guild.id][newMember.user.id])
    top[newMember.guild.id][newMember.user.id] = {
      text: 0,
      voice: parseInt(Math.random() * 10),
      msgs: 0,
      id: newMember.user.id
    };
  save();
  if (!oldMember.voiceChannel && newMember.voiceChannel) {
    var addXP = setInterval(async function() {
      top[newMember.guild.id][newMember.user.id].voice += parseInt(
        Math.random() * 4
      );
      save();
      if (!newMember.voiceChannel) {
        clearInterval(addXP);
      }
    }, 60000);
  }
});
client.on("message", async function(message) {
  if (message.author.bot) return;
  if (!message.guild) return;
  if (!top[message.guild.id]) top[message.guild.id] = {};
  if (!top[message.guild.id][message.author.id])
    top[message.guild.id][message.author.id] = {
      text: parseInt(Math.random() * 10),
      voice: 1,
      msgs: 0,
      id: message.author.id
    };
  if (top[message.guild.id][message.author.id].msgs > 10) {
    top[message.guild.id][message.author.id].text += parseInt(
      Math.random() * 4
    );
    top[message.guild.id][message.author.id].msgs = 0;
  }
  save();
  var args = message.content.split(" ");
  var cmd = args[0].toLowerCase();
  if (!message.content.startsWith(prefix)) return;
  if (message.content.startsWith(prefix + "top text")) {
    var topArray = Object.values(top[message.guild.id]);
    var num = 0;
    var textStr = `${topArray
      .sort((a, b) => b.text - a.text)
      .slice(0, 5)
      .filter(user => user.text > 0 && message.guild.members.get(user.id))
      .map(function(user) {
        if (user.text > 0) {
          return `**#${++num} | <@${user.id}> XP: \`${user.text}\` **`;
        }
      })
      .join("\n")}`;
    var embed = new Discord.RichEmbed()
      .setAuthor("?? | Guild Score Leaderboards", message.guild.iconURL)
      .setColor("13B813")
      .addField(
        `**:speech_balloon: | TEXT LEADERBOARD**`,
        `${textStr}   \n\n\n **? | For More: \`${prefix}top text\`**`,
        true
      )
      .setFooter(message.author.tag, message.author.displayAvatarURL)
      .setTimestamp();
    message.channel.send({
      embed: embed
    });
    //   if (!message.content.startsWith(prefix)) return;
  } else {
    if (message.content.startsWith(prefix + "top voice")) {
      var topArray = Object.values(top[message.guild.id]);
      var num = 0;
      var voiceStr = `${topArray
        .sort((a, b) => b.voice - a.voice)
        .slice(0, 5)
        .filter(user => user.voice > 0 && message.guild.members.get(user.id))
        .map(function(user) {
          if (user.voice > 0) {
            return `**#${++num} | <@${user.id}> XP: \`${user.voice}\` **`;
          }
        })
        .join("\n")}`;
      var embed = new Discord.RichEmbed()
        .setAuthor("?? | Guild Score Leaderboards", message.guild.iconURL)
        .setColor("13B813")
        .addField(
          `**:microphone2: | VOICE LEADERBOARD**`,
          `${voiceStr}   \n\n\n **:sparkles: More?** \`${prefix}top voice\``,
          true
        )

        .setFooter(message.author.tag, message.author.displayAvatarURL)
        .setTimestamp();
      message.channel.send({
        embed: embed
      });

      //  break;
      // if (!message.content.startsWith(prefix)) return;
    } else {
      if (message.content.startsWith(prefix + "top")) {
        var topArray = Object.values(top[message.guild.id]);
        var num = 0;
        var textStr = `${topArray
          .sort((a, b) => b.text - a.text)
          .slice(0, 10)
          .filter(user => user.text > 0 && message.guild.members.get(user.id))
          .map(function(user) {
            if (user.text > 0) {
              return `**#${++num} | <@${user.id}> XP: \`${user.text}\` **`;
            }
          })
          .join("\n")}`;
        num = 0;
        var voiceStr = `${topArray
          .sort((a, b) => b.voice - a.voice)
          .slice(0, 10)
          .filter(user => user.voice > 0 && message.guild.members.get(user.id))
          .map(function(user) {
            if (user.voice > 0) {
              return `**#${++num} | <@${user.id}> XP: \`${user.voice}\` **`;
            }
          })
          .join("\n")}`;
        var embed = new Discord.RichEmbed()
          .setAuthor("?? | Guild Score Leaderboards", message.guild.iconURL)
          .addField(
            "**TOP 5 TEXT :speech_balloon:**",
            `${textStr}  \n\n  **:sparkles: More?** \`${prefix}top text\``,
            true
          )
          .addField(
            "**TOP 5 VOICE :microphone2:**",
            `${voiceStr} \n\n **:sparkles: More?** \`${prefix}top voice\``,
            true
          )
          .setFooter(message.author.tag, message.author.displayAvatarURL)
          .setTimestamp()
          .setColor("13B813");
        message.channel.send({
          embed: embed
        });
      }
    }
  }
});
////كود معلومات السيرفر
client.on("message", message => {
  if (message.content.startsWith(prefix + "server")) {
    if (!message.channel.guild)
      return message.channel.send(` | This Command is used only in servers!`);
    const millis = new Date().getTime() - message.guild.createdAt.getTime();
    const now = new Date();
    const verificationLevels = ["None", "Low", "Medium", "Insane", "Extreme"];
    const days = millis / 1000 / 60 / 60 / 24;
    var embed = new Discord.RichEmbed()
      .setAuthor(message.guild.name, message.guild.iconURL)
      .addField("> :id: ・** Server ID:**", ` ${message.guild.id} `, true)
      .addField(
        "> :calendar: ・** Created On**",
        ` ${message.guild.createdAt.toLocaleString()}`,
        true
      )
      .addField(
        "> :crown: ・**Server Owner**",
        `**${message.guild.owner}**`,
        true
      )
      .addField(
        `> :busts_in_silhouette: ・** Members ** [${message.guild.members.size}]`,
        `**${
          message.guild.members.filter(c => c.presence.status !== "offline")
            .size
        }** **Online**`,
        true
      )
      .addField(
        "> :speech_balloon: ・** Channels **",
        ` **${message.guild.channels.filter(m => m.type === "text").size}**` +
          " TEXT | VOICE  " +
          `**${message.guild.channels.filter(m => m.type === "voice").size}** `,
        true
      )
      .addField(
        "> :earth_africa: ・** Region **",
        ` ${message.guild.region}`,
        true
      )
      .setImage("")

      .setColor("RANDOM");
    message.channel.sendEmbed(embed);
  }
});


//games code

const Sra7a = [
  "صراحه  |  صوتك حلوة؟",
  "صراحه  |  التقيت الناس مع وجوهين؟",
  "صراحه  |  شيء وكنت تحقق اللسان؟",
  "صراحه  |  أنا شخص ضعيف عندما؟",
  "صراحه  |  هل ترغب في إظهار حبك ومرفق لشخص أو رؤية هذا الضعف؟",
  "صراحه  |  يدل على أن الكذب مرات تكون ضرورية شي؟",
  "صراحه  |  أشعر بالوحدة على الرغم من أنني تحيط بك كثيرا؟",
  "صراحه  |  كيفية الكشف عن من يكمن عليك؟",
  "صراحه  |  إذا حاول شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟",
  "صراحه  |  أشجع شيء حلو في حياتك؟",
  'صراحه  |  طريقة جيدة يقنع حتى لو كانت الفكرة خاطئة" توافق؟',
  "صراحه  |  كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟",
  "صراحه  |  التغيير العادي عندما يكون الشخص الذي يحبه؟",
  "صراحه  |  المواقف الصعبة تضعف لك ولا ترفع؟",
  "صراحه  |  نظرة و يفسد الصداقة؟",
  "صراحه  |  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟",
  "صراحه  |  شخص معك بالحلوه والمُره؟",
  "صراحه  |  ‏هل تحب إظهار حبك وتعلقك بالشخص أم ترى ذلك ضعف؟",
  "صراحه  |  تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟",
  "صراحه  |  وش تتمنى الناس تعرف عليك؟",
  "صراحه  |  ابيع المجرة عشان؟",
  "صراحه  |  أحيانا احس ان الناس ، كمل؟",
  "صراحه  |  مع مين ودك تنام اليوم؟",
  "صراحه  |  صدفة العمر الحلوة هي اني؟",
  'صراحه  |  الكُره العظيم دايم يجي بعد حُب قوي " تتفق؟',
  "صراحه  |  صفة تحبها في نفسك؟",
  'صراحه  |  ‏الفقر فقر العقول ليس الجيوب " ، تتفق؟',
  "صراحه  |  تصلي صلواتك الخمس كلها؟",
  "صراحه  |  ‏تجامل أحد على راحتك؟",
  "صراحه  |  اشجع شيء سويتة بحياتك؟",
  "صراحه  |  وش ناوي تسوي اليوم؟",
  "صراحه  |  وش شعورك لما تشوف المطر؟",
  "صراحه  |  غيرتك هاديه ولا تسوي مشاكل؟",
  "صراحه  |  ما اكثر شي ندمن عليه؟",
  "صراحه  |  اي الدول تتمنى ان تزورها؟",
  "صراحه  |  متى اخر مره بكيت؟",
  "صراحه  |  تقيم حظك ؟ من عشره؟",
  "صراحه  |  هل تعتقد ان حظك سيئ؟",
  "صراحه  |  شـخــص تتمنــي الإنتقــام منـــه؟",
  "صراحه  |  كلمة تود سماعها كل يوم؟",
  "صراحه  |  **هل تُتقن عملك أم تشعر بالممل؟",
  "صراحه  |  هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟",
  "صراحه  |  متى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟",
  "صراحه  |  ما هو اسوأ خبر سمعته بحياتك؟",
  "‏صراحه | هل جرحت شخص تحبه من قبل ؟",
  "صراحه  |  ما هي العادة التي تُحب أن تبتعد عنها؟",
  "‏صراحه | هل تحب عائلتك ام تكرههم؟",
  "‏صراحه  |  من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟",
  "‏صراحه  |  هل خجلت من نفسك من قبل؟",
  "‏صراحه  |  ما هو ا الحلم  الذي لم تستطيع ان تحققه؟",
  "‏صراحه  |  ما هو الشخص الذي تحلم به كل ليلة؟",
  "‏صراحه  |  هل تعرضت إلى موقف مُحرج جعلك تكره صاحبهُ؟",
  "‏صراحه  |  هل قمت بالبكاء أمام من تُحب؟",
  "‏صراحه  |  ماذا تختار حبيبك أم صديقك؟",
  "‏صراحه  | هل حياتك سعيدة أم حزينة؟",
  "صراحه  |  ما هي أجمل سنة عشتها بحياتك؟",
  "‏صراحه  |  ما هو عمرك الحقيقي؟",
  "‏صراحه  |  ما اكثر شي ندمن عليه؟",
  "صراحه  |  ما هي أمنياتك المُستقبلية؟‏"
];
client.on("message", message => {
  if (message.content.startsWith("t!Sra7a")) {
    if (!message.channel.guild)
      return message.reply("** This command only for servers **");
    var client = new Discord.RichEmbed()
      .setTitle("لعبة صراحة ..")
      .setColor("RANDOM")
      .setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
      .setImage(
        "https://cdn.discordapp.com/attachments/371269161470525444/384103927060234242/125.png"
      )
      .setTimestamp();

    message.channel.sendEmbed(client);
    message.react("??");
  }
});

const Za7f = [
  "**صورة وجهك او رجلك او خشمك او يدك**.",
  "**اصدر اي صوت يطلبه منك الاعبين**.",
  "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
  "**روح الى اي قروب عندك في الواتس اب و اكتب اي شيء يطلبه منك الاعبين  الحد الاقصى 3 رسائل**.",
  "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
  "**سمعنا صوتك و غن اي اغنية من اختيار الاعبين الي معك**.",
  "**ذي المرة لك لا تعيدها**.",
  "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
  "**صور اي شيء يطلبه منك الاعبين**.",
  "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
  "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
  "**سو مشهد تمثيلي عن مصرية بتولد**.",
  "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
  "**ذي المرة لك لا تعيدها**.",
  "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
  "**روح عند اي احد بالخاص و قول له انك تحبه و الخ**.",
  "**اكتب في الشات اي شيء يطلبه منك الاعبين في الخاص**.",
  "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
  "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
  "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
  "**غير اسمك الى اسم من اختيار الاعبين الي معك**.",
  "**اتصل على امك و قول لها انك تحبها :heart:**.",
  "**لا يوجد سؤال لك سامحتك :slight_smile:**.",
  "**قل لواحد ماتعرفه عطني كف**.",
  "**منشن الجميع وقل انا اكرهكم**.",
  "**اتصل لاخوك و قول له انك سويت حادث و الخ....**.",
  "**روح المطبخ و اكسر صحن او كوب**.",
  "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
  "**قول لاي بنت موجود في الروم كلمة حلوه**.",
  "**تكلم باللغة الانجليزية الين يجي دورك مرة ثانية لازم تتكلم اذا ما تكلمت تنفذ عقاب ثاني**.",
  "**لا تتكلم ولا كلمة الين يجي دورك مرة ثانية و اذا تكلمت يجيك باند لمدة يوم كامل من السيرفر**.",
  "**قول قصيدة **.",
  "**تكلم باللهجة السودانية الين يجي دورك مرة ثانية**.",
  "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
  "**اول واحد تشوفه عطه كف**.",
  "**سو مشهد تمثيلي عن اي شيء يطلبه منك الاعبين**.",
  "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
  "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
  "**روح اكل ملح + ليمون اذا مافيه اكل اي شيء من اختيار الي معك**.",
  "**تاخذ عقابين**.",
  "**قول اسم امك افتخر بأسم امك**.",
  "**ارمي اي شيء قدامك على اي احد موجود او على نفسك**.",
  "**اذا انت ولد اكسر اغلى او احسن عطور عندك اذا انتي بنت اكسري الروج حقك او الميك اب حقك**.",
  "**اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه**.",
  "**تتصل على الوالده  و تقول لها خطفت شخص**.",
  "** تتصل على الوالده  و تقول لها تزوجت با سر**.",
  "**����تصل على الوالده  و تقول لها  احب وحده**.",
  "**تتصل على شرطي تقول له عندكم مطافي**.",
  "**خلاص سامحتك**.",
  "** تصيح في الشارع انا  مجنوون**.",
  "** تروح عند شخص تقول له احبك**."
];

client.on("message", message => {
  if (message.content.startsWith("t!Za7f")) {
    if (!message.channel.guild)
      return message.reply("** This command only for servers**");
    var embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setThumbnail(message.author.avatarURL)
      .addField("WOlF BOT", `${Za7f[Math.floor(Math.random() * Za7f.length)]}`);
    message.channel.sendEmbed(embed);
    console.log("[38ab] Send By: " + message.author.username);
  }
});

var rebel = [
  "https://f.top4top.net/p_682it2tg6.png",
  "https://e.top4top.net/p_682a1cus5.png",
  "https://d.top4top.net/p_682pycol4.png",
  "https://c.top4top.net/p_682vqehy3.png",
  "https://b.top4top.net/p_682mlf9d2.png",
  "https://a.top4top.net/p_6827dule1.png",
  "https://b.top4top.net/p_682g1meb10.png",
  "https://a.top4top.net/p_682jgp4v9.png",
  "https://f.top4top.net/p_682d4joq8.png",
  "https://e.top4top.net/p_6828o0e47.png",
  "https://d.top4top.net/p_6824x7sy6.png",
  "https://c.top4top.net/p_682gzo2l5.png",
  "https://b.top4top.net/p_68295qg04.png",
  "https://a.top4top.net/p_682zrz6h3.png",
  "https://f.top4top.net/p_6828vkzc2.png",
  "https://e.top4top.net/p_682i8tb11.png"
];
client.on("message", message => {
  var args = message.content.split(" ").slice(1);
  if (message.content.startsWith(prefix + "lwkhiruk")) {
    var cat = new Discord.RichEmbed().setImage(
      rebel[Math.floor(Math.random() * rebel.length)]
    );
    message.channel.sendEmbed(cat);
  }
});

const cuttweet = [
  "كت تويت ‏| تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟",
  "كت تويت | أكثر شيء يُسكِت الطفل برأيك؟",
  "كت تويت | الحرية لـ ... ؟",
  "كت تويت | قناة الكرتون المفضلة في طفولتك؟",
  "كت تويت ‏| كلمة للصُداع؟",
  "كت تويت ‏| ما الشيء الذي يُفارقك؟",
  "كت تويت | موقف مميز فعلته مع شخص ولا يزال يذكره لك؟",
  "كت تويت ‏| أيهما ينتصر، الكبرياء أم الحب؟",
  "كت تويت | بعد ١٠ سنين ايش بتكون ؟",
  "كت تويت ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟",
  "‏كت تويت | عمرك شلت مصيبة عن شخص برغبتك ؟",
  "كت تويت | أكثر سؤال وجِّه إليك مؤخرًا؟",
  "‏كت تويت | ما هو الشيء الذي يجعلك تشعر بالخوف؟",
  "‏كت تويت | وش يفسد الصداقة؟",
  "‏كت تويت | شخص لاترفض له طلبا ؟",
  "‏كت تويت | كم مره خسرت شخص تحبه؟.",
  "‏كت تويت | كيف تتعامل مع الاشخاص السلبيين ؟",
  "‏كت تويت | كلمة تشعر بالخجل اذا قيلت لك؟",
  "‏كت تويت | جسمك اكبر من عٌمرك او العكسّ ؟!",
  "‏كت تويت |أقوى كذبة مشت عليك ؟",
  "‏كت تويت | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟",
  "كت تويت | هل حدث وضحيت من أجل شخصٍ أحببت؟",
  "‏كت تويت | أكثر تطبيق تستخدمه مؤخرًا؟",
  "‏كت تويت | ‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟",
  "‏كت تويت | وش محتاج عشان تكون مبسوط ؟",
  "‏كت تويت | مطلبك الوحيد الحين ؟",
  "‏كت تويت | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟"
];

client.on("message", message => {
  if (message.content.startsWith("t!cuttweet")) {
    if (!message.channel.guild)
      return message.reply("** This command only for servers**");
    var embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setThumbnail(message.author.avatarURL)
      .addField(
        "لعبه كت تويت",
        `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`
      );
    message.channel.sendEmbed(embed);
    console.log("[id] Send By: " + message.author.username);
  }
});

const secreT = [
  "**الحياة بكل ما فيها تقف دائمًا على حد الوسطية بين اتزان المعنى وضده من حب وكره وحق وباطل وعدل وظلم**.",
  "**كى تعيش عليك ان تتقن فن التجاهل باحتراف**.",
  "**لا تحزن على من اشعرك بان طيبتك غباء امام وقاحته**.",
  "**هناك من يحلم بالنجاح وهناك من يستيقظ باكرا لتحقيقه**.",
  "**ان تعالج ألمك بنفسك تلك هى القوة**.",
  "**الجميع يسمع ما تقول والاصدقاء ينصتون لما تقول وافضل الاصدقاء ينصتون لما اخفاه سكوتك**.",
  "**انتهى زمن الفروسية ، لم تنقرض الخيول بل انقرض الفرسان**.",
  "**ان تكون اخرسا عاقلا خير من ان تكون نطوقا جهولا**.",
  "**المناقشات العقيمة لا تنجب افكارا**.",
  "**نحن نكتب ما لا نستطيع ان نقول وما نريد ان يكون**.",
  "**نحن نكتب ما لا نستطيع ان نقول وما نريد ان يكون**."
];

client.on("message", message => {
  if (message.content.startsWith("t!khawatir")) {
    if (!message.channel.guild)
      return message.reply("** This command only for servers**");
    var embed = new Discord.RichEmbed()
      .setColor("RANDOM")

      .setThumbnail(message.author.avatarURL)
      .addField(
        "لعبه خواطر",
        `${secreT[Math.floor(Math.random() * secreT.length)]}`
      );
    message.channel.sendEmbed(embed);
    console.log("[id] Send By: " + message.author.username);
  }
});

const Love = [
  "**احبك / عدد قطرات المـــطر والشجر وامواج البحر والنجوم الي تتزاحم مبهورة في جمال القمر**.",
  "**ساعزفك وساجعلك لحنا تغني عليه جميع قصائد العشــق**.",
  "**احبك موت... لاتسألني ما الدليل ارأيت رصاصه تسأل القتيل؟**.",
  "**ربما يبيع الانسان شيئا قد شراه لاكن لا يبيع قلبا قد هواه**.",
  "**و ما عجبي موت المحبين في الهوى ........... و لكن بقاء العاشقين عجيب**.",
  "**حلفت / لاحشـــد جيوش الحب واحتلك مسكين ربي بلاك بعـــاشق ارهـــابي**.",
  "**العيــن تعشق صورتك ... والقلب يجري فيه دمك وكل مااسمع صوتك ...شفايفي تقول احبك**.",
  "**ياحظ المكان فيك..ياحظ من هم حواليك ...ياحظ الناس تشوفك ... وانا مشتاق اليك**.",
  "**لو كنت دمعة داخل عيوني بغمض عليك وصدقي ما راح افتح...ولو كان الثمن عيوني**.",
  "**سهل اموت عشانك لكن الصعب اعيش بدونك سهل احبك لكن صعب انساك**.",
  "**أخشى ان انظر لعيناك وأنا فى شوق ولهيب لرؤياك**.",
  "**أتمنى ان اكون دمعة تولد بعينيك واعيش على خديك واموت عند شفتيك**.",
  "**أحياناً أرى الحياة لا تساوى إبتسامة لكن دائماً إبتسامتك هى كيانى**.",
  "**من السهل أن ينسى الانسان نفسه .. لكن من الصعب ان ينسى نفساً سكنت نفسه !**.",
  "**نفسى أكون نجمة سماك .. همسة شفاك .. شمعة مساك .. بس تبقى معايا وانا معاك**.",
  "**أهنئ قلبى بحبك وصبر عينى فى بعدك وأقول إنك نور عينى يجعل روحى فدى قلبك**."
];

client.on("message", message => {
  if (message.content.startsWith("t!love")) {
    if (!message.channel.guild)
      return message.reply("** This command only for servers**");
    var embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setThumbnail(message.author.avatarURL)
      .addField(
        "Prize Bot",
        `${Love[Math.floor(Math.random() * Love.length)]}`
      );
    message.channel.sendEmbed(embed);
    console.log("[id] Send By: " + message.author.username);
  }
});

client.on("ready", () => {
  console.log(`im redey`);
});
const zead = [
  "*** انا اسمي مريم ***",
  "*** مرحباَ ماهو اسمك ؟ ***",
  `*** اهلا بك ! انا تائهه في هذا المكان  ***`,
  "*** هل تود مساعدتي ؟ ***",
  "*** لماذا هل انت قاسي القلب ؟ ***",
  "*** انني اشفق عليك عليك يجب ان تطهر روحك وتحب الخير للجميع ***",
  "*** ابتعد عني قليل انني متعبة ***",
  "*** هل انت نادم على ماقلت ؟ ***",
  "*** ابتعد عني قليل انني متعبة ***",
  "*** هل انت نادم على ماقلت ؟ ***",
  "*** هل تود مساعدتي ؟ ***",
  "*** واو اشكرك انك شخصاَ رائع ! ***",
  "*** ابحث معي عن منزلي لقد كان قريباَ من هنا ***",
  "*** ولاكن عندما حل الليل لم اعد ارى اي شيء ***",
  "*** مذا تظن اين يوجد ؟ يمين او يسار ***",
  "*** هيا اذاَ ***",
  "*** اود ان اسئلك سؤال ونحن في الطريق ***",
  "*** هل تراني فتاة لطيفة ام مخيفة ***",
  "*** اشكرك !  ***",
  "*** لقد وصلنا الى المنزل شكراَ جزيلَ انتطرني ثواني وسوف اعود ***",
  "*** هل انت جاهز ؟ ***",
  "*** لقد اخبرت والدي عنك وهم متحمسين لرؤيتك ***",
  "*** هل تود ان تراهم الان ***",
  "*** انا لست الحوت الازرق كما يدعون ***",
  "*** انا لست كاذبة صدقني***",
  "*** لماذا ارى في عينيك الخوف ؟ ***",
  "*** انا مجرد فتاة لطيفة تحب اللعب مع الجميع ***",
  "*** اعرف كل شيء يحدث اسمع ذالك بالراديو ***",
  "*** سمعت ان البشر يقتلون من اجل المال فقط ***",
  "*** لماذا لم تدخل الغرفة ؟ ***",
  "*** ههههههههههههههههههه انت الان مسجون في هذه الغرفة ***",
  "*** لن تخرج حتى اعود لك بعد قليل ***",
  "*** المفتاح معك ! اكتب .مريم  ***",
  "*** مفتاح احمر , هل حصلت عليه ؟ ***",
  "*** ان لم تحصل عليه , اكتب .مريم مرة اخرى ***",
  "*** مفتاح اسود . هل حصلت عليه ؟ ***",
  "*** اين تريد ان تختبئ بسرعة قبل ان تعود ***",
  "*** لقد عادت من جديد الى المنزل ***",
  "*** لا تصدر اي صوت ! ***",
  "*** مريم : لقد عدت ***",
  "*** مريم : يا ايها المخادع اين انت ***",
  "*** مريم : اعلم انك هنا في المنزل ***",
  "*** مريم : ماذا تريد ان تسمع ***",
  "*** مريم : اضغط على الرابط اهداء مني لك | https://www.youtube.com/watch?v=hvSiuQccmtg ***",
  "*** احد ما خرج من المنزل ***",
  "*** انتظر الجزء الثاني عندما يوصل البوت 100 سيرفر , ساعدني في نشر البوت وادخل هذا السيرفر  ***"
];
client.on("message", message => {
  if (message.content.startsWith("t!mariam")) {
    var mariam = new Discord.RichEmbed()
      .setTitle("لعبة مريم ..")
      .setColor("RANDOM")
      .setDescription(`${zead[Math.floor(Math.random() * zead.length)]}`)
      .setImage(
        "https://www.npa-ar.com/wp-content/uploads/2017/08/%D9%84%D8%B9%D8%A8%D8%A9-%D9%85%D8%B1%D9%8A%D9%85-300x200.jpg"
      );
    message.channel.sendEmbed(mariam);
    message.react("??");
  }
});


client.on("message", message => {
  if (message.content.startsWith(prefix + "topinvites")) {
    message.guild.fetchInvites().then(i => {
      var invites = [];

      i.forEach(inv => {
        var [invs, i] = [{}, null];

        if (inv.maxUses) {
          invs[inv.code] = +inv.uses + "/" + inv.maxUses;
        } else {
          invs[inv.code] = +inv.uses;
        }
        invites.push(
          `invite: ${inv.url} inviter: ${inv.inviter} \`${invs[inv.code]}\`;`
        );
      });
      var embed = new Discord.RichEmbed()
        .setColor("BLACK")
        .setDescription(
          `${invites.join(`\n`) + "\n\n**By:** " + message.author}`
        );
      message.channel.send({ embed: embed });
    });
  }
});

client.on("message", message => {
  if (message.content === prefix + "info") {
    let oi = message.mentions.users.first()
      ? message.mentions.users.first().id
      : message.author.id;
    let Tag = message.mentions.users.first()
      ? message.mentions.users.first().tag
      : message.author.tag;
    let Username = message.mentions.users.first()
      ? message.mentions.users.first().username
      : message.author.username;
    let Avatar = message.mentions.users.first()
      ? message.mentions.users.first().avatarURL
      : message.author.avatarURL;

    message.guild.fetchInvites().then(invs => {
      let member = client.guilds.get(message.guild.id).members.get(oi);
      let personalInvites = invs.filter(i => i.inviter.id === oi);
      let urll = invs.filter(i => i.inviter.id === oi);
      let link = urll.reduce(
        (p, v) =>
          v.url + ` , Total de membros recrutados no convite: ${v.uses}.\n` + p,
        `\nServidor: ${message.guild.name} \n `
      );
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      let inviteCode = personalInvites.reduce((p, v) => v.code);
      let possibleInvites = [["Total de membros recrutados:"]];
      possibleInvites.push([inviteCount, inviteCode]);
      let user = message.mentions.users.first() || message.author;
      let mem = message.guild.member(user);
      let millisJoined = new Date().getTime() - mem.joinedAt.getTime();
      let daysJoined = millisJoined / 1000 / 60 / 60 / 24;

      var inviteInfo = new Discord.RichEmbed()
        .setTitle(`:incoming_envelope: **[INVITE INFO]** ${Username}`)
        .setThumbnail(client.user.avatarURL)
        .addField("**الدعوات**", `** ↝** [ شخص **${Number(inviteCount)}** ]`)
        .addField(
          "**تم الانضمام للسيرفر من**",
          `** ↝** [ يوم **${daysJoined.toFixed(0)}** ]`
        )
        .addField(
          "**رابط دعوة الانضمام**",
          `** ↝** [ **${inviteCode || "Zm2U6we"}** ]`
        )
        .setColor("BLACK")
        .setTimestamp()
        .setFooter(Tag, Avatar);

      message.channel.send(inviteInfo);
    });
  }
});

const invites = {};
const wait = require("util").promisify(setTimeout);
client.on("ready", () => {
  wait(1000);
  client.guilds.forEach(king => {
    king.fetchInvites().then(guildInvites => {
      invites[king.id] = guildInvites;
    });
  });
});

const m7 = JSON.parse(fs.readFileSync("./m7.json", "utf8"));
client.on("message", message => {
  if (!message.channel.guild) return;
  if (message.content.startsWith(prefix + "setinv")) {
    let args = message.content.split(" ").slice(1);
    if (!message.channel.guild)
      return message.reply("**هذا الأمر فقط للسيرفرات**");
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        ":information_source: | **لا تملك الصلاحيات الكافيه**"
      );
    let room = args[0];
    if (!room) return message.reply("**اكتب اسم الروم**");
    if (!message.guild.channels.find("name", args[0]))
      return message.reply("**لا يمكنني اجاد الروم**");
    let embed = new Discord.RichEmbed()
      .setTitle("**تم الاعداد بنجاح**")
      .addField("الروم:", room)
      .addField("بواسطة:", `${message.author}`)
      .addField(
        "Time now: ",
        `${moment(message.createdAt).format(" D/MM/YYYY h:mm")}`
      )
      .setThumbnail(message.author.avatarURL)
      .setFooter(`${client.user.username}`);
    message.channel.sendEmbed(embed);
    m7[message.guild.id] = {
      channel: room
    };
    fs.writeFile("./m7.json", JSON.stringify(m7), err => {
      if (err) console.error(err);
    });
  } else {
    client.on("guildMemberAdd", member => {
      member.guild.fetchInvites().then(guildInvites => {
        const gamer = invites[member.guild.id];
        invites[member.guild.id] = guildInvites;
        const invite = guildInvites.find(i => gamer.get(i.code).uses < i.uses);
        const inviter = client.users.get(invite.inviter.id);
        let findchannel = member.guild.channels.find(
          "name",
          `${m7[message.guild.id].channel}`
        );
        findchannel
          .send(
            `join ${member} invited by ${inviter}   (  ${invite.uses} invites )  `
          )
          .catch(err => {
            message.reply(`**انا لا اجد الروم**`);
            console.error(err);
          });
      });
    });
  }
});

let sugg = JSON.parse(fs.readFileSync("./suggestions.json", "utf8"));
client.on("message", async message => {
  if (message["author"].bot) return undefined;
  if (message["content"]["startsWith"](prefix + "set-sug")) {
    var args1 = message["content"]
      .split(" ")
      .slice(1)
      .join(" ");
    let channel = message["guild"].channels.find(ch => ch.name === `${args1}`);
    if (!args1) return message.channel.send(`> **Write Name Channel**`);
    if (!channel)
      return message.channel.send(`> **Not Found This Name Channel**`);
    message.channel.send(`> **Done Selected Channel Suggestions**`);
    sugg[message.guild.id] = {
      channel: args1
    };
    fs.writeFile("./suggestions.json", JSON.stringify(sugg), err => {
      if (err) console.error(err);
    });
  }
});


let log = JSON.parse(fs.readFileSync("./log.json", "utf8"));
client.on("message", message => {
  if (!message.channel.guild) return;

  let room = message.content.split(" ").slice(1);
  let findroom = message.guild.channels.find("name", `${room}`);
  if (message.content.startsWith(prefix + "setLog")) {
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    if (!room) return message.channel.send("Please Type The Channel Name");
    if (!findroom)
      return message.channel.send("Please Type The Log Channel Name");
    let embed = new Discord.RichEmbed()
      .setTitle("**Done The Log Code Has Been Setup**")
      .addField("Channel:", `${room}`)
      .addField("Requested By:", `${message.author}`)
      .setThumbnail(message.author.avatarURL)
      .setFooter(`${client.user.username}`);
    message.channel.sendEmbed(embed);
    log[message.guild.id] = {
      channel: room,
      onoff: "On"
    };
    fs.writeFile("./log.json", JSON.stringify(log), err => {
      if (err) console.error(err);
    });
  }
});


client.on("message", async message => {
  if (message["author"].bot) return undefined;
  if (
    message["content"]["startsWith"](prefix + "suggestion") ||
    message["content"]["startsWith"](prefix + "sug") ||
    message["content"]["startsWith"](prefix + "اقتراح")
  ) {
    let sugg11 = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!sugg11) return message.channel.send(`> **Write Suggestion**`);
    let room = message.guild.channels.find(
      ro => ro.name === `${sugg[message.guild.id].channel}`
    );
    if (!room) return message.channel.send(`> **Not Found Room**`);
    let send21 = new Discord.RichEmbed()
      .setAuthor(
        `${message.author.tag} (ID : ${message.author.id})`,
        message.author.avatarURL
      )
      .setTitle(`Suggestion:`)
      .setDescription(`> ${sugg11}`)
      .setColor("")
      .setThumbnail(message.author.avatarURL)
      .setTimestamp()
      .setFooter(`Version: 1.0.0`);
    room.send(send21);
    fs.writeFile("./suggestions.json", JSON.stringify(sugg), err => {
      if (err) console.error(err);
    });
  }
});


/// lock unlock
client.on("message", message => {
  if (message.content === `${prefix}lock`) {
    if (!message.channel.guild)
      return message.reply("** This command only for servers ❌ **");

    if (!message.member.hasPermission("MANAGE_CHANNELS"))
      return message.reply(" ** You dont have `MANAGE_CHANNELS` permission **");
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
      })
      .then(() => {
        message.reply("** ✅ | The chat has been closed  **");
      });
  }

  if (message.content === `${prefix}unlock`) {
    if (!message.channel.guild)
      return message.reply("** This command only for servers ❌ **");

    if (!message.member.hasPermission("MANAGE_CHANNELS"))
      return message.reply("** You dont have `MANAGE_CHANNELS` permission **");
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: true
      })
      .then(() => {
        message.reply("**✅ | The chat was opened **");
      });
  }
});


//role

client.on("message", message => {
  let roleembed = new Discord.RichEmbed()
    .setDescription(
      `
أمثله على الأوامر :
-role @mention rolename : لأعطاء رتبة لعضو معين
-role all rolename : لأعطاء رتبة للجميع
-role humans rolename : لأعطاء رتبة للاشخاص فقط
-role bots rolename : لأعطاء رتبة لجميع البوتات`
    )
    .setFooter(
      "Requested by " + message.author.username,
      message.author.avatarURL
    );
  var args = message.content.split(" ").slice(1);
  var msg = message.content.toLowerCase();
  if (!message.guild) return;
  if (!msg.startsWith(prefix + "role")) return;
  if (!message.member.hasPermission("MANAGE_ROLES"))
    return message.channel.send(" **__ليس لديك صلاحيات__**");
  if (msg.toLowerCase().startsWith(prefix + "roleembed")) {
    if (!args[0]) return message.channel.sendEmbed(roleembed);
    if (!args[1]) return message.channel.sendEmbed(roleembed);
    var role = msg
      .split(" ")
      .slice(2)
      .join(" ")
      .toLowerCase();
    var role1 = message.guild.roles
      .filter(r => r.name.toLowerCase().indexOf(role) > -1)
      .first();
    if (!role1)
      return message.reply("**:x: يرجى وضع الرتبة المراد اعطاءها الى الشخص**");
    if (message.mentions.members.first()) {
      message.mentions.members.first().addRole(role1);
      return message.reply(
        "**:white_check_mark: [ " +
          role1.name +
          " ] رتبة [ " +
          args[0] +
          " ] تم اعطاء الى **"
      );
    }
    if (args[0].toLowerCase() == "all") {
      message.guild.members.forEach(m => m.addRole(role1));
      return message.reply(
        "**:white_check_mark: [ " + role1.name + " ] تم اعطاء الى الكل رتبة**"
      );
    } else if (args[0].toLowerCase() == "bots") {
      message.guild.members
        .filter(m => m.user.bot)
        .forEach(m => m.addRole(role1));
      return message.reply(
        "**:white_check_mark: [ " +
          role1.name +
          " ] تم اعطاء الى البوتات رتبة**"
      );
    } else if (args[0].toLowerCase() == "humans") {
      message.guild.members
        .filter(m => !m.user.bot)
        .forEach(m => m.addRole(role1));
      return message.reply(
        "**:white_check_mark: [ " +
          role1.name +
          " ] تم اعطاء الى البشريين رتبة**"
      );
    }
  } else {
    if (!args[0])
      return message.reply("**:x: يرجى وضع الشخص المراد اعطائها الرتبة**");
    if (!args[1])
      return message.reply("**:x: يرجى وضع الرتبة المراد اعطائها للشخص**");
    var role = msg
      .split(" ")
      .slice(2)
      .join(" ")
      .toLowerCase();
    var role1 = message.guild.roles
      .filter(r => r.name.toLowerCase().indexOf(role) > -1)
      .first();
    if (!role1)
      return message.reply("**:x: يرجى وضع الرتبة المراد اعطائها للشخص**");
    if (message.mentions.members.first()) {
      message.mentions.members.first().addRole(role1);
      return message.reply(
        "**:white_check_mark: [ " +
          role1.name +
          " ] رتبة [ " +
          args[0] +
          " ] تم اعطاء **"
      );
    }
    if (args[0].toLowerCase() == "all") {
      message.guild.members.forEach(m => m.addRole(role1));
      return message.reply(
        "**:white_check_mark: [ " + role1.name + " ] تم اعطاء الكل رتبة**"
      );
    } else if (args[0].toLowerCase() == "bots") {
      message.guild.members
        .filter(m => m.user.bot)
        .forEach(m => m.addRole(role1));
      return message.reply(
        "**:white_check_mark: [ " + role1.name + " ] تم اعطاء البوتات رتبة**"
      );
    } else if (args[0].toLowerCase() == "humans") {
      message.guild.members
        .filter(m => !m.user.bot)
        .forEach(m => m.addRole(role1));
      return message.reply(
        "**:white_check_mark: [ " + role1.name + " ] تم اعطاء البشريين رتبة**"
      );
    }
  }
});


///show hide
client.on("message", message => {
  if (message.content === prefix + "hide") {
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.reply("You Dont Have Perms :x:");
    message.channel.overwritePermissions(message.guild.id, {
      READ_MESSAGES: false
    });
    message.channel.send("**The chat has been hidden**");
  }
});

client.on("message", message => {
  if (message.content === prefix + "show") {
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.reply(":x:");
    message.channel.overwritePermissions(message.guild.id, {
      READ_MESSAGES: true
    });
    message.channel.send("**Chat has been displayed**");
  }
});


///avatar savatar
client.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  if (message.content.startsWith(prefix + "avatar")) {
    const mention = message.mentions.users.first();

    if (!mention) return console.log("");
    let embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setAuthor(
        `${mention.username}#${mention.discriminator}`,
        `${mention.avatarURL}`
      )
      .setTitle("Avatar Link")
      .setURL(`${mention.avatarURL}`)
      .setImage(`${mention.avatarURL}`)
      .setFooter(
        `Requested By ${message.author.tag}`,
        `${message.author.avatarURL}`
      );
    message.channel.send(embed);
  }
});

client.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  if (message.content.startsWith(prefix + "savatar")) {
    let doma = new Discord.RichEmbed()
      .setColor("BLACK")
      .setAuthor(message.guild.name, message.guild.iconURL)
      .setTitle("Avatar Link")
      .setURL(message.guild.iconURL)
      .setImage(message.guild.iconURL)
      .setFooter(
        `Requested By ${message.author.tag}`,
        message.author.avatarURL
      );
    message.channel.send(doma);
  } else if (message.content.startsWith(prefix + "avatar")) {
    let args = message.content.split(" ")[1];
    var avt = args || message.author.id;
    client.fetchUser(avt).then(user => {
      avt = user;
      let embed = new Discord.RichEmbed()
        .setColor("BLACK")
        .setAuthor(`${avt.tag}`, avt.avatarURL)
        .setTitle("Avatar Link")
        .setURL(avt.avatarURL)
        .setImage(avt.avatarURL)
        .setFooter(
          `Requested By ${message.author.tag}`,
          message.author.avatarURL
        );
      message.channel.send(embed);
    });
  }
});

///ping
client.on("message", message => {
  if (message.content === prefix + "ping") {
    const embed = new Discord.RichEmbed()

      .setColor("RANDOM")
      .addField(
        ":chart_with_upwards_trend:  **Speed of Bot connection** ",
        `${Date.now() - message.createdTimestamp}` + " ms`"
      );

    message.channel.sendEmbed(embed);
  }
});


let xp = require('./xp.json'); //سوي ملف بأسم xp.json

client.on('message', message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;


    let Addxp = Math.floor(Math.random() * 6) + 8;

    if(!xp[message.author.id]){
        xp[message.author.id] = {
            xp: 0,
            level: 1 ,
        };
    }

    let curxp = xp[message.author.id].xp;
    let curlvl = xp[message.author.id].level + 1;
    let nextLvL = xp[message.author.id].level * 5000; //كل كم اكس بي لحتا يرتفع لفله انصحكم تخلونه فوق ال الف
    xp[message.author.id].xp = curxp + Addxp;
    if(nextLvL <= xp[message.author.id].xp){
        xp[message.author.id].level = xp[message.author.id].level + 1;
        
        let lvlup = new Discord.RichEmbed()
        .setTitle('Level Up!')
        .setColor('RANDOM')
        .setDescription(`New Level: `+curlvl)
        .setTimestamp()
        .setFooter(message.author.username+'#'+message.author.discriminator);
        message.channel.send(lvlup)
    }
    fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
        if (err) console.log(err)
    });


});
client.on('message', message =>{
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;


    let curxp = xp[message.author.id].xp;
    let curlvl = xp[message.author.id].level;
    let nextlvlxp = curlvl * 200;
    let difference = nextlvlxp - curxp

    if(message.content == prefix+"profile"){

        if(!xp[message.author.id]) {
            xp[message.author.id] = {
                xp: 0,
                level: 1,
            }
        }
        fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
            if(err) console.log(err)
        });
        var embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setColor('RANDOM')
        .setTitle('Your Profile.')
        .addField('XP: ', curxp, true)
        .addField('Level: ', curlvl, true)
        .setFooter(` ${difference} xp till level up `, message.author.displayAvatarURL);
        message.channel.send(embed);

    }
});

client.login(process.env.token);