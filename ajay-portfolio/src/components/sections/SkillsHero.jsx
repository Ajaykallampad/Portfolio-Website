// SkillsHero.jsx — Three.js particles + Canvas 2D clean logos + HTML overlay
// Default export. Requires only React and Three.js (already installed).
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

// ─────────────────────────────────────────────────────────────────────────────
//  LAYER 2 — SKILL DEFINITIONS
//  35 real devicon CDN images + 4 offscreen-canvas fallbacks
// ─────────────────────────────────────────────────────────────────────────────
const BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/';

const CDN_SKILLS = [
  { url: `${BASE}python/python-original.svg`, accent: '#3776AB' },
  { url: `${BASE}javascript/javascript-original.svg`, accent: '#F7DF1E' },
  { url: `${BASE}typescript/typescript-original.svg`, accent: '#3178C6' },
  { url: `${BASE}html5/html5-original.svg`, accent: '#E34F26' },
  { url: `${BASE}css3/css3-original.svg`, accent: '#1572B6' },
  { url: `${BASE}react/react-original.svg`, accent: '#61DAFB' },
  { url: `${BASE}angularjs/angularjs-original.svg`, accent: '#DD0031' },
  { url: `${BASE}django/django-plain.svg`, accent: '#44B78B' },
  { url: `${BASE}flask/flask-original.svg`, accent: '#FFFFFF' },
  { url: `${BASE}fastapi/fastapi-original.svg`, accent: '#009688' },
  { url: `${BASE}postgresql/postgresql-original.svg`, accent: '#336791' },
  { url: `${BASE}mysql/mysql-original.svg`, accent: '#00758F' },
  { url: `${BASE}git/git-original.svg`, accent: '#F05032' },
  { url: `${BASE}github/github-original.svg`, accent: '#E0E0E0' },
  { url: `${BASE}docker/docker-original.svg`, accent: '#2496ED' },
  { url: `${BASE}kubernetes/kubernetes-original.svg`, accent: '#326CE5' },
  { url: `${BASE}linux/linux-original.svg`, accent: '#FCC624' },
  { url: `${BASE}amazonwebservices/amazonwebservices-original.svg`, accent: '#FF9900' },
  { url: `${BASE}azure/azure-original.svg`, accent: '#0078D4' },
  { url: `${BASE}jira/jira-original.svg`, accent: '#0052CC' },
  { url: `${BASE}postman/postman-original.svg`, accent: '#FF6C37' },
  { url: `https://cdn.simpleicons.org/odoo/714B67`, accent: '#714B67' },
];

// ─────────────────────────────────────────────────────────────────────────────
//  HELPER
// ─────────────────────────────────────────────────────────────────────────────
function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

// ─────────────────────────────────────────────────────────────────────────────
//  FALLBACK CANVAS BUILDERS — drawn once at init, stored as HTMLCanvasElement
// ─────────────────────────────────────────────────────────────────────────────
function makeFallbackCanvas(text, fontSize, fontFamily) {
  const fc = document.createElement('canvas');
  fc.width = 36;
  fc.height = 36;
  const fctx = fc.getContext('2d');
  fctx.clearRect(0, 0, 36, 36);
  fctx.font = `bold ${fontSize} ${fontFamily}`;
  fctx.fillStyle = '#FFFFFF';
  fctx.textAlign = 'center';
  fctx.textBaseline = 'middle';
  fctx.fillText(text, 18, 18);
  return fc;
}

const FALLBACK_SKILLS = [];

// ─────────────────────────────────────────────────────────────────────────────
//  IMAGE LOADER — resolves all 35 CDN images, then merges with 4 fallbacks
//  Animation loop MUST NOT start until Promise.all resolves.
// ─────────────────────────────────────────────────────────────────────────────
function loadImages(W, H) {
  const cdnPromises = CDN_SKILLS.map(({ url, accent }) =>
    new Promise((resolve) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => resolve({ img, accent });
      img.onerror = () => resolve({ img: null, accent }); // graceful skip on error
      img.src = url;
    })
  );

  return Promise.all(cdnPromises).then((cdnLoaded) => {

    return cdnLoaded.map(({ img, accent }) => ({
      img,
      accent,
      x: Math.random() * W,
      y: Math.random() * H,
      angle: Math.random() * Math.PI * 2,
      speed: 0.40 + Math.random() * 0.55,
    }));
  });
}

// ─────────────────────────────────────────────────────────────────────────────
//  SPRITE RENDERER — 3-step pipeline, no framing of any kind
//  ABSOLUTE RULE: NO circle border, NO clip, NO ctx.rotate, NO background disc
// ─────────────────────────────────────────────────────────────────────────────
function drawSprite(ctx, s) {
  if (!s.img) return;
  const sx = s.x;
  const sy = s.y;

  // ── STEP 2: Icon image — 40×40px, perfectly centred, NO rotate, NO clip ───
  ctx.save();
  ctx.globalAlpha = 1.0;
  ctx.drawImage(s.img, sx - 20, sy - 20, 40, 40);
  ctx.restore();
}

// ─────────────────────────────────────────────────────────────────────────────
//  MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export default function SkillsHero() {
  const containerRef = useRef(null);
  const threeCanvasRef = useRef(null);
  const logoCanvasRef = useRef(null);

  useEffect(() => {
    // ── Dynamic height: 100vh clamped 700–1080px ──────────────────────────
    const computeH = () =>
      Math.min(Math.max(window.innerHeight, 700), 1080);

    const container = containerRef.current;
    const threeCanvas = threeCanvasRef.current;
    const logoCanvas = logoCanvasRef.current;
    if (!container || !threeCanvas || !logoCanvas) return;

    let W = container.offsetWidth;
    let H = computeH();

    // Apply initial container height
    container.style.height = `${H}px`;

    // ── Canvas 2D context ───────────────────────────────────────────────────
    const ctx = logoCanvas.getContext('2d');
    logoCanvas.width = W;
    logoCanvas.height = H;
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    // ─────────────────────────────────────────────────────────────────────
    //  LAYER 1 — Three.js: 300-point sphere shell
    // ─────────────────────────────────────────────────────────────────────
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, W / H, 0.1, 100);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      canvas: threeCanvas,
      antialias: true,
      alpha: false,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(W, H);
    renderer.setClearColor(0x0a0a0f, 1);

    // Build particle geometry
    const COUNT = 300;
    const pos = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
      const rv = 2.5 + Math.random() * 2.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = rv * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = rv * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = rv * Math.cos(phi);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));

    const mat = new THREE.PointsMaterial({
      color: 0x818cf8,
      size: 0.03,
      opacity: 0.8,
      transparent: true,
    });

    const particles = new THREE.Points(geo, mat);
    scene.add(particles);

    // Mouse state for camera parallax
    const mouse = { x: 0, y: 0 };
    const onMouse = (e) => {
      mouse.x = (e.clientX / W) * 2 - 1;
      mouse.y = -(e.clientY / H) * 2 + 1;
    };
    window.addEventListener('mousemove', onMouse);

    // ─────────────────────────────────────────────────────────────────────
    //  LAYER 2 — Sprite state (populated after images load)
    // ─────────────────────────────────────────────────────────────────────
    let sprites = [];
    let rafId = null;

    // ─────────────────────────────────────────────────────────────────────
    //  ANIMATION LOOP — unified, starts only after all images are loaded
    // ─────────────────────────────────────────────────────────────────────
    function tick() {
      rafId = requestAnimationFrame(tick);

      // Three.js: rotate sphere + camera parallax
      particles.rotation.y += 0.0008;
      particles.rotation.x += 0.0002;
      camera.position.x += (mouse.x * 0.5 - camera.position.x) * 0.05;
      camera.position.y += (mouse.y * 0.3 - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);

      // Canvas 2D: clear + update + draw sprites
      ctx.clearRect(0, 0, W, H);
      for (let i = 0; i < sprites.length; i++) {
        const s = sprites[i];

        // Advance position — angle/speed drift
        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;

        // Seamless edge wrap
        if (s.x < -50) s.x = W + 50;
        if (s.x > W + 50) s.x = -50;
        if (s.y < -50) s.y = H + 50;
        if (s.y > H + 50) s.y = -50;

        drawSprite(ctx, s);
      }
    }

    // Kick off image loading, then start the loop
    loadImages(W, H).then((loaded) => {
      sprites = loaded;
      tick();
    });

    // ─────────────────────────────────────────────────────────────────────
    //  RESIZE
    // ─────────────────────────────────────────────────────────────────────
    const onResize = () => {
      W = container.offsetWidth;
      H = computeH();
      container.style.height = `${H}px`;

      camera.aspect = W / H;
      camera.updateProjectionMatrix();
      renderer.setSize(W, H);

      logoCanvas.width = W;
      logoCanvas.height = H;
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
    };
    window.addEventListener('resize', onResize);

    // ── Cleanup ────────────────────────────────────────────────────────────
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMouse);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      geo.dispose();
      mat.dispose();
    };
  }, []);

  // ─────────────────────────────────────────────────────────────────────────
  //  RENDER
  // ─────────────────────────────────────────────────────────────────────────
  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        // height is set imperatively via JS (100vh clamped 700–1080)
        minHeight: '700px',
        maxHeight: '1080px',
        background: '#0a0a0f',
        overflow: 'hidden',
      }}
    >
      {/* ── LAYER 1: Three.js WebGL ── */}
      <canvas
        ref={threeCanvasRef}
        style={{ position: 'absolute', inset: 0, zIndex: 0 }}
      />

      {/* ── LAYER 2: Canvas 2D logo overlay ── */}
      <canvas
        ref={logoCanvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      {/* ── LAYER 3: HTML/CSS text overlay ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          pointerEvents: 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '0 24px',
        }}
      >
        {/* Greeting */}
        <p
          style={{
            fontFamily: "'Courier New', monospace",
            fontSize: 'clamp(10px, 1.4vw, 14px)',
            letterSpacing: '0.26em',
            color: '#5eead4',
            textTransform: 'uppercase',
            margin: '0 0 16px 0',
          }}
        >
          Hey...
        </p>

        {/* Main heading */}
        <h1
          style={{
            fontFamily: 'system-ui, -apple-system, sans-serif',
            fontSize: 'clamp(48px, 8vw, 96px)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            margin: '0 0 20px 0',
          }}
        >
          <span style={{ color: '#f0f4ff' }}>I'm </span>
          <span
            style={{
              background: 'linear-gradient(90deg, #14b8a6, #3b82f6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Ajay P
          </span>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: 'system-ui, -apple-system, sans-serif',
            fontSize: 'clamp(13px, 1.8vw, 20px)',
            fontWeight: 600,
            color: 'rgba(255,255,255,0.92)',
            letterSpacing: '0.02em',
            margin: '0 0 48px 0',
          }}
        >
          Software Developer | Odoo Technical Consultant | AI Expert
        </p>

        {/* Button row — pointer events re-enabled */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '16px',
            justifyContent: 'center',
            pointerEvents: 'all',
            flexWrap: 'wrap',
          }}
        >
          <a
            href="#services"
            style={{
              background: 'linear-gradient(135deg, #14b8a6, #0ea5e9)',
              color: '#ffffff',
              border: 'none',
              borderRadius: '50px',
              padding: '15px 36px',
              fontSize: 'clamp(13px, 1.4vw, 16px)',
              fontWeight: 600,
              cursor: 'pointer',
              boxShadow: '0 0 28px rgba(20,184,166,0.45)',
              textDecoration: 'none',
              fontFamily: 'system-ui, -apple-system, sans-serif',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              display: 'inline-block',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 0 40px rgba(20,184,166,0.65)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 0 28px rgba(20,184,166,0.45)';
            }}
          >
            What I Do
          </a>

          <a
            href="#contact"
            style={{
              background: 'transparent',
              color: '#ffffff',
              border: '1.5px solid rgba(255,255,255,0.25)',
              borderRadius: '50px',
              padding: '15px 36px',
              fontSize: 'clamp(13px, 1.4vw, 16px)',
              fontWeight: 600,
              cursor: 'pointer',
              textDecoration: 'none',
              fontFamily: 'system-ui, -apple-system, sans-serif',
              transition: 'border-color 0.2s ease, background 0.2s ease',
              display: 'inline-block',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.6)';
              e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)';
              e.currentTarget.style.background = 'transparent';
            }}
          >
            Get In Touch
          </a>
        </div>

        {/* Scroll indicator — absolute bottom-centre */}
        <div
          style={{
            position: 'absolute',
            bottom: '36px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            pointerEvents: 'none',
          }}
        >
          <span
            style={{
              fontFamily: "'Courier New', monospace",
              fontSize: '9px',
              letterSpacing: '0.35em',
              color: 'rgba(255,255,255,0.28)',
            }}
          >
            SCROLL
          </span>
          <div
            style={{
              width: '1px',
              height: '40px',
              background: 'linear-gradient(to bottom, rgba(255,255,255,0.28), transparent)',
            }}
          />
        </div>
      </div>
    </div>
  );
}
