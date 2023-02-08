import { useMemo } from 'react';
import { Tuple } from 'types';

export function useRandomColorPair(): Tuple<string> {
  const colors: Tuple<string>[] = [
    ['#F5E1FF', '#CAF0F8', '#FF8D84', '#FFE599', '#93C47D'],
    ['#EAF4F4', '#FFEDD8', '#76A5AF', '#EC407A', '#BA68C8'],
    ['#F9E5D8', '#EDE9F6', '#64B5F6', '#BCAAA4', '#FF8A65'],
    ['#EEEBFF', '#FFFAD4', '#FFEE58', '#BDBDBD', '#B2FF59'],
  ];

  const random = Math.round(Math.random() * (colors.length - 1));

  return useMemo(() => colors[random], []);
}
