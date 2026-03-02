import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Search,
  Plus,
  Filter,
  Clock,
  Users,
  ArrowUpRight,
  Lightbulb,
  Cpu,
  Globe,
  Leaf,
  GraduationCap,
  Factory,
  MoreHorizontal,
} from "lucide-react";

const projects = [
  {
    id: 1,
    name: "AI 智慧客服系統",
    description: "運用大型語言模型打造智慧客服，提升客戶體驗與服務效率",
    status: "進行中",
    progress: 72,
    priority: "高",
    team: "AI 研發部",
    members: 8,
    deadline: "2026/04/15",
    budget: "350 萬",
    category: "技術研發",
    icon: Cpu,
    color: "bg-blue-500",
  },
  {
    id: 2,
    name: "綠色供應鏈優化",
    description: "導入碳足跡追蹤系統，實現供應鏈永續管理目標",
    status: "進行中",
    progress: 45,
    priority: "中",
    team: "營運管理部",
    members: 6,
    deadline: "2026/06/30",
    budget: "280 萬",
    category: "流程優化",
    icon: Leaf,
    color: "bg-emerald-500",
  },
  {
    id: 3,
    name: "跨境電商平台 2.0",
    description: "升級跨境電商平台，支援多幣種結算與在地化體驗",
    status: "審核中",
    progress: 88,
    priority: "高",
    team: "數位商務部",
    members: 12,
    deadline: "2026/03/20",
    budget: "520 萬",
    category: "市場拓展",
    icon: Globe,
    color: "bg-violet-500",
  },
  {
    id: 4,
    name: "員工數位學習平台",
    description: "建構個人化學習路徑，促進組織知識傳承與技能提升",
    status: "規劃中",
    progress: 15,
    priority: "低",
    team: "人力資源部",
    members: 4,
    deadline: "2026/08/01",
    budget: "150 萬",
    category: "組織變革",
    icon: GraduationCap,
    color: "bg-amber-500",
  },
  {
    id: 5,
    name: "IoT 智慧工廠監控",
    description: "部署物聯網感測器與即時監控儀表板，提升生產效率",
    status: "進行中",
    progress: 60,
    priority: "高",
    team: "智慧製造部",
    members: 10,
    deadline: "2026/05/10",
    budget: "480 萬",
    category: "技術研發",
    icon: Factory,
    color: "bg-rose-500",
  },
  {
    id: 6,
    name: "客戶體驗旅程優化",
    description: "重新設計客戶接觸點，打造無縫的全通路體驗",
    status: "進行中",
    progress: 35,
    priority: "中",
    team: "行銷策略部",
    members: 7,
    deadline: "2026/07/15",
    budget: "220 萬",
    category: "產品創新",
    icon: Lightbulb,
    color: "bg-cyan-500",
  },
];

const statusColor: Record<string, string> = {
  "進行中": "bg-blue-100 text-blue-700 border-blue-200",
  "審核中": "bg-amber-100 text-amber-700 border-amber-200",
  "規劃中": "bg-gray-100 text-gray-700 border-gray-200",
  "已完成": "bg-emerald-100 text-emerald-700 border-emerald-200",
};

const priorityColor: Record<string, string> = {
  "高": "bg-red-100 text-red-700",
  "中": "bg-amber-100 text-amber-700",
  "低": "bg-gray-100 text-gray-700",
};

export function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects = projects.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.description.toLowerCase().includes(searchTerm.toLowerCase());
    if (activeTab === "all") return matchesSearch;
    return matchesSearch && p.status === activeTab;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">創新專案</h1>
          <p className="text-muted-foreground text-sm mt-1">
            管理與追蹤所有創新專案的進度與資源配置
          </p>
        </div>
        <Button size="sm">
          <Plus className="h-4 w-4 mr-1.5" />
          新增專案
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="搜尋專案名稱或描述..."
            className="pl-9"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button variant="outline" size="sm">
          <Filter className="h-4 w-4 mr-1.5" />
          篩選條件
        </Button>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="all">全部 ({projects.length})</TabsTrigger>
          <TabsTrigger value="進行中">
            進行中 ({projects.filter((p) => p.status === "進行中").length})
          </TabsTrigger>
          <TabsTrigger value="審核中">
            審核中 ({projects.filter((p) => p.status === "審核中").length})
          </TabsTrigger>
          <TabsTrigger value="規劃中">
            規劃中 ({projects.filter((p) => p.status === "規劃中").length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="mt-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="group hover:shadow-md transition-all duration-200 cursor-pointer"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-lg ${project.color} text-white`}
                      >
                        <project.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <CardTitle className="text-sm font-semibold group-hover:text-primary transition-colors">
                          {project.name}
                        </CardTitle>
                        <p className="text-xs text-muted-foreground">{project.category}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" className="h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-2">
                    <Badge
                      variant="secondary"
                      className={`text-[10px] ${statusColor[project.status]}`}
                    >
                      {project.status}
                    </Badge>
                    <Badge
                      variant="secondary"
                      className={`text-[10px] ${priorityColor[project.priority]}`}
                    >
                      優先級：{project.priority}
                    </Badge>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-muted-foreground">完成進度</span>
                      <span className="font-medium">{project.progress}%</span>
                    </div>
                    <Progress value={project.progress} className="h-1.5" />
                  </div>

                  <div className="flex items-center justify-between text-xs text-muted-foreground pt-1 border-t">
                    <div className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      <span>{project.members} 人</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{project.deadline}</span>
                    </div>
                    <span className="font-medium text-foreground">{project.budget}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
