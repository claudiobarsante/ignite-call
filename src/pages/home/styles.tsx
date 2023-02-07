import { styled, Heading, Text } from '@ignite-ui/react';

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',

  gap: '5rem',
  height: '100vh',
  marginLeft: 'auto',
  maxWidth: 'calc(100vw-(100vw-1160px)/2)'
});

export const Hero = styled('div', {
  maxWidth: '48 px',
  padding: '0 $10',
  // -- using '>' it only will be applyed to elements that are direct children, not to all Headings of the page
  [` > ${Heading}`]: {
    '@media(max-width:600px)': {
      fontSize: '$6xl'
    }
  },
  [` > ${Text}`]: {
    marginTop: '$2',
    color: '$gray200'
  }
});

export const Preview = styled('div', {
  paddingRight: '$8',
  overflow: 'hidden',

  '@media(max-width:680px)': {
    display: 'none'
  }
});
