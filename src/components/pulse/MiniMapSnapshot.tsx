import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, AlertTriangle, TrendingUp } from 'lucide-react';

const MiniMapSnapshot = () => {
  const hotspots = [
    {
      id: 1,
      name: 'Ward 8 - Flood Zone',
      type: 'flood',
      severity: 'high',
      x: 65,
      y: 75,
    },
    {
      id: 2,
      name: 'Downtown - Air Quality',
      type: 'air',
      severity: 'medium',
      x: 40,
      y: 30,
    },
    {
      id: 3,
      name: 'East District - Heat',
      type: 'heat',
      severity: 'high',
      x: 80,
      y: 45,
    },
  ];

  const getHotspotColor = (type: string) => {
    switch (type) {
      case 'flood':
        return 'bg-flood border-flood text-flood-foreground';
      case 'air':
        return 'bg-air border-air text-air-foreground';
      case 'heat':
        return 'bg-heat border-heat text-heat-foreground';
      default:
        return 'bg-primary border-primary text-primary-foreground';
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'high':
        return <AlertTriangle className="w-3 h-3" />;
      case 'medium':
        return <TrendingUp className="w-3 h-3" />;
      default:
        return <MapPin className="w-3 h-3" />;
    }
  };

  return (
    <Card className="border border-card-border bg-card/50 backdrop-blur-sm scan-lines">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-foreground">
          <MapPin className="w-5 h-5 text-primary" />
          Today's Hotspots
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Mini Map */}
        <div className="relative bg-surface border border-border rounded-lg p-4 h-48 mb-4 overflow-hidden">
          {/* Grid pattern overlay */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px'
            }}
          />
          
          {/* City outline simulation */}
          <div className="absolute inset-4 border-2 border-dashed border-primary/30 rounded-lg" />
          
          {/* Hotspot markers */}
          {hotspots.map((hotspot, index) => (
            <div
              key={hotspot.id}
              className={`absolute w-6 h-6 rounded-full border-2 flex items-center justify-center cursor-pointer
                         hover:scale-110 transition-transform duration-200 animate-pulse-glow
                         ${getHotspotColor(hotspot.type)}`}
              style={{
                left: `${hotspot.x}%`,
                top: `${hotspot.y}%`,
                transform: 'translate(-50%, -50%)',
                animationDelay: `${index * 300}ms`
              }}
              title={hotspot.name}
            >
              {getSeverityIcon(hotspot.severity)}
              
              {/* Ripple effect */}
              <div className={`absolute inset-0 rounded-full border-2 ${getHotspotColor(hotspot.type)} animate-ripple`} />
            </div>
          ))}
        </div>
        
        {/* Hotspot Legend */}
        <div className="space-y-2">
          {hotspots.map((hotspot, index) => (
            <div
              key={hotspot.id}
              className="flex items-center gap-2 text-sm animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`w-3 h-3 rounded-full border ${getHotspotColor(hotspot.type)}`} />
              <span className="text-foreground font-medium">{hotspot.name}</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground capitalize">{hotspot.severity} priority</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default MiniMapSnapshot;