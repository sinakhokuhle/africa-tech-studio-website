"use client";

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Clock, Linkedin, Twitter, Github, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    content: 'hello@africatechstudio.com',
    description: 'Send us an email anytime',
    href: 'mailto:hello@africatechstudio.com',
  },
  {
    icon: Phone,
    title: 'Call Us',
    content: '+27 67 032 2668',
    description: 'Call Sinakokuhle directly',
    href: 'tel:+27670322668',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    content: '+27 67 032 2668',
    description: 'Message us on WhatsApp',
    href: 'https://wa.me/27670322668',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    content: 'South Africa',
    description: 'Based in South Africa',
    href: '#',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    content: 'Mon - Fri: 8am - 5pm',
    description: 'Weekend support available',
    href: '#',
  },
];

const socialLinks = [
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'GitHub', href: '#', icon: Github },
];

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      {/* Contact Information */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
        <div className="space-y-4">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{info.title}</h3>
                      <p className="text-foreground font-medium">{info.content}</p>
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Social Media */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
        <div className="flex space-x-3">
          {socialLinks.map((social) => (
            <Button key={social.name} variant="outline" size="icon" asChild>
              <Link href={social.href}>
                <social.icon className="h-4 w-4" />
              </Link>
            </Button>
          ))}
        </div>
      </div>

      {/* Google Maps Embed (placeholder coordinates for Africa) */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Our Location</h3>
        <Card>
          <CardContent className="p-0">
            <iframe
              title="Africa Tech Studio Location"
              className="w-full aspect-video rounded-lg"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6352797.539071451!2d3.1334384499999996!3d9.081999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf51e9b1fe1db%3A0x2040f6c2c5d5f2!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sNG!4v1700000000000"
            />
          </CardContent>
        </Card>
      </div>

      {/* Quick Response Promise */}
      <Card className="bg-primary text-primary-foreground">
        <CardContent className="p-6 text-center">
          <Clock className="h-8 w-8 mx-auto mb-3" />
          <h3 className="font-semibold mb-2">Quick Response Guarantee</h3>
          <p className="text-sm opacity-90">
            We respond to all inquiries within 24 hours during business days.
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}