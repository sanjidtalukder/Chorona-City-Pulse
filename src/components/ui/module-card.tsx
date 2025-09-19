import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface ModuleCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  status: 'active' | 'coming-soon' | 'beta';
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

const ModuleCard = ({ 
  title, 
  description, 
  icon: Icon, 
  status, 
  onClick, 
  className,
  style 
}: ModuleCardProps) => {
  const getStatusBadge = () => {
    switch (status) {
      case 'active':
        return (
          <span className="px-2 py-1 text-xs font-medium bg-success/20 text-success rounded-full border border-success/30">
            Active
          </span>
        );
      case 'beta':
        return (
          <span className="px-2 py-1 text-xs font-medium bg-warning/20 text-warning rounded-full border border-warning/30">
            Beta
          </span>
        );
      case 'coming-soon':
        return (
          <span className="px-2 py-1 text-xs font-medium bg-muted/20 text-muted-foreground rounded-full border border-muted/30">
            Coming Soon
          </span>
        );
    }
  };

  return (
    <Card 
      className={cn(
        'group relative overflow-hidden border border-card-border bg-card/50 backdrop-blur-sm',
        'transition-all duration-300 hover:scale-105 hover:shadow-glow cursor-pointer',
        'scan-lines hover:bg-surface-elevated/80',
        status === 'coming-soon' && 'opacity-60 cursor-not-allowed',
        className
      )}
      onClick={status !== 'coming-soon' ? onClick : undefined}
      style={style}
    >
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 glow-primary group-hover:animate-pulse-glow">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          {getStatusBadge()}
        </div>
        
        <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-holographic">
          {title}
        </h3>
        
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
        
        {/* Hover glow effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-primary/5 to-accent/5" />
        
        {/* Bottom border animation */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </CardContent>
    </Card>
  );
};

export default ModuleCard;