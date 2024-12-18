import { StaticImageData } from 'next/image';
import { IconType } from 'react-icons';

export interface SubItem {
  label: string;
  nestedSubItems?: string[];
}

export interface MenuItem {
  label: string;
  subItems: (string | SubItem)[];
  icon: IconType;
}

export interface VipCardProps {
  name: string;
  designation: string;
  imgSrc: string | StaticImageData;
}
