import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  Download,
  Rocket,
  Shield,
  Cloud,
  Database,
  Settings,
  Code,
  Server,
  GitBranch,
  Award,
  MapPin,
  Calendar,
  ExternalLink,
  ChevronDown,
  Play,
  Zap,
  Terminal
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import ankitProfile from '@/assets/ankit-profile.jpg';

const Portfolio = () => {
  const { toast } = useToast();
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [typedText, setTypedText] = useState('');
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    'DevOps Engineer',
    'Cloud Architect', 
    'Automation Specialist',
    'Release Engineer'
  ];

  // Typing animation effect
  useEffect(() => {
    const currentRoleText = roles[currentRole];
    let currentIndex = 0;
    let isDeleting = false;
    
    const typeEffect = setInterval(() => {
      if (!isDeleting && currentIndex < currentRoleText.length) {
        setTypedText(currentRoleText.slice(0, currentIndex + 1));
        currentIndex++;
      } else if (isDeleting && currentIndex > 0) {
        setTypedText(currentRoleText.slice(0, currentIndex - 1));
        currentIndex--;
      } else if (currentIndex === currentRoleText.length && !isDeleting) {
        setTimeout(() => { isDeleting = true; }, 2000);
      } else if (currentIndex === 0 && isDeleting) {
        isDeleting = false;
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearInterval(typeEffect);
  }, [currentRole]);

  // Particles animation data
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[data-section]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
  };

  const skills = [
    { name: 'Azure DevOps', level: 95, category: 'DevOps Tools' },
    { name: 'Terraform', level: 90, category: 'Infrastructure' },
    { name: 'PowerShell', level: 85, category: 'Scripting' },
    { name: 'Docker & Kubernetes', level: 88, category: 'Containers' },
    { name: 'CI/CD Pipelines', level: 92, category: 'Automation' },
    { name: 'Python', level: 80, category: 'Languages' },
    { name: 'Git & GitHub', level: 90, category: 'Version Control' },
    { name: 'SonarQube & Trivy', level: 85, category: 'Security' },
  ];

  const experiences = [
    {
      role: 'Cloud Analyst (DevOps Engineer)',
      company: 'Optimus Information Inc., India',
      period: 'Aug 2024 – Present',
      achievements: [
        'Automated Terraform provisioning reducing setup time by 60%',
        'Designed CI/CD pipelines serving 1,000+ users monthly',
        'Integrated SonarQube & Trivy for enhanced security',
        'Implemented blue-green deployments with zero downtime',
        'Received 3 Spot Awards for exceptional performance'
      ]
    }
  ];

  const projects = [
    {
      title: 'Enterprise Application Release Automation',
      description: 'Built automated 3-tier architecture serving 1,000+ users monthly with 60% reduction in provisioning time.',
      tech: ['Azure DevOps', 'Terraform', 'AKS', 'Trivy'],
      achievements: [
        'Automated infrastructure provisioning with Terraform',
        'Implemented CI/CD pipelines with security integration',
        'Configured blue-green deployment strategy',
        'Achieved 99.9% uptime SLA'
      ]
    },
    {
      title: 'Application Migration & Security Automation',
      description: 'Migrated legacy applications to Azure Container Apps with comprehensive security integration.',
      tech: ['Azure Container Apps', 'Defender', 'SonarQube', 'GitHub Actions'],
      achievements: [
        'Migrated 15+ applications to containerized environment',
        'Integrated Microsoft Defender for enhanced security',
        'Automated quality gates with SonarQube',
        'Implemented automated approval workflows'
      ]
    }
  ];

  const services = [
    {
      icon: Cloud,
      title: 'DevOps Consulting & Automation',
      description: 'Strategic DevOps implementation and process automation for scalable software delivery.'
    },
    {
      icon: GitBranch,
      title: 'CI/CD Pipeline Development',
      description: 'Design and implement robust CI/CD pipelines with automated testing and deployment.'
    },
    {
      icon: Server,
      title: 'Cloud Infrastructure Setup',
      description: 'Azure cloud infrastructure setup with Infrastructure as Code using Terraform.'
    },
    {
      icon: Shield,
      title: 'Containerization & Security',
      description: 'Docker containerization with integrated security scanning and compliance automation.'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Enhanced Hero Section */}
      <section className="hero-bg min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated Particles Background */}
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                animationDuration: `${particle.duration}s`,
                animationDelay: `${particle.delay}s`,
              }}
            />
          ))}
        </div>

        {/* Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-primary/20 rounded-full animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-32 h-32 border border-accent/20 rotate-45 animate-spin" style={{ animationDuration: '20s' }} />
          <div className="absolute top-1/2 left-1/6 w-16 h-16 bg-primary/10 rotate-12 animate-float" />
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div 
            className={`fade-in ${visibleSections.has('hero') ? 'visible' : ''}`}
            data-section
            id="hero"
          >
            {/* Profile Image with Enhanced Animation */}
            <div className="mb-8 relative">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity animate-glow" />
                <img
                  src={ankitProfile}
                  alt="Ankit Pathak - DevOps Engineer"
                  className="relative w-40 h-40 rounded-full mx-auto border-4 border-primary z-10 group-hover:scale-105 transition-transform duration-300"
                />
                {/* Tech Icons Orbiting */}
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 p-2 bg-primary rounded-full">
                    <Cloud className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 p-2 bg-accent rounded-full">
                    <Server className="h-4 w-4 text-accent-foreground" />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 p-2 bg-primary rounded-full">
                    <GitBranch className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div className="absolute top-1/2 -left-2 transform -translate-y-1/2 p-2 bg-accent rounded-full">
                    <Terminal className="h-4 w-4 text-accent-foreground" />
                  </div>
                </div>
              </div>
              
              {/* Status Indicator */}
              <div className="absolute -bottom-2 right-1/2 transform translate-x-1/2 flex items-center gap-2 bg-card border border-border rounded-full px-3 py-1">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                <span className="text-xs font-medium">Available for work</span>
              </div>
            </div>

            {/* Enhanced Typography */}
            <div className="space-y-4 mb-8">
              <h1 className="text-6xl md:text-8xl font-bold mb-4 relative">
                <span className="gradient-text">Ankit Pathak</span>
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur-xl -z-10" />
              </h1>
              
              {/* Typing Animation */}
              <div className="h-16 flex items-center justify-center">
                <h2 className="text-2xl md:text-4xl font-semibold text-primary">
                  {typedText}
                  <span className="animate-pulse text-accent">|</span>
                </h2>
              </div>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Automating deployments, securing pipelines, and scaling cloud infrastructure 
                <span className="text-primary font-medium"> with 1+ years of experience</span>
              </p>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-md mx-auto mb-12">
              <div className="text-center p-4 bg-card/50 backdrop-blur-sm rounded-lg border border-border">
                <div className="text-2xl font-bold text-primary">3</div>
                <div className="text-sm text-muted-foreground">Spot Awards</div>
              </div>
              <div className="text-center p-4 bg-card/50 backdrop-blur-sm rounded-lg border border-border">
                <div className="text-2xl font-bold text-accent">1000+</div>
                <div className="text-sm text-muted-foreground">Users Served</div>
              </div>
              <div className="text-center p-4 bg-card/50 backdrop-blur-sm rounded-lg border border-border">
                <div className="text-2xl font-bold text-primary">60%</div>
                <div className="text-sm text-muted-foreground">Time Saved</div>
              </div>
            </div>

            {/* Enhanced CTAs */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button 
                size="lg" 
                className="glow-primary relative overflow-hidden group"
                onClick={() => scrollToSection('projects')}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-glow opacity-0 group-hover:opacity-100 transition-opacity" />
                <Rocket className="mr-2 h-5 w-5 relative z-10" />
                <span className="relative z-10">View My Work</span>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="glow-accent relative overflow-hidden group border-2"
                onClick={() => scrollToSection('contact')}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Mail className="mr-2 h-5 w-5 relative z-10" />
                <span className="relative z-10">Get in Touch</span>
              </Button>

              <Button 
                variant="ghost" 
                size="lg" 
                className="group"
              >
                <Play className="mr-2 h-5 w-5 group-hover:text-primary transition-colors" />
                Watch Demo
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4 mb-12">
              <a 
                href="https://linkedin.com/in/ankit-pathak-8a8646207" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-card/50 backdrop-blur-sm border border-border rounded-lg hover:border-primary transition-colors glow-primary"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com/Ankit-pathak23" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-card/50 backdrop-blur-sm border border-border rounded-lg hover:border-accent transition-colors glow-accent"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="mailto:ankishtechsolution@gmail.com"
                className="p-3 bg-card/50 backdrop-blur-sm border border-border rounded-lg hover:border-primary transition-colors glow-primary"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <div className="flex flex-col items-center gap-2">
                <span className="text-sm text-muted-foreground">Scroll to explore</span>
                <ChevronDown className="h-6 w-6 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div 
            className={`fade-in ${visibleSections.has('about') ? 'visible' : ''}`}
            data-section
            id="about"
          >
            <h2 className="text-4xl font-bold text-center mb-12 gradient-text">About Me</h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-muted-foreground mb-6">
                  DevOps Engineer with 1+ years of experience in release engineering, CI/CD automation, 
                  and infrastructure management. Expertise in Azure DevOps pipeline development, Git-based 
                  version control, and end-to-end deployment optimization.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Certified Azure DevOps Engineer with proven success in automating software releases, 
                  integrating QA tools, and enhancing security in production environments.
                </p>
                <Button variant="outline" className="glow-primary">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold mb-6">Education</h3>
                <div className="space-y-4">
                  <div className="tech-card">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary rounded-lg">
                        <Award className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">B.Tech in Computer Science</h4>
                        <p className="text-muted-foreground">Maulana Abul Kalam Azad University of Technology, West Bengal</p>
                        <p className="text-sm text-muted-foreground">2024 • CGPA: 8.46</p>
                      </div>
                    </div>
                  </div>
                  <div className="tech-card">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-accent rounded-lg">
                        <Calendar className="h-5 w-5 text-accent-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold">12th Grade</h4>
                        <p className="text-muted-foreground">Bihar Public School (CBSE Board) • 2020</p>
                      </div>
                    </div>
                  </div>
                  <div className="tech-card">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-accent rounded-lg">
                        <Calendar className="h-5 w-5 text-accent-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold">10th Grade</h4>
                        <p className="text-muted-foreground">Cambridge Senior Secondary School (CBSE Board) • 2018</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div 
            className={`fade-in ${visibleSections.has('experience') ? 'visible' : ''}`}
            data-section
            id="experience"
          >
            <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Experience</h2>
            <div className="max-w-4xl mx-auto">
              {experiences.map((exp, index) => (
                <div key={index} className="tech-card mb-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-primary rounded-lg glow-primary">
                      <Rocket className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{exp.role}</h3>
                      <p className="text-lg text-primary mb-1">{exp.company}</p>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid gap-3">
                    {exp.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Shield className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div 
            className={`fade-in ${visibleSections.has('skills') ? 'visible' : ''}`}
            data-section
            id="skills"
          >
            <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Skills & Expertise</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="tech-card">
                  <div className="flex items-center gap-3 mb-4">
                    <Code className="h-5 w-5 text-primary" />
                    <div>
                      <h4 className="font-semibold">{skill.name}</h4>
                      <p className="text-sm text-muted-foreground">{skill.category}</p>
                    </div>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <div className="text-right text-sm text-muted-foreground mt-2">
                    {skill.level}%
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div 
            className={`fade-in ${visibleSections.has('services') ? 'visible' : ''}`}
            data-section
            id="services"
          >
            <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="tech-card text-center">
                    <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div 
            className={`fade-in ${visibleSections.has('projects') ? 'visible' : ''}`}
            data-section
            id="projects"
          >
            <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Featured Projects</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="tech-card">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-accent rounded-lg">
                      <Database className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {project.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Settings className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{achievement}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="outline" className="w-full mt-4">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Details
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div 
            className={`fade-in ${visibleSections.has('contact') ? 'visible' : ''}`}
            data-section
            id="contact"
          >
            <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Get In Touch</h2>
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary rounded-lg glow-primary">
                      <Mail className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:ankishtechsolution@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                        ankishtechsolution@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-accent rounded-lg glow-accent">
                      <Phone className="h-5 w-5 text-accent-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <a href="tel:+916203370516" className="text-muted-foreground hover:text-primary transition-colors">
                        +91 6203370516
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary rounded-lg glow-primary">
                      <Linkedin className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">LinkedIn</p>
                      <a 
                        href="https://linkedin.com/in/ankit-pathak-8a8646207" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        linkedin.com/in/ankit-pathak-8a8646207
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-accent rounded-lg glow-accent">
                      <Github className="h-5 w-5 text-accent-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">GitHub</p>
                      <a 
                        href="https://github.com/Ankit-pathak23" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        github.com/Ankit-pathak23
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <Card className="tech-card border-0">
                <CardHeader>
                  <CardTitle>Send a Message</CardTitle>
                  <CardDescription>
                    I'd love to hear about your project. Let's discuss how I can help.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Your name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="your@email.com" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="Project discussion" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell me about your project..." 
                        rows={5}
                        required 
                      />
                    </div>
                    <Button type="submit" className="w-full glow-primary">
                      <Mail className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border bg-muted/30">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2024 Ankit Pathak. Built with passion for DevOps and automation.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;