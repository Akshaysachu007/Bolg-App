/** @type {import('tailwindcss').Config} */
export default {
 content:['./index.html','./src/**/*.{js,jsx}'],darkMode:'class',
 theme:{extend:{colors:{paper:'#faf7f1',ink:'#24342c',forest:'#304b3c',peach:'#f4d8c7',clay:'#c7765b'},fontFamily:{serif:['Playfair Display','Georgia','serif'],sans:['DM Sans','Arial','sans-serif']},boxShadow:{soft:'0 12px 35px rgba(61,50,38,.07)'}}},plugins:[]
};
