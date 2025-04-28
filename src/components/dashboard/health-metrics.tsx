import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { HeartPulse, Activity, Thermometer, ChartLine, ArrowUp, ArrowDown } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts'

const mockHealthData = [
  { date: 'Week 1', heartRate: 75, bloodPressure: 120, temperature: 98.1, bloodSugar: 140 },
  { date: 'Week 2', heartRate: 72, bloodPressure: 118, temperature: 98.3, bloodSugar: 135 },
  { date: 'Week 3', heartRate: 78, bloodPressure: 122, temperature: 98.0, bloodSugar: 145 },
  { date: 'Week 4', heartRate: 73, bloodPressure: 119, temperature: 98.2, bloodSugar: 132 },
]

const healthConfig = {
  heartRate: {
    label: "Heart Rate",
    theme: {
      light: "#ef4444",
      dark: "#ef4444",
    },
  },
  bloodPressure: {
    label: "Blood Pressure",
    theme: {
      light: "#3b82f6",
      dark: "#3b82f6",
    },
  },
  bloodSugar: {
    label: "Blood Sugar",
    theme: {
      light: "#8b5cf6",
      dark: "#8b5cf6",
    },
  },
}

const HealthMetrics = () => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Heart Rate</CardTitle>
            <HeartPulse className="h-4 w-4 text-rose-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">72 BPM</div>
            <Progress value={72} className="h-2 mt-2" />
            <p className="text-xs text-gray-500 mt-1">Normal range: 60-100 BPM</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Blood Pressure</CardTitle>
            <Activity className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">120/80</div>
            <Progress value={80} className="h-2 mt-2" />
            <p className="text-xs text-gray-500 mt-1">Normal range: 90/60-120/80</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Blood Sugar</CardTitle>
            <div className="flex items-center space-x-1">
              <ArrowDown className="h-4 w-4 text-emerald-500" />
              <span className="text-sm text-emerald-500">-5%</span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">135 mg/dL</div>
            <Progress value={75} className="h-2 mt-2" />
            <p className="text-xs text-gray-500 mt-1">Target range: 70-140 mg/dL</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Health Score</CardTitle>
            <ChartLine className="h-4 w-4 text-emerald-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">85/100</div>
            <Progress value={85} className="h-2 mt-2" />
            <p className="text-xs text-gray-500 mt-1">Based on recent metrics</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Health Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ChartContainer
              config={healthConfig}
              className="w-full aspect-[4/3]"
            >
              <AreaChart data={mockHealthData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="heartRate" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="bloodPressure" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="bloodSugar" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="date" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Area
                  type="monotone"
                  dataKey="heartRate"
                  stroke="#ef4444"
                  fillOpacity={1}
                  fill="url(#heartRate)"
                />
                <Area
                  type="monotone"
                  dataKey="bloodPressure"
                  stroke="#3b82f6"
                  fillOpacity={1}
                  fill="url(#bloodPressure)"
                />
                <Area
                  type="monotone"
                  dataKey="bloodSugar"
                  stroke="#8b5cf6"
                  fillOpacity={1}
                  fill="url(#bloodSugar)"
                />
                <ChartLegend content={<ChartLegendContent />} />
              </AreaChart>
            </ChartContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default HealthMetrics;
