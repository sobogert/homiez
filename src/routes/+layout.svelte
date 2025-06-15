<script>
  import updateStatus from '$lib/assets/updateStatus.svg';
  import profileIcon from '$lib/assets/profile.svg';
	let { children } = $props();
</script>

<nav>
	<a href="/"><img src={updateStatus} alt="Status" height="24" width="24" /></a>
  <a href="/profile"><img src={profileIcon} alt="Profile"  height="24" width="24" /></a>
</nav>

{@render children()}

<style>
  :global(:root) {
    --white: #EFEFEF;
    --black: #230616;
    --green: #7EC758;
    --light-green: #C5E0B7;
    --dark-green: #579933;
    --light-red: #E6A99E;
    --dark-red: #D56F5D;
    --spacer: 7px;
    --status-border-width: 2px;
  }
  :global(html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark) {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  :global(article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section) {
    display: block;
  }
  :global(body) {
    line-height: 1;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--white);
    color: var(--black);
    font-family: "Space Grotesk", sans-serif;
  }
  :global(ol, ul) {
    list-style: none;
  }
  :global(table) {
    border-collapse: collapse;
    border-spacing: 0;
  }
  :global(*) {
    box-sizing: border-box;
  }
  :global(code) {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  :global(section) {
    padding-inline: 10%;
  }
  :global(header) {
    font-weight: bolder;
    font-size: 24px;
    padding-block: calc(var(--spacer) * 3);
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }
  nav {
    background-color: #E9E8E9;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-block: calc(var(--spacer) * 2);
  }
</style>