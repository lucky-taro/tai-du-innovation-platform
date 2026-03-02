import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Search,
  Plus,
  Users,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Star,
  MoreHorizontal,
  UserPlus,
  Filter,
} from "lucide-react";

const departments = [
  { name: "AI 研發部", members: 28, projects: 5, lead: "陳志偉", color: "bg-blue-500" },
  { name: "數位商務部", members: 32, projects: 4, lead: "張雅婷", color: "bg-violet-500" },
  { name: "營運管理部", members: 24, projects: 3, lead: "王建明", color: "bg-emerald-500" },
  { name: "智慧製造部", members: 36, projects: 6, lead: "林俊傑", color: "bg-amber-500" },
  { name: "人力資源部", members: 18, projects: 2, lead: "李美玲", color: "bg-rose-500" },
  { name: "行銷策略部", members: 18, projects: 3, lead: "黃志豪", color: "bg-cyan-500" },
];

const teamMembers = [
  {
    id: 1,
    name: "王建明",
    role: "營運總監",
    department: "營運管理部",
    email: "wang.jm@taidu-tech.com",
    phone: "0912-345-678",
    location: "台北總部",
    projects: 3,
    skills: ["策略規劃", "供應鏈管理", "流程優化"],
    performance: 92,
    status: "在線",
    initials: "王",
    color: "bg-blue-100 text-blue-700",
  },
  {
    id: 2,
    name: "李美玲",
    role: "人資長",
    department: "人力資源部",
    email: "lee.ml@taidu-tech.com",
    phone: "0923-456-789",
    location: "台北總部",
    projects: 2,
    skills: ["人才發展", "組織設計", "績效管理"],
    performance: 88,
    status: "在線",
    initials: "李",
    color: "bg-rose-100 text-rose-700",
  },
  {
    id: 3,
    name: "陳志偉",
    role: "技術長",
    department: "AI 研發部",
    email: "chen.zw@taidu-tech.com",
    phone: "0934-567-890",
    location: "新竹研發中心",
    projects: 5,
    skills: ["AI/ML", "系統架構", "技術管理"],
    performance: 95,
    status: "會議中",
    initials: "陳",
    color: "bg-violet-100 text-violet-700",
  },
  {
    id: 4,
    name: "張雅婷",
    role: "商務副總",
    department: "數位商務部",
    email: "chang.yt@taidu-tech.com",
    phone: "0945-678-901",
    location: "台北總部",
    projects: 4,
    skills: ["電子商務", "市場分析", "客戶關係"],
    performance: 90,
    status: "在線",
    initials: "張",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    id: 5,
    name: "林俊傑",
    role: "製造總監",
    department: "智慧製造部",
    email: "lin.jj@taidu-tech.com",
    phone: "0956-789-012",
    location: "台中工廠",
    projects: 6,
    skills: ["智慧製造", "IoT", "品質管理"],
    performance: 87,
    status: "外出",
    initials: "林",
    color: "bg-amber-100 text-amber-700",
  },
  {
    id: 6,
    name: "黃志豪",
    role: "行銷總監",
    department: "行銷策略部",
    email: "huang.zh@taidu-tech.com",
    phone: "0967-890-123",
    location: "台北總部",
    projects: 3,
    skills: ["品牌策略", "數位行銷", "市場研究"],
    performance: 85,
    status: "在線",
    initials: "黃",
    color: "bg-cyan-100 text-cyan-700",
  },
];

const statusColor: Record<string, string> = {
  "在線": "bg-emerald-500",
  "會議中": "bg-amber-500",
  "外出": "bg-gray-400",
  "離線": "bg-gray-300",
};

export function Team() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMembers = teamMembers.filter(
    (m) =>
      m.name.includes(searchTerm) ||
      m.role.includes(searchTerm) ||
      m.department.includes(searchTerm)
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">團隊管理</h1>
          <p className="text-muted-foreground text-sm mt-1">
            管理團隊成員、部門組織與協作資源
          </p>
        </div>
        <Button size="sm">
          <UserPlus className="h-4 w-4 mr-1.5" />
          邀請成員
        </Button>
      </div>

      {/* Department Overview */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {departments.map((dept) => (
          <Card key={dept.name} className="hover:shadow-sm transition-shadow cursor-pointer">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className={`h-10 w-10 rounded-lg ${dept.color} flex items-center justify-center`}>
                  <Users className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold">{dept.name}</p>
                  <p className="text-xs text-muted-foreground">負責人：{dept.lead}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold">{dept.members}</p>
                  <p className="text-[10px] text-muted-foreground">{dept.projects} 個專案</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Search */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="搜尋成員姓名、職位或部門..."
            className="pl-9"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button variant="outline" size="sm">
          <Filter className="h-4 w-4 mr-1.5" />
          篩選
        </Button>
      </div>

      {/* Team Members Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredMembers.map((member) => (
          <Card key={member.id} className="group hover:shadow-md transition-all duration-200">
            <CardContent className="p-5">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className={`${member.color} text-base font-semibold`}>
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div
                      className={`absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-background ${
                        statusColor[member.status]
                      }`}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{member.name}</p>
                    <p className="text-xs text-muted-foreground">{member.role}</p>
                    <Badge variant="secondary" className="text-[10px] mt-1">
                      {member.department}
                    </Badge>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-2.5 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Mail className="h-3 w-3 shrink-0" />
                  <span className="truncate">{member.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-3 w-3 shrink-0" />
                  <span>{member.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="h-3 w-3 shrink-0" />
                  <span>參與 {member.projects} 個專案</span>
                </div>
              </div>

              <div className="mt-3 pt-3 border-t">
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="text-muted-foreground">績效評分</span>
                  <span className="font-medium flex items-center gap-1">
                    <Star className="h-3 w-3 text-amber-500 fill-amber-500" />
                    {member.performance}
                  </span>
                </div>
                <Progress value={member.performance} className="h-1.5" />
              </div>

              <div className="mt-3 flex flex-wrap gap-1">
                {member.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[10px] px-1.5 py-0.5 rounded bg-muted text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
