import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import { disableReactDevTools } from '@fvilers/disable-react-devtools'
import { QueryClient, QueryClientProvider } from 'react-query'

if (import.meta.env.MODE === 'production') disableReactDevTools()

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Provider>

  </React.StrictMode>,
)
