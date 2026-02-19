"use client";

import { MainLayout } from "@/components/MainLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowUpRight, BarChart3, Download, PieChart, Share2, TrendingUp } from "lucide-react";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Legend, Line, LineChart, Pie, PieChart as RechartsPieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

// Dados Mockados para o Dashboard
const revenueData = [
  { month: "Jan", revenue: 4500, projects: 2 },
  { month: "Fev", revenue: 5200, projects: 3 },
  { month: "Mar", revenue: 4800, projects: 2 },
  { month: "Abr", revenue: 6100, projects: 4 },
  { month: "Mai", revenue: 5500, projects: 3 },
  { month: "Jun", revenue: 7200, projects: 5 },
];

const categoryData = [
  { name: "Gastronomia", value: 45, color: "var(--chart-1)" },
  { name: "Automotivo", value: 30, color: "var(--chart-2)" },
  { name: "Varejo", value: 15, color: "var(--chart-3)" },
  { name: "Serviços", value: 10, color: "var(--chart-4)" },
];

const techStackData = [
  { subject: "React", A: 120, fullMark: 150 },
  { subject: "Next.js", A: 98, fullMark: 150 },
  { subject: "Tailwind", A: 86, fullMark: 150 },
  { subject: "Node.js", A: 99, fullMark: 150 },
  { subject: "Design", A: 85, fullMark: 150 },
  { subject: "SEO", A: 65, fullMark: 150 },
];

export default function Dashboard() {
  return (
    <MainLayout>
      <div className="space-y-8 animate-in fade-in duration-700">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h2 className="text-4xl font-heading font-bold text-foreground">Performance do Portfólio</h2>
            <p className="text-muted-foreground">Análise de crescimento, tendências de mercado e métricas de projetos.</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <Share2 className="w-4 h-4" /> Compartilhar
            </Button>
            <Button className="gap-2">
              <Download className="w-4 h-4" /> Exportar Relatório
            </Button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-card/50 border-border/10 backdrop-blur">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Receita Total (Semestre)</CardTitle>
              <TrendingUp className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">R$ 33.300</div>
              <p className="text-xs text-muted-foreground mt-1 flex items-center">
                <span className="text-green-500 flex items-center mr-1">
                  <ArrowUpRight className="w-3 h-3 mr-0.5" /> +12.5%
                </span>
                em relação ao período anterior
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card/50 border-border/10 backdrop-blur">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Projetos Entregues</CardTitle>
              <BarChart3 className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">19</div>
              <p className="text-xs text-muted-foreground mt-1">
                Média de 3.1 projetos por mês
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card/50 border-border/10 backdrop-blur">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Nicho Principal</CardTitle>
              <PieChart className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">Gastronomia</div>
              <p className="text-xs text-muted-foreground mt-1">
                45% de todos os projetos
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className="bg-card/50 border border-border/10">
            <TabsTrigger value="overview">Visão Geral</TabsTrigger>
            <TabsTrigger value="analytics">Análise Detalhada</TabsTrigger>
            <TabsTrigger value="reports">Relatórios</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Revenue Chart */}
              <Card className="bg-card/50 border-border/10 backdrop-blur col-span-1 lg:col-span-2">
                <CardHeader>
                  <CardTitle>Crescimento de Receita</CardTitle>
                  <CardDescription>Evolução mensal do faturamento com projetos web.</CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={revenueData}>
                        <defs>
                          <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="var(--primary)" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                        <XAxis 
                          dataKey="month" 
                          stroke="var(--muted-foreground)" 
                          fontSize={12} 
                          tickLine={false} 
                          axisLine={false} 
                        />
                        <YAxis 
                          stroke="var(--muted-foreground)" 
                          fontSize={12} 
                          tickLine={false} 
                          axisLine={false} 
                          tickFormatter={(value) => `R$${value}`} 
                        />
                        <Tooltip 
                          contentStyle={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)', borderRadius: '8px' }}
                          itemStyle={{ color: 'var(--foreground)' }}
                        />
                        <Area 
                          type="monotone" 
                          dataKey="revenue" 
                          stroke="var(--primary)" 
                          strokeWidth={2} 
                          fillOpacity={1} 
                          fill="url(#colorRevenue)" 
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Category Distribution */}
              <Card className="bg-card/50 border-border/10 backdrop-blur">
                <CardHeader>
                  <CardTitle>Distribuição por Nicho</CardTitle>
                  <CardDescription>Segmentação dos clientes atendidos.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsPieChart>
                        <Pie
                          data={categoryData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={80}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {categoryData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip 
                          contentStyle={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)', borderRadius: '8px' }}
                          itemStyle={{ color: 'var(--foreground)' }}
                        />
                        <Legend verticalAlign="bottom" height={36} />
                      </RechartsPieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Project Volume */}
              <Card className="bg-card/50 border-border/10 backdrop-blur">
                <CardHeader>
                  <CardTitle>Volume de Projetos</CardTitle>
                  <CardDescription>Quantidade de entregas mensais.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={revenueData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                        <XAxis 
                          dataKey="month" 
                          stroke="var(--muted-foreground)" 
                          fontSize={12} 
                          tickLine={false} 
                          axisLine={false} 
                        />
                        <YAxis 
                          stroke="var(--muted-foreground)" 
                          fontSize={12} 
                          tickLine={false} 
                          axisLine={false} 
                        />
                        <Tooltip 
                          cursor={{ fill: 'var(--muted)/20' }}
                          contentStyle={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)', borderRadius: '8px' }}
                          itemStyle={{ color: 'var(--foreground)' }}
                        />
                        <Bar dataKey="projects" fill="var(--primary)" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="analytics">
            <Card className="bg-card/50 border-border/10 backdrop-blur">
              <CardHeader>
                <CardTitle>Análise Detalhada</CardTitle>
                <CardDescription>Visualização avançada de métricas (Placeholder).</CardDescription>
              </CardHeader>
              <CardContent className="h-[400px] flex items-center justify-center text-muted-foreground">
                Selecione um período para ver a análise detalhada.
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
}
