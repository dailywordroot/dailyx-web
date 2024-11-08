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
                src="https://static.vecteezy.com/system/resources/previews/021/276/936/non_2x/cute-axolotl-axolotl-illustration-sea-salamander-sea-life-marine-life-png.png"
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
