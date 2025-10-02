"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

interface VoteChartProps {
  data: Array<{
    contestantName: string;
    contestantCategory: string;
    totalVotes: number;
  }>;
  isLoading?: boolean;
}

export default function VoteChart({ data, isLoading }: VoteChartProps) {
  if (isLoading) {
    return <div className="w-full h-[300px] bg-muted animate-pulse rounded" />;
  }

  if (!data || data.length === 0) {
    return (
      <div className="flex items-center justify-center h-[300px] text-muted-foreground">
        No voting data available yet.
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis 
          dataKey="contestantName" 
          angle={-45} 
          textAnchor="end" 
          height={80} 
          interval={0} 
          tick={{ fontSize: 12 }} 
        />
        <YAxis />
        <Tooltip
          contentStyle={{
            background: "hsl(var(--background))",
            borderColor: "hsl(var(--border))",
            borderRadius: "8px",
            fontSize: "14px"
          }}
          labelStyle={{ fontWeight: "bold" }}
        />
        <Bar 
          dataKey="totalVotes" 
          fill="hsl(var(--primary))" 
          name="Total Votes" 
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
