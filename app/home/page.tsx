"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardHeader, CardContent } from "@/components/ui/card"

interface Palavra {
  id: number
  data: string
  palavra: string
  idioma: string
}

export default function HomePage() {
  const [busca, setBusca] = useState("")
  const [idiomaFiltro, setIdiomaFiltro] = useState("todos")
  
  // Dados de exemplo - substituir por dados reais da API
  const palavras: Palavra[] = [
    { id: 1, data: "2024-01-15", palavra: "Serendipidade", idioma: "Português" },
    { id: 2, data: "2024-01-16", palavra: "Wanderlust", idioma: "Inglês" },
    { id: 3, data: "2024-01-17", palavra: "Saudade", idioma: "Português" },
  ]

  const palavrasFiltradas = palavras.filter(palavra => {
    const matchBusca = palavra.palavra.toLowerCase().includes(busca.toLowerCase())
    const matchIdioma = idiomaFiltro === "todos" || palavra.idioma === idiomaFiltro
    return matchBusca && matchIdioma
  })

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-blue-50 to-blue-100">
      <Card className="max-w-[1200px] mx-auto shadow-lg">
        <CardHeader>
          <h1 className="text-2xl font-bold text-blue-900">Minhas Palavras</h1>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <Input
              placeholder="Buscar palavra..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              className="border-blue-200 focus:border-blue-400"
            />
            <Select
              value={idiomaFiltro}
              onValueChange={setIdiomaFiltro}
            >
              <SelectTrigger className="w-full sm:w-[180px] border-blue-200">
                <SelectValue placeholder="Filtrar por idioma" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todos os idiomas</SelectItem>
                <SelectItem value="Português">Português</SelectItem>
                <SelectItem value="Inglês">Inglês</SelectItem>
                <SelectItem value="Espanhol">Espanhol</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="rounded-md border border-blue-200">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-blue-900">Data</TableHead>
                  <TableHead className="text-blue-900">Palavra</TableHead>
                  <TableHead className="text-blue-900">Idioma</TableHead>
                  <TableHead className="text-blue-900">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {palavrasFiltradas.map((palavra) => (
                  <TableRow key={palavra.id}>
                    <TableCell className="text-blue-800">
                      {new Date(palavra.data).toLocaleDateString('pt-BR')}
                    </TableCell>
                    <TableCell className="font-medium text-blue-800">
                      {palavra.palavra}
                    </TableCell>
                    <TableCell className="text-blue-800">{palavra.idioma}</TableCell>
                    <TableCell>
                      <Button
                        variant="ghost"
                        className="text-blue-600 hover:text-blue-800"
                        onClick={() => console.log('Ver detalhes', palavra.id)}
                      >
                        Ver detalhes
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
