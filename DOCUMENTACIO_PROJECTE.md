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

## 2. Estat Actual i Punt de Control (Darrera sessió: 2026-10-20)
- **Estat general**: 100% Funcional, verificat en compilació de producció i preparat per a GitHub Pages.
- **Funcionalitats completades**:
  - [x] **Desenvolupament íntegre de les 8 sessions de Korfbal (`korfbal/sessions/sessio-01.md` a `sessio-08.md`)**: Eliminats els esborranys resumits de S3–S8 i desplegats els 8 components obligatoris de l'estàndard d'excel·lència d'EF en totes les sessions, incloent la rúbrica oficial completa dels 7 criteris ponderats (10%, 15%, 20%, 15%, 15%, 10%, 15% = 100%).
  - [x] **Integració completa de la SdA d'Atletisme (`atletisme/` i `atletisme/sessions/sessio-01.md` a `sessio-10.md`)**: Incorporades les 5 pàgines troncals i les 10 sessions desenvolupades minut a minut amb esquemes `.court-grid`, taules biomecàniques, matrius de rotació, consignes docents, DUA (TEA, TDAH, nouvinguts francòfons, mentoria 5è-6è) i focus d'avaluació iDoceo.
  - [x] **Integració d'Aplicacions Web, Imprimibles i Paquets iDoceo a `public/recursos/`**: Incorporats i auditats tots els HTML interactius (Web App Diana Chromebooks, Simulador de Notes, Passaport, Tancament S10, Cartes TCG, Àlbum, Guies Google Docs) amb favicon SVG minimalista i peu de llicència resumit (`apps-escolars` / `tecnopedagog`).
  - [x] **Acabat Visual i Llicenciament Global al Portal**: Peu de pàgina `.app-footer` injectat a totes les vistes de VitePress via slot `layout-bottom`, i substitució de blocs Mermaid/LaTeX crus per diagrames visuals HTML/CSS natius.
  - [x] **Configuració i Preparació de GitHub Pages**: Creats `.github/workflows/deploy.yml`, `.gitignore`, `desplegar-github.ps1`, detecció dinàmica de subruta `base` i repositori Git local inicialitzat amb commit a la branca `main`.
- **Punt exacte on ens hem quedat**:
  - El portal compila sense cap error ni avís (`npm run docs:build` tant amb `base: '/'` com amb `base: '/portal-ef/'`) i el repositori Git local està net i llest per fer `git push` cap al repositori remot de l'usuari a GitHub.
- **Decisions tècniques i incidències conegudes**:
  - Tots els enllaços cap a recursos estàtics de `public/recursos/` utilitzen `:href="$withBase('/recursos/...')"` per garantir el funcionament idèntic en local (`http://localhost:5173/`) i sota subdirectori de GitHub Pages (`https://<usuari>.github.io/<repo>/`).

## 3. Full de Ruta d'Implementació (Roadmap / Propers Passos)
- **Tasques immediates per a la següent sessió**:
  - [ ] Pas 1: Executar `.\desplegar-github.ps1 -RepoUrl "https://github.com/<USUARI>/<REPO>.git"` un cop creat el repositori buit a GitHub i activar *Source: GitHub Actions* a *Settings > Pages*.
  - [ ] Pas 2: Incorporar una tercera Situació d'Aprenentatge al catàleg del portal (ex: *SdA 3: Acrosport Cooperatiu i Expressió Corporal* o una SdA de Secundària).
- **Millores futures i backlog**:
  - [ ] Afegir les Targetes Plastificables d'Estació (bilingües català-francès) i el Pla B d'Intempèrie (pluja al gimnàs 20x20 m) per a la SdA d'Atletisme.
  - [ ] Incorporar la Fitxa de Programació Oficial del Departament d'Educació amb descriptors operatius del Perfil Competencial de Sortida.
