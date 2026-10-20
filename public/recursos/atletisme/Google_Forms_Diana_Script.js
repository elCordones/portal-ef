/**
 * ==============================================================================
 * GENERADOR AUTOMÀTIC DE GOOGLE FORMS PER A LA SESSIÓ 10
 * "Diana d'Autoavaluació - SdA Atletisme Cooperatiu (Cicle Superior)"
 * 
 * Autor: David Cordones (2026)
 * Llicència: AGPL v3 (Codi) / CC BY-SA 4.0 (Contingut)
 * ==============================================================================
 * 
 * INSTRUCCIONS D'ÚS (MOLT SENZILL, EN 30 SEGONS):
 * 1. Obre el navegador i ves a: https://script.google.com
 * 2. Fes clic a "+ Nou projecte".
 * 3. Esborra tot el codi que hi hagi i enganxa aquest codi sencer.
 * 4. Fes clic a la icona del disquet ("Desar") o Ctrl+S.
 * 5. Assegura't que a la barra superior està seleccionada la funció "crearFormulariDianaAtletisme" 
 *    i prem el botó "Executar" (▶️).
 * 6. Accepta els permisos habituals de Google.
 * 7. A la consola d'execució veuràs l'ENLLAÇ DIRECTE al teu nou Google Form creat 
 *    a la teva unitat de Google Drive, llest per compartir a Google Classroom!
 * ==============================================================================
 */

function crearFormulariDianaAtletisme() {
  const titol = "SdA Atletisme Cooperatiu - Diana d'Autoavaluació (Sessió 10)";
  const descripcio = 
    "Benvolgut/da atleta de Cicle Superior!\n\n" +
    "Aquesta és la teva Diana d'Autoavaluació final de la Situació d'Aprenentatge d'Atletisme Cooperatiu.\n" +
    "Respon amb total sinceritat puntuant del Nivell 1 al Nivell 4 segons el teu aprenentatge real.\n\n" +
    "Recorda: l'atletisme cooperatiu no mesura qui arriba primer, sinó com aprenem i ens ajudem junts!\n" +
    "🤝 Citius, Altius, Fortius... COMMUNITER!";

  // 1. Crear el formulari a Google Drive
  const form = FormApp.create(titol);
  form.setDescription(descripcio);
  form.setAllowResponseEdits(false);
  form.setAcceptingResponses(true);

  // Missatge de confirmació en enviar
  form.setConfirmationMessage(
    "🎉 Moltes felicitats per completar la SdA d'Atletisme Cooperatiu!\n" +
    "La teva autoavaluació s'ha registrat correctament. Ara reuneix-te amb el teu equip per a la Cerimònia de Diplomes!"
  );

  // -------------------------------------------------------------
  // SECCIÓ 1: IDENTIFICACIÓ DE L'ALUMNE/A
  // -------------------------------------------------------------
  form.addSectionHeaderItem()
    .setTitle("📋 1. Identificació de l'Alumne/a")
    .setHelpText("Indica les teves dades abans de començar l'avaluació.");

  // Nom i cognoms
  form.addTextItem()
    .setTitle("Nom i Cognoms de l'alumne/a")
    .setRequired(true);

  // Curs
  form.addMultipleChoiceItem()
    .setTitle("Curs")
    .setChoiceValues(["5è de Primària", "6è de Primària"])
    .setRequired(true);

  // Equip Cooperatiu
  form.addListItem()
    .setTitle("Equip Cooperatiu")
    .setChoiceValues([
      "Equip 1",
      "Equip 2",
      "Equip 3",
      "Equip 4",
      "Equip 5"
    ])
    .setRequired(true);

  // -------------------------------------------------------------
  // SECCIÓ 2: LES 4 DIMENSIONS DE LA DIANA (AUTOAVALUACIÓ)
  // -------------------------------------------------------------
  form.addSectionHeaderItem()
    .setTitle("🎯 2. La teva Diana d'Aprenentatge (Escala de l'1 al 4)")
    .setHelpText(
      "Puntua cada competència:\n" +
      "• Nivell 1: Inicial (M'ha costat força, necessito ajuda)\n" +
      "• Nivell 2: Bàsic (Ho aplico amb alguns dubtes o només si m'ho recorden)\n" +
      "• Nivell 3: Notable (Ho domino bé i col·laboro amb fluïdesa)\n" +
      "• Nivell 4: Excel·lent (Ho domino genial i ajudo activament els companys)"
    );

  // CE1: Salut i Esforç (Borg)
  form.addMultipleChoiceItem()
    .setTitle("🟢 CE1: Salut, Escalfament i Dosificació de l'Energia (Borg)")
    .setHelpText("Pregunta guia: Sé trobar el meu ritme de cursa aeròbic (zona Borg 4-6) per córrer de forma contínua sense ofegar-me i faig un bon escalfament per protegir la salut?")
    .setChoiceValues([
      "1 - Inicial: M'esgoto de seguida o camino; em costa reconèixer quan estic fatigat/da.",
      "2 - Bàsic: Mantinc la cursa a batzegades; reconec quan estic cansat/da però em costa dosificar.",
      "3 - Notable: Dosifico el meu ritme en zona Borg 5-6 durant quasi tota la cursa contínua.",
      "4 - Excel·lent: Regulo perfectament el meu esforç, conec els meus límits i ajudo la meva parella a dosificar."
    ])
    .setRequired(true);

  // CE2: Tècnica i Habilitats Atlètiques
  form.addMultipleChoiceItem()
    .setTitle("🔵 CE2: Tècnica i Habilitats Atlètiques")
    .setHelpText("Pregunta guia: He après i millorat el lliurament del testimoni en carrera cridant 'HOP!', el franqueig suau d'obstacles, la batuda a 1 peu en salts i la paràbola alta del vòrtex?")
    .setChoiceValues([
      "1 - Inicial: Desajust tècnic notable (miro enrere en relleus, batudes planes de taló, llançament pla).",
      "2 - Bàsic: Aplico els fonaments amb dubtes o vacil·lacions en el moviment.",
      "3 - Notable: Executo amb bona fluïdesa els relleus ('HOP!'), salts i el llançament amb fuetada a 45°.",
      "4 - Excel·lent: Gest tècnic fluid, segur i precís en totes les disciplines atlètiques."
    ])
    .setRequired(true);

  // CE3: Treball en Equip i Suport 5è-6è
  form.addMultipleChoiceItem()
    .setTitle("🟡 CE3: Treball en Equip, Ajut Mútua 5è-6è i Gestió de la Por")
    .setHelpText("Pregunta guia: He col·laborat amb respecte a l'equip mixt de 5è i 6è, donant suport a qui tenia por (salt d'alçada) i complint amb rigor els rols de jutge i cronometrador?")
    .setChoiceValues([
      "1 - Inicial: Passivitat, desinterès o conflictes; només em preocupava el meu resultat personal.",
      "2 - Bàsic: Participo i faig de jutge només si el mestre o el capità m'ho recorden.",
      "3 - Notable: Treballo coordinadament en equip i faig el rol d'observador amb honestedat i respecte.",
      "4 - Excel·lent: Lideratge positiu: animo a tothom, soc jutge exemplar i ajudo a resoldre dubtes."
    ])
    .setRequired(true);

  // CE4: Inclusió i Para-atletisme
  form.addMultipleChoiceItem()
    .setTitle("🟣 CE4: Inclusió, Respecte per la Diversitat i Para-atletisme")
    .setHelpText("Pregunta guia: He valorat l'atletisme adaptat com un dret per a tothom i he celebrat els èxits dels companys i companyes amb adaptacions?")
    .setChoiceValues([
      "1 - Inicial: Frustració amb errors propis o de companys; em costa acceptar les adaptacions.",
      "2 - Bàsic: Accepto les normes i la diversitat però sense implicar-m'hi de forma activa.",
      "3 - Notable: Animo i valoro sincerament els companys amb adaptacions o reptes específics.",
      "4 - Excel·lent: Promoc activament que tothom triomfi, m'adapto i celebro l'èxit compartit."
    ])
    .setRequired(true);

  // -------------------------------------------------------------
  // SECCIÓ 3: METACOGNICIÓ I REFLEXIÓ PERSONAL
  // -------------------------------------------------------------
  form.addSectionHeaderItem()
    .setTitle("💬 3. Reflexió Final Personal")
    .setHelpText("Escriu una breu reflexió sobre la teva experiència en aquesta Situació d'Aprenentatge.");

  form.addParagraphTextItem()
    .setTitle("Quina ha estat la teva millor victòria o aprenentatge personal en aquestes 10 sessions d'atletisme?")
    .setHelpText("Ex: he après a dosificar el meu ritme, he perdut la por al salt al matalàs llevapors, he après molt del meu company de 6è...")
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle("Com valores el suport que us heu donat entre alumnes de 5è i 6è al teu equip?")
    .setHelpText("Explica com us heu ajudat a superar els reptes del Passaport.")
    .setRequired(false);

  // -------------------------------------------------------------
  // OUTPUT I LOGS
  // -------------------------------------------------------------
  const formUrl = form.getPublishedUrl();
  const editUrl = form.getEditUrl();

  Logger.log("==================================================================");
  Logger.log("✅ FORMULARI DE GOOGLE CREAT AMB ÈXIT!");
  Logger.log("------------------------------------------------------------------");
  Logger.log("🔗 Enllaç per als alumnes (Google Classroom):");
  Logger.log(formUrl);
  Logger.log("------------------------------------------------------------------");
  Logger.log("✏️ Enllaç per al mestre (Edició i respostes):");
  Logger.log(editUrl);
  Logger.log("==================================================================");
}
