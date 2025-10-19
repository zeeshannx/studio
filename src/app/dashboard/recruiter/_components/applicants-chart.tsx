
'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend } from "recharts"

const chartData = [
  { day: "Mon", applicants: 12, interviews: 5 },
  { day: "Tue", applicants: 18, interviews: 8 },
  { day: "Wed", applicants: 25, interviews: 12 },
  { day: "Thu", applicants: 22, interviews: 10 },
  { day: "Fri", applicants: 30, interviews: 15 },
  { day: "Sat", applicants: 15, interviews: 7 },
  { day: "Sun", applicants: 10, interviews: 4 },
]

export function ApplicantsChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>New Applicants</CardTitle>
        <CardDescription>Overview of new applicants and interviews this week.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="day" tickLine={false} axisLine={false} tickMargin={8} />
              <YAxis tickLine={false} axisLine={false} tickMargin={8} />
              <Tooltip
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="p-2 bg-card border rounded-lg shadow-lg">
                        <p className="font-bold">{label}</p>
                        <p style={{ color: 'hsl(var(--primary))' }}>{`Applicants: ${payload[0].value}`}</p>
                        <p style={{ color: 'hsl(var(--chart-2))' }}>{`Interviews: ${payload[1].value}`}</p>
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
              <Bar dataKey="applicants" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
              <Bar dataKey="interviews" fill="hsl(var(--chart-2))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

