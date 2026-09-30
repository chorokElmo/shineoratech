'use client';

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';
import type { PointerEvent } from 'react';
import './hero-devices.css';

const points = [
  ['design', 'Design moderne', 'Une identité qui vous différencie.'],
  ['performance', 'Performance', 'Des sites rapides et optimisés.'],
  ['security', 'Sécurité', 'Vos données en toute sécurité.'],
] as const;
const asset = '/brand/shineoratech-devices-clean.png';

export function HeroDevices() {
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 90, damping: 24 });
  const sy = useSpring(y, { stiffness: 90, damping: 24 });
  const rotateX = useTransform(sy, [-1, 1], [2, -2]);
  const rotateY = useTransform(sx, [-1, 1], [-2.5, 2.5]);
  const laptopX = useTransform(sx, [-1, 1], [-3, 3]);
  const phoneX = useTransform(sx, [-1, 1], [-6, 6]);
  const phoneY = useTransform(sy, [-1, 1], [-3, 3]);

  function move(event: PointerEvent<HTMLDivElement>) {
    if (reduced || event.pointerType !== 'mouse' || !window.matchMedia('(min-width: 768px) and (hover: hover) and (pointer: fine)').matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const intensity = window.innerWidth < 1100 ? 0.45 : 1;
    x.set(Math.max(-1, Math.min(1, (event.clientX - rect.left) / rect.width * 2 - 1)) * intensity);
    y.set(Math.max(-1, Math.min(1, (event.clientY - rect.top) / rect.height * 2 - 1)) * intensity);
  }
  function reset() { x.set(0); y.set(0); }

  return <div className="hero-devices" onPointerMove={move} onPointerLeave={reset} onPointerCancel={reset}>
    <div className="hero-devices-float">
      <div className="hero-devices-glow" aria-hidden="true" />
      <motion.div className="hero-devices-depth" style={reduced ? undefined : { rotateX, rotateY }}>
        <motion.div className="hero-device-laptop" style={reduced ? undefined : { x: laptopX }}>
          <motion.div initial={reduced ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            <svg viewBox="0 0 1440 820" role="img" aria-label="Maquette illustrative du tableau de bord ShineoraTech sur ordinateur, avec une petite plante et des données fictives"><image href={asset} width="1919" height="820" /></svg>
          </motion.div>
        </motion.div>
        <motion.div className="hero-device-phone" style={reduced ? undefined : { x: phoneX, y: phoneY }}>
          <motion.div initial={reduced ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}>
            <div className="hero-device-phone-hover"><svg viewBox="1540 120 379 700" role="img" aria-label="Maquette illustrative du site ShineoraTech sur smartphone"><image href={asset} width="1919" height="820" /></svg></div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
    {points.map(([key, title, description]) => <div className={`hero-hotspot hero-hotspot-${key}`} key={key}>
      <button type="button" aria-label={title} aria-describedby={`hero-tooltip-${key}`}><span /></button>
      <div className="hero-hotspot-tooltip" id={`hero-tooltip-${key}`} role="tooltip"><strong>{title}</strong><span>{description}</span></div>
    </div>)}
  </div>;
}
