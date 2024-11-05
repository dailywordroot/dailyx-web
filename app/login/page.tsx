"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import Link from "next/link"

export default function LoginPage() {
  const [isRegistered, setIsRegistered] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você implementaria a lógica de autenticação
    console.log({ email, password })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
      <Card className="w-[400px] shadow-lg">
        <CardHeader>
          <h1 className="text-2xl font-bold text-center text-blue-900">Login</h1>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isRegistered ? (
              <>
                <div className="space-y-2">
                  <Input
                    type="email"
                    placeholder="Seu e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border-blue-200 focus:border-blue-400"
                  />
                  <p className="text-sm text-blue-600 hover:text-blue-800">
                    <Link href="/register">Fazer cadastro</Link>
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="space-y-2">
                  <Input
                    type="password"
                    placeholder="Sua senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border-blue-200 focus:border-blue-400"
                  />
                  <p className="text-sm text-blue-600 hover:text-blue-800">
                    <Link href="/reset-password">Resetar senha</Link>
                  </p>
                </div>
              </>
            )}
            <Button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              {isRegistered ? "Entrar" : "Continuar"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="justify-center">
          <Button
            variant="ghost"
            onClick={() => setIsRegistered(!isRegistered)}
            className="text-blue-600 hover:text-blue-800"
          >
            {isRegistered 
              ? "Usar outro e-mail" 
              : "Já tenho uma conta"
            }
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
