// ---------- EMBER · AI HOST ----------
const STEAKS = [
  { name: 'Ribeye', price: 32, tag: 'THE CLASSIC', meta: 'RICH & JUICY · 12 OZ',
    desc: 'Rich marbling, a deep sear, and a beautifully savory finish.',
    aliases: ['ribeye', 'rib eye', 'marbled', 'entrecot', 'entrecôte', 'rib steak'] },
  { name: 'Filet Mignon', price: 38, tag: 'HOUSE FAVORITE', meta: 'TENDER & ELEGANT · 8 OZ',
    desc: 'Exceptionally tender beef with a delicate texture and a golden crust.',
    aliases: ['filet', 'mignon', 'tenderloin', 'filet mignon', 'filete', 'lende'] },
  { name: 'New York Strip', price: 35, tag: 'THE SHOWSTOPPER', meta: 'BOLD & BALANCED · 12 OZ',
    desc: 'A bold, beefy cut with a satisfying bite and crisp caramelized edges.',
    aliases: ['strip', 'new york', 'ny strip', 'strip steak'] },
  { name: 'Porterhouse', price: 46, tag: 'BIG APPETITE', meta: 'BIG & BOLD · 20 OZ',
    desc: 'The best of both worlds: strip steak and tender filet in one cut.',
    aliases: ['porterhouse', 'porter house'] },
  { name: 'Top Sirloin', price: 27, tag: 'THE CROWD-PLEASER', meta: 'LEAN & SAVORY · 10 OZ',
    desc: 'Lean, hearty, and full of classic grilled-beef flavor.',
    aliases: ['sirloin', 'top sirloin', 'solomillo', 'lomo'] },
  { name: 'Flat Iron', price: 29, tag: "CHEF'S PICK", meta: 'TENDER & BEEFY · 10 OZ',
    desc: 'Wonderfully tender with a rich crust and plenty of character.',
    aliases: ['flat iron', 'flatiron'] }
];

const SIDES = [
  { name: 'Skin-on Fries', price: 7, tag: 'EXTRA CRISPY', desc: 'Golden, crunchy fries finished with flaky salt.',
    aliases: ['fries', 'french fries', 'skin on fries', 'chips', 'patatas fritas', 'pommes frites', 'frites', 'patatine', 'papas fritas'] },
  { name: 'Garlic Mash', price: 8, tag: 'RICH & CREAMY', desc: 'Whipped potatoes with roasted garlic and butter.',
    aliases: ['mash', 'mashed potatoes', 'potatoes', 'potato', 'garlic mash', 'pure de papas', 'purea de patatas', 'kartoffelstampf', 'pommes puree', 'puree'] },
  { name: 'Charred Greens', price: 9, tag: 'FRESH OFF FIRE', desc: 'Seasonal greens kissed by the grill with lemon.',
    aliases: ['charred greens', 'grilled greens', 'greens', 'espinacas', 'gemuse', 'hortalizas', 'verduras', 'spinach', 'broccoli'] },
  { name: 'Smoked Mac', price: 9, tag: 'CHEESY FAVORITE', desc: 'Comfort-food macaroni in a creamy cheese sauce.',
    aliases: ['mac', 'macaroni', 'mac and cheese', 'smoked mac', 'cheese mac', 'macarrones', 'macarrao', 'macaroni and cheese'] },
  { name: 'Garden Salad', price: 8, tag: 'BRIGHT & FRESH', desc: 'Crisp greens, ripe tomatoes, and tangy house dressing.',
    aliases: ['salad', 'garden salad', 'house salad', 'ensalada', 'salade', 'insalata'] },
  { name: 'Parmesan Pasta', price: 10, tag: 'COMFORT CLASSIC', desc: 'Buttery pasta tossed with parmesan and cracked pepper.',
    aliases: ['pasta', 'parmesan pasta', 'pates'] },
  { name: 'Skillet Cornbread', price: 6, tag: 'WARM & GOLDEN', desc: 'Warm, buttery cornbread with a touch of honey.',
    aliases: ['cornbread', 'corn bread', 'skillet cornbread', 'bread', 'pan de maiz', 'maisbrot'] },
  { name: 'Seasonal Veggies', price: 8, tag: 'SEASONAL PICK', desc: 'A colorful mix of market vegetables, lightly grilled.',
    aliases: ['seasonal veggies', 'veggies', 'vegetables', 'market vegetables', 'roasted vegetables', 'vegetales', 'verduras', 'gemüse', 'legumes'] }
];

const DRINK_RE = /\b(wine|beer|cocktails?|whiskey|whisky|bourbon|drinks?|beverages?|bar|alcohol|coffee|espresso|tea|seltzer|soda|juice|mocktails?|drink menu)\b/;
const SWEET_RE = /\b(desserts?|cake|chocolate|ice cream|sorbet|gelato|tiramisu|flan|pies?|pastry|sweets?|cupcakes?|brownies?|cheesecake|panna cotta|cr.e br.le)\b/;
const VEG_RE = /\b(vegetarian|vegan|veggies?|plant based|meatless|gluten free|dairy free|nut free|allerg|intoleran)\b/;
const NON_BEEF_RE = /\b(chicken|fish|salmon|tuna|pork|turkey|duck|lamb|shrimp|seafood|tofu|pizza|burgers?|sandwich|soup|ramen|curry|tacos?|burritos?|noodles?|rice|eggs?|breakfast|brunch|pancakes?|waffles?|sushi|sea bass|trout|tilapia|catfish|crab|lobster|oysters?|scallops?|clams?|octopus|squid|eel|frog|alligator|venison|bison|buffalo|goat|kangaroo|emu|meatballs?|sausage|bacon|ham|prosciutto|pepperoni)\b/;
const META_REQ = /^(recommendations?|suggestions?|ideas?|options?|specials?|anything|something|everything|food|meal|dinner|lunch|stuff|things?|good|best|nice|new|please)$/;

const GREETINGS = [
  "Hey! I'm Ember — Sunset & Sear's AI host. Ask me about the steaks, sides, hours, or how to plan the perfect golden-hour dinner.",
  "Hey there! Ember here, your AI host at Sunset & Sear. I know this menu inside and out — steaks, sides, prices, the whole vibe. What are you in the mood for?",
  "Hello! I'm Ember, the AI host at Sunset & Sear. The fire's already lit — ask me anything about the menu, hours, or the perfect evening out."
];
const THANKS = [
  "Anytime! Now go chase that sunset — I'll be here if you need anything else.",
  "My pleasure! Enjoy that steak — you've earned it.",
  "Happy to help! I'll be right here if you want seconds... I mean, recommendations."
];
const BYES = [
  "See you at golden hour! Save me a corner of the ribeye.",
  "Catch you at the grill!",
  "Later! May your steak be perfectly seared."
];
const PIVOTS = [
  "Want me to walk you through the steaks instead?",
  "Our six steaks are all fire-kissed — want the rundown?",
  "I can tell you about the ribeye, the filet, or the showstopper porterhouse."
];

const pick = arr => arr[Math.floor(Math.random() * arr.length)];
const R = (text, page) => ({ text, page: page || null });
const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const aliasRe = a => new RegExp('\\b' + esc(a) + '\\b');

const ctx = { item: null, kind: null, pending: null };

function norm(q) {
  return ' ' + q.toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, ' ').replace(/\s+/g, ' ').trim() + ' ';
}

function findItem(s) {
  for (const st of STEAKS) if (st.aliases.some(a => aliasRe(a).test(s))) return { kind: 'steak', it: st };
  for (const sd of SIDES) if (sd.aliases.some(a => aliasRe(a).test(s))) return { kind: 'side', it: sd };
  return null;
}

function extractRequest(raw) {
  const m = raw.toLowerCase().match(/(?:do you (?:have|got|serve|carry|offer|sell)|got any|is there|are there|can i (?:get|have|order|try|eat)|i'?ll (?:have|get|take|try|order|eat)|i want|i'd like|id like|give me|gimme|let me get|thinking about|in the mood for|how about)\s+(.+)/);
  if (!m) return null;
  const t = m[1]
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\b(a|an|the|some|any|your|y'all|me|please|to|eat|food|drink|something|anything|what|about|for|with|have|has|got|is|are|there|you|we|our|us|kind|sort|of|on|in|at|it|this|that|good|really|very)\b/g, ' ')
    .replace(/\s+/g, ' ').trim();
  if (!t || META_REQ.test(t)) return null;
  return t;
}

function describeItem(found) {
  const { kind, it } = found;
  ctx.item = it;
  ctx.kind = kind;
  if (kind === 'steak') {
    return R(pick([
      `${it.name} — $${it.price}. ${it.desc} It's tagged "${it.tag}" and runs ${it.meta}.`,
      `The ${it.name}, $${it.price}. ${it.desc} Tag: "${it.tag}" · ${it.meta}.`,
      `Ooh, the ${it.name}. That's $${it.price} — ${it.desc} (${it.tag} · ${it.meta})`
    ]), 'menu');
  }
  return R(pick([
    `${it.name} — $${it.price}. ${it.desc} One of our best sides, honestly.`,
    `The ${it.name} is $${it.price} — ${it.desc}`,
    `${it.name}, $${it.price}. ${it.desc}`
  ]), 'sides');
}

function steakList() {
  return R("Here's the lineup: " + STEAKS.map(x => `${x.name} ($${x.price})`).join(', ') + ". Ask me about any of them — or tell me what you're in the mood for and I'll point you at the right cut.", 'menu');
}

function sidesList() {
  return R("The sides: " + SIDES.map(x => `${x.name} ($${x.price})`).join(', ') + ". The Skillet Cornbread is the move, if you ask me.", 'sides');
}

function noItemReply(thing) {
  ctx.pending = 'steaks';
  return R(pick([
    `Unfortunately, we don't have ${thing} on the menu.`,
    `Unfortunately, ${thing} isn't on our menu — Sunset & Sear keeps it strictly steakhouse.`,
    `No ${thing} here, I'm afraid. Everything on our menu comes off the open flame.`
  ]) + ' ' + pick(PIVOTS), 'menu');
}

function noBeefReply(thing) {
  ctx.pending = 'steaks';
  return R(pick([
    `Unfortunately, we don't do ${thing} — no chicken, no fish, just beef kissed by the flame.`,
    `Sadly, ${thing} isn't our scene. Our kitchen is all about the grill and the steak.`,
    `We don't serve ${thing}, but we've got six serious steaks and eight fire-kissed sides.`
  ]) + ' ' + pick(PIVOTS), 'menu');
}

function drinksReply() {
  return R(pick([
    "The bar keeps it bold — big reds, smoked old fashioneds, and something cold for the golden-hour heat. Your server has tonight's pour list.",
    "We've got you covered drink-wise: serious reds, a proper old fashioned, and cold ones for the heat. Ask your server for tonight's list.",
    "Drinks are handled — think big reds and smoked cocktails. The pour list changes nightly."
  ]));
}

function noDessertReply() {
  ctx.pending = 'sides';
  return R(pick([
    "Unfortunately, we don't do dessert — we save the appetite for a second helping of steak.",
    "No dessert here, I'm afraid. We'd rather you finish strong on the main event.",
    "Dessert isn't on the menu — but the Skillet Cornbread comes close, if that counts."
  ]) + ' Want the sides rundown?', 'sides');
}

function vegReply() {
  return R(pick([
    "We've got you — the Seasonal Veggies and Garden Salad are legitimately great. Charred greens with lemon never miss.",
    "Vegetarian-friendly? The Seasonal Veggies and Garden Salad are the move. Everything else on the menu is very much beef.",
    "The Garden Salad and Seasonal Veggies have you covered — fresh, charred, and actually good."
  ]), 'sides');
}

function priceReply(s) {
  const found = findItem(s);
  const target = found ? found.it : ctx.item;
  if (target && target.price) {
    return R(pick([
      `The ${target.name} runs $${target.price}.`,
      `${target.name} is $${target.price} — worth every cent, honestly.`,
      `That'll be $${target.price} for the ${target.name}.`
    ]), (found ? found.kind : ctx.kind) === 'steak' ? 'menu' : 'sides');
  }
  return R(pick([
    "Steaks run $27 to $46 and sides $6 to $10. The Top Sirloin ($27) and Flat Iron ($29) are the budget-friendly picks.",
    "You're looking at $27–$46 for steaks and $6–$10 for sides. Great value for the quality — the Porterhouse at $46 is the splurge.",
    "Prices: steaks $27–$46, sides $6–$10. I'd say the Flat Iron at $29 is the sweet spot."
  ]), 'menu');
}

function recommendReply(s) {
  const has = (...w) => w.some(x => s.includes(x));
  const byName = n => STEAKS.find(x => x.name === n);
  let st = null, why = '';
  if (has('date', 'romantic', 'anniversary', 'birthday', 'special', 'impress')) {
    st = byName('Porterhouse');
    why = 'For an occasion, the Porterhouse is the move — strip and filet in one 20 oz showstopper.';
  } else if (has('lean', 'healthy', 'light', 'diet', 'calorie', 'watch')) {
    st = byName('Top Sirloin');
    why = 'Keeping it lean? The Top Sirloin — hearty flavor, easy on the waistline.';
  } else if (has('rich', 'juicy', 'indulgent', 'splurge', 'treat', 'decadent')) {
    st = byName('Ribeye');
    why = 'Go rich — the Ribeye is marbled, seared, and unapologetic.';
  } else if (has('tender', 'elegant', 'refined')) {
    st = byName('Filet Mignon');
    why = 'The Filet Mignon is the elegant pick — exceptionally tender with a golden crust.';
  } else if (has('big', 'hungry', 'appetite', 'share', 'feeds', 'two', 'table')) {
    st = byName('Porterhouse');
    why = 'Big appetite? The Porterhouse feeds two and lives up to the hype.';
  } else if (has('budget', 'cheap', 'value', 'deal', 'under', 'afford')) {
    st = byName('Top Sirloin');
    why = 'Best value: the Top Sirloin at $27 — lean, hearty, classic.';
  } else {
    st = pick([byName('Porterhouse'), byName('Ribeye'), byName('Filet Mignon')]);
    why = pick([
      'Honestly, the Porterhouse is hard to beat — it\'s two steaks in one.',
      'The Ribeye never misses — rich marbling, deep sear, big flavor.',
      'You can\'t go wrong with the Filet Mignon — tender, elegant, golden-crusted.'
    ]);
  }
  ctx.item = st;
  ctx.kind = 'steak';
  return R(`${why} It's $${st.price} — ${st.desc}`, 'menu');
}

// ---------- MULTILINGUAL SUPPORT ----------
const NON_BEEF_INTL_RE = /\b(pollo|poulet|hähnchen|frango|peixe|poisson|pesce|porco|cerdo|schwein|schweinefleisch|jamon|jambon|schinken|speck|wurst|saucisse|pato|gans|ente|fisch|fish)\b/;

const LANG_DEFS = {
  es: {
    stop: ['hola','buenas','buenos','dias','días','el','la','los','las','de','que','una','por','para','con','tienes','quiero','gracias','tengo','está','estoy','hay','pero','muy','este','esta','eso','también','entonces','ahora','dónde','cuánto','puedes','quisiera','favor','ser','estar','hacer','puede','donde','cuando','después','antes','sobre','entre','sin','hasta','desde','hacia','están','tienen','somos','soy','eres','fue','será','cuanto','cuesta','vale','dale','bueno','buena'],
    greetRe: /\b(hola|buenas|buenos|buenos dias|buenas tardes|buenas noches)\b/,
    thanksRe: /\b(gracias|mil gracias|te lo agradezco)\b/,
    byeRe: /\b(adios|adiós|chao|hasta luego|nos vemos|hasta pronto)\b/,
    menuRe: /\b(menu|menú|carta|lista)\b/,
    hoursRe: /\b(horario|horarios|horas?|apertura|cierran?|abren|funcionan)\b/,
    priceRe: /\b(precio|precios|cuánto|cuanto|cuesta|valor)\b/,
    sidesRe: /\b(acompañamientos?|guarniciones?|entradas|extras)\b/,
    t: {
      greeting: ["¡Hola! Soy Ember, la anfitriona IA de Sunset & Sear. Pregúntame por los filetes, los acompañamientos o los horarios."],
      thanks: ["¡De nada! Disfruta ese filete — te lo mereces.", "Con gusto. ¡Que aproveche!"],
      bye: ["¡Nos vemos al atardecer! Guárdame un pedazo de ribeye."],
      itemSteak: it => `${it.name} — $${it.price}. ${it.desc} Etiqueta: "${it.tag}" · ${it.meta}.`,
      itemSide: it => `${it.name} — $${it.price}. ${it.desc}`,
      menuList: list => `La carta: ${list}. Pregúntame por cualquiera.`,
      sidesList: list => `Los acompañamientos: ${list}.`,
      hours: ["Abrimos de martes a domingo, de 5 PM hasta tarde. La hora dorada (6–8 PM) es la mejor luz.", "Martes a domingo, 5 PM–tarde. Llega entre 6–8 para el atardecer sobre tu mesa."],
      priceRange: "Filetes de $27 a $46, acompañamientos de $6 a $10. El Flat Iron a $29 es el punto dulce.",
      noBeef: thing => `Lamentablemente, no servimos ${thing} — nuestra cocina es puramente de res a la parrilla.`,
      fallback: list => `Todavía estoy aprendiendo idiomas — en inglés funciona mejor. Mientras tanto, la carta: ${list}.`
    }
  },
  fr: {
    stop: ['bonjour','salut','bonsoir','merci','le','la','les','de','des','et','une','est','je','tu','vous','pour','avec','pas','que','qui','dans','sur','au','aux','du','ce','cette','il','elle','nous','ils','ont','être','avoir','plus','très','bien','mon','ma','mes','notre','votre','leur','ne','se','son','sa','ses','sous','entre','sans','vers','chez','aussi','encore','déjà','toujours','souvent','parfois','jamais','voici','voilà','comment','combien','pourquoi','quand','où','quel','quelle','quels','quelles','avez','désolé','excusez','pardon','volontiers','coucou','svp','stp','plait','plaît','c est','est-ce'],
    greetRe: /\b(bonjour|salut|bonsoir|coucou)\b/,
    thanksRe: /\b(merci|je vous remercie)\b/,
    byeRe: /\b(au revoir|à bientôt|a bientot|tchao|à plus tard)\b/,
    menuRe: /\b(menu|menüs|carte|menus|la carte)\b/,
    hoursRe: /\b(horaires?|heures?|ouverture|fermeture|ouvre|ferme)\b/,
    priceRe: /\b(prix|coût|cout|combien|tarif)\b/,
    sidesRe: /\b(accompagnements?|garnitures?|extras|entrées)\b/,
    t: {
      greeting: ["Salut ! Je suis Ember, l'hôte IA de Sunset & Sear. Demandez-moi les steaks, les accompagnements ou les horaires."],
      thanks: ["Avec plaisir ! Profitez bien de ce steak.", "De rien ! Bon appétit."],
      bye: ["À plus tard, à l'heure dorée ! Gardez-moi un morceau de ribeye."],
      itemSteak: it => `${it.name} — $${it.price}. ${it.desc} Tagué « ${it.tag} » · ${it.meta}.`,
      itemSide: it => `${it.name} — $${it.price}. ${it.desc}`,
      menuList: list => `La carte : ${list}. Demandez-moi pour le détail.`,
      sidesList: list => `Les accompagnements : ${list}.`,
      hours: ["Ouvert mardi–dimanche, 17h–minuit. L'heure dorée (18h–20h) offre la plus belle lumière.", "Mar–Dim, 17h–tard. Venez vers 18h–20h pour le coucher de soleil sur votre table."],
      priceRange: "Steaks de 27 $ à 46 $, accompagnements de 6 $ à 10 $. Le Flat Iron à 29 $ est le meilleur rapport.",
      noBeef: thing => `Désolé, nous ne servons pas de ${thing} — notre cuisine est 100 % bœuf grillé à la flamme.`,
      fallback: list => `J'apprends encore les langues — l'anglais fonctionne mieux. En attendant, la carte : ${list}.`
    }
  },
  de: {
    stop: ['hallo','servus','moin','grüezi','danke','bitte','der','die','das','und','ich','du','nicht','ist','ein','eine','den','dem','des','im','am','es','sie','wir','ihr','auch','sehr','gut','aber','oder','wie','wer','wann','wo','haben','sein','mit','auf','zu','von','für','an','in','bei','nach','vor','über','unter','zwischen','durch','gegen','ohne','um','als','wenn','dann','noch','schon','immer','oft','manchmal','nie','vielleicht','hier','dort','woher','wohin','warum','wieso','welche','welcher','welches','sind','kann','können','muss','müssen','soll','sollen','wird','werden','war','waren','hat','habe','hast','habt','geht','gehe','gibt','gab','nimmt','nehmen','kauft','kaufen','isst','essen','trinkt','tschüss','tschau'],
    greetRe: /\b(hallo|servus|grüezi|moin|guten tag|guten abend)\b/,
    thanksRe: /\b(danke|vielen dank)\b/,
    byeRe: /\b(tschüss|tschau|auf wiedersehen|bis später|bis bald|servus)\b/,
    menuRe: /\b(karte|speisekarte|menü|menu|karten)\b/,
    hoursRe: /\b(öffnungszeiten|öffnungszeit|zeiten|stunden|öffnet|schließt|geöffnet)\b/,
    priceRe: /\b(preis|preise|kosten|wie viel|was kostet)\b/,
    sidesRe: /\b(beilagen?|extras|zubehör)\b/,
    t: {
      greeting: ["Hallo! Ich bin Ember, die KI-Gastgeberin von Sunset & Sear. Fragen Sie mich zu Steaks, Beilagen oder Öffnungszeiten."],
      thanks: ["Gern geschehen! Guten Appetit.", "Kein Problem — viel Spaß beim Steak."],
      bye: ["Bis zur Golden Hour! Heben Sie mir ein Stück Ribeye auf."],
      itemSteak: it => `${it.name} — $${it.price}. ${it.desc} Tag: "${it.tag}" · ${it.meta}.`,
      itemSide: it => `${it.name} — $${it.price}. ${it.desc}`,
      menuList: list => `Die Karte: ${list}. Fragen Sie mich gerne nach Details.`,
      sidesList: list => `Die Beilagen: ${list}.`,
      hours: ["Di–So, 17–spät geöffnet. Die Golden Hour (18–20 Uhr) ist das beste Licht.", "Di–So, 17 Uhr–spät. Kommen Sie gegen 18–20 Uhr für den Sonnenuntergang am Tisch."],
      priceRange: "Steaks 27–46 $, Beilagen 6–10 $. Das Flat Iron für 29 $ ist der Sweet Spot.",
      noBeef: thing => `Leider führen wir kein ${thing} — unsere Küche ist reines Rindfleisch vom Grill.`,
      fallback: list => `Ich lerne noch Sprachen — Englisch funktioniert am besten. Hier die Karte: ${list}.`
    }
  },
  pt: {
    stop: ['olá','ola','oi','bom','dia','tarde','noite','obrigado','obrigada','você','está','são','muito','bem','mas','ou','como','quando','onde','há','meu','minha','seu','sua','nosso','nossa','para','com','por','mais','sem','sob','sobre','entre','até','desde','contra','perante','durante','mediante','após','antes','depois','agora','sempre','nunca','também','então','assim','aqui','ali','quem','qual','quais','quanto','quanta','quantos','quantas','porque','pois','porém','contudo','entretanto','inclusive','senão','estou','estamos','estão','somos','é','foi','ser','estar','ter','fazer','dizer','ir','vir','ver','saber','poder','querer','dever','ficar','tudo','nada','algo','alguém','ninguém','cada','outro','outra','mesmo','mesma','já','ainda','só','apenas','quase','pouco','bastante','demais','tão','tanto','tanta','bom','boa'],
    greetRe: /\b(olá|ola|oi|bom dia|boa tarde|boa noite|opa)\b/,
    thanksRe: /\b(obrigado|obrigada|valeu)\b/,
    byeRe: /\b(tchau|até logo|adeus|até mais|fui|xau)\b/,
    menuRe: /\b(cardápio|cardapio|menu|menus|carta)\b/,
    hoursRe: /\b(horário|horarios|horas?|abre|fecha|funcionamento)\b/,
    priceRe: /\b(preço|precos|quanto|quanto custa|valor)\b/,
    sidesRe: /\b(acompanhamentos?|guarnições?|guarnicoes|extras)\b/,
    t: {
      greeting: ["Olá! Eu sou a Ember, a anfitriã de IA do Sunset & Sear. Pergunte sobre os cortes, acompanhamentos ou horários."],
      thanks: ["De nada! Aproveite o file — você mereceu.", "Imagina! Bom apetite."],
      bye: ["Até a hora dourada! Guarda um pedaço de ribeye pra mim."],
      itemSteak: it => `${it.name} — $${it.price}. ${it.desc} Tag: "${it.tag}" · ${it.meta}.`,
      itemSide: it => `${it.name} — $${it.price}. ${it.desc}`,
      menuList: list => `O cardápio: ${list}. Pergunte sobre qualquer um.`,
      sidesList: list => `Os acompanhamentos: ${list}.`,
      hours: ["Terça a domingo, 17h até tarde. A hora dourada (18h–20h) é o melhor horário.", "Ter–Dom, 17h–tarde. Chegue entre 18h–20h pro pôr do sol na sua mesa."],
      priceRange: "Cortes de $27 a $46, acompanhamentos de $6 a $10. O Flat Iron a $29 é o melhor custo-benefício.",
      noBeef: thing => `Infelizmente, não servimos ${thing} — nossa cozinha é 100% carne bovina grelhada na chama.`,
      fallback: list => `Ainda estou aprendendo idiomas — inglês funciona melhor. Enquanto isso, o cardápio: ${list}.`
    }
  },
  it: {
    stop: ['ciao','buongiorno','buonasera','grazie','prego','il','lo','la','le','di','che','un','una','non','per','con','su','in','da','del','della','dello','dei','delle','al','alla','ai','agli','nel','nella','nei','negli','sul','sulla','sui','sugli','sono','sei','siamo','siete','hanno','molto','anche','ma','come','quando','dove','perché','cosa','chi','quale','quali','quanto','quanta','ci','ne','mi','ti','si','vi','li','mio','mia','tuo','tua','suo','sua','nostro','nostra','vostro','vostra','loro','questo','questa','questi','queste','quello','quella','eravamo','erano','era','aveva','avevano','essere','avere','fare','dire','dare','vedere','sapere','potere','volere','dovere','andare','venire','stare','tutto','niente','qualcosa','qualcuno','nessuno','ogni','altro','altra','stesso','stessa','già','ancora','solo','appena','quasi','poco','abbastanza','così','allora','adesso','ora','dopo','prima','sopra','sotto','tra','fra','verso','contro','senza','durante','mediante','secondo','oppure','invece','infatti','infine','intanto','dentro','fuori','dietro','davanti','accanto','presso','lontano','vicino','soltanto','neanche','nemmeno','neppure'],
    greetRe: /\b(ciao|buongiorno|buonasera|buon pomeriggio|salve)\b/,
    thanksRe: /\b(grazie|grazie mille|ti ringrazio)\b/,
    byeRe: /\b(arrivederci|a dopo|a presto|ci vediamo)\b/,
    menuRe: /\b(menù|menu|carta|lista)\b/,
    hoursRe: /\b(orari|orario|orari di apertura|apertura|chiusura|apre|chiude)\b/,
    priceRe: /\b(prezzo|prezzi|quanto|quanto costa|costo)\b/,
    sidesRe: /\b(contorni|contorno|extra|guarnizioni)\b/,
    t: {
      greeting: ["Ciao! Sono Ember, la hostess AI di Sunset & Sear. Chiedimi dei tagli, dei contorni o degli orari."],
      thanks: ["Prego! Buon appetito con quella bistecca.", "Figurati! Divertiti pure."],
      bye: ["Ci vediamo all'ora d'oro! Tenimi da parte un pezzo di ribeye."],
      itemSteak: it => `${it.name} — $${it.price}. ${it.desc} Tag: "${it.tag}" · ${it.meta}.`,
      itemSide: it => `${it.name} — $${it.price}. ${it.desc}`,
      menuList: list => `Il menù: ${list}. Chiedimi pure il dettaglio.`,
      sidesList: list => `I contorni: ${list}.`,
      hours: ["Mar–dom, 17:00–tardi. L'ora d'oro (18–20) è la luce migliore.", "Mar–Dom, 17–tardi. Vieni verso le 18–20 per il tramonto sulla tua tavola."],
      priceRange: "Tagli da $27 a $46, contorni da $6 a $10. Il Flat Iron a $29 è il miglior rapporto.",
      noBeef: thing => `Purtroppo non serviamo ${thing} — la nostra cucina è solo manzo alla fiamma.`,
      fallback: list => `Sto ancora imparando le lingue — l'inglese funziona meglio. Intanto, il menù: ${list}.`
    }
  }
};

// \b treats accented letters as non-word chars, so convert boundaries to literal
// spaces — s is always space-normalized and padded, making them equivalent.
function toWordFn(re) {
  const r = new RegExp(re.source.replace(/\\b/g, ' '));
  return s => r.test(s);
}
for (const def of Object.values(LANG_DEFS)) {
  for (const k of ['greetRe', 'thanksRe', 'byeRe', 'menuRe', 'hoursRe', 'priceRe', 'sidesRe']) {
    def[k] = toWordFn(def[k]);
  }
}

const SCRIPT_CODES = { 'zh': 'Chinese', 'ja': 'Japanese', 'ko': 'Korean', 'ru': 'Russian', 'ar': 'Arabic', 'hi': 'Hindi' };

function detectLang(raw) {
  if (/[\u4e00-\u9fff]/.test(raw)) return 'zh';
  if (/[\u3040-\u30ff\u31f0-\u31ff]/.test(raw)) return 'ja';
  if (/[\uac00-\ud7af]/.test(raw)) return 'ko';
  if (/[\u0400-\u04ff]/.test(raw)) return 'ru';
  if (/[\u0600-\u06ff]/.test(raw)) return 'ar';
  if (/[\u0900-\u097f]/.test(raw)) return 'hi';

  const s = norm(raw);
  for (const code of Object.keys(LANG_DEFS)) {
    const def = LANG_DEFS[code];
    if (def.greetRe(s) || def.thanksRe(s) || def.byeRe(s)) return code;
  }

  let best = 'en', bestScore = 0;
  for (const code of Object.keys(LANG_DEFS)) {
    const def = LANG_DEFS[code];
    let score = 0;
    for (const w of def.stop) if (s.includes(' ' + w + ' ')) score++;
    if (score > bestScore) { bestScore = score; best = code; }
  }
  return bestScore >= 2 ? best : 'en';
}

function replyIntl(raw, lang) {
  const def = LANG_DEFS[lang];
  const steakNames = STEAKS.map(x => `${x.name} ($${x.price})`).join(', ');
  const sideNames = SIDES.map(x => `${x.name} ($${x.price})`).join(', ');

  if (!def) {
    const langName = SCRIPT_CODES[lang] || lang;
    return R(`I can chat in English, Spanish, French, German, Portuguese or Italian — ${langName} isn't supported yet, but English works best for now. Here's the menu meanwhile: ${steakNames}.`, 'menu');
  }

  const t = def.t;
  const s = norm(raw);

  if (def.greetRe(s)) return R(pick(t.greeting));
  if (def.thanksRe(s)) return R(pick(t.thanks));
  if (def.byeRe(s)) return R(pick(t.bye));

  const found = findItem(s);
  if (found) {
    ctx.item = found.it;
    ctx.kind = found.kind;
    return found.kind === 'steak' ? R(t.itemSteak(found.it), 'menu') : R(t.itemSide(found.it), 'sides');
  }

  if (def.menuRe(s)) return R(t.menuList(steakNames), 'menu');
  if (def.sidesRe(s)) return R(t.sidesList(sideNames), 'sides');
  if (def.hoursRe(s)) return R(pick(t.hours), 'visit');
  if (def.priceRe(s)) return R(t.priceRange, 'menu');

  const nm = s.match(NON_BEEF_INTL_RE);
  if (nm) { ctx.pending = 'steaks'; return R(t.noBeef(nm[0]), 'menu'); }

  return R(t.fallback(steakNames));
}

function replyFor(q) {
  const raw = (q || '').trim();
  const lang = detectLang(raw);
  if (lang !== 'en') return replyIntl(raw, lang);
  const s = norm(raw);
  const has = (...w) => w.some(x => s.includes(x));

  if (/^\s*(hi|hello|hey|yo|hiya|howdy|sup)\b/.test(s) || has(' hello ', ' hi ', ' hey ')) {
    return R(pick(GREETINGS));
  }

  if (has('thank')) return R(pick(THANKS));
  if (has(' bye ', 'goodbye', ' see you ', ' later ', ' night ', 'good night')) return R(pick(BYES));

  if (/^\s*(yes|yeah|yep|yup|sure|ok|okay|please|do it|sounds good|go ahead|why not)\b/.test(s) && ctx.pending) {
    const p = ctx.pending;
    ctx.pending = null;
    if (p === 'steaks') return steakList();
    if (p === 'sides') return sidesList();
    if (p === 'recommend') return recommendReply(s);
  }

  if (has(' reserv', ' book ', ' table for ', 'waitlist', ' wait ', 'wait time')) {
    return R(pick([
      "Walk-ins are always welcome — that's the whole vibe. For bigger parties or a golden-hour table, I'd arrive right at 5 PM sharp.",
      "No reservations needed, but for a guaranteed golden-hour table I'd come at opening — 5 PM sharp.",
      "We're walk-in only, which keeps things easy. Big party? I'd suggest arriving right at open."
    ]), 'visit');
  }

  if (has(' kid', ' child', ' children', ' family ', ' baby ', ' toddler', 'high chair')) {
    return R("Kids are welcome — high chairs on request and we'll make the portions work for little appetites. The fries are usually a hit.");
  }
  if (has(' dog', ' pet', ' puppy', ' pups ')) {
    return R("Patio pups are welcome — the good dogs get the patio seats anyway.");
  }
  if (has(' park', ' valet', ' parking')) {
    return R("Street parking nearby, plus a lot behind the building. Valet on weekends — golden hour gets busy.");
  }
  if (has(' wifi', ' wi fi', ' internet', ' password')) {
    return R("We've got you — the Wi-Fi password is on the receipt. It's 'sear-and-charm', naturally.");
  }
  if (has(' birthday', ' anniversary', ' celebration', ' occasion', ' propose')) {
    return R("Ooh, an occasion! Tell your server — we'll make it golden. Golden-hour tables are the move, so arrive at 5 PM sharp.", 'visit');
  }
  if (has(' deliver', ' takeout', ' take out', ' to go ', ' take away', ' pickup', 'pick up')) {
    return R("We're a dine-in spot — no delivery or takeout. But honestly, the steaks are worth the trip.");
  }

  const req = extractRequest(raw);
  if (req) {
    const f = findItem(' ' + req + ' ');
    if (f) return describeItem(f);
    if (/\bsteaks?\b/.test(req)) return steakList();
    if (/\bsides?\b/.test(req)) return sidesList();
    if (DRINK_RE.test(req)) return drinksReply();
    if (SWEET_RE.test(req)) return noDessertReply();
    if (VEG_RE.test(req)) return vegReply();
    if (NON_BEEF_RE.test(req)) return noBeefReply(req);
    return noItemReply(req);
  }

  const pm = findItem(s);
  if (pm && has(' side ', ' pair', 'goes with', 'go with', ' with ', 'match', 'best with', 'what goes')) {
    const sd = pick(SIDES);
    return R(`With the ${pm.it.name}, I'd take the ${sd.name} ($${sd.price}) — ${sd.desc} That's a proper golden-hour plate.`, 'sides');
  }
  if (ctx.item && has(' side ', ' pair', 'goes with', 'go with', 'match', 'best with')) {
    const sd = pick(SIDES);
    return R(`With the ${ctx.item.name}, I'd take the ${sd.name} ($${sd.price}) — ${sd.desc}`, 'sides');
  }

  if (has(' price', ' cost ', ' how much ', ' much does ', ' expensive ', ' cheap ', ' worth ', ' prices')) {
    return priceReply(s);
  }

  if (has(' hour', ' open ', ' close ', ' when ', ' time ', ' late ', ' day ', 'tonight', 'closing', ' visit ', ' plan ')) {
    return R(pick([
      "We fire Tuesday through Sunday, 5 PM until late. Golden hour — roughly 6 to 8 PM — is peak magic, so come early for the best table light.",
      "We're open Tuesday–Sunday, 5 PM till late. Aim for 6–8 PM if you want the sunset doing its thing over your table.",
      "Hours: Tue–Sun, 5 PM–late. The golden hour window (6–8) is when the whole place glows."
    ]), 'visit');
  }

  if (has(' where ', ' location ', ' address ', ' find ', ' directions ', ' drive ', ' locate ')) {
    return R(pick([
      "We're a fictional spot for now, but picture it: warm lights, open flames, and the sky doing its sunset thing over the patio. Follow the smell of sear — you can't miss it.",
      "Follow your nose to the open flame — that's us. Warm lights, good company, sky full of amber. You can't miss it."
    ]), 'visit');
  }

  if (has('story', ' about ', ' history ', ' who ', ' origin ', ' founded ', ' name ', 'fictional')) {
    return R(pick([
      "Sunset & Sear is a fictional steakhouse built around one idea: a perfectly seared steak tastes better when the sky turns amber. Big cuts, open flames, good people — that's the whole philosophy.",
      "We started as a sketch on a napkin: big steaks, open flames, and a sky worth watching. Sunset & Sear is that idea, plated."
    ]), 'story');
  }

  if (has('sunset', ' golden ', ' view ', ' patio ', ' atmosphere ', ' vibe ', ' romantic ', ' date ', 'ambiance')) {
    return R(pick([
      "Golden hour — roughly 6 to 8 PM — is the move. String lights, open grill, sky doing its thing. It's the most romantic table in town, no contest.",
      "Come at golden hour. The light does half the decorating, the grill does the rest. Trust me on this one."
    ]), 'visit');
  }

  if (has('recommend', ' best ', ' favorite ', ' should i ', ' order ', ' pick ', ' choose ', ' suggest ', 'signature', ' popular ', ' good ', 'worth')) {
    ctx.pending = 'recommend';
    return recommendReply(s);
  }

  if (VEG_RE.test(s)) return vegReply();
  if (SWEET_RE.test(s)) return noDessertReply();

  if (has(' side ', ' sides ', 'side dish', 'extras', 'add on', 'addon', 'what else')) return sidesList();
  if (has('menu', 'steak', 'everything', 'full menu', 'list', 'show me', 'what do you', 'got any', 'what s good', 'whats good')) return steakList();

  if (DRINK_RE.test(s)) return drinksReply();

  if (pm) return describeItem(pm);

  if (ctx.item && s.split(' ').length <= 6) {
    return R(pick([
      `Still on the ${ctx.item.name}? It's $${ctx.item.price} — want me to compare it to another cut or suggest a pairing?`,
      `We were talking ${ctx.item.name} — $${ctx.item.price}. Happy to tell you how it compares or what goes well with it.`,
      `The ${ctx.item.name} runs $${ctx.item.price}. Want sides suggestions or the full lineup?`
    ]), ctx.kind === 'steak' ? 'menu' : 'sides');
  }

  const nm = s.match(NON_BEEF_RE);
  if (nm) return noBeefReply(nm[0]);

  return R(pick([
    "Hmm, that's a curveball — my grill only speaks steak. Try asking about the menu, prices, or when to visit.",
    "Interesting question — outside my steakhouse knowledge though. I can help with the menu, hours, reservations, or the vibe.",
    "I want to help, but that's beyond my fire. Steaks, sides, prices, hours — what do you need?"
  ]));
}

// ---------- LIVE AI ----------
const menuSummary =
  'Steaks: ' + STEAKS.map(x => `${x.name} — $${x.price} — ${x.desc} (${x.tag}, ${x.meta})`).join('; ') + '\n' +
  'Sides: ' + SIDES.map(x => `${x.name} — $${x.price} — ${x.desc}`).join('; ');

const SYSTEM_PROMPT = `You are Ember, the warm, witty AI host of Sunset & Sear — a fictional upscale steakhouse built around open flames and golden-hour sunsets. You speak like a great maître d': confident, a little playful, never stuffy.

The menu:
${menuSummary}

Facts: open Tuesday–Sunday, 5 PM until late. Golden hour (roughly 6–8 PM) is the best light and most romantic time. Walk-ins only — no reservations needed, arrive at 5 PM for big parties. Kids and patio dogs welcome. No delivery or takeout. No chicken, fish, or desserts — the kitchen is 100% beef kissed by flame. Street parking plus a lot behind the building; valet on weekends. Wi-Fi password: "sear-and-charm".

Rules:
- ALWAYS reply in the same language the guest writes in.
- Keep replies short and conversational — 1–4 sentences, like real chat. No bullet lists unless asked.
- Quote prices when relevant. Never invent menu items — if they ask for something we don't have (chicken, fish, dessert, etc.), say so kindly and suggest the closest steak instead.
- Be helpful about the vibe: golden hour, dates, celebrations, recommendations.`;

let chatHistory = [];
function pushHistory(m) {
  chatHistory.push(m);
  if (chatHistory.length > 20) chatHistory.splice(0, chatHistory.length - 20);
}

async function llmReply(userText) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 15000);
  try {
    const res = await fetch('https://text.pollinations.ai/openai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      signal: controller.signal,
      body: JSON.stringify({
        model: 'openai',
        temperature: 0.7,
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          ...chatHistory.slice(-12),
          { role: 'user', content: userText }
        ]
      })
    });
    if (!res.ok) throw new Error('llm status ' + res.status);
    const data = await res.json();
    const text = data && data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content;
    if (!text || !text.trim()) throw new Error('empty reply');
    return text.trim();
  } finally {
    clearTimeout(timer);
  }
}

const CHIPS = ['What\'s on the menu?', 'Steak prices', 'Hours & location', 'Plan my visit'];

const agentFab = document.getElementById('agentFab');
const agentPanel = document.getElementById('agentPanel');
const agentMsgs = document.getElementById('agentMsgs');
const agentChips = document.getElementById('agentChips');
const agentForm = document.getElementById('agentForm');
const agentInput = document.getElementById('agentInput');

function scrollMsgs() { agentMsgs.scrollTop = agentMsgs.scrollHeight; }

function addMsg(text, who) {
  const el = document.createElement('div');
  el.className = 'msg ' + who;
  el.textContent = text;
  agentMsgs.appendChild(el);
  scrollMsgs();
}

function addPageAction(page) {
  const b = document.createElement('button');
  b.type = 'button';
  b.className = 'msg-action';
  b.textContent = 'OPEN ' + PAGE_TITLES[page].toUpperCase() + ' PAGE ↗';
  b.addEventListener('click', () => goToPage(page));
  agentMsgs.appendChild(b);
  scrollMsgs();
}

function openAgent() {
  agentPanel.hidden = false;
  agentFab.setAttribute('aria-expanded', 'true');
  if (!agentMsgs.children.length) {
    const g = pick(GREETINGS);
    addMsg(g, 'bot');
    pushHistory({ role: 'assistant', content: g });
  }
  setTimeout(() => agentInput.focus(), 60);
}

function closeAgent() {
  agentPanel.hidden = true;
  agentFab.setAttribute('aria-expanded', 'false');
}

agentFab.addEventListener('click', () => agentPanel.hidden ? openAgent() : closeAgent());
document.getElementById('agentClose').addEventListener('click', closeAgent);
document.getElementById('askEmber').addEventListener('click', openAgent);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeAgent(); });

CHIPS.forEach(c => {
  const b = document.createElement('button');
  b.type = 'button';
  b.className = 'chip';
  b.textContent = c;
  b.addEventListener('click', () => send(c));
  agentChips.appendChild(b);
});

function send(text) {
  text = (text || '').trim();
  if (!text) return;
  addMsg(text, 'user');
  agentInput.value = '';
  pushHistory({ role: 'user', content: text });

  const typing = document.createElement('div');
  typing.className = 'msg bot typing';
  typing.innerHTML = '<span></span><span></span><span></span>';
  agentMsgs.appendChild(typing);
  scrollMsgs();

  llmReply(text).then(reply => {
    typing.remove();
    addMsg(reply, 'bot');
    pushHistory({ role: 'assistant', content: reply });
  }).catch(() => {
    typing.remove();
    const res = replyFor(text);
    addMsg(res.text, 'bot');
    if (res.page) addPageAction(res.page);
    pushHistory({ role: 'assistant', content: res.text });
  });
}

agentForm.addEventListener('submit', e => {
  e.preventDefault();
  send(agentInput.value);
});
