import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Database, Layers, Calendar, BarChart3, Map, Zap } from 'lucide-react';

const DataLab = () => {
  const [timelineValue, setTimelineValue] = useState([0]);
  const [selectedLayer, setSelectedLayer] = useState('heat');

  const layers = [
    { id: 'heat', name: 'Heat Index', color: 'text-heat', active: true },
    { id: 'air', name: 'Air Quality', color: 'text-air', active: true },
    { id: 'flood', name: 'Flood Risk', color: 'text-flood', active: false },
    { id: 'green', name: 'Green Cover', color: 'text-green', active: true },
    { id: 'waste', name: 'Waste Flow', color: 'text-waste', active: false },
  ];

  const getTimelineLabel = (value: number) => {
    if (value === 0) return 'Today';
    if (value <= 7) return `+${value} days`;
    return `+${Math.floor(value / 7)} weeks`;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-surface/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 glow-primary">
              <Database className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-holographic">
                DataLab — City's Living Digital Twin
              </h1>
              <p className="text-sm text-muted-foreground">
                Deep analysis + AI-powered predictions
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 h-[calc(100vh-200px)]">
          {/* 3D City View - Main Panel */}
          <div className="lg:col-span-3 space-y-6">
            {/* Map Container */}
            <Card className="border border-card-border bg-card/50 backdrop-blur-sm scan-lines h-2/3">
              <CardContent className="p-0 h-full relative overflow-hidden">
                {/* Simulated 3D City View */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/10">
                  {/* Grid overlay */}
                  <div 
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `
                        linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                        linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
                      `,
                      backgroundSize: '40px 40px'
                    }}
                  />
                  
                  {/* Isometric city blocks */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-96 h-96">
                      {/* City blocks with different heights */}
                      {[...Array(25)].map((_, i) => {
                        const row = Math.floor(i / 5);
                        const col = i % 5;
                        const height = Math.random() * 60 + 20;
                        const layerColor = layers.find(l => l.id === selectedLayer)?.color || 'text-primary';
                        
                        return (
                          <div
                            key={i}
                            className={`absolute border border-border/30 ${layerColor} animate-pulse-glow`}
                            style={{
                              left: `${col * 18 + row * 9}%`,
                              top: `${row * 18 - height/4}%`,
                              width: '16%',
                              height: `${height}%`,
                              background: `linear-gradient(135deg, currentColor, transparent)`,
                              opacity: 0.6,
                              animationDelay: `${i * 50}ms`
                            }}
                          />
                        );
                      })}
                    </div>
                  </div>

                  {/* Data overlays */}
                  <div className="absolute top-4 left-4">
                    <div className="bg-surface/80 backdrop-blur-sm border border-card-border rounded-lg p-3">
                      <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                        Active Layer: {layers.find(l => l.id === selectedLayer)?.name}
                      </div>
                      <div className={`text-2xl font-bold ${layers.find(l => l.id === selectedLayer)?.color}`}>
                        {selectedLayer === 'heat' ? '32°C' : 
                         selectedLayer === 'air' ? '87 AQI' : 
                         selectedLayer === 'flood' ? '23%' : 
                         selectedLayer === 'green' ? '68%' : '91%'}
                      </div>
                    </div>
                  </div>

                  {/* Prediction indicator */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-surface/80 backdrop-blur-sm border border-card-border rounded-lg p-3">
                      <div className="text-xs text-muted-foreground uppercase tracking-wider">
                        Timeline: {getTimelineLabel(timelineValue[0])}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Prediction Timeline Slider */}
            <Card className="border border-card-border bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Calendar className="w-5 h-5 text-primary" />
                  Prediction Timeline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Slider
                    value={timelineValue}
                    onValueChange={setTimelineValue}
                    max={30}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Today</span>
                    <span>+7 days</span>
                    <span>+30 days</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Side Panel */}
          <div className="space-y-6">
            {/* Layer Controls */}
            <Card className="border border-card-border bg-card/50 backdrop-blur-sm scan-lines">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Layers className="w-5 h-5 text-primary" />
                  NASA Data Layers
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {layers.map((layer) => (
                  <Button
                    key={layer.id}
                    variant={selectedLayer === layer.id ? "default" : "outline"}
                    className="w-full justify-start gap-3"
                    onClick={() => setSelectedLayer(layer.id)}
                  >
                    <div className={`w-3 h-3 rounded-full ${layer.color}`} 
                         style={{ backgroundColor: 'currentColor' }} />
                    {layer.name}
                    {layer.active && <div className="ml-auto w-2 h-2 bg-success rounded-full" />}
                  </Button>
                ))}
              </CardContent>
            </Card>

            {/* Metrics Dashboard */}
            <Card className="border border-card-border bg-card/50 backdrop-blur-sm scan-lines">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  Live Metrics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { label: 'Current Value', value: '87', change: '+12%', trend: 'up' },
                  { label: 'Predicted', value: '92', change: '+5%', trend: 'up' },
                  { label: 'Confidence', value: '94%', change: 'High', trend: 'stable' },
                ].map((metric, index) => (
                  <div key={metric.label} className="flex justify-between items-center">
                    <div>
                      <div className="text-sm text-muted-foreground">{metric.label}</div>
                      <div className="text-lg font-bold text-foreground">{metric.value}</div>
                    </div>
                    <div className={`text-sm font-medium ${
                      metric.trend === 'up' ? 'text-destructive' : 
                      metric.trend === 'down' ? 'text-success' : 'text-muted-foreground'
                    }`}>
                      {metric.change}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border border-card-border bg-card/50 backdrop-blur-sm">
              <CardContent className="p-4 space-y-3">
                <Button className="w-full" variant="outline">
                  <Map className="w-4 h-4 mr-2" />
                  Compare Mode
                </Button>
                <Button className="w-full" variant="outline">
                  <Zap className="w-4 h-4 mr-2" />
                  Export to Blueprint
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataLab;