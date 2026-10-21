---
layout: home

hero:
  name: "Portal d'Educació Física"
  text: "Hub de Situacions d'Aprenentatge"
  tagline: "Programacions competencials, sessions minut a minut a peu de pista, mesures DUA, aplicacions interactives i avaluació per a iDoceo (Decret 175/2022 · LOMLOE)."
  actions:
    - theme: brand
      text: 🏀 SdA 1 · Korfbal Coeducatiu
      link: /korfbal/
    - theme: brand
      text: 🏃 SdA 2 · Atletisme Cooperatiu
      link: /atletisme/
    - theme: alt
      text: 🚀 Guia i GitHub Pages
      link: /ARQUITECTURA_I_GUIA_PORTAL_WEB

features:
  - icon: 📱
    title: Disseny 100% Mobile-First (iPhone)
    details: Esquemes tàctics adaptatius, cronogrames minut a minut i cerca instantània offline per consultar directament a peu de pista.
  - icon: ⚡
    title: Compromís Motor > 80–85% (OMS)
    details: Erradicació total de files índies i jocs eliminatoris mitjançant estacions simultànies, matrius de rotació olímpica i Zona Tècnica activa.
  - icon: 🧩
    title: DUA i Inclusió Real
    details: Mesures específiques per a alumnat amb TEA, TDAH, nouvinguts francòfons i grups multinivell (cotutoria positiva entre 5è i 6è).
  - icon: 📊
    title: Avaluació Triangulada i iDoceo
    details: Rúbriques oficials dels 7 criteris ponderats, mirada focalitzada a pista, dianes d'autoavaluació en Chromebooks i quaderns Excel/CSV per a iDoceo.
---

## 📚 Catàleg Oficial de Situacions d'Aprenentatge (Bento Hub)

<div class="sda-bento-grid">
  <!-- BENTO CARD 1: KORFBAL -->
  <article class="bento-card bento-korfbal">
    <div class="bento-glow"></div>
    <div class="bento-header">
      <span class="bento-status-pill">🏀 SdA 01 · Cicle Superior (5è i 6è)</span>
      <span class="bento-live-badge"><span class="pulse-dot"></span> 100% Operativa</span>
    </div>
    <h3 class="bento-title">
      <a :href="$withBase('/korfbal/')">Korfbal Coeducatiu: Tothom Suma!</a>
    </h3>
    <p class="bento-desc">
      L'únic esport d'equip mixt per naturalesa (Nico Broekhuysen, 1902). Erradicació del bot per fomentar la passada cooperativa, desmarcatge 360°, regla del <em>Defensat</em> i gamificació amb l'Àlbum de 8 Cartes Tàctiques (TCG).
    </p>
    <div class="bento-metrics">
      <div class="bento-metric">
        <strong>8 Sessions</strong>
        <span>4 setmanes · 60'</span>
      </div>
      <div class="bento-metric">
        <strong>&gt; 85% TCM</strong>
        <span>5 equips estables</span>
      </div>
      <div class="bento-metric">
        <strong>8 Cartes TCG</strong>
        <span>Àlbum + Rols</span>
      </div>
    </div>
    <div class="bento-sessions-box">
      <span class="bento-sessions-label">⏱️ Accés directe a pista (S1–S8):</span>
      <div class="bento-session-pills">
        <a :href="$withBase('/korfbal/sessions/sessio-01.html')" title="S1: Pilota torre i 4 quadrants">S1</a>
        <a :href="$withBase('/korfbal/sessions/sessio-02.html')" title="S2: Estrella dinàmica i Borg">S2</a>
        <a :href="$withBase('/korfbal/sessions/sessio-03.html')" title="S3: Tir 360° i Ringo-Korfbal">S3</a>
        <a :href="$withBase('/korfbal/sessions/sessio-04.html')" title="S4: Regla del Defensat i 2x2">S4</a>
        <a :href="$withBase('/korfbal/sessions/sessio-05.html')" title="S5: Doorloopbal i Poste Mestre">S5</a>
        <a :href="$withBase('/korfbal/sessions/sessio-06.html')" title="S6: Les 2 zones i arbitratge">S6</a>
        <a :href="$withBase('/korfbal/sessions/sessio-07.html')" title="S7: Lliga 4x4 i iDoceo">S7</a>
        <a :href="$withBase('/korfbal/sessions/sessio-08.html')" title="S8: Torneig Tothom Suma!">S8</a>
      </div>
    </div>
    <div class="bento-actions">
      <a class="bento-btn bento-btn-primary" :href="$withBase('/korfbal/')">Obrir SdA Korfbal <span>→</span></a>
      <a class="bento-btn bento-btn-ghost" :href="$withBase('/korfbal/materials.html')">🃏 Cartes TCG</a>
      <a class="bento-btn bento-btn-ghost" :href="$withBase('/korfbal/avaluacio.html')">📊 Rúbrica</a>
    </div>
  </article>

  <!-- BENTO CARD 2: ATLETISME -->
  <article class="bento-card bento-atletisme">
    <div class="bento-glow"></div>
    <div class="bento-header">
      <span class="bento-status-pill">🏃 SdA 02 · Cicle Superior (5è i 6è)</span>
      <span class="bento-live-badge"><span class="pulse-dot"></span> 100% Operativa</span>
    </div>
    <h3 class="bento-title">
      <a :href="$withBase('/atletisme/')">Míting d'Atletisme Cooperatiu</a>
    </h3>
    <p class="bento-desc">
      Curses, salts i llançaments sense files ni marques excloents. Gomes elàstiques segures a 3 passes, relleus (<em>HOP!</em> i mà en V), tisora al llevapors, vòrtex 45°, para-atletisme en cadira i Passaport d'Equip 5è-6è.
    </p>
    <div class="bento-metrics">
      <div class="bento-metric">
        <strong>10 Sessions</strong>
        <span>5 setmanes · 60'</span>
      </div>
      <div class="bento-metric">
        <strong>DUA + FR</strong>
        <span>TEA · TDAH · Acollida</span>
      </div>
      <div class="bento-metric">
        <strong>Web App</strong>
        <span>Diana Chromebooks</span>
      </div>
    </div>
    <div class="bento-sessions-box">
      <span class="bento-sessions-label">⏱️ Accés directe a pista (S1–S10):</span>
      <div class="bento-session-pills">
        <a :href="$withBase('/atletisme/sessions/sessio-01.html')" title="S1: Equips i velocitat de reacció">S1</a>
        <a :href="$withBase('/atletisme/sessions/sessio-02.html')" title="S2: Franqueig rítmic de gomes (3p)">S2</a>
        <a :href="$withBase('/atletisme/sessions/sessio-03.html')" title="S3: Relleus (HOP!) i coavaluació">S3</a>
        <a :href="$withBase('/atletisme/sessions/sessio-04.html')" title="S4: Dosificació aeròbica i Borg">S4</a>
        <a :href="$withBase('/atletisme/sessions/sessio-05.html')" title="S5: Salt de llargada i triple salt">S5</a>
        <a :href="$withBase('/atletisme/sessions/sessio-06.html')" title="S6: Salt en tisora i llevapors">S6</a>
        <a :href="$withBase('/atletisme/sessions/sessio-07.html')" title="S7: Vòrtex xiulador i paràbola 45°">S7</a>
        <a :href="$withBase('/atletisme/sessions/sessio-08.html')" title="S8: Pilota medicinal i Para-Atletisme">S8</a>
        <a :href="$withBase('/atletisme/sessions/sessio-09.html')" title="S9: El Gran Míting Cooperatiu">S9</a>
        <a :href="$withBase('/atletisme/sessions/sessio-10.html')" title="S10: Diana Chromebooks i cloenda">S10</a>
      </div>
    </div>
    <div class="bento-actions">
      <a class="bento-btn bento-btn-primary" :href="$withBase('/atletisme/')">Obrir SdA Atletisme <span>→</span></a>
      <a class="bento-btn bento-btn-ghost" :href="$withBase('/atletisme/materials.html')">🛂 Passaport</a>
      <a class="bento-btn bento-btn-ghost" :href="$withBase('/atletisme/avaluacio.html')">📊 Rúbrica</a>
    </div>
  </article>

  <!-- BENTO CARD 3: SPAN 2 ARQUITECTURA CURRICULAR -->
  <div class="bento-card bento-wide">
    <div class="bento-wide-content">
      <div class="bento-wide-info">
        <span class="bento-kicker">⚖️ ARQUITECTURA CURRICULAR UNIFICADA · DECRET 175/2022</span>
        <h4>Avaluació Formativa Triangulada i Quaderns Mestres per a iDoceo</h4>
        <p>Totes les Situacions d'Aprenentatge comparteixen una mateixa estructura de <strong>7 criteris ponderats (100%)</strong> vinculats a les 4 Competències Específiques d'Educació Física, amb conversió directa a nivells oficials (<code>AE</code>, <code>AN</code>, <code>AS</code>, <code>NA</code>).</p>
      </div>
      <div class="bento-ce-pills">
        <div class="ce-chip ce-1"><strong>CE1 · 25%</strong><span>Vida activa, escalfament i Escala de Borg</span></div>
        <div class="ce-chip ce-2"><strong>CE2 · 35%</strong><span>Resolució motriu, tàctica i biomecànica</span></div>
        <div class="ce-chip ce-3"><strong>CE3 · 25%</strong><span>Coeducació, joc net, arbitratge i emocions</span></div>
        <div class="ce-chip ce-4"><strong>CE4 · 15%</strong><span>Cultura motriu, Selecció Catalana i Para-Esport</span></div>
      </div>
    </div>
  </div>
</div>

---

## 🛠️ Accés Directe a les Eines Interactives, Imprimibles i Quaderns iDoceo

<div class="resource-grid">
  <a class="resource-card" :href="$withBase('/recursos/atletisme/Diana_Autoavaluacio_Chromebooks.html')" target="_blank" rel="noopener">
    <span class="resource-icon">💻</span>
    <div>
      <strong>Web App: Diana Interactiva (Chromebooks)</strong>
      <small>Autoavaluació amb gràfic radar SVG dinàmic i exportació PDF</small>
    </div>
  </a>
  <a class="resource-card" :href="$withBase('/recursos/korfbal/Cartes_Tactiques_Korfbal_Imprimibles.html')" target="_blank" rel="noopener">
    <span class="resource-icon">🃏</span>
    <div>
      <strong>8 Cartes Tàctiques de Korfbal (TCG A4)</strong>
      <small>Làmina col·leccionable a tot color llesta per imprimir i retallar</small>
    </div>
  </a>
  <a class="resource-card" :href="$withBase('/recursos/atletisme/Passaport_Athletic_Alumnat.html')" target="_blank" rel="noopener">
    <span class="resource-icon">🛂</span>
    <div>
      <strong>Passaport Atlètic Cooperatiu (A4)</strong>
      <small>Seguiment dels reptes d'equip 5è-6è durant les 10 sessions</small>
    </div>
  </a>
  <a class="resource-card" :href="$withBase('/recursos/atletisme/Rubrica_Avaluacio_SdA_Atletisme.html')" target="_blank" rel="noopener">
    <span class="resource-icon">🧮</span>
    <div>
      <strong>Simulador de Qualificacions (Decret 175/2022)</strong>
      <small>Calculadora interactiva dels 7 criteris (AE, AN, AS, NA)</small>
    </div>
  </a>
  <a class="resource-card" :href="$withBase('/recursos/korfbal/Guia_Docent_SdA_Korfbal_CS.html')" target="_blank" rel="noopener">
    <span class="resource-icon">📋</span>
    <div>
      <strong>Guia Korfbal per a Google Docs</strong>
      <small>Amb botó de còpia nativa al porta-retalls conservant estils</small>
    </div>
  </a>
  <a class="resource-card" :href="$withBase('/recursos/atletisme/Guia_Docent_SdA_Atletisme_CS.html')" target="_blank" rel="noopener">
    <span class="resource-icon">📖</span>
    <div>
      <strong>Guia Atletisme per a Google Docs</strong>
      <small>Les 10 sessions maquetades amb taules d'estils inline</small>
    </div>
  </a>
</div>
