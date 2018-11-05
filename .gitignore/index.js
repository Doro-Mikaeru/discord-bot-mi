const Discord = require('discord.js');
const { Client, Attachment } = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Prêt !');
});

// Classes (utiliser function au lieu de class avec Node.js, le constructeur est la fonction)

/*
** Youkai
** Auteur : MDB
*/
function Youkai() {
	var name = '';
	var description = '';
	
	function setYoukai(newname, newdescription) {
		if (!newname || !newdescription) {
			throw new Error('cannot set empty Youkai');
		}
		else {
			name = newname;
			description = newdescription;
		}
	}
	function getYoukai() {
		return name + " - " + description;
	}
	function getName() {
		return name;
	}
	function getDescription() {
		return description;
	}
	return {
		setYoukai: setYoukai,
		getYoukai: getYoukai,
		getName: getName,
		getDescription: getDescription
	}; 
}

//YoukaiDex
var youkaidex = new Array();
youkaidex.push(new Youkai().setYoukai("Abumi-kuchi", "Tsukumogami d'un étrier"));
youkaidex.push(new Youkai().setYoukai("Abura-akago", "Enfant fantôme qui lèche l'huile des lampes à huile"));
// ci-dessus : mettre new Youkai ou Youkai tout court ?

/*
    Abumi-kuchi - tsukumogami d'un étrier.
    Abura-akago - enfant fantôme qui lèche l'huile des lampes à huile.
    Abura-bō - prend souvent la forme d'un bonze.
    Abura-sumashi - esprit.
    Abura-tori - kidnappe les enfants.
    Ajari - Tengu de la Province d' Higo.
    Akaatama - esprit enfant faisant étalage de ses pouvoirs.
    Akabeko - vache rouge.
    Akabôzu - moine rouge.
    Akamataa - esprit serpent.
    Akaname - lèche la saleté des baignoires la nuit.
    Akarinashisoba - apparaît en général pendant la nuit la plus froide de l'hiver.
    Akashita - créature en forme de nuage noir aux griffes et aux dents acérées.
    Akateko - apparaît sous la forme d'une main rouge pendant d'un arbre.
    Akki - ogres ou démons responsables des diverses calamités.
    Akkorokamui - gigantesque poisson ou calamar du folklore de l'ethnie des Aïnous.
    Akuma - esprit maléfique.
    Akurojin-no-hi - flamme spectrale.
    Amabie (en) - créature marine sortant de la mer pour faire une prédiction.
    Amaburakosagi - autre nom de Namahage
    Amamehagi - autre nom de Namahage
    Amanojaku - petit oni ayant le pouvoir de provoquer chez une personne ses désirs les plus sombres.
    Amanozako - déesse monstrueuse.
    Amazake-babaa - vieille femme qui frappe aux portes des maisons la nuit et qui demande avec une voix d'enfant de l'amazake.
    Amefurikozō - enfant étrange qui joue sous la pluie.
    Amemasu - créature des Aïnous ressemblant à un poisson ou une baleine.
    Ameonna - femme apparaissant sous la pluie.
    Amikiri - créature coupant les filets des pêcheurs.
    Amorōnagu - tennin (être céleste) de l'île d'Amami Ō-shima.
    Anmo - démon d'un rituel disciplinaire de la Préfecture d'Iwate.
    Aoandon - yōkai féminin qui apparaît lorsque la dernière bougie du Hyakumonogatari Kaidankai est éteinte.
    Aobōzu - moine bleu.
    Aonyōbō - femme fantôme.
    Aosagibi - autre nom de Aosaginohi.
    Aosaginohi - esprit héron
    Arikura-no-baba - vieille femme avec des pouvoirs magiques.
    Ashiaraiyashiki - démon.
    Ashimagari - apparition ayant l'habitude de serrer très fort les jambes des passants, les empêchant de se déplacer.
    Ashinaga-tenaga - deux créatures inséparables à l'apparence humaine. Ashi-Naga a pourtant des jambes démesurées et de tout petits bras, tandis que son comparse Te-Naga a de longs bras et des jambes minuscules.
    Asobibi - feu spectral.
    Ato-oi-kozō - invisible, il suit les humains.
    Ayakashi - yōkai ressemblant à une anguille. Le mot est parfois utilisé comme terme générique pour les yōkai.
    Ayakashi-no-ayashibi - feu spectral.
    Azukibabaa - elle lave des sojas rouges au bord d'un ruisseau et attrape les passants pour les manger.
    Azukihakari- yōkai s'invitant dans les maisons.
    Azukiarai - autre nom de Azukitogi.
    Azukitogi - il lave des sojas rouges au bord d'un ruisseau mais il est inoffensif.

B

    Bakebi - feu spectral
    Bakedanuki - Tanuki farceur.
    Bakedôrô - fait perdre leur chemin aux voyageurs.
    Bakefurugeta - Tsukumogami de vieux socques en bois.
    Bakeichô no sei - esprit malveillant d'un ginkgo.
    Bake-kujira - baleine fantôme.
    Bakemono - autre nom des obake.
    Bakeneko - chat fantôme.
    Bakezōri - Tsukumogami d'une sandale de paille.
    Bakki - ogre de la sécheresse.
    Baku - créature qui se nourrit des rêves et des cauchemars.
    Basabasa - autre nom du Basan.
    Basan - coq crachant du feu.
    Basho ni Sumu Rei - esprit d'un lieu particulier.
    Bashōnosei - esprit du bananier.
    Betobeto-san - esprit qui suit les gens la nuit.
    Binbōgami
    Bishagatsuku - créature volant les âmes.
    Biwa-bokuboku - Tsukumogami d'un biwa.
    Bôzudanuki - moine tanuki.
    Bunagayabi - demeure au fond des rivières.
    Bunbuku Chagama
    Buruburu - esprit qui provoque des frissons.
    Buzenbō - Tengu du Mont Hiko.
    Byakko - version japonaise du Tigre blanc de l'ouest chinois
    Byōbunozoki

C-D-E

    Chōchin-kozô - enfant apparaissant les nuits où il bruine.
    Chōchin-obake - lanterne fantôme de papier.
    Chōchinbi - flammes démoniaques qui apparaissent dans les sentiers entre rizières.

    Daidarabotchi (en)
    Daitengu - grand tengu.
    Daki - yōkai féminin vivant près d'une falaise.
    Danzaburou-danuki (en)
    Daranibō - Tengu du Mont Fuji.
    Datsue-ba - démon à l'allure de vieille femme.
    Dodomeki (en) - Fantôme d'une femme pickpocket.
    Dokuro no Kai - ensemble de crânes qui finissent par se regrouper pour former un crâne immense.
    Dōnotsura
    Dorotabō - fantôme d'un vieil homme hantant les champs de riz.

    Enenra (en) - Monstre fait de fumée.
    Enkō - Kappa de Shikoku et de l'ouest Honshū.
    Enshôjo - autre nom de Hinoenma.
    Eritate-goromo

F

    Fūbo - autre nom du Fūri.
    Fuchi-saru - singe des abysses, genre de kappa.
    Fudagaeshi - fantômes qui demandent de détacher les amulettes des portes extérieures.
    Fuguramayôbi - sorcière du Fugurama.
    Fukikeshi babâ - vieille femme qui souffle sur les flammes des lampes pour les éteindre.
    Fukurokatsugi - il porte un grand sac pour enlever les enfants.
    Fukuro-sage - Tanuki de la préfecture de Nagano et de Shikoku.
    Funayūrei - esprits vengeurs.
    Furaribi (en) - oiseau de feu.
    Fūri (en) - ressemble à une loutre avec peu de poils sur le corps et est capable de voler.
    Furusoma - Ce serait l'âme de quelqu'un mort écrasé par un arbre abattu.
    Furutsubaki-no-rei - vieux camélia réputé pour ses métamorphoses.
    Furu-utsubo - Tsukumogami du carquois d'un archer tué.
    Fūseijou - autre nom du Fūri.
    Futakuchi-onna - femme avec deux bouches.
    Futtachi - animal devenant un yōkai en prenant de l'âge.

G

    Gagoze - démon qui attaque les jeunes prêtres du temple Gangō-ji.
    Gaki - démon de la faim.
    Gangi-kozō - vit près des côtes et dévore des poissons en commençant par la tête.
    Gan no Sei - esprit du cercueil.
    Gaoro - autre nom du kappa en pays Kishû (actuels départements de Wakayama et Mie)
    Garappa - kappa de Kyūshū.
    Garei - esprit habitant les dessins, les peintures et les sculptures.
    Gashadokuro - yōkai ayant l'apparence d'un squelette géant.
    Genbu - la tortue noire du nord.
    Giba - yōkai s'attaquant aux chevaux.
    Gongorōbi - feu spectral dans la Préfecture de Niigata.
    Goryō - Esprits vengeurs de la mort.
    Gotokuneko - chat allumant un feu.
    Guhin - autre nom de tengu
    Gyūki - autre nom d'Ushi-oni

H

    Hagedanuki - tanuki chauve dans la Préfecture de Kagawa.
    Hainu - chien ailé.
    Hakanohi - feu spectral apparaissant au-dessus des tombes.
    Hakuba - cheval blanc qui porte chance.
    Hakuja no Myojin - divinité serpent blanc.
    Hakutaku (en) - autre nom du Kutabe.
    Hakuzōsu (en) - kitsune
    Hanako-san - esprit d'une jeune fille qui hanterait les toilettes des écoles.
    Hannya - fantôme d'une femme revenue sur terre pour assouvir sa vengeance.
    Happa Yōkai - sort d’un pilier mal monté.
    Haradashi - yōkai aiman s'amuser.
    Harionago - elle accroche les hommes avec ses crochets au bout de ses cheveux ébouriffés.
    Hashihime - yōkai féminin qui apparaît près des ponts.
    Hashira Yōkai - esprit d'un pilier qui se plaint d’avoir été installé de travers.
    Hasshaku - fantôme d'une légende urbaine.
    Hatahiro - rancœur d'une femme qui se transforme en serpent.
    Hataonryô - spectres des corps abandonnés de ceux morts de faim.
    Hayatarō - chien qui tua le sarugami à Kamiina, Préfecture de Nagano.
    Heikegani - crabes étant la réincarnation de l'esprit des guerriers.
    Heikō - autre nom du Fūri.
    Hibagon - bigfoot japonais.
    Hidarugami - âme abandonnée qui affame les voyageurs en les étreignant au point de les empêcher de marcher.
    Hiderigami - yōkai provoquant la sécheresse.
    Hihi - Monstrueux babouin qui vit au plus profond des montagnes.
    Hikeshibaba - vieille femme qui éteint les lanternes.
    Himamushi Nyûdô - bonze qui lèche l'huile des lampes.
    Hinode - l'aube.
    Hinoenma - yōkai punissant les bonzes ayant eu un rapport sexuel avec des femmes.
    Hi no Kuruma - véhicule de feu qui vient chercher les âmes pour les emmener aux enfers.
    Hitodama - manifestation de l'esprit d'une personne décédée.
    Hitotsu-Datara - Il n'a qu'un œil et une jambe et défi les voyageurs au sumo.
    Hitotsume-kozō - petit garçon qui ne possède qu'un unique œil et une longue langue qui pend hors de sa bouche.
    Hitotsume-nyūdō
    Hiyoribō - esprit qui arrête la pluie.
    Hizama - coq annonciateur d'incendie.
    Hoji - esprit mauvais de Tamamo-no-Mae.
    Hōkibō - tengu de la Montagne Daisen.
    Hone-onna - femme squelette.
    Hōkō - esprit canin.
    Hônadé - main pâle qui sort de l'obscurité et caresse les joues.
    Honekarakasa - parapluie en os.
    Hone-onna - succube.
    Hō-ō - phénix.
    Hosodé - à l'apparence d'un bras très fin. Mauvais présage.
    Hotoke - personne décédée.
    Hyakki Yakō - procession de yōkai.
    Hyakume - yōkai aux cent yeux.
    Hyōsube - créature ressemblant à un singe et apparentée au kappa.
    Hyōtan-kozō - Tsukumogami d'une calebasse.

I

    Ibaraki-dōji - descendant d'un oni.
    Ichiren-Bozu - perles de prière animées.
    Ichimoku-nyūdō - il n’a qu’un œil énorme sur le dessus du crâne.
    Ido-no-gami - ressemble à un humain avec une tête de poisson-chat et est parfois confondu avec le kappa.
    Ijarokorogashi - tsukumogami ayant l'apparence d'une passoire qui roule.
    Ijû - créature qui ressemble vaguement à un singe.
    Ikiryō - essentiellement un fantôme vivant, car il est l'âme d'une personne vivante à l'extérieur de leur corps.
    Ikuchi - serpent de mer qui se déplace au-dessus des bateaux en un arc tout dégoulinant d'huile.
    Innenbi - yōkai de feu lié à la rancune.
    Inugami - Chien-esprit créé, adoré et employé par une famille au moyen de la sorcellerie.
    Inugami Gyoubu - un type de tanuki.
    Ippon'ashi - ogre unijambiste apparaissant à Obaminé pour dévorer les voyageurs
    Ippon-datara - grande créature de forme humaine, avec une seule jambe et un seul œil.
    Ishinagenjo - yōkai féminin de la mer.
    Iso Onna - femme attaquant les bateaux à l’amarre. Appelée aussi Isonagijo.
    Isonade - poisson semblable à un monstre marin avec une queue couverte de barbillon.
    Issie - monstre de lac.
    Itaoni - yōkai en forme de planche issu d'un conte.
    Itsumade - monstre cracheur de feu ressemblant à un oiseau.
    Ittan-momen - rouleau de coton possédé qui tente d'étouffer les gens en s'enroulant autour de leurs visages.
    Iwana-bōzu
    Iyaya - femme dont le visage semble être celui d'un vieil homme.

J

    Jagoemon - serpent géant.
    Jakotsu-babaa - vieille femme qui porte un serpent rouge dans sa main gauche et un serpent bleu dans la droite.
    Jami - monstre naît de l'esprit de la montagne ou de la forêt. Il ressemble à une bête mais à un corps indistinct ou flou, voire presque invisible.
    Janjanbi - feu-follet qui apparaît dans le département de Nara.
    Jashin - dieu-serpent qui apparaît dans l’œuvre de Shigeru Mizuki.
    Jatai - obi qui s'est transformé en serpent. Tsukumogami.
    Jibakurei - esprit qui protège un endroit spécifique.
    Jikininki - fantômes qui dévorent les cadavres des humains.
    Jinmenju - arbre portant des fruits à visage humain.
    Jinmenken - Chien à visage humain apparaissant dans les légendes urbaines récentes.
    Jirōbō - tengu des Montagnes Hira.
    Jishin-namazu - poisson-chat géant provoquant des tremblements de terres.
    Jorōgumo - femme araignée.
    Josenbi - feu spectral de la Préfecture de Shiga.
    Jubokko - arbre vampire.

K

    Kabukiri kozô - enfant avec une coupe au bol et vêtu d'un kimono peu ordinaire. Ce serait un tanuki déguisé.
    Kabuso - petit yōkai de la taille d'un chaton qui apparaît dans l'eau. Autre nom de Kawaso.
    Kage-onna - ombre d'une femme projetée par la lumière de la Lune sur la porte coulissante en papier de la maison
    Kahaku - autre nom du kappa
    Kaifukibô - yōkai présent dans les douves d'un château dans les montagnes du département d'Okayama.
    Kaijin - "l'homme de la mer". Quand il monte à bord, le mieux à faire est de ne pas parler et de rester sans bouger, car autrement il produit une tempête et fait chavirer le bateau.
    Kaiyô - bateau fantôme.
    Kakiotoko - Les kakis que personne ne ramasse et qui pourrissent sur l’arbre peuvent se transformer en un genre de bonze.
    Kakuré Babâ - apparaît pour enlever les enfants qui jouent à cache-cache la nuit.
    Kakurezato - Lieu magnifique où le temps s'écoule différemment que dans notre monde.
    Kamaitachi - yōkai associé au vent.
    Kameosa - Tsukumogami d'une vieille jarre.
    Kamikiri - petit être de la taille d'un enfant et une tête de corbeau.
    Kanbari nyūdō - esprit d'un moine qui espionne ceux qui vont aux toilettes.
    Kanedama - "esprit de l’or". La maison qui le perd périt et celle qui l’accueille prospère.
    Kanibôzu - crabe de la taille de deux tatamis et qui dévorait les bonzes du temple proche de l'étang où il se cachait.
    Kanko - autre nom du Kuda-gitsune.
    Kappa - le kappa est réputé pour chercher à attirer les humains ou les chevaux dans l'eau.
    Karasu tengu - tengu.
    Kasa-obake - Tsukumogami d'une ombrelle ou d'un parapluie.
    Kasha - démon de félin qui descend du ciel et emporte les cadavres.
    Kashanbo - autre race de kappa.
    Kataashijôrô - yōkai volant une socque.
    Katakirauwa - yōkai des îles Amami. Il se présente sous la forme d'un petit cochon sans ombre.
    Katasharin - apparait la nuit avec un grincement de charrette.
    Katawa-guruma - type de wanyūdō avec une femme angoissée à la place de la tête de moine dans une roue brûlante.
    Katsura-otoko
    Kawaakago - esprit de la rivière qui fait semblant d'être un bébé qui pleure.
    Kawabotaru - feu follet qui apparaît la nuit dans le marais Inba du département de Chiba.
    Kawahime - yōkai ayant l'apparence d'une femme de grande beauté.
    Kawajorô - "prostituée de la rivière".
    Kawako - Yōkai qui tire les enfants par les pieds au bord des ruisseaux.
    Kawa Otoko - yōkai aquatique ayant une apparence humaine.
    Kawatarō - C’est sous ce nom qu’était connu le plus commun des kappa.
    Kawa-uso - Loutre surnaturelle ayant le don de métamorphose.
    Kawa-zaru - On le surnomme « singe du fleuve » à cause de son aspect, mais il appartient à la famille des kappa.
    Kayatsuridanuki - Tanuki qui tourmente les passants la nuit en tendant une moustiquaire en travers du chemin.
    Kazenbō - fantôme d'un moine brûlé qui apparaît sur le mont Toribe près de Kyoto.
    Kechibi - feu spectral
    Kejōrō - yōkai avec de longs cheveux flottants qui a l'apparence d'une prostituée et que l'on peut croiser dans les quartiers chauds.
    Keneō - vieillard assis dans le monde souterrain qui pèse les vêtements qui lui sont donnés par datsue-ba.
    Kerakeraonna - 'esprit prenant l'apparence d'une femme gigantesque d'environ 40 ans vêtu d'un kimono.
    Kesaran-pasaran - mystérieuse créature blanche duveteuse.
    Keukegen - créature entièrement faite de cheveux.
    Kijimuna - esprits malicieux habitant les grands banyans.
    Kijo - ogresse qui mijote de l'humain dans sa marmite.
    Kimjin - genre de kappa.
    Kimotori - Yōkai apparaissant dans les cimetières après une cérémonie funéraire. Proche du Kasha.
    Kirin - animal composite fabuleux issu de la mythologie chinoise possédant plusieurs apparences.
    Kitsune - esprit renard.
    Kitsunebi - feu de kitsune.
    Kitsune-Tsuki - fait d'être possédé par un esprit renard
    Kitsune no yomeiri (en) - Noce de renards.
    Kiyohime - femme éconduite et jalouse se transformant en serpent pour poursuivre son ancien amant.
    Kô Bozu - les "petits gosses" ressemblant à la Zashiki warashi.
    Kodama - esprit vivant dans un arbre centenaire.
    Koemonbi - autre nom donné au Chōchinbi.
    Koiké Babâ - Nom d'une vieille chatte géante qui chassait l'humain en compagnie d'une meute de loup.
    Kokakuchō - l'oiseau ubume.
    Kokuribaba - terrible sorcière démon qui mange la peau des cadavres.
    Koma-inu - gardiens des sanctuaires.
    Konaki-Babâ - elle a le corps d’un bébé mais le visage d’une vieille. Elle est aussi très lourde quand on essaie de la porter.
    Konaki-Jijii - prend l'apparence d'un bébé pour piéger les voyageurs.
    Konoha tengu - tengu des feuilles.
    Koropokkuru - nains habitant sous terre et dans les tiges des feuillages de tussilages ou de pétasites.
    Kosagi - Yōkai de Shikoku qui subjugue ceux qui traînent des heures sous le kotatsu.
    Kosamebô - on ne le voit que quand tombe une pluie fine.
    Kosenjōbi – feu spectral flottant au-dessus d'anciens champs de combats.
    Kosode-no-te - Tsukumogami d'un kimono à manches courtes ayant ses propres mains.
    Kosokosoiwa - Rocher hanté qui murmure.
    Kōtenbō - tengu de Katsuragi.
    Kotengu - petit tengu.
    Kôtôri bôzu - il dévorent les enfants qui se baladent en fin de soirée.
    Kotorizo - yōkai du département de Shimané qui enlevait les enfants pour en extraire de l'huile.
    Kowai - yōkai avare et goinfre.
    Kubikajiri (en) - voyageur à qui on a refusé de donner à manger et finissant par mourir de faim. Il vient sur la tombe de celui qui lui a refusé un peu de nourriture pour exhumer sa tête et la dévorer.
    Kubireoni - esprit qui possède les humains et les pousse au suicide.
    Kubitsuridanuki - tanuki doué pour faire pendre les gens.
    Kuchisake-onna - femme défigurée par un mari jaloux et changée en un esprit malin avide de reproduire par vengeance le même acte dont elle a été victime.
    Kuda-gitsune (en) - petit animal ressemblant à un renard et utilisé en sorcellerie.
    Kudan - veau qui naît avec le visage d'un homme. Il prédit une catastrophe dès sa naissance et meurt après avoir fait sa prédiction.
    Kumo Yōkai - démon araignée.
    Kuneyusuri - yōkai qui agite les haies.
    Kurabebi - feu spectral. Apparaît par paire, flottant au-dessus de la mer.
    Kurabokko - esprit-gardien du grenier.
    Kurage-no-hinotama - méduse qui flotte dans les airs comme une boule de feu.
    Kurayamimé - yōkai avec un œil sur chaque genou qui lui permet de marcher sans problème dans l'obscurité.
    Kurobotoké - apparaît sous la forme d'un gentil petit enfant, et il se met à voler en tout sens quand il n'est pas content.
    Kurobôzu - il aspire le souffle des humains endormis et lèche leurs bouches.
    Kurodama - se présente comme une masse noire. Il s'introduit dans les maisons les nuits d'été et oppresse les humains dans leurs sommeils.
    Kurokamikiri - il ne coupe que les cheveux noirs.
    Kuroté - hante les toilettes des maisons. Sa main sort du trou pour caresser les fesses des femmes.
    Kurozuka - célèbre sorcière cannibale de Adachigaharaa.
    Kutabe (en)
    Kuzunoha - kitsune qui serait la mère d'Abe no Seimei.
    Kyōkotsu – personnage squelettique qui émerge d'un puits.
    Kyonshī - version japonaise du vampire sautant chinois appelé jiangshi.
    Kyōrinrin - rouleaux de papiers hantés.
    Kyūbi-no-kitsune - kitsune à neuf queues.
    Kyūketsuki - vampire japonais.
    Kyûso - vieille souris qui dévore les chats.

M

    Maikubi - "têtes dansantes".
    Makura-gaeshi - esprit qui vous prend l'oreiller de dessous la tête pendant votre sommeil et le met sous vos pieds à la place.
    Mamedanuki - tanuki aimant gonfler ses testicules et les étaler pour berner les humains.
    Mannen-dake - monstre-bambou qui se nourrit des âmes des voyageurs perdus qui campent dans les bambouseraies.
    Mayoiga - maison que les voyageurs égarés trouvent parfois en montagnes.
    Mekurabe - autre nom du Dokuro no Kai.
    Menreiki - esprits qui habitent dans des masques.
    Meshikui yūrei - yūrei qui hante les maisons et mange la nourriture comme un humain.
    Miage-nyūdō - yōkai avec une tête de bonze antipathique qui apparaît dans les chemins.
    Mikaribaba - Elle se rend chez les gens et frappe à la porte de chaque maison et demande : "Prêtez-moi une pèlerine de paille !".
    Mikoshi-nyūdō - autre nom de Miage-nyūdō.
    Minkirauwa - yōkai des îles Amami, il se présente sous la forme d'un petit cochon qui se faufile entre les jambes des passants.
    Minogame - tortue légendaire qui aurait vécu 10 000 ans.
    Mintsuchikamui - genre de kappa.
    Misaki - terme générique pour l'existence des différents esprits au Japon.
    Mishigê - tsukumogami d'une spatule à riz.
    Mizoidashi - mort hantant un fossé.
    Mizuchi - dangereux dragon marin ou une créature légendaire ressemblant à un serpent.
    Môki - ravage les cimetières pour se repaître des têtes des cadavres quand il n'a pas trouvé assez d'offrandes.
    Mokumokuren - esprit habitant les shōji (les murs et les portes coulissantes en papier).
    Momijigari - femme-démon du mont Togakushi.
    Momonjii - si on le rencontre, on est sûr de tomber malade
    Mononoke - "Esprits-vengeurs". Autre nom donné aux yōkai.
    Morinji-no-kama - autre nom pour Bunbuku Chagama, le tanuki-théière.
    Mōryō - yōkai qui dévore les cadavres.
    Muitichigoro - il tue les gens en leur passant sous les jambes.
    Mujina - petit animal à poil, réputé maître dans l’art de la transformation et dans l’ensorcellement des humains.
    Mu-onna
    Musabi - feu spectral du département de Miyazaki. Il apparaît par paire les soirs de pluie.
    Myōbu - titre parfois donné au kitsune.
    Myōgibō - tengu du Mont Ueno.

N

    Nabigê - tsukumogami d'une louche.
    Nagomi-takuri - équivalent de Namahage dans la région de Heii, Préfecture d'Iwate.
    Naigubu - tengu du Mont Takao.
    Naki Babā - la vieille pleureuse. Si elle vient pleurer à la porte d'une maison, le malheur va frapper ce foyer.
    Namahage - Démons effrayants les enfants lors du rituel de purification des âmes du peuple ayant lieu le 31 décembre dans le département d'Akita.
    Namazu - poisson-chat géant vivant dans la vase des profondeurs de la terre, et sur l'échine duquel repose le Japon.
    Name Onna - femme qui lèche les hommes de partout.
    Nando-baba - esprit d'une vieille-femme qui se cache sous le sol des greniers abandonnés.
    Narikama - Tsukumogami d'une vieille bouilloire.
    Nebutori - maladie qui sert à donner une leçon aux femmes qui dorment trop.
    Nekomata - bête des montagnes crainte et dont on disait qu'elle attaquait, tuait et mangeait les humains qui erraient trop profondément dans les coins reculés.
    Nekomusume - chat prenant la forme d'une fille.
    Nikonbô no Hi - feu spectral d'Osaka.
    Nikusui - apparaît sous l'apparence d'une jeune femme et suce toute la chair du corps de ses victimes.
    Ningyo - créature marine.
    Ningyô no Rei - esprit d'une poupée.
    Ninko - esprit-renard invisible.
    Ninmenju - arbre qui pousse dans les cavités des montagnes reculées, avec des fleurs qui ressemblent à des visages humains.
    Nobi - feu spectral
    Nobiagari - plus on le regarde, plus il grandit.
    Nobusuma - Mur surnaturel ou monstrueux écureuil volant selon les sources.
    Nodeppô - il se tient perché sur un arbre et exhale une espèce de chauve-souris contre les promeneurs sur les sentiers.
    Noderabō - étrange créature qui se tient près de la cloche d'un temple et qui la fait sonner le soir.
    Nogitsune - kitsune maléfique.
    Noppera-bō - fantôme sans visage.
    Notsugo - spectre errant d'un nourrisson.
    No'uma - yōkai à un seul œil de la région d'Iwami.
    Nozuchi - serpent–yōkai, le rencontrer est un mauvais présage.
    Nue - chimère qui apporte la malchance et la maladie.
    Nukekubi - sa tête se détache de son corps et vole librement, attaquant et mordant les personnes.
    Nuppefuhofu - yōkai qui n’est qu’un bloc de chair. Il apparaîtrait la nuit dans un temple en ruine.
    Nuppeppō - autre nom du Nuppefuhofu.
    Nurarihyon - vieil homme avec une tête en forme de gourde et portant un kesa. Il est parfois indiqué qu'il est le chef des yōkai.
    Nure-onna - femme serpent qui apparaît sur les rives des rivières et les plages.
    Nuribô - il apparaît sans crier gare sur une paroi abrupte.
    Nuribotoke - il nettoie les objets décoratifs des autels domestiques.
    Nurikabe - apparaît le plus souvent la nuit, sous la forme d'un grand mur pour bloquer les promeneurs.
    Nurunuru Bôzu - dès qu'il trouve un humain, il se colle à lui et le frotte de son corps huileux.
    Nyoijizai - tsukumogami.
    Nyūbachibō - tsukumogami d'un mortier.
    Nyūdō-bōzu (en) - petit bonze de moins de 90 cm mais plus on le regarde, plus il pousse en hauteur.
    Nyūnaisuzume - fantôme ayant l'apparence d'un moineau.

O

    Obake - créatures ayant la capacité de se métamorphoser.
    Obariyon - esprit cherchant à se faire porter par ses victimes.
    Obora - feu spirituel d'une personne décédée.
    Oboro-guruma (en) - char à bœufs avec un énorme visage humain sur le front qui apparaît les brumeuses nuits de pleine lune.
    Ōgama - crapaud géant.
    Ôgumo - araignée géante qui provoque des maladies et boit le sang.
    Ohaguro-bettari - yōkai féminin aux dents toutes noires.
    Oigakari - se jette sur les passants pour les empêcher de passer.
    Oiwa - fantôme d'une femme qui fut assassinée par son mari
    Ōkaburo - yōkai féminin
    Ōkami - loup.
    Ōkamuro - visage géant qui apparaît sur la porte.
    Okiku - fantôme d'une jeune servante qui compte les assiettes.
    Okikumushi - monstre-ver qui apparaît sur les lieux où aurait été tué une jeune fille.
    Ōkiseru - "la grande pipe", serait un tanuki métamorphosé.
    Okkeruipé - yōkai péteur.
    Ōkubi - visage d'une femme énorme qui apparaît dans le ciel.
    Okurichôchin - "la lanterne qui raccompagne".
    Okuri-inu (en) - chien qui accompagne les voyageurs, soit pour les protéger soit pour les dévorer selon les versions.
    Okuri-itachi - belette qui suit les gens la nuit.
    Okuri-ôkami - "loup qui accompagne".
    Ōmagatoki - le crépuscule, moment où se rassemble les yōkai, yūrei et autres créatures.
    Omoi - démon qui perçoit tout ce que les humains ont dans la tête.
    Ōmukade - mille-pattes géant mangeant des humains.
    Oni - créature ayant une forme humanoïde et une taille gigantesque.
        Oni de Rashomon
    Onibaba - monstre qui se cache sous les attributs d'une vieille femme pour attaquer et dévorer les humains.
    Onibi - feu spectral.
    Onihitokuchi (en) - oni ayant un seul œil et tuant les humains.
    Onikage - cheval maléfique.
    Onikuma (en) - ours monstrueux.
    Onmoraki - démon-oiseau créé à partir des esprits de corps fraîchement morts.
    Onmyōdō - magie traditionnelle japonaise.
    Onmyoji - magicien pratiquant l'onmyōdō.
    Onryō - fantôme vengeur.
    Ōnyūdō (en) - bonze géant.
    Osabi - lumières fantômes
    Osakabe - il habite le château de Himeji.
    Otoroshi - créature velue assise en haut des torii et dont on pense qu'elle est la gardienne du sanctuaire.

P-Q-R

    Raijū - compagnon de Raiden, le dieu shintô de la foudre.
    Reiki - yōkai hantant le temple Gangō-ji.
    Rōjinbi - apparaît souvent par une nuit pluvieuse au fond de la montagne.
    Rokurokubi - yōkai dont le cou s'étire et la tête libérée s'en va accomplir ses mauvaises actions.
    Ryū - dragon japonais.
    Ryūhōbō - tengu du Mont Kōmyō.
    Ryūtō - feu mystérieux qui apparaît sur la mer.

S

    Saburō - tengu du Mont Iizuna.
    Saezuriishi - pierre qui savait parler la langue humaine et pouvait donner des informations à ceux qui savait écouter.
    Sagamibō - tengu de Shiramine.
    Sagari - yūrei qui naît lorsqu'un cheval meurt au pied d'un arbre.
    Sakabashira - pilier qui a été installé à l'envers ce qui fait que la maison est hantée.
    Sakaidori - autre nom donné parfois au Konoha Tengu.
    Samebito (en) - yōkai humanoïde possédant une peau noire et des yeux verts luminescents.
    Sanchû no yūreiyashiki - Parfois dans la montagne, on peut apercevoir une maison, toutes lumières allumées, où des yūrei chantent et dansent.
    Sanjakubō - tengu du Mont Akiba.
    Sankai - les fausses couches et les naissances trop tôt créèrent la légende des sankai.
    Sankibō - tengu d'Itsukushima.
    Sankichioni - inconnu apparaissant pour boire comme un trou, puis repartait sans payer. La nuit, on trouvait toujours en compensation, devant sa porte, du bon bois pour un valeur supérieure de ce qui avait été bu.
    Sanrei - spectre de la montagne.
    Sansei - esprit de la montagne appréciant le sel.
    Sanshô - yōkai unijambiste que l'on trouve dans des montagnes de Chine.
    Sarakazoe - feu follet qui sort du puits et compte les assiettes.
    Sarugami - esprit-singe maléfique.
    Satori - vit en montagnes et est capable de lire dans l'esprit des gens.
    Sazae-oni (en) - turbot cornu devenu yōkai à l’âge de trente ans.
    Seiryū - dragon azur de l’est.
    Sekiyô - prend apparence d'une femme de grande beauté et propose des massages. Sa victime se retrouve avec le dos lacéré.
    Seko - genre de kappa à l'apparence d'un enfant.
    Sêma - autre nom du Kijimunā.
    Senjôgabi - autre nom du Kosenjôbi.
    Senpoku-Kanpoku - grenouille à visage humain guidant les âmes nouvellement décédées vers le cimetière.
    Sesshō-seki - pierre tueuse hantée par l'esprit qui posséda Tamamo-no-Mae.
    Setotaishō - guerrier composé de morceaux de poteries en terre jetés.
    Shachihoko - monstre marin d'origine chinoise ayant l'apparence d'un poisson avec une tête de tigre.
    Sha Gojō - monstre marin de La Pérégrination vers l'Ouest, souvent compris comme un kappa au Japon.
    Shibaemon-tanuki - tanuki de lîle d'Awaji.
    Shibagaki - lance des cailloux sur les passants au détour d'un chemin.
    Shibaten - yōkai, passionné de sumo, d’environ un mètre de haut, vivant à proximité des plans d’eau.
    Shichinin misaki (en) - groupe de fantômes.
    Shidaidaka - quand on le regarde d'en bas, il grandit, et quand on le regarde de haut, il rapetisse.
    Shirōneri - moustiques possédés qui s'incrustent dans les vêtements poussiéreux.
    Shikijirô - yōkai vivant dans les mines qui sont exploitées depuis une centaine d'années.
    Shikigami - esprits invoqués pour servir un adepte du onmyōdō.
    Shiki-ōji - autre nom du Shikigami.
    Shikome - sorcières envoyées par Izanami pour faire du mal à Izanagi.
    Shin
    Shinkiro - palourde qui a grandi hors de proportions à tel point qu'elle remonte à la surface de la mer et créée un mirage des villes lointaines.
    Shiranui - feu follet qui apparaît la nuit sur la mer.
    Shirikodama - balle mythique qui contiendrait l'âme du kappa.
    Shirime - étrange yōkai avec un œil à la place de l'anus.
    Shiro-bōzu - esprit blanc sans-visage.
    Shirodokuri - le "cruchon blanc", serait un tanuki métamorphosé.
    Shiro-uneri - vieux torchon usé ou serpillière apparaissant sous la forme d'un dragon.
    Shiryō - esprit d'une personne décédée.
    Shisa - considérés comme des protections repoussant les forces maléfiques. Version d'Okinawa des shishi.
    Shishi - paire de chiens-lions qui gardent l'entrée des temples.
    Shisuzu
    Shōjō - sorte d’esprit de mer japonais avec un visage et des cheveux rouge et un penchant pour l’alcool.
    Shōkera - créature qui jette un œil par la lucarne des vieilles maisons.
    Shōki - exorciste légendaire originaire de Chine.
    Shôki - dans un des contes de Shigeru Mizuki, Shôki est un petit ogre.
    Shokuin - apparaît sous la forme d'un dragon rouge à visage humain.
    Shōrōkaze - vent maléfique qui souffle le matin du 16 août, pendant la fête des morts sur l'île Gotō à Nagasaki.
    Shunoban - goule au visage rouge qui surprend les gens.
    Shussebora - conque marine transformée en dragon après avoir vécu trois mille ans à la montagne, trois mille ans dans un village, puis trois mille ans dans la mer.
    Shuten-dōji (en) - oni assoiffé de sang ayant kidnappé une princesse célèbre.
    Sodehiki-kozō - esprit invisible qui tire sur les manches.
    Sōgenbi - fantôme.
    Sōjōbō - roi mythique des tengu.
    Son Gokū - Roi des Singes de La Pérégrination vers l'Ouest.
    Soragami - démon d'un rituel disciplinaire ayant l'apparence d'un tengu.
    Soraki-gaeshi - son d'arbres étant abattus, alors que plus tard aucun ne semblent avoir été coupés.
    Sorobanbōzu - fantôme portant un boulier.
    Sōtangitsune - Renard célèbre de Kyoto, tiré d'une légende d'une cérémonie du thé qui date probablement de la première moitié du XVIIe siècle.
    Suiko - autre nom du kappa.
    Suisei no Okina - esprit ayant l'apparence d'un vieillard habillé de vert. Il apparaît la nuit dans les maisons avant de disparaître dans un plan d'eau.
    Sukima Onna (femme de l'interstices) - (隙間女 - page japonaise)
    Sunafurashi - serait un tanuki qui lance du sable sur les passants.
    Sunakake Baba - sorcière près d’un sanctuaire shinto qui lance du sable sur les passants.
    Suneka - vient ôter les tâches de son sur les jambes, qui sont signes de paresse.
    Sunekosuri - créature ressemblant à un chat ou un petit chien et se frottant contre les jambes des gens la nuit.
    Suppon-no-yūrei - fantômes de tortues.
    Susuke Chōchin - lors des nuits pluvieuses, il volerait avec désinvolture autour d'un lieu où les corps sont lavés pour l'enterrement.
    Suzaku - oiseau vermillon du sud.
    Suzumeokuri - "moineau accompagnateur". Quand on marche la nuit, on aperçoit la lanterne de ce soi-disant moineau, suivie parfois d'un pépiement.
    Suzuriishi - pierre remplie d'eau. Si on essaie de vider l'eau, un orage se produit, même quand le ciel est parfaitement dégagé.
    Suzuri no Sei - tsukumogami d'un encrier.
    Suzuri-no-tamashii - tsukumogami d'une pierre à encre.

T

    Taiba - démon des chevaux. Rend les chevaux fous.
    Taimatsumaru - tengu enveloppé de flammes.
    Taka Nyûdô - bonze géant de plus de trois mètres qui apparaît de nuit pour faire peur aux passants dans le département d'Aichi.
    Taka-onna - monstre féminin qui s'étire pour regarder au deuxième étage d'une maison.
    Takekiridanuki - tanuki coupeur de bambous.
    Takiwaro - yōkai qui vit dans les falaises sous l'apparence d'un enfant.
    Takurôbi - yōkai de feu qui apparaît par paire et flottent sur les eaux.
    Tamamo-no-Mae - renard à neuf queues maléfique.
    Tankororin - kaki que personne ne ramasse et qui pourrit sur l’arbre, il se transforme en un genre de bonze.
    Tanuki - maître des déguisements, il est réputé pouvoir changer de forme à volonté.
    Tanukibayashi - "orchestre des tanuki". Tanuki qui se tapent sur le ventre.
    Tanuki-bi - feu de tanuki.
    Tarōbō - tengu du Mont Atago.
    Tatami-tataki - yōkai qui fait du bruit la nuit comme s’il battait des tatamis.
    Tatarimokké - âme qui sort de la bouche d'un bébé mort.
    Tatekurikaeshi - espèce de pilon qui apparaît et renverse les passants qui le croisent.
    Tatsu - un des noms donnés au dragon japonais.
    Tearaioni - ogre qui se lave les mains.
    Tecchi - yōkai féminin de l'île d'Hachijô. Elle fait disparaître des humains ou les fait se perdre et errer dans la montagne toute la nuit.
    Tegatagasa - monstre apparaissant caché dans un gros nuage noir encerclé d'éclairs.
    Teke Teke (en) - esprit vengeur d'une jeune femme.
    Ten - martres qui forment une colonne qui émet une flamme mystérieuse.
    Tenaga - autre moitié d'Ashinaga.
    Tenaga Babâ - sorcière aux cheveux blancs qui habite au fond de l'eau. Ses longs bras sortent et font peur aux enfants.
    Tenbi - feu-follet apparaissant en période de sécheresse.
    Tengu - ils sont traditionnellement représentés avec des caractéristiques à la fois humaines et aviaires.
    Tengubi - feu-follet qui apparaît dans le préfecture de Shizuoka.
    Tenji - yōkai qui habite dans une grotte de l'île d'Hachijô. C'est un yōkai joueur et farceur.
    Tenjōkudari - apparaît sous la forme d'une vieille femme pendue au plafond, la tête en bas.
    Tenjōname - il lèche le plafond, mais il ne le nettoie pas. Au contraire, il y laisse des traces de salive.
    Tenka - boule de feu.
    Tenko - renard céleste, le plus puissant des kitsune.
    Tenmaru - yōkai de Kanra dans le département de Gunma, ressemblant au Kasha.
    Tennin (en) - être céleste danseur, chanteur et musicien.
    Te-no-me - yōkai né d’une rancœur, il a les yeux sur la paume de ses mains.
    Tenzurushi - espèce de bébé qui descend du plafond, la nuit.
    Teratsutsuki - onryō d'un homme qui a vécu au VIe siècle, Mononobe no Moriya.
    Tesso - prêtre dédaigné par l'empereur et qui, selon la légende, devient un essaim de rats qui sème la dévastation dans le temple rival.
    Tetsuso - autre variante de l'orthographe de Tesso.
    Todomeki - à l'apparence d'une femme au corps couvert d’yeux. Elle vole l'argent dans les poches des gens.
    Tōfu-kozō - à l'apparence d'un enfant avec un grand chapeau de jonc tenant un plateau de tofu à la main.
    Toire-no-Hanakosan - légende urbaine japonaise décrivant un fantôme hantant les toilettes des écoles.
    Tomokazuki - apparaît au fond de la mer du pays Shima (actuelle Préfecture de Mie) et effraie les plongeuses qui pêchent les coquillages en apnée.
    Tôrimono - apparaît sous la forme d'un vieillard aux cheveux blancs et rend fou ceux qui l'observent.
    Tōtetsu - nom japonais donné au monstre Taotie de Chine.
    Tsuchigumo - araignée géante.
    Tsuchikorobi - fait peur aux voyageurs qui passent les cols en montagnes.
    Tsuchinoko - cryptide légendaire du Japon qui ressemble à un serpent.
    Tsuitatedanuki - se montre la nuit, sous l'apparence d'un paravent géant, pour entravait le chemin.
    Tsujigami - démon qui se manifeste aux croisements des chemins.
    Tsukinowaguma - ours légendaire.
    Tsukuba-hōin - tengu de la Province d' Hitachi.
    Tsukumogami - objet qui peut acquérir une âme et s'animer s'il atteint son 100ème anniversaire.
    Tsurara-onna - femme des stalactites de glace.
    Tsurubebi - feu bleuâtre qui ondule çà et là, suspendu à une branche d’arbre.
    Tsurube-otoshi - monstre qui se laisse tomber du haut des arbres.

U-V

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

	// Essai
	if(message.content.startsWith(prefix + "youkaidex")) {
		try {
			var youkaiNameList = "**Index Youkai**\n";
			var erreur = "1";
			for (var i = 0; i < youkaidex.length; i++) {
				erreur += "a";
				var currentYoukai = youkaidex[i];
				erreur += "v";
				youkaiNameList += currentYoukai.getName() + "\n";
				erreur += "b";
			}

			//var testyoukai = new Youkai();
			//testyoukai.setYoukai("Yamatengu", "Démon de la montagne");
			erreur += "c";
			message.channel.send(youkaiNameList);
		}
		catch {
			message.channel.send("Problème de codage : " + erreur);
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
