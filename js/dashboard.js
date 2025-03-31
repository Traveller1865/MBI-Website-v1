// Enhanced dashboard.js with interactive charts and UI elements

document.addEventListener("DOMContentLoaded", () => {
    // Initialize charts
    initCharts()
   
    // Initialize interactive elements
    initMembershipTierSlider()
    initRoadmapTimeline()
   
    // Remove loading state
    document.body.classList.remove("loading")
   })
   
   /**
   * Initializes all charts on the dashboard
   */
   function initCharts() {
    // Set common Chart.js options
    if (typeof Chart !== 'undefined') {
      Chart.defaults.font = {
        family: "'Inter', sans-serif"
      };
      Chart.defaults.color = "#6c757d";
   
      // Check if dark mode is enabled
      const isDarkMode = document.body.classList.contains("dark-mode-enabled")
      const textColor = isDarkMode ? "#e0e0e0" : "#6c757d"
      const gridColor = isDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
   
      // Revenue Projection Chart
      const revenueCtx = document.getElementById("revenueChart")
      if (revenueCtx) {
        new Chart(revenueCtx, {
          type: "line",
          data: {
            labels: ["Year 1", "Year 2", "Year 3", "Year 4", "Year 5"],
            datasets: [
              {
                label: "Revenue (in millions $)",
                data: [4.2, 12.5, 28.7, 52.1, 87.3],
                borderColor: "#0056b3",
                backgroundColor: "rgba(0, 86, 179, 0.1)",
                tension: 0.4,
                fill: true,
              },
              {
                label: "EBITDA (in millions $)",
                data: [-1.8, 0.5, 3.2, 9.8, 19.6],
                borderColor: "#28a745",
                backgroundColor: "rgba(40, 167, 69, 0.1)",
                tension: 0.4,
                fill: true,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: "top",
                labels: {
                  color: textColor,
                },
              },
              tooltip: {
                mode: "index",
                intersect: false,
              },
            },
            scales: {
              x: {
                grid: {
                  color: gridColor,
                },
                ticks: {
                  color: textColor,
                },
              },
              y: {
                grid: {
                  color: gridColor,
                },
                ticks: {
                  color: textColor,
                  callback: (value) => "$" + value + "M",
                },
              },
            },
          },
        })
      }
   
      // Market Size Chart
      const marketSizeCtx = document.getElementById("marketSizeChart")
      if (marketSizeCtx) {
        new Chart(marketSizeCtx, {
          type: "bar",
          data: {
            labels: ["Preventive Healthcare", "AI in Healthcare", "Corporate Wellness", "Direct Primary Care"],
            datasets: [
              {
                label: "2024 (in billions $)",
                data: [350, 15, 60, 65.6],
                backgroundColor: "rgba(0, 86, 179, 0.7)",
              },
              {
                label: "Projected (in billions $)",
                data: [773, 164, 129, 92],
                backgroundColor: "rgba(40, 167, 69, 0.7)",
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: "top",
                labels: {
                  color: textColor,
                },
              },
              tooltip: {
                callbacks: {
                  label: (context) => context.dataset.label + ": $" + context.raw + "B",
                },
              },
            },
            scales: {
              x: {
                grid: {
                  color: gridColor,
                },
                ticks: {
                  color: textColor,
                },
              },
              y: {
                grid: {
                  color: gridColor,
                },
                ticks: {
                  color: textColor,
                  callback: (value) => "$" + value + "B",
                },
              },
            },
          },
        })
      }
   
      // Revenue Streams Chart
      const revenueStreamsCtx = document.getElementById("revenueStreamsChart")
      if (revenueStreamsCtx) {
        new Chart(revenueStreamsCtx, {
          type: "doughnut",
          data: {
            labels: ["Individual Memberships", "Corporate Programs", "White-Label Partnerships", "Data & Insights"],
            datasets: [
              {
                data: [45, 35, 15, 5],
                backgroundColor: [
                  "rgba(0, 86, 179, 0.8)",
                  "rgba(40, 167, 69, 0.8)",
                  "rgba(255, 193, 7, 0.8)",
                  "rgba(23, 162, 184, 0.8)",
                ],
                borderWidth: 1,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: "right",
                labels: {
                  color: textColor,
                },
              },
              tooltip: {
                callbacks: {
                  label: (context) => context.label + ": " + context.raw + "%",
                },
              },
            },
          },
        })
      }
   
      // LTV:CAC Chart
      const ltvcacCtx = document.getElementById("ltvcacChart")
      if (ltvcacCtx) {
        new Chart(ltvcacCtx, {
          type: "bar",
          data: {
            labels: ["Year 1", "Year 2", "Year 3"],
            datasets: [
              {
                label: "Customer Acquisition Cost",
                data: [350, 325, 300],
                backgroundColor: "rgba(220, 53, 69, 0.7)",
              },
              {
                label: "Lifetime Value",
                data: [2100, 3500, 3850],
                backgroundColor: "rgba(40, 167, 69, 0.7)",
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: "top",
                labels: {
                  color: textColor,
                },
              },
              tooltip: {
                callbacks: {
                  label: (context) => context.dataset.label + ": $" + context.raw,
                },
              },
            },
            scales: {
              x: {
                grid: {
                  color: gridColor,
                },
                ticks: {
                  color: textColor,
                },
              },
              y: {
                grid: {
                  color: gridColor,
                },
                ticks: {
                  color: textColor,
                  callback: (value) => "$" + value,
                },
              },
            },
          },
        })
      }
   
      // Member Growth Chart
      const memberGrowthCtx = document.getElementById("memberGrowthChart")
      if (memberGrowthCtx) {
        new Chart(memberGrowthCtx, {
          type: "line",
          data: {
            labels: ["Year 1", "Year 2", "Year 3", "Year 4", "Year 5"],
            datasets: [
              {
                label: "Members",
                data: [500, 5000, 25000, 75000, 150000],
                borderColor: "#0056b3",
                backgroundColor: "rgba(0, 86, 179, 0.1)",
                tension: 0.4,
                fill: true,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: "top",
                labels: {
                  color: textColor,
                },
              },
            },
            scales: {
              x: {
                grid: {
                  color: gridColor,
                },
                ticks: {
                  color: textColor,
                },
              },
              y: {
                grid: {
                  color: gridColor,
                },
                ticks: {
                  color: textColor,
                  callback: (value) => {
                    if (value >= 1000) {
                      return value / 1000 + "k"
                    }
                    return value
                  },
                },
              },
            },
          },
        })
      }
   
      // Investment Allocation Chart
      const investmentCtx = document.getElementById("investmentChart")
      if (investmentCtx) {
        new Chart(investmentCtx, {
          type: "pie",
          data: {
            labels: [
              "Technology & AI",
              "Member Acquisition",
              "Corporate Partnerships",
              "Regulatory Compliance",
              "Healthcare Network",
            ],
            datasets: [
              {
                data: [35, 25, 20, 10, 10],
                backgroundColor: [
                  "rgba(0, 86, 179, 0.8)",
                  "rgba(40, 167, 69, 0.8)",
                  "rgba(255, 193, 7, 0.8)",
                  "rgba(23, 162, 184, 0.8)",
                  "rgba(108, 117, 125, 0.8)",
                ],
                borderWidth: 1,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: "right",
                labels: {
                  color: textColor,
                },
              },
              tooltip: {
                callbacks: {
                  label: (context) => context.label + ": " + context.raw + "%",
                },
              },
            },
          },
        })
      }
    }
   }
   
   /**
   * Initializes the membership tier slider
   */
   function initMembershipTierSlider() {
    const tierSlider = document.getElementById("tierSlider")
    if (!tierSlider) return
   
    const tierLabels = document.querySelectorAll(".tier-label")
    const tierDetails = document.querySelectorAll(".tier-detail")
   
    // Update active tier on slider change
    tierSlider.addEventListener("input", function () {
      const tierValue = this.value
   
      // Update labels
      tierLabels.forEach((label) => {
        label.classList.remove("active")
        if (label.dataset.tier === tierValue) {
          label.classList.add("active")
        }
      })
   
      // Update details
      tierDetails.forEach((detail) => {
        detail.classList.remove("active")
      })
      document.getElementById(`tier-${tierValue}-details`).classList.add("active")
    })
   
    // Allow clicking on tier labels
    tierLabels.forEach((label) => {
      label.addEventListener("click", function () {
        const tierValue = this.dataset.tier
        tierSlider.value = tierValue
   
        // Trigger input event to update UI
        const event = new Event("input")
        tierSlider.dispatchEvent(event)
      })
    })
   }
   
   /**
   * Initializes the roadmap timeline
   */
   function initRoadmapTimeline() {
    const timelinePhases = document.querySelectorAll(".timeline-phase")
    if (timelinePhases.length === 0) return
   
    const phaseDetails = document.querySelectorAll(".phase-detail")
   
    timelinePhases.forEach((phase) => {
      phase.addEventListener("click", function () {
        const phaseId = this.dataset.phase
   
        // Update active phase
        timelinePhases.forEach((p) => p.classList.remove("active"))
        this.classList.add("active")
   
        // Update phase details
        phaseDetails.forEach((detail) => detail.classList.remove("active"))
        document.getElementById(`${phaseId}-details`).classList.add("active")
      })
    })
   }
   
   /**
   * Updates charts when dark mode is toggled
   */
   document.addEventListener("darkModeToggled", () => {
    // Re-initialize charts with updated colors
    initCharts()
   })
   
   // Listen for dark mode toggle from main.js
   const darkModeToggle = document.getElementById("dark-mode-toggle")
   if (darkModeToggle) {
    darkModeToggle.addEventListener("click", () => {
      // Create and dispatch custom event
      const event = new Event("darkModeToggled")
      document.dispatchEvent(event)
    })
   }
   