"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import Link from "next/link"

export default function RegisterPage() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ email })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-50 to-cyan-100 px-4 py-8">
      <Card className="w-full max-w-[400px] shadow-xl border-cyan-200">
        <CardHeader className="px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-center text-cyan-900">
            Cadastro
          </h1>
          <p className="text-sm sm:text-base text-center text-cyan-600 mt-2">Crie sua conta para começar</p>
        </CardHeader>
        <CardContent className="px-4 sm:px-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-cyan-200 focus:border-cyan-400 bg-white/50 w-full"
              />
              <p className="text-xs sm:text-sm text-cyan-600">
                Apenas o e-mail é necessário para o cadastro
              </p>
            </div>
            <Button 
              type="submit" 
              className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold text-sm sm:text-base"
            >
              Cadastrar
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-2 px-4 sm:px-6">
          <p className="text-xs sm:text-sm text-cyan-600 hover:text-cyan-800 text-center w-full">
            <Link href="/login">Já tem uma conta? Faça login</Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
