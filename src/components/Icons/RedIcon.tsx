import {SvgXml} from 'react-native-svg';

export function RedIcon() {
  const markup = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"> <g clip-path="url(#clip0_402_4232)"> <path d="M16.01 11H5C4.45 11 4 11.45 4 12C4 12.55 4.45 13 5 13H16.01V14.79C16.01 15.24 16.55 15.46 16.86 15.14L19.64 12.35C19.83 12.15 19.83 11.84 19.64 11.64L16.86 8.85002C16.55 8.53002 16.01 8.76002 16.01 9.20002V11Z" fill="#DB3022"/> </g> <defs> <clipPath id="clip0_402_4232"> <rect width="24" height="24" fill="white"/> </clipPath> </defs> </svg>`;

  return <SvgXml xml={markup} />;
}
