import { defineConfig } from 'vitepress';

// Detecció automàtica de la ruta base per a GitHub Pages (ex: /portal-ef/) i entorn local (/)
const repoName = process.env.GITHUB_REPOSITORY ? process.env.GITHUB_REPOSITORY.split('/')[1] : '';
const isUserOrOrgSite = repoName.endsWith('.github.io');
const base = process.env.VITEPRESS_BASE || (process.env.GITHUB_ACTIONS && repoName && !isUserOrOrgSite ? `/${repoName}/` : '/');

export default defineConfig({
  title: "Portal EF · SdA Hub",
  description: "Hub docent de Situacions d'Aprenentatge d'Educació Física — Primària i Secundària (Decret 175/2022)",
  lang: 'ca',
  base,
  cleanUrls: false,
  srcExclude: ['README.md', 'DOCUMENTACIO_PROJECTE.md', 'Bucle Gauntlet.md'],
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="%231e3a8a"/><circle cx="50" cy="50" r="32" fill="%23d97706"/><circle cx="50" cy="50" r="16" fill="%23ffffff"/></svg>' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@500;600;700&family=Outfit:wght@500;600;700;800&display=swap' }],
    ['meta', { name: 'theme-color', content: '#1e3a8a' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }]
  ],

  themeConfig: {
    siteTitle: '🏅 Portal EF · SdA Hub',
    logo: {
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#1e3a8a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"/><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"/><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"/><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"/></svg>'
    },

    nav: [
      { text: 'Inici', link: '/' },
      {
        text: '📚 Situacions d\'Aprenentatge',
        items: [
          {
            text: '🟢 Cicle Superior Primària (5è i 6è)',
            items: [
              { text: '🏀 SdA 1 · Korfbal Coeducatiu (8 Sessions)', link: '/korfbal/' },
              { text: '🏃 SdA 2 · Atletisme Cooperatiu (10 Sessions)', link: '/atletisme/' }
            ]
          },
          {
            text: '🗂️ Navegació Global',
            items: [
              { text: '🔎 Explorar Catàleg amb Filtres (CI · CM · CS · ESO)', link: '/#cataleg-sda' }
            ]
          }
        ]
      },
      {
        text: '🛠️ Web Apps i Recursos',
        items: [
          {
            text: '💻 Web Apps Interactives (Chromebooks i Docent)',
            items: [
              { text: '🎯 Web App: Diana d\'Autoavaluació (Chromebooks)', link: '/recursos/atletisme/Diana_Autoavaluacio_Chromebooks.html', target: '_blank' },
              { text: '🧮 Simulador de Qualificacions (Decret 175/2022)', link: '/recursos/atletisme/Rubrica_Avaluacio_SdA_Atletisme.html', target: '_blank' },
              { text: '📔 Àlbum i Laboratori Tàctic de Korfbal', link: '/recursos/korfbal/Album_Cartes_Tactiques_Korfbal.html', target: '_blank' }
            ]
          },
          {
            text: '🖨️ Imprimibles DIN-A4 i Gamificació',
            items: [
              { text: '🃏 Baralla de 8 Cartes Tàctiques (TCG Korfbal)', link: '/recursos/korfbal/Cartes_Tactiques_Korfbal_Imprimibles.html', target: '_blank' },
              { text: '🛂 Passaport Atlètic Cooperatiu d\'Equip', link: '/recursos/atletisme/Passaport_Athletic_Alumnat.html', target: '_blank' },
              { text: '🇫🇷 Fitxa Bilingüe Coavaluació Relleus (CAT/FR)', link: '/recursos/atletisme/Coavaluacio_Relleus_Alumnat.html', target: '_blank' }
            ]
          },
          {
            text: '📋 Guies Google Docs i Quaderns iDoceo',
            items: [
              { text: '📖 Guia Docent Korfbal (Copiar a Google Docs)', link: '/recursos/korfbal/Guia_Docent_SdA_Korfbal_CS.html', target: '_blank' },
              { text: '📖 Guia Docent Atletisme (Copiar a Google Docs)', link: '/recursos/atletisme/Guia_Docent_SdA_Atletisme_CS.html', target: '_blank' },
              { text: '📊 Rúbrica i Paquet iDoceo — Korfbal', link: '/korfbal/avaluacio' },
              { text: '📊 Rúbrica i Paquet iDoceo — Atletisme', link: '/atletisme/avaluacio' }
            ]
          }
        ]
      },
      { text: '🚀 Guia del Portal', link: '/ARQUITECTURA_I_GUIA_PORTAL_WEB' }
    ],

    sidebar: {
      '/korfbal/': [
        {
          text: '🏀 SdA 1: Korfbal Coeducatiu',
          collapsed: false,
          items: [
            { text: 'Visió General i Context', link: '/korfbal/' },
            { text: 'Programació i Criteris (175/2022)', link: '/korfbal/programacio' },
            { text: 'Mesures DUA i Inclusió', link: '/korfbal/dua-metodologia' },
            { text: 'Àlbum i Cartes Tàctiques (TCG)', link: '/korfbal/materials' },
            { text: 'Avaluació, Rúbrica i iDoceo', link: '/korfbal/avaluacio' }
          ]
        },
        {
          text: '⏱️ Sessions a Peu de Pista (S1–S8)',
          collapsed: false,
          items: [
            { text: 'S1 (60\'): Pilota torre i 4 quadrants', link: '/korfbal/sessions/sessio-01' },
            { text: 'S2 (45\'): Estrella dinàmica i Borg', link: '/korfbal/sessions/sessio-02' },
            { text: 'S3 (60\'): Tir 360° i Ringo-Korfbal', link: '/korfbal/sessions/sessio-03' },
            { text: 'S4 (45\'): Regla del Defensat i 2x2', link: '/korfbal/sessions/sessio-04' },
            { text: 'S5 (60\'): Doorloopbal i Poste Mestre', link: '/korfbal/sessions/sessio-05' },
            { text: 'S6 (45\'): Les 2 zones i arbitratge', link: '/korfbal/sessions/sessio-06' },
            { text: 'S7 (60\'): Lliga 4x4 i iDoceo', link: '/korfbal/sessions/sessio-07' },
            { text: 'S8 (45\'): Torneig "Tothom Suma!"', link: '/korfbal/sessions/sessio-08' }
          ]
        }
      ],

      '/atletisme/': [
        {
          text: '🏃 SdA 2: Atletisme Cooperatiu',
          collapsed: false,
          items: [
            { text: 'Visió General i Context', link: '/atletisme/' },
            { text: 'Programació i Criteris (175/2022)', link: '/atletisme/programacio' },
            { text: 'Mesures DUA i Seguretat', link: '/atletisme/dua-metodologia' },
            { text: 'Passaport, Web Apps i Imprimibles', link: '/atletisme/materials' },
            { text: 'Avaluació, Rúbrica i iDoceo', link: '/atletisme/avaluacio' }
          ]
        },
        {
          text: '⏱️ Sessions a Peu de Pista (S1–S10)',
          collapsed: false,
          items: [
            { text: 'S1 (60\'): Equips i velocitat de reacció', link: '/atletisme/sessions/sessio-01' },
            { text: 'S2 (45\'): Franqueig rítmic de gomes (3p)', link: '/atletisme/sessions/sessio-02' },
            { text: 'S3 (60\'): Relleus (HOP!) i coavaluació', link: '/atletisme/sessions/sessio-03' },
            { text: 'S4 (45\'): Dosificació aeròbica i Borg', link: '/atletisme/sessions/sessio-04' },
            { text: 'S5 (60\'): Salt de llargada i triple salt', link: '/atletisme/sessions/sessio-05' },
            { text: 'S6 (45\'): Salt en tisora i llevapors', link: '/atletisme/sessions/sessio-06' },
            { text: 'S7 (60\'): Vòrtex xiulador i paràbola 45°', link: '/atletisme/sessions/sessio-07' },
            { text: 'S8 (45\'): Pilota medicinal i Para-Atletisme', link: '/atletisme/sessions/sessio-08' },
            { text: 'S9 (60\'): El Gran Míting Cooperatiu', link: '/atletisme/sessions/sessio-09' },
            { text: 'S10 (45\'): Diana Chromebooks i cloenda', link: '/atletisme/sessions/sessio-10' }
          ]
        }
      ]
    },

    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: 'Cercar a les SdA',
                buttonAriaLabel: 'Cercar a les SdA'
              },
              modal: {
                noResultsText: 'No s\'han trobat resultats per a',
                resetButtonTitle: 'Netejar cerca',
                footer: {
                  selectText: 'per seleccionar',
                  navigateText: 'per navegar',
                  closeText: 'per tancar'
                }
              }
            }
          }
        }
      }
    },

    docFooter: {
      prev: 'Sessió / Pàgina anterior',
      next: 'Següent sessió / pàgina'
    },

    outline: {
      level: [2, 3],
      label: 'En aquesta pàgina'
    },

    returnToTopLabel: 'Tornar a dalt',
    sidebarMenuLabel: 'Menú de la SdA',
    darkModeSwitchLabel: 'Tema visual'
  }
});
