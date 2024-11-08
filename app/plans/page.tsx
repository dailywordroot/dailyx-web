"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import Link from "next/link"

export default function PlansPage() {
  const [isSemestral, setIsSemestral] = useState(true)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-50 to-cyan-100 px-4 py-8">
      <Card className="w-full max-w-[400px] shadow-xl border-cyan-200">
        <CardHeader className="px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-center text-cyan-900">Planos</h1>
          <p className="text-sm sm:text-base text-center text-cyan-600 mt-2">Escolha o melhor plano para você</p>
          <div className="flex justify-center gap-4 mt-4">  
            <Button
              variant="ghost"
              onClick={() => setIsSemestral(false)}
              className={`text-xs sm:text-sm ${!isSemestral ? 'text-cyan-600 bg-cyan-100' : 'text-gray-600'}`}
            >
              Mensal
            </Button>
            <Button
              variant="ghost"
              onClick={() => setIsSemestral(true)}
              className={`text-xs sm:text-sm ${isSemestral ? 'text-cyan-600 bg-cyan-100' : 'text-gray-600'}`}
            >
              Semestral
            </Button>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6 px-4 sm:px-6">
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-bold text-cyan-900">
              {isSemestral ? "R$ 24,99" : "R$ 5,99"}
              <span className="text-base sm:text-lg font-normal text-cyan-600">
                {isSemestral ? "/ano" : "/mês"}
              </span>
            </p>
            {isSemestral && (
              <p className="text-xs sm:text-sm text-green-600 mt-2">
                Economize mais de 65%
              </p>
            )}
          </div>

          <div className="space-y-3">
            <p className="flex items-center text-cyan-800 text-sm sm:text-base">
              <span className="mr-2">✓</span> Acesso a todos os recursos básicos
            </p>
            <p className="flex items-center text-cyan-800 text-sm sm:text-base">
              <span className="mr-2">✓</span> Suporte por email
            </p>
            <p className="flex items-center text-cyan-800 text-sm sm:text-base">
              <span className="mr-2">✓</span> Atualizações gratuitas
            </p>
            <p className="flex items-center text-cyan-800 text-sm sm:text-base">
              <span className="mr-2">✓</span> Sem limite de uso
            </p>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col gap-4 px-4 sm:px-6">
          <Link href="/register" className="w-full">
            <Button 
              className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold focus:border-cyan-400 text-sm sm:text-base py-2 sm:py-3"
            >
              Registrar Agora
            </Button>
          </Link>
          <p className="text-xs sm:text-sm text-center text-cyan-600 hover:text-cyan-800">
            Cancele a qualquer momento
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
