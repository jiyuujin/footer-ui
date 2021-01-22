# Footer UI

The plugin `@nekohack/footer-ui` created by using [distribution output target](https://stenciljs.com/docs/distribution) in Stencil.

## Footer for Cookie

You can use in HTML, and load CDN as a module.

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@nekohack/footer-ui@1.0.0/dist/footer-ui.js"></script>
```

Next, set the `cookie-footer` component to the place you want appropriately.

```html
<!-- without url -->
<cookie-footer
    name="stencil"
    title="あなたがこのサイト上でベストな体験ができるようCookieを使用しています"
/>

<!-- with url -->
<cookie-footer
    name="stencil"
    title="あなたがこのサイト上でベストな体験ができるようCookieを使用しています"
    url="https://nekohack-privacy-policy.netlify.app"
/>
```
