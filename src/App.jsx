import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import TrendingDestinationPage from "./pages/TrendingDestinationPage";
import TrendingDestinationOutsidePage from "./pages/TrendingDestinationOutsidePage";
import Footer from "./pages/Footer";
import LoadingSpinner from './components/LoadingSpinner';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the duration as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <Home />
          <TrendingDestinationPage />
          <TrendingDestinationOutsidePage />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
