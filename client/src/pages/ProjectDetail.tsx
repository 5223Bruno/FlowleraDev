import { MainLayout } from "@/components/MainLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, CheckCircle2, Globe, Layers } from "lucide-react";
import { Link, useRoute } from "wouter";

// Mock Data (Em um app real viria de uma API ou arquivo de dados)
const projects = {
  "nosso-ponto": {
    title: "LANCHONETE NOSSO PONTO",
    category: "GASTRONOMIA",
    videoUrl: "/videos/nosso-ponto-intro.mp4",
    description: "Redesign completo da identidade visual para uma lanchonete com 12 anos de história. O objetivo era modernizar a marca mantendo a essência bruta e rústica que a caracteriza.",
    challenge: "Conseguir dar uma nova identidade visual sem perder a essência do estabelecimento, pois a história é o que mais faz esse lugar ser tão bom. A lanchonete precisava de uma presença digital atualizada que refletisse sua qualidade.",
    solution: "Primeiramente o desafio era apenas criar um site, porém quis mais. Antes do site refiz do zero todo cardápio, texto por texto, valor por valor, e cada arte por trás, sem perder o TOM (BRUTO) do lugar. Também dei uma nova cara para a rede social do estabelecimento e editei todas as fotos antigas dos pratos, dando uma nova cara e um tom mais vibrante e chamativo para cada prato e bebida.",
    features: ["Identidade Visual Completa", "Cardápio Redesenhado", "Fotografia Gastronômica", "Redes Sociais Otimizadas", "Essência Preservada"],
    stack: ["React", "Tailwind CSS", "Design Estratégico"],
    year: "2026",
    website: "https://lanchonetenossoponto.com"
  }
};

export default function ProjectDetail() {
  const [match, params] = useRoute("/project/:id");
  const projectId = params?.id;
  const project = projects[projectId as keyof typeof projects];

  if (!project) {
    return (
      <MainLayout>
        <div className="flex flex-col items-center justify-center h-[50vh]">
          <h1 className="text-4xl font-heading font-bold mb-4">Projeto não encontrado</h1>
          <Link href="/">
            <Button>Voltar para Home</Button>
          </Link>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="space-y-12">
        {/* Header Navigation */}
        <Link href="/">
          <Button variant="ghost" className="pl-0 hover:pl-2 transition-all text-muted-foreground hover:text-primary btn-hover-shine animate-fade-in-left">
            <ArrowLeft className="mr-2 w-4 h-4" /> Voltar para Projetos
          </Button>
        </Link>

        {/* Project Hero - Video Background */}
        <div className="relative h-[60vh] w-full rounded-2xl overflow-hidden shadow-2xl border border-border/10 group hover-lift animate-fade-in-up">
          <video 
            src={project.videoUrl}
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
            title="Vídeo de apresentação da Lanchonete Nosso Ponto"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          
          <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
            <div className="flex flex-wrap gap-4 mb-6 animate-fade-in-up animate-stagger-1">
              <Badge className="bg-primary text-primary-foreground border-none px-4 py-1 text-sm tracking-widest uppercase badge-pulse">
                {project.category}
              </Badge>
              <Badge variant="outline" className="bg-black/50 backdrop-blur text-white border-white/20 flex items-center gap-2 animate-float">
                <Calendar className="w-3 h-3" /> {project.year}
              </Badge>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-none animate-slide-in-up animate-stagger-2">
              {project.title}
            </h1>
            
            <div className="flex flex-wrap gap-4 animate-fade-in-up animate-stagger-3">
              <Button size="lg" className="font-heading tracking-wide text-lg h-14 px-8 btn-hover-shine">
                VISITAR SITE <Globe className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">
          {/* Left Column: Context */}
          <div className="lg:col-span-2 space-y-12">
            {/* Sobre o Projeto */}
            <section className="prose prose-invert prose-lg max-w-none fade-in-section animate-fade-in-left animate-stagger-1">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Sobre o Projeto</h2>
              <p className="text-muted-foreground leading-relaxed text-xl">
                {project.description}
              </p>
            </section>

            {/* O Desafio e A Solução */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <article className="bg-card p-8 rounded-xl border border-border/10 hover:border-primary/30 transition-all duration-300 card-hover-lift animate-fade-in-left animate-stagger-2">
                <h3 className="text-xl font-heading font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-8 h-1 bg-primary block rounded-full animate-rotate-slow" />
                  O Desafio
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.challenge}
                </p>
              </article>
              <article className="bg-card p-8 rounded-xl border border-border/10 hover:border-primary/30 transition-all duration-300 card-hover-lift animate-fade-in-right animate-stagger-2">
                <h3 className="text-xl font-heading font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-8 h-1 bg-primary block rounded-full animate-rotate-slow" />
                  A Solução
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.solution}
                </p>
              </article>
            </div>

            {/* Transformação Visual Section */}
            <section className="space-y-12">
              <h2 className="text-3xl font-heading font-bold text-foreground">Transformação Visual</h2>
              
              {/* Redes Sociais Before and After */}
              <article className="space-y-6 bg-white/5 p-8 rounded-xl border border-border/10">
                <div>
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-3">📱 Redes Sociais</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A transformação do Instagram foi fundamental para modernizar a presença digital. Editei todas as fotos dos pratos com um tom mais vibrante e chamativo, mantendo o TOM BRUTO que define o Nosso Ponto. Cada imagem agora reflete a qualidade e o cuidado em cada detalhe.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Antes */}
                  <div className="space-y-4 group">
                    <div className="relative overflow-hidden rounded-lg border-2 border-muted-foreground/30 hover:border-primary/50 transition-all duration-300">
                      <div className="absolute top-3 left-3 z-10">
                        <Badge variant="outline" className="bg-black/60 backdrop-blur text-white border-white/20 text-xs font-semibold">
                          ANTES
                        </Badge>
                      </div>
                      <img 
                        src="/images/clients/nosso-ponto/instagram-antes.jpg" 
                        alt="Instagram da Lanchonete Nosso Ponto antes do redesign - layout antigo com cores menos vibrantes" 
                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground text-center font-medium">Layout antigo com menos impacto visual</p>
                  </div>

                  {/* Depois */}
                  <div className="space-y-4 group">
                    <div className="relative overflow-hidden rounded-lg border-2 border-primary/50 hover:border-primary transition-all duration-300 ring-1 ring-primary/20">
                      <div className="absolute top-3 left-3 z-10">
                        <Badge className="bg-primary text-primary-foreground text-xs font-semibold">
                          DEPOIS
                        </Badge>
                      </div>
                      <img 
                        src="/images/clients/nosso-ponto/instagram-depois.jpg" 
                        alt="Instagram da Lanchonete Nosso Ponto após redesign - novo layout com cores vibrantes e fotos profissionais dos pratos" 
                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <p className="text-sm text-primary text-center font-medium">✨ Novo layout com visual profissional e cores vibrantes</p>
                  </div>
                </div>
              </article>

              {/* Logo Before and After */}
              <article className="space-y-6 bg-white/5 p-8 rounded-xl border border-border/10">
                <div>
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-3">🎨 Identidade Visual - Logo</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A logo foi completamente redesenhada para refletir a modernização sem perder a essência rústica de 12 anos de história. O novo design é mais limpo e profissional, mantendo os elementos que fazem o Nosso Ponto ser reconhecido e amado pelos clientes.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Logo Anterior */}
                  <div className="space-y-4 group">
                    <div className="relative bg-gradient-to-br from-muted-foreground/10 to-muted-foreground/5 p-8 rounded-lg border-2 border-muted-foreground/30 hover:border-primary/50 transition-all duration-300 flex items-center justify-center h-80">
                      <div className="absolute top-3 left-3 z-10">
                        <Badge variant="outline" className="bg-black/60 backdrop-blur text-white border-white/20 text-xs font-semibold">
                          LOGO ANTERIOR
                        </Badge>
                      </div>
                      <img 
                        src="/images/clients/nosso-ponto/logo-antes.jpg" 
                        alt="Logo anterior da Lanchonete Nosso Ponto - design clássico com elementos rústicos" 
                        className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground text-center font-medium">Design clássico e rústico</p>
                  </div>

                  {/* Logo Novo */}
                  <div className="space-y-4 group">
                    <div className="relative bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-lg border-2 border-primary/50 hover:border-primary transition-all duration-300 ring-1 ring-primary/20 flex items-center justify-center h-80">
                      <div className="absolute top-3 left-3 z-10">
                        <Badge className="bg-primary text-primary-foreground text-xs font-semibold">
                          LOGO NOVO
                        </Badge>
                      </div>
                      <img 
                        src="/images/clients/nosso-ponto/logo-depois.jpg" 
                        alt="Logo nova da Lanchonete Nosso Ponto - design moderno e profissional mantendo essência rústica" 
                        className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <p className="text-sm text-primary text-center font-medium">✨ Design moderno e profissional</p>
                  </div>
                </div>
              </article>

              {/* Ambiente & Fachada */}
              <article className="space-y-6 bg-white/5 p-8 rounded-xl border border-border/10">
                <div>
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-3">🏪 Ambiente & Fachada</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A fachada do Nosso Ponto mantém a autenticidade rústica que caracteriza o lugar. Um espaço acolhedor onde a história de 12 anos se reflete em cada detalhe, criando uma atmosfera que convida os clientes a fazer parte dessa trajetória.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="group overflow-hidden rounded-lg border border-border/10 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                    <img 
                      src="/images/clients/nosso-ponto/fachada-1.jpg" 
                      alt="Fachada frontal da Lanchonete Nosso Ponto com logo iluminado e ambiente acolhedor" 
                      className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="group overflow-hidden rounded-lg border border-border/10 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                    <img 
                      src="/images/clients/nosso-ponto/fachada-2.jpg" 
                      alt="Vista lateral da Lanchonete Nosso Ponto mostrando área externa com mesas e decoração rústica" 
                      className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="group overflow-hidden rounded-lg border border-border/10 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                    <img 
                      src="/images/clients/nosso-ponto/fachada-3.jpg" 
                      alt="Detalhe da fachada da Lanchonete Nosso Ponto com plantas e iluminação ambiente" 
                      className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                </div>
              </article>
            </section>
          </div>

          {/* Right Column: Details */}
          <aside className="space-y-12">
            {/* Funcionalidades */}
            <section>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-primary" />
                Funcionalidades
              </h3>
              <ul className="space-y-4">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground border-b border-border/10 pb-3 last:border-0 hover:text-foreground transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Tecnologias */}
            <section>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-6 flex items-center gap-2">
                <Layers className="w-6 h-6 text-primary" />
                Tecnologias
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <Badge key={tech} variant="secondary" className="px-3 py-1.5 text-sm hover:bg-primary hover:text-primary-foreground transition-colors">
                    {tech}
                  </Badge>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </div>
    </MainLayout>
  );
}
