'use client'

import { useUser } from '@/firebase'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts'
import { useMemo } from 'react';

const skillsData = [
  { name: 'Video Editing', value: 66, color: 'hsl(var(--primary))' },
  { name: 'Design', value: 37, color: 'hsl(var(--chart-2))' },
  { name: 'Audio', value: 7, color: 'hsl(var(--chart-3))' },
]

export function UserProfileCard() {
  const { user } = useUser()

  const total = useMemo(() => skillsData.reduce((acc, curr) => acc + curr.value, 0), []);

  return (
    <Card>
      <CardContent className="p-6 text-center">
        <div className="flex justify-center">
          <div className="relative h-40 w-40">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={skillsData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                  stroke="none"
                >
                  {skillsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                 <Tooltip
                    content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                            return (
                            <div className="p-2 bg-card border rounded-lg shadow-lg">
                                <p className="font-semibold">{`${payload[0].name}: ${payload[0].value}%`}</p>
                            </div>
                            );
                        }
                        return null;
                    }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex items-center justify-center">
              <Avatar className="h-24 w-24">
                <AvatarImage src={user?.photoURL || ''} alt={user?.displayName || ''} />
                <AvatarFallback className="text-3xl">{user?.displayName?.charAt(0) || 'U'}</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
        <h3 className="mt-4 text-xl font-semibold">{user?.displayName}</h3>
        <p className="text-muted-foreground">Creative Director</p>
        <div className="mt-6 grid grid-cols-3 gap-2">
            {skillsData.map(skill => (
                <div key={skill.name}>
                    <div className="flex items-center justify-center gap-1">
                        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: skill.color }}></span>
                        <p className="text-xs text-muted-foreground">{skill.name}</p>
                    </div>
                    <p className="font-bold text-lg">{skill.value}%</p>
                </div>
            ))}
        </div>
      </CardContent>
    </Card>
  )
}
