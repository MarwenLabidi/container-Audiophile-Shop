import { defineConfig } from 'vite'
import federation from "@originjs/vite-plugin-federation"

import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),federation({
    name: "container",
    remotes:{
      headerSubApp: "http://localhost:5001/assets/remoteEntry.js",
      mainSubApp: "http://localhost:5002/assets/remoteEntry.js",
      footerSubApp: "http://localhost:5003/assets/remoteEntry.js",
      // navigationSubApp: "http://localhost:5004/assets/remoteEntry.js",
    },
    shared: ["react", "react-dom"],
  })],
  build: {
    target: "esnext",
    minify: false,
  }
    
})
