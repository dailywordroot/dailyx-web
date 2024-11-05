"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import Link from "next/link"

export default function PlansPage() {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
      <Card className="w-[400px] shadow-lg">
        <CardHeader>
          <h1 className="text-2xl font-bold text-center text-blue-900">Plano Basic</h1>
          <div className="flex justify-center gap-4 mt-4">
            <Button
              variant={!isAnnual ? "default" : "outline"}
              onClick={() => setIsAnnual(false)}
              className="text-sm"
            >
              Mensal
            </Button>
            <Button
              variant={isAnnual ? "default" : "outline"}
              onClick={() => setIsAnnual(true)}
              className="text-sm"
            >
              Anual
            </Button>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="text-center">
            <p className="text-4xl font-bold text-blue-900">
              {isAnnual ? "R$ 24,99" : "R$ 5,99"}
              <span className="text-lg font-normal text-blue-600">
                {isAnnual ? "/ano" : "/mês"}
              </span>
            </p>
            {isAnnual && (
              <p className="text-sm text-green-600 mt-2">
                Economize mais de 65%
              </p>
            )}
          </div>

          <div className="space-y-3">
            <p className="flex items-center text-blue-800">
              <span className="mr-2">✓</span> Acesso a todos os recursos básicos
            </p>
            <p className="flex items-center text-blue-800">
              <span className="mr-2">✓</span> Suporte por email
            </p>
            <p className="flex items-center text-blue-800">
              <span className="mr-2">✓</span> Atualizações gratuitas
            </p>
            <p className="flex items-center text-blue-800">
              <span className="mr-2">✓</span> Sem limite de uso
            </p>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col gap-4">
          <Link href="/register" className="w-full">
            <Button 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              Registrar Agora
            </Button>
          </Link>
          <p className="text-sm text-center text-blue-600">
            Cancele a qualquer momento
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
