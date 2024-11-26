import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';
import HomePage from './pages/homepage';
import ContactPage from './pages/contactpage';
import GalleryPage from './pages/gallerypage';
import AboutPage from './pages/aboutpage';
import RoomsPage from './pages/rooms-page';
import Payment from './pages/paymentpage';
import PrivacyPolicyPage from './pages/privacypolicypage';
import CancellationPolicyPage from './pages/cancellationpolicypage';
import PlacesToVisitPage from './pages/placestovisitpage'
import FamilySuitePage from './pages/family-suite-page';
import SuperDeluxeRoomPage from './pages/super-deluxe-room-page';


function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/gallery' element={<GalleryPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/rooms' element={<RoomsPage />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/privacy-policy' element={<PrivacyPolicyPage />} />
          <Route path='/cancellation-policy' element={<CancellationPolicyPage />} />
          <Route path='/places-to-visit' element={<PlacesToVisitPage />} />
          <Route path="/family-suite" element={<FamilySuitePage />} />
          <Route path="/super-deluxe-room" element={<SuperDeluxeRoomPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
