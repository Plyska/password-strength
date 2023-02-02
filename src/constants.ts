type StatusCases = 'symbols' | 'numbers' | 'characters';
type Classes = 'grey' | 'red' | 'green' | 'yellow';
type Strength = 'easy' | 'medium' | 'strong';

interface StatusObject {
  type: StatusCases;
  status: boolean;
}

interface PasswordStrength {
  label: Strength;
  class: Classes;
}

export const symbols: StatusCases = 'symbols';
export const numbers: StatusCases = 'numbers';
export const characters: StatusCases = 'characters';

export const statusesList: Array<StatusObject> = [
  {
    type: symbols,
    status: false,
  },
  {
    type: numbers,
    status: false,
  },
  {
    type: characters,
    status: false,
  },
];

export const passwordStrength = [
  {
    label: 'easy',
    class: 'grey',
  },
  {
    label: 'medium',
    class: 'grey',
  },
  {
    label: 'strong',
    class: 'grey',
  },
];
