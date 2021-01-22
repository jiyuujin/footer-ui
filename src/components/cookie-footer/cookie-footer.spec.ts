import { newSpecPage } from '@stencil/core/testing'
import { CookieFooter } from './cookie-footer'

describe('Cookie Footer', () => {
  it('render', async () => {
    const { root } = await newSpecPage({
      components: [CookieFooter],
      html: '<cookie-footer></cookie-footer>'
    })

    expect(root).toEqualHtml(`
      <cookie-footer>
        <mock:shadow-root>
          <div>
            <div class="cookie-footer">
              <div class="content">
                <div class="title"></div>
                <div class="accept">
                  <button>
                    受け入れる
                  </button>
                </div>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </cookie-footer>
    `)
  })

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [CookieFooter],
      html: `<cookie-footer name="stencil" title="あなたがこのサイト上でベストな体験ができるようCookieを使用しています" url="https://nekohack-privacy-policy.netlify.app"></cookie-footer>`
    })

    expect(root).toEqualHtml(`
      <cookie-footer name="stencil" title="あなたがこのサイト上でベストな体験ができるようCookieを使用しています" url="https://nekohack-privacy-policy.netlify.app">
        <mock:shadow-root>
          <div>
            <div class="cookie-footer">
              <div class="content">
                <div class="title">
                  あなたがこのサイト上でベストな体験ができるようCookieを使用しています
                </div>
                <a href="https://nekohack-privacy-policy.netlify.app" target="_blank" rel="noopener noreferrer">
                  プライバシーポリシー
                </a>
                <div class="accept">
                  <button>
                    受け入れる
                  </button>
                </div>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </cookie-footer>
    `)
  })
})
