import { CssBaseline } from '@material-ui/core';

import { Layout } from './Layout';
import { LandingPage } from './modules/landing-page/LandingPage';

export const App = () => {
  return (
    <>
      <CssBaseline />
      <Layout>
        <LandingPage />
      </Layout>
    </>
  );
};
