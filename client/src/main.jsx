import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './store/Auth.jsx';
import { LightingFixtureProvider } from './store/Product/LightingFixture.jsx';
import { VideoDisplaysProvider } from './store/Product/VideoDisplay.jsx';
import { CDIProvider } from './store/Product/CDI.jsx';
import { RiggingProvider } from './store/Product/Rigging.jsx';
import { SpaersProvider } from './store/Product/Spaers.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <LightingFixtureProvider>
      <VideoDisplaysProvider>
        <CDIProvider>
          <RiggingProvider>
            <SpaersProvider>
              <React.StrictMode>
                <App />
                <ToastContainer
                  position="top-right"
                  autoClose={3000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="colored" />
              </React.StrictMode>
            </SpaersProvider>
          </RiggingProvider>
        </CDIProvider>
      </VideoDisplaysProvider>
    </LightingFixtureProvider>
  </AuthProvider>
)




