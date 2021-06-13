import React from 'react';

import Hero from '../components/Hero';
import BgMountain1 from './assets/mountain_1.jpg'
import BgMountain2 from './assets/mountain_2.jpg'

export default {
  title: 'Hero',
  component: Hero
}

export const usage = () => (
  <Hero title={ "Lorem Ipsum" } image={ BgMountain1 }></Hero>
);

export const withList = () => (
  <Hero title={ "Lorem Ipsum" } image={ BgMountain2 }>
    <ul>
      <li>Dolor sit amet</li>
      <li>Consectetur adipiscing elit</li>
      <li>Non hendrerit turpis pellentesque efficitur</li>
    </ul>
  </Hero>
);
