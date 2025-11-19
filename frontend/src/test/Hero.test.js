import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Hero from '../landing_page/home/Hero';

//testing Suite
describe('Hero Component', () => {
  test('renders hero image', () => {
    render(<Hero />);
    const heroImage = screen.getByAltText(
      'Hero illustration showcasing the home page',
    );
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute('src', 'media/images/homeHero.png');
  });
});

describe('Singup Btn', () => {
  test('renders Singup btn', () => {
    render(<Hero />);
    const singupButton = screen.getByRole('button', {
      name: 'Singup now',
    });
    expect(singupButton).toBeInTheDocument();
    expect(singupButton).toHaveClass('btn-primary');
  });
});
