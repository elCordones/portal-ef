# ARQUITECTURA I GUIA D'ÚS I DESPLEGAMENT DEL PORTAL WEB D'EDUCACIÓ FÍSICA

<span class="pe-badge pe-badge-time">VitePress 1.6 · Mobile-First</span>
<span class="pe-badge pe-badge-team">GitHub Pages + GitHub Actions</span>
<span class="pe-badge pe-badge-dua">18 Sessions Desenvolupades (Korfbal + Atletisme)</span>
<span class="pe-badge pe-badge-curric">Decret 175/2022 · iDoceo Ready</span>

---

## 1. Visió i Avantatges del Portal

Aquest portal transforma la documentació de les Situacions d'Aprenentatge (SdA) d'Educació Física en una **aplicació web docent moderna, ultraràpida i 100% responsiva** (*Mobile-First*), concebuda per ser consultada a peu de pista des d'un **iPhone**, tauleta o Chromebook:

1. **Consulta immediata a pista:** Cronogrames minut a minut, targetes tàctiques adaptatives (`.court-grid`), taules biomecàniques i matrius de rotació olímpica sense temps morts.
2. **Cercador instantani offline:** Permet cercar qualsevol criteri d'avaluació, consigna docent, mesura DUA (TEA, TDAH, nouvinguts) o activitat en mil·lisegons.
3. **Recursos interactius i imprimibles integrats:** Totes les aplicacions web (com la *Diana d'Autoavaluació amb Radar SVG per a Chromebooks* o el *Simulador de Qualificacions*), les làmines A4 (Cartes Tàctiques TCG, Passaport Atlètic, Fitxes de Coavaluació) i els paquets d'importació per a **iDoceo (`.xlsx` i `.csv`)** estan allotjats a `/public/recursos/` i accessibles amb un sol clic.
4. **Detecció automàtica de ruta per a GitHub Pages:** L'arxiu `.vitepress/config.mjs` detecta automàticament la variable `GITHUB_REPOSITORY` a GitHub Actions per configurar la ruta `base` (`/nom-del-repo/`) sense trencar mai el funcionament local (`/`).

---

## 2. Mapa Complet d'Arquitectura del Projecte

```txt
Portal EF/
│
├── .github/workflows/
│   └── deploy.yml                    (Workflow oficial d'autoconstrucció i publicació a GitHub Pages)
│
├── .vitepress/
│   ├── config.mjs                    (Configuració, menús desplegables, cercador català i base dinàmica)
│   └── theme/
│       ├── index.js                  (Layout amb peu de pàgina legal CC BY-SA 4.0 / AGPL v3 i $withBase)
│       └── custom.css                (Sistema de disseny: .court-grid, .pe-badge, .resource-grid, mode fosc)
│
├── public/recursos/                  (Actius estàtics, Web Apps, imprimibles A4 i paquets iDoceo)
│   ├── korfbal/                      (Guia Docs, 8 Cartes TCG, Àlbum, Rols, Coavaluació i iDoceo XLSX/CSV)
│   └── atletisme/                    (Web App Diana Chromebooks, Passaport, Relleus FR, Simulador i iDoceo)
│
├── korfbal/                          (🏀 SdA 1: Korfbal Coeducatiu: Tothom Suma! — 8 Sessions)
│   ├── index.md                      (Visió global, pilars coeducatius i recursos directes)
│   ├── programacio.md                (4 CE, 7 Criteris ponderats Decret 175/2022 i mapa setmanal)
│   ├── dua-metodologia.md            (TEA, TDAH, grup 5è/6è i seguretat a 360°)
│   ├── materials.md                  (Baralla de 8 Cartes Tàctiques TCG i 5 rols actius)
│   ├── avaluacio.md                  (Triangulació 60/20/20, Rúbrica dels 7 criteris i descàrrega iDoceo)
│   └── sessions/
│       └── sessio-01.md a sessio-08.md (8 sessions completes minut a minut amb els 8 components)
│
├── atletisme/                        (🏃 SdA 2: Míting d'Atletisme Cooperatiu — 10 Sessions)
│   ├── index.md                      (Visió global, espais i accés a Web Apps)
│   ├── programacio.md                (4 CE, 7 Criteris ponderats Decret 175/2022 i mapa de 5 setmanes)
│   ├── dua-metodologia.md            (TEA, TDAH, nouvinguts francòfons, 5è/6è i protocols de seguretat)
│   ├── materials.md                  (Passaport Atlètic, Tancament 5è-6è i Web App Diana Chromebooks)
│   ├── avaluacio.md                  (Triangulació 60/20/10/10, Rúbrica, fórmula Sheets i paquet iDoceo)
│   └── sessions/
│       └── sessio-01.md a sessio-10.md (10 sessions completes minut a minut amb els 8 components)
│
├── index.md                          (Portada del Portal amb catàleg i accés directe a eines)
├── desplegar-github.ps1              (Script automatitzat en PowerShell per pujar a GitHub)
├── ARQUITECTURA_I_GUIA_PORTAL_WEB.md (Aquesta guia operativa i de desplegament)
├── DOCUMENTACIO_PROJECTE.md          (Quadern de bitàcola i estat del projecte)
├── .gitignore                        (Exclusió de node_modules, dist i cache)
└── package.json                      (Scripts: docs:dev, docs:build, docs:preview)
```

---

## 3. Guia Pas a Pas per Publicar a GitHub Pages

El projecte ja té el repositori Git local inicialitzat a la branca `main`, amb tots els fitxers comitejats i el workflow `.github/workflows/deploy.yml` configurat. Per publicar-lo a internet gratuïtament segueix aquests **3 passos**:

### Pas 1: Crear el repositori buit a GitHub
1. Entra al teu compte de [GitHub](https://github.com/new).
2. Crea un repositori nou anomenat, per exemple, **`portal-ef`** (Públic, **sense** marcar *Add a README file* ni *.gitignore*, ja que el projecte ja els té).

### Pas 2: Executar l'script de desplegament (o les 2 comandes Git)
Obre una terminal PowerShell a la carpeta `C:\Users\dcordone\Desktop\AGY\Portal EF` i executa l'script inclòs:

```powershell
.\desplegar-github.ps1 -RepoUrl "https://github.com/EL_TEU_USUARI/portal-ef.git"
```

*(O bé executa directament les dues comandes estàndard de Git)*:
```powershell
git remote add origin https://github.com/EL_TEU_USUARI/portal-ef.git
git push -u origin main
```

### Pas 3: Activar GitHub Actions a la pestanya Pages (només el primer cop)
1. Al teu repositori de GitHub, vés a **Settings** ➔ **Pages** (al menú lateral esquerre).
2. A l'apartat **Build and deployment > Source**, desplega el selector i tria **GitHub Actions**.
3. En menys de 45 segons, l'acció **Desplegar Portal EF a GitHub Pages** compilarà el portal i el publicarà a:
   `https://EL_TEU_USUARI.github.io/portal-ef/`

::: tip Actualitzacions futures automàtiques
Un cop activat, cada vegada que afegeixis una nova SdA o modifiquis una sessió i executis `.\desplegar-github.ps1`, la web pública s'actualitzarà automàticament sense fer cap altre pas manual.
:::

---

## 4. Comandes d'Ús en Entorn Local i des de l'iPhone (Wi-Fi)

* **Servidor de desenvolupament en viu (ordinador):**
  ```powershell
  npm run docs:dev
  ```
* **Servidor accessible des de l'iPhone / iPad a la mateixa xarxa Wi-Fi:**
  ```powershell
  npx vitepress dev --host 0.0.0.0
  ```
* **Compilació i verificació de producció:**
  ```powershell
  npm run docs:build
  npm run docs:preview
  ```

---

## 5. Com Incorporar una Nova Situació d'Aprenentatge al Portal

1. **Crear la carpeta de la nova SdA** (ex: `acrosport/`) amb l'estructura modular: `index.md`, `programacio.md`, `dua-metodologia.md`, `materials.md`, `avaluacio.md` i `sessions/sessio-01.md`...
2. **Desar els imprimibles i quaderns d'iDoceo** a `public/recursos/acrosport/`.
3. **Afegir el menú a `.vitepress/config.mjs`** dins de `themeConfig.nav` i `themeConfig.sidebar`.
4. **Executar `npm run docs:build`** per validar que no hi ha cap enllaç trencat.
