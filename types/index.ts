import { MouseEventHandler } from 'react';

export type CustomButtonProps = {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: 'button' | 'submit';
};

export type SearchManufacturerProps = {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
};
