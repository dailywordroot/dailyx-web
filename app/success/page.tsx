"use client"

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useWindowSize } from 'react-use'
import Confetti from "react-confetti";

export default function Success() {
  const router = useRouter();
  const { width, height } = useWindowSize()
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false); // Desativa o confetti após 5 segundos
    }, 8000);

    // Limpa o timer quando o componente é desmontado
    return () => clearTimeout(timer);
  }, []);

  // Verifica se o componente Confetti pode ser renderizado com base no tamanho da janela
  const canRenderConfetti = width !== Infinity && width !== null && height !== Infinity && height !== null;

  return (
      <div className="min-h-screen bg-white relative overflow-hidden">
        {showConfetti && canRenderConfetti && <Confetti width={width} height={height} />}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center min-h-screen text-center py-12">
          <p className="text-xl font-semibold bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">
            Estamos felizes em começar uma nova jornada com você! Nossa equipe está comprometida em ajudá-lo a alcançar seus objetivos e se desenvolver. Agradeçemos a oportunidade de fazer parte dessa jornada e esperamos que você se sinta inspirado a alcançar grandes coisas.
          </p>
          <button onClick={() => router.push("/login")} className="mt-4 bg-cyan-500 text-white px-4 py-2 rounded-lg">
            Ir para o Login
          </button>
        </div>
      </div>
    </div>
  );
}

