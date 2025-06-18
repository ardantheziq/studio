
// This page is designed as an AMP page.
// All custom styles are within the <style amp-custom> tag.

export default function KubetLandingPage() {
  const ampAnalyticsConfig = {
    vars: {
      account: "UA-XXXXX-Y" // GANTI DENGAN ID GOOGLE ANALYTICS ANDA
    },
    triggers: {
      trackPageview: {
        on: "visible",
        request: "pageview"
      },
      trackClickOnDaftar: {
          on: "click",
          selector: "#btn-daftar",
          request: "event",
          vars: {
              eventCategory: "CTA",
              eventAction: "click",
              eventLabel: "Daftar Sekarang"
          }
      },
      trackClickOnLogin: {
          on: "click",
          selector: "#btn-login",
          request: "event",
          vars: {
              eventCategory: "CTA",
              eventAction: "click",
              eventLabel: "Login"
          }
      },
      trackClickOnTelegram: {
          on: "click",
          selector: "#btn-telegram",
          request: "event",
          vars: {
              eventCategory: "CTA",
              eventAction: "click",
              eventLabel: "Gabung Telegram"
          }
      }
    }
  };

  const heroAnimation = {
    duration: "1s",
    fill: "forwards",
    easing: "ease-out",
    animations: [
      { selector: "#logo", delay: "200ms", keyframes: { opacity: [0, 1], transform: ["translateY(20px)", "translateY(0)"] } },
      { selector: "#hero-title", delay: "400ms", keyframes: { opacity: [0, 1], transform: ["translateY(20px)", "translateY(0)"] } },
      { selector: "#hero-subtitle", delay: "600ms", keyframes: { opacity: [0, 1], transform: ["translateY(20px)", "translateY(0)"] } },
      { selector: "#button-group", delay: "800ms", keyframes: { opacity: [0, 1], transform: ["translateY(20px)", "translateY(0)"] } }
    ]
  };

  const featureAnimation1 = {
    duration: "800ms", fill: "forwards", easing: "ease-out", selector: "#feature1",
    keyframes: { opacity: [0, 1], transform: ["translateY(30px)", "translateY(0)"] }
  };
  const featureAnimation2 = {
    duration: "800ms", fill: "forwards", easing: "ease-out", selector: "#feature2",
    keyframes: { opacity: [0, 1], transform: ["translateY(30px)", "translateY(0)"] }
  };
  const featureAnimation3 = {
    duration: "800ms", fill: "forwards", easing: "ease-out", selector: "#feature3",
    keyframes: { opacity: [0, 1], transform: ["translateY(30px)", "translateY(0)"] }
  };
  const featureAnimation4 = {
    duration: "800ms", fill: "forwards", easing: "ease-out", selector: "#feature4",
    keyframes: { opacity: [0, 1], transform: ["translateY(30px)", "translateY(0)"] }
  };


  return (
    <>
      <style amp-custom="" dangerouslySetInnerHTML={{ __html: `
        /* ------------------- */
        /* Variabel & Reset    */
        /* ------------------- */
        :root {
          --color-bg: #0d1117;
          --color-primary-blue: #007bff;
          --color-secondary-yellow: #ffc107;
          --color-text-light: #f0f6fc;
          --color-text-dark: #2d3748;
          --color-card-bg: #161b22;
          --color-border: #30363d;
        }

        body {
          background-color: var(--color-bg);
          color: var(--color-text-light);
          font-family: 'Poppins', sans-serif;
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          margin: 0;
          padding: 0;
        }

        /* ------------------- */
        /* Animasi Latar       */
        /* ------------------- */
        .background-particles {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: -1;
        }

        .particle {
          position: absolute;
          border-radius: 50%;
          background: var(--color-primary-blue);
          animation: move 25s linear infinite;
          opacity: 0;
        }
        .particle:nth-child(1) { width: 10px; height: 10px; left: 15%; animation-duration: 12s; animation-delay: -2s; box-shadow: 0 0 15px 5px var(--color-primary-blue); }
        .particle:nth-child(2) { width: 15px; height: 15px; left: 30%; animation-duration: 20s; animation-delay: -5s; background-color: var(--color-secondary-yellow); box-shadow: 0 0 15px 5px var(--color-secondary-yellow); }
        .particle:nth-child(3) { width: 8px; height: 8px; left: 50%; animation-duration: 18s; animation-delay: -10s; }
        .particle:nth-child(4) { width: 12px; height: 12px; left: 75%; animation-duration: 15s; animation-delay: -1s; background-color: var(--color-secondary-yellow); box-shadow: 0 0 15px 5px var(--color-secondary-yellow); }
        .particle:nth-child(5) { width: 7px; height: 7px; left: 90%; animation-duration: 22s; animation-delay: -15s; }

        @keyframes move {
          0% { transform: translateY(100vh) scale(0); opacity: 1; }
          100% { transform: translateY(-10vh) scale(1); opacity: 0; }
        }

        /* ------------------- */
        /* Logo KUBET          */
        /* ------------------- */
        .logo {
          font-size: 3.5rem;
          font-weight: 900;
          letter-spacing: -2px;
          margin-bottom: 1rem;
        }
        .logo .k { color: var(--color-primary-blue); }
        .logo .u { color: var(--color-secondary-yellow); }
        .logo .bet {
          color: var(--color-text-light);
          text-shadow: 
            -1.5px -1.5px 0 var(--color-primary-blue),  
             1.5px -1.5px 0 var(--color-primary-blue),
            -1.5px  1.5px 0 var(--color-primary-blue),
             1.5px  1.5px 0 var(--color-primary-blue);
        }
        
        /* ------------------- */
        /* Layout Utama        */
        /* ------------------- */
        .container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        .hero, .features {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 5rem 20px;
          position: relative;
        }

        .hero {
          min-height: 90vh;
          justify-content: center;
        }

        h1, h2 {
          font-weight: 700;
        }
        
        .hero h1 {
          font-size: 2.5rem;
          max-width: 700px;
          margin: 0 auto 1rem;
          color: var(--color-text-light);
        }

        .hero p {
          font-size: 1.2rem;
          max-width: 600px;
          margin: 0 auto 2.5rem;
          color: #adb5bd; /* Lighter text for subtitle */
        }

        .features h2 {
          font-size: 2.2rem;
          margin-bottom: 3rem;
        }

        /* ------------------- */
        /* Tombol (Buttons)    */
        /* ------------------- */
        .button-group {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
        }

        .btn {
          display: inline-block;
          padding: 12px 28px;
          border: 2px solid transparent;
          border-radius: 50px;
          font-size: 1rem;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .btn-primary {
          background-color: var(--color-primary-blue);
          color: white;
        }
        .btn-primary:hover {
          background-color: #0056b3; /* Darken primary blue on hover */
          transform: translateY(-3px);
        }
        
        .btn-secondary {
          background-color: var(--color-secondary-yellow);
          color: var(--color-text-dark);
        }
        .btn-secondary:hover {
          background-color: #d39e00; /* Darken secondary yellow on hover */
          transform: translateY(-3px);
        }
        
        .btn-telegram {
          background-color: #229ED9; /* Telegram blue */
          color: white;
        }
        .btn-telegram:hover {
            background-color: #1a88c2; /* Darken Telegram blue on hover */
            transform: translateY(-3px);
        }
        .btn-telegram .icon {
            display: inline-block;
            margin-right: 8px;
            animation: bouncy 1.5s infinite ease-in-out;
        }
        
        @keyframes bouncy {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        /* ------------------- */
        /* Bagian Keunggulan   */
        /* ------------------- */
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          width: 100%;
        }

        .feature-card {
          background: var(--color-card-bg);
          border: 1px solid var(--color-border);
          border-radius: 12px;
          padding: 2rem;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .feature-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 10px 20px rgba(0, 123, 255, 0.1); /* Subtle blue shadow */
        }

        .feature-card .icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          /* Icons are emojis, color will be default text color. If specific color needed, wrap in span and style */
        }

        .feature-card h3 {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
          color: var(--color-primary-blue);
        }

        .feature-card p {
          color: #adb5bd; /* Lighter text for card description */
          margin: 0;
        }
        
        /* ------------------- */
        /* Animasi Masuk       */
        /* ------------------- */
        .fade-in-up { /* Initial state for elements to be animated by AMP */
          opacity: 0;
        }

        /* ------------------- */
        /* Responsif           */
        /* ------------------- */
        @media (max-width: 768px) {
          .hero h1 {
            font-size: 2rem;
          }
          .hero p {
            font-size: 1rem;
          }
          .logo {
            font-size: 2.8rem;
          }
          .button-group {
            flex-direction: column;
            width: 100%;
            max-width: 300px; /* Constrain button width on mobile */
            margin: 0 auto;
          }
          .btn {
            width: 100%;
            box-sizing: border-box; /* ensures padding doesn't add to width */
          }
          /* Sembunyikan animasi partikel di mobile untuk performa */
          .background-particles {
              display: none;
          }
        }
      ` }} />

      {/* Animasi Latar Belakang (Opsional) */}
      <div className="background-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      {/* Definisi Animasi AMP */}
      <amp-animation id="heroAnimation" layout="nodisplay">
        <script type="application/json" dangerouslySetInnerHTML={{ __html: JSON.stringify(heroAnimation) }} />
      </amp-animation>

      <amp-animation id="animateFeature1" layout="nodisplay">
        <script type="application/json" dangerouslySetInnerHTML={{ __html: JSON.stringify(featureAnimation1) }} />
      </amp-animation>
      <amp-animation id="animateFeature2" layout="nodisplay">
        <script type="application/json" dangerouslySetInnerHTML={{ __html: JSON.stringify(featureAnimation2) }} />
      </amp-animation>
      <amp-animation id="animateFeature3" layout="nodisplay">
        <script type="application/json" dangerouslySetInnerHTML={{ __html: JSON.stringify(featureAnimation3) }} />
      </amp-animation>
      <amp-animation id="animateFeature4" layout="nodisplay">
        <script type="application/json" dangerouslySetInnerHTML={{ __html: JSON.stringify(featureAnimation4) }} />
      </amp-animation>

      
      {/* Bagian Hero */}
      <header className="hero" id="hero-section">
        <div id="logo" className="logo fade-in-up">
          <span className="k">K</span><span className="u">U</span><span className="bet">BET</span>
        </div>
        <h1 id="hero-title" className="fade-in-up">Situs Terpercaya dengan Bonus Melimpah dan Peluang Menang Lebih Besar!</h1>
        <p id="hero-subtitle" className="fade-in-up">Jaminan Keamanan, Bonus Harian, dan Pelayanan Prima 24 Jam Nonstop.</p>
        <div id="button-group" className="button-group fade-in-up">
          <a id="btn-daftar" href="https://situskubet.net/register/dw311" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Daftar Sekarang</a>
          <a id="btn-login" href="https://situskubet.net/register/dw311" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Login</a>
          <a id="btn-telegram" href="https://t.me/ninalestariii" target="_blank" rel="noopener noreferrer" className="btn btn-telegram">
            <span className="icon">💬</span>Gabung Telegram
          </a>
        </div>
        {/* Pemicu animasi saat elemen masuk viewport */}
        <amp-position-observer on="enter:heroAnimation.start" layout="nodisplay" once></amp-position-observer>
      </header>

      {/* Bagian Keunggulan */}
      <main className="features" id="features-section">
        <div className="container">
          <h2>Keunggulan KUBET Pilihan Utama Anda</h2>
          <div className="features-grid">

            {/* Kartu Fitur 1 */}
            <div id="feature1" className="feature-card fade-in-up">
              <div className="icon">🏆</div>
              <h3>Bonus Fantastis & Promosi Setiap Hari</h3>
              <p>Nikmati berbagai bonus menarik dan promosi eksklusif yang selalu diperbarui untuk keuntungan maksimal Anda.</p>
              <amp-position-observer on="enter:animateFeature1.start" layout="nodisplay" once></amp-position-observer>
            </div>

            {/* Kartu Fitur 2 */}
            <div id="feature2" className="feature-card fade-in-up">
              <div className="icon">🔒</div>
              <h3>Keamanan Data Terjamin 100%</h3>
              <p>Sistem keamanan canggih kami melindungi setiap transaksi dan data pribadi Anda dengan enkripsi kelas dunia.</p>
              <amp-position-observer on="enter:animateFeature2.start" layout="nodisplay" once></amp-position-observer>
            </div>

            {/* Kartu Fitur 3 */}
            <div id="feature3" className="feature-card fade-in-up">
              <div className="icon">⚡</div>
              <h3>Transaksi Cepat & Mudah</h3>
              <p>Proses deposit dan withdraw yang super cepat, didukung berbagai metode pembayaran terpercaya.</p>
              <amp-position-observer on="enter:animateFeature3.start" layout="nodisplay" once></amp-position-observer>
            </div>
            
            {/* Kartu Fitur 4 */}
            <div id="feature4" className="feature-card fade-in-up">
                <div className="icon">⭐</div>
                <h3>Layanan Pelanggan Profesional 24/7</h3>
                <p>Tim support kami siap membantu Anda kapan saja, memastikan pengalaman bermain yang lancar dan nyaman.</p>
                <amp-position-observer on="enter:animateFeature4.start" layout="nodisplay" once></amp-position-observer>
            </div>

          </div>
        </div>
      </main>

      {/* Google Analytics */}
      <amp-analytics type="googleanalytics">
        <script type="application/json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ampAnalyticsConfig) }} />
      </amp-analytics>
    </>
  );
}
