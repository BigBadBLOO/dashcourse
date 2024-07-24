const NavigationIcons = [
  'menu',
  'close',
  'search',
  'arrowForward',
  'arrowBack',
  'arrowDown',
  'arrowUp',
  'arrowDiag',
  'back',
  'forward',
  'previousScroll',
  'nextScroll',
  'previous',
  'next',
  'rotate',
  'rotateBack'
] as const;

const DropDownIcons = [
  'expandMore',
  'expandLess'
] as const;

const SocialIcons = [
  'instagram',
  'youTube',
  'telegram',
  'vk',
  'twitter',
  'ok',
  'viber',
  'whatsApp',
  'iMessage',
  'facebook',
  'dzen',
  'alisa',
  'phone',
  'email'
] as const;

export const IconTypes = [
  ...NavigationIcons,
  ...DropDownIcons,
  ...SocialIcons,
];

export type IconType = (typeof IconTypes)[number];

export type Sizes = 'm' | 's';