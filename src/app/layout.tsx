// src/app/layout.tsx

import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store'; // Adjust the path based on your actual store location
import '../styles/globals.css'; // Import your global styles

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  );
};

export default Layout;
