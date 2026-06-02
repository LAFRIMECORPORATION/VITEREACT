import React, { useState } from 'react';

// ==========================================
// CONFIGURATION DE VOS DONNÉES PERSONNELLES
// ==========================================
// Remplissez simplement les objets ci-dessous avec vos propres informations.
// Tout est centralisé ici pour vous éviter de chercher dans le code HTML.

const PORTFOLIO_DATA = {
  profile: {
    name: "KAKTCHEU SIEWE NICO MERIME", 
    title: "Développeur Full-Stack React & Node.js",
    bio: "Passionné par la création d'applications web modernes, robustes et centrées sur l'expérience utilisateur. Spécialisé dans l'écosystème React et la gestion de bases de données relationnelles.",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80", // 💡 REMPLACEZ PAR L'URL DE VOTRE PHOTO (ex: lien GitHub ou Cloudinary)
    cvUrl: "/MON CV.pdf", // 📂 Fichier placé dans votre dossier : public/CV_Nom_Prenom.pdf (Méthode 1)
    email: "merimesiewe84@gmail.com",
    
    // --- VOS RÉSEAUX SOCIAUX ---
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    facebook: "https://facebook.com/ton_profil",
    instagram: "https://instagram.com/ton_compte",
    tiktok: "https://www.tiktok.com/@nico.mrime?_r=1&_t=ZS-96f39vKjWfi",
    // Pour WhatsApp, écrivez votre numéro au format international sans le "+" ni les espaces (ex: 33612345678 ou 237612345678)
    whatsapp: "https://wa.me/+237678417563" 
  },
  
  // Vos compétences clés rangées par catégories
  skills: [
    { category: "Frontend", items: ["React", "JavaScript (ES6+)", "HTML5 / CSS3", "Tailwind CSS", "Vite"] },
    { category: "Backend & BDD", items: ["Node.js", "Express", "Prisma ORM", "PostgreSQL", "REST APIs"] },
    { category: "Outils & Déploiement", items: ["Git & GitHub", "Vercel", "Neon Cloud", "VS Code", "Postman"] }
  ],

  // Vos 3 projets phares (Visuels, complets et diversifiés)
  projects: [
    {
      id: 1,
      title: "Plateforme de Financement Participatif",
      description: "Une application multi-rôles connectant des étudiants entrepreneurs et des investisseurs, incluant un système de validation KYC et des flux transactionnels sécurisés.",
      tech: ["React", "Prisma", "PostgreSQL", "Tailwind"],
      liveUrl: "https://votre-projet-demo.vercel.app", // 💡 Lien de démo Vercel
      githubUrl: "https://github.com", // 💡 Lien du code source
      image: "/lafrimexorporation.jpeg" // Image d'illustration
    },
    {
      id: 2,
      title: "Application de Messagerie Temps Réel",
      description: "Architecture de chat instantané complète avec gestion d'états fluides, salons de discussion privés et notifications en direct.",
      tech: ["React", "Node.js", "Socket.io", "Express"],
      liveUrl: "#",
      githubUrl: "https://github.com",
      image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      title: "SaaS de Gestion de Projet Collaboratif",
      description: "Un espace de travail agile complet permettant la création d'équipes, l'assignation de tickets (mode Kanban), et le suivi de productivité via des graphiques interactifs.",
      tech: ["React", "Vite", "Chart.js", "Prisma"],
      liveUrl: "#",
      githubUrl: "https://github.com",
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=500&q=80"
    }
  ]
};

export default function App() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={styles.appShell}>
      {/* --- RENDER STYLES NATIVE (Variables CSS & Base) --- */}
      <style>{globalCSS}</style>

      {/* --- HEADER / NAVIGATION --- */}
      <header style={styles.header}>
        <div className="container" style={styles.navContainer}>
          <a href="#" style={styles.logo}>
            &lt;{PORTFOLIO_DATA.profile.name.split(' ')[0] || "Dev"} /&gt;
          </a>
          <nav style={styles.navLinks}>
            <a href="#projets" className="nav-link">Projets</a>
            <a href="#competences" className="nav-link">Compétences</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
        </div>
      </header>

      {/* --- HERO SECTION --- */}
      <section style={styles.hero}>
        <div className="container" style={styles.heroGrid}>
          <div style={styles.heroContent}>
            <span style={styles.badge}>Disponible pour de nouvelles opportunités</span>
            <h1 style={styles.heroTitle}>{PORTFOLIO_DATA.profile.title}</h1>
            <p style={styles.heroSubtitle}>{PORTFOLIO_DATA.profile.bio}</p>
            <div style={styles.heroCtaRow}>
              <a href="#projets" className="btn btn-primary">Voir mes projets</a>
              <a href={PORTFOLIO_DATA.profile.cvUrl} target="_blank" rel="noreferrer" className="btn btn-secondary">Télécharger mon CV</a>
            </div>
          </div>
          <div style={styles.heroAvatarContainer}>
            <img 
              src={PORTFOLIO_DATA.profile.avatarUrl} 
              alt={PORTFOLIO_DATA.profile.name} 
              style={styles.avatar}
            />
          </div>
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section id="projets" style={styles.section}>
        <div className="container">
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Projets Sélectionnés</h2>
            <p>Une vitrine des applications récentes que j'ai conçues et développées.</p>
          </div>
          
          <div style={styles.projectGrid}>
            {PORTFOLIO_DATA.projects.map((project) => (
              <div key={project.id} className="project-card" style={styles.projectCard}>
                <div style={{ ...styles.projectImage, backgroundImage: `url(${project.image})` }} />
                <div style={styles.projectContent}>
                  <h3 style={styles.projectCardTitle}>{project.title}</h3>
                  <p style={styles.projectCardDesc}>{project.description}</p>
                  <div style={styles.techContainer}>
                    {project.tech.map((t, idx) => (
                      <span key={idx} style={styles.techBadge}>{t}</span>
                    ))}
                  </div>
                  <div style={styles.projectLinks}>
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="project-link-btn">Démo Live ↗</a>
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="project-link-btn secondary">Code Source</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SKILLS SECTION --- */}
      <section id="competences" style={{ ...styles.section, backgroundColor: 'var(--surface)' }}>
        <div className="container">
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Boîte à Outils Technique</h2>
            <p>Les technologies et frameworks que j'utilise au quotidien pour donner vie aux idées.</p>
          </div>

          <div style={styles.skillsGrid}>
            {PORTFOLIO_DATA.skills.map((skillGroup, idx) => (
              <div key={idx} style={styles.skillCard}>
                <h3 style={styles.skillGroupTitle}>{skillGroup.category}</h3>
                <div style={styles.skillTagsRow}>
                  {skillGroup.items.map((skill, sIdx) => (
                    <span key={sIdx} style={styles.skillTag}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" style={styles.section}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '700px' }}>
          <h2 style={styles.sectionTitle}>Travaillons Ensemble</h2>
          <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>
            Vous avez un projet en tête, une opportunité d'emploi ou vous souhaitez simplement échanger ? N'hésitez pas à me contacter.
          </p>
          
          <div style={styles.contactCard}>
            <span style={{ fontSize: '0.9rem', fontWeight: '500' }}>MON ADRESSE EMAIL</span>
            <button onClick={handleCopyEmail} style={styles.emailButton}>
              {PORTFOLIO_DATA.profile.email} 
              <span style={styles.copyBadge}>{copied ? "Copié ! ✅" : "Copier"}</span>
            </button>
          </div>

          {/* --- RÉSEAUX SOCIAUX --- */}
          <div style={{ ...styles.socialRow, flexWrap: 'wrap', gap: '1.5rem' }}>
            <a href={PORTFOLIO_DATA.profile.github} target="_blank" rel="noreferrer" className="social-link">GitHub</a>
            <a href={PORTFOLIO_DATA.profile.linkedin} target="_blank" rel="noreferrer" className="social-link">LinkedIn</a>
            <a href={PORTFOLIO_DATA.profile.whatsapp} target="_blank" rel="noreferrer" className="social-link" style={{ color: '#25D366' }}>WhatsApp</a>
            <a href={PORTFOLIO_DATA.profile.instagram} target="_blank" rel="noreferrer" className="social-link" style={{ color: '#E1306C' }}>Instagram</a>
            <a href={PORTFOLIO_DATA.profile.facebook} target="_blank" rel="noreferrer" className="social-link" style={{ color: '#1877F2' }}>Facebook</a>
            <a href={PORTFOLIO_DATA.profile.tiktok} target="_blank" rel="noreferrer" className="social-link" style={{ color: '#00f2fe' }}>TikTok</a>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer style={styles.footer}>
        <div className="container">
          <p>© {new Date().getFullYear()} — Conçu par {PORTFOLIO_DATA.profile.name}. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}

// ==========================================
// STYLE CSS INTÉGRÉ & RESPONSIVE DESIGN
// ==========================================
const globalCSS = `
  :root {
    --bg: #090d16;
    --surface: #111827;
    --border: #1f2937;
    --primary: #3b82f6;
    --primary-hover: #2563eb;
    --text: #f3f4f6;
    --text-muted: #9ca3af;
    --font: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { background-color: var(--bg); color: var(--text); font-family: var(--font); -webkit-font-smoothing: antialiased; }
  
  .container { width: 100%; max-width: 1100px; margin: 0 auto; padding: 0 1.5rem; }
  
  /* Utilities */
  .btn { display: inline-flex; align-items: center; justify-content: center; padding: 0.75rem 1.5rem; font-size: 0.95rem; font-weight: 500; border-radius: 8px; text-decoration: none; transition: all 0.2s ease; cursor: pointer; }
  .btn-primary { background-color: var(--primary); color: white; border: none; }
  .btn-primary:hover { background-color: var(--primary-hover); transform: translateY(-2px); }
  .btn-secondary { background-color: transparent; color: var(--text); border: 1px solid var(--border); }
  .btn-secondary:hover { background-color: var(--border); transform: translateY(-2px); }

  .nav-link { color: var(--text-muted); text-decoration: none; font-size: 0.95rem; font-weight: 500; transition: color 0.2s; }
  .nav-link:hover { color: var(--text); }

  /* Cards hover animations */
  .project-card { transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s; }
  .project-card:hover { transform: translateY(-6px); border-color: #374151; }

  .project-link-btn { text-decoration: none; font-size: 0.9rem; font-weight: 600; color: var(--primary); transition: opacity 0.2s; }
  .project-link-btn.secondary { color: var(--text-muted); }
  .project-link-btn:hover { opacity: 0.8; }

  .social-link { color: var(--text-muted); text-decoration: none; font-size: 0.95rem; transition: text-shadow 0.2s, transform 0.2s; margin: 0; display: inline-block; }
  .social-link:hover { transform: scale(1.05); text-shadow: 0 0 8px currentColor; }

  /* Responsive Design */
  @media (max-width: 768px) {
    header nav { display: none; }
    h1 { font-size: 2.5rem !important; }
    section { padding: 4rem 0 !important; }
  }
`;

const styles = {
  appShell: { minHeight: '100vh', display: 'flex', flexDirection: 'column' },
  header: { borderBottom: '1px solid var(--border)', position: 'sticky', top: 0, backgroundColor: 'rgba(9, 13, 22, 0.8)', backdropFilter: 'blur(12px)', zIndex: 100 },
  navContainer: { height: '4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  logo: { fontSize: '1.25rem', fontWeight: '700', color: 'var(--text)', textDecoration: 'none' },
  navLinks: { display: 'flex', gap: '2rem' },
  
  hero: { padding: '8rem 0 6rem 0', borderBottom: '1px solid var(--border)' },
  heroGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'center' },
  heroContent: { display: 'flex', flexDirection: 'column', alignItems: 'flex-start' },
  badge: { backgroundColor: 'rgba(59, 130, 246, 0.1)', color: 'var(--primary)', padding: '0.35rem 0.75rem', borderRadius: '9999px', fontSize: '0.8rem', fontWeight: '600', marginBottom: '1.5rem' },
  heroTitle: { fontSize: '3.5rem', fontWeight: '800', lineHeight: 1.1, color: '#ffffff', marginBottom: '1.5rem', letterSpacing: '-0.02em' },
  heroSubtitle: { fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '2.5rem', lineHeight: 1.6, maxWidth: '600px' },
  heroCtaRow: { display: 'flex', gap: '1rem', flexWrap: 'wrap' },
  heroAvatarContainer: { display: 'flex', justifyContent: 'center' },
  avatar: { width: '180px', height: '180px', borderRadius: '50%', objectFit: 'cover', border: '4px solid var(--border)', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.3)' },

  section: { padding: '6rem 0', borderBottom: '1px solid var(--border)' },
  sectionHeader: { marginBottom: '3.5rem' },
  sectionTitle: { fontSize: '2rem', fontWeight: '700', marginBottom: '0.5rem', color: '#ffffff' },

  projectGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' },
  projectCard: { backgroundColor: 'var(--surface)', borderRadius: '12px', border: '1px solid var(--border)', overflow: 'hidden', display: 'flex', flexDirection: 'column' },
  projectImage: { height: '200px', width: '100%', backgroundSize: 'cover', backgroundPosition: 'center', borderBottom: '1px solid var(--border)' },
  projectContent: { padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 },
  projectCardTitle: { fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.75rem', color: '#ffffff' },
  projectCardDesc: { fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.5, flex: 1 },
  techContainer: { display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' },
  techBadge: { backgroundColor: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--text)', padding: '0.25rem 0.6rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: '500' },
  projectLinks: { display: 'flex', gap: '1.25rem', alignItems: 'center' },

  skillsGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' },
  skillCard: { padding: '1.75rem', backgroundColor: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '10px' },
  skillGroupTitle: { fontSize: '1.1rem', fontWeight: '600', color: 'var(--primary)', marginBottom: '1.25rem' },
  skillTagsRow: { display: 'flex', flexWrap: 'wrap', gap: '0.5rem' },
  skillTag: { backgroundColor: 'var(--surface)', color: 'var(--text)', padding: '0.4rem 0.8rem', borderRadius: '6px', fontSize: '0.85rem', border: '1px solid var(--border)' },

  contactCard: { backgroundColor: 'var(--surface)', border: '1px solid var(--border)', padding: '2.5rem', borderRadius: '16px', margin: '2rem 0', display: 'flex', flexDirection: 'column', gap: '0.7rem', alignItems: 'center' },
  emailButton: { background: 'none', border: 'none', color: '#ffffff', fontSize: '1.5rem', fontWeight: '700', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' },
  copyBadge: { fontSize: '0.75rem', padding: '0.25rem 0.5rem', backgroundColor: 'var(--border)', borderRadius: '4px', color: 'var(--text-muted)', fontWeight: 'normal' },
  socialRow: { marginTop: '2rem', display: 'flex', justifyContent: 'center' },
  
  footer: { padding: '2rem 0', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem', backgroundColor: 'var(--bg)' }
};