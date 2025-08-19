"use client";

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Modern online store with AI-powered recommendations and seamless checkout experience.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Next.js', 'Stripe', 'AI/ML', 'PostgreSQL'],
    category: 'E-Commerce',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'AI Chatbot Dashboard',
    description: 'Intelligent customer service automation with natural language processing capabilities.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Python', 'OpenAI', 'WebSocket'],
    category: 'AI Automation',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Mobile Banking App',
    description: 'Secure and user-friendly mobile banking application with biometric authentication.',
    image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Blockchain'],
    category: 'Mobile App',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Healthcare Management System',
    description: 'Comprehensive healthcare platform for patient management and telemedicine.',
    image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'WebRTC'],
    category: 'Web Application',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Real Estate Platform',
    description: 'Property listing and management platform with virtual tour capabilities.',
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', '3D.js'],
    category: 'Web Application',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Learning Management System',
    description: 'Interactive online learning platform with progress tracking and assessments.',
    image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    category: 'Education',
    liveUrl: '#',
    githubUrl: '#',
  },
];

export default function ProjectsGrid() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-2">
                      <Button size="sm" variant="secondary" asChild>
                        <Link href={project.liveUrl} target="_blank">
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button size="sm" variant="secondary" asChild>
                        <Link href={project.githubUrl} target="_blank">
                          <Github className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-2 py-1 bg-primary text-primary-foreground rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Interested in working with us on your next project?
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">
              Start Your Project
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}