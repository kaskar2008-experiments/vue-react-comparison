import React from 'react';

import { HelloWorldClass } from '@/react/components/HelloWorld';

export default function Home() {
  return (
    <div className="home">
      <img alt="Vue logo" src="/static/react-logo.png" width="200" />
      <HelloWorldClass msg="Welcome to Your React App" />
    </div>
  );
}
