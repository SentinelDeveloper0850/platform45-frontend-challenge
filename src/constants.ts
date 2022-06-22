import mars from './assets/images/mars-symbol.svg';
import marsWhite from './assets/images/mars-symbol--white.svg';
import venus from './assets/images/venus-symbol.svg';
import venusWhite from './assets/images/venus-symbol--white.svg';
import card from './assets/images/card.svg';
import cardWhite from './assets/images/card--white.svg';

export const genderOptions = [
  {
    displayName: 'Male',
    value: 'Male',
    uncheckedImage: mars,
    checkedImage: marsWhite,
  },
  {
    displayName: 'Female',
    value: 'Female',
    uncheckedImage: venus,
    checkedImage: venusWhite,
  },
];

export const membershipOptions = [
  {
    displayName: 'Classic',
    value: 'Classic',
    uncheckedImage: card,
    checkedImage: cardWhite,
  },
  {
    displayName: 'Silver',
    value: 'Silver',
    uncheckedImage: card,
    checkedImage: cardWhite,
  },
  {
    displayName: 'Gold',
    value: 'Gold',
    uncheckedImage: card,
    checkedImage: cardWhite,
  },
];
