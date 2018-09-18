const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on("ready", function() {
    bot.user.setGame("Command: *lphelp");
    console.log("Connected");
});

bot.login("NDkxMzMyMDU0NDE2MzU5NDQ0.DoGg9w.87R3Gasu25uPj3LodYHKHyp1vUE");

bot.on('message', message => {
    if (message.content === prefix + "lphelp"){
        message.reply ("Liste des commandes : *youtube *lpteam *info *twitter *twitch ");
    }

    if (message.content === prefix + "youtube"){
        message.reply ("Voici le lien de notre chaîne YouTube : https://www.youtube.com/channel/UCO7uxgsv6UDqCQA0pY3BfYw");
    }

    if (message.content === prefix + "lpteam"){
        message.reply ("7 Joueurs sont actuellement dans la Team FR: Lynx, ClemGrim0, Daft, Luc, Neko, ThunderGeek, SimulinG.");
        message.reply ("2 Joueurs composent la Team GB : Oak, Toxic (17/09/2018)");
    }

    if (message.content === prefix + "info"){
        message.reply ("Les fondateurs de la Team sont Lynx et MrTheSheep. Le dirigeant de la Team GB est Oak. ThunderGeek est Québécois et il aime les Big Burgers :)");
        message.reply ("C'est une Team qui est basé sur 2 jeux en particuliers (Fortnite et Rainbow Six Siege). Il y a des prérequis comme savoir rigoler, savoir TryHard quand il faut. Eviter évidemment les insultes envers les autres joueurs de la Team ou non. Le respect est très important.");
    }

    if (message.content === "Salut"){
        message.reply ("Salut à toi !");
        console.log ("Commande de Salut effectué avec succès !");
    }

    if (message.content === prefix + "twitter"){
        message.reply ("Voici le lien du Twitter de la Team : https://twitter.com/LosPantos");
    }

    if (message.content == prefix + "twitch"){
        message.reply ("Voici le lien de la chaîne Twitch de la Team : https://www.twitch.tv/lospantos_fortnite");
    }
});
