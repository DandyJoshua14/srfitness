
"use client";

import { BarChart, Users, Newspaper, Activity, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Bar, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const chartData = [
  { month: "Jan", users: 186, posts: 5 },
  { month: "Feb", users: 305, posts: 6 },
  { month: "Mar", users: 237, posts: 4 },
  { month: "Apr", users: 273, posts: 8 },
  { month: "May", users: 209, posts: 7 },
  { month: "Jun", users: 250, posts: 9 },
];

const recentActivities = [
    { user: 'Alex P.', action: 'Posted in Blog', item: 'Morning Run Fuel', time: '2h ago', type: 'content' },
    { user: 'Sarah K.', action: 'Joined', item: 'New Member', time: '1d ago', type: 'user' },
    { user: 'Admin', action: 'Published Announcement', item: 'New Spin Class Schedule!', time: '1d ago', type: 'content' },
    { user: 'Mike D.', action: 'Commented on', item: 'Crushed My Squat PB', time: '2d ago', type: 'comment' },
];

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,257</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Blog Posts</CardTitle>
            <Newspaper className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28</div>
            <p className="text-xs text-muted-foreground">+5 since last month</p>
          </CardContent>
        </Card>
         <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Engagement</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+1.2k</div>
            <p className="text-xs text-muted-foreground">Likes & Comments this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Now</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">73</div>
            <p className="text-xs text-muted-foreground">Users on site</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
             <ChartContainer config={{
                users: { label: "Users", color: "hsl(var(--primary))" },
             }} className="h-[300px] w-full">
                <ResponsiveContainer>
                    <BarChart data={chartData}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                         <YAxis />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Bar dataKey="users" fill="var(--color-users)" radius={4} />
                    </BarChart>
                </ResponsiveContainer>
             </ChartContainer>
          </CardContent>
        </Card>
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>An overview of recent user and content actions.</CardDescription>
          </CardHeader>
          <CardContent>
             <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>User</TableHead>
                        <TableHead>Action</TableHead>
                        <TableHead>Time</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {recentActivities.map((activity, index) => (
                         <TableRow key={index}>
                            <TableCell>
                                <div className="font-medium">{activity.user}</div>
                                <div className="hidden text-sm text-muted-foreground md:inline">
                                    {activity.item}
                                </div>
                            </TableCell>
                            <TableCell>
                                <Badge variant={activity.type === 'user' ? 'default' : 'secondary'} className="text-xs">
                                    {activity.action}
                                </Badge>
                            </TableCell>
                            <TableCell>{activity.time}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
             </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
