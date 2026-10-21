# Portal d'Educació Física (SdA Hub) - Estat i Documentació

## 1. Descripció i Especificacions del Projecte
- **Objectiu principal**: Portal web docent centralitzat per a les Situacions d'Aprenentatge (SdA) d'Educació Física de Primària i Secundària (Decret 175/2022 / LOMLOE), amb disseny 100% *Mobile-First* per a consulta a peu de pista des d'iPhone/tauleta, aplicacions web interactives per a Chromebooks, materials imprimibles A4 i quaderns d'importació directa per a iDoceo.
- **Públic destinatari / Usuaris**: Docents d'Educació Física i alumnat de Cicle Superior d'Educació Primària (grups combinats de 5è i 6è, 25 alumnes, amb mesures DUA per a TEA, TDAH i nouvinguts francòfons).
- **Stack tecnològic**: VitePress 1.6.4 (Vue 3 + Markdown + CSS Grid/Flexbox adaptatiu), HTML5/SVG interactiu client-side per a les eines d'alumnat, i GitHub Actions per a CI/CD cap a GitHub Pages.
- **Arquitectura i fitxers clau**:
  - `.vitepress/config.mjs`: Configuració general, detecció dinàmica de `base` per a GitHub Pages (`GITHUB_REPOSITORY`), menús desplegables i cercador local en català.
  - `.vitepress/theme/index.js` i `custom.css`: Extensió del tema amb injecció automàtica del peu de pàgina de llicenciament resumit (`© David Cordones · 2026 | AGPL v3 · CC BY-SA 4.0` amb insígnia SVG), helper global `$withBase` i targetes tàctiques `.court-grid` i `.resource-grid`.
  - `korfbal/`: **SdA 1 — Korfbal Coeducatiu: Tothom Suma!** (5 pàgines troncals + 8 sessions completes S1–S8 minut a minut).
  - `atletisme/`: **SdA 2 — Míting d'Atletisme Cooperatiu: Superem els Reptes en Equip!** (5 pàgines troncals + 10 sessions completes S1–S10 minut a minut).
  - `public/recursos/`: Actius estàtics servits pel portal (17 documents HTML interactius/imprimibles amb favicon SVG i peu de llicència, script Google Apps Script i 8 fitxers `.xlsx`/`.csv` per a iDoceo).
  - `.github/workflows/deploy.yml`, `.gitignore` i `desplegar-github.ps1`: Infraestructura completa de desplegament continu a GitHub Pages.

## 2. Estat Actual i Punt de Control (Darrera sessió: 2026-10-21)
- **Estat general**: 100% Funcional i Desplegat en Producció a GitHub Pages (`https://elcordones.github.io/portal-ef/`).
- **Enllaços oficials del projecte**:
  - **Portal públic (GitHub Pages)**: `https://elcordones.github.io/portal-ef/`
  - **Repositori GitHub**: `https://github.com/elCordones/portal-ef`
  - **Directori local de treball**: `C:\Users\dcordone\Desktop\AGY\Portal EF`
- **Funcionalitats completades**:
  - [x] **Desenvolupament íntegre de les 8 sessions de Korfbal (`korfbal/sessions/sessio-01.md` a `sessio-08.md`)**: Eliminats els esborranys resumits de S3–S8 i desplegats els 8 components obligatoris de l'estàndard d'excel·lència d'EF en totes les sessions, incloent la rúbrica oficial completa dels 7 criteris ponderats (10%, 15%, 20%, 15%, 15%, 10%, 15% = 100%).
  - [x] **Integració completa de la SdA d'Atletisme (`atletisme/` i `atletisme/sessions/sessio-01.md` a `sessio-10.md`)**: Incorporades les 5 pàgines troncals i les 10 sessions desenvolupades minut a minut amb esquemes `.court-grid`, taules biomecàniques, matrius de rotació, consignes docents, DUA (TEA, TDAH, nouvinguts francòfons, mentoria 5è-6è) i focus d'avaluació iDoceo.
  - [x] **Integració d'Aplicacions Web, Imprimibles i Paquets iDoceo a `public/recursos/`**: Incorporats i auditats tots els HTML interactius (Web App Diana Chromebooks, Simulador de Notes, Passaport, Tancament S10, Cartes TCG, Àlbum, Guies Google Docs) amb favicon SVG minimalista i peu de llicència resumit (`apps-escolars` / `tecnopedagog`).
  - [x] **Acabat Visual i Llicenciament Global al Portal**: Peu de pàgina `.app-footer` injectat a totes les vistes de VitePress via slot `layout-bottom`, i substitució de blocs Mermaid/LaTeX crus per diagrames visuals HTML/CSS natius.
  - [x] **Redisseny Estètic i Dinàmic v2.1 (Bento Hub, Navegació Escalable A+C i Doble Filtre B)**:
    1. **Portada Bento Grid Asimètrica amb Doble Filtre Combinable (`index.md`)**: Barra de filtres interactius en viu per **Etapa/Cicle** (*Totes, CI, CM, CS, ESO*) i per **Família Motriu** (*Coeducatius d'Equip, Atlètics i Salut, Expressió i Acrosport, Medi Natural*), amb comptador dinàmic, estat buit (*Empty State*) i accés directe a cada sessió (`S1–S8` i `S1–S10`).
    2. **Arquitectura de Navegació Escalable per a 10+ SdA (`.vitepress/config.mjs`)**: Barra superior unificada en dos desplegables categoritzats: **`📚 Situacions d'Aprenentatge`** (agrupat per etapa i cicle educatiu) i **`🛠️ Web Apps i Recursos`** (agrupat en *Web Apps Interactives*, *Imprimibles DIN-A4* i *Guies Google Docs / iDoceo*).
    3. **Identitat Visual Esportiva, Tipografia *Outfit* + *JetBrains Mono* i Glassmorphism**: Barra superior amb vidre esmerilat (`backdrop-filter: blur(16px)`), malla tàctica subtil al Hero i tematització dinàmica automàtica segons la ruta (`.theme-korfbal` vs `.theme-atletisme`).
    4. **Pissarres Tàctiques `.court-grid` i Barra Píndola Superior (`sda-quickbar`)**: Esquemes espacials amb fons de pista real, barra horitzontal d'accés ràpid (`S1` a `S10`) injectada al slot `doc-before` i cel·les d'horari maquetades com a xips de cronòmetre digital.
    5. **Targetes de Recursos Interactives en CSS Grid (Zero Superposició)**: El badge de format (`WEB APP`, `IMPRIMIBLE A4`, `GOOGLE DOCS`, `SIMULADOR + A4`, `IDOCEO XLSX/CSV`, `APPS SCRIPT`) ocupa la fila 1 dedicada del Grid (`grid-column: 1 / -1`) evitant qualsevol col·lisió amb el títol o la icona.
  - [x] **Desplegament Continu (CI/CD) i Còpia de Seguretat (`backup-v1-original`)**: Workflow `.github/workflows/deploy.yml` operatiu, GitHub Pages fixat en mode `build_type: "workflow"` i còpia de seguretat de la v1.0 desada a la branca `backup-v1-original` i al tag `v1.0-original`.
- **Punt exacte on ens hem quedat**:
  - Desplegada la versió estètica **v2.0 (Bento Hub & Pro Coaching UI)** a producció (`main`) mantenint un punt de restauració exacte de la versió anterior a la branca `backup-v1-original` (tag `v1.0-original`).
- **Decisions tècniques i incidències conegudes**:
  - **Resolució d'incidència a GitHub Pages (2026-10-21)**: El repositori tenia configurat `"build_type": "legacy"` (Deploy from a branch `main` amb Jekyll), fet que provocava que el workflow automàtic `pages build and deployment` s'executés en paral·lel al nostre `.github/workflows/deploy.yml` i acabés 3 segons més tard, sobreescrivint el portal VitePress amb el `index.md` cru renderitzat per Jekyll. S'ha actualitzat la configuració del repositori via API a `"build_type": "workflow"` i s'ha rellançat el desplegament de VitePress.
  - Tots els enllaços cap a recursos estàtics de `public/recursos/` utilitzen `:href="$withBase('/recursos/...')"` per garantir el funcionament idèntic en local (`http://localhost:5173/`) i sota subdirectori de GitHub Pages (`https://elcordones.github.io/portal-ef/`).
  - Els fitxers de gestió interna (`README.md`, `DOCUMENTACIO_PROJECTE.md`, `Bucle Gauntlet.md`) estan exclosos de la compilació de VitePress mitjançant `srcExclude`.

## 3. Full de Ruta d'Implementació (Roadmap / Propers Passos)
- **Tasques immediates per a la següent sessió**:
  - [ ] Pas 1: Dissenyar i incorporar una **3a Situació d'Aprenentatge** al catàleg del portal (p. ex., *Acrosport Cooperatiu i Expressió Corporal*, *Jocs Tradicionals i d'Iniciació Esportiva* o una SdA de Secundària).
  - [ ] Pas 2: Executar `.\desplegar-github.ps1` per publicar automàticament les noves incorporacions.
- **Millores futures i backlog**:
  - [ ] Afegir les Targetes Plastificables d'Estació (bilingües català-francès) i el Pla B d'Intempèrie (pluja al gimnàs 20x20 m) per a la SdA d'Atletisme.
  - [ ] Incorporar la Fitxa de Programació Oficial del Departament d'Educació amb descriptors operatius del Perfil Competencial de Sortida.
