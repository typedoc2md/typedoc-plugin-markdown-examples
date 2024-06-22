import { defineConfig } from "vitepress";
import typedocSidebar from "../api/typedoc-sidebar.json";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    aside: false,
    nav: [
      { text: "Home", link: "/" },
      { text: "API", link: "/api/" },
    ],
    sidebar: [
      {
        text: "API",
        link: "/api/",
        items: typedocSidebar,
      },
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/tgreyuk/typedoc-plugin-markdown/tree/next/packages/typedoc-plugin-frontmatter#readme",
      },
    ],
  },
});
