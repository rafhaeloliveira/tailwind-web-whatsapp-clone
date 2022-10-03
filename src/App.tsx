import React, { ReactElement } from 'react';
import Avatar from './components/Avatar/Avatar';
import { FireIcon } from './components/Icons';
import { MessageIcon, VerticalDotsIcon } from './components/Icons/Icons';

const App = (): ReactElement => {
  return (
    <div className="min-h-screen bg-body-bg color-primary p-4">
      <div className="container flex columns-2 mx-auto">
        <div className="w-4/12">
          <div className="bg-panel-header-bg px-4 py-3 flex items-center justify-between">
            <Avatar size={10} />

            <div className="flex items-center space-x-8">
              <FireIcon />
              <MessageIcon />
              <VerticalDotsIcon />
            </div>
          </div>
          <div className=''>
            <h1>search</h1>
          </div>
          <div className=''>
            <h1>contact list</h1>
          </div>
        </div>
        <div className="w-8/12">
          <h1>Right side</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
