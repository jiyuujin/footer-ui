import { Component, Prop, State, h } from '@stencil/core'

@Component({
  tag: 'cookie-footer',
  styleUrl: 'cookie-footer.css',
  shadow: true
})
export class CookieFooter {
  @Prop() name: string

  @Prop() title: string

  @Prop() url: string

  @State() isAccept: boolean = false

  componentWillLoad() {
    if (document.cookie.indexOf(`${this.name}_site_cookie=`) !== -1) {
      const cookieValue = document.cookie
        .split('; ')
        .find(row => row.startsWith(this.name))
        .split('=')[1]
      this.isAccept = Boolean(cookieValue)
    }
  }

  private accept(): void {
    this.isAccept = true
    document.cookie = `${this.name}_site_cookie=${this.isAccept}`
  }

  render() {
    return (
      <div>
        {this.isAccept === false ?
          <div class="cookie-footer">
            <div class="content">
              <div class="title">{this.title}</div>
              {this.url && <a href={this.url} target="_blank" rel="noopener noreferrer">プライバシーポリシー</a>}
              <div class="accept">
                <button onClick={() => this.accept()}>
                  受け入れる
                </button>
              </div>
            </div>
          </div>
        : ''}
      </div>
    )
  }
}
