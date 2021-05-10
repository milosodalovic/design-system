/* eslint-disable no-undef */
/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  prefix: 'tw-',
  important: '#tw-root',
  theme: {
    container: {
      center: true
    },

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',

      gray: {
        25: '#F9FCF9',
        50: '#f6f8f6',
        75: '#E7E7E7',
        100: '#D9D9D9',
        150: '#BCBCBC',
        200: '#A2A2A2',
        250: '#808080',
        300: '#737373',
        350: '#595959',
        400: '#484848',
        450: '#3E3E3E',
        500: '#3C3D40',
        600: '#222222',
        700: '#191818',
        750: '#181717',
        800: '#101010',
        900: '#0D0D0D'
      },
      magenta: {
        100: '#B7BDCD',
        200: '#9c8fa0',
        300: '#948799',
        400: '#343035',
        500: '#29252a',
        600: '#221E23',
        700: '#201B21',
        800: '#130F14'

      },
      purple: {
        100: '#C1B9FF',
        300: '#815CFF',
        400: '#6927FF',
        500: '#6900FF',
        600: '#4617A0',
        800: '#340080'
      },
      blue: {
        200: '#4AE2ED',
        300: '#00C8D0',
        400: '#2997D8',
        500: '#0086FF',
        800: '#14002E',
        900: '#0D041F'
      },
      teal: {
        200: '#ADE2E7',
        300: '#99DBE1',
        700: '#486B6F'
      },
      pink: {
        500: '#F236AF',
        600: '#D00054',
        700: '#A70043',
        800: '#7d0032'
      },
      red: {
        500: '#ED0039',
        600: '#BE3B3B'
      },

      yellow: '#FCEC2B',
      gold: '#F0AD4E',
      overlay: '#00000080'
    },

    extend: {
      fill: theme => ({
        purple: theme('colors.purple.500'),
        black: theme('colors.black'),
        white: theme('colors.white')
      }),
      screens: {
        '2xs': '390px',
        xs: '480px',
        xsm: '520px',
        md: '769px',
        lg: '1025px',
        mdlg: { min: '768px', max: '1023px' },
        l: '1100px',
        xxl: '160rem',
        xsmax: { max: '414px' }
      },

      minWidth: {
        10: '1rem',
        32: '3.2rem',
        16: '4rem',
        20: '5rem',
        25: '25rem',
        70: '7rem',
        100: '10rem',
        150: '15rem',
        200: '20rem',
        300: '30rem',
        350: '35rem',
        fit: 'max-content'
      },
      maxWidth: {
        12.8: '12.8rem',
        13: '13rem',
        19.2: '19.2rem',
        22: '22rem',
        25: '25rem',
        30: '30rem',
        32: '32rem',
        40: '40rem',
        45: '45rem',
        53: '53rem',
        64: '64rem',
        80: '80rem',
        88: '88rem',
        102: '102rem',
        160: '16rem',
        205: '205px',
        104: '104rem',
        100: '110rem',
        112: '112rem',
        120: '120rem',
        128: '128rem',
        133: '133rem',
        241: '24.1rem',
        900: '90rem',
        1060: '106rem',
        1200: '120rem',
        1600: '160rem',
        '90pc': '90%',
        unset: 'unset'

      },
      minHeight: {
        10: '1rem',
        5: '5rem',
        25: '25rem',
        45: '45rem',
        50: '50rem',
        56: '56.4rem',
        75.2: '75.2rem',
        80: '80rem',
        83: '8.3rem',
        88: '88rem',
        94: '104rem',
        100: '100rem',
        250: '25rem',
        unset: 'unset'
      },
      maxHeight: {
        0: 0,
        16: '16rem',
        24: '24rem',
        59: '59rem',
        104: '104rem',
        100: '110rem',
        112: '112rem',
        120: '120rem',
        128: '128rem',
        133: '133rem',
        205: '205px',
        241: '24.1rem',
        900: '90rem',
        1060: '106rem',
        1200: '120rem',
        1600: '160rem',
        '90pc': '90%',
        unset: 'unset'
      },
      borderRadius: {
        0: '0',
        50: '50%',
        10: '1rem',
        1.5: '1.5rem',
        2: '2rem',
        default: '0.5rem',
        sm: '0.3rem',
        lg: '0.6rem'
      },
      inset: {
        '-1': '-0.1rem',
        '1/2': '50%',
        '-2': '-0.2rem',
        3: '0.3rem',
        5: '0.5rem',
        '-5': '-0.5rem',
        '-7': '-0.7rem',
        8: '0.8rem',
        15: '1.5rem',
        20: '2rem',
        30: '3rem',
        83: '8.3rem',
        67: '6.7rem',
        '-42': '-4.2rem',
        48: '4.8rem',
        1: '0.1rem',
        10: '1rem',
        100: '10rem',
        110: '11rem',
        23: '2.3rem'

      },
      fontSize: {
        xxs: '1rem',
        xs: '1.2rem',
        sm: '1.3rem',
        base: '1.4rem',
        md: '1.6rem',
        lg: '1.8rem',
        double: '2rem',
        xl: '2.2rem',
        xxl: '2.4rem',
        '7xl': '5rem'
      },
      boxShadow: {
        inner: '0 0 0 2px #6900FF',
        medium: '0px 6px 6px #0000004B',
        'popup-shadow': '0px 3px 6px #00000029',
        mineshaft: '0 1px 10px 0 rgba(34, 34, 34, 0.5)',
        discrete: '0px 1px 0px rgba(255, 255, 255, 0.05)'
      },
      transitionProperty: {
        height: 'height',
        opacity: 'opacity',
        bottom: 'bottom',
        zIndex: 'zIndex',
        spacing: 'margin, padding'
      },
      spacing: {
        0.8: '0.2rem',
        1.2: '0.3rem',
        2.4: '0.6rem',
        3.2: '0.8rem',
        4.8: '1.2rem',
        5.6: '1.4rem',
        7: '1.75rem',
        7.6: '1.9rem',
        9.6: '2.4rem',
        10.4: '2.6rem',
        12.8: '3.2rem',
        14: '3.5rem',
        15.2: '3.8rem',
        18: '4.5rem',
        19.2: '4.8rem',
        22.4: '5.6rem',
        25.6: '6.4rem',
        27.2: '6.8rem',
        28: '7rem',
        30: '7.5rem',
        34: '8.5rem',
        38: '9.5rem',
        36: '9rem',
        44: '11rem',
        51.2: '12.8rem',
        54.4: '13.6rem',
        76: '19rem',
        76.8: '19.2rem',
        80: '20rem',
        88: '22rem',
        96: '24rem',
        96.4: '24.1rem',
        120: '30rem',
        140: '35rem',
        169.2: '42.3rem',
        288: '72rem',
        unset: 'unset'

      },
      lineHeight: {
        16: '16px',
        1.4: 1.4
      },
      borderWidth: {
        1: '1px',
        1.6: '1.6rem',
        2: '2px',
        20: '20px'

      },
      borderColor: {
        cod: '#101010'
      },

      letterSpacing: {
        widest: '0.156rem',
        widester: '0.2rem',
        xwidester: '0.4rem',
        condensed: '-0.4px'

      },
      zIndex: {
        1100: '1100',
        1001: '1001',
        201: '201',
        19: '19',
        15: '15',
        14: '14',
        5: '5',
        3: '3',
        2: '2',
        1: '1',
        0: '0',
        '-1': '-1',
        unset: 'unset'
      },
      flex: {
        2: 2,
        3: 3
      },
      backgroundImage: theme => ({
        'buy-beats-cover': "url('/nuxt/img/landing-pages/buy-beats/cover.jpg')",
        'invite-cover': "url('/nuxt/img/landing-pages/invite/cover.jpg')",
        'sell-beats-cover': "url('/nuxt/img/landing-pages/sell-beats/cover.jpg')",
        'top-features': "url('/nuxt/img/landing-pages/sell-beats/big-shape-swirly.svg')",
        'infinity-logo': "url('/nuxt/img/landing-pages/sell-beats/infinity-logo-faded.svg')",
        'shape-swirly': "url('/nuxt/img/landing-pages/sell-beats/shape-swirly.svg')",
        'shape-swirly-2': "url('/nuxt/img/landing-pages/sell-beats/shape-swirly-2.svg')",
        'shape-swirly-3': "url('/nuxt/img/landing-pages/sell-beats/shape-swirly-3.svg')"

      }),
      backgroundSize: {
        '100%': '100%',
        auto100pc: 'auto 100%',
        '50%': '50%',
        38: '38.4rem',
        45: '45.4rem'
      },
      backgroundPosition: {
        'bottom-1': '0 40rem',
        infinity: '-250px 50px',
        'youtube-monetization': '-3.2rem 0',
        'youtube-monetization-2': '0 8rem',
        swirly: '-11.2rem',
        'top-gradient': '0 16rem'
      },
      order: {
        none: '0',
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5'
      },
      outline: {
        0: '0',
        none: 'none'
      },
      opacity: {
        40: '0.4'
      },
      gridTemplateColumns: {
        auto: 'auto auto',
        'auto-fit': 'repeat(auto-fit, minmax(0, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(0, 1fr))',
        btncol: 'repeat(2, 20.8rem)'
      },
      gridTemplateRows: {
        auto: 'auto auto'
      }
    }
  },
  variants: {
    padding: ['responsive', 'hover', 'focus'],
    spacing: ['responsive', 'hover', 'focus'],
    zIndex: ['responsive', 'hover', 'group-hover'],
    height: ['responsive', 'hover', 'group-hover'],
    bottom: ['responsive', 'hover', 'group-hover'],
    inset: ['responsive', 'hover', 'focus', 'group-hover'],
    transitionProperty: ['responsive', 'motion-safe', 'motion-reduce', 'hover', 'focus'],
    transitionDuration: ['responsive', 'motion-safe', 'motion-reduce', 'hover', 'focus'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover', 'disabled'],
    borderStyle: ['responsive', 'hover', 'focus', 'last', 'first', 'odd'],
    borderWidth: ['responsive', 'hover', 'focus', 'last', 'first', 'odd'],
    borderColor: ['responsive', 'hover', 'focus', 'last', 'first', 'odd'],
    display: ['responsive', 'hover', 'focus', 'group-hover', 'group-focus'],
    textDecoration: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    wordBreak: ['responsive', 'hover', 'focus'],
    backgroundColor: ['responsive', 'hover', 'focus', 'active', 'disabled'],
    margin: ['responsive', 'hover', 'focus', 'last'],
    animation: ['responsive', 'motion-safe', 'motion-reduce', 'hover', 'focus'],
    backgroundImage: ['responsive', 'hover', 'focus'],
    backgroundSize: ['responsive', 'hover', 'focus'],
    backgroundPosition: ['responsive', 'hover', 'focus'],
    order: ['responsive', 'hover', 'focus'],
    scale: ['responsive', 'hover', 'focus'],
    outline: ['responsive', 'focus', 'hover', 'active'],
    opacity: ({ after }) => after(['disabled']),
    textOpacity: ({ after }) => after(['disabled']),
    cursor: ['disabled']
  },
  plugins: [
  ],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: ['src/components/**/*.vue']
  }
}
