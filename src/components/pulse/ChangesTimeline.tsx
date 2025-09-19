import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, TrendingUp, TrendingDown, AlertTriangle } from 'lucide-react';

const ChangesTimeline = () => {
  const changes = [
    {
      id: 1,
      type: 'flood',
      message: 'Flood risk increased 12% in Ward 8',
      time: '2 hrs ago',
      severity: 'high',
      icon: TrendingUp,
    },
    {
      id: 2,
      type: 'air',
      message: 'Air quality improved 8% downtown',
      time: '4 hrs ago',
      severity: 'good',
      icon: TrendingDown,
    },
    {
      id: 3,
      type: 'heat',
      message: 'Heat advisory issued for East District',
      time: '6 hrs ago',
      severity: 'high',
      icon: AlertTriangle,
    },
    {
      id: 4,
      type: 'green',
      message: 'New park area detected via satellite',
      time: '8 hrs ago',
      severity: 'good',
      icon: TrendingUp,
    },
    {
      id: 5,
      type: 'waste',
      message: 'Recycling efficiency up 3% citywide',
      time: '12 hrs ago',
      severity: 'good',
      icon: TrendingUp,
    },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'text-destructive';
      case 'good':
        return 'text-success';
      default:
        return 'text-muted-foreground';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'heat':
        return 'text-heat border-heat/20 bg-heat/10';
      case 'air':
        return 'text-air border-air/20 bg-air/10';
      case 'flood':
        return 'text-flood border-flood/20 bg-flood/10';
      case 'green':
        return 'text-green border-green/20 bg-green/10';
      case 'waste':
        return 'text-waste border-waste/20 bg-waste/10';
      default:
        return 'text-muted-foreground border-border bg-muted/10';
    }
  };

  return (
    <Card className="border border-card-border bg-card/50 backdrop-blur-sm scan-lines">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-foreground">
          <Clock className="w-5 h-5 text-primary" />
          Recent Changes
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {changes.map((change, index) => {
          const IconComponent = change.icon;
          
          return (
            <div
              key={change.id}
              className="flex items-start gap-3 p-3 rounded-lg border transition-colors hover:bg-surface-elevated/50 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`p-2 rounded-lg border ${getTypeColor(change.type)}`}>
                <IconComponent className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground">
                  {change.message}
                </p>
                <p className="text-xs text-muted-foreground">
                  {change.time}
                </p>
              </div>
              <div className={`text-xs font-medium ${getSeverityColor(change.severity)}`}>
                {change.severity === 'high' ? '⚠️' : '✅'}
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default ChangesTimeline;