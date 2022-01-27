import * as React from 'react';
import {useStyletron} from 'baseui';
import Home from './home/Home'

const Index: React.FC = () => {
 const [css, theme] = useStyletron();
 return (
  <Home/>
 );
};

export default Index;
