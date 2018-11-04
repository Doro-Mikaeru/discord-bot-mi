//const mydotenv = require('dotenv').config();
const Discord = require('discord.js');
const { Client, Attachment } = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Prêt !');
});

client.on("message", message => {
	// Ne rien faire si le message provient d'un robot
	if (message.author.bot) return;
	// Préfixe
	var prefix = '=';
	
	// Commandes avec le préfixe

	// Aide
	if(message.content.startsWith(prefix + "help")) {
		// Récupération des arguments
		var args = message.content.slice(prefix.length).trim().split(/ +/g);
		var command = args.shift().toLowerCase();
		// Avec ou sans arguments ?
		if (args.length > 0) {
			switch (args[0]) {
				case "=mp" :
					message.channel.send("Taper `=mp` pour recevoir un message privé de la part du robot Mi.");
					break;
				case "=pokemon-artwork" :
					message.channel.send("Taper `=pokemon-artwork` suivi du numéro du Pokémon sur trois chiffres pour afficher son artwork officiel.");
					break;
				case "=pokemon-fusion" :
					message.channel.send("Taper `=pokemon-fusion` suivi du numéro des deux Pokémon à fusionner pour afficher le résultat. Seuls les 151 premiers Pokémon sont disponibles.");
					break;
				case "=yomomma" :
					message.channel.send("Taper `=yomomma` pour afficher une punchline Yo Momma aléatoire.");
					break;
				default:
					message.channel.send("Cette commande n'existe pas.");
					break;
			}
		}
		else {
			message.channel.send(
				"Préfixe : " + prefix + "\n\n" +
				"**Commandes**\n\n" +
				"`=help` aide, `=mp` message privé, `=pokemon-artwork` artwork Pokémon, `=pokemon-fusion` fusion Pokémon, `=yomomma` punchline Yo Momma, et autre commandes secrètes..."
			);
		}
	};
	
	// =pokemon-artwork
	if(message.content.startsWith(prefix + "pokemon-artwork")) {
		try {
			var args = message.content.slice(prefix.length).trim().split(/ +/g);
			var command = args.shift().toLowerCase();
			var numeroPokemon = args[0];
			// Création de la pièce jointe
			var attachment = new Attachment('https://assets.pokemon.com/assets/cms2/img/pokedex/full/' + numeroPokemon + '.png');
			// Envoi de la pièce jointe
			message.channel.send(attachment);
		}
		catch {
			message.channel.send("Il faut entrer un numéro de Pokémon valide, comme par exemple `=pokemon-artwork 025`.");
		}
	}
	
	// =pokemon-fusion
	if(message.content.startsWith(prefix + "pokemon-fusion")) {
		try {
			var args = message.content.slice(prefix.length).trim().split(/ +/g);
			var command = args.shift().toLowerCase();
			var numeroPokemon1 = parseInt(args[0], 10);
			var numeroPokemon2 = parseInt(args[1], 10);
			if (numeroPokemon1 > 0 && numeroPokemon1 < 152 && numeroPokemon2 > 0 && numeroPokemon2 < 152) {
				// Création de la pièce jointe
				var attachment = new Attachment('http://images.alexonsager.net/pokemon/fused/' + numeroPokemon1.toString() + '/' + numeroPokemon1.toString() + '.' + numeroPokemon2.toString() + '.png');
				// Envoi de la pièce jointe
				message.channel.send(attachment);
			}
			else {
				message.channel.send("Il faut entrer deux numéros de Pokémon valides **entre 1 et 151**, comme par exemple `=pokemon-fusion 025 150`.");
			}
		}
		catch {
			message.channel.send("Il faut entrer deux numéros de Pokémon valides entre 1 et 151, comme par exemple `=pokemon-fusion 025 150`.");
		}
	}
	
	// =rule34
	if(message.content.startsWith(prefix + "rule34")) {
		try {
			message.author.send('https://rule34.xxx/index.php?page=post&s=random');
		}
		catch {
		}
	}
	
	// =yomomma
	if(message.content.startsWith(prefix + "yomomma")) {
		try {
			var tamereesttellementgrosse = "Ta mère est tellement grosse ";
			// Peuplement du tableau de phrases
			var phrases = [
				"qu'elle est des deux côtés de la famille.",
				"qu'en montant sur la balance elle voit son numéro de portable.",
				"que lorsqu'elle est sur la plage, on la remet à la mer.",
				"qu'elle doit prendre le tarif de groupe au cinéma.",
				"que quand elle passe devant la télévision tu manques 3 émissions de suite.",
				"que quand elle a de l'eau dans le nombril les enfants viennent se baigner.",
				"que quand elle passe devant le soleil elle fait une éclipse.",
				"que quand elle tombe du lit elle arrive à tomber des deux côtés en même temps.",
				"que lorsqu'elle va au cinéma, elle s'assoit à côté de tout le monde."
			];
			var nbPhrases = phrases.length;
			var cellule = Math.floor(Math.random() * Math.floor(nbPhrases));
			var phrase = phrases[cellule];
			message.channel.send(tamereesttellementgrosse + phrase);
		}
		catch {
			message.channel.send('Je ne trouve pas d\'insulte Yo Momma.');
		}
	};
	
	// Message privé
	
	// Simple
	if(message.content == "=mp") {
		message.author.send("Voici un message privé.");
	};
	
	// Commandes sans préfixe

	// Ping-pong
	if(message.content == "ping"){
		message.channel.send("pong");
	};
});
client.login(process.env.TOKEN);
