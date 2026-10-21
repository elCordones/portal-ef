import { h, computed } from 'vue';
import { withBase, useRoute } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import './custom.css';

export default {
  extends: DefaultTheme,
  Layout() {
    const route = useRoute();

    const currentSda = computed(() => {
      const p = route.path || '';
      if (p.includes('/korfbal/')) return 'korfbal';
      if (p.includes('/atletisme/')) return 'atletisme';
      return 'hub';
    });

    const isLinkActive = (targetPath) => {
      const current = (route.path || '').replace(/\.html$/, '').replace(/\/$/, '');
      const fullTarget = withBase(targetPath).replace(/\.html$/, '').replace(/\/$/, '');
      return current === fullTarget;
    };

    const renderQuickBar = () => {
      const sda = currentSda.value;
      if (sda !== 'korfbal' && sda !== 'atletisme') return null;

      const isKorfbal = sda === 'korfbal';
      const prefix = isKorfbal ? '/korfbal' : '/atletisme';
      const totalSessions = isKorfbal ? 8 : 10;

      const coreLinks = [
        { label: '🎯 Resum', path: `${prefix}/` },
        { label: '📋 Prog.', path: `${prefix}/programacio` },
        { label: '🧩 DUA', path: `${prefix}/dua-metodologia` },
        { label: isKorfbal ? '🃏 TCG' : '🛂 Passaport', path: `${prefix}/materials` },
        { label: '📊 Avaluació', path: `${prefix}/avaluacio` }
      ];

      const sessionLinks = Array.from({ length: totalSessions }, (_, i) => {
        const num = String(i + 1).padStart(2, '0');
        return {
          label: `S${i + 1}`,
          title: `Anar a la Sessió ${i + 1}`,
          path: `${prefix}/sessions/sessio-${num}`
        };
      });

      return h('nav', { class: ['sda-quickbar', `sda-quickbar-${sda}`], 'aria-label': 'Navegació ràpida de pista' }, [
        h('div', { class: 'sda-quickbar-group sda-quickbar-core' }, [
          h('span', { class: 'sda-quickbar-tag' }, isKorfbal ? '🏀 KORFBAL' : '🏃 ATLETISME'),
          ...coreLinks.map((item) =>
            h(
              'a',
              {
                href: withBase(item.path),
                class: ['sda-pill', 'sda-pill-core', { active: isLinkActive(item.path) }]
              },
              item.label
            )
          )
        ]),
        h('div', { class: 'sda-quickbar-divider' }),
        h('div', { class: 'sda-quickbar-group sda-quickbar-sessions' }, [
          h('span', { class: 'sda-quickbar-sublabel' }, '⏱️ Sessions:'),
          ...sessionLinks.map((item) =>
            h(
              'a',
              {
                href: withBase(item.path),
                title: item.title,
                class: ['sda-pill', 'sda-pill-session', { active: isLinkActive(item.path) }]
              },
              item.label
            )
          )
        ])
      ]);
    };

    return h('div', { class: ['portal-theme-root', `theme-${currentSda.value}`] }, [
      h(DefaultTheme.Layout, null, {
        'doc-before': () => renderQuickBar(),
        'layout-bottom': () =>
          h('footer', { class: 'app-footer' }, [
            h('div', { class: 'footer-content' }, [
              h(
                'a',
                {
                  href: 'https://creativecommons.org/licenses/by-sa/4.0/',
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  title: 'Llicència Creative Commons BY-SA 4.0'
                },
                [
                  h('img', {
                    src: 'https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/by-sa.svg',
                    alt: 'CC BY-SA 4.0',
                    class: 'cc-badge',
                    width: '70',
                    height: '24'
                  })
                ]
              ),
              h('span', { class: 'footer-legal' }, [
                '© David Cordones · 2026 | Codi: ',
                h(
                  'a',
                  {
                    href: 'https://www.gnu.org/licenses/agpl-3.0.html',
                    target: '_blank',
                    rel: 'noopener noreferrer'
                  },
                  'AGPL v3'
                ),
                ' · Contingut: ',
                h(
                  'a',
                  {
                    href: 'https://creativecommons.org/licenses/by-sa/4.0/',
                    target: '_blank',
                    rel: 'noopener noreferrer'
                  },
                  'CC BY-SA 4.0'
                )
              ])
            ])
          ])
      })
    ]);
  },
  enhanceApp({ app }) {
    app.config.globalProperties.$withBase = withBase;
  }
};
