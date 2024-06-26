/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontsize:{
        sm:"0.75rem",
        base:"0.857rem",
        md:"0.71rem",
        lg:"1.25rem",
        xl:"1.5rem",
        "2xl":"1.75rem",
        "3xl":"2.25rem",
      },
      backgroundImage: {
        'team-bg-image': "url('/public/team.png')",
        'team-bol': "url('/public/public/b.png.jpg)",
        
      }
  },
},
  plugins: [],


}