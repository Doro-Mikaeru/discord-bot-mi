const Discord = require('discord.js');
const { Client, Attachment } = require('discord.js');
const client = new Discord.Client();
const superagent = require("snekfetch"); // utile pour lewdneko

// Récupérer les données des utilisateurs qui se trouvent dans le fichier UserData.json
//var fs = require('fs');
//var userData = JSON.parse(fs.readFileSync('userData.json', 'utf8'));

client.on('ready', () => {
  console.log('Prêt !');
});

// Classes (utiliser function au lieu de class avec Node.js, le constructeur est la fonction)

/*
** Youkai
** Auteur : MDB
*/

function Youkai(name, shortDescription) {
	
    this.name = name; 
    this.shortDescription = shortDescription;
	
    this.setName = function (newName) {
		this.name = newName;
    };
    this.setShortDescription = function (newShortDescription) {
		this.shortDescription = newShortDescription;
    };
	
	this.getName = function () {
		return this.name;
	};
	this.getShortDescription = function () {
		return this.shortDescription;
	};
}

//YoukaiDex
var youkaidex = [
	new Youkai("Abumi-kuchi", "Tsukumogami d'un étrier"),
	new Youkai("Abura-akago", "enfant fantôme qui lèche l'huile des lampes à huile"),
	new Youkai("Abura-bō", "prend souvent la forme d'un bonze"),
	new Youkai("Abura-sumashi", "esprit"),
	new Youkai("Abura-tori", "kidnappe les enfants"),
	new Youkai("Ajari", "Tengu de la Province de Higo"),
	new Youkai("Akaatama", "esprit enfant faisant étalage de ses pouvoirs"),
	new Youkai("Akabeko", "vache rouge"),
	new Youkai("Akabōzu", "moine rouge"),
	new Youkai("Akamataa", "esprit serpent"),
	new Youkai("Akaname", "lèche la saleté des baignoires la nuit"),
	new Youkai("Akarinashisoba", "apparaît en général pendant la nuit la plus froide de l'hiver"),
	new Youkai("Akashita", "créature en forme de nuage noir aux griffes et aux dents acérées"),
	new Youkai("Akateko", "apparaît sous la forme d'une main rouge pendant d'un arbre"),
	new Youkai("Akki", "ogres ou démons responsables des diverses calamités"),
	new Youkai("Akkorokamui", "gigantesque poisson ou calamar du folklore de l'ethnie des Aïnous"),
	new Youkai("Akuma", "esprit maléfique"),
	new Youkai("Akurojin-no-hi", "flamme spectrale"),
	new Youkai("Amabie", "créature marine sortant de la mer pour faire une prédiction"),
	new Youkai("Amaburakosagi", "autre nom de Namahage"),
	new Youkai("Amamehagi", "autre nom de Namahage"),
	new Youkai("Amanojaku", "petit oni ayant le pouvoir de provoquer chez une personne ses désirs les plus sombres"),
	new Youkai("Amanozako", "déesse monstrueuse"),
	new Youkai("Amazake-babaa", "vieille femme qui frappe aux portes des maisons la nuit et qui demande avec une voix d'enfant de l'amazake"),
	new Youkai("Amefurikozō", "enfant étrange qui joue sous la pluie"),
	new Youkai("Amemasu", "créature des Aïnous ressemblant à un poisson ou une baleine"),
	new Youkai("Ameonna", "femme apparaissant sous la pluie"),
	new Youkai("Amikiri", "créature coupant les filets des pêcheurs"),
	new Youkai("Amorōnagu", "tennin (être céleste) de l'île d'Amami O-shima"),
	new Youkai("Anmo", "démon d'un rituel disciplinaire de la Préfecture d'Iwate"),
	new Youkai("Aoandon", "yōkai féminin qui apparaît lorsque la dernière bougie du Hyakumonogatari Kaidankai est éteinte"),
	new Youkai("Aobōzu", "moine bleu"),
	new Youkai("Aonyobo", "femme fantôme"),
	new Youkai("Aosagibi", "autre nom d'Aosaginohi"),
	new Youkai("Aosaginohi", "esprit héron"),
	new Youkai("Arikura-no-baba", "vieille femme avec des pouvoirs magiques"),
	new Youkai("Ashiaraiyashiki", "démon"),
	new Youkai("Ashimagari", "apparition ayant l'habitude de serrer très fort les jambes des passants, les empêchant de se déplacer"),
	new Youkai("Ashinaga-tenaga", "deux créatures inséparables à l'apparence humaine. Ashi-Naga a pourtant des jambes démesurées et de tout petits bras, tandis que son comparse Te-Naga a de longs bras et des jambes minuscules"),
	new Youkai("Asobibi", "feu spectral"),
	new Youkai("Ato-oi-kozō", "invisible, il suit les humains"),
	new Youkai("Ayakashi", "yōkai ressemblant à une anguille. Le mot est parfois utilisé comme terme générique pour les yōkai"),
	new Youkai("Ayakashi-no-ayashibi", "feu spectral"),
	new Youkai("Azukibabaa", "elle lave des sojas rouges au bord d'un ruisseau et attrape les passants pour les manger"),
	new Youkai("Azukihakari", "yōkai s'invitant dans les maisons"),
	new Youkai("Azukiarai", "autre nom d'Azukitogi"),
	new Youkai("Azukitogi", "il lave des sojas rouges au bord d'un ruisseau, mais il est inoffensif"),
	new Youkai("Bakebi", "feu spectral"),
	new Youkai("Bakedanuki", "tanuki farceur"),
	new Youkai("Bakedōrō", "fait perdre leur chemin aux voyageurs"),
	new Youkai("Bakefurugeta", "Tsukumogami de vieux socques en bois"),
	new Youkai("Bakeichō no sei", "esprit malveillant d'un ginkgo"),
	new Youkai("Bake-kujira", "baleine fantôme"),
	new Youkai("Bakemono", "autre nom des obake"),
	new Youkai("Bakeneko", "chat fantôme"),
	new Youkai("Bakezōri", "Tsukumogami d'une sandale de paille"),
	new Youkai("Bakki", "ogre de la sécheresse"),
	new Youkai("Baku", "créature qui se nourrit des rêves et des cauchemars"),
	new Youkai("Basabasa", "autre nom du Basan"),
	new Youkai("Basan", "coq crachant du feu"),
	new Youkai("Basho ni Sumu Rei", "esprit d'un lieu particulier"),
	new Youkai("Bashōnosei", "esprit du bananier"),
	new Youkai("Betobeto-san", "esprit qui suit les gens la nuit"),
	new Youkai("Binbōgami", ""),
	new Youkai("Bishagatsuku", "créature volant les âmes"),
	new Youkai("Biwa-bokuboku", "Tsukumogami d'un biwa"),
	new Youkai("Bōzudanuki", "moine tanuki"),
	new Youkai("Bunagayabi", "demeure au fond des rivières"),
	new Youkai("Bunbuku Chagama", ""),
	new Youkai("Buruburu", "esprit qui provoque des frissons"),
	new Youkai("Buzenbō", "Tengu du Mont Hiko"),
	new Youkai("Byakko", "version japonaise du Tigre blanc de l'ouest chinois"),
	new Youkai("Byōbunozoki", ""),
	new Youkai("Chōchin-kozō", "enfant apparaissant les nuits où il bruine"),
	new Youkai("Chōchin-obake", "lanterne fantôme de papier"),
	new Youkai("Chōchinbi", "flammes démoniaques qui apparaissent dans les sentiers entre rizières"),
	new Youkai("Daidarabotchi", ""),
	new Youkai("Daitengu", "grand Tengu"),
	new Youkai("Daki", "yōkai féminin vivant près d'une falaise"),
	new Youkai("Danzaburou-danuki", ""),
	new Youkai("Daranibō", "Tengu du Mont Fuji"),
	new Youkai("Datsue-ba", "démon à l'allure de vieille femme"),
	new Youkai("Dodomeki (en)", "Fantôme d'une femme pickpocket"),
	new Youkai("Dokuro no Kai", "ensemble de crânes qui finissent par se regrouper pour former un crâne immense"),
	new Youkai("Dōnotsura", ""),
	new Youkai("Dorotabō", "fantôme d'un vieil homme hantant les champs de riz"),
	new Youkai("Enenra", "monstre fait de fumée"),
	new Youkai("Enkō", "Kappa de Shikoku et de l'ouest Honshū"),
	new Youkai("Enshōjo", "autre nom de Hinoenma"),
	new Youkai("Eritate-goromo", ""),
	new Youkai("Fūbo", "autre nom du Furi"),
	new Youkai("Fuchi-saru", "singe des abysses, genre de kappa"),
	new Youkai("Fudagaeshi", "fantômes qui demandent de détacher les amulettes des portes extérieures"),
	new Youkai("Fuguramayōbi", "sorcière du Fugurama"),
	new Youkai("Fukikeshi babā", "vieille femme qui souffle sur les flammes des lampes pour les éteindre"),
	new Youkai("Fukurokatsugi", "il porte un grand sac pour enlever les enfants"),
	new Youkai("Fukuro-sage", "Tanuki de la préfecture de Nagano et de Shikoku"),
	new Youkai("Funayūrei", "esprits vengeurs"),
	new Youkai("Furaribi", "oiseau de feu"),
	new Youkai("Fūri", "ressemble à une loutre avec peu de poils sur le corps et est capable de voler"),
	new Youkai("Furusoma", "ce serait l'âme de quelqu'un mort écrasé par un arbre abattu"),
	new Youkai("Furutsubaki-no-rei", "vieux camélia réputé pour ses métamorphoses"),
	new Youkai("Furu-utsubo", "Tsukumogami du carquois d'un archer tué"),
	new Youkai("Fūseijou", "autre nom du Furi"),
	new Youkai("Futakuchi-onna", "femme avec deux bouches"),
	new Youkai("Futtachi", "animal devenant un yōkai en prenant de l'âge"),
	new Youkai("Gagoze", "démon qui attaque les jeunes prêtres du temple Gangō-ji"),
	new Youkai("Gaki", "démon de la faim"),
	new Youkai("Gangi-kozō", "vit près des côtes et dévore des poissons en commençant par la tête"),
	new Youkai("Gan no Sei", "esprit du cercueil"),
	new Youkai("Gaoro", "autre nom du kappa en pays Kishū (actuels départements de Wakayama et Mie)"),
	new Youkai("Garappa", "kappa de Kyūshū"),
	new Youkai("Garei", "esprit habitant les dessins, les peintures et les sculptures"),
	new Youkai("Gashadokuro", "yōkai ayant l'apparence d'un squelette géant"),
	new Youkai("Genbu", "la tortue noire du nord"),
	new Youkai("Giba", "yōkai s'attaquant aux chevaux"),
	new Youkai("Gongorōbi", "feu spectral dans la Préfecture de Niigata"),
	new Youkai("Goryō", "esprits vengeurs de la mort"),
	new Youkai("Gotokuneko", "chat allumant un feu"),
	new Youkai("Guhin", "autre nom de Tengu"),
	new Youkai("Gyūki", "autre nom d'Ushi-oni"),
	new Youkai("Hagedanuki", "tanuki chauve dans la Préfecture de Kagawa"),
	new Youkai("Hainu", "chien ailé"),
	new Youkai("Hakanohi", "feu spectral apparaissant au-dessus des tombes"),
	new Youkai("Hakuba", "cheval blanc qui porte chance"),
	new Youkai("Hakuja no Myojin", "divinité serpent blanc"),
	new Youkai("Hakutaku", "autre nom du Kutabe"),
	new Youkai("Hakuzōsu", "kitsune"),
	new Youkai("Hanako-san", "esprit d'une jeune fille qui hanterait les toilettes des écoles"),
	new Youkai("Hannya", "fantôme d'une femme revenue sur terre pour assouvir sa vengeance"),
	new Youkai("Happa Yōkai", "sort d’un pilier mal monté"),
	new Youkai("Haradashi", "yōkai aimant s'amuser"),
	new Youkai("Harionago", "elle accroche les hommes avec ses crochets au bout de ses cheveux ébouriffés"),
	new Youkai("Hashihime", "yōkai féminin qui apparaît près des ponts"),
	new Youkai("Hashira Yōkai", "esprit d'un pilier qui se plaint d’avoir été installé de travers"),
	new Youkai("Hasshaku", "fantôme d'une légende urbaine"),
	new Youkai("Hatahiro", "rancœur d'une femme qui se transforme en serpent"),
	new Youkai("Hataonryō", "spectres des corps abandonnés de ceux morts de faim"),
	new Youkai("Hayatarō", "chien qui tua le sarugami à Kamiina, Préfecture de Nagano"),
	new Youkai("Heikegani", "crabes étant la réincarnation de l'esprit des guerriers"),
	new Youkai("Heikō", "autre nom du Fūri"),
	new Youkai("Hibagon", "bigfoot japonais"),
	new Youkai("Hidarugami", "âme abandonnée qui affame les voyageurs en les étreignant au point de les empêcher de marcher"),
	new Youkai("Hiderigami", "yōkai provoquant la sécheresse"),
	new Youkai("Hihi", "Monstrueux babouin qui vit au plus profond des montagnes"),
	new Youkai("Hikeshibaba", "vieille femme qui éteint les lanternes"),
	new Youkai("Himamushi Nyūdō", "bonze qui lèche l'huile des lampes"),
	new Youkai("Hinode", "l'aube"),
	new Youkai("Hinoenma", "yōkai punissant les bonzes ayant eu un rapport sexuel avec des femmes"),
	new Youkai("Hi no Kuruma", "véhicule de feu qui vient chercher les âmes pour les emmener aux enfers"),
	new Youkai("Hitodama", "manifestation de l'esprit d'une personne décédée"),
	new Youkai("Hitotsu-Datara", "Il n'a qu'un œil et une jambe et défi les voyageurs au sumo"),
	new Youkai("Hitotsume-kozō", "petit garçon qui ne possède qu'un unique œil et une longue langue qui pend hors de sa bouche"),
	new Youkai("Hitotsume-nyūdō", ""),
	new Youkai("Hiyoribō", "esprit qui arrête la pluie"),
	new Youkai("Hizama", "coq annonciateur d'incendie"),
	new Youkai("Hoji", "esprit mauvais de Tamamo-no-Mae"),
	new Youkai("Hōkibō", "Tengu de la Montagne Daisen"),
	new Youkai("Hone-onna", "femme squelette"),
	new Youkai("Hōkō", "esprit canin"),
	new Youkai("Hōnade", "main pâle qui sort de l'obscurité et caresse les joues"),
	new Youkai("Honekarakasa", "parapluie en os"),
	new Youkai("Hone-onna", "succube"),
	new Youkai("Hō-ō", "phénix"),
	new Youkai("Hosode", "a l'apparence d'un bras très fin. Mauvais présage"),
	new Youkai("Hotoke", "personne décédée"),
	new Youkai("Hyakki Yakō", "procession de yōkai"),
	new Youkai("Hyakume", "yōkai aux cent yeux"),
	new Youkai("Hyōsube", "créature ressemblant à un singe et apparentée au kappa"),
	new Youkai("Hyōtan-kozō", "Tsukumogami d'une calebasse"),
	new Youkai("Ibaraki-dōji", "descendant d'un oni"),
	new Youkai("Ichiren-Bozu", "perles de prière animées"),
	new Youkai("Ichimoku-nyūdō", "il n’a qu’un œil énorme sur le dessus du crâne"),
	new Youkai("Ido-no-gami", "ressemble à un humain avec une tête de poisson-chat et est parfois confondu avec le kappa"),
	new Youkai("Ijarokorogashi", "Tsukumogami ayant l'apparence d'une passoire qui roule"),
	new Youkai("Ijū", "créature qui ressemble vaguement à un singe"),
	new Youkai("Ikiryō", "essentiellement un fantôme vivant, car il est l'âme d'une personne vivante à l'extérieur de leur corps"),
	new Youkai("Ikuchi", "serpent de mer qui se déplace au-dessus des bateaux en un arc tout dégoulinant d'huile"),
	new Youkai("Innenbi", "yōkai de feu lié à la rancune"),
	new Youkai("Inugami", "Chien-esprit créé, adoré et employé par une famille au moyen de la sorcellerie"),
	new Youkai("Inugami Gyoubu", "un type de tanuki"),
	new Youkai("Ippon ashi", "ogre unijambiste apparaissant à Obamine pour dévorer les voyageurs"),
	new Youkai("Ippon-datara", "grande créature de forme humaine, avec une seule jambe et un seul œil"),
	new Youkai("Ishinagenjo", "yōkai féminin de la mer"),
	new Youkai("Iso Onna", "femme attaquant les bateaux à l’amarre. Appelée aussi Isonagijo"),
	new Youkai("Isonade", "poisson semblable à un monstre marin avec une queue couverte de barbillon"),
	new Youkai("Issie", "monstre de lac"),
	new Youkai("Itaoni", "yōkai en forme de planche issu d'un conte"),
	new Youkai("Itsumade", "monstre cracheur de feu ressemblant à un oiseau"),
	new Youkai("Ittan-momen", "rouleau de coton possédé qui tente d'étouffer les gens en s'enroulant autour de leurs visages"),
	new Youkai("Iwana-bōzu", ""),
	new Youkai("Iyaya", "femme dont le visage semble être celui d'un vieil homme"),
	new Youkai("Jagoemon", "serpent géant"),
	new Youkai("Jakotsu-babaa", "vieille femme qui porte un serpent rouge dans sa main gauche et un serpent bleu dans la droite"),
	new Youkai("Jami", "monstre né de l'esprit de la montagne ou de la forêt. Il ressemble à une bête mais à un corps indistinct ou flou, voire presque invisible"),
	new Youkai("Janjanbi", "feu-follet qui apparaît dans le département de Nara"),
	new Youkai("Jashin", "dieu-serpent qui apparaît dans l’œuvre de Shigeru Mizuki"),
	new Youkai("Jatai", "obi qui s'est transformé en serpent. Tsukumogami"),
	new Youkai("Jibakurei", "esprit qui protège un endroit spécifique"),
	new Youkai("Jikininki", "fantômes qui dévorent les cadavres des humains"),
	new Youkai("Jinmenju", "arbre portant des fruits à visage humain"),
	new Youkai("Jinmenken", "Chien à visage humain apparaissant dans les légendes urbaines récentes"),
	new Youkai("Jirōbō", "Tengu des Montagnes Hira"),
	new Youkai("Jishin-namazu", "poisson-chat géant provoquant des tremblements de terres"),
	new Youkai("Jorōgumo", "femme araignée"),
	new Youkai("Josenbi", "feu spectral de la Préfecture de Shiga"),
	new Youkai("Jubokko", "arbre vampire"),
	new Youkai("Kabukiri kozō", "enfant avec une coupe au bol et vêtu d'un kimono peu ordinaire. Ce serait un tanuki déguisé"),
	new Youkai("Kabuso", "petit yōkai de la taille d'un chaton qui apparaît dans l'eau. Autre nom de Kawaso"),
	new Youkai("Kage-onna", "ombre d'une femme projetée par la lumière de la Lune sur la porte coulissante en papier de la maison"),
	new Youkai("Kahaku", "autre nom du kappa"),
	new Youkai("Kaifukibō", "yōkai présent dans les douves d'un château dans les montagnes du département d'Okayama"),
	new Youkai("Kaijin", "l'homme de la mer. Quand il monte à bord, le mieux à faire est de ne pas parler et de rester sans bouger, car autrement il produit une tempête et fait chavirer le bateau"),
	new Youkai("Kaiyō", "bateau fantôme"),
	new Youkai("Kakiotoko", "Les kakis que personne ne ramasse et qui pourrissent sur l’arbre peuvent se transformer en un genre de bonze"),
	new Youkai("Kakure Babā", "apparaît pour enlever les enfants qui jouent à cache-cache la nuit"),
	new Youkai("Kakurezato", "lieu magnifique où le temps s'écoule différemment que dans notre monde"),
	new Youkai("Kamaitachi", "yōkai associé au vent"),
	new Youkai("Kameosa", "Tsukumogami d'une vieille jarre"),
	new Youkai("Kamikiri", "petit être de la taille d'un enfant et une tête de corbeau"),
	new Youkai("Kanbari nyūdō", "esprit d'un moine qui espionne ceux qui vont aux toilettes"),
	new Youkai("Kanedama", "esprit de l’or. La maison qui le perd périt et celle qui l’accueille prospère"),
	new Youkai("Kanibōzu", "crabe de la taille de deux tatamis et qui dévorait les bonzes du temple proche de l'étang où il se cachait"),
	new Youkai("Kanko", "autre nom du Kuda-gitsune"),
	new Youkai("Kappa", "le kappa est réputé pour chercher à attirer les humains ou les chevaux dans l'eau"),
	new Youkai("Karasu Tengu", "Tengu"),
	new Youkai("Kasa-obake", "Tsukumogami d'une ombrelle ou d'un parapluie"),
	new Youkai("Kasha", "démon de félin qui descend du ciel et emporte les cadavres"),
	new Youkai("Kashanbo", "autre race de kappa"),
	new Youkai("Kataashijōrō", "yōkai volant une socque"),
	new Youkai("Katakirauwa", "yōkai des îles Amami. Il se présente sous la forme d'un petit cochon sans ombre"),
	new Youkai("Katasharin", "apparait la nuit avec un grincement de charrette"),
	new Youkai("Katawa-guruma", "type de wanyūdō avec une femme angoissée à la place de la tête de moine dans une roue brûlante"),
	new Youkai("Katsura-otoko", ""),
	new Youkai("Kawaakago", "esprit de la rivière qui fait semblant d'être un bébé qui pleure"),
	new Youkai("Kawabotaru", "feu follet qui apparaît la nuit dans le marais Inba du département de Chiba"),
	new Youkai("Kawahime", "yōkai ayant l'apparence d'une femme de grande beauté"),
	new Youkai("Kawajorō", "prostituée de la rivière"),
	new Youkai("Kawako", "yōkai qui tire les enfants par les pieds au bord des ruisseaux"),
	new Youkai("Kawa Otoko", "yōkai aquatique ayant une apparence humaine"),
	new Youkai("Kawatarō", "c’est sous ce nom qu’était connu le plus commun des kappa"),
	new Youkai("Kawa-uso", "loutre surnaturelle ayant le don de métamorphose"),
	new Youkai("Kawa-zaru", "on le surnomme « singe du fleuve » à cause de son aspect, mais il appartient à la famille des kappa"),
	new Youkai("Kayatsuridanuki", "Tanuki qui tourmente les passants la nuit en tendant une moustiquaire en travers du chemin"),
	new Youkai("Kazenbō", "fantôme d'un moine brûlé qui apparaît sur le mont Toribe près de Kyōto"),
	new Youkai("Kechibi", "feu spectral"),
	new Youkai("Kejōrō", "yōkai avec de longs cheveux flottants qui a l'apparence d'une prostituée et que l'on peut croiser dans les quartiers chauds"),
	new Youkai("Keneō", "vieillard assis dans le monde souterrain qui pèse les vêtements qui lui sont donnés par datsue-ba"),
	new Youkai("Kerakeraonna", "esprit prenant l'apparence d'une femme gigantesque d'environ 40 ans vêtue d'un kimono"),
	new Youkai("Kesaran-pasaran", "mystérieuse créature blanche duveteuse"),
	new Youkai("Keukegen", "créature entièrement faite de cheveux"),
	new Youkai("Kijimuna", "esprits malicieux habitant les grands banyans"),
	new Youkai("Kijo", "ogresse qui mijote de l'humain dans sa marmite"),
	new Youkai("Kimjin", "genre de kappa"),
	new Youkai("Kimotori", "yōkai apparaissant dans les cimetières après une cérémonie funéraire. Proche du Kasha"),
	new Youkai("Kirin", "animal composite fabuleux issu de la mythologie chinoise possédant plusieurs apparences"),
	new Youkai("Kitsune", "esprit renard"),
	new Youkai("Kitsunebi", "feu de kitsune"),
	new Youkai("Kitsune-Tsuki", "fait d'être possédé par un esprit renard"),
	new Youkai("Kitsune no yomeiri", "Noce de renards"),
	new Youkai("Kiyohime", "femme éconduite et jalouse se transformant en serpent pour poursuivre son ancien amant"),
	new Youkai("Kō Bozu", "les petits gosses ressemblant à la Zashiki warashi"),
	new Youkai("Kodama", "esprit vivant dans un arbre centenaire"),
	new Youkai("Koemonbi", "autre nom donné au Chōchinbi"),
	new Youkai("Koike Babā", "nom d'une vieille chatte géante qui chassait l'humain en compagnie d'une meute de loups"),
	new Youkai("Kokakuchō", "l'oiseau ubume"),
	new Youkai("Kokuribaba", "terrible sorcière démon qui mange la peau des cadavres"),
	new Youkai("Koma-inu", "gardiens des sanctuaires"),
	new Youkai("Konaki-Babâ", "elle a le corps d’un bébé mais le visage d’une vieille. Elle est aussi très lourde quand on essaie de la porter"),
	new Youkai("Konaki-Jijii", "prend l'apparence d'un bébé pour piéger les voyageurs"),
	new Youkai("Konoha Tengu", "Tengu des feuilles"),
	new Youkai("Koropokkuru", "nains habitant sous terre et dans les tiges des feuillages de tussilages ou de pétasites"),
	new Youkai("Kosagi", "yōkai de Shikoku qui subjugue ceux qui traînent des heures sous le kotatsu"),
	new Youkai("Kosamebō", "on ne le voit que quand tombe une pluie fine"),
	new Youkai("Kosenjōbi – feu spectral flottant au-dessus d'anciens champs de combats"),
	new Youkai("Kosode-no-te", "Tsukumogami d'un kimono à manches courtes ayant ses propres mains"),
	new Youkai("Kosokosoiwa", "Rocher hanté qui murmure"),
	new Youkai("Kōtenbō", "Tengu de Katsuragi"),
	new Youkai("Ko-Tengu", "petit Tengu"),
	new Youkai("Kōtōri bōzu", "il dévorent les enfants qui se baladent en fin de soirée"),
	new Youkai("Kotorizo", "yōkai du département de Shimane qui enlevait les enfants pour en extraire de l'huile"),
	new Youkai("Kowai", "yōkai avare et goinfre"),
	new Youkai("Kubikajiri", "voyageur à qui on a refusé de donner à manger et finissant par mourir de faim. Il vient sur la tombe de celui qui lui a refusé un peu de nourriture pour exhumer sa tête et la dévorer"),
	new Youkai("Kubireoni", "esprit qui possède les humains et les pousse au suicide"),
	new Youkai("Kubitsuridanuki", "tanuki doué pour faire pendre les gens"),
	new Youkai("Kuchisake-onna", "femme défigurée par un mari jaloux et changée en un esprit malin avide de reproduire par vengeance le même acte dont elle a été victime"),
	new Youkai("Kuda-gitsune", "petit animal ressemblant à un renard et utilisé en sorcellerie"),
	new Youkai("Kudan", "veau qui naît avec le visage d'un homme. Il prédit une catastrophe dès sa naissance et meurt après avoir fait sa prédiction"),
	new Youkai("Kumo yōkai", "démon araignée"),
	new Youkai("Kuneyusuri", "yōkai qui agite les haies"),
	new Youkai("Kurabebi", "feu spectral. Apparaît par paire, flottant au-dessus de la mer"),
	new Youkai("Kurabokko", "esprit-gardien du grenier"),
	new Youkai("Kurage-no-hinotama", "méduse qui flotte dans les airs comme une boule de feu"),
	new Youkai("Kurayamime", "yōkai avec un œil sur chaque genou qui lui permet de marcher sans problème dans l'obscurité"),
	new Youkai("Kurobotoke", "apparaît sous la forme d'un gentil petit enfant, et il se met à voler en tout sens quand il n'est pas content"),
	new Youkai("Kurobōzu", "il aspire le souffle des humains endormis et lèche leurs bouches"),
	new Youkai("Kurodama", "se présente comme une masse noire. Il s'introduit dans les maisons les nuits d'été et oppresse les humains dans leurs sommeils"),
	new Youkai("Kurokamikiri", "il ne coupe que les cheveux noirs"),
	new Youkai("Kurote", "hante les toilettes des maisons. Sa main sort du trou pour caresser les fesses des femmes"),
	new Youkai("Kurozuka", "célèbre sorcière cannibale de Adachigaharaa"),
	new Youkai("Kutabe", ""),
	new Youkai("Kuzunoha", "kitsune qui serait la mère d'Abe no Seimei"),
	new Youkai("Kyōkotsu", "personnage squelettique qui émerge d'un puits"),
	new Youkai("KyonshĪ", "version japonaise du vampire sautant chinois appelé jiangshi"),
	new Youkai("Kyōrinrin", "rouleaux de papiers hantés"),
	new Youkai("Kyūbi-no-kitsune", "kitsune à neuf queues"),
	new Youkai("Kyūketsuki", "vampire japonais"),
	new Youkai("Kyūso", "vieille souris qui dévore les chats"),
	new Youkai("Maikubi", "têtes dansantes"),
	new Youkai("Makura-gaeshi", "esprit qui vous prend l'oreiller de dessous la tête pendant votre sommeil et le met sous vos pieds à la place"),
	new Youkai("Mamedanuki", "tanuki aimant gonfler ses testicules et les étaler pour berner les humains"),
	new Youkai("Mannen-dake", "monstre-bambou qui se nourrit des âmes des voyageurs perdus qui campent dans les bambouseraies"),
	new Youkai("Mayoiga", "maison que les voyageurs égarés trouvent parfois en montagnes"),
	new Youkai("Mekurabe", "autre nom du Dokuro no Kai"),
	new Youkai("Menreiki", "esprits qui habitent dans des masques"),
	new Youkai("Meshikui yūrei", "yūrei qui hante les maisons et mange la nourriture comme un humain"),
	new Youkai("Miage-nyūdō", "yōkai avec une tête de bonze antipathique qui apparaît dans les chemins"),
	new Youkai("Mikaribaba", "Elle se rend chez les gens et frappe à la porte de chaque maison et demande : Prêtez-moi une pèlerine de paille !"),
	new Youkai("Mikoshi-nyūdō", "autre nom de Miage-nyūdō"),
	new Youkai("Minkirauwa", "yōkai des îles Amami, il se présente sous la forme d'un petit cochon qui se faufile entre les jambes des passants"),
	new Youkai("Minogame", "tortue légendaire qui aurait vécu 10 000 ans"),
	new Youkai("Mintsuchikamui", "genre de kappa"),
	new Youkai("Misaki", "terme générique pour l'existence des différents esprits au Japon"),
	new Youkai("Mishigē", "Tsukumogami d'une spatule à riz"),
	new Youkai("Mizoidashi", "mort hantant un fossé"),
	new Youkai("Mizuchi", "dangereux dragon marin ou une créature légendaire ressemblant à un serpent"),
	new Youkai("Mōki", "ravage les cimetières pour se repaître des têtes des cadavres quand il n'a pas trouvé assez d'offrandes"),
	new Youkai("Mokumokuren", "esprit habitant les shōji (les murs et les portes coulissantes en papier)"),
	new Youkai("Momijigari", "femme-démon du mont Togakushi"),
	new Youkai("Momonjii", "si on le rencontre, on est sûr de tomber malade"),
	new Youkai("Mononoke", "Esprits-vengeurs. Autre nom donné aux yōkai"),
	new Youkai("Morinji-no-kama", "autre nom pour Bunbuku Chagama, le tanuki-théière"),
	new Youkai("Mōryō", "yōkai qui dévore les cadavres"),
	new Youkai("Muitichigoro", "il tue les gens en leur passant sous les jambes"),
	new Youkai("Mujina", "petit animal à poil, réputé maître dans l’art de la transformation et dans l’ensorcellement des humains"),
	new Youkai("Mu-onna", ""),
	new Youkai("Musabi", "feu spectral du département de Miyazaki. Il apparaît par paire les soirs de pluie"),
	new Youkai("Myōbu", "titre parfois donné au kitsune"),
	new Youkai("Myōgibō", "Tengu du Mont Ueno"),
	new Youkai("Nabigē", "Tsukumogami d'une louche"),
	new Youkai("Nagomi-takuri", "équivalent de Namahage dans la région de Heii, Préfecture d'Iwate"),
	new Youkai("Naigubu", "Tengu du Mont Takao"),
	new Youkai("Naki Babā", "la vieille pleureuse. Si elle vient pleurer à la porte d'une maison, le malheur va frapper ce foyer"),
	new Youkai("Namahage", "Démons effrayants les enfants lors du rituel de purification des âmes du peuple ayant lieu le 31 décembre dans le département d'Akita"),
	new Youkai("Namazu", "poisson-chat géant vivant dans la vase des profondeurs de la terre, et sur l'échine duquel repose le Japon"),
	new Youkai("Name Onna", "femme qui lèche les hommes de partout"),
	new Youkai("Nando-baba", "esprit d'une vieille-femme qui se cache sous le sol des greniers abandonnés"),
	new Youkai("Narikama", "Tsukumogami d'une vieille bouilloire"),
	new Youkai("Nebutori", "maladie qui sert à donner une leçon aux femmes qui dorment trop"),
	new Youkai("Nekomata", "bête des montagnes crainte et dont on disait qu'elle attaquait, tuait et mangeait les humains qui erraient trop profondément dans les coins reculés"),
	new Youkai("Nekomusume", "chat prenant la forme d'une fille"),
	new Youkai("Nikonbō no Hi", "feu spectral d'Ōsaka"),
	new Youkai("Nikusui", "apparaît sous l'apparence d'une jeune femme et suce toute la chair du corps de ses victimes"),
	new Youkai("Ningyo", "créature marine"),
	new Youkai("Ningyō no Rei", "esprit d'une poupée"),
	new Youkai("Ninko", "esprit-renard invisible"),
	new Youkai("Ninmenju", "arbre qui pousse dans les cavités des montagnes reculées, avec des fleurs qui ressemblent à des visages humains"),
	new Youkai("Nobi", "feu spectral"),
	new Youkai("Nobiagari", "plus on le regarde, plus il grandit"),
	new Youkai("Nobusuma", "Mur surnaturel ou monstrueux écureuil volant selon les sources"),
	new Youkai("Nodeppō", "il se tient perché sur un arbre et exhale une espèce de chauve-souris contre les promeneurs sur les sentiers"),
	new Youkai("Noderabō", "étrange créature qui se tient près de la cloche d'un temple et qui la fait sonner le soir"),
	new Youkai("Nogitsune", "kitsune maléfique"),
	new Youkai("Noppera-bō", "fantôme sans visage"),
	new Youkai("Notsugo", "spectre errant d'un nourrisson"),
	new Youkai("No'uma", "yōkai à un seul œil de la région d'Iwami"),
	new Youkai("Nozuchi", "serpent–yōkai, le rencontrer est un mauvais présage"),
	new Youkai("Nue", "chimère qui apporte la malchance et la maladie"),
	new Youkai("Nukekubi", "sa tête se détache de son corps et vole librement, attaquant et mordant les personnes"),
	new Youkai("Nuppefuhofu", "yōkai qui n’est qu’un bloc de chair. Il apparaîtrait la nuit dans un temple en ruine"),
	new Youkai("Nuppeppō", "autre nom du Nuppefuhofu"),
	new Youkai("Nurarihyon", "vieil homme avec une tête en forme de gourde et portant un kesa. Il est parfois indiqué qu'il est le chef des yōkai"),
	new Youkai("Nure-onna", "femme serpent qui apparaît sur les rives des rivières et les plages"),
	new Youkai("Nuribō", "il apparaît sans crier gare sur une paroi abrupte"),
	new Youkai("Nuribotoke", "il nettoie les objets décoratifs des autels domestiques"),
	new Youkai("Nurikabe", "apparaît le plus souvent la nuit, sous la forme d'un grand mur pour bloquer les promeneurs"),
	new Youkai("Nurunuru Bōzu", "dès qu'il trouve un humain, il se colle à lui et le frotte de son corps huileux"),
	new Youkai("Nyoijizai", "Tsukumogami"),
	new Youkai("Nyūbachibō", "Tsukumogami d'un mortier"),
	new Youkai("Nyūdō-bōzu", "petit bonze de moins de 90 cm mais plus on le regarde, plus il pousse en hauteur"),
	new Youkai("Nyūnaisuzume", "fantôme ayant l'apparence d'un moineau"),
	new Youkai("Obake", "créatures ayant la capacité de se métamorphoser"),
	new Youkai("Obariyon", "esprit cherchant à se faire porter par ses victimes"),
	new Youkai("Obora", "feu spirituel d'une personne décédée"),
	new Youkai("Oboro-guruma", "char à bœufs avec un énorme visage humain sur le front qui apparaît les brumeuses nuits de pleine lune"),
	new Youkai("Ōgama", "crapaud géant"),
	new Youkai("Ōgumo", "araignée géante qui provoque des maladies et boit le sang"),
	new Youkai("Ohaguro-bettari", "yōkai féminin aux dents toutes noires"),
	new Youkai("Oigakari", "se jette sur les passants pour les empêcher de passer"),
	new Youkai("Oiwa", "fantôme d'une femme qui fut assassinée par son mari"),
	new Youkai("Ōkaburo", "yōkai féminin"),
	new Youkai("Ōkami", "loup"),
	new Youkai("Ōkamuro", "visage géant qui apparaît sur la porte"),
	new Youkai("Okiku", "fantôme d'une jeune servante qui compte les assiettes"),
	new Youkai("Okikumushi", "monstre-ver qui apparaît sur les lieux où aurait été tué une jeune fille"),
	new Youkai("Ōkiseru", "la grande pipe, serait un tanuki métamorphosé"),
	new Youkai("Okkeruipe", "yōkai péteur"),
	new Youkai("Ōkubi", "visage d'une femme énorme qui apparaît dans le ciel"),
	new Youkai("Okurichōchin", "la lanterne qui raccompagne"),
	new Youkai("Okuri-inu", "chien qui accompagne les voyageurs, soit pour les protéger soit pour les dévorer selon les versions"),
	new Youkai("Okuri-itachi", "belette qui suit les gens la nuit"),
	new Youkai("Okuri-ōkami", "loup qui accompagne"),
	new Youkai("Ōmagatoki", "le crépuscule, moment où se rassemble les yōkai, yūrei et autres créatures"),
	new Youkai("Omoi", "démon qui perçoit tout ce que les humains ont dans la tête"),
	new Youkai("Ōmukade", "mille-pattes géant mangeant des humains"),
	new Youkai("Oni", "créature ayant une forme humanoïde et une taille gigantesque"),
	new Youkai("Onibaba", "monstre qui se cache sous les attributs d'une vieille femme pour attaquer et dévorer les humains"),
	new Youkai("Onibi", "feu spectral"),
	new Youkai("Onihitokuchi", "oni ayant un seul œil et tuant les humains"),
	new Youkai("Onikage", "cheval maléfique"),
	new Youkai("Onikuma", "ours monstrueux"),
	new Youkai("Onmoraki", "démon-oiseau créé à partir des esprits de corps fraîchement morts"),
	new Youkai("Onmyōdō", "magie traditionnelle japonaise"),
	new Youkai("Onmyoji", "magicien pratiquant l'onmyōdō"),
	new Youkai("Onryō", "fantôme vengeur"),
	new Youkai("Ōnyūdō", "bonze géant"),
	new Youkai("Osabi", "lumières fantômes"),
	new Youkai("Ōsakabe", "il habite le château de Himeji"),
	new Youkai("Otoroshi", "créature velue assise en haut des torii et dont on pense qu'elle est la gardienne du sanctuaire"),
	new Youkai("Raijū", "compagnon de Raiden, le dieu shintô de la foudre"),
	new Youkai("Reiki", "yōkai hantant le temple Gangō-ji"),
	new Youkai("Rōjinbi", "apparaît souvent par une nuit pluvieuse au fond de la montagne"),
	new Youkai("Rokurokubi", "yōkai dont le cou s'étire et la tête libérée s'en va accomplir ses mauvaises actions"),
	new Youkai("Ryū", "dragon japonais"),
	new Youkai("Ryūhōbō", "Tengu du Mont Kōmyō"),
	new Youkai("Ryūtō", "feu mystérieux qui apparaît sur la mer"),
	new Youkai("Saburō", "Tengu du Mont Iizuna"),
	new Youkai("Saezuriishi", "pierre qui savait parler la langue humaine et pouvait donner des informations à ceux qui savait écouter"),
	new Youkai("Sagamibō", "Tengu de Shiramine"),
	new Youkai("Sagari", "yūrei qui naît lorsqu'un cheval meurt au pied d'un arbre"),
	new Youkai("Sakabashira", "pilier qui a été installé à l'envers ce qui fait que la maison est hantée"),
	new Youkai("Sakaidori", "autre nom donné parfois au Konoha Tengu"),
	new Youkai("Samebito", "yōkai humanoïde possédant une peau noire et des yeux verts luminescents"),
	new Youkai("Sanchū no yūreiyashiki", "Parfois dans la montagne, on peut apercevoir une maison, toutes lumières allumées, où des yurei chantent et dansent"),
	new Youkai("Sanjakubō", "Tengu du Mont Akiba"),
	new Youkai("Sankai", "les fausses couches et les naissances trop tôt créèrent la légende des sankai"),
	new Youkai("Sankibō", "Tengu d'Itsukushima"),
	new Youkai("Sankichioni", "inconnu apparaissant pour boire comme un trou, puis repartait sans payer. La nuit, on trouvait toujours en compensation, devant sa porte, du bon bois pour un valeur supérieure de ce qui avait été bu"),
	new Youkai("Sanrei", "spectre de la montagne"),
	new Youkai("Sansei", "esprit de la montagne appréciant le sel"),
	new Youkai("Sanshō", "yōkai unijambiste que l'on trouve dans des montagnes de Chine"),
	new Youkai("Sarakazoe", "feu follet qui sort du puits et compte les assiettes"),
	new Youkai("Sarugami", "esprit-singe maléfique"),
	new Youkai("Satori", "vit en montagnes et est capable de lire dans l'esprit des gens"),
	new Youkai("Sazae-oni", "turbot cornu devenu yōkai à l’âge de trente ans"),
	new Youkai("Seiryū", "dragon azur de l’est"),
	new Youkai("Sekiyō", "prend apparence d'une femme de grande beauté et propose des massages. Sa victime se retrouve avec le dos lacéré"),
	new Youkai("Seko", "genre de kappa à l'apparence d'un enfant"),
	new Youkai("Sēma", "autre nom du Kijimunā"),
	new Youkai("Senjōgabi", "autre nom du Kosenjōbi"),
	new Youkai("Senpoku-Kanpoku", "grenouille à visage humain guidant les âmes nouvellement décédées vers le cimetière"),
	new Youkai("Sesshō-seki", "pierre tueuse hantée par l'esprit qui posséda Tamamo-no-Mae"),
	new Youkai("Setotaishō", "guerrier composé de morceaux de poteries en terre jetés"),
	new Youkai("Shachihoko", "monstre marin d'origine chinoise ayant l'apparence d'un poisson avec une tête de tigre"),
	new Youkai("Sha Gojō", "monstre marin de La Pérégrination vers l'Ouest, souvent compris comme un kappa au Japon"),
	new Youkai("Shibaemon-tanuki", "tanuki de lîle d'Awaji"),
	new Youkai("Shibagaki", "lance des cailloux sur les passants au détour d'un chemin"),
	new Youkai("Shibaten", "yōkai, passionné de sumo, d’environ un mètre de haut, vivant à proximité des plans d’eau"),
	new Youkai("Shichinin misaki", "groupe de fantômes"),
	new Youkai("Shidaidaka", "quand on le regarde d'en bas, il grandit, et quand on le regarde de haut, il rapetisse"),
	new Youkai("Shirōneri", "moustiques possédés qui s'incrustent dans les vêtements poussiéreux"),
	new Youkai("Shikijirō", "yōkai vivant dans les mines qui sont exploitées depuis une centaine d'années"),
	new Youkai("Shikigami", "esprits invoqués pour servir un adepte du onmyōdō"),
	new Youkai("Shiki-ōji", "autre nom du Shikigami"),
	new Youkai("Shikome", "sorcières envoyées par Izanami pour faire du mal à Izanagi"),
	new Youkai("Shin", ""),
	new Youkai("Shinkiro", "palourde qui a grandi hors de proportions à tel point qu'elle remonte à la surface de la mer et créée un mirage des villes lointaines"),
	new Youkai("Shiranui", "feu follet qui apparaît la nuit sur la mer"),
	new Youkai("Shirikodama", "balle mythique qui contiendrait l'âme du kappa"),
	new Youkai("Shirime", "étrange yōkai avec un œil à la place de l'anus"),
	new Youkai("Shiro-bōzu", "esprit blanc sans-visage"),
	new Youkai("Shirodokuri", "le cruchon blanc, serait un tanuki métamorphosé"),
	new Youkai("Shiro-uneri", "vieux torchon usé ou serpillière apparaissant sous la forme d'un dragon"),
	new Youkai("Shiryō", "esprit d'une personne décédée"),
	new Youkai("Shisa", "considérés comme des protections repoussant les forces maléfiques. Version d'Okinawa des shishi"),
	new Youkai("Shishi", "paire de chiens-lions qui gardent l'entrée des temples"),
	new Youkai("Shisuzu", ""),
	new Youkai("Shōjō", "sorte d’esprit de mer japonais avec un visage et des cheveux rouge et un penchant pour l’alcool"),
	new Youkai("Shōkera", "créature qui jette un œil par la lucarne des vieilles maisons"),
	new Youkai("Shōki", "exorciste légendaire originaire de Chine"),
	new Youkai("Shōki", "dans un des contes de Shigeru Mizuki, Shôki est un petit ogre"),
	new Youkai("Shokuin", "apparaît sous la forme d'un dragon rouge à visage humain"),
	new Youkai("Shōrōkaze", "vent maléfique qui souffle le matin du 16 août, pendant la fête des morts sur l'île Goto à Nagasaki"),
	new Youkai("Shunoban", "goule au visage rouge qui surprend les gens"),
	new Youkai("Shussebora", "conque marine transformée en dragon après avoir vécu trois mille ans à la montagne, trois mille ans dans un village, puis trois mille ans dans la mer"),
	new Youkai("Shuten-dōji", "oni assoiffé de sang ayant kidnappé une princesse célèbre"),
	new Youkai("Sodehiki-kozō", "esprit invisible qui tire sur les manches"),
	new Youkai("Sōgenbi", "fantôme"),
	new Youkai("Sōjōbo", "roi mythique des Tengu"),
	new Youkai("Son Gokū", "Roi des Singes de La Pérégrination vers l'Ouest"),
	new Youkai("Soragami", "démon d'un rituel disciplinaire ayant l'apparence d'un Tengu"),
	new Youkai("Soraki-gaeshi", "son d'arbres étant abattus, alors que plus tard aucun ne semblent avoir été coupés"),
	new Youkai("Sorobanbōzu", "fantôme portant un boulier"),
	new Youkai("Sōtangitsune", "Renard célèbre de Kyōto, tiré d'une légende d'une cérémonie du thé qui date probablement de la première moitié du XVIIe siècle"),
	new Youkai("Suiko", "autre nom du kappa"),
	new Youkai("Suisei no Okina", "esprit ayant l'apparence d'un vieillard habillé de vert. Il apparaît la nuit dans les maisons avant de disparaître dans un plan d'eau"),
	new Youkai("Sukima Onna", "femme de l'interstices"),
	new Youkai("Sunafurashi", "serait un tanuki qui lance du sable sur les passants"),
	new Youkai("Sunakake Baba", "sorcière près d’un sanctuaire shinto qui lance du sable sur les passants"),
	new Youkai("Suneka", "vient ôter les tâches de son sur les jambes, qui sont signes de paresse"),
	new Youkai("Sunekosuri", "créature ressemblant à un chat ou un petit chien et se frottant contre les jambes des gens la nuit"),
	new Youkai("Suppon-no-yūrei", "fantômes de tortues"),
	new Youkai("Susuke Chōchin", "lors des nuits pluvieuses, il volerait avec désinvolture autour d'un lieu où les corps sont lavés pour l'enterrement"),
	new Youkai("Suzaku", "oiseau vermillon du sud"),
	new Youkai("Suzumeokuri", "moineau accompagnateur. Quand on marche la nuit, on aperçoit la lanterne de ce soi-disant moineau, suivie parfois d'un pépiement"),
	new Youkai("Suzuriishi", "pierre remplie d'eau. Si on essaie de vider l'eau, un orage se produit, même quand le ciel est parfaitement dégagé"),
	new Youkai("Suzuri no Sei", "Tsukumogami d'un encrier"),
	new Youkai("Suzuri-no-tamashii", "Tsukumogami d'une pierre à encre"),
	new Youkai("Taiba", "démon des chevaux. Rend les chevaux fous"),
	new Youkai("Taimatsumaru", "Tengu enveloppé de flammes"),
	new Youkai("Taka Nyūdō", "bonze géant de plus de trois mètres qui apparaît de nuit pour faire peur aux passants dans le département d'Aichi"),
	new Youkai("Taka-onna", "monstre féminin qui s'étire pour regarder au deuxième étage d'une maison"),
	new Youkai("Takekiridanuki", "tanuki coupeur de bambous"),
	new Youkai("Takiwaro", "yōkai qui vit dans les falaises sous l'apparence d'un enfant"),
	new Youkai("Takurōbi", "yōkai de feu qui apparaît par paire et flottent sur les eaux"),
	new Youkai("Tamamo-no-Mae", "renard à neuf queues maléfique"),
	new Youkai("Tankororin", "kaki que personne ne ramasse et qui pourrit sur l’arbre, il se transforme en un genre de bonze"),
	new Youkai("Tanuki", "maître des déguisements, il est réputé pouvoir changer de forme à volonté"),
	new Youkai("Tanukibayashi", "orchestre des tanuki, Tanuki qui se tapent sur le ventre"),
	new Youkai("Tanuki-bi", "feu de tanuki"),
	new Youkai("Tarōbō", "Tengu du Mont Atago"),
	new Youkai("Tatami-tataki", "yōkai qui fait du bruit la nuit comme s’il battait des tatamis"),
	new Youkai("Tatarimokke", "âme qui sort de la bouche d'un bébé mort"),
	new Youkai("Tatekurikaeshi", "espèce de pilon qui apparaît et renverse les passants qui le croisent"),
	new Youkai("Tatsu", "un des noms donnés au dragon japonais"),
	new Youkai("Tearaioni", "ogre qui se lave les mains"),
	new Youkai("Tecchi", "yōkai féminin de l'île d'Hachijō. Elle fait disparaître des humains ou les fait se perdre et errer dans la montagne toute la nuit"),
	new Youkai("Tegatagasa", "monstre apparaissant caché dans un gros nuage noir encerclé d'éclairs"),
	new Youkai("Teke Teke", "esprit vengeur d'une jeune femme"),
	new Youkai("Ten", "martres qui forment une colonne qui émet une flamme mystérieuse"),
	new Youkai("Tenaga", "autre moitié d'Ashinaga"),
	new Youkai("Tenaga Babā", "sorcière aux cheveux blancs qui habite au fond de l'eau. Ses longs bras sortent et font peur aux enfants"),
	new Youkai("Tenbi", "feu-follet apparaissant en période de sécheresse"),
	new Youkai("Tengu", "ils sont traditionnellement représentés avec des caractéristiques à la fois humaines et aviaires"),
	new Youkai("Tengubi", "feu-follet qui apparaît dans le préfecture de Shizuoka"),
	new Youkai("Tenji", "yōkai qui habite dans une grotte de l'île d'Hachijō. C'est un yōkai joueur et farceur"),
	new Youkai("Tenjōkudari", "apparaît sous la forme d'une vieille femme pendue au plafond, la tête en bas"),
	new Youkai("Tenjōname", "il lèche le plafond, mais il ne le nettoie pas. Au contraire, il y laisse des traces de salive"),
	new Youkai("Tenka", "boule de feu"),
	new Youkai("Tenko", "renard céleste, le plus puissant des kitsune"),
	new Youkai("Tenmaru", "yōkai de Kanra dans le département de Gunma, ressemblant au Kasha"),
	new Youkai("Tennin", "être céleste danseur, chanteur et musicien"),
	new Youkai("Te-no-me", "yōkai né d’une rancœur, il a les yeux sur la paume de ses mains"),
	new Youkai("Tenzurushi", "espèce de bébé qui descend du plafond, la nuit"),
	new Youkai("Teratsutsuki", "onryō d'un homme qui a vécu au VIe siècle, Mononobe no Moriya"),
	new Youkai("Tesso", "prêtre dédaigné par l'empereur et qui, selon la légende, devient un essaim de rats qui sème la dévastation dans le temple rival"),
	new Youkai("Tetsuso", "autre variante de l'orthographe de Tesso"),
	new Youkai("Todomeki", "a l'apparence d'une femme au corps couvert d’yeux. Elle vole l'argent dans les poches des gens"),
	new Youkai("Tōfu-kozō", "a l'apparence d'un enfant avec un grand chapeau de jonc tenant un plateau de tōfu à la main"),
	new Youkai("Toire-no-Hanakosan", "légende urbaine japonaise décrivant un fantôme hantant les toilettes des écoles"),
	new Youkai("Tomokazuki", "apparaît au fond de la mer du pays Shima (actuelle Préfecture de Mie) et effraie les plongeuses qui pêchent les coquillages en apnée"),
	new Youkai("Tōrimono", "apparaît sous la forme d'un vieillard aux cheveux blancs et rend fou ceux qui l'observent"),
	new Youkai("Tōtetsu", "nom japonais donné au monstre Taotie de Chine"),
	new Youkai("Tsuchigumo", "araignée géante"),
	new Youkai("Tsuchikorobi", "fait peur aux voyageurs qui passent les cols en montagnes"),
	new Youkai("Tsuchinoko", "cryptide légendaire du Japon qui ressemble à un serpent"),
	new Youkai("Tsuitatedanuki", "se montre la nuit, sous l'apparence d'un paravent géant, pour entravait le chemin"),
	new Youkai("Tsujigami", "démon qui se manifeste aux croisements des chemins"),
	new Youkai("Tsukinowaguma", "ours légendaire"),
	new Youkai("Tsukuba-hōin", "Tengu de la Province d' Hitachi"),
	new Youkai("Tsukumogami", "objet qui peut acquérir une âme et s'animer s'il atteint son 100ème anniversaire"),
	new Youkai("Tsurara-onna", "femme des stalactites de glace"),
	new Youkai("Tsurubebi", "feu bleuâtre qui ondule çà et là, suspendu à une branche d’arbre"),
	new Youkai("Tsurube-otoshi", "monstre qui se laisse tomber du haut des arbres")
];

/*
    Uba Ga Hi - feu follet.
    Ubume - esprit d'une femme morte alors qu'elle était enceinte, ou durant l'accouchement.
    Ubumedori - autre nom du Kokakuchō.
    Uma-no-ashi - jambe d'un cheval qui pend à un arbre et donne des coups de pied aux passants.
    Umiama - yōkai féminin qui apparaît devant une plongeuse (si elle est seule).
    Umi-bōzu - vit en haute mer où il capture les bateaux des pécheurs et noie ceux qui ont l'audace de lui adresser la parole.
    Umifujin - "dame de la mer", autre nom de Umi-nyōbō.
    Umihôshi - "sage des mers", autre nom de Umibōzu.
    Umi Kozô - a la forme d'un enfant de trois ans, tout poilu, vêtu d'une sorte de pèlerine de paille.
    Uminingyo - Race de sirène originaire de Chine.
    Umi-nyōbō - monstre marin femelle qui vole le poisson.
    Umi Nyûdô - "moine des mers", autre nom de Umibōzu.
    Umi Onna - les pêcheurs l'aperçoivent parfois en mer. On dit qu'elle est capable de marcher sur l'eau.
    Umioshô - yōkai marin à la forme d'une tortue géante.
    Umizatō - aveugle qui marche à la surface de la mer. Il appelle les bateaux qui passent pour les faire sombrer ou les avaler.
    Ungaikyō - miroir ayant la capacité de révéler la réelle nature d’un démon ou d’un humain possédé.
    Uryû - dragon de la pluie.
    Ushi-no-tokimairi - procédé de malédiction traditionnel au Japon, ainsi appelé parce qu'il est mené au cours de l'heure du bœuf.
    Ushi-oni - il apparaît le plus souvent en bord de mer, où il attaque les gens qui s'y trouvent.
    Ushi-onna - femme portant un kimono et ayant une tête de vache.
    Ushirogami - tire les cheveux par derrière.
    Ushiuchibô - s'attaque au bétail pour boire le sang.
    Uwan - esprit habitant les anciens lieux d'habitation abandonnés.

W-X

    Waira - grosse bête qui se cache dans les montagnes et dont on sait peu de choses.
    Wani - monstre des eaux comparable à un alligator ou un crocodile.
    Wanyūdō - roue en feu avec une tête d'homme en son centre qui aspire l'âme de quiconque la voit.
    Waraionago - elle attrape les hommes infidèles avec ses longs cheveux.
    Wataribishaku - Il s'agit d'un yōkai qui apparaît dans certains villages de montagnes isolés. Il a la forme d'un puisoir, brille d'une lumière bleuâtre et volette de-ci, de-là.
    Watatsumi - dragon japonais légendaire et une divinité de l'eau tutélaire.

Y

    Yabuguma - au fond des douves du château de Himeji, il entraînait les humains pour les noyer dans la douve.
    Yadōkai - créature surnaturelle, errant la nuit, endommageant les biens, blessant les personnes ou kidnappant les enfants.
    Yagyō-san - démon ayant l'apparence d'un ogre barbu à un seul œil et chevauchant un cheval sans tête les nuits de Hyakki yakō.
    Yagyôyûjo - fantôme d'une femme morte en couches.
    Yakanzuru - mystérieuse bouilloire suspendue à un arbre, la nuit au milieu de la forêt.
    Yakubyō-gami - esprits apportant la peste et autres événement funestes.
    Yamaakago - apparaît sous la forme d'un bébé couché avant de disparaître avec un sourire malicieux.
    Yama-arashi - porc-épic surnaturel.
    Yama-biko - esprit qui imite les sons dans les montagnes.
    Yama-bito - hommes des bois qui vit dans les montagnes.
    Yamachichi - esprit de la montagne ressemblant à un singe.
    Yamagaro - on dit qu'il est le maître de la montagne.
    Yama-Hime - gardienne de la montagne.
    Yamainu - il protège et guide ceux qui se sont perdus dans la montagne.
    Yamajijii - ogre qui n'a qu'un œil et qu'une jambe.
    Yamako (en) - être noir au corps couvert de poils.
    Yamanbo - petit enfant qui est toujours assis au pied d'un grand arbre.
    Yama-onna - la "femme de la montagne" mesurerait plus de trois mètres.
    Yama-oroshi - tsukumogami d'une râpe à radis.
    Yama-otoko - il lui arrive d’aider ceux qui portent une lourde charge sur le dos jusqu’au village.
    Yamata-no-Orochi - serpent à huit têtes et huit queues, avec des yeux rouges comme le sang, et dont le souffle est venimeux.
    Yama-uba - "vieille de la montagne" qui dépasserait les deux mètres.
    Yamatengu - tengu de la montagne.
    Yama-uba - vieille femme relativement hideuse. Elle est parfois confondue avec Yuki-onna.
    Yamawarawa - autre nom de Yama-waro.
    Yamawaro - créature vivant dans la montagne, originaire de Kyūshū, parfois considérée comme la forme empruntée par le kappa en hiver.
    Yamawaro - le "hurleur de la montagne". Il aurait un grand corps tout noir, un visage rougeâtre et de grands yeux brillants de la taille de bols de riz. Ne pas le confondre avec Yamawarawa, également appelé Yamawaro.
    Yanagi-baba - esprit d'un saule de 1000 ans.
    Yanari - poltergeists qui causent des bruits étranges.
    Yanboshi - On le rencontre sur un sentier, le soir ou la nuit, à l'endroit où un bonze s'est pendu dans le passé.
    Yarokamizu - propose de l'eau au passant avant de la lui jeter dessus.
    Yashima no Hage-tanuki
    Yatagarasu - corbeau à trois pattes d'Amaterasu qui fut envoyé à l’empereur Jimmu comme guide.
    Yato-no-kami - dieu-serpent qui a envahi un champ.
    Yôbaidakki - yōkai ayant l'apparence d'une femme de grande beauté.
    Yobuko - "enfant appeleur", esprit qui habite les montagnes.
    Yobukodori - "oisillon appeleur", autre nom de Yamabiko.
    Yofune-Nushi - monstre marin japonais.
    Yōkai - ils sont également appelés ayakashi (妖), mononoke (物の怪) ou mamono (魔物).
    Yōkai Kaze no Kami - souffle un vent jaune par la bouche. Celui qui en est frappé tombe malade à tous les coups.
    Yōko - autre nom de la femme-renarde (kitsune).
    Yomotsu-shikome - sorcières.
    Yonaki no ishi - pierre qui pleure la nuit.
    Yōsei - équivalent des fées occidentales.
    Yosuzume - oiseau mystérieux qui chante la nuit.
    Yuki Jijî - apparaît un jour de chute de neige et surprend les voyageurs.
    Yukinko - esprit de la neige prenant l'apparence d'un enfant.
    Yuki-Nyudô - yōkai à un seul œil et un seul pied qui sautille sur la neige fraîche des prairies à l'aube.
    Yuki-onna - la femme des neiges.
    Yukiwarashi - apparaît les soirs de neige et emporte les enfants.
    Yurei - fantôme dans un sens plus occidental.
    Yūreidanuki - tanuki qui prend l'apparence du fantôme d'un être aimé pour faire fuir la personne.

Z

    Zan - sirène.
    Zashiki bôzu - spectre courroucé d'un bonze qui a été assassiné dans la maison.
    Zashiki warashi - esprit enfantin protecteur de la maison.
    Zenkibō - tengu du Mont Ōmine.
    Zennyo Ryūō - dragon faiseur de pluie.
    Zorigami - Tsukumogami d'une horloge.
    Zuijin - esprit tutélaire.
    Zunbera-bō - Autre nom du Noppera-bō.
*/

// Réactions du robot lorsqu'un utilisateur envoie un message quelque part

client.on("message", message => {
	// Ne rien faire si le message provient d'un robot
	if (message.author.bot) return;
	// Préfixe
	var prefix = '=';
	
	// Commandes avec le préfixe
	
	// =devenirChercheur
	/*if(message.content.startsWith(prefix + "devenirChercheur")) {
		try {
			if (!userData[message.author.id]) {
				userData[message.author.id] = {
					monnaie = 0
				}
				fs.writeFile('userData.json', JSON.stringify(userData), (err) => {
					if (err) {
						message.channel.send("Je n'arrive pas à vous ajouter à la liste des chercheurs.");
					}
				});
			}
		}
		catch {
		}
	}*/
	
	// =youkaidex + Début du nom du youkai recherché
	if(message.content.startsWith(prefix + "youkaidex")) {
		try {
			
			// Récupération des arguments
			var args = message.content.slice(prefix.length).trim().split(/ +/g);
			var command = args.shift().toLowerCase();
			// Avec ou sans arguments ?
			if (args.length > 0) {
				var nameBeginning = args[0];
				var youkaiList = "**Index Youkai commençant par " + nameBeginning + "**\n";
				for (var i = 0; i < youkaidex.length; i++) {
					var currentYoukai = youkaidex[i];
					if (currentYoukai.getName().startsWith(nameBeginning)) {
						youkaiList += currentYoukai.getName() + "\n";
					}
				}
				message.channel.send(youkaiList);
			}
		}
		catch {
			message.channel.send("Problème avec le Youkaidex");
		}
	}
	
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
	
	// =lewdneko
	if(message.content.startsWith(prefix + "lewdneko")) {
		try {
			if (message.channel.nsfw) {
				superagent.get('https://nekos.life/api/v2/img/lewd')
					.end((err, response) => {
						const lewdembed = new Discord.RichEmbed()
							.setTitle("Lewd Neko")
							//.setImage(response.body.url)
							.setColor('#FF0000')
						message.channel.send(lewdembed);
					})
			}
			else {
				message.channel.send('Vous ne pouvez pas utiliser cette commande ici.');
			}
		}
		catch {
			message.channel.send("Erreur");
		}
	}
	
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
