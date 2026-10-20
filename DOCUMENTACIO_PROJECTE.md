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
  - [x] **Desplegament Continu (CI/CD) actiu a GitHub Pages (`elCordones/portal-ef`)**: Workflow `.github/workflows/deploy.yml` operatiu, GitHub Pages activat en mode `workflow` i verificat amb resposta `HTTP 200 OK` a `https://elcordones.github.io/portal-ef/`.
- **Punt exacte on ens hem quedat**:
  - Fase 1 del Portal d'Educació Física tancada al 100%. Tant la SdA 1 (Korfbal, 8 sessions) com la SdA 2 (Atletisme, 10 sessions) i els seus 26 recursos associats estan publicats i operatius en línia.
- **Decisions tècniques i incidències conegudes**:
  - Tots els enllaços cap a recursos estàtics de `public/recursos/` utilitzen `:href="$withBase('/recursos/...')"` per garantir el funcionament idèntic en local (`http://localhost:5173/`) i sota subdirectori de GitHub Pages (`https://elcordones.github.io/portal-ef/`).
  - Els fitxers de gestió interna (`README.md`, `DOCUMENTACIO_PROJECTE.md`, `Bucle Gauntlet.md`) estan exclosos de la compilació de VitePress mitjançant `srcExclude`.

## 3. Full de Ruta d'Implementació (Roadmap / Propers Passos)
- **Tasques immediates per a la següent sessió**:
  - [ ] Pas 1: Dissenyar i incorporar una **3a Situació d'Aprenentatge** al catàleg del portal (p. ex., *Acrosport Cooperatiu i Expressió Corporal*, *Jocs Tradicionals i d'Iniciació Esportiva* o una SdA de Secundària).
  - [ ] Pas 2: Executar `.\desplegar-github.ps1` per publicar automàticament les noves incorporacions.
- **Millores futures i backlog**:
  - [ ] Afegir les Targetes Plastificables d'Estació (bilingües català-francès) i el Pla B d'Intempèrie (pluja al gimnàs 20x20 m) per a la SdA d'Atletisme.
  - [ ] Incorporar la Fitxa de Programació Oficial del Departament d'Educació amb descriptors operatius del Perfil Competencial de Sortida.
