'use client';

import { useEffect, useRef } from 'react';

export default function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    
    // Configuración
    const maxDistance = 220; 
    const colors = ['#f97316', '#3b82f6'];

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      
      // Usar setTransform en lugar de scale para evitar acumulaciones si resize se llama múltiples veces
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    window.addEventListener('resize', resize);
    resize();

    const calculateParticleCount = () => {
      const area = window.innerWidth * window.innerHeight;
      return Math.min(Math.floor(area / 20000), 250); 
    };

    class Particle {
      x: number;
      y: number;
      angle: number;
      speed: number;
      angleVelocity: number;
      color: string;
      radius: number;

      constructor() {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.angle = Math.random() * Math.PI * 2;
        this.speed = Math.random() * 1.5 + 0.5; // Movimiento suave
        this.angleVelocity = (Math.random() - 0.5) * 0.03; // Rotación lenta para curvas
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.radius = Math.random() * 2 + 1; 
      }

      update() {
        // Danza del cisne: Curvas azarosas y orgánicas
        this.angle += this.angleVelocity;
        
        // Cambio de dirección esporádico para más fluidez plástica
        if (Math.random() < 0.02) {
          this.angleVelocity += (Math.random() - 0.5) * 0.02;
          // Limitar la velocidad angular
          this.angleVelocity = Math.max(-0.05, Math.min(0.05, this.angleVelocity));
        }

        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;

        // Rebote suave en los bordes modificando el ángulo
        if (this.x <= 0) {
          this.x = 0;
          this.angle = Math.PI - this.angle;
        } else if (this.x >= window.innerWidth) {
          this.x = window.innerWidth;
          this.angle = Math.PI - this.angle;
        }

        if (this.y <= 0) {
          this.y = 0;
          this.angle = -this.angle;
        } else if (this.y >= window.innerHeight) {
          this.y = window.innerHeight;
          this.angle = -this.angle;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      const count = calculateParticleCount();
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      
      // Efecto de persistencia/rastro plástico (fading trail en canvas transparente)
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillStyle = 'rgba(255, 255, 255, 0.06)'; // Reduce la opacidad de los trazos viejos
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
      ctx.globalCompositeOperation = 'source-over';

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Reducido maxDistance para no saturar tanto con el trail
          if (distance < maxDistance * 0.8) {
            ctx.beginPath();
            // Opacidad basada en la distancia, más suave para la danza
            const opacity = (1 - (distance / (maxDistance * 0.8))) * 0.5;
            
            // Mezclar colores de las dos partículas
            const gradient = ctx.createLinearGradient(particles[i].x, particles[i].y, particles[j].x, particles[j].y);
            gradient.addColorStop(0, particles[i].color + Math.floor(opacity * 255).toString(16).padStart(2, '0'));
            gradient.addColorStop(1, particles[j].color + Math.floor(opacity * 255).toString(16).padStart(2, '0'));
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1; // Un poco más grueso para que el trail se note plástico
            ctx.moveTo(particles[i].x, particles[i].y);
            // Hacer una leve curva de Bezier hacia el destino para más plasticidad
            const cx = (particles[i].x + particles[j].x) / 2 + (Math.random() - 0.5) * 12;
            const cy = (particles[i].y + particles[j].y) / 2 + (Math.random() - 0.5) * 12;
            ctx.quadraticCurveTo(cx, cy, particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-35"
      style={{ mixBlendMode: 'multiply' }}
    />
  );
}
