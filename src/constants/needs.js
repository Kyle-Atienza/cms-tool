const fields = [
  {
    name: 'Creatives',
    label: 'Creatives',
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
    subFields: [],
    checklist: ['Add Screenshots']
  },
  {
    name: 'Carousel',
    label: 'Carousel',
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
    label: 'Static Tile',
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
    label: 'MPP',
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
    label: 'Tournament Page',
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
    label: 'Rest ID',
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
    label: 'PAT',
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
    label: 'EDS',
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
    label: 'Landing Page',
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
    name: 'Pick A Box',
    label: 'Layout',
    emoji: '📦',
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
    name: 'Spin The Wheel',
    label: 'Layout',
    emoji: '🎡',
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
    label: 'Core',
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
    label: 'Carousel Preview',
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
