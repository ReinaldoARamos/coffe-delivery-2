import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        brand: {
          100: '#EBE5F9',
          300: '#996DFF',
          500: '#8257e6',
          purple: '#8047F8',
          600: '#4B2995'
        },
        brandyellow :{
            dark: '#C47F17',
            regular: '#DBAC2C',
            light: '#F1E9C9'
        },
        base: {
          title: '#272221',
          subtitle: '#403937',
          text: '#574F4D',
          label: '#8D8686',
          hover: '#D7D5D5',
          button: '#E6E5E5',
          input: '#EDEDED',
          card: '#F3F2F2',
          background: '#FAFAFA',
          white: '#FFFFFF',
        },
        
      },
      fontSize: {
        md: '16px'
      }
    },
  },
  plugins: [
    
  ],
}
export default config