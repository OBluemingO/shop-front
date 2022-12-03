import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import styled from 'styled-components/macro'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    babel: {
      plugins: [
        [
          'babel-plugin-styled-components',
          {
            displayName: true,
            fileName: true,
          }
        ]
      ]
    }
  })]
})
