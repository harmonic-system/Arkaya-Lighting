import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { AuthProvider } from './store/Auth.jsx';
import { LightingFixtureProvider } from './store/Product/LightingFixture.jsx';
import { VideoDisplaysProvider } from './store/Product/VideoDisplay.jsx';
import { CDIProvider } from './store/Product/CDI.jsx';
import { RiggingProvider } from './store/Product/Rigging.jsx';
import { SpaersProvider } from './store/Product/Spaers.jsx';
import { AuthProvider } from './store/authContext.jsx';
import { HomeProvider } from './store/Product/Home.jsx';

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <HomeProvider>
      <LightingFixtureProvider>
        <VideoDisplaysProvider>
          <CDIProvider>
            <RiggingProvider>
              <SpaersProvider>
                <StrictMode>
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
                </StrictMode>
              </SpaersProvider>
            </RiggingProvider>
          </CDIProvider>
        </VideoDisplaysProvider>
      </LightingFixtureProvider>
    </HomeProvider>
  </AuthProvider>
)




