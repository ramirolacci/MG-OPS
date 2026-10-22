import React from 'react';
import { ShieldCheck, ClipboardCheck, QrCode, Sparkles, ExternalLink, ChevronRight, Calendar } from 'lucide-react';
import { playSound } from '../utils/sound';

export const ModuleCard = ({ module }) => {
  const renderIcon = () => {
    switch (module.type) {
      case 'shield':
        return <ShieldCheck size={22} strokeWidth={2.2} />;
      case 'store':
        return <ClipboardCheck size={22} strokeWidth={2.2} />;
      case 'calendar':
        return <Calendar size={22} strokeWidth={2.2} />;
      case 'qr':
        return <QrCode size={22} strokeWidth={2.2} />;
      case 'video':
      case 'media':
        return <Sparkles size={22} strokeWidth={2.2} />;
      default:
        return <ShieldCheck size={22} strokeWidth={2.2} />;
    }
  };

  return (
    <a 
      href={module.url}
      target={module.target || '_self'}
      rel="noopener noreferrer"
      className="module-card"
      data-id={module.id}
      id={`card-${module.id}`}
      aria-label={`Abrir módulo ${module.title}`}
      onMouseEnter={() => playSound(620, 0.03, 'sine', 0.02)}
      onClick={() => playSound(950, 0.06, 'triangle', 0.04)}
    >
      {/* Imagen de fondo */}
      <div 
        className="module-card-bg"
        style={{ backgroundImage: `url('${module.image}')` }}
      />
      <div className="module-card-overlay" />

      {/* Cabecera de la card */}
      <div className="module-card-header">
        <div 
          className="module-icon-box"
          style={{
            background: module.accentBg,
            borderColor: module.accentBorder,
            color: module.accentColor
          }}
        >
          {renderIcon()}
        </div>

        <div className="module-action-icon" title="Abrir sistema de sucursales">
          <ExternalLink size={16} />
        </div>
      </div>

      {/* Pie de la card con título y descripción */}
      <div className="module-card-footer">
        <div className="module-info">
          <h3 className="module-title">{module.title}</h3>
          <p className="module-subtitle">{module.subtitle}</p>
        </div>
        <span className="module-chevron" aria-hidden="true">
          <ChevronRight size={22} />
        </span>
      </div>
    </a>
  );
};
