// vite.config.js
import { defineConfig } from "file:///D:/MERN/shop-front-end/node_modules/vite/dist/node/index.js";
import react from "file:///D:/MERN/shop-front-end/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react({
    babel: {
      plugins: [
        [
          "babel-plugin-styled-components",
          {
            displayName: true,
            fileName: true
          }
        ]
      ]
    }
  })]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxNRVJOXFxcXHNob3AtZnJvbnQtZW5kXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxNRVJOXFxcXHNob3AtZnJvbnQtZW5kXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9NRVJOL3Nob3AtZnJvbnQtZW5kL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtyZWFjdCh7XG4gICAgYmFiZWw6IHtcbiAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgW1xuICAgICAgICAgICdiYWJlbC1wbHVnaW4tc3R5bGVkLWNvbXBvbmVudHMnLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiB0cnVlLFxuICAgICAgICAgICAgZmlsZU5hbWU6IHRydWUsXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICBdXG4gICAgfVxuICB9KV1cbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTBQLFNBQVMsb0JBQW9CO0FBQ3ZSLE9BQU8sV0FBVztBQUdsQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTTtBQUFBLElBQ2QsT0FBTztBQUFBLE1BQ0wsU0FBUztBQUFBLFFBQ1A7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFlBQ0UsYUFBYTtBQUFBLFlBQ2IsVUFBVTtBQUFBLFVBQ1o7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGLENBQUMsQ0FBQztBQUNKLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
