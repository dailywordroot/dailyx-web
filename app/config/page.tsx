"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardHeader, CardContent } from "@/components/ui/card"

interface IdiomaConfig {
  idioma: string
  palavrasPorDia: number
}

export default function ConfigPage() {
  const [nome, setNome] = useState("Usuário")
  const [email, setEmail] = useState("usuario@email.com")
  const [idiomasConfig, setIdiomasConfig] = useState<IdiomaConfig[]>([
    { idioma: "Português", palavrasPorDia: 3 },
    { idioma: "Inglês", palavrasPorDia: 2 }
  ])

  const handleAddIdioma = () => {
    setIdiomasConfig([...idiomasConfig, { idioma: "", palavrasPorDia: 1 }])
  }

  const updateIdiomaConfig = (index: number, field: keyof IdiomaConfig, value: any) => {
    const newConfig = [...idiomasConfig]
    newConfig[index] = { ...newConfig[index], [field]: value }
    setIdiomasConfig(newConfig)
  }

  const removeIdioma = (index: number) => {
    setIdiomasConfig(idiomasConfig.filter((_, i) => i !== index))
  }

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-blue-50 to-blue-100">
      <Card className="max-w-[800px] mx-auto shadow-lg">
        <CardHeader>
          <h1 className="text-2xl font-bold text-blue-900">Configurações</h1>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-blue-800">Informações Pessoais</h2>
            <div className="grid gap-4">
              <div>
                <label className="text-sm text-blue-700">Nome</label>
                <Input
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="border-blue-200 focus:border-blue-400"
                />
              </div>
              <div>
                <label className="text-sm text-blue-700">Email</label>
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-blue-200 focus:border-blue-400"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-blue-800">Configurações de Idiomas</h2>
            {idiomasConfig.map((config, index) => (
              <div key={index} className="flex gap-4 items-end">
                <div className="flex-1">
                  <label className="text-sm text-blue-700">Idioma</label>
                  <Select
                    value={config.idioma}
                    onValueChange={(value) => updateIdiomaConfig(index, "idioma", value)}
                  >
                    <SelectTrigger className="border-blue-200">
                      <SelectValue placeholder="Selecione um idioma" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Português">Português</SelectItem>
                      <SelectItem value="Inglês">Inglês</SelectItem>
                      <SelectItem value="Espanhol">Espanhol</SelectItem>
                      <SelectItem value="Francês">Francês</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="w-[200px]">
                  <label className="text-sm text-blue-700">Palavras por dia</label>
                  <Input
                    type="number"
                    min="1"
                    max="10"
                    value={config.palavrasPorDia}
                    onChange={(e) => updateIdiomaConfig(index, "palavrasPorDia", parseInt(e.target.value))}
                    className="border-blue-200 focus:border-blue-400"
                  />
                </div>
                <Button
                  variant="ghost"
                  onClick={() => removeIdioma(index)}
                  className="text-red-600 hover:text-red-800"
                >
                  Remover
                </Button>
              </div>
            ))}
            <Button
              onClick={handleAddIdioma}
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white"
            >
              Adicionar Idioma
            </Button>
          </div>

          <Button 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-6"
            onClick={() => console.log("Salvar configurações", { nome, email, idiomasConfig })}
          >
            Salvar Configurações
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
