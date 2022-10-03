/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'chat-background': "url('https://web.whatsapp.com/img/bg-chat-tile-dark_a4be512e7195b6b733d9110b408f075d.png')"
      },
      colors: {
        'primary': '#d1d7db',
        'secondary': '#8696a0',
        'outgoing-bg': '#005c4b',
        'incoming-bg': '#202c33',
        'black': '#202c33',
        'body-bg': '#111b21',
        'panel-header-bg': '#202c33',
        'panel-header-icon': '#aebac1',
        'system-message-bg': '#182229',
        'shadow-rgb': 'rgb(11, 20, 26)',
        'icon-ack': '#53bdeb',
        'bubble-meta': 'hsla(0,0%,100%,0.6)',
        'chat-bg': '#0b141a'
      },
    },
  },
  plugins: [
    require("daisyui")
  ],
}
