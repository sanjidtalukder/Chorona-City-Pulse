import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Database, FileText, AlertCircle } from 'lucide-react';

const QuickActions = () => {
  const actions = [
    {
      title: 'Open DataLab',
      description: 'Dive into city analytics',
      icon: Database,
      variant: 'default' as const,
      onClick: () => console.log('Opening DataLab...'),
    },
    {
      title: 'View Proposals',
      description: 'Check community plans',
      icon: FileText,
      variant: 'secondary' as const,
      onClick: () => console.log('Opening Proposals...'),
    },
    {
      title: 'Send Alert',
      description: 'Emergency notification',
      icon: AlertCircle,
      variant: 'destructive' as const,
      onClick: () => console.log('Opening Alert System...'),
    },
    {
      title: 'Run Simulation',
      description: 'Test scenarios',
      icon: Zap,
      variant: 'outline' as const,
      onClick: () => console.log('Opening Simulator...'),
    },
  ];

  return (
    <Card className="border border-card-border bg-card/50 backdrop-blur-sm scan-lines">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-foreground">
          <Zap className="w-5 h-5 text-primary" />
          Quick Actions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {actions.map((action, index) => {
            const IconComponent = action.icon;
            
            return (
              <Button
                key={action.title}
                variant={action.variant}
                onClick={action.onClick}
                className="flex items-center gap-3 p-4 h-auto text-left justify-start group animate-fade-in hover:scale-105 transition-all duration-200"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 group-hover:glow-primary">
                  <IconComponent className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-medium">{action.title}</div>
                  <div className="text-xs opacity-70">{action.description}</div>
                </div>
              </Button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActions;