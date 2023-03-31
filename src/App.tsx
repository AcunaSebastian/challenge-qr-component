import type { Component } from 'solid-js';

import logo from './logo.svg';
import QrCard  from './components/QrCard';

const App: Component = () => {
  return (
    <section class="bg-blue-100 h-screen px-4 flex flex-col justify-center items-center">
      <QrCard />
    </section>
  );
};

export default App;
