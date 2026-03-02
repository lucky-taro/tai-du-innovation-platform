import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Download,
  TrendingUp,
  TrendingDown,
  Target,
  DollarSign,
  Clock,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  ComposedChart,
} from "recharts";

const roiData = [
  { quarter: "Q1 2025", 投入: 800, 產出: 1200, ROI: 1.5 },
  { quarter: "Q2 2025", 投入: 950, 產出: 1600, ROI: 1.68 },
  { quarter: "Q3 2025", 投入: 1100, 產出: 2200, ROI: 2.0 },
  { quarter: "Q4 2025", 投入: 1300, 產出: 3100, ROI: 2.38 },
  { quarter: "Q1 2026", 投入: 1500, 產出: 4200, ROI: 2.8 },
];

const departmentData = [
  { dept: "AI 研發", 預算: 350, 執行: 280, 達成率: 80 },
  { dept: "營運管理", 預算: 280, 執行: 210, 達成率: 75 },
  { dept: "數位商務", 預算: 520, 執行: 460, 達成率: 88 },
  { dept: "人力資源", 預算: 150, 執行: 45, 達成率: 30 },
  { dept: "智慧製造", 預算: 480, 執行: 320, 達成率: 67 },
  { dept: "行銷策略", 預算: 220, 執行: 110, 達成率: 50 },
];

const timelineData = [
  { month: "9月", 準時: 8, 延遲: 2, 提前: 1 },
  { month: "10月", 準時: 10, 延遲: 3, 提前: 2 },
  { month: "11月", 準時: 12, 延遲: 1, 提前: 3 },
  { month: "12月", 準時: 9, 延遲: 4, 提前: 2 },
  { month: "1月", 準時: 14, 延遲: 2, 提前: 4 },
  { month: "2月", 準時: 11, 延遲: 1, 提前: 5 },
];

const strategyMetrics = [
  {
    name: "數位轉型",
    target: 85,
    current: 78,
    status: "on-track",
    initiatives: 8,
    completed: 5,
  },
  {
    name: "永續發展",
    target: 70,
    current: 62,
    status: "at-risk",
    initiatives: 5,
    completed: 2,
  },
  {
    name: "市場擴張",
    target: 90,
    current: 88,
    status: "on-track",
    initiatives: 6,
    completed: 5,
  },
  {
    name: "人才培育",
    target: 75,
    current: 55,
    status: "behind",
    initiatives: 4,
    completed: 1,
  },
  {
    name: "技術領先",
    target: 80,
    current: 72,
    status: "on-track",
    initiatives: 7,
    completed: 4,
  },
];

const statusConfig: Record<string, { label: string; color: string; icon: any }> = {
  "on-track": { label: "正常推進", color: "text-emerald-600 bg-emerald-50", icon: CheckCircle2 },
  "at-risk": { label: "需關注", color: "text-amber-600 bg-amber-50", icon: AlertTriangle },
  behind: { label: "落後", color: "text-red-600 bg-red-50", icon: TrendingDown },
};

export function Analytics() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">策略分析</h1>
          <p className="text-muted-foreground text-sm mt-1">
            深入分析創新策略執行成效與資源配置效率
          </p>
        </div>
        <div className="flex gap-2">
          <Select defaultValue="2026">
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2026">2026 年度</SelectItem>
              <SelectItem value="2025">2025 年度</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-1.5" />
            匯出
          </Button>
        </div>
      </div>

      {/* Strategy Metrics */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">策略目標達成狀態</CardTitle>
          <CardDescription>五大策略方向的執行進度與目標對比</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-5">
            {strategyMetrics.map((metric) => {
              const config = statusConfig[metric.status];
              const percentage = Math.round((metric.current / metric.target) * 100);
              return (
                <div key={metric.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium w-20">{metric.name}</span>
                      <Badge variant="secondary" className={`text-[10px] ${config.color}`}>
                        <config.icon className="h-3 w-3 mr-1" />
                        {config.label}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>
                        {metric.completed}/{metric.initiatives} 項目完成
                      </span>
                      <span className="font-medium text-foreground">
                        {metric.current}% / {metric.target}%
                      </span>
                    </div>
                  </div>
                  <div className="relative">
                    <Progress value={metric.current} className="h-2" />
                    <div
                      className="absolute top-0 h-2 w-0.5 bg-foreground/60 rounded"
                      style={{ left: `${metric.target}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* ROI Chart + Department Budget */}
      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">投資報酬率趨勢</CardTitle>
            <CardDescription>季度投入產出與 ROI 變化</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart data={roiData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="quarter" tick={{ fontSize: 11 }} />
                <YAxis yAxisId="left" tick={{ fontSize: 11 }} />
                <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 11 }} domain={[0, 4]} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--background))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                    fontSize: "12px",
                  }}
                />
                <Legend wrapperStyle={{ fontSize: "12px" }} />
                <Bar yAxisId="left" dataKey="投入" fill="#94a3b8" radius={[2, 2, 0, 0]} />
                <Bar yAxisId="left" dataKey="產出" fill="#3b82f6" radius={[2, 2, 0, 0]} />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="ROI"
                  stroke="#10b981"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">部門預算執行率</CardTitle>
            <CardDescription>各部門預算配置與執行狀況（萬元）</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={departmentData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis type="number" tick={{ fontSize: 11 }} />
                <YAxis dataKey="dept" type="category" tick={{ fontSize: 11 }} width={70} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--background))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                    fontSize: "12px",
                  }}
                  formatter={(value: number, name: string) => [`${value} 萬`, name]}
                />
                <Legend wrapperStyle={{ fontSize: "12px" }} />
                <Bar dataKey="預算" fill="#e2e8f0" radius={[0, 2, 2, 0]} />
                <Bar dataKey="執行" fill="#8b5cf6" radius={[0, 2, 2, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Timeline Performance */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">專案時程績效</CardTitle>
          <CardDescription>里程碑達成的時程表現分析</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={timelineData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--background))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                  fontSize: "12px",
                }}
              />
              <Legend wrapperStyle={{ fontSize: "12px" }} />
              <Bar dataKey="提前" stackId="a" fill="#10b981" radius={[0, 0, 0, 0]} />
              <Bar dataKey="準時" stackId="a" fill="#3b82f6" radius={[0, 0, 0, 0]} />
              <Bar dataKey="延遲" stackId="a" fill="#ef4444" radius={[2, 2, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
