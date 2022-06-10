import Layout from '../components/Layout'
import '../styles/globals.css'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer,toast } from "react-toastify";

import { Provider } from 'react-redux';
import { store } from '../redux/store'
import { useEffect, useState } from 'react';





 function MyApp({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <></>;
  } else {
    return (
      <Provider store={store}>
      <ToastContainer />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </Provider>
    );
  }
}





export default MyApp
