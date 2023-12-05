const fields = [
  {
    name: 'Creatives',
    emoji: '🎨',
    selected: false,
    choice: true,
    value: [
      {
        name: 'Direct Link',
        value: ''
      }
    ],
    restId: false,
    finalUrl: false,
    subFields: []
  },
  {
    name: 'Carousel',
    emoji: '🎠',
    selected: false,
    choice: true,
    value: [
      {
        name: 'Preview URL',
        parentField: true,
        value: ''
      },
      {
        name: 'Direct Link',
        value: ''
      },
    ],
    restId: false,
    finalUrl: false,
    previewUrl: true,
    subFields: []
  },
  {
    name: 'Static Tile',
    emoji: '⏹',
    selected: false,
    choice: true,
    value: [
      {
        name: 'Preview URL',
        parentField: true,
        value: ''
      },
      {
        name: 'Direct Link',
        value: ''
      }
    ],
    restId: false,
    finalUrl: false,
    previewUrl: true,
    subFields: []
  },
  {
    name: 'MPP',
    emoji: '📣',
    selected: false,
    choice: true,
    value: [
      {
        name: 'Direct Link',
        value: ''
      },
      {
        name: 'Final URL',
        value: ''
      }
    ],
    restId: false,
    finalUrl: false,
    subFields: []
  },
  {
    name: 'Tournament Page',
    emoji: '🏆',
    selected: false,
    choice: true,
    value: [
      {
        name: 'Direct Link',
        value: ''
      },
      {
        name: 'Navigation',
        value: ''
      },
      {
        name: 'Final URL',
        value: ''
      }
    ],
    restId: false,
    finalUrl: false,
    subFields: []
  },
  {
    name: 'Rest ID',
    emoji: '💳',
    selected: false,
    choice: true,
    value: [
      {
        name: 'Rest ID',
        value: ''
      },
      {
        name: 'Direct Link',
        value: ''
      }
    ],
    restId: true,
    finalUrl: false,
    subFields: []
  },
  {
    name: 'PAT',
    emoji: '',
    selected: false,
    choice: true,
    value: [
      {
        name: 'ID',
        value: ''
      },
      {
        name: 'Direct Link',
        value: ''
      }
    ],
    restId: false,
    finalUrl: false,
    subFields: []
  },
  {
    name: 'EDS',
    emoji: '',
    selected: false,
    choice: true,
    value: [
      {
        name: 'ID',
        value: ''
      },
      {
        name: 'Direct Link',
        value: ''
      }
    ],
    restId: false,
    finalUrl: false,
    subFields: []
  },
  {
    name: 'Landing Page',
    emoji: '🛬',
    selected: false,
    choice: true,
    value: [
      {
        name: 'Direct Link',
        value: ''
      },
      {
        name: 'Final URL',
        value: ''
      }
    ],
    restId: false,
    finalUrl: true,
    subFields: []
  },
  {
    name: 'Layout',
    emoji: '🎮',
    selected: false,
    choice: true,
    value: [
      {
        name: 'Direct Link',
        value: ''
      },
    ],
    restId: false,
    finalUrl: true,
    subFields: []
  },
  {
    name: 'Core',
    emoji: '🌍',
    selected: false,
    choice: true,
    value: [
      {
        name: 'Whitelabel',
        value: ''
      },
      {
        name: 'Nationwide',
        value: ''
      },
      {
        name: 'National',
        value: ''
      }
    ],
    restId: false,
    finalUrl: true,
    subFields: []
  }
  /* {
    name: 'Carousel Preview',
    selected: false,
    choice: false,
    value: [
      {
        name: 'URL',
        value: ''
      }
    ],
    restId: false,
    finalUrl: false,
    subFields: []
  } */
]

/* const previews = [
  {
    name: 'Carousel Preview',
    emoji: '🎠',
    selected: false,
    choice: true,
    value: [
      {
        name: 'URL',
        value: ''
      },
    ],
    restId: false,
    finalUrl: false,
    subFields: []
  },
] */



export { fields }
