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
import devopsHero from '@/assets/devops-hero-illustration.png';
import cloudIllustration from '@/assets/cloud-illustration.png';
import automationIllustration from '@/assets/automation-illustration.png';

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
      {/* Modern Hero Section */}
      <section className="hero-modern min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Floating geometric shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-20 h-20 bg-primary/10 rounded-full animate-float" />
          <div className="absolute top-40 right-32 w-16 h-16 bg-secondary/10 rounded-lg rotate-45 animate-pulse" />
          <div className="absolute bottom-32 left-40 w-12 h-12 bg-accent/10 rounded-full animate-bounce" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div 
              className={`fade-in ${visibleSections.has('hero') ? 'visible' : ''}`}
              data-section
              id="hero"
            >
              {/* Profile Image with Modern Design */}
              <div className="mb-8 relative">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity" />
                  <img
                    src={ankitProfile}
                    alt="Ankit Pathak - DevOps Engineer"
                    className="relative w-32 h-32 rounded-2xl mx-auto lg:mx-0 border-4 border-background shadow-2xl z-10 group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Status Badge */}
                  <div className="absolute -bottom-2 -right-2 flex items-center gap-2 bg-card border border-border rounded-full px-3 py-1 shadow-lg">
                    <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                    <span className="text-xs font-medium">Available</span>
                  </div>
                </div>
              </div>

              {/* Typography */}
              <div className="space-y-6 text-center lg:text-left">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="gradient-text">Ankit Pathak</span>
                </h1>
                
                {/* Typing Animation */}
                <div className="h-16 flex items-center justify-center lg:justify-start">
                  <h2 className="text-2xl lg:text-3xl font-semibold text-primary">
                    {typedText}
                    <span className="animate-pulse text-accent">|</span>
                  </h2>
                </div>
                
                <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-lg">
                  Automating deployments, securing pipelines, and scaling cloud infrastructure 
                  <span className="text-primary font-semibold"> with 1+ years of proven experience</span>
                </p>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto lg:mx-0">
                  <div className="text-center p-4 modern-card">
                    <div className="text-2xl font-bold text-primary">3</div>
                    <div className="text-sm text-muted-foreground">Awards</div>
                  </div>
                  <div className="text-center p-4 modern-card">
                    <div className="text-2xl font-bold text-secondary">1K+</div>
                    <div className="text-sm text-muted-foreground">Users</div>
                  </div>
                  <div className="text-center p-4 modern-card">
                    <div className="text-2xl font-bold text-accent">60%</div>
                    <div className="text-sm text-muted-foreground">Efficiency</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button 
                    size="lg" 
                    className="btn-primary"
                    onClick={() => scrollToSection('projects')}
                  >
                    <Rocket className="mr-2 h-5 w-5" />
                    View My Work
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() => scrollToSection('contact')}
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Get in Touch
                  </Button>
                </div>

                {/* Social Links */}
                <div className="flex justify-center lg:justify-start gap-4">
                  <a 
                    href="https://linkedin.com/in/ankit-pathak-8a8646207" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-300"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://github.com/Ankit-pathak23" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-secondary/10 hover:bg-secondary hover:text-secondary-foreground rounded-lg transition-all duration-300"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a 
                    href="mailto:ankishtechsolution@gmail.com"
                    className="p-3 bg-accent/10 hover:bg-accent hover:text-accent-foreground rounded-lg transition-all duration-300"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Illustration */}
            <div className="hidden lg:block relative">
              <div className="relative">
                <img
                  src={devopsHero}
                  alt="DevOps Infrastructure Illustration"
                  className="w-full h-auto animate-float"
                />
                
                {/* Floating Tech Icons */}
                <div className="absolute top-10 left-10 p-3 bg-primary rounded-lg shadow-lg animate-bounce">
                  <Cloud className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="absolute top-20 right-10 p-3 bg-secondary rounded-lg shadow-lg animate-pulse">
                  <Server className="h-6 w-6 text-secondary-foreground" />
                </div>
                <div className="absolute bottom-20 left-20 p-3 bg-accent rounded-lg shadow-lg animate-float">
                  <GitBranch className="h-6 w-6 text-accent-foreground" />
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm text-muted-foreground">Explore my work</span>
              <ChevronDown className="h-6 w-6 text-primary" />
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
                <div className="modern-card">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">B.Tech in Computer Science</h4>
                      <p className="text-muted-foreground">Maulana Abul Kalam Azad University of Technology, West Bengal</p>
                      <p className="text-sm text-muted-foreground">2024 • CGPA: 8.46</p>
                    </div>
                  </div>
                </div>
                <div className="modern-card">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-secondary/10 rounded-xl">
                      <Calendar className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">12th Grade</h4>
                      <p className="text-muted-foreground">Bihar Public School (CBSE Board) • 2020</p>
                    </div>
                  </div>
                </div>
                <div className="modern-card">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-xl">
                      <Calendar className="h-6 w-6 text-accent" />
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
                <div key={index} className="modern-card mb-8">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="p-4 bg-primary/10 rounded-2xl">
                      <Rocket className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
                      <p className="text-lg text-primary font-semibold mb-1">{exp.company}</p>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid gap-4">
                    {exp.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="p-2 bg-success/10 rounded-lg mt-0.5">
                          <Shield className="h-4 w-4 text-success" />
                        </div>
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
                <div key={index} className="modern-card text-center">
                  <div className="flex items-center justify-center mb-4">
                    <div className="p-4 bg-primary/10 rounded-2xl">
                      <Code className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h4 className="font-semibold text-lg mb-2">{skill.name}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{skill.category}</p>
                  <div className="progress-bar mb-2">
                    <div 
                      className="progress-fill"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <div className="text-right text-sm font-semibold text-primary">
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
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="modern-card text-center group">
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-primary/5 rounded-3xl scale-110 group-hover:scale-125 transition-transform duration-300" />
                      <div className="relative p-6 bg-primary/10 rounded-3xl w-fit mx-auto">
                        <Icon className="h-12 w-12 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    <Button variant="outline" className="mt-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      Learn More
                    </Button>
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
                <div key={index} className="modern-card group">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300" />
                      <div className="relative p-4 bg-accent/10 rounded-2xl">
                        <Database className="h-8 w-8 text-accent" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">{project.description}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    {project.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="p-1.5 bg-success/10 rounded-lg mt-0.5">
                          <Settings className="h-3 w-3 text-success" />
                        </div>
                        <span className="text-sm text-muted-foreground">{achievement}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="outline" className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project Details
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
              
              <Card className="modern-card border-0 shadow-2xl">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Send a Message</CardTitle>
                  <CardDescription className="text-lg">
                    I'd love to hear about your project. Let's discuss how I can help.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-semibold">Name</Label>
                        <Input id="name" placeholder="Your name" required className="h-12" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-semibold">Email</Label>
                        <Input id="email" type="email" placeholder="your@email.com" required className="h-12" />
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