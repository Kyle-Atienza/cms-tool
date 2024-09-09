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
        value: '',
        getValue: ({ brand, state, qaFilter }) => `https://casino.${state}.${brand}.com/en/games?qa=${qaFilter}`
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
    name: 'PLP',
    label: 'PLP',
    emoji: '📲',
    selected: false,
    choice: true,
    value: [
    ],
    restId: false,
    finalUrl: false,
    previewUrl: true,
    subFields: [
      {
        name: 'Mobile PLP',
        value: [
          {
            name: 'Preview URL',
            parentField: true,
            value: '',
            getValue: ({ brand, state, qaFilter }) => (brand && state) ? `https://poker.${state}.${brand}.com/en/mobileplp?qa=${qaFilter}` : ''
          },
          {
            name: 'Direct Link',
            value: ''
          }
        ],
      },
      {
        name: 'Desktop PLP',
        value: [
          {
            name: 'Preview URL',
            parentField: true,
            value: '',
            getValue: ({ brand, state, qaFilter }) => (brand && state) ? `https://poker.${state}.${brand}.com/en/clientplp?qa=${qaFilter}` : ''
          },
          {
            name: 'Direct Link',
            value: ''
          }
        ],
      },
    ]
  },
  {
    name: 'Mobile Banner',
    label: 'Mobile Banner',
    emoji: '🚩',
    selected: false,
    choice: true,
    value: [
      {
        name: 'Preview URL',
        parentField: true,
        value: '',
        getValue: ({ brand, state, qaFilter }) => (brand && state) ? `https://poker.${state}.${brand}.com/en/mobilebanner?qa=${qaFilter}` : ''
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
    name: 'Client Overlay',
    label: 'Client Overlay',
    emoji: '💻',
    selected: false,
    choice: true,
    value: [
      {
        name: 'Preview URL',
        parentField: true,
        value: '',
        getValue: ({ brand, state, qaFilter }) => (brand && state) ? `https://poker.${state}.${brand}.com/en/mobilebanner?qa=${qaFilter}` : ''
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
    name: 'Insta Stories',
    label: 'Insta Stories',
    emoji: '📱',
    selected: false,
    choice: true,
    value: [
      {
        name: 'Preview URL',
        parentField: true,
        value: '',
        getValue: ({ brand, state, qaFilter }) => (brand && state) ? `https://casino.${state}.${brand}.com/en/games?qa=${qaFilter}` : ''
      },
      {
        name: 'Promotions Direct Link',
        value: ''
      },
      {
        name: 'Content Direct Link',
        value: ''
      }
    ],
    restId: false,
    finalUrl: false,
    previewUrl: true,
    subFields: []
  },
  {
    name: 'ODR Banner',
    label: 'ODR Banner',
    emoji: '🏁',
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
    previewUrl: false,
    subFields: [],
    color: 'green-200'
  },
  {
    name: 'Video Banner',
    label: 'Video Banner',
    emoji: '🎞',
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
    previewUrl: false,
    subFields: [
      /* {
        name: 'Video Banner',
        label: 'Video Banner',
        value: [
          {
            name: 'Direct Link',
            value: ''
          }
        ]
      },
      {
        name: 'ODR Video Banner',
        label: 'ODR Video Banner',
        value: [
          {
            name: 'Direct Link',
            value: ''
          }
        ]
      } */
    ],
    color: 'green-200'
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
    subFields: [],
    color: 'green-200'
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
    subFields: [],
    color: 'violet-300'
  },
  {
    name: 'Banners',
    label: 'Banners',
    emoji: '🏳',
    selected: false,
    choice: true,
    value: [
      {
        name: 'Image URL',
        value: ''
      },
      {
        name: 'Big Banner Image',
        value: ''
      },
      {
        name: 'Exit Banner Image',
        value: ''
      },
      {
        name: 'Exit Banner w/ CTA Image',
        value: ''
      }
    ],
    restId: false,
    finalUrl: false,
    subFields: [],
    color: 'violet-300'
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
    name: 'Static Tile',
    label: 'Static Tile',
    emoji: '⏹',
    selected: false,
    choice: true,
    value: [
      {
        name: 'Preview URL',
        parentField: true,
        value: '',
        getValue: ({ brand, state, qaFilter }) => (brand && state) ? `https://promo.${state}.${brand}.com/en/promo/offers?qa=${qaFilter}` : ''
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
    name: 'Marquee',
    label: 'Marquee',
    emoji: '⛺',
    selected: false,
    choice: true,
    value: [
      {
        name: 'Preview URL',
        parentField: true,
        value: '',
        getValue: ({ brand, state, qaFilter }) => (brand && state) ? `https://sports.${state}.${brand}.com/en/sports?qa=${qaFilter}` : ''
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
    name: 'PAT',
    label: 'PAT',
    emoji: '🆔',
    selected: false,
    choice: true,
    value: [
      {
        name: 'PAT ID',
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
    emoji: '🆔',
    selected: false,
    choice: true,
    value: [
      {
        name: 'EDS ID',
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
      }
    ],
    restId: false,
    finalUrl: true,
    subFields: [],
    color: '#rose-200'
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
      }
    ],
    restId: false,
    finalUrl: true,
    subFields: [],
    color: '#rose-200'
  },
  {
    name: 'Coin Flip',
    label: 'Layout',
    emoji: '💰',
    selected: false,
    choice: true,
    value: [
      {
        name: 'Direct Link',
        value: ''
      }
    ],
    restId: false,
    finalUrl: true,
    subFields: [],
    color: 'rose-200'
  },
  {
    name: 'Click Card',
    label: 'Layout',
    emoji: '🃏',
    selected: false,
    choice: true,
    value: [
      {
        name: 'Direct Link',
        value: ''
      }
    ],
    restId: false,
    finalUrl: true,
    subFields: [],
    color: 'rose-200'
  },
  {
    name: 'Game Test',
    label: 'Game Test',
    emoji: '🧪',
    selected: false,
    choice: true,
    value: [
      {
        name: 'Game Test URL',
        value: ''
      }
    ],
    restId: false,
    finalUrl: true,
    subFields: [],
    color: 'rose-200'
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
]

export { fields }
