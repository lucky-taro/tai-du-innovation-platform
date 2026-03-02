import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Search,
  Plus,
  FileText,
  BookOpen,
  Video,
  Link2,
  Eye,
  Heart,
  MessageSquare,
  Clock,
  Star,
  TrendingUp,
  Folder,
} from "lucide-react";

const categories = [
  { name: "全部", count: 48, icon: Folder },
  { name: "策略框架", count: 12, icon: Target },
  { name: "技術文件", count: 15, icon: FileText },
  { name: "最佳實踐", count: 8, icon: Star },
  { name: "研究報告", count: 7, icon: BookOpen },
  { name: "教學影片", count: 6, icon: Video },
];

function Target(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
    </svg>
  );
}

const articles = [
  {
    id: 1,
    title: "數位轉型策略框架：從規劃到落地的完整指南",
    description: "本文深入探討企業數位轉型的五大階段，涵蓋策略規劃、組織變革、技術選型、執行監控與持續優化。",
    category: "策略框架",
    author: "王建明",
    date: "2026/02/28",
    readTime: "15 分鐘",
    views: 1234,
    likes: 89,
    comments: 23,
    featured: true,
    tags: ["數位轉型", "策略規劃", "組織變革"],
  },
  {
    id: 2,
    title: "AI 應用於製造業品質控制的實踐經驗",
    description: "分享臺鍍科技在智慧製造領域導入 AI 視覺檢測系統的實際案例與成效分析。",
    category: "最佳實踐",
    author: "陳志偉",
    date: "2026/02/25",
    readTime: "12 分鐘",
    views: 856,
    likes: 67,
    comments: 15,
    featured: true,
    tags: ["AI", "智慧製造", "品質控制"],
  },
  {
    id: 3,
    title: "ESG 永續報告書撰寫技術指南",
    description: "詳細說明 GRI 準則下的永續報告書撰寫流程、數據收集方法與揭露要求。",
    category: "技術文件",
    author: "李美玲",
    date: "2026/02/20",
    readTime: "20 分鐘",
    views: 645,
    likes: 45,
    comments: 8,
    featured: false,
    tags: ["ESG", "永續發展", "報告書"],
  },
  {
    id: 4,
    title: "敏捷專案管理在創新團隊中的應用",
    description: "探討 Scrum 與 Kanban 方法論如何在創新專案中靈活運用，提升團隊效率。",
    category: "最佳實踐",
    author: "張雅婷",
    date: "2026/02/18",
    readTime: "10 分鐘",
    views: 523,
    likes: 38,
    comments: 12,
    featured: false,
    tags: ["敏捷", "專案管理", "Scrum"],
  },
  {
    id: 5,
    title: "2026 全球創新趨勢研究報告",
    description: "綜合分析全球主要產業的創新趨勢，包含 AI、量子運算、生物科技與永續能源等領域。",
    category: "研究報告",
    author: "林俊傑",
    date: "2026/02/15",
    readTime: "25 分鐘",
    views: 1567,
    likes: 112,
    comments: 34,
    featured: true,
    tags: ["創新趨勢", "研究報告", "全球市場"],
  },
  {
    id: 6,
    title: "微服務架構設計模式與實作",
    description: "從單體式架構遷移至微服務的設計考量、技術選型與部署策略完整教學。",
    category: "技術文件",
    author: "陳志偉",
    date: "2026/02/10",
    readTime: "18 分鐘",
    views: 432,
    likes: 29,
    comments: 7,
    featured: false,
    tags: ["微服務", "架構設計", "DevOps"],
  },
];

const categoryColors: Record<string, string> = {
  "策略框架": "bg-blue-100 text-blue-700",
  "技術文件": "bg-violet-100 text-violet-700",
  "最佳實踐": "bg-emerald-100 text-emerald-700",
  "研究報告": "bg-amber-100 text-amber-700",
  "教學影片": "bg-rose-100 text-rose-700",
};

export function Knowledge() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("全部");

  const filteredArticles = articles.filter((a) => {
    const matchesSearch =
      a.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      a.description.toLowerCase().includes(searchTerm.toLowerCase());
    if (selectedCategory === "全部") return matchesSearch;
    return matchesSearch && a.category === selectedCategory;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">知識庫</h1>
          <p className="text-muted-foreground text-sm mt-1">
            企業創新知識的集中管理與分享平台
          </p>
        </div>
        <Button size="sm">
          <Plus className="h-4 w-4 mr-1.5" />
          發布文章
        </Button>
      </div>

      {/* Search */}
      <div className="relative max-w-lg">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="搜尋知識庫文章..."
          className="pl-9"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <Button
            key={cat.name}
            variant={selectedCategory === cat.name ? "default" : "outline"}
            size="sm"
            className="text-xs"
            onClick={() => setSelectedCategory(cat.name)}
          >
            <cat.icon className="h-3.5 w-3.5 mr-1" />
            {cat.name}
            <span className="ml-1 text-[10px] opacity-70">({cat.count})</span>
          </Button>
        ))}
      </div>

      {/* Featured Articles */}
      {selectedCategory === "全部" && (
        <div className="grid gap-4 lg:grid-cols-3">
          {articles
            .filter((a) => a.featured)
            .map((article) => (
              <Card
                key={article.id}
                className="group hover:shadow-md transition-all duration-200 cursor-pointer border-primary/20"
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between mb-2">
                    <Badge
                      variant="secondary"
                      className={`text-[10px] ${categoryColors[article.category]}`}
                    >
                      {article.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-amber-500">
                      <Star className="h-3 w-3 fill-current" />
                      <span className="text-[10px]">精選</span>
                    </div>
                  </div>
                  <CardTitle className="text-sm font-semibold leading-snug group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                    {article.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-1.5 py-0.5 rounded bg-muted text-muted-foreground"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-muted-foreground pt-2 border-t">
                    <span>{article.author}</span>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-0.5">
                        <Eye className="h-3 w-3" /> {article.views}
                      </span>
                      <span className="flex items-center gap-0.5">
                        <Heart className="h-3 w-3" /> {article.likes}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>
      )}

      {/* All Articles List */}
      <div className="space-y-3">
        {filteredArticles.map((article) => (
          <Card
            key={article.id}
            className="group hover:shadow-sm transition-all duration-200 cursor-pointer"
          >
            <CardContent className="p-4">
              <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Badge
                      variant="secondary"
                      className={`text-[10px] ${categoryColors[article.category]}`}
                    >
                      {article.category}
                    </Badge>
                    <span className="text-[11px] text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold group-hover:text-primary transition-colors mb-1">
                    {article.title}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-1">{article.description}</p>
                </div>
                <div className="flex sm:flex-col items-center sm:items-end gap-2 text-[11px] text-muted-foreground">
                  <span>{article.author}</span>
                  <span>{article.date}</span>
                  <div className="flex items-center gap-2">
                    <span className="flex items-center gap-0.5">
                      <Eye className="h-3 w-3" /> {article.views}
                    </span>
                    <span className="flex items-center gap-0.5">
                      <MessageSquare className="h-3 w-3" /> {article.comments}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
