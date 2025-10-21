
'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend } from "recharts"

const chartData = [
  { month: "Jan", applied: 186, interviewed: 80 },
  { month: "Feb", applied: 205, interviewed: 120 },
  { month: "Mar", applied: 160, interviewed: 90 },
  { month: "Apr", applied: 190, interviewed: 110 },
  { month: "May", applied: 220, interviewed: 130 },
  { month: "Jun", applied: 200, interviewed: 140 },
  { month: "Jul", applied: 250, interviewed: 160 },
  { month: "Aug", applied: 210, interviewed: 130 },
  { month: "Sep", applied: 260, interviewed: 170 },
]

export function ApplicantsChart() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-start sm:items-center justify-between">
        <div>
          <CardTitle>Job Applied</CardTitle>
          <CardDescription>Average per month: 142 (53.43% increase)</CardDescription>
        </div>
        <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm">1 Year</Button>
            <Button variant="ghost" size="sm">6 Months</Button>
            <Button variant="ghost" size="sm">3 Months</Button>
            <Button variant="secondary" size="sm">1 Month</Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer>
            <AreaChart data={chartData}>
                <defs>
                    <linearGradient id="colorApplied" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorInterviewed" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--chart-2))" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="hsl(var(--chart-2))" stopOpacity={0}/>
                    </linearGradient>
                </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
              <YAxis tickLine={false} axisLine={false} tickMargin={8} />
              <Tooltip
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="p-2 bg-card border rounded-lg shadow-lg">
                        <p className="font-bold">{label}</p>
                        <p style={{ color: 'hsl(var(--primary))' }}>{`Applied: ${payload[0].value}`}</p>
                        <p style={{ color: 'hsl(var(--chart-2))' }}>{`Interview: ${payload[1].value}`}</p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Legend
                  iconType="circle"
                  content={({ payload }) => (
                      <ul className="flex justify-center gap-6 pt-4">
                          {payload?.map((entry, index) => (
                          <li key={`item-${index}`} className="flex items-center gap-2">
                              <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: entry.color }} />
                              <span className="text-sm capitalize">{entry.value}</span>
                          </li>
                          ))}
                      </ul>
                  )}
              />
              <Area type="monotone" dataKey="applied" stroke="hsl(var(--primary))" fill="url(#colorApplied)" name="Applied" />
              <Area type="monotone" dataKey="interviewed" stroke="hsl(var(--chart-2))" fill="url(#colorInterviewed)" name="Interview" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
