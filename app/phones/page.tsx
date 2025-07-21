import Image from "next/image"
import Link from "next/link"
import { Calendar, User, MessageCircle, ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import "../globals.css"

export default function HomePage() {
  const featuredArticles = [
    {
      id: 1,
      title: "تقنية 5G الجديدة وتأثيرها على المستقبل",
      excerpt: "استكشف كيف ستغير تقنية الجيل الخامس من الاتصالات طريقة تفاعلنا مع التكنولوجيا",
      image: "/placeholder.svg?height=200&width=400",
      author: "أحمد محمد",
      date: "2024-01-15",
      comments: 24,
      category: "تقنية",
      featured: true,
    },
    {
      id: 2,
      title: "مقارنة شاملة بين شبكات الاتصال المختلفة",
      excerpt: "دليل شامل لفهم الفروقات بين شبكات 3G و 4G و 5G وأيهما الأنسب لك",
      image: "/placeholder.svg?height=200&width=400",
      author: "فاطمة علي",
      date: "2024-01-12",
      comments: 18,
      category: "مقارنات",
    },
    {
      id: 3,
      title: "نصائح لتحسين قوة إشارة الهاتف المحمول",
      excerpt: "طرق عملية وفعالة لتقوية إشارة هاتفك المحمول في المناطق ضعيفة التغطية",
      image: "/placeholder.svg?height=200&width=400",
      author: "محمد حسن",
      date: "2024-01-10",
      comments: 32,
      category: "نصائح",
    },
    {
      id: 4,
      title: "مستقبل إنترنت الأشياء مع شبكات الجيل الخامس",
      excerpt: "كيف ستمكن شبكات 5G من ثورة حقيقية في عالم إنترنت الأشياء والمدن الذكية",
      image: "/placeholder.svg?height=200&width=400",
      author: "سارة أحمد",
      date: "2024-01-08",
      comments: 15,
      category: "مستقبل",
    },
    {
      id: 5,
      title: "أمان الشبكات اللاسلكية: دليل المستخدم",
      excerpt: "كل ما تحتاج معرفته لحماية بياناتك عند استخدام الشبكات اللاسلكية العامة",
      image: "/placeholder.svg?height=200&width=400",
      author: "عمر خالد",
      date: "2024-01-05",
      comments: 28,
      category: "أمان",
    },
    {
      id: 6,
      title: "تطور شبكات الاتصال عبر التاريخ",
      excerpt: "رحلة عبر تاريخ تطور شبكات الاتصالات من الجيل الأول حتى الجيل الخامس",
      image: "/placeholder.svg?height=200&width=400",
      author: "ليلى محمود",
      date: "2024-01-03",
      comments: 21,
      category: "تاريخ",
    },
  ]

  const categories = [
    { name: "تقنية", count: 15 },
    { name: "مقارنات", count: 8 },
    { name: "نصائح", count: 12 },
    { name: "مستقبل", count: 6 },
    { name: "أمان", count: 9 },
    { name: "تاريخ", count: 4 },
  ]

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">4G</span>
              </div>
              <h1 className="text-xl font-bold text-gray-900">مدونة شبكة الهاتف</h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-blue-600 font-medium">
                الرئيسية
              </Link>
              <Link href="/articles" className="text-gray-600 hover:text-blue-600">
                المقالات
              </Link>
              <Link href="/categories" className="text-gray-600 hover:text-blue-600">
                التصنيفات
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-blue-600">
                من نحن
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-blue-600">
                اتصل بنا
              </Link>
            </nav>
            <Button variant="outline" size="sm">
              اشترك في النشرة
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-12">
          <div className="bg-gradient-to-l from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">مرحباً بك في مدونة شبكة الهاتف</h2>
              <p className="text-lg mb-6 text-blue-100">
                اكتشف أحدث التطورات في عالم شبكات الاتصالات والهواتف المحمولة. نقدم لك المحتوى الأكثر تميزاً وفائدة في
                هذا المجال.
              </p>
              <Button size="lg" variant="secondary">
                استكشف المقالات
                <ArrowLeft className="mr-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Article */}
            <section className="mb-8">
              <h3 className="text-2xl font-bold mb-6">المقال المميز</h3>
              <Card className="overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <Image
                      src={featuredArticles[0].image || "/placeholder.svg"}
                      alt={featuredArticles[0].title}
                      width={400}
                      height={250}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-6">
                    <Badge className="mb-3">{featuredArticles[0].category}</Badge>
                    <h4 className="text-xl font-bold mb-3 leading-tight">{featuredArticles[0].title}</h4>
                    <p className="text-gray-600 mb-4 leading-relaxed">{featuredArticles[0].excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{featuredArticles[0].author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{featuredArticles[0].date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        <span>{featuredArticles[0].comments} تعليق</span>
                      </div>
                    </div>
                    <Button>
                      اقرأ المزيد
                      <ArrowLeft className="mr-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </section>

            {/* Recent Articles */}
            <section>
              <h3 className="text-2xl font-bold mb-6">أحدث المقالات</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {featuredArticles.slice(1).map((article) => (
                  <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        width={400}
                        height={200}
                        className="w-full h-48 object-cover"
                      />
                      <Badge className="absolute top-3 right-3">{article.category}</Badge>
                    </div>
                    <CardContent className="p-4">
                      <h4 className="font-bold mb-2 leading-tight line-clamp-2">{article.title}</h4>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{article.excerpt}</p>
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                        <div className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{article.date}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <Button variant="outline" size="sm">
                          اقرأ المزيد
                        </Button>
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <MessageCircle className="w-3 h-3" />
                          <span>{article.comments}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Categories */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>التصنيفات</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category.name} className="flex items-center justify-between p-2 rounded hover:bg-gray-50">
                      <Link href={`/category/${category.name}`} className="text-gray-700 hover:text-blue-600">
                        {category.name}
                      </Link>
                      <Badge variant="secondary" className="text-xs">
                        {category.count}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Newsletter */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>اشترك في النشرة</CardTitle>
                <CardDescription>احصل على أحدث المقالات والأخبار في بريدك الإلكتروني</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="بريدك الإلكتروني"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <Button className="w-full">اشترك الآن</Button>
                </div>
              </CardContent>
            </Card>

            {/* Popular Posts */}
            <Card>
              <CardHeader>
                <CardTitle>المقالات الأكثر قراءة</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {featuredArticles.slice(0, 3).map((article, index) => (
                    <div key={article.id} className="flex gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-sm">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <Link
                          href={`/article/${article.id}`}
                          className="text-sm font-medium text-gray-900 hover:text-blue-600 line-clamp-2"
                        >
                          {article.title}
                        </Link>
                        <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                          <span>{article.date}</span>
                          <span>•</span>
                          <span>{article.comments} تعليق</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">4G</span>
                </div>
                <h3 className="text-lg font-bold">مدونة شبكة الهاتف</h3>
              </div>
              <p className="text-gray-400 text-sm">
                مصدرك الموثوق للمعلومات والأخبار في عالم شبكات الاتصالات والهواتف المحمولة.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">روابط سريعة</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/" className="hover:text-white">
                    الرئيسية
                  </Link>
                </li>
                <li>
                  <Link href="/articles" className="hover:text-white">
                    المقالات
                  </Link>
                </li>
                <li>
                  <Link href="/categories" className="hover:text-white">
                    التصنيفات
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white">
                    من نحن
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">التصنيفات</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/category/tech" className="hover:text-white">
                    تقنية
                  </Link>
                </li>
                <li>
                  <Link href="/category/tips" className="hover:text-white">
                    نصائح
                  </Link>
                </li>
                <li>
                  <Link href="/category/security" className="hover:text-white">
                    أمان
                  </Link>
                </li>
                <li>
                  <Link href="/category/future" className="hover:text-white">
                    مستقبل
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">تواصل معنا</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>البريد الإلكتروني: info@phoneNetwork.com</li>
                <li>الهاتف: +966 12 345 6789</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 مدونة شبكة الهاتف. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
