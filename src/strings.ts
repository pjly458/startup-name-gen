const STRINGS = {
  TITLE: 'Startup Name Generator',
  INDUSTRY_PROMPT: 'Select your industry:',
  WILDCARD_PROMPT: 'Select your wildcard:',
  RESULT: 'Why not try...',
  RESULT_PLACEHOLDER: 'Select your industry and wildcard to get started',
  HABITUAL: 'Habitual',
}

const INDUSTRIES = [
  {
    Title: 'Health',
    Words: [
      'Doctor',
      'Medi',
      'Health',
      'Fit',
      'Pharma'
    ]
  },
  {
    Title: 'Finance',
    Words: [
      'Cash',
      'Money',
      'Save',
      'Invest',
      'Bank'
    ]
  },
  {
    Title: 'Travel',
    Words: [
      'Explore',
      'Fly',
      'Backpack',
      'Camp',
      'Beach'
    ]
  },
  {
    Title: 'Tech',
    Words: [
      'Silicon',
      'Quantum',
      'Cloud',
      'Net',
      'Byte',
    ]
  },
]

const WILDCARDS = [
  {
    Title: 'Colours',
    Words: [
      'Blue',
      'Purple',
      'Red',
      'Yellow',
      'Aqua',
      'Orange',
      'Black',
      'Teal',
      'Crimson',
    ]
  },
  {
    Title: 'Shapes',
    Words: [
      'Oval',
      'Hexagon',
      'Square',
      'Circle',
      'Pentagon'
    ]
  },
  {
    Title: 'Fruits',
    Words: [
      'Pear',
      'Grape',
      'Tomato',
      'Banana',
      'Melon'
    ]
  },
  {
    Title: 'Textures',
    Words: [
      'Soft',
      'Bumpy',
      'Slimy',
      'Smooth',
      'Rough',
      'Furry'
    ]
  },
  {
    Title: 'Animals',
    Words: [
      'Dog',
      'Cat',
      'Donkey',
      'Horse',
      'Tiger',
      'Llama'
    ]
  },
]

export { STRINGS, INDUSTRIES, WILDCARDS }
