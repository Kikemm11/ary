import React, { useState } from 'react';

import logoImg from '../assets/logicatstudio_logo.png';

const bookPages = [
  { 
    left: `<b>A 20 días del mes de Julio.</b>
    
    Han comenzado a tildarme de loco… de hombre caído en el delirio y de la paranoia. Mas bien sé que hay misterios ocultos a mi entendimiento. Encontré este grimorio en blanco para plasmar mis hechos.
    
    Todos se conducen con extrañeza al hallar en mi presencia. Murmuran entredientes y sospecho que han concebido una parlada secreta, pues con mis propios ojos he visto pergaminos sellados con grafías… o símbolos jamás contemplados por ningún campesino o pueblerino alguno, ni en los exiliados.`, 
    right: `Desconozco qué pretenden de mi persona, cuando cumplo con todo cuanto me demandan, a despecho de las habladurías y difamaciones del poblado. Una vez más, quien es mi mano derecha abandonó la taberna antes de la hora acostumbrada, y en mi caminar de retorno, sentía la certidumbre de ser asechado. Más no sabría decir si era un hombre o solo la sombra y el reflejo de un espíritu vagabundo.
    
    Quizá sea obra de la bruja del pueblo, que ha lanzado un nuevo maleficio sobre mí… Solo los cielos lo saben.` 
  },

  { 
    left: `<b>A 21 días del mes de Julio.</b>
    
    Quizá sea certeza que me hallo algo paranoico, imaginando cosas donde no las hay. Le revelé a Ananda mis pesares, más solo recibí sus burlas ante mis pensamientos. Señalándome que la mayoría del pueblo no sabía escribir y capaz era un bosquejo inventado.`, 
    right: `Sin embargo, me atormenta ese sonido continuo que escucho en la soledad, así como esos pergaminos sellados con un símbolo que jamás había visto.
    
    Mañana en madruga iré a ver al oráculo. Es el que predice mi suerte cuando apuesto por los barriles de fermentado y me hace salir victorioso. Quizá, solo quizá, pueda darme alguna señal de lo que sucede.` 
  },
  { 
    left: `<b>A 22 días del mes de Julio.</b>
    
    Me hallaba en la cabaña del oráculo cuando, al tomar mis manos, vi cómo todo se oscurecía y una densa niebla inundaba el lugar: parecía un sueño. Quizás solo fue eso, un sueño, y jamás estuve allí. O una amarga vigilia. Todo quedó en tinieblas, sus ojos se tornaron blancos y comenzó a murmurar palabras comprensibles únicamente para el... aunque juraría haber escuchado esos vocablos antes.
    
    Salí de allí con el corazón en la garganta, temblando de espanto. Solo pronunciaba cosas sin sentido: conjuro, reencarnación, poder, lujuria.`, 
    right: `En el camino de regreso, mi farol se apagó como si una ráfaga lo hubiera soplado. La sombra que me acechaba —cubierta con una caperuza que me impedía distinguir si poseía rostro alguno— se acercó y me susurró:

    «Cuídate de las Aves».

    Y acto seguido, se esfumó en la noche.
    
    Escribo estas líneas... Para convencerme de que solo fue una pesadilla. Pues esto no pudo haber sido real.`
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
          Trazeles presenta
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
            <h2 className="font-serif text-xl tracking-widest text-amber-500/60 uppercase">Grimorio de Hirundo</h2>
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
              <div 
                className="font-serif italic text-sm md:text-base leading-relaxed pt-4 opacity-90 whitespace-pre-line"
                dangerouslySetInnerHTML={{ __html: bookPages[displayPage]?.left || "" }}
              />
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
              <div 
                className="font-serif italic text-sm md:text-base leading-relaxed pt-4 opacity-90 whitespace-pre-line"
                dangerouslySetInnerHTML={{ __html: bookPages[displayPage]?.right || "" }}
              />
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
                  <div 
                    className="font-serif italic text-sm md:text-base leading-relaxed pt-4 opacity-70 whitespace-pre-line"
                    dangerouslySetInnerHTML={{ 
                      __html: (flipDirection === 'next' 
                        ? bookPages[displayPage]?.right 
                        : bookPages[displayPage]?.left) || '' 
                    }}
                  />
                  <span className="text-xs font-serif text-stone-400">
                    {flipDirection === 'next' ? displayPage * 2 + 2 : displayPage * 2 + 1}
                  </span>
                </div>

                {/* Content printed on the reverse-side of the turning leaf */}
                <div className="absolute inset-0 p-6 [transform:rotateY(180deg)] backface-hidden flex flex-col justify-between bg-gradient-to-r from-amber-50 to-stone-200">
                  <div 
                    className="font-serif italic text-sm md:text-base leading-relaxed pt-4 opacity-70 whitespace-pre-line"
                    dangerouslySetInnerHTML={{ 
                      __html: (flipDirection === 'next'
                        ? bookPages[displayPage + 1]?.left
                        : bookPages[displayPage - 1]?.right) || '' 
                    }}
                  />
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