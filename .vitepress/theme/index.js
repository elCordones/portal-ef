import { h } from 'vue';
import { withBase } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import './custom.css';

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
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
    });
  },
  enhanceApp({ app }) {
    app.config.globalProperties.$withBase = withBase;
  }
};
