"use client";

import { motion } from 'framer-motion';

const clients = [
  { name: 'TechCorp', logo: 'TC' },
  { name: 'InnovateLab', logo: 'IL' },
  { name: 'DigitalFlow', logo: 'DF' },
  { name: 'CloudSync', logo: 'CS' },
  { name: 'DataVision', logo: 'DV' },
  { name: 'SmartSolutions', logo: 'SS' },
];

export default function ClientLogos() {
  return (
    <section className="py-16 border-y bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-muted-foreground mb-8">
            Trusted by innovative companies across Africa
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
        >
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
              <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center hover:bg-primary/10 transition-colors group">
                <span className="text-lg font-bold text-muted-foreground group-hover:text-primary transition-colors">
                  {client.logo}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}