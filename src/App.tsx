import { FC } from 'react';

export const App: FC = ({ children }) => (
  <main>
    {process.env.REACT_APP_API_MODE ? (
      <div className="p-2 w-full fixed z-10 hover:opacity-0 bg-yellow-300/30 flex justify-center content-start text-yellow-700 font-bold text-xl">
        You are in preview mode!
      </div>
    ) : null}
    {children}
  </main>
);

App.displayName = 'App';
