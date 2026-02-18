import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { Badge } from "./ui/badge";

interface TemplateCardProps {
  title: string;
  category: string;
  features: string[];
  className?: string;
}

export function TemplateCard({ title, category, features, className }: TemplateCardProps) {
  return (
    <div className={cn("group flex flex-col bg-card border border-border/10 rounded-lg overflow-hidden hover:border-primary/30 transition-all duration-300 card-hover-lift hover-glow card-smooth", className)}>
      <div className="p-6 flex-1 flex flex-col">
        <div className="mb-4">
          <Badge className="bg-black/80 backdrop-blur text-white border-none font-heading tracking-wide mb-3 badge-pulse badge-smooth-transition">
            {category}
          </Badge>
          <h3 className="text-xl font-heading font-bold text-foreground group-hover:text-primary text-smooth">{title}</h3>
        </div>
        
        <ul className="space-y-2 mb-6 flex-1">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center text-sm text-muted-foreground group-hover:text-foreground opacity-transition list-item-fade" style={{ animationDelay: `${i * 0.1}s` }}>
              <Check className="w-4 h-4 text-primary mr-2 flex-shrink-0 animate-scale-in" style={{ animationDelay: `${i * 0.1}s` }} />
              {feature}
            </li>
          ))}
        </ul>
        
        <div className="flex items-center justify-center py-4 px-4 bg-primary/10 rounded-lg border border-primary/20 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300 shadow-smooth">
          <span className="text-lg font-heading font-bold text-primary tracking-wide animate-glow">FUTURAMENTE</span>
        </div>
      </div>
    </div>
  );
}
