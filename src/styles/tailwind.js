/*
|-------------------------------------------------------------------------------
| Colors                                    https://tailwindcss.com/docs/colors
|-------------------------------------------------------------------------------
|
| Here you can specify the colors used in your project. To get you started,
| we've provided a generous palette of great looking colors that are perfect
| for prototyping, but don't hesitate to change them for your project. You
| own these colors, nothing will break if you change everything about them.
|
| We've used literal color names ("red", "blue", etc.) for the default
| palette, but if you'd rather use functional names like "primary" and
| "secondary", or even a numeric scale like "100" and "200", go for it.
|
*/

let colors = {
  'transparent': 'transparent',

  'black': '#212e35',
  'white': '#ffffff',

  'moxi-blue-dark': '#377cbf',
  'moxi-blue': '#5092d3',
  'moxi-blue-light': '#84b2e0',
  'moxi-blue-lightest': '#a7c8e9',

  'moxi-green-dark': '#42a33e',
  'moxi-green': '#50b64c',
  'moxi-green-light': '#84cb81',
  'moxi-green-lightest': '#a7daa5',

  'moxi-destructive': '#f44336',
  'moxi-destructive-light': '#F77B73',

  'ca-heliotrop': '#C967F2',
  'ca-mauve': '#D398F5',
  'ca-mulberry': '#cd5482',
  'ca-pale-violet-red': '#d67197',
  'ca-viking': '#47c4b5',
  'ca-riptide': '#7ed5cb',
  'ca-lightning-yellow': '#f5a623',
  'ca-texas-rose': '#f7b84f',
  'ca-flamenco': '#ef6e41',
  'ca-sandy-brown': '#f39371',

  'cn-100': '#212e35',
  'cn-90': '#374249',
  'cn-80': '#4d585d',
  'cn-70': '#636c71',
  'cn-60': '#7a8286',
  'cn-50': '#90969a',
  'cn-40': '#a6abae',
  'cn-30': '#bcc0c2',
  'cn-20': '#d3d5d7',
  'cn-15': '#e8eaea',
  'cn-10': '#f2f3f3',
  'cn-05': '#f8f8f8',
  'cn-0': '#ffffff',

}

module.exports = {
  prefix: '',
  important: false,
  theme: {
    extend: {},
    colors: colors,
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
    },
    fonts: {
      'sans': [
        'Muli',
        'Helvetica',
        'Verdana',
        'Arial',
        'sans-serif',
      ]
    },
    textSizes: {
      'xs': '.75rem',     // 12px
      'sm': '.875rem',    // 14px
      'base': '1rem',     // 16px
      'lg': '1.125rem',   // 18px
      'xl': '1.25rem',    // 20px
      '2xl': '1.5rem',    // 24px
      '3xl': '1.875rem',  // 30px
      '4xl': '2.25rem',   // 36px
      '5xl': '2.5rem',    // 40px
    },
    fontWeights: {
      'hairline': 100,
      'thin': 200,
      'light': 300,
      'normal': 400,
      'medium': 500,
      'semibold': 600,
      'bold': 700,
      'extrabold': 800,
      'black': 900,
    },
    leading: {
      'none': 1,
      'tight': 1.25,
      'normal': 1.5,
      'loose': 2,
    },
    tracking: {
      'tight': '-0.05em',
      'normal': '0',
      'wide': '0.05em',
    },
    textColors: colors,
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
    },
    borderWidths: {
      default: '1px',
      '0': '0',
      '2': '2px',
      '4': '4px',
      '8': '8px',
    },
    borderColors: global.Object.assign({ default: colors['grey-light'] }, colors),
    borderRadius: {
      'none': '0',
      'sm': '.125rem',
      default: '.25rem',
      'lg': '.5rem',
      'full': '9999px',
    },
    width: {
      'auto': 'auto',
      'px': '1px',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
      '16': '4rem',
      '24': '6rem',
      '32': '8rem',
      '48': '12rem',
      '64': '16rem',
      '1/2': '50%',
      '1/3': '33.33333%',
      '2/3': '66.66667%',
      '1/4': '25%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.66667%',
      '5/6': '83.33333%',
      'full': '100%',
      'screen': '100vw'
    },
    height: {
      'auto': 'auto',
      'px': '1px',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
      '16': '4rem',
      '24': '6rem',
      '32': '8rem',
      '48': '12rem',
      '64': '16rem',
      'full': '100%',
      'screen': '100vh'
    },
    minWidth: {
      '0': '0',
      'full': '100%',
    },
    minHeight: {
      '0': '0',
      'full': '100%',
      'screen': '100vh'
    },
    maxWidth: {
      'xs': '20rem',
      'sm': '30rem',
      'md': '40rem',
      'lg': '50rem',
      'xl': '60rem',
      '2xl': '70rem',
      '3xl': '80rem',
      '4xl': '90rem',
      '5xl': '100rem',
      'full': '100%',
    },
    maxHeight: {
      'full': '100%',
      'screen': '100vh',
    },
    padding: {
      '0': '0',
      '1': '1px',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '5': '5px',
      '6': '6px',
      '7': '7px',
      '8': '8px',
      '9': '9px',
      '10': '10px',
      '11': '11px',
      '12': '12px',
      '13': '13px',
      '14': '14px',
      '15': '15px',
      '16': '16px',
      '17': '17px',
      '18': '18px',
      '19': '19px',
      '20': '20px',
      '21': '21px',
      '22': '22px',
      '23': '23px',
      '24': '24px',
      '25': '25px',
      '26': '26px',
      '27': '27px',
      '28': '28px',
      '29': '29px',
      '30': '30px',
      '31': '31px',
      '32': '32px',
      '33': '33px',
      '34': '34px',
      '35': '35px',
      '36': '36px',
      '37': '37px',
      '38': '38px',
      '39': '39px',
      '40': '30px',
      '41': '41px',
      '42': '42px',
      '43': '43px',
      '44': '44px',
      '45': '45px',
      '46': '46px',
      '47': '47px',
      '48': '48px',
      '49': '49px',
      '50': '50px',
    },
    margin: {
      '0': '0',
      '1': '1px',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '5': '5px',
      '6': '6px',
      '7': '7px',
      '8': '8px',
      '9': '9px',
      '10': '10px',
      '11': '11px',
      '12': '12px',
      '13': '13px',
      '14': '14px',
      '15': '15px',
      '16': '16px',
      '17': '17px',
      '18': '18px',
      '19': '19px',
      '20': '20px',
      '21': '21px',
      '22': '22px',
      '23': '23px',
      '24': '24px',
      '25': '25px',
      '26': '26px',
      '27': '27px',
      '28': '28px',
      '29': '29px',
      '30': '30px',
      '31': '31px',
      '32': '32px',
      '33': '33px',
      '34': '34px',
      '35': '35px',
      '36': '36px',
      '37': '37px',
      '38': '38px',
      '39': '39px',
      '40': '30px',
      '41': '41px',
      '42': '42px',
      '43': '43px',
      '44': '44px',
      '45': '45px',
      '46': '46px',
      '47': '47px',
      '48': '48px',
      '49': '49px',
      '50': '50px',
    },
    negativeMargin: {
      'px': '1px',
      '0': '0',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
      '16': '4rem',
      '20': '5rem',
      '24': '6rem',
      '32': '8rem',
    },
    shadows: {
      default: '0 2px 4px 0 rgba(0,0,0,0.10)',
      'md': '0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)',
      'lg': '0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)',
      'inner': 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
      'outline': '0 0 0 3px rgba(52,144,220,0.5)',
      'none': 'none',
      'level-1': '0 1px 2px 0 rgba(33,46,53,0.50)',
      'level-2': '0 2px 4px 0 rgba(0,0,0,0.24), 0 5px 10px 0 rgba(33,46,53,0.20)',
      'level-3': '0 31px 41px 0 rgba(33,43,54,0.20), 0 2px 16px 0 rgba(33,43,54,0.08)'
    },
    zIndex: {
      'auto': 'auto',
      '0': 0,
      '10': 10,
      '20': 20,
      '30': 30,
      '40': 40,
      '50': 50,
    },
    opacity: {
      '0': '0',
      '25': '.25',
      '50': '.5',
      '75': '.75',
      '100': '1',
    },
    svgFill: {
      'current': 'currentColor',
    },
    svgStroke: {
      'current': 'currentColor',
    },
  },
  variants: {
    alignContent: ['responsive'],
    alignItems: ['responsive'],
    alignSelf: ['responsive'],
    appearance: ['responsive'],
    backgroundAttachment: ['responsive'],
    backgroundColor: ['responsive', 'hover', 'focus'],
    backgroundPosition: ['responsive'],
    backgroundRepeat: ['responsive'],
    backgroundSize: ['responsive'],
    borderCollapse: ['responsive'],
    borderColor: ['responsive', 'hover', 'focus'],
    borderRadius: ['responsive'],
    borderStyle: ['responsive'],
    borderWidth: ['responsive'],
    boxShadow: ['responsive', 'hover', 'focus'],
    cursor: ['responsive'],
    display: ['responsive'],
    fill: ['responsive'],
    flex: ['responsive'],
    flexDirection: ['responsive'],
    flexGrow: ['responsive'],
    flexShrink: ['responsive'],
    flexWrap: ['responsive'],
    float: ['responsive'],
    fontFamily: ['responsive'],
    fontSize: ['responsive'],
    fontSmoothing: ['responsive'],
    fontStyle: ['responsive'],
    fontWeight: ['responsive', 'hover', 'focus'],
    height: ['responsive'],
    inset: ['responsive'],
    justifyContent: ['responsive'],
    letterSpacing: ['responsive'],
    lineHeight: ['responsive'],
    listStylePosition: ['responsive'],
    listStyleType: ['responsive'],
    margin: ['responsive'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    objectFit: ['responsive'],
    objectPosition: ['responsive'],
    opacity: ['responsive'],
    order: ['responsive'],
    outline: ['responsive', 'focus'],
    overflow: ['responsive'],
    padding: ['responsive'],
    pointerEvents: ['responsive'],
    position: ['responsive'],
    resize: ['responsive'],
    stroke: ['responsive'],
    tableLayout: ['responsive'],
    textAlign: ['responsive'],
    textColor: ['responsive', 'hover', 'focus'],
    textDecoration: ['responsive', 'hover', 'focus'],
    textTransform: ['responsive'],
    userSelect: ['responsive'],
    verticalAlign: ['responsive'],
    visibility: ['responsive'],
    whitespace: ['responsive'],
    width: ['responsive'],
    wordBreak: ['responsive'],
    zIndex: ['responsive'],
  },
  plugins: []
}
