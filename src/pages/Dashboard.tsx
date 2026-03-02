import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Lightbulb,
  TrendingUp,
  Target,
  Users,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  CheckCircle2,
  AlertCircle,
  Zap,
  BarChart3,
  PieChart,
  Activity,
} from "lucide-react";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart as RechartsPie,
  Pie,
  Cell,
  Legend,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

const kpiData = [
  {
    title: "進行中專案",
    value: "24",
    change: "+3",
    trend: "up",
    icon: Lightbulb,
    description: "較上月增加",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "策略達成率",
    value: "78.5%",
    change: "+5.2%",
    trend: "up",
    icon: Target,
    description: "較上季提升",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    title: "創新投資報酬率",
    value: "3.2x",
    change: "+0.4x",
    trend: "up",
    icon: TrendingUp,
    description: "年度累計",
    color: "text-violet-600",
    bgColor: "bg-violet-50",
  },
  {
    title: "團隊參與人數",
    value: "156",
    change: "-2",
    trend: "down",
    icon: Users,
    description: "活躍成員",
    color: "text-amber-600",
    bgColor: "bg-amber-50",
  },
];

const monthlyData = [
  { month: "7月", 專案數: 15, 完成數: 8, 投資額: 120 },
  { month: "8月", 專案數: 18, 完成數: 10, 投資額: 145 },
  { month: "9月", 專案數: 20, 完成數: 12, 投資額: 160 },
  { month: "10月", 專案數: 22, 完成數: 15, 投資額: 180 },
  { month: "11月", 專案數: 19, 完成數: 14, 投資額: 170 },
  { month: "12月", 專案數: 21, 完成數: 16, 投資額: 190 },
  { month: "1月", 專案數: 24, 完成數: 18, 投資額: 210 },
  { month: "2月", 專案數: 26, 完成數: 20, 投資額: 230 },
];

const categoryData = [
  { name: "產品創新", value: 35, color: "#3b82f6" },
  { name: "流程優化", value: 25, color: "#10b981" },
  { name: "市場拓展", value: 20, color: "#8b5cf6" },
  { name: "技術研發", value: 15, color: "#f59e0b" },
  { name: "組織變革", value: 5, color: "#ef4444" },
];

const radarData = [
  { subject: "創新力", A: 85, fullMark: 100 },
  { subject: "執行力", A: 72, fullMark: 100 },
  { subject: "市場敏銳度", A: 90, fullMark: 100 },
  { subject: "技術能力", A: 78, fullMark: 100 },
  { subject: "團隊協作", A: 88, fullMark: 100 },
  { subject: "資源效率", A: 65, fullMark: 100 },
];

const recentProjects = [
  {
    name: "AI 智慧客服系統",
    status: "進行中",
    progress: 72,
    priority: "高",
    team: "AI 研發部",
    deadline: "2026/04/15",
  },
  {
    name: "綠色供應鏈優化",
    status: "進行中",
    progress: 45,
    priority: "中",
    team: "營運管理部",
    deadline: "2026/06/30",
  },
  {
    name: "跨境電商平台 2.0",
    status: "審核中",
    progress: 88,
    priority: "高",
    team: "數位商務部",
    deadline: "2026/03/20",
  },
  {
    name: "員工數位學習平台",
    status: "規劃中",
    progress: 15,
    priority: "低",
    team: "人力資源部",
    deadline: "2026/08/01",
  },
  {
    name: "IoT 智慧工廠監控",
    status: "進行中",
    progress: 60,
    priority: "高",
    team: "智慧製造部",
    deadline: "2026/05/10",
  },
];

const activities = [
  { user: "王建明", action: "更新了專案進度", target: "AI 智慧客服系統", time: "10 分鐘前", icon: Activity },
  { user: "李美玲", action: "提交了策略報告", target: "Q1 創新策略評估", time: "30 分鐘前", icon: FileIcon },
  { user: "陳志偉", action: "完成了里程碑", target: "綠色供應鏈 - 階段二", time: "1 小時前", icon: CheckCircle2 },
  { user: "張雅婷", action: "新增了專案成員", target: "跨境電商平台 2.0", time: "2 小時前", icon: Users },
  { user: "林俊傑", action: "發布了知識文章", target: "數位轉型最佳實踐", time: "3 小時前", icon: Lightbulb },
];

function FileIcon(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    </svg>
  );
}

const statusColor: Record<string, string> = {
  "進行中": "bg-blue-100 text-blue-700",
  "審核中": "bg-amber-100 text-amber-700",
  "規劃中": "bg-gray-100 text-gray-700",
  "已完成": "bg-emerald-100 text-emerald-700",
};

const priorityColor: Record<string, string> = {
  "高": "bg-red-100 text-red-700",
  "中": "bg-amber-100 text-amber-700",
  "低": "bg-gray-100 text-gray-700",
};

export function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">儀表板</h1>
          <p className="text-muted-foreground text-sm mt-1">
            歡迎回來，系統管理員。以下是平台最新概況。
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <BarChart3 className="h-4 w-4 mr-1.5" />
            匯出報表
          </Button>
          <Button size="sm">
            <Zap className="h-4 w-4 mr-1.5" />
            新增專案
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {kpiData.map((kpi) => (
          <Card key={kpi.title} className="relative overflow-hidden">
            <CardContent className="p-5">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">{kpi.title}</p>
                  <p className="text-2xl font-bold">{kpi.value}</p>
                  <div className="flex items-center gap-1">
                    {kpi.trend === "up" ? (
                      <ArrowUpRight className="h-3.5 w-3.5 text-emerald-600" />
                    ) : (
                      <ArrowDownRight className="h-3.5 w-3.5 text-red-500" />
                    )}
                    <span
                      className={`text-xs font-medium ${
                        kpi.trend === "up" ? "text-emerald-600" : "text-red-500"
                      }`}
                    >
                      {kpi.change}
                    </span>
                    <span className="text-xs text-muted-foreground">{kpi.description}</span>
                  </div>
                </div>
                <div className={`rounded-lg p-2.5 ${kpi.bgColor}`}>
                  <kpi.icon className={`h-5 w-5 ${kpi.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid gap-4 lg:grid-cols-7">
        {/* Area Chart */}
        <Card className="lg:col-span-4">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">專案趨勢分析</CardTitle>
            <CardDescription>近八個月專案數量與完成數趨勢</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={monthlyData}>
                <defs>
                  <linearGradient id="colorProjects" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorCompleted" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="month" className="text-xs" tick={{ fontSize: 12 }} />
                <YAxis className="text-xs" tick={{ fontSize: 12 }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--background))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                    fontSize: "12px",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="專案數"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorProjects)"
                />
                <Area
                  type="monotone"
                  dataKey="完成數"
                  stroke="#10b981"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorCompleted)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Pie Chart */}
        <Card className="lg:col-span-3">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">專案類別分佈</CardTitle>
            <CardDescription>依創新類型分類統計</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <RechartsPie>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={4}
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--background))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                    fontSize: "12px",
                  }}
                  formatter={(value: number) => [`${value}%`, "佔比"]}
                />
                <Legend
                  verticalAlign="bottom"
                  height={36}
                  formatter={(value: string) => (
                    <span className="text-xs text-muted-foreground">{value}</span>
                  )}
                />
              </RechartsPie>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Bar Chart + Radar Chart */}
      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">月度投資額</CardTitle>
            <CardDescription>創新專案投資金額（萬元）</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={monthlyData}>
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
                  formatter={(value: number) => [`${value} 萬`, "投資額"]}
                />
                <Bar dataKey="投資額" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">組織能力雷達圖</CardTitle>
            <CardDescription>六大核心能力評估</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={280}>
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                <PolarGrid className="stroke-muted" />
                <PolarAngleAxis dataKey="subject" tick={{ fontSize: 11 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fontSize: 10 }} />
                <Radar
                  name="能力值"
                  dataKey="A"
                  stroke="#3b82f6"
                  fill="#3b82f6"
                  fillOpacity={0.25}
                  strokeWidth={2}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--background))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                    fontSize: "12px",
                  }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Projects Table + Activity Feed */}
      <div className="grid gap-4 lg:grid-cols-5">
        {/* Recent Projects */}
        <Card className="lg:col-span-3">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-base">近期專案</CardTitle>
                <CardDescription>追蹤重要專案進度</CardDescription>
              </div>
              <Button variant="ghost" size="sm" className="text-xs">
                查看全部
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentProjects.map((project) => (
                <div
                  key={project.name}
                  className="flex flex-col sm:flex-row sm:items-center gap-3 p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-sm font-medium truncate">{project.name}</p>
                      <Badge
                        variant="secondary"
                        className={`text-[10px] px-1.5 py-0 ${statusColor[project.status]}`}
                      >
                        {project.status}
                      </Badge>
                      <Badge
                        variant="secondary"
                        className={`text-[10px] px-1.5 py-0 ${priorityColor[project.priority]}`}
                      >
                        {project.priority}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span>{project.team}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {project.deadline}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 sm:w-40">
                    <Progress value={project.progress} className="h-1.5 flex-1" />
                    <span className="text-xs font-medium w-8 text-right">{project.progress}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Activity Feed */}
        <Card className="lg:col-span-2">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-base">最新動態</CardTitle>
                <CardDescription>團隊活動紀錄</CardDescription>
              </div>
              <Button variant="ghost" size="sm" className="text-xs">
                查看全部
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activities.map((activity, index) => (
                <div key={index} className="flex gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted">
                    <activity.icon className="h-3.5 w-3.5 text-muted-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm leading-relaxed">
                      <span className="font-medium">{activity.user}</span>{" "}
                      <span className="text-muted-foreground">{activity.action}</span>
                    </p>
                    <p className="text-xs text-primary font-medium truncate">{activity.target}</p>
                    <p className="text-[11px] text-muted-foreground mt-0.5">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
