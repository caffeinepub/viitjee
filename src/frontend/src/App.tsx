import { useActor } from './hooks/useActor';
import { useQuery } from '@tanstack/react-query';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Separator } from './components/ui/separator';
import { BookOpen, Target, TrendingUp, Users, Award, Zap, Heart, Mail } from 'lucide-react';

function App() {
  const { actor, isFetching } = useActor();

  // Test backend connectivity
  const { data: greeting } = useQuery({
    queryKey: ['greeting'],
    queryFn: async () => {
      if (!actor) return null;
      return actor.greet('viitjee student');
    },
    enabled: !!actor && !isFetching,
  });

  // Subject icon mapping
  const subjectIcons: Record<string, { path: string; alt: string }> = {
    Physics: {
      path: '/assets/generated/physics-tab-icon.dim_256x256.png',
      alt: 'Physics icon',
    },
    Chemistry: {
      path: '/assets/generated/chemistry-tab-icon.dim_256x256.png',
      alt: 'Chemistry icon',
    },
    Mathematics: {
      path: '/assets/generated/math-tab-icon.dim_256x256.png',
      alt: 'Mathematics icon',
    },
  };

  // Subject header image mapping
  const subjectHeaderImages: Record<string, { path: string; alt: string }> = {
    Physics: {
      path: '/assets/generated/physics-course-header.dim_1200x400.png',
      alt: 'Physics course header',
    },
    Chemistry: {
      path: '/assets/generated/chemistry-course-header.dim_1200x400.png',
      alt: 'Chemistry course header',
    },
    Mathematics: {
      path: '/assets/generated/math-course-header.dim_1200x400.png',
      alt: 'Mathematics course header',
    },
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <img 
              src="/assets/generated/viitjee-logo.dim_256x256.png" 
              alt="viitjee logo" 
              className="w-10 h-10 object-contain"
            />
            <div>
              <h1 className="text-xl font-bold tracking-tight">viitjee</h1>
              <p className="text-xs text-muted-foreground">by Venkatesh</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">
              Features
            </a>
            <a href="#courses" className="text-sm font-medium hover:text-primary transition-colors">
              Courses
            </a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </a>
            <Button size="sm" variant="outline" asChild>
              <a href="mailto:viitjeetec@gmail.com" className="gap-2">
                <Mail className="w-4 h-4" />
                Contact Us
              </a>
            </Button>
            <Button size="sm">Get Started</Button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 text-sm font-medium bg-accent text-accent-foreground rounded-full">
                Your Path to JEE Success
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Master JEE with
                <span className="block text-primary mt-2">Expert Guidance</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl">
                Comprehensive preparation platform for JEE Main and Advanced. Learn from structured courses, practice with thousands of problems, and track your progress.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gap-2">
                  <Zap className="w-4 h-4" />
                  Start Learning
                </Button>
                <Button size="lg" variant="outline">
                  Explore Courses
                </Button>
              </div>
              {greeting && (
                <p className="text-sm text-muted-foreground italic">
                  {greeting}
                </p>
              )}
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <BookOpen className="w-24 h-24 mx-auto text-primary" />
                  <p className="text-2xl font-bold">Excellence in Education</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Separator />

        {/* Stats Section */}
        <section className="container py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, label: 'Active Students', value: '10,000+' },
              { icon: BookOpen, label: 'Video Lectures', value: '5,000+' },
              { icon: Target, label: 'Practice Problems', value: '50,000+' },
              { icon: Award, label: 'Success Rate', value: '95%' },
            ].map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <stat.icon className="w-8 h-8 mx-auto text-primary" />
                <p className="text-3xl font-bold">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <Separator />

        {/* Features Section */}
        <section id="features" className="container py-20">
          <div className="text-center space-y-4 mb-12">
            <h3 className="text-3xl md:text-4xl font-bold">Why Choose viitjee?</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to excel in your JEE preparation journey
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: BookOpen,
                title: 'Comprehensive Content',
                description: 'Complete syllabus coverage for JEE Main and Advanced with detailed explanations and examples.',
              },
              {
                icon: Target,
                title: 'Targeted Practice',
                description: 'Topic-wise and difficulty-level practice problems to strengthen your concepts.',
              },
              {
                icon: TrendingUp,
                title: 'Progress Tracking',
                description: 'Monitor your performance with detailed analytics and personalized recommendations.',
              },
              {
                icon: Users,
                title: 'Expert Faculty',
                description: 'Learn from experienced teachers with proven track records in JEE coaching.',
              },
              {
                icon: Award,
                title: 'Mock Tests',
                description: 'Full-length mock tests simulating actual JEE exam patterns and difficulty.',
              },
              {
                icon: Zap,
                title: 'Doubt Resolution',
                description: 'Quick doubt clearing sessions to ensure no concept is left unclear.',
              },
            ].map((feature, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <Separator />

        {/* Courses Section */}
        <section id="courses" className="container py-20">
          <div className="text-center space-y-4 mb-12">
            <h3 className="text-3xl md:text-4xl font-bold">Featured Courses</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Structured learning paths designed for JEE success
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                subject: 'Physics',
                topics: 'Mechanics, Thermodynamics, Electromagnetism',
                lessons: '150+ Lessons',
              },
              {
                subject: 'Chemistry',
                topics: 'Physical, Organic, Inorganic Chemistry',
                lessons: '140+ Lessons',
              },
              {
                subject: 'Mathematics',
                topics: 'Calculus, Algebra, Coordinate Geometry',
                lessons: '160+ Lessons',
              },
            ].map((course, index) => (
              <Card key={index} className="overflow-hidden">
                <img
                  src={subjectHeaderImages[course.subject].path}
                  alt={subjectHeaderImages[course.subject].alt}
                  className="w-full h-32 object-cover"
                />
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <img
                      src={subjectIcons[course.subject].path}
                      alt={subjectIcons[course.subject].alt}
                      className="w-10 h-10 object-contain"
                    />
                    <CardTitle className="text-xl">{course.subject}</CardTitle>
                  </div>
                  <CardDescription className="space-y-2">
                    <p>{course.topics}</p>
                    <p className="font-medium text-foreground">{course.lessons}</p>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" variant="outline">
                    Explore Course
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator />

        {/* About Section */}
        <section id="about" className="container py-20">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold">About viitjee</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              viitjee is a comprehensive educational platform dedicated to helping students achieve their dreams of cracking JEE Main and Advanced. Founded by Venkatesh, our mission is to provide high-quality, accessible education that empowers students with the knowledge and confidence they need to succeed.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With a focus on conceptual clarity, rigorous practice, and personalized learning, we've helped thousands of students reach their goals. Our expert faculty, cutting-edge technology, and student-centric approach make us the preferred choice for JEE preparation.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container py-20">
          <Card className="bg-primary text-primary-foreground border-0">
            <CardHeader className="text-center space-y-4 py-12">
              <CardTitle className="text-3xl md:text-4xl">
                Ready to Start Your Journey?
              </CardTitle>
              <CardDescription className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
                Join thousands of successful students who chose viitjee for their JEE preparation
              </CardDescription>
              <div className="flex flex-wrap gap-4 justify-center pt-4">
                <Button size="lg" variant="secondary">
                  Get Started Now
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Schedule a Demo
                </Button>
              </div>
            </CardHeader>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/50">
        <div className="container py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <img 
                  src="/assets/generated/viitjee-logo.dim_256x256.png" 
                  alt="viitjee logo" 
                  className="w-10 h-10 object-contain"
                />
                <div>
                  <h4 className="font-bold">viitjee</h4>
                  <p className="text-xs text-muted-foreground">by Venkatesh</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Your trusted partner for JEE preparation
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Courses</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Physics</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Chemistry</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Mathematics</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Resources</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Study Material</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Mock Tests</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Previous Papers</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Company</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">About Us</a></li>
                <li>
                  <a 
                    href="mailto:viitjeetec@gmail.com" 
                    className="hover:text-foreground transition-colors flex items-center gap-1"
                  >
                    <Mail className="w-3 h-3" />
                    Contact
                  </a>
                </li>
                <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} viitjee by Venkatesh. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'viitjee')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors underline"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
