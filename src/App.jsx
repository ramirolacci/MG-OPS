import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { ModuleCard } from './components/ModuleCard';
import { Footer } from './components/Footer';
import { APP_CONFIG } from './config/modules';

export function App() {
  const [activeTab, setActiveTab] = useState('tiendas');

  const currentCards = activeTab === 'herramientas' ? APP_CONFIG.tools : APP_CONFIG.modules;

  // Atajos de teclado para acceso rápido a las cards actuales
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === '1') {
        const card1 = document.getElementById(`card-${currentCards[0]?.id}`);
        if (card1) card1.click();
      } else if (e.key === '2') {
        const card2 = document.getElementById(`card-${currentCards[1]?.id}`);
        if (card2) card2.click();
      } else if (e.key === '3') {
        const card3 = document.getElementById(`card-${currentCards[2]?.id}`);
        if (card3) card3.click();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentCards]);

  return (
    <>
      {/* Fondo Tecnológico */}
      <div className="tech-background">
        <div className="tech-grid" />
        <div className="tech-crosshairs" />
      </div>

      <div className="app-container">
        {/* Header con Mi Gusto y MG OPS */}
        <Header />

        {/* Contenido Principal */}
        <main className="main-content">
          <Sidebar 
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

          <section className="cards-area">
            <div className="cards-grid" key={activeTab}>
              {currentCards.map((item) => (
                <ModuleCard key={item.id} module={item} />
              ))}
            </div>
          </section>
        </main>

        {/* Footer con estado de sistemas activos */}
        <Footer />
      </div>
    </>
  );
}

export default App;
