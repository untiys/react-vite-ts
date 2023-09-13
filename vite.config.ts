import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { resolve } from "path"

const pathResolve = (dir: string) => {
  return resolve(__dirname, ".", dir)
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": pathResolve("src"),
    },
  },
})
