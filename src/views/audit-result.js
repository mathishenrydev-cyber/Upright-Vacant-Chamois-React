import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './audit-result.css'

const AuditResult = (props) => {
  return (
    <div className="audit-result-container1">
      <Helmet>
        <title>Audit-Result - Upright Vacant Chamois</title>
        <meta
          property="og:title"
          content="Audit-Result - Upright Vacant Chamois"
        />
        <link
          rel="canonical"
          href="https://upright-vacant-chamois-kzpw9b.teleporthq.app/audit-result"
        />
      </Helmet>
      <div className="audit-result-container2">
        <div className="audit-result-container3">
          <Script
            html={`<style>
input, select, textarea {
  width: 100%;
  padding: 14px 18px;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  background: #f8fafc;
  font-size: 15px;
  color: var(--color-text-main);
  transition: var(--transition-smooth);
  outline: none;
}
input:focus, select:focus, textarea:focus {
  border-color: var(--color-accent);
  background: #ffffff;
  box-shadow: 0 0 0 4px rgba(0, 163, 255, 0.08);
}
</style>`}
          ></Script>
        </div>
      </div>
      <div className="apex-audit-container">
        <div className="orb-1 glow-orb"></div>
        <div className="glow-orb orb-2"></div>
        <div className="audit-card">
          <div className="audit-header">
            <h1 className="brand-title">Apex Ecom Lab</h1>
            <p className="brand-subtitle">
              Precision Audit &amp; Scaling Strategy
            </p>
          </div>
          <div className="progress-wrapper">
            <div className="progress-bar-container">
              <div id="progress-line" className="progress-line"></div>
            </div>
            <div className="steps-indicators">
              <div id="node-1" className="active step-node">
                <div className="node-icon">
                  <svg
                    fill="none"
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle r="10" cx="12" cy="12"></circle>
                    <circle r="1" cx="12" cy="12"></circle>
                  </svg>
                </div>
                <span>Store</span>
              </div>
              <div id="node-2" className="step-node">
                <div className="node-icon">
                  <svg
                    fill="none"
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle r="4" cx="9" cy="7"></circle>
                    <path d="M19 8v6m3-3h-6"></path>
                  </svg>
                </div>
                <span>Business</span>
              </div>
              <div id="node-3" className="step-node">
                <div className="node-icon">
                  <svg
                    fill="none"
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77a4 4 0 0 1 6.74 0a4 4 0 0 1 4.78 4.78a4 4 0 0 1 0 6.74a4 4 0 0 1-4.77 4.78a4 4 0 0 1-6.75 0a4 4 0 0 1-4.78-4.77a4 4 0 0 1 0-6.76M12 8v8m-4-4h8"></path>
                  </svg>
                </div>
                <span>Challenges</span>
              </div>
            </div>
          </div>
          <form
            id="audit-form"
            data-form-id="265b6abd-b637-4b83-a6a6-c69a5fef5b8e"
            className="audit-form-content"
          >
            <div id="step-1" className="active form-step">
              <div className="step-content">
                <h2 className="step-title">Store Details</h2>
                <p className="step-desc">
                  Tell us where you&apos;re currently operating.
                </p>
                <div className="input-group">
                  <label htmlFor="store-url">Store URL</label>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      id="store-url"
                      name="textinput"
                      required="true"
                      placeholder="https://yourstore.com"
                      data-form-field-id="store-url"
                    />
                    <div id="error-url" className="error-msg">
                      <span>
                        Please enter a valid URL (e.g., https://store.com)
                      </span>
                    </div>
                  </div>
                </div>
                <div className="input-group">
                  <label htmlFor="platform">E-commerce Platform</label>
                  <div className="input-wrapper">
                    <select
                      id="platform"
                      name="select"
                      required="true"
                      data-form-field-id="platform"
                    >
                      <option value="true" disabled="true" selected="true">
                        Select platform...
                      </option>
                      <option value="shopify">Shopify</option>
                      <option value="woocommerce">WooCommerce</option>
                      <option value="wix">Wix</option>
                      <option value="custom">Custom Solution</option>
                    </select>
                    <div id="error-platform" className="error-msg">
                      <span>Please select your platform</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="step-2" className="form-step">
              <div className="step-content">
                <h2 className="step-title">Business Profile</h2>
                <p className="step-desc">
                  Help us understand your current scale.
                </p>
                <div className="input-group">
                  <label htmlFor="revenue">Monthly Revenue Range</label>
                  <div className="input-wrapper">
                    <select
                      id="revenue"
                      name="select"
                      required="true"
                      data-form-field-id="revenue"
                    >
                      <option value="true" disabled="true" selected="true">
                        Select range...
                      </option>
                      <option value="0-10k">$0 - $10k</option>
                      <option value="10k-50k">$10k - $50k</option>
                      <option value="50k-250k">$50k - $250k</option>
                      <option value="250k+">$250k+</option>
                    </select>
                    <div id="error-revenue" className="error-msg">
                      <span>Please select a revenue range</span>
                    </div>
                  </div>
                </div>
                <div className="input-group">
                  <label htmlFor="email">Business Email</label>
                  <div className="input-wrapper">
                    <input
                      type="email"
                      id="email"
                      name="textinput"
                      required="true"
                      placeholder="ceo@yourbrand.com"
                      data-form-field-id="email"
                    />
                    <div id="error-email" className="error-msg">
                      <span>Please enter a valid email address</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="step-3" className="form-step">
              <div className="step-content">
                <h2 className="step-title">Core Challenges</h2>
                <p className="step-desc">
                  What is the #1 thing holding you back right now?
                </p>
                <div className="input-group">
                  <label htmlFor="struggle">Your Biggest Struggle</label>
                  <div className="input-wrapper">
                    <textarea
                      id="struggle"
                      name="textarea"
                      rows="5"
                      required="true"
                      placeholder="e.g. Low conversion rates, high CPA on Meta ads, scaling issues..."
                      data-form-field-id="struggle"
                    ></textarea>
                    <div id="error-struggle" className="error-msg">
                      <span>Please share your challenges so we can help</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-footer">
              <button
                id="prev-btn"
                name="button"
                type="button"
                data-form-field-id="prev-btn"
                className="audit-result-btn-secondary hidden"
              >
                <svg
                  fill="none"
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                  height="18"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m15 18-6-6 6-6"></path>
                </svg>
                <span>
                  {' '}
                  Back
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </button>
              <button
                id="next-btn"
                name="button"
                type="button"
                data-form-field-id="next-btn"
                className="audit-result-btn-primary"
              >
                <span>
                  {' '}
                  Next
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <svg
                  fill="none"
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                  height="18"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </button>
              <button
                id="submit-btn"
                name="button"
                type="submit"
                data-form-field-id="submit-btn"
                className="audit-result-btn-primary hidden"
              >
                <span>
                  {' '}
                  Generate Audit
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <svg
                  fill="none"
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                  height="18"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
                </svg>
              </button>
            </div>
          </form>
        </div>
        <div id="loading-screen" className="loading-overlay hidden">
          <div className="loading-content">
            <div className="loader-visual">
              <div className="scanner-line"></div>
              <div className="loader-circle"></div>
            </div>
            <h3 id="loading-text">Analyzing store performance...</h3>
            <div className="loading-status-list">
              <div id="status-1" className="status-item">
                <span>Scraping site metadata...</span>
              </div>
              <div id="status-2" className="status-item">
                <span>Evaluating UX bottlenecks...</span>
              </div>
              <div id="status-3" className="status-item">
                <span>Generating growth roadmap...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="audit-result-container4">
        <div className="audit-result-container5">
          <Script
            html={`<style>
        @keyframes slideIn {from {opacity: 0;
transform: translateY(10px);}
to {opacity: 1;
transform: translateY(0);}}@keyframes spin {to {transform: rotate(360deg);}}@keyframes scan {0%,100% {top: 0;
opacity: 0;}
50% {top: 100%;
opacity: 1;}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="audit-result-container6">
        <div className="audit-result-container7">
          <Script
            html={`<script>
(function(){
  ;(function () {
    const form = document.getElementById("audit-form")
    const steps = [document.getElementById("step-1"), document.getElementById("step-2"), document.getElementById("step-3")]
    const nodes = [document.getElementById("node-1"), document.getElementById("node-2"), document.getElementById("node-3")]
    const progressLine = document.getElementById("progress-line")
    const nextBtn = document.getElementById("next-btn")
    const prevBtn = document.getElementById("prev-btn")
    const submitBtn = document.getElementById("submit-btn")
    const loadingScreen = document.getElementById("loading-screen")

    let currentStep = 0

    function updateUI() {
      // Show/Hide steps
      steps.forEach((step, idx) => {
        step.classList.toggle("active", idx === currentStep)
      })

      // Update nodes
      nodes.forEach((node, idx) => {
        node.classList.toggle("active", idx === currentStep)
        node.classList.toggle("completed", idx < currentStep)
      })

      // Update Progress Bar
      const progressWidth = (currentStep / (steps.length - 1)) * 100
      progressLine.style.width = \`\${progressWidth}%\`

      // Navigation buttons
      prevBtn.classList.toggle("hidden", currentStep === 0)

      if (currentStep === steps.length - 1) {
        nextBtn.classList.add("hidden")
        submitBtn.classList.remove("hidden")
      } else {
        nextBtn.classList.remove("hidden")
        submitBtn.classList.add("hidden")
      }
    }

    function validateStep(stepIdx) {
      let isValid = true
      const currentContainer = steps[stepIdx]
      const inputs = currentContainer.querySelectorAll("input, select, textarea")

      inputs.forEach((input) => {
        const wrapper = input.closest(".input-wrapper")
        wrapper.classList.remove("error")

        // Required check
        if (input.required && !input.value.trim()) {
          isValid = false
          wrapper.classList.add("error")
        }

        // Email format check
        if (input.type === "email" && input.value) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+\$/
          if (!emailRegex.test(input.value)) {
            isValid = false
            wrapper.classList.add("error")
          }
        }

        // URL format check
        if (input.id === "store-url" && input.value) {
          const urlRegex = /^(https?:\\/\\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\\/\w \.-]*)*\\/?\$/
          if (!urlRegex.test(input.value)) {
            isValid = false
            wrapper.classList.add("error")
          }
        }
      })

      return isValid
    }

    nextBtn.addEventListener("click", () => {
      if (validateStep(currentStep)) {
        currentStep++
        updateUI()
      }
    })

    prevBtn.addEventListener("click", () => {
      currentStep--
      updateUI()
    })

    form.addEventListener("submit", (e) => {
      e.preventDefault()
      if (validateStep(currentStep)) {
        showLoadingSequence()
      }
    })

    function showLoadingSequence() {
      loadingScreen.classList.remove("hidden")

      const statusItems = [document.getElementById("status-1"), document.getElementById("status-2"), document.getElementById("status-3")]

      const loadingText = document.getElementById("loading-text")

      // Simulate analysis steps
      setTimeout(() => {
        statusItems[0].classList.add("visible")
      }, 500)

      setTimeout(() => {
        statusItems[0].classList.add("done")
        statusItems[1].classList.add("visible")
      }, 1200)

      setTimeout(() => {
        statusItems[1].classList.add("done")
        statusItems[2].classList.add("visible")
        loadingText.innerText = "Finalizing your custom report..."
      }, 2000)

      setTimeout(() => {
        statusItems[2].classList.add("done")
        // Final redirect
        window.location.href = "/audit-result"
      }, 3200)
    }

    // Initialize UI
    updateUI()
  })()
})()
</script>`}
          ></Script>
        </div>
      </div>
      <a href="https://play.teleporthq.io/signup">
        <div
          aria-label="Sign up to TeleportHQ"
          className="audit-result-container8"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 19 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="audit-result-icon25"
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
          <span className="audit-result-text30">Built in TeleportHQ</span>
        </div>
      </a>
    </div>
  )
}

export default AuditResult
