import React from 'react';
import MetricCard from '@/components/ui/metric-card';

const MetricStrip = () => {
  const metrics = [
    {
      title: 'Heat Index',
      value: '32',
      unit: '°C',
      change: 8.5,
      trend: 'up' as const,
      metric: 'heat' as const,
    },
    {
      title: 'Air Quality',
      value: '87',
      unit: 'AQI',
      change: 12.3,
      trend: 'down' as const,
      metric: 'air' as const,
    },
    {
      title: 'Flood Risk',
      value: '23',
      unit: '%',
      change: 4.7,
      trend: 'up' as const,
      metric: 'flood' as const,
    },
    {
      title: 'Green Cover',
      value: '68',
      unit: '%',
      change: 2.1,
      trend: 'up' as const,
      metric: 'green' as const,
    },
    {
      title: 'Waste Efficiency',
      value: '91',
      unit: '%',
      change: 5.2,
      trend: 'up' as const,
      metric: 'waste' as const,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
      {metrics.map((metric, index) => (
        <MetricCard
          key={metric.title}
          {...metric}
          className="animate-fade-in"
          style={{ animationDelay: `${index * 100}ms` }}
        />
      ))}
    </div>
  );
};

export default MetricStrip;