"use client"

import { Flag } from "lucide-react"
import { Bar, BarChart, CartesianGrid, Legend, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
	{ month: "Janeiro", ingles: 90, espanhol: 90, alemao: 60, frances: 60, japones: 0 },
	{ month: "Fevereiro", ingles: 90, espanhol: 90, alemao: 0, frances: 60, japones: 0 },
	{ month: "Março", ingles: 90, espanhol: 90, alemao: 0, frances: 0, japones: 0 },
	{ month: "Abril", ingles: 90, espanhol: 90, alemao: 0, frances: 0, japones: 0 },
	{ month: "Maio", ingles: 90, espanhol: 90, alemao: 0, frances: 0, japones: 0 },
	{ month: "Junho", ingles: 90, espanhol: 90, alemao: 0, frances: 60, japones: 0 }
]

const chartConfig = {
  ingles: {
    label: "Inglês",
    color: "#0052B4", // Azul da bandeira dos EUA
  },
  espanhol: {
    label: "Espanhol",
    color: "#F1BF00", // Amarelo da bandeira da Espanha
  },
  alemao: {
    label: "Alemão",
    color: "#DD0000", // Vermelho da bandeira da Alemanha
  },
  frances: {
    label: "Francês", 
    color: "#002395", // Azul da bandeira da França
  },
  japones: {
    label: "Japonês",
    color: "#BC002D", // Vermelho da bandeira do Japão
  }
} satisfies ChartConfig

export default function Component() {
  return (
    <Card className="h-screen">
      <CardHeader>
        <CardTitle>Gráfico de Idiomas</CardTitle>
        <CardDescription>Janeiro - Junho 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[calc(100vh-250px)]">
          <BarChart data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Legend 
              iconType="circle"
              layout="horizontal"
              verticalAlign="top"
              align="center"
            />
            <Bar dataKey="ingles" name="Inglês" fill="#0052B4" radius={4} />
            <Bar dataKey="espanhol" name="Espanhol" fill="#F1BF00" radius={4} />
            <Bar dataKey="alemao" name="Alemão" fill="#DD0000" radius={4} />
            <Bar dataKey="frances" name="Francês" fill="#002395" radius={4} />
            <Bar dataKey="japones" name="Japonês" fill="#BC002D" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Inglês e Espanhol em alta <Flag className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Mostrando progresso dos alunos nos últimos 6 meses
        </div>
      </CardFooter>
    </Card>
  )
}
