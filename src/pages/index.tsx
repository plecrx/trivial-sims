import * as React from 'react';
import {useStyletron} from 'baseui';
import Home from './home/Home'

export const sum = (a: number, b: number) => a + b;

const Index: React.FC = () => {
 const [css, theme] = useStyletron();
 return (
  <Home/>
 );
};

export default Index;
