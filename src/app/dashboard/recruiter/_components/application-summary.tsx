
'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: 'Group A', value: 200, color: 'hsl(var(--primary))' },
  { name: 'Group B', value: 57, color: 'hsl(var(--chart-2))' },
  { name: 'Group C', value: 30, color: 'hsl(var(--muted))' },
];

export function ApplicationSummary() {
  const total = data.reduce((acc, curr) => acc + curr.value, 0);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Application Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative h-60 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                  stroke="none"
                  startAngle={90}
                  endAngle={450}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <p className="text-xs text-muted-foreground">Total Application</p>
              <p className="text-4xl font-bold">{total}</p>
            </div>
          </div>
      </CardContent>
    </Card>
  )
}
