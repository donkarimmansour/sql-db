import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import '../styles/globals.css'


// create a client 
const queryClient = new QueryClient();


function MyApp({ Component, pageProps }) {

  return (
    <QueryClientProvider client={queryClient}>

      <Provider store={store}>

        <Component {...pageProps} />

      </Provider>

    </QueryClientProvider>
  )
}

export default MyApp
