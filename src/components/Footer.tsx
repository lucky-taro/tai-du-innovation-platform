import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-base font-bold text-primary-foreground">臺</span>
              </div>
              <div>
                <p className="text-sm font-bold">臺鍍科技</p>
                <p className="text-[10px] text-muted-foreground">TaiDu Technology</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              以創新驅動企業成長，透過策略管理平台協助企業實現數位轉型與永續發展目標。
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">平台功能</h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>創新專案管理</li>
              <li>策略分析儀表板</li>
              <li>知識庫管理</li>
              <li>團隊協作工具</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">資源中心</h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>使用指南</li>
              <li>API 文件</li>
              <li>最佳實踐</li>
              <li>常見問題</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">聯絡我們</h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>service@taidu-tech.com</li>
              <li>+886 2-2345-6789</li>
              <li>台北市信義區信義路五段7號</li>
            </ul>
          </div>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-muted-foreground">
            &copy; 2026 臺鍍科技股份有限公司 版權所有
          </p>
          <div className="flex gap-4 text-xs text-muted-foreground">
            <span className="hover:text-foreground cursor-pointer">隱私權政策</span>
            <span className="hover:text-foreground cursor-pointer">服務條款</span>
            <span className="hover:text-foreground cursor-pointer">Cookie 設定</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
