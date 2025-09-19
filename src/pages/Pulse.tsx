import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import MetricStrip from '@/components/pulse/MetricStrip';
import WellbeingGauge from '@/components/ui/wellbeing-gauge';
import MiniMapSnapshot from '@/components/pulse/MiniMapSnapshot';
import ChangesTimeline from '@/components/pulse/ChangesTimeline';
import QuickActions from '@/components/pulse/QuickActions';
import { Activity } from 'lucide-react';

const Pulse = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-surface/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 glow-primary">
              <Activity className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-holographic">
                Pulse — City's Live Heartbeat
              </h1>
              <p className="text-sm text-muted-foreground">
                Instant situational awareness for city planners
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8 space-y-8">
        {/* Hero Metric Strip */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Live Environmental Metrics</h2>
          <MetricStrip />
        </section>

        {/* City Wellbeing & Mini Map */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* City Wellbeing Gauge */}
          <Card className="border border-card-border bg-card/50 backdrop-blur-sm scan-lines">
            <CardHeader>
              <CardTitle className="text-foreground">City Wellbeing Score</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center py-8">
              <WellbeingGauge score={73} />
            </CardContent>
          </Card>

          {/* Mini Map */}
          <MiniMapSnapshot />
        </section>

        {/* Timeline & Actions */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ChangesTimeline />
          <QuickActions />
        </section>
      </div>
    </div>
  );
};

export default Pulse;