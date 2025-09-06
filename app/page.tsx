import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Mail,
  Phone,
  MapPin,
  Award,
  GraduationCap,
  Briefcase,
  Heart,
  Users,
  Globe,
  FileText,
  Scale,
  Building,
} from "lucide-react"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-32 h-32 bg-muted rounded-full flex items-center justify-center">
              <Scale className="w-16 h-16 text-primary" />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold text-foreground mb-2 text-balance">Nguyễn Hoàng Đoan Trang</h1>
              <p className="text-xl text-muted-foreground mb-4">Sinh viên Luật Tài chính - Ngân hàng</p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>0707481388</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>nguyenhoangdoantrang.law@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>TP. Hồ Chí Minh</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12 space-y-12">
        {/* Mục tiêu nghề nghiệp */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Briefcase className="w-5 h-5" />
                Mục tiêu nghề nghiệp
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground leading-relaxed text-pretty">
                Tôi mong muốn được tham gia thực tập trong môi trường pháp lý chuyên nghiệp nhằm học hỏi, tích lũy kinh
                nghiệm thực tiễn và áp dụng các kiến thức đã học vào công việc thực tế. Đồng thời, tôi cũng hy vọng có
                cơ hội đóng góp kỹ năng nghiên cứu pháp luật, soạn thảo văn bản và phân tích tình huống pháp lý để hỗ
                trợ hoạt động của đơn vị.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Học vấn */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <GraduationCap className="w-5 h-5" />
                Học vấn
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  Đại học Kinh tế - Luật, Đại học Quốc gia TP. Hồ Chí Minh
                </h3>
                <p className="text-muted-foreground">Ngành: Luật Tài chính - Ngân hàng</p>
                <p className="text-muted-foreground">Niên khóa: 2023 - 2027</p>
                <div className="flex items-center gap-2 mt-2">
                  <Badge className="bg-primary text-primary-foreground">GPA: 8.067/10</Badge>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-foreground mb-3">Một số môn học nổi bật:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <span className="text-sm">Luật dân sự: Tài sản, quyền sở hữu và quyền thừa kế</span>
                    <Badge className="bg-accent text-accent-foreground">9.5/10</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <span className="text-sm">Luật doanh nghiệp</span>
                    <Badge className="bg-accent text-accent-foreground">9.2/10</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <span className="text-sm">Luật hành chính</span>
                    <Badge className="bg-accent text-accent-foreground">8.8/10</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <span className="text-sm">Luật hợp đồng</span>
                    <Badge className="bg-accent text-accent-foreground">8.5/10</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Kinh nghiệm & Thành tích */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Building className="w-5 h-5" />
                Kinh nghiệm liên quan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-foreground">Kiến tập tại Tòa án nhân dân TP. HCM</h4>
                <p className="text-sm text-muted-foreground mb-2">Cơ sở 2 (Tòa án nhân dân tỉnh Bình Dương)</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Quan sát và tham gia hỗ trợ trong các hoạt động nghiệp vụ</li>
                  <li>• Học hỏi quy trình xét xử và cách vận hành hệ thống tòa án</li>
                </ul>
                <Badge variant="outline" className="mt-2">
                  Hoàn thành xuất sắc
                </Badge>
              </div>

              <div className="border-l-4 border-accent pl-4">
                <h4 className="font-semibold text-foreground">Cuộc thi Khởi nghiệp và Đổi mới sáng tạo</h4>
                <p className="text-sm text-muted-foreground mb-2">Cấp thành phố năm 2025</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Phát triển ý tưởng sáng tạo mang tính ứng dụng thực tiễn</li>
                  <li>• Rèn luyện kỹ năng làm việc nhóm và thuyết trình</li>
                </ul>
                <Badge className="mt-2 bg-primary text-primary-foreground">Top 35</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Award className="w-5 h-5" />
                Thành tích / Giải thưởng
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-primary/5 rounded-lg">
                <Award className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Top 35 Cuộc thi Khởi nghiệp và Đổi mới sáng tạo</p>
                  <p className="text-sm text-muted-foreground">Cấp thành phố (2025)</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-accent/5 rounded-lg">
                <GraduationCap className="w-5 h-5 text-accent mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Hoàn thành loại Xuất sắc</p>
                  <p className="text-sm text-muted-foreground">Chương trình kiến tập tại Tòa án nhân dân</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Hoạt động ngoại khóa */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <Heart className="w-5 h-5" />
              Hoạt động ngoại khóa
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Heart className="w-4 h-4 text-accent" />
                  Tình nguyện
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Đồng hành cùng bệnh nhân ung thư - Quỹ thiện nguyện sinh viên (2024)</li>
                  <li>• Truyền thông online cho chương trình "Ước mơ vùng biên" (2024)</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Users className="w-4 h-4 text-accent" />
                  Đoàn - Hội
                </h4>
                <p className="text-sm text-muted-foreground">
                  Tích cực tham gia các hoạt động sinh viên, giao lưu học thuật và phát triển kỹ năng mềm
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Kỹ năng */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <FileText className="w-5 h-5" />
              Kỹ năng
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Scale className="w-4 h-4 text-primary" />
                  Pháp lý
                </h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Nghiên cứu và phân tích văn bản luật</li>
                  <li>• Soạn thảo văn bản pháp lý cơ bản</li>
                  <li>• Biên bản, hợp đồng mẫu</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Globe className="w-4 h-4 text-primary" />
                  Ngoại ngữ
                </h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">TOEIC L&R</span>
                    <Badge variant="outline">555/990</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">TOEIC S&W</span>
                    <Badge variant="outline">240/400</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">Đọc hiểu tài liệu pháp luật tiếng Anh</p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-3">Tin học</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• MS Office thành thạo</li>
                  <li>• Xử lý văn bản chuyên nghiệp</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-3">Kỹ năng mềm</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Giao tiếp và trình bày</li>
                  <li>• Làm việc nhóm hiệu quả</li>
                  <li>• Quản lý thời gian</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Định hướng */}
        <Card className="bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="text-primary">Định hướng phát triển</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground leading-relaxed text-pretty">
              Phát triển chuyên sâu trong lĩnh vực <strong>dân sự và hôn nhân - gia đình</strong>, tập trung vào giải
              quyết tranh chấp dân sự, tư vấn pháp lý và hỗ trợ soạn thảo, chuẩn bị hồ sơ trong các vụ việc liên quan.
            </p>
          </CardContent>
        </Card>

        {/* Contact CTA */}
        <div className="text-center py-8">
          <h3 className="text-2xl font-bold text-foreground mb-4 text-balance">Sẵn sàng đóng góp và học hỏi</h3>
          <p className="text-muted-foreground mb-6 text-pretty">
            Tôi mong muốn có cơ hội thực tập và phát triển trong môi trường pháp lý chuyên nghiệp
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Mail className="w-4 h-4 mr-2" />
              Liên hệ qua Email
            </Button>
            <Button variant="outline" size="lg">
              <Phone className="w-4 h-4 mr-2" />
              Gọi điện thoại
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Nguyễn Hoàng Đoan Trang. Portfolio được tạo để thể hiện năng lực và kinh nghiệm pháp lý.
          </p>
        </div>
      </footer>
    </div>
  )
}
