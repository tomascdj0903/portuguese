tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Inter Tight"', 'Inter', 'sans-serif'],
      },
      colors: {
        accent: {
          50:'#eefbf4',100:'#d6f5e2',200:'#aeebc8',300:'#7bdaa8',400:'#45c186',
          500:'#22a56b',600:'#158556',700:'#116a46',800:'#10543a',900:'#0e4531',950:'#06271b'
        }
      },
      boxShadow: {
        soft: '0 1px 2px rgba(15,23,20,0.04), 0 12px 32px -12px rgba(15,23,20,0.10)',
        softer: '0 1px 2px rgba(15,23,20,0.03), 0 4px 12px -4px rgba(15,23,20,0.06)',
      }
    }
  }
}
