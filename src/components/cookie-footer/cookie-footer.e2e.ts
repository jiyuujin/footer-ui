import { newE2EPage } from '@stencil/core/testing'

describe('Cookie Footer', () => {
  it('render', async () => {
    const page = await newE2EPage()

    await page.setContent('<cookie-footer></cookie-footer>')
    const element = await page.find('cookie-footer')
    expect(element).toHaveClass('hydrated')
  })

  it('render changes to the title data', async () => {
    const page = await newE2EPage()

    await page.setContent('<cookie-footer></cookie-footer>')
    const element1 = await page.find('cookie-footer >>> div >>> content >>> accept')
    expect(element1.textContent).toEqual('受け入れる')

    const component = await page.find('cookie-footer')
    component.setProperty('title', 'あなたがこのサイト上でベストな体験ができるようCookieを使用しています')
    await page.waitForChanges()
    const element2 = await page.find('cookie-footer >>> div >>> content >>> title')
    expect(element2.textContent).toEqual('あなたがこのサイト上でベストな体験ができるようCookieを使用しています受け入れる')
  })
})
