
// This page is designed as an AMP page.
// All custom styles are within the <style amp-custom> tag.

export default function KubetLandingPage() {
  const features = [
    { id: "feature-1", icon: "🏆", title: "Bonus Fantastis & Promosi Setiap Hari", description: "Nikmati berbagai bonus menarik dan promosi eksklusif yang selalu diperbarui untuk keuntungan maksimal Anda." },
    { id: "feature-2", icon: "🔒", title: "Keamanan Data Terjamin 100%", description: "Sistem keamanan canggih kami melindungi setiap transaksi dan data pribadi Anda dengan enkripsi kelas dunia." },
    { id: "feature-3", icon: "⚡", title: "Transaksi Cepat & Mudah", description: "Proses deposit dan withdraw yang super cepat, didukung berbagai metode pembayaran terpercaya." },
    { id: "feature-4", icon: "⭐", title: "Layanan Pelanggan Profesional 24/7", description: "Tim support kami siap membantu Anda kapan saja, memastikan pengalaman bermain yang lancar dan nyaman." },
  ];

  const heroAnimations = {
    duration: "700ms", fill: "forwards", easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
    animations: [
      {selector: "#logo", delay: "100ms", keyframes: [{opacity:0, transform:"translateY(20px)"}, {opacity:1, transform:"translateY(0px)"}]},
      {selector: "#hero-main-title", delay: "300ms", keyframes: [{opacity:0, transform:"translateY(20px)"}, {opacity:1, transform:"translateY(0px)"}]},
      {selector: "#hero-sub-title", delay: "500ms", keyframes: [{opacity:0, transform:"translateY(20px)"}, {opacity:1, transform:"translateY(0px)"}]},
      {selector: "#tombol-daftar", delay: "700ms", keyframes: [{opacity:0, transform:"translateY(20px)"}, {opacity:1, transform:"translateY(0px)"}]},
      {selector: "#tombol-login", delay: "700ms", keyframes: [{opacity:0, transform:"translateY(20px)"}, {opacity:1, transform:"translateY(0px)"}]},
      {selector: "#tombol-telegram", delay: "700ms", keyframes: [{opacity:0, transform:"translateY(20px)"}, {opacity:1, transform:"translateY(0px)"}]},
    ]
  };

  const featuresTitleAnimation = {
    duration: "700ms", fill: "forwards", easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
    animations: [
      {selector: "#features-title", delay: "100ms", keyframes: [{opacity:0, transform:"translateY(20px)"}, {opacity:1, transform:"translateY(0px)"}]}
    ]
  };
  
  const ampAnalyticsConfig = {
    vars: { account: "UA-XXXXX-Y" }, // GANTI DENGAN ID GOOGLE ANALYTICS ANDA
    triggers: {
      trackPageview: { on: "visible", request: "pageview" },
      trackDaftarClick: { on: "click", selector: "#tombol-daftar", request: "event", vars: { eventCategory: "CTA", eventAction: "click", eventLabel: "Daftar Sekarang" }},
      trackLoginClick: { on: "click", selector: "#tombol-login", request: "event", vars: { eventCategory: "CTA", eventAction: "click", eventLabel: "Login" }},
      trackTelegramClick: { on: "click", selector: "#tombol-telegram", request: "event", vars: { eventCategory: "CTA", eventAction: "click", eventLabel: "Gabung Telegram" }}
    }
  };

  return (
    <>
      <style amp-custom="" dangerouslySetInnerHTML={{ __html: `
        body {
          /* font-family is set by .font-body on <body> in layout.tsx */
          background-color: hsl(var(--background));
          color: hsl(var(--foreground));
          margin: 0;
          padding: 0;
          line-height: 1.6;
          background: linear-gradient(-45deg, hsl(var(--background)) 0%, hsl(240, 50%, 20%) 35%, hsl(240, 40%, 25%) 65%, hsl(var(--background)) 100%);
          background-size: 400% 400%;
          animation: gradientBG 25s ease infinite;
        }
        @keyframes gradientBG {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .container { max-width: 1000px; margin: 0 auto; padding: 0 20px; }
        .logo-container { padding: 20px 0; text-align: center; }
        .logo { /* font-family is set by .font-headline class */ font-size: 3rem; font-weight: bold; line-height: 1; }
        .logo .k-letter { color: hsl(var(--accent)); }
        .logo .u-letter { color: hsl(var(--primary)); }
        .logo .bet-letters {
          color: hsl(var(--foreground));
          text-shadow: -1px -1px 0 hsl(var(--accent)), 1px -1px 0 hsl(var(--accent)), -1px 1px 0 hsl(var(--accent)), 1px 1px 0 hsl(var(--accent)), -1.5px 0 0 hsl(var(--accent)), 1.5px 0 0 hsl(var(--accent)), 0 -1.5px 0 hsl(var(--accent)), 0 1.5px 0 hsl(var(--accent));
        }
        .hero-section { padding: 40px 20px; text-align: center; min-height: 70vh; display: flex; flex-direction: column; justify-content: center; align-items: center; }
        .hero-section h1 { /* font-family by .font-headline */ font-size: 2.5rem; margin-bottom: 20px; color: hsl(var(--foreground)); max-width: 700px; line-height: 1.2; }
        .hero-section .subtitle { font-size: 1.25rem; margin-bottom: 30px; color: hsl(var(--muted-foreground)); max-width: 600px; }
        .cta-buttons { display: flex; flex-wrap: wrap; justify-content: center; gap: 15px; }
        .cta-button { display: inline-block; padding: 12px 28px; border-radius: var(--radius); text-decoration: none; font-weight: bold; transition: transform 0.2s ease, box-shadow 0.2s ease; /* font-family by .font-headline */ font-size: 1.1rem; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
        .cta-button:hover { transform: translateY(-3px); box-shadow: 0 6px 20px rgba(0,0,0,0.3); }
        .btn-register { background-color: hsl(var(--primary)); color: hsl(var(--primary-foreground)); }
        .btn-login { background-color: hsl(var(--accent)); color: hsl(var(--accent-foreground)); }
        .btn-telegram { background-color: hsl(var(--secondary)); color: hsl(var(--secondary-foreground)); }
        .bouncy-icon { display: inline-block; animation: bouncy 2s infinite ease-in-out; margin-right: 8px; }
        @keyframes bouncy { 0%, 20%, 50%, 80%, 100% { transform: translateY(0); } 40% { transform: translateY(-6px); } 60% { transform: translateY(-3px); } }
        .features-section { padding: 60px 20px; }
        .features-section h2 { /* font-family by .font-headline */ font-size: 2.2rem; text-align: center; margin-bottom: 40px; color: hsl(var(--foreground)); }
        .features-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px; }
        .feature-item { background-color: hsl(var(--card)); padding: 25px; border-radius: var(--radius); text-align: center; box-shadow: 0 5px 15px rgba(hsl(var(--background)),0.2); border: 1px solid hsl(var(--border)); }
        .feature-item .icon { font-size: 2.5rem; margin-bottom: 15px; line-height: 1; color: hsl(var(--accent)); }
        .feature-item h3 { /* font-family by .font-headline */ font-size: 1.5rem; margin-bottom: 10px; color: hsl(var(--primary)); }
        .feature-item p { font-size: 1rem; color: hsl(var(--muted-foreground)); }
        .animate-initially-hidden { opacity: 0; }
        @media (max-width: 768px) {
          .hero-section { min-height: auto; padding: 40px 20px; }
          .hero-section h1 { font-size: 2rem; }
          .hero-section .subtitle { font-size: 1.1rem; }
          .logo { font-size: 2.5rem; }
          .cta-buttons { flex-direction: column; align-items: center; }
          .cta-button { width: 80%; max-width: 300px; text-align: center; margin-bottom: 10px; }
        }
        @media (max-width: 600px) {
          body { animation: none; background: hsl(var(--background)); }
          .hero-section h1 { font-size: 1.8rem; }
          .features-grid { grid-template-columns: 1fr; }
        }
      ` }} />

      <header className="logo-container animate-initially-hidden" id="logo">
        <div className="logo font-headline">
          <span className="k-letter">K</span><span className="u-letter">U</span><span className="bet-letters">BET</span>
        </div>
      </header>

      <main>
        <section className="hero-section" id="hero-section-observer-target">
          <h1 id="hero-main-title" className="animate-initially-hidden font-headline">Situs Terpercaya dengan Bonus Melimpah dan Peluang Menang Lebih Besar!</h1>
          <p id="hero-sub-title" className="subtitle animate-initially-hidden">Jaminan Keamanan, Bonus Harian, dan Pelayanan Prima 24 Jam Nonstop.</p>
          <div className="cta-buttons">
            <a href="https://situskubet.net/register/dw311" target="_blank" rel="noopener noreferrer" className="cta-button btn-register animate-initially-hidden font-headline" id="tombol-daftar">Daftar Sekarang</a>
            <a href="https://situskubet.net/register/dw311" target="_blank" rel="noopener noreferrer" className="cta-button btn-login animate-initially-hidden font-headline" id="tombol-login">Login</a>
            <a href="https://t.me/ninalestariii" target="_blank" rel="noopener noreferrer" className="cta-button btn-telegram animate-initially-hidden font-headline" id="tombol-telegram">
              <span className="bouncy-icon">💬</span>Gabung Telegram
            </a>
          </div>
        </section>

        <section className="features-section">
          <div className="container">
            <h2 id="features-title" className="animate-initially-hidden font-headline">Keunggulan KUBET Pilihan Utama Anda</h2>
            <div className="features-grid">
              {features.map((feature, index) => (
                <div key={feature.id} id={feature.id} className="feature-item animate-initially-hidden">
                  <div className="icon">{feature.icon}</div>
                  <h3 className="font-headline">{feature.title}</h3>
                  <p>{feature.description}</p>
                  <amp-position-observer
                    target={feature.id}
                    on={`enter:featureAnim${index + 1}.start`}
                    layout="nodisplay"
                    intersection-ratios="0.2"
                    once
                  ></amp-position-observer>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <amp-analytics type="googleanalytics">
        <script type="application/json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ampAnalyticsConfig) }} />
      </amp-analytics>

      <amp-animation id="heroEnterAnimations" layout="nodisplay">
        <script type="application/json" dangerouslySetInnerHTML={{ __html: JSON.stringify(heroAnimations) }} />
      </amp-animation>
      <amp-position-observer
        target="hero-section-observer-target" 
        on="enter:heroEnterAnimations.start"
        layout="nodisplay"
        once  
        intersection-ratios="0.1"
      ></amp-position-observer>
      
      <amp-animation id="featuresTitleAnim" layout="nodisplay">
        <script type="application/json" dangerouslySetInnerHTML={{ __html: JSON.stringify(featuresTitleAnimation) }} />
      </amp-animation>
      <amp-position-observer
        target="features-title"
        on="enter:featuresTitleAnim.start" 
        layout="nodisplay"
        once
        intersection-ratios="0.1"
      ></amp-position-observer>

      {features.map((feature, index) => {
        const featureAnimation = {
          duration: "600ms", fill: "forwards", easing: "ease-out", delay: `${index * 150}ms`, // Stagger feature animations
          animations: [{selector: `#${feature.id}`, keyframes: [{opacity:0, transform:"translateY(30px)"}, {opacity:1, transform:"translateY(0px)"}]}]
        };
        return (
          <amp-animation key={`feature-anim-${index + 1}`} id={`featureAnim${index + 1}`} layout="nodisplay">
            <script type="application/json" dangerouslySetInnerHTML={{ __html: JSON.stringify(featureAnimation) }} />
          </amp-animation>
        );
      })}
    </>
  );
}
