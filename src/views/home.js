import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container10">
      <Helmet>
        <title>Upright Vacant Chamois</title>
        <meta property="og:title" content="Upright Vacant Chamois" />
        <link
          rel="canonical"
          href="https://upright-vacant-chamois-kzpw9b.teleporthq.app/"
        />
      </Helmet>
      <div className="home-container11">
        <div className="home-container12">
          <Script
            html={`<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: "Inter", sans-serif;
  color: var(--color-text-primary);
  background: var(--color-white);
  line-height: 1.6;
  overflow-x: hidden;
}
</style>`}
          ></Script>
        </div>
      </div>
      <div className="apex-ecom-container">
        <nav className="apex-nav">
          <div className="nav-logo">
            <span>
              {' '}
              APEX
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>ECOM LAB</span>
          </div>
          <div className="nav-links">
            <a href="#how-it-works">
              <div>
                <span>Process</span>
              </div>
            </a>
            <a href="#features">
              <div>
                <span>Features</span>
              </div>
            </a>
            <a href="#pricing">
              <div>
                <span>Pricing</span>
              </div>
            </a>
          </div>
          <button className="nav-cta">Start Free Audit</button>
        </nav>
        <section className="hero-section">
          <div className="hero-bg-media">
            <video
              src="https://videos.pexels.com/video-files/854322/854322-hd_1280_720_25fps.mp4"
              loop="true"
              muted="true"
              autoPlay="true"
              playsInline="true"
              className="hero-video"
            ></video>
            <div className="hero-overlay"></div>
          </div>
          <div className="hero-content">
            <div className="badge">
              <span>Next-Gen Ecommerce Auditing</span>
            </div>
            <h1 className="hero-title">
              <span>
                {' '}
                We Audit, Optimize and
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span className="home-thq-text-gradient-elm">
                Scale Ecommerce Brands
              </span>
            </h1>
            <p className="hero-subtitle">
              Get a detailed performance report for your Shopify or ecommerce
              store in minutes. Data-driven insights to crush your competition.
            </p>
            <div className="hero-actions">
              <button className="btn-primary">Start Free Audit</button>
              <button className="btn-secondary">See How It Works</button>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <strong>500+</strong>
                <span>Stores Audited</span>
              </div>
              <div className="stat-item">
                <strong>32%</strong>
                <span>Avg. CRO Lift</span>
              </div>
              <div className="stat-item">
                <strong>24/7</strong>
                <span>Real-time Analysis</span>
              </div>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="how-it-works">
          <div className="section-header">
            <h2 className="section-title">Precision Engineering for Growth</h2>
            <p className="section-desc">
              Our 3-step proprietary process transforms your store into a
              high-converting machine.
            </p>
          </div>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-num">
                <span>01</span>
              </div>
              <div className="step-icon-box">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" rx="1" width="7" height="9"></rect>
                    <rect x="14" y="3" rx="1" width="7" height="5"></rect>
                    <rect x="14" y="12" rx="1" width="7" height="9"></rect>
                    <rect x="3" y="16" rx="1" width="7" height="5"></rect>
                  </g>
                </svg>
              </div>
              <h3>Submit Store</h3>
              <p>
                Connect your Shopify store or enter your URL for a deep-dive
                crawl of your entire ecosystem.
              </p>
            </div>
            <div className="featured step-card">
              <div className="step-num">
                <span>02</span>
              </div>
              <div className="step-icon-box">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m21 21l-4.34-4.34"></path>
                    <circle r="8" cx="11" cy="11"></circle>
                  </g>
                </svg>
              </div>
              <h3>We Analyze Performance</h3>
              <p>
                Our AI engines run 150+ check-points across UI/UX, page speed,
                SEO, and conversion triggers.
              </p>
            </div>
            <div className="step-card">
              <div className="step-num">
                <span>03</span>
              </div>
              <div className="step-icon-box">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"></path>
                    <path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"></path>
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"></path>
                  </g>
                </svg>
              </div>
              <h3>Get Action Plan</h3>
              <p>
                Receive a comprehensive roadmap with prioritized fixes to
                immediately increase your revenue.
              </p>
            </div>
          </div>
        </section>
        <section id="features" className="features-section">
          <div className="features-container">
            <div className="features-text">
              <h2 className="section-title text-white">The Full Audit Suite</h2>
              <div className="feature-list">
                <div id="feat-1" className="feature-item">
                  <div className="feature-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                        <path d="m19 9l-5 5l-4-4l-3 3"></path>
                      </g>
                    </svg>
                  </div>
                  <div>
                    <h4>Conversion Analysis</h4>
                    <p>
                      Identify exactly where you&apos;re losing customers in the
                      funnel.
                    </p>
                  </div>
                </div>
                <div id="feat-2" className="feature-item">
                  <div className="feature-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h4>Speed Audit</h4>
                    <p>
                      Core Web Vitals check to ensure your site loads in under
                      2s.
                    </p>
                  </div>
                </div>
                <div id="feat-3" className="feature-item">
                  <div className="feature-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                        <path d="m9 12l2 2l4-4"></path>
                      </g>
                    </svg>
                  </div>
                  <div>
                    <h4>Trust Optimization</h4>
                    <p>
                      Psychological triggers that build immediate buyer
                      confidence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="features-visual">
              <div className="visual-card">
                <img
                  alt="Dashboard Analytics"
                  src="https://images.pexels.com/photos/7109243/pexels-photo-7109243.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
                <div className="floating-notif">
                  <span>Audit Complete: 94/100</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="testimonials">
          <h2 className="section-title text-center">
            Trusted by Leading Brands
          </h2>
          <div className="testimonials-slider">
            <div className="testimonial-card">
              <p className="quote">
                &quot;The Apex Audit uncovered leaks in our checkout process we
                never knew existed. We saw a 14% revenue bump in the first
                month.&quot;
              </p>
              <div className="user-info">
                <div className="user-avatar">
                  <span>SC</span>
                </div>
                <div>
                  <span className="user-name">Sarah Chen</span>
                  <span className="user-title">Founder, GlowSkin</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <p className="quote">
                &quot;Speed was our biggest bottleneck. The technical roadmap
                provided by Apex was clear, actionable, and delivered
                results.&quot;
              </p>
              <div className="user-info">
                <div className="user-avatar">
                  <span>MH</span>
                </div>
                <div>
                  <span className="user-name">Marcus Harris</span>
                  <span className="user-title">CTO, Urban Gear</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <p className="quote">
                &quot;Finally, an audit tool that doesn&apos;t just give generic
                advice. The design feedback was specific and
                game-changing.&quot;
              </p>
              <div className="user-info">
                <div className="user-avatar">
                  <span>JL</span>
                </div>
                <div>
                  <span className="user-name">Jessica Low</span>
                  <span className="user-title">
                    Ecom Director, Peak Performance
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="pricing" className="pricing-section">
          <div className="section-header">
            <h2 className="section-title">Transparent Pricing</h2>
            <p className="section-desc">
              Choose the depth of analysis your brand needs.
            </p>
          </div>
          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="price-header">
                <h3>Free Audit</h3>
                <div className="price">
                  <span>
                    {' '}
                    $0
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>/forever</span>
                </div>
              </div>
              <ul className="price-features">
                <li>
                  <span>Basic Speed Check</span>
                </li>
                <li>
                  <span>Top 5 SEO Fixes</span>
                </li>
                <li>
                  <span>Home Page UX Review</span>
                </li>
                <li>
                  <span>Email Summary</span>
                </li>
              </ul>
              <button className="btn-outline">Start Free</button>
            </div>
            <div className="pricing-card premium">
              <div className="popular-tag">
                <span>Most Popular</span>
              </div>
              <div className="price-header">
                <h3>Pro Audit</h3>
                <div className="price">
                  <span>
                    {' '}
                    $29
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>/per store</span>
                </div>
              </div>
              <ul className="price-features">
                <li>
                  <span>Full Conversion Funnel Audit</span>
                </li>
                <li>
                  <span>Deep Technical Speed Analysis</span>
                </li>
                <li>
                  <span>Competitor Benchmarking</span>
                </li>
                <li>
                  <span>Trust Optimization Blueprint</span>
                </li>
                <li>
                  <span>1-on-1 Action Strategy</span>
                </li>
              </ul>
              <button className="btn-primary">Get Pro Audit</button>
            </div>
          </div>
        </section>
        <section id="audit-integration-container" className="audit-interface">
          <div className="interface-grid">
            <div className="status-panel">
              <div className="panel-header">
                <div className="icon-wrapper">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                      <path d="M3 5v14a9 3 0 0 0 18 0V5"></path>
                      <path d="M3 12a9 3 0 0 0 18 0"></path>
                    </g>
                  </svg>
                </div>
                <h3 className="panel-title">System Status</h3>
              </div>
              <div id="status-display" className="idle status-indicator">
                <span className="pulse-dot"></span>
                <span id="status-text">Ready for Submission</span>
              </div>
              <div className="feedback-messages">
                <div id="success-toast" className="success toast hidden">
                  <div className="toast-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11l3 3L22 4"></path>
                      </g>
                    </svg>
                  </div>
                  <p>Audit data synchronized successfully. Redirecting...</p>
                </div>
                <div id="error-toast" className="toast hidden error">
                  <div className="toast-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle r="10" cx="12" cy="12"></circle>
                        <path d="M12 8v4m0 4h.01"></path>
                      </g>
                    </svg>
                  </div>
                  <p id="error-message">
                    Database connection failed. Please try again.
                  </p>
                </div>
              </div>
            </div>
            <div className="form-context">
              <div className="context-card">
                <div className="card-accent"></div>
                <h4>Secure Data Pipeline</h4>
                <p>
                  Your audit request is processed via an encrypted Supabase edge
                  instance. We ensure high-availability and zero-leak data
                  handling.
                </p>
                <div className="tech-stack">
                  <span className="tag">PostgreSQL</span>
                  <span className="tag">Next.js</span>
                  <span className="tag">Supabase Auth</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="home-container22">
          <div className="home-container23">
            <Script
              html={`<style>
        @keyframes pulse {0% {opacity: 1;
transform: scale(1);}
50% {opacity: 0.4;
transform: scale(1.2);}
100% {opacity: 1;
transform: scale(1);}}@keyframes slideIn {from {opacity: 0;
transform: translateY(10px);}
to {opacity: 1;
transform: translateY(0);}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="home-container24">
          <div className="home-container25">
            <Script
              html={`<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2">

</script>`}
            ></Script>
          </div>
        </div>
        <div className="home-container26">
          <div className="home-container27">
            <Script
              html={`<script>
(function(){
  ;(function () {
    // 1. Initialize Supabase Client
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    // Note: In a client-side script environment where process.env isn't available,
    // these would typically be injected by the build tool or a server-side route.
    // Assuming standard Next.js environment injection for this script block.
    const supabase = window.supabase.createClient(supabaseUrl, supabaseAnonKey)

    // DOM Elements for feedback
    const statusDisplay = document.getElementById("status-display")
    const statusText = document.getElementById("status-text")
    const successToast = document.getElementById("success-toast")
    const errorToast = document.getElementById("error-toast")
    const errorMessage = document.getElementById("error-message")

    /**
     * Updates the UI state during the submission lifecycle
     */
    function updateUIState(state, message = "") {
      statusDisplay.className = \`status-indicator \${state}\`
      statusText.textContent = message || (state === "loading" ? "Processing Audit Request..." : "System Ready")

      if (state === "error") {
        errorToast.classList.remove("hidden")
        successToast.classList.add("hidden")
        if (message) errorMessage.textContent = message
      } else if (state === "success") {
        successToast.classList.remove("hidden")
        errorToast.classList.add("hidden")
      }
    }

    /**
     * 2. Function 'submitAudit' handles data insertion
     */
    async function submitAudit(formData) {
      try {
        updateUIState("loading")

        // 3. Insert data into 'audits' table
        const { data, error } = await supabase.from("audits").insert([
          {
            store_url: formData.store_url,
            platform: formData.platform,
            revenue_range: formData.revenue_range,
            email: formData.email,
            struggle: formData.struggle,
            created_at: new Date().toISOString(),
          },
        ])

        if (error) throw error

        // 4. Handle success
        updateUIState("success", "Audit Registered Successfully")

        // Artificial delay for user to see success state before redirect
        setTimeout(() => {
          window.location.href = "/audit-result"
        }, 1500)
      } catch (error) {
        // 5. Handle errors with professional feedback
        console.error("Supabase Submission Error:", error.message)
        updateUIState("error", \`Submission Failed: \${error.message || "Server connection error"}\`)

        // Optional: Alert for immediate attention
        alert("We encountered an issue processing your audit request. Please check your connection or try again later.")
      }
    }

    // 6. Wrapped in listener to attach to form
    document.addEventListener("DOMContentLoaded", () => {
      // Assuming the form has ID 'audit-form'
      const auditForm = document.getElementById("audit-form")

      if (auditForm) {
        auditForm.addEventListener("submit", async (e) => {
          e.preventDefault()

          // Extract form data
          const fd = new FormData(auditForm)
          const data = {
            store_url: fd.get("store_url"),
            platform: fd.get("platform"),
            revenue_range: fd.get("revenue_range"),
            email: fd.get("email"),
            struggle: fd.get("struggle"),
          }

          // Basic validation before calling submission
          if (!data.email || !data.store_url) {
            updateUIState("error", "Please fill in all required fields.")
            return
          }

          await submitAudit(data)
        })
      } else {
        console.warn('Audit form element not found. Ensure ID "audit-form" is present.')
      }
    })
  })()
})()
</script>`}
            ></Script>
          </div>
        </div>
        <footer className="apex-footer">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="nav-logo">
                <span>
                  {' '}
                  APEX
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>ECOM LAB</span>
              </div>
              <p>The gold standard in ecommerce performance auditing.</p>
            </div>
            <div className="footer-links">
              <h4>Product</h4>
              <a href="#">
                <div>
                  <span>Audit Tool</span>
                </div>
              </a>
              <a href="#">
                <div>
                  <span>Pricing</span>
                </div>
              </a>
              <a href="#">
                <div>
                  <span>API</span>
                </div>
              </a>
            </div>
            <div className="footer-links">
              <h4>Resources</h4>
              <a href="#">
                <div>
                  <span>Blog</span>
                </div>
              </a>
              <a href="#">
                <div>
                  <span>Case Studies</span>
                </div>
              </a>
              <a href="#">
                <div>
                  <span>Support</span>
                </div>
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>&amp;copy; 2024 Apex Ecom Lab. All rights reserved.</span>
          </div>
        </footer>
      </div>
      <div className="home-container34">
        <div className="home-container35">
          <Script
            html={`<style>
        @keyframes float {0%,100% {transform: translateY(0);}
50% {transform: translateY(-20px);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="home-container36">
        <div className="home-container37">
          <Script
            html={`<script>
(function(){
  // Simple Scroll Animation Observer
  const observerOptions = {
    threshold: 0.1,
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Apply to sections
  document.querySelectorAll(".step-card, .feature-item, .testimonial-card, .pricing-card").forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "all 0.6s ease-out"
    observer.observe(el)
  })

  // Navbar background change on scroll
  window.addEventListener("scroll", () => {
    const nav = document.querySelector(".apex-nav")
    if (window.scrollY > 50) {
      nav.style.padding = "12px 5%"
      nav.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)"
    } else {
      nav.style.padding = "20px 5%"
      nav.style.boxShadow = "none"
    }
  })

  // Interactive feature visual
  const featureItems = document.querySelectorAll(".feature-item")
  const visualImg = document.querySelector(".visual-card img")

  const images = ["https://images.pexels.com/photos/7109243/pexels-photo-7109243.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "https://images.pexels.com/photos/10020092/pexels-photo-10020092.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"]

  featureItems.forEach((item, index) => {
    item.addEventListener("mouseenter", () => {
      visualImg.src = images[index]
      visualImg.style.opacity = "0.8"
      setTimeout(() => {
        visualImg.style.opacity = "1"
      }, 150)
    })
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
      <a href="https://play.teleporthq.io/signup" className="home-link19">
        <div aria-label="Sign up to TeleportHQ" className="home-container38">
          <svg
            width="24"
            height="24"
            viewBox="0 0 19 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="home-icon48"
          >
            <path
              d="M9.1017 4.64355H2.17867C0.711684 4.64355 -0.477539 5.79975 -0.477539 7.22599V13.9567C-0.477539 15.3829 0.711684 16.5391 2.17867 16.5391H9.1017C10.5687 16.5391 11.7579 15.3829 11.7579 13.9567V7.22599C11.7579 5.79975 10.5687 4.64355 9.1017 4.64355Z"
              fill="#B23ADE"
            ></path>
            <path
              d="M10.9733 12.7878C14.4208 12.7878 17.2156 10.0706 17.2156 6.71886C17.2156 3.3671 14.4208 0.649963 10.9733 0.649963C7.52573 0.649963 4.73096 3.3671 4.73096 6.71886C4.73096 10.0706 7.52573 12.7878 10.9733 12.7878Z"
              fill="#FF5C5C"
            ></path>
            <path
              d="M17.7373 13.3654C19.1497 14.1588 19.1497 15.4634 17.7373 16.2493L10.0865 20.5387C8.67402 21.332 7.51855 20.6836 7.51855 19.0968V10.5141C7.51855 8.92916 8.67402 8.2807 10.0865 9.07221L17.7373 13.3654Z"
              fill="#2874DE"
            ></path>
          </svg>
          <span className="home-text75">Built in TeleportHQ</span>
        </div>
      </a>
    </div>
  )
}

export default Home
