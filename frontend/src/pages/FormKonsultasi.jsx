import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WaForm from '../components/WaForm';

export default function FormKonsultasi() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow bg-gray-50 pt-32 pb-16 px-4">
        <WaForm /> 
      </main>

      <Footer />
    </div>
  );
}