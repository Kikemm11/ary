import React, { useState } from 'react';

import logoImg from '../assets/logicatstudio_logo.png';

const bookPages = [
  { 
    left: "El viejo mundo se consumió bajo las llamas de la primera era, un cataclismo provocado por la soberbia de los antiguos reyes. De entre aquellas cenizas aún humeantes, los altos tejedores de la magia ancestral comenzaron a hilar, en absoluto secreto, los hilos primordiales de Ary.", 
    right: "Fue un nacimiento forjado en el silencio de los templos caídos. Sabían que el equilibrio se había roto para siempre, y que solo una estirpe ligada a la tierra y al vacío sería capaz de canalizar el poder residual que los dioses desterrados olvidaron al marchar." 
  },
  { 
    left: "Seis runas de plata pura fueron fundidas en el solsticio de invierno y arrojadas a los abismos más profundos de los océanos del oeste, sellando el avance de las sombras. Los siglos transcurrieron, y la marea devoró imperios enteros, borrando todo rastro de su ubicación original.", 
    right: "Sin embargo, las crónicas dictan que solo la tercera runa permaneció inalterada. En la oscuridad del lecho marino, su pulso esmeralda sigue latiendo con fuerza, esperando una mano lo suficientemente osada —o maldita— para reclamar el conocimiento que custodia." 
  },
  { 
    left: "Para contener la marea de la putrefacción que ahora despierta en las fronteras, el brujo no debe alzar la espada, sino pronunciar el nombre silencioso. Es una vibración prohibida que desgarra la garganta de quien intenta modularla sin la debida preparación alquímica.", 
    right: "Lamentablemente, los pergaminos sagrados que la contenían se volvieron polvo, y aquel nombre fue olvidado mucho antes de que las grandes cordilleras del norte fueran esculpidas por el viento. Quien descifre este enigma, heredará el dominio sobre los elementos." 
  },
  { 
    left: "Así concluye este fragmento rescatado del alba de los tiempos, un testimonio escrito con sangre y ceniza de fénix. No sigas buscando respuestas en las estrellas si no has aprendido a mirar primero la oscuridad que habita en tu propia alma.", 
    right: "[ El libro comienza a emitir un tenue fulgor carmesí entre sus costuras desgastadas, vibra por un instante y, lentamente, vuelve a sumirse en su eterno letargo de piedra y pergamino. ]" 
  }
];

function Main() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState('next'); 
  const [displayPage, setDisplayPage] = useState(0);

  
  const handlePageTurn = (direction, e) => {
    e.stopPropagation();
    if (!isOpen || isFlipping) return;

    if (direction === 'next') {
      if (displayPage >= bookPages.length - 1) {
        setIsFlipping(true);
        setFlipDirection('next');
        setTimeout(() => {
          setIsOpen(false);
          setDisplayPage(0);
          setIsFlipping(false);
        }, 600);
        return;
      }

      setFlipDirection('next');
      setIsFlipping(true);

      // Swap background content mid-flip (at 90 degrees vertical point)
      setTimeout(() => {
        setDisplayPage(prev => prev + 1);
      }, 300);

    } else if (direction === 'prev') {
      if (displayPage === 0) return; // Can't go back further

      setFlipDirection('prev');
      setIsFlipping(true);

      // Swap background content mid-flip
      setTimeout(() => {
        setDisplayPage(prev => prev - 1);
      }, 300);
    }

    // Reset flipping state once animation cycle completes
    setTimeout(() => {
      setIsFlipping(false);
    }, 600);
  };

  const handleBookClick = () => {
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  return (
    <div className="relative min-h-screen bg-neutral-900 text-white flex flex-col items-center justify-center p-6 font-poppins selection:bg-rose-500 selection:text-white overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 bg-custom-pattern bg-cover bg-center opacity-40 pointer-events-none" 
        aria-hidden="true"
      />
      
      {/* Content Wrapper */}
      <div className="z-10 flex flex-col items-center space-y-14 max-w-4xl w-full">
        
        <h1 className="text-4xl md:text-6xl font-light tracking-tight text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.15)] leading-tight">
          Trazales presenta
        </h1>

        {/* --- MAGIC BOOK CONTAINER --- */}
        <div 
          onClick={handleBookClick}
          className={`${isOpen ? 'relative w-72 h-[480px] md:w-[700px] md:h-[520px]' : 'relative w-72 h-[480px] md:w-[550px] md:h-[520px]'} cursor-pointer transition-all duration-700 ease-in-out preserve-3d
            ${isOpen ? 'rotate-y-0 scale-100' : 'hover:scale-105'}`}
          style={{ perspective: '2000px' }}
        >
          {/* CLOSED BOOK COVER */}
          <div className={`absolute inset-0 rounded-r-xl shadow-[0_20px_50px_rgba(0,0,0,0.7)] border-2 border-blue-900/40 bg-gradient-to-br from-stone-800 via-blue-950 to-stone-900 transition-all duration-700 origin-left backface-hidden flex flex-col items-center justify-center p-6 z-20
            ${isOpen ? 'rotate-y-180 pointer-events-none opacity-0' : 'rotate-y-0 opacity-100'}`}
          >
            <div className="absolute inset-4 border border-amber-600/20 rounded-lg pointer-events-none" />
            <div className="w-20 h-20 border-2 border-amber-500/30 rotate-45 flex items-center justify-center text-amber-500/40 mb-10 animate-pulse">
              <span className="-rotate-45 font-serif text-xl">A</span>
            </div>
            <h2 className="font-serif text-xl tracking-widest text-amber-500/60 uppercase">Crónicas de un brujo</h2>
            <p className="text-s text-stone-500 mt-2 italic">Click para romper el sello</p>
          </div>

          {/* OPENED BOOK INNER STRUCTURE */}
          <div className={`absolute inset-0 w-full h-full grid grid-cols-2 bg-blue-950 rounded-lg p-2 shadow-[0_25px_60px_rgba(0,0,0,0.8)] transition-all duration-500 border border-amber-900/60
            ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* LEFT PAGE (Triggers Backwards) */}
            <div 
              onClick={(e) => handlePageTurn('prev', e)}
              className="bg-gradient-to-r from-amber-100 via-stone-200 to-amber-50 text-stone-900 p-6 rounded-l shadow-[inset_-10px_0_20px_rgba(0,0,0,0.15)] flex flex-col justify-between border-r border-stone-400/40 select-none relative overflow-hidden group"
            >
              <div className="font-serif italic text-sm md:text-base leading-relaxed pt-4 opacity-90">
                {bookPages[displayPage]?.left}
              </div>
              <div className="flex justify-between items-center text-xs font-serif text-stone-400">
                <span>{displayPage * 2 + 1}</span>
                {displayPage > 0 && (
                  <span className="text-amber-800/40 group-hover:text-amber-700/80 transition-colors text-[15px] tracking-wider">
                    ← ATRÁS
                  </span>
                )}
              </div>
            </div>

            {/* RIGHT PAGE (Triggers Forwards) */}
            <div 
              onClick={(e) => handlePageTurn('next', e)}
              className="bg-gradient-to-l from-blue-100 via-stone-200 to-blue-50 text-stone-900 p-6 rounded-r shadow-[inset_10px_0_20px_rgba(0,0,0,0.15)] flex flex-col justify-between select-none relative overflow-hidden group"
            >
              <div className="font-serif italic text-sm md:text-base leading-relaxed pt-4 opacity-90">
                {bookPages[displayPage]?.right}
              </div>
              <div className="flex justify-between items-center text-xs font-serif text-stone-400">
                <span className="text-blue-800/40 group-hover:text-blue-700/80 transition-colors text-[15px] tracking-wider">
                  {displayPage === bookPages.length - 1 ? 'CERRAR ✕' : 'SIGUIENTE →'}
                </span>
                <span>{displayPage * 2 + 2}</span>
              </div>
            </div>

            {/* --- REALISTIC 3D FLIPPING LAYER --- */}
            {isFlipping && (
              <div 
                className={`absolute top-2 bottom-2 text-stone-900 p-6 shadow-2xl transition-all duration-600 ease-in-out z-10
                  ${flipDirection === 'next' 
                    ? 'right-2 w-[calc(50%-8px)] origin-left bg-gradient-to-l from-amber-100 to-stone-200 rounded-r [transform:rotateY(-180deg)]' 
                    : 'left-2 w-[calc(50%-8px)] origin-right bg-gradient-to-r from-amber-100 to-stone-200 rounded-l [transform:rotateY(180deg)]'
                  }`}
                style={{
                  transformStyle: 'preserve-3d',
                  backfaceVisibility: 'visible',
                }}
              >
                {/* Content printed on the front-side of the turning leaf */}
                <div className="absolute inset-0 p-6 backface-hidden flex flex-col justify-between bg-gradient-to-l from-amber-50 to-stone-200">
                  <div className="font-serif italic text-sm md:text-base leading-relaxed pt-4 opacity-70">
                    {flipDirection === 'next' 
                      ? bookPages[displayPage]?.right 
                      : bookPages[displayPage]?.left
                    }
                  </div>
                  <span className="text-xs font-serif text-stone-400">
                    {flipDirection === 'next' ? displayPage * 2 + 2 : displayPage * 2 + 1}
                  </span>
                </div>

                {/* Content printed on the reverse-side of the turning leaf */}
                <div className="absolute inset-0 p-6 [transform:rotateY(180deg)] backface-hidden flex flex-col justify-between bg-gradient-to-r from-amber-50 to-stone-200">
                  <div className="font-serif italic text-sm md:text-base leading-relaxed pt-4 opacity-70">
                    {flipDirection === 'next'
                      ? bookPages[displayPage + 1]?.left
                      : bookPages[displayPage - 1]?.right
                    }
                  </div>
                  <span className="text-xs font-serif text-stone-400">
                    {flipDirection === 'next' ? displayPage * 2 + 3 : displayPage * 2}
                  </span>
                </div>
              </div>
            )}
            {/* --- END FLIPPING LAYER --- */}

          </div>
        </div>
        {/* --- END BOOK CONTAINER --- */}

        <div className="flex flex-col items-center space-y-2 pt-8 opacity-40 hover:opacity-80 transition-opacity duration-300 select-none">
          <span className="text-[20px] tracking-widest uppercase font-white text-stone-400">
            Powered By
          </span>
          <img 
            src={logoImg}
            alt="Logo" 
            className="h-16 w-auto object-contain brightness-90 contrast-125"
          />
        </div>

      </div>
    </div>
  );
}

export default Main;