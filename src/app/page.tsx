"use client";

import { MainLayout } from "@/components/MainLayout";
import { TemplateCard } from "@/components/TemplateCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Layout, Smartphone } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="space-y-6">
        <Badge variant="outline" className="border-primary/50 text-primary px-4 py-1 text-sm tracking-widest uppercase animate-fade-in-down badge-smooth-transition">
          Portfólio 2026
        </Badge>
        <h1 className="text-6xl md:text-8xl font-heading font-bold text-foreground leading-[0.9] animate-fade-in-up animate-stagger-1 text-smooth">
          CRIANDO <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/50 animate-glow">
            EXPERIÊNCIAS
          </span> <br />
          DIGITAIS
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed animate-fade-in-up animate-stagger-2 opacity-transition">
          Desenvolvimento web de alto padrão para quem exige excelência. 
          Especializado em elevar a marca de pequenos negócios através de design estratégico em Ariquemes, RO.
        </p>
        
        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden mt-12 group shadow-2xl border border-border/10 hover-lift animate-fade-in-up animate-stagger-3 card-smooth">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/images/flowera-hero.jpg" 
            alt="FLOWERADEV - Desenvolvimento web e design profissional em Ariquemes, RO" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 animate-bounce-soft opacity-transition">
            <Badge className="bg-black/50 backdrop-blur text-white border-white/10 badge-smooth-transition">
              FLOWERA DEV ORIGINAL
            </Badge>
          </div>
        </div>
      </section>

      {/* Meus Clientes Section */}
      <section id="clientes" className="space-y-12 pt-12 fade-in-section">
        <div className="flex items-end justify-between border-b border-border/10 pb-6 animate-fade-in-left animate-stagger-1">
          <div>
            <h2 className="text-4xl font-heading font-bold text-foreground mb-2">MEUS CLIENTES</h2>
            <p className="text-muted-foreground">Projetos recentes entregues com excelência</p>
          </div>
          <Button variant="ghost" className="hidden md:flex text-muted-foreground hover:text-primary btn-hover-shine">
            Ver todos <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Custom Card with Video */}
          <div className="group relative w-full h-[500px] overflow-hidden rounded-xl bg-card border border-border/10 shadow-2xl transition-all duration-500 hover:shadow-primary/10 hover:border-primary/30 lg:col-span-2 card-hover-lift animate-fade-in-up animate-stagger-2">
            {/* Video Background */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
              <video 
                src="/videos/nosso-ponto-intro.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                title="Vídeo de apresentação da Lanchonete Nosso Ponto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-80" />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end items-start z-10">
              <div className="transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                <Badge variant="outline" className="mb-4 bg-black/50 backdrop-blur border-primary/50 text-primary tracking-widest uppercase text-xs font-heading badge-pulse">
                  GASTRONOMIA
                </Badge>
                
                <h3 className="text-4xl font-heading font-bold text-white mb-2 leading-tight animate-slide-in-up">
                  LANCHONETE NOSSO PONTO
                </h3>
                
                <p className="text-gray-300 max-w-md mb-6 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  Redesign completo da identidade visual, cardápio e redes sociais mantendo a essência bruta e rústica de 12 anos de história.
                </p>

                <div className="flex flex-wrap gap-2 mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                  {["Identidade Visual", "Cardápio Digital", "Fotografia Gastronômica"].map((tag) => (
                    <span key={tag} className="text-xs text-gray-400 bg-white/5 px-2 py-1 rounded border border-white/10 hover-scale">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300 translate-y-4 group-hover:translate-y-0">
                  <Link href="/project/nosso-ponto">
                    <Button className="font-heading tracking-wide bg-primary text-primary-foreground hover:bg-primary/90 btn-hover-shine">
                      VER PROJETO <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projetos Pré-Prontos Section */}
      <section id="templates" className="space-y-12 fade-in-section">
        <div className="flex items-end justify-between border-b border-border/10 pb-6 animate-fade-in-left animate-stagger-1">
          <div>
            <h2 className="text-4xl font-heading font-bold text-foreground mb-2">PROJETOS PRÉ-PRONTOS</h2>
            <p className="text-muted-foreground">Soluções rápidas e profissionais para começar hoje</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="animate-fade-in-up animate-stagger-1">
            <TemplateCard 
              title="AutoDealer Pro"
              category="LOJA DE CARROS"
              features={[
                "Catálogo de Veículos",
                "Filtro por Marca/Ano",
                "Botão WhatsApp em cada carro",
                "Painel Administrativo Simples"
              ]}
            />
          </div>
          <div className="animate-fade-in-up animate-stagger-2">
            <TemplateCard 
              title="Gourmet Dark"
              category="RESTAURANTE"
              features={[
                "Cardápio Digital QR Code",
                "Fotos em Destaque",
                "Integração com iFood/Rappi",
                "Tema Escuro Premium"
              ]}
            />
          </div>
          <div className="animate-fade-in-up animate-stagger-3">
            <TemplateCard 
              title="Dev Portfolio"
              category="PESSOAL"
              features={[
                "Apresentação Pessoal",
                "Galeria de Projetos",
                "Blog Integrado",
                "Formulário de Contato"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Serviços / Diferenciais */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-y border-border/10 bg-white/5 -mx-6 px-6 lg:-mx-16 lg:px-16 fade-in-section">
        <article className="space-y-4 hover-lift animate-fade-in-up animate-stagger-1">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover-rotate">
            <Layout className="w-6 h-6 animate-float" />
          </div>
          <h3 className="text-xl font-heading font-bold">Design Exclusivo</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Nada de templates genéricos. Cada projeto é desenhado do zero para refletir a identidade única do seu negócio.
          </p>
        </article>
        <article className="space-y-4 hover-lift animate-fade-in-up animate-stagger-2">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover-rotate">
            <Smartphone className="w-6 h-6 animate-float" />
          </div>
          <h3 className="text-xl font-heading font-bold">Mobile First</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Seus clientes estão no celular. Seu site funcionará perfeitamente em qualquer dispositivo, garantido.
          </p>
        </article>
        <article className="space-y-4 hover-lift animate-fade-in-up animate-stagger-3">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover-rotate">
            <Code className="w-6 h-6 animate-float" />
          </div>
          <h3 className="text-xl font-heading font-bold">Tecnologia de Ponta</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Sites ultra-rápidos construídos com as tecnologias mais modernas do mercado (React, Tailwind, Next.js).
          </p>
        </article>
      </section>
    </MainLayout>
  );
}
