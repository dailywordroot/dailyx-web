"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { APP_NAME } from "../../lib/constants"

export default function EmailTemplate() {
  return (
    <div className="min-h-screen bg-cyan-50 p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="p-8">
          {/* Cabeçalho do Email */}
          <div className="text-center mb-8">
            <motion.div
            //   animate={{
            //     y: [0, -10, 0],
            //     rotate: [-5, 5, -5],
            //     scale: [1, 1.05, 1]
            //   }}
            //   transition={{
            //     duration: 4,
            //     repeat: Infinity,
            //     ease: "easeInOut"
            //   }}
              className="mb-6"
            >
              <Image
                src="/logo.png"
                alt="Axolote mascote"
                width={100}
                height={100}
                className="mx-auto"
              />
            </motion.div>
            
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Olá, Usuário!
            </h1>
            <p className="text-lg text-gray-600">
              Aqui estão suas palavras do dia:
            </p>
          </div>

          {/* Palavras do Dia */}
          <div className="space-y-8">

          {/* <div className="bg-cyan-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-cyan-800 mb-2">Transformer</h3>
              <p className="text-gray-600">
                Changer complètement l'apparence ou le caractère de quelque chose ou quelqu'un.
                Tout comme notre application transforme votre expérience d'apprentissage du vocabulaire.
              </p>
            </div>

            <div className="bg-cyan-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-cyan-800 mb-2">Intelligent</h3>
              <p className="text-gray-600">
                Avoir ou montrer de l'intelligence et une capacité mentale rapide.
                Notre système d'apprentissage adaptatif est conçu pour être intelligent, comme vous !
              </p>
            </div>

            <div className="bg-cyan-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-cyan-800 mb-2">Progrès</h3>
              <p className="text-gray-600">
                Développement vers une condition améliorée ou plus avancée.
                Suivez vos progrès quotidiens et regardez votre vocabulaire s'enrichir avec nous.
              </p>
            </div> */}
            {/* <div className="bg-cyan-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-cyan-800 mb-2">Transformar</h3>
              <p className="text-gray-600">
                Cambiar completamente la apariencia o el carácter de algo o alguien.
                Así como nuestra aplicación transforma tu experiencia de aprendizaje de vocabulario.
              </p>
            </div>

            <div className="bg-cyan-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-cyan-800 mb-2">Inteligente</h3>
              <p className="text-gray-600">
                Tener o mostrar inteligencia y capacidad mental rápida.
                ¡Nuestro sistema de aprendizaje adaptativo está diseñado para ser inteligente, como tú!
              </p>
            </div>

            <div className="bg-cyan-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-cyan-800 mb-2">Progreso</h3>
              <p className="text-gray-600">
                Desarrollo hacia una condición mejorada o más avanzada.
                Sigue tu progreso diario y observa cómo crece tu vocabulario con nosotros.
              </p>
            </div> */}
            <div className="bg-cyan-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-cyan-800 mb-2">Transform</h3>
              <p className="text-gray-600">
                To change completely the appearance or character of something or someone.
                Just like how our app transforms your vocabulary learning experience.
              </p>
            </div>

            <div className="bg-cyan-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-cyan-800 mb-2">Smart</h3>
              <p className="text-gray-600">
                Having or showing intelligence and quick mental capacity.
                Our adaptive learning system is designed to be smart, just like you!
              </p>
            </div>

            <div className="bg-cyan-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-cyan-800 mb-2">Progress</h3>
              <p className="text-gray-600">
                Development towards an improved or more advanced condition.
                Track your daily progress and watch your vocabulary grow with us.
              </p>
            </div>
          </div>

          {/* Rodapé do Email */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              Continue praticando para expandir seu vocabulário!
            </p>
            <p className="text-sm text-cyan-600 mt-2">
              {APP_NAME} © 2024
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
