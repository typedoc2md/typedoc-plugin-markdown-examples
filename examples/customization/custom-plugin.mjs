// @ts-check

import { MarkdownTheme, MarkdownThemeContext } from "typedoc-plugin-markdown";

/**
 * @param {import('typedoc-plugin-markdown').MarkdownApplication} app
 */
export function load(app) {
  app.renderer.defineTheme("custom-markdown-theme", MyMarkdownTheme);

  app.renderer.markdownHooks.on(
    "content.begin",
    () => `> "content.begin" hook - last updated ${new Date().toISOString()}`
  );

  app.renderer.markdownHooks.on(
    "index.page.end",
    () => `***
content.page.end hook *@Copyright XYZ*
`
  );
}

class MyMarkdownTheme extends MarkdownTheme {
  /**
   * @param {import('typedoc-plugin-markdown').MarkdownPageEvent} page
   */
  getRenderContext(page) {
    return new MyMarkdownThemeContext(this, page, this.application.options);
  }
}

class MyMarkdownThemeContext extends MarkdownThemeContext {
  partials = {
    ...this.partials,
    header: () => {
      return `
<div style="display:flex; align-items:center;">
  <img alt="My logo" src="https://placehold.co/100x50" style="margin-right: .5em;" />
  <em>Welcome to ${this.page.project.name} with a customised header partial!!</em>
</div>
`;
    },
  };
}
