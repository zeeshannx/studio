'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Legend, Tooltip } from "recharts"

const chartData = [
  { week: 'Week 01', applications: 40, interviews: 24, rejected: 5 },
  { week: 'Week 02', applications: 30, interviews: 14, rejected: 3 },
  { week: 'Week 03', applications: 20, interviews: 98, rejected: 8 },
  { week: 'Week 04', applications: 28, interviews: 40, rejected: 12 },
  { week: 'Week 05', applications: 19, interviews: 48, rejected: 25 },
  { week: 'Week 06', applications: 24, interviews: 38, rejected: 10 },
  { week: 'Week 07', applications: 35, interviews: 43, rejected: 7 },
  { week: 'Week 08', applications: 50, interviews: 20, rejected: 4 },
  { week: 'Week 09', applications: 42, interviews: 60, rejected: 15 },
  { week: 'Week 10', applications: 30, interviews: 50, rejected: 10 },
]

export function VacancyStats() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Vacancy Stats</CardTitle>
          <CardDescription>Applications, interviews, and rejections over time.</CardDescription>
        </div>
        <Select defaultValue="this-month">
          <SelectTrigger className="w-auto">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="this-month">This Month</SelectItem>
            <SelectItem value="last-month">Last Month</SelectItem>
            <SelectItem value="last-3-months">Last 3 Months</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
            <ResponsiveContainer>
                <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorApplications" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorInterviews" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="hsl(var(--chart-2))" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="hsl(var(--chart-2))" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="week" tickLine={false} axisLine={false} tickMargin={8} />
                    <YAxis tickLine={false} axisLine={false} tickMargin={8} />
                    <Tooltip
                        content={({ active, payload, label }) => {
                            if (active && payload && payload.length) {
                                return (
                                <div className="p-3 bg-card border rounded-lg shadow-lg">
                                    <p className="font-bold text-lg mb-2">{label}</p>
                                    <p style={{ color: 'hsl(var(--primary))' }}>{`Applications: ${payload[0].value}`}</p>
                                    <p style={{ color: 'hsl(var(--chart-2))' }}>{`Interviews: ${payload[1].value}`}</p>
                                    <p style={{ color: 'hsl(var(--destructive))' }}>{`Rejected: ${payload[2].value}`}</p>
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
                    <Area type="monotone" dataKey="applications" stroke="hsl(var(--primary))" fillOpacity={1} fill="url(#colorApplications)" />
                    <Area type="monotone" dataKey="interviews" stroke="hsl(var(--chart-2))" fillOpacity={1} fill="url(#colorInterviews)" />
                    <Area type="monotone" dataKey="rejected" stroke="hsl(var(--destructive))" fill="transparent" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
