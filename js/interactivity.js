// Additional interactivity features for MBI website

document.addEventListener("DOMContentLoaded", () => {
    // Add print functionality
    addPrintButton()
  
    // Add back-to-top button
    addBackToTopButton()
  
    // Add section navigation buttons
    addSectionNavigation()
  
    // Add mobile TOC toggle
    addMobileTocToggle()
  
    // Add keyboard navigation
    addKeyboardNavigation()
  })
  
  // Add print button to content pages
  function addPrintButton() {
    const contentContainer = document.querySelector(".content-container")
    if (!contentContainer) return
  
    const printButton = document.createElement("button")
    printButton.className = "btn btn-outline-primary mb-4"
    printButton.innerHTML = '<i class="fas fa-print me-2"></i>Print Document'
    printButton.addEventListener("click", () => {
      window.print()
    })
  
    contentContainer.insertBefore(printButton, contentContainer.firstChild.nextSibling)
  }
  
  // Add back-to-top button
  function addBackToTopButton() {
    const backToTopButton = document.createElement("button")
    backToTopButton.className = "btn btn-primary back-to-top"
    backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>'
    backToTopButton.style.position = "fixed"
    backToTopButton.style.bottom = "20px"
    backToTopButton.style.right = "20px"
    backToTopButton.style.display = "none"
    backToTopButton.style.zIndex = "1000"
    backToTopButton.style.width = "50px"
    backToTopButton.style.height = "50px"
    backToTopButton.style.borderRadius = "50%"
  
    backToTopButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    })
  
    document.body.appendChild(backToTopButton)
  
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        backToTopButton.style.display = "block"
      } else {
        backToTopButton.style.display = "none"
      }
    })
  }
  
  // Add section navigation buttons (previous/next)
  function addSectionNavigation() {
    const contentSections = document.querySelectorAll(".content-section")
    if (contentSections.length <= 1) return
  
    contentSections.forEach((section, index) => {
      const navigationDiv = document.createElement("div")
      navigationDiv.className = "section-navigation d-flex justify-content-between mt-5 pt-3 border-top"
  
      // Previous section button
      const prevButton = document.createElement("button")
      if (index > 0) {
        prevButton.className = "btn btn-outline-primary"
        prevButton.innerHTML = '<i class="fas fa-arrow-left me-2"></i>Previous Section'
        prevButton.addEventListener("click", () => {
          const prevSection = contentSections[index - 1]
          window.scrollTo({
            top: prevSection.offsetTop - 90,
            behavior: "smooth",
          })
        })
      } else {
        prevButton.className = "btn btn-outline-secondary disabled"
        prevButton.innerHTML = '<i class="fas fa-arrow-left me-2"></i>Previous Section'
      }
  
      // Next section button
      const nextButton = document.createElement("button")
      if (index < contentSections.length - 1) {
        nextButton.className = "btn btn-outline-primary"
        nextButton.innerHTML = 'Next Section<i class="fas fa-arrow-right ms-2"></i>'
        nextButton.addEventListener("click", () => {
          const nextSection = contentSections[index + 1]
          window.scrollTo({
            top: nextSection.offsetTop - 90,
            behavior: "smooth",
          })
        })
      } else {
        nextButton.className = "btn btn-outline-secondary disabled"
        nextButton.innerHTML = 'Next Section<i class="fas fa-arrow-right ms-2"></i>'
      }
  
      navigationDiv.appendChild(prevButton)
      navigationDiv.appendChild(nextButton)
      section.appendChild(navigationDiv)
    })
  }
  
  // Add mobile TOC toggle for better mobile experience
  function addMobileTocToggle() {
    const toc = document.querySelector(".toc")
    if (!toc) return
  
    // Create toggle button for mobile
    const tocToggle = document.createElement("button")
    tocToggle.className = "btn btn-primary d-lg-none w-100 mb-3"
    tocToggle.innerHTML = 'Show Table of Contents <i class="fas fa-chevron-down"></i>'
    tocToggle.setAttribute("data-bs-toggle", "collapse")
    tocToggle.setAttribute("data-bs-target", "#tocCollapse")
    tocToggle.setAttribute("aria-expanded", "false")
    tocToggle.setAttribute("aria-controls", "tocCollapse")
  
    // Create collapsible container
    const tocLinks = toc.querySelector(".toc-links")
    const searchContainer = toc.querySelector(".search-container")
  
    const tocCollapse = document.createElement("div")
    tocCollapse.className = "collapse d-lg-block"
    tocCollapse.id = "tocCollapse"
  
    // Rearrange DOM
    toc.insertBefore(tocToggle, searchContainer)
  
    // Move search and links into collapsible container
    tocCollapse.appendChild(searchContainer.cloneNode(true))
    tocCollapse.appendChild(tocLinks.cloneNode(true))
  
    // Remove original elements
    searchContainer.remove()
    tocLinks.remove()
  
    // Add collapsible container to TOC
    toc.appendChild(tocCollapse)
  
    // Initialize Bootstrap Collapse
    const tocCollapseElement = document.getElementById("tocCollapse")
    const bsCollapse = new bootstrap.Collapse(tocCollapseElement, {
      toggle: false,
    })
  
    // Update toggle button text on collapse/expand
    tocToggle.addEventListener("click", () => {
      const isExpanded = tocToggle.getAttribute("aria-expanded") === "true"
      if (isExpanded) {
        tocToggle.innerHTML = 'Show Table of Contents <i class="fas fa-chevron-down"></i>'
      } else {
        tocToggle.innerHTML = 'Hide Table of Contents <i class="fas fa-chevron-up"></i>'
      }
    })
  }
  
  // Add keyboard navigation for accessibility
  function addKeyboardNavigation() {
    document.addEventListener("keydown", (e) => {
      // Only activate if not in an input field
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return
  
      const tocLinks = document.querySelectorAll(".toc-link")
      if (tocLinks.length === 0) return
  
      // Find current active link
      let activeIndex = -1
      tocLinks.forEach((link, index) => {
        if (link.classList.contains("active")) {
          activeIndex = index
        }
      })
  
      // Navigate with arrow keys
      if (e.key === "ArrowDown" && e.altKey) {
        e.preventDefault()
        // Move to next section
        if (activeIndex < tocLinks.length - 1) {
          tocLinks[activeIndex + 1].click()
        }
      } else if (e.key === "ArrowUp" && e.altKey) {
        e.preventDefault()
        // Move to previous section
        if (activeIndex > 0) {
          tocLinks[activeIndex - 1].click()
        }
      }
  
      // Home key to go to top
      if (e.key === "Home") {
        e.preventDefault()
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
  
      // End key to go to bottom
      if (e.key === "End") {
        e.preventDefault()
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth",
        })
      }
    })
  }