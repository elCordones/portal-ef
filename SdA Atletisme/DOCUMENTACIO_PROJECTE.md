# DOCUMENTACIÓ DEL PROJECTE I REGISTRE DE PROCÉS
## Situació d'Aprenentatge (SdA): "Míting d'Atletisme Cooperatiu" (Cicle Superior)

---

## 1. OBJECTIU DEL DOCUMENT

Aquest document recull la **trajectòria del treball realitzat**, les **decisions pedagògiques i curriculars preses**, l'**estat actual dels fitxers**, el **punt de control de la darrera sessió** i el **full de ruta (propers passos)** per reprendre i aprofundir en el desenvolupament del projecte en futures sessions de treball sense pèrdua de context.

---

## 2. ESTAT ACTUAL I PUNT DE CONTROL (Sessió: 14 d'octubre de 2026)

* **Estat general:** Desenvolupament complet i operatiu de tot el paquet de materials per a la **Sessió 10 (Tancament, Síntesi Interedats i Diana d'Autoavaluació)**.
* **Fites assolides en aquesta sessió:**
  1. **Document de Tancament del Passaport Atlètic d'Equip ([Tancament_Passaport_Sessio_10.html](file:///C:/Users/dcordone/Desktop/AGY/SdA%20Atletisme/Tancament_Passaport_Sessio_10.html)):**
     * Full A4 imprimible per equips de treball mixt (5è i 6è) que recull les 4 preguntes de síntesi sobre el suport mutu:
       - *La mirada de 5è:* què hem après i com ens hem sentit acompanyats pels de 6è.
       - *La mirada de 6è:* com hem guiat, acompanyat i donat confiança als de 5è.
       - *Superació d'equip:* resolució de moments de dubte, por o cansament.
       - *El Moment d'Or:* millor record compartit de les 10 sessions.
     * Contraportada solemne amb pacte de joc net, signatures dels 5 membres i segell de validació docent.
  2. **Aplicació Web Diana d'Autoavaluació per a Chromebooks ([Diana_Autoavaluacio_Chromebooks.html](file:///C:/Users/dcordone/Desktop/AGY/SdA%20Atletisme/Diana_Autoavaluacio_Chromebooks.html)):**
     * Aplicació interactiva autònoma per als dispositius de l'alumnat:
       - Escala de l'1 al 4 per als 4 eixos (CE1 Borg, CE2 Tècnica, CE3 Equip 5è-6è, CE4 Inclusió).
       - Gràfic de diana/radar SVG interactiu calculat dinàmicament en temps real segons les respostes de l'alumne/a.
       - Pregunta oberta de metacognició personal i botó directe per desar/imprimir en PDF.
       - Compliment estricte dels skills: favicon SVG minimalista i peu de pàgina de llicenciament resumit (David Cordones 2026, AGPL v3 / CC BY-SA 4.0).
  3. **Diana d'Autoavaluació Imprimible en Paper ([Diana_Autoavaluacio_Paper.html](file:///C:/Users/dcordone/Desktop/AGY/SdA%20Atletisme/Diana_Autoavaluacio_Paper.html)):**
     * Pla B analògic A4 per si fallés la connectivitat o els Chromebooks, amb diana concèntrica per pintar a mà i rúbrica resumida.
  4. **Script de Google Apps Script ([Google_Forms_Diana_Script.js](file:///C:/Users/dcordone/Desktop/AGY/SdA%20Atletisme/Google_Forms_Diana_Script.js)):**
     * Codi llest per executar a [script.google.com](https://script.google.com) que genera automàticament el Google Form a Google Drive amb totes les seccions i descriptors per penjar a Google Classroom.
  5. **Integració i Enllaçat Creuat:**
     * Actualització de [Passaport_Athletic_Alumnat.html](file:///C:/Users/dcordone/Desktop/AGY/SdA%20Atletisme/Passaport_Athletic_Alumnat.html), [Guia_Docent_SdA_Atletisme_CS.md](file:///C:/Users/dcordone/Desktop/AGY/SdA%20Atletisme/Guia_Docent_SdA_Atletisme_CS.md), [Guia_Docent_SdA_Atletisme_CS.html](file:///C:/Users/dcordone/Desktop/AGY/SdA%20Atletisme/Guia_Docent_SdA_Atletisme_CS.html) i [Sessions_Drive_HTML/Sessio_10_Diana_Autoavaluacio.html](file:///C:/Users/dcordone/Desktop/AGY/SdA%20Atletisme/Sessions_Drive_HTML/Sessio_10_Diana_Autoavaluacio.html) amb accés directe a tots els recursos.
  6. **Configuració i Validació del Formulari Google Forms a l'Entorn de Centre:**
     * El docent ha creat i personalitzat manualment el Google Form amb les preguntes d'identificació (Curs 5è / 6è i llista d'alumnes) i els criteris de la diana, a punt per compartir a Google Classroom.
     * **Pauta tècnica de dades per a iDoceo:** En cas d'haver aplicat bifurcació per seccions de curs, les dues columnes de nom generades al full de càlcul de respostes s'unifiquen directament en una sola columna per a iDoceo amb la fórmula:
       `=ARRAYFORMULA(SI(C2:C<>""; C2:C; D2:D))`
* **Punt exacte on ens hem quedat:**
  * Tot el paquet de tancament, materials per a l'alumnat i autoavaluació de la Sessió 10 està 100% creat, configurat i operatiu tant en l'entorn Google Classroom / Drive del mestre com en formats digitals autònoms i paper imprimible.
  * Propers passos pendents del backlog: Targetes plastificables d'estació per rotacions autònomes (Bloc 1) o Fitxa de Programació Oficial del Departament (Bloc 2).

---

## 3. ARQUITECTURA I MAPA DE FITXERS DEL PROJECTE

```
SdA Atletisme/
│
├── DOCUMENTACIO_PROJECTE.md             (Document central de control i continuïtat)
│
├── 📖 Guies Docents i Avaluació (Arrel)
│   ├── Guia_Docent_SdA_Atletisme_CS.md  / .html (Programació completa de les 10 sessions)
│   ├── Guia_Avaluacio_Docent_SdA_Atletisme.md / .html (Protocol de pista sessió a sessió)
│   ├── Guia_Detallada_Sessio_3_Relleus.md / .html (Desenvolupament quirúrgic de relleus)
│   └── Rubrica_Avaluacio_SdA_Atletisme.md / .html (Rúbrica oficial i simulador interactiu)
│
├── 🖨️ Materials Imprimibles i Digitals per a l'Alumnat (Arrel)
│   ├── Passaport_Athletic_Alumnat.html         (Díptic/full A4 de reptes esportius 1 a 5)
│   ├── Tancament_Passaport_Sessio_10.html       (Full A4 de síntesi interedats 5è-6è i signatures)
│   ├── Diana_Autoavaluacio_Chromebooks.html    (Web App interactiva per a Chromebooks amb radar SVG)
│   ├── Diana_Autoavaluacio_Paper.html          (Full A4 imprimible per pintar la diana concèntrica a mà)
│   ├── Google_Forms_Diana_Script.js            (Script Google Apps Script per generar el Form a Drive)
│   └── Coavaluacio_Relleus_Alumnat.html        (Fitxa bilingüe a 2 còpies per full A4)
│
├── 📂 Suite de Sessions per a Google Drive (`Sessions_Drive_HTML/`)
│   ├── Sessio_01_Velocitat_Reaccio.html           (S1 a punt per a Google Docs)
│   ├── Sessio_02_Franqueig_Obstacles.html         (S2 a punt per a Google Docs)
│   ├── Sessio_03_Cursa_Relleus.html               (S3 a punt per a Google Docs)
│   ├── Sessio_04_Dosificacio_Borg.html            (S4 a punt per a Google Docs)
│   ├── Sessio_05_Salts_Llargada.html              (S5 a punt per a Google Docs)
│   ├── Sessio_06_Salts_Alcada_Tisora.html         (S6 a punt per a Google Docs)
│   ├── Sessio_07_Llancament_Vortex.html           (S7 a punt per a Google Docs)
│   ├── Sessio_08_Pilota_Medicinal_ParaAtletisme.html (S8 a punt per a Google Docs)
│   ├── Sessio_09_Miting_Cooperatiu.html           (S9 a punt per a Google Docs)
│   └── Sessio_10_Diana_Autoavaluacio.html         (S10 a punt per a Google Docs)
│
├── 📲 Eines d'Avaluació per a iDoceo (`iDoceo/`)
│   ├── Avaluacio_iDoceo_SdA_Atletisme.xlsx  (Excel mestre unificat amb 4 pestanyes i fórmules)
│   ├── Columnes_Criteris_iDoceo.csv         (CSV amb ; per importar columnes de criteris)
│   ├── Rubrica_Global_iDoceo.csv            (CSV amb ; per a la rúbrica completa de 7 criteris)
│   ├── Criteris_Curriculars_iDoceo.csv      (CSV amb ; per al catàleg d'estàndards)
│   └── Rubriques_Individuals/               (7 mini-rúbriques en CSV amb ; per a seleccionables)
│       ├── Rubrica_1.1_Escalfament.csv
│       ├── Rubrica_1.2_Autoregulacio_Borg.csv
│       ├── Rubrica_2.1_Curses_Salts.csv
│       ├── Rubrica_2.2_Llancaments.csv
│       ├── Rubrica_3.1_Cooperacio_JocNet.csv
│       ├── Rubrica_3.2_Gestio_Por.csv
│       └── Rubrica_4.1_Para_Atletisme.csv
│
├── 📚 Documentació Curricular Oficial (`Documentacio_Curricular/`)
│   ├── Educacio-Fisica Currículum.pdf
│   ├── Ed.Primaria_Ed.-fisica_sabers.pdf
│   ├── Educacio-fisica_-competencies-especifiques-criteris-davaluacio.pdf
│   ├── Orientacions-curriculars_primaria_ef_per_blocs.pdf
│   └── Orientacions-curriculars_primaria_ef_per_cursos.pdf
│
└── 🗄️ Arxiu Històric (`Arxiu_Historic_Esborranys/`)
    ├── UD_ATLETISME_CS_Esborrany_Original.md (Unitat vella inicial abans del redisseny DUA)
    └── Perfil assesor EF.md (Apunts del prompt inicial)
```

---

## 4. CONTEXT PEDAGÒGIC I DECRET 175/2022

* **Públic destinatari:** Alumnat de Cicle Superior (grups barrejats de 5è i 6è de Primària, 25 alumnes, 5 equips cooperatius estables de 5 alumnes).
* **Atenció a la Diversitat (DUA):**
  * 1 alumne TEA (anticipació visual, senyals suaus, rols estructurats, racó de descàrrega).
  * 1 alumne TDAH (zero temps morts, consignes < 45'', rols actius continus de jutge/comptador).
  * 2 alumnes nouvinguts francòfons (parelles *buddies* de 6è, materials bilingües català-francès amb iconografia).
* **Ponderació oficial dels 7 criteris:**
  * CE1: Criteri 1.1 (10%) + Criteri 1.2 (15%) = 25%
  * CE2: Criteri 2.1 (20%) + Criteri 2.2 (15%) = 35%
  * CE3: Criteri 3.1 (15%) + Criteri 3.2 (10%) = 25%
  * CE4: Criteri 4.1 (15%) = 15%
  * Total = 100% (AE: 3.5-4.0 | AN: 2.8-3.49 | AS: 2.0-2.79 | NA: < 2.0).

---

## 5. GUIA D'ÚS RÀPIDA PER A IDOCEO

1. **Crear les columnes al quadern:**
   * A iDoceo &rarr; *Exportar/Importar* &rarr; *Importar arxiu CSV / XLS* &rarr; triar [iDoceo/Columnes_Criteris_iDoceo.csv](file:///C:/Users/dcordone/Desktop/AGY/SdA%20Atletisme/iDoceo/Columnes_Criteris_iDoceo.csv) (o l'Excel [Avaluacio_iDoceo_SdA_Atletisme.xlsx](file:///C:/Users/dcordone/Desktop/AGY/SdA%20Atletisme/iDoceo/Avaluacio_iDoceo_SdA_Atletisme.xlsx)).
   * Vincular amb la classe actual i seleccionar la columna de noms `Alumne/a`.
2. **Assignar els seleccionables individuals a cada columna:**
   * Importar les mini-rúbriques de `iDoceo/Rubriques_Individuals/` a *Tipus de nota i Rúbriques*.
   * A la capçalera de cada columna del quadern, assignar com a tipus de nota la seva mini-rúbrica corresponent.
   * A peu de pista, en prémer la cel·la d'un alumne es despleguen en gran exclusivament els 4 nivells d'aquell criteri.
3. **Càlcul automàtic de la qualificació final:**
   * Afegir una columna *Càlcul &rarr; Mitjana ponderada* amb els percentatges indicats a l'encapçalament de cada criteri.

---

## 6. FULL DE RUTA PER A FUTURES SESSIONS (BACKLOG)

Quan vulguis reprendre el projecte, podem abordar els següents blocs pendents segons la teva prioritat:

### Bloc 1: Materials Imprimibles i Visuals de Pista (Ready-to-Print)
* [ ] **Targetes d'Estació Plastificables (A4):** Crear fitxes visuals amb esquemes gràfics de cada estació (amb instruccions breus i bilingües català-francès) perquè l'alumnat sigui 100% autònom en les rotacions.
* [ ] **Panell Visual de Rutina per a l'Alumne amb TEA:** Dissenyar la plantilla visual amb pictogrames per estructurar l'entrada a la pista (*Escalfament -> Repte 1 -> Repte 2 -> Calma i Aigua*).
* [ ] **Format de Passaport en Targetó Tríptic:** Maquetar el Passaport Atlètic en un document preparat directament per imprimir a doble cara (plegat en díptic o tríptic).

### Bloc 2: Documentació Administrativa / Programació d'Aula de Centre
* [ ] **Fitxa de Programació Oficial:** Adaptar el redactat a la plantilla formal de Situació d'Aprenentatge del Departament d'Educació de Catalunya (amb la vinculació explícita al Perfil Competencial de Sortida i vectors del currículum).

### Bloc 3: Pla de Contingència per Condicions Meteorològiques (Pluja)
* [ ] **Pla B d'Intempèrie:** Dissenyar l'adaptació de les sessions exteriors (curses amples, relleus i vòrtex) per si cal fer-les exclusivament dins el gimnàs de 20x20 m sense perdre el compromís motor ni comprometre la seguretat.

### Bloc 4: Formulari Digital i Diana d'Autoavaluació (Chromebooks / Paper)
* [x] **Paquet d'Autoavaluació de la Sessió 10 Completat (14/10/2026):**
  - Creat `Diana_Autoavaluacio_Chromebooks.html`: Web app interactiva amb gràfic radar dinàmic, escala 1-4 i impressió PDF.
  - Creat `Diana_Autoavaluacio_Paper.html`: Format analògic A4 per pintar la diana concèntrica a mà.
  - Creat `Google_Forms_Diana_Script.js`: Script d'Apps Script per crear el formulari automàticament a Google Drive / Classroom.
  - Creat `Tancament_Passaport_Sessio_10.html`: Full A4 d'equip amb preguntes de síntesi 5è-6è i signatures solemnes.
  - **Google Form de Centre:** Formulari creat i configurat manualment pel docent per a l'alumnat de 5è i 6è, amb pauta documentada per unificar columnes per a iDoceo (`=ARRAYFORMULA(SI(C2:C<>""; C2:C; D2:D))`).

---

## 7. COM REPRENDRE LA FEINA EN LA PROPERA SESSIÓ

Només caldrà que indiquis a l'assistent:
> *"Vull continuar el projecte d'atletisme a partir de [DOCUMENTACIO_PROJECTE.md](file:///C:/Users/dcordone/Desktop/AGY/SdA%20Atletisme/DOCUMENTACIO_PROJECTE.md) treballant el punt [indicar el punt del Bloc 1, 2, 3 o 4]"*.
