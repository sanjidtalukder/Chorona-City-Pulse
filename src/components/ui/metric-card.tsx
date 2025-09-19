import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  unit?: string;
  change: number;
  trend: 'up' | 'down' | 'stable';
  metric: 'heat' | 'air' | 'flood' | 'green' | 'waste';
  className?: string;
  style?: React.CSSProperties;
}

const metricStyles = {
  heat: 'glow-heat border-heat/20 bg-gradient-to-br from-heat/10 to-heat/5',
  air: 'glow-air border-air/20 bg-gradient-to-br from-air/10 to-air/5',
  flood: 'glow-flood border-flood/20 bg-gradient-to-br from-flood/10 to-flood/5',
  green: 'glow-green border-green/20 bg-gradient-to-br from-green/10 to-green/5',
  waste: 'glow-waste border-waste/20 bg-gradient-to-br from-waste/10 to-waste/5',
};

const MetricCard = ({ 
  title, 
  value, 
  unit, 
  change, 
  trend, 
  metric, 
  className,
  style 
}: MetricCardProps) => {
  const getTrendIcon = () => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="w-4 h-4" />;
      case 'down':
        return <TrendingDown className="w-4 h-4" />;
      default:
        return <Minus className="w-4 h-4" />;
    }
  };

  const getTrendColor = () => {
    if (metric === 'green') {
      // For green metrics, up is good
      return trend === 'up' ? 'text-success' : trend === 'down' ? 'text-destructive' : 'text-muted-foreground';
    } else {
      // For other metrics, down is typically better
      return trend === 'down' ? 'text-success' : trend === 'up' ? 'text-destructive' : 'text-muted-foreground';
    }
  };

  return (
    <Card className={cn(
      'relative overflow-hidden border transition-all duration-300 hover:scale-105 scan-lines',
      metricStyles[metric],
      className
    )} style={style}>
      <CardContent className="p-6">
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            {title}
          </h3>
          
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-foreground">
              {value}
            </span>
            {unit && (
              <span className="text-lg text-muted-foreground">
                {unit}
              </span>
            )}
          </div>
          
          <div className={cn(
            'flex items-center gap-1 text-sm font-medium',
            getTrendColor()
          )}>
            {getTrendIcon()}
            <span>
              {Math.abs(change)}% {trend === 'up' ? 'increase' : trend === 'down' ? 'decrease' : 'stable'}
            </span>
          </div>
        </div>
        
        {/* Subtle glow overlay */}
        <div className={cn(
          'absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none',
          `bg-gradient-to-br from-${metric}/5 to-transparent`
        )} />
      </CardContent>
    </Card>
  );
};

export default MetricCard;