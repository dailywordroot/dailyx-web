"use client"

import { useEffect, useState } from "react"
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
import Header from "@/components/ui/header"
import { http } from "@/lib/http"
import { toast } from "sonner"

interface IdiomaConfig {
  idioma: string
  palavrasPorDia: number
  tipoEnvio: string
  isActive: boolean
}

export default function ConfigPage() {
  const [nome, setNome] = useState("Usuário")
  const [email, setEmail] = useState("usuario@email.com")
  const [config, setConfig] = useState<any>({});
  const [idiomasConfig, setIdiomasConfig] = useState<IdiomaConfig[]>([
    { idioma: "Inglês", palavrasPorDia: 2, tipoEnvio: "Texto", isActive: true }
  ])

  const handleAddIdioma = () => {
    setIdiomasConfig([...idiomasConfig, { idioma: "", palavrasPorDia: 2, tipoEnvio: "Texto", isActive: true }])
  }

  const updateIdiomaConfig = (index: number, field: keyof IdiomaConfig, value: string | number | boolean) => {
    const newConfig = [...idiomasConfig]
    newConfig[index] = { ...newConfig[index], [field]: value }
    setIdiomasConfig(newConfig)
  }

  const removeIdioma = (index: number) => {
    const newConfig = [...idiomasConfig]
    newConfig.splice(index, 1)
    setIdiomasConfig(newConfig)
  }

  const getUserConfig = async () => {
    const result = await http.get("/users-configurations");
    setConfig(result as any);
  }

  const handleSubmit = async () => {
    try {
      const result = await http.put("/users-configurations", config);
      toast.success("Configurações salvas com sucesso!")
    } catch (error) {
      toast.error("Erro ao enviar configurações")
    }
  }

  useEffect(() => {
    getUserConfig()
  }, [])

  return (
    <div>
      <Header/>

      <div className="min-h-screen p-4 sm:p-6 md:p-8 bg-gradient-to-br from-cyan-50 to-cyan-100">
        <Card className="w-full max-w-[800px] mx-auto shadow-xl border-cyan-200">
          <CardHeader className="px-4 sm:px-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-center text-cyan-900">Configurações</h1>
          </CardHeader>
          <CardContent className="space-y-6 px-4 sm:px-6">
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold text-cyan-800">Informações Pessoais</h2>
              <div className="grid gap-4">
                <div>
                  <label className="text-sm sm:text-base text-cyan-700">Nome do usuário</label>
                  <Input
                    value={config?.username}
                    onChange={(e) => setConfig({ ...config, username: e.target.value })}
                    className="border-cyan-200 focus:border-cyan-400 bg-white/50 text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label className="text-sm sm:text-base text-cyan-700">Email</label>
                  <Input
                    value={config?.email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={true}
                    className="border-cyan-200 focus:border-cyan-400 bg-white/50 text-sm sm:text-base"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold text-cyan-800">Configurações de Idiomas</h2>
              {idiomasConfig.map((config, index) => (
                <div key={index} className="flex flex-col sm:flex-row gap-4 items-start sm:items-end">
                  <div className="w-full sm:flex-1">
                    <label className="text-sm sm:text-base text-cyan-700">Idioma</label>
                    <Select
                      value={config.idioma}
                      onValueChange={(value) => updateIdiomaConfig(index, "idioma", value)}
                    >
                      <SelectTrigger className="border-cyan-200 bg-white/50 text-sm sm:text-base">
                        <SelectValue placeholder="Selecione um idioma" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Português" disabled>Português</SelectItem>
                        <SelectItem value="Inglês">Inglês</SelectItem>
                        <SelectItem value="Espanhol" disabled>Espanhol</SelectItem>
                        <SelectItem value="Francês" disabled>Francês</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="w-full sm:w-[200px]">
                    <label className="text-sm sm:text-base text-cyan-700">Palavras por dia</label>
                    <Select
                      value={config.palavrasPorDia.toString()}
                      onValueChange={(value) => updateIdiomaConfig(index, "palavrasPorDia", parseInt(value))}
                    >
                      <SelectTrigger className="border-cyan-200 bg-white/50 text-sm sm:text-base">
                        <SelectValue placeholder="Quantidade" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2">2 palavras</SelectItem>
                        <SelectItem value="3" disabled>3 palavras</SelectItem>
                        <SelectItem value="4" disabled>4 palavras</SelectItem>
                        <SelectItem value="5" disabled>5 palavras</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="w-full sm:w-[200px]">
                    <label className="text-sm sm:text-base text-cyan-700">Tipo de envio</label>
                    <Select
                      value={config.tipoEnvio}
                      onValueChange={(value) => updateIdiomaConfig(index, "tipoEnvio", value)}
                      disabled
                    >
                      <SelectTrigger className="border-cyan-200 bg-white/50 text-sm sm:text-base">
                        <SelectValue placeholder="Tipo de envio" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Texto">Texto</SelectItem>
                        <SelectItem value="Imagem" disabled>Imagem</SelectItem>
                        <SelectItem value="Tradução" disabled>Tradução</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button
                    variant="ghost"
                    onClick={() => removeIdioma(index)}
                    className="text-sm sm:text-base w-full sm:w-auto text-red-600 hover:text-red-800"
                    disabled
                  >
                    Remover
                  </Button>
                </div>
              ))}
              <Button
                onClick={handleAddIdioma}
                disabled={true}
                className="mt-4 bg-cyan-600 hover:bg-cyan-700 text-white text-sm sm:text-base w-full sm:w-auto"
              >
                Adicionar Idioma
              </Button>
            </div>

            <Button 
              className="w-full bg-cyan-600 hover:bg-cyan-700 text-white mt-6 text-sm sm:text-base py-2 sm:py-3"
              onClick={() => handleSubmit()}
            >
              Salvar Configurações
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
