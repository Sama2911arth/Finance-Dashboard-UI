/** 
 * @type {import('tailwindcss').Config} 
 * Tailwind CSS configuration file
 */
module.exports = {
  // Define which files Tailwind should scan for class usage
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Custom color palette
      colors: {
        // Primary brand color with hover variant
        primary: {
          DEFAULT: '#2fbcfe',
          hover: '#2fbcfe/90',
        },
        // Sidebar background color
        sidebar: '#11455d',
        // Sidebar hover state with transparency
        sidebarHover: '#ffffff1a',
        // Extended gray color palette for consistent UI
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
      // Custom font family configuration
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
      },
      // Custom box shadow styles
      boxShadow: {
        'ds-3': '0px 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },

  plugins: [],
}
