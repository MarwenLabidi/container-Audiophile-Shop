import { defineConfig } from 'vite'
import federation from "@originjs/vite-plugin-federation"

import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),federation({
    name: "container",
    remotes:{
      headerSubApp: "headerSubApp@http://localhost:3001/remoteEntry.js",
    },
    shared: ["react", "react-dom"],
  })],
  build: {
    target: "esnext",
    minify: false,
  }
    
})
