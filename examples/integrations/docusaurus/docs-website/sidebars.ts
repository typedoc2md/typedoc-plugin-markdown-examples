import typedocSidebar from "./docs/api/typedoc-sidebar.cjs";

const sidebars = {
  mySidebar: [
    {
      type: "category",
      label: "Typedoc API",
      link: {
        type: "doc",
        id: "api/index",
      },
      items: typedocSidebar,
    },
  ],
};

export default sidebars;
