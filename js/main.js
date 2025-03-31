/* Enhanced main.js with improved interactivity and accessibility */

document.addEventListener("DOMContentLoaded", () => {
    // Initialize Table of Contents
    initTableOfContents()
  
    // Initialize search functionality
    initSearch()
  
    // Initialize mobile TOC toggle
    addMobileTocToggle()
  
    // Initialize section navigation
    addSectionNavigation()
  
    // Initialize back to top button
    initBackToTop()
  
    // Initialize dark mode toggle
    initDarkMode()
  
    // Initialize keyboard navigation
    addKeyboardNavigation()
  
    // Add loading indicator
    document.body.classList.remove("loading")
  })
  
  /**
   * Dynamically builds and initializes the Table of Contents
   */
  function buildTableOfContents() {
    const tocLinksContainer = document.querySelector(".toc-links")
    if (!tocLinksContainer) return
  
    // Clear existing links if any
    tocLinksContainer.innerHTML = ""
  
    // Find all content sections
    const sections = document.querySelectorAll("section.content-section")
  
    sections.forEach((section) => {
      const heading = section.querySelector("h2")
      if (!heading) return
  
      const title = heading.innerText
      const id = section.id
  
      // Create link element
      const link = document.createElement("a")
      link.href = `#${id}`
      link.className = "toc-link"
      link.textContent = title
  
      // Add to TOC
      tocLinksContainer.appendChild(link)
    })
  }
  
  /**
   * Initializes the Table of Contents with scroll highlighting
   */
  function initTableOfContents() {
    // First build the TOC if not already built
    if (document.querySelector(".toc-links") && document.querySelector(".toc-links").children.length === 0) {
      buildTableOfContents()
    }
  
    const tocLinks = document.querySelectorAll(".toc-link")
    const contentSections = document.querySelectorAll(".content-section")
  
    // Highlight active section on scroll
    window.addEventListener("scroll", () => {
      let currentSection = ""
  
      contentSections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
  
        // 100px offset to trigger highlight before reaching the section
        if (pageYOffset >= sectionTop - 100) {
          currentSection = section.getAttribute("id")
        }
      })
  
      tocLinks.forEach((link) => {
        link.classList.remove("active")
        if (link.getAttribute("href") === `#${currentSection}`) {
          link.classList.add("active")
        }
      })
    })
  
    // Smooth scroll to section when TOC link is clicked
    tocLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault()
  
        const targetId = this.getAttribute("href").substring(1)
        const targetSection = document.getElementById(targetId)
  
        if (targetSection) {
          // Smooth scroll to section with offset for fixed header
          window.scrollTo({
            top: targetSection.offsetTop - 80,
            behavior: "smooth",
          })
  
          // Update URL hash without jumping
          history.pushState(null, null, `#${targetId}`)
  
          // Set focus to the section heading for accessibility
          const heading = targetSection.querySelector("h2")
          if (heading) {
            heading.setAttribute("tabindex", "-1")
            heading.focus()
          }
        }
      })
    })
  }
  
  /**
   * Initializes collapsible sections with accessibility support
   */
  function initCollapsibleSections() {
    const collapsibleHeaders = document.querySelectorAll(".collapsible-header")
  
    collapsibleHeaders.forEach((header) => {
      // Set initial ARIA attributes
      const isExpanded = header.getAttribute("aria-expanded") === "true"
      const contentId = header.getAttribute("aria-controls")
      const content = document.getElementById(contentId)
  
      // Set initial state
      if (content) {
        content.style.display = isExpanded ? "block" : "none"
      }
  
      // Add click event
      header.addEventListener("click", function () {
        const isCurrentlyExpanded = this.getAttribute("aria-expanded") === "true"
        const contentId = this.getAttribute("aria-controls")
        const content = document.getElementById(contentId)
  
        // Toggle expanded state
        this.setAttribute("aria-expanded", !isCurrentlyExpanded)
  
        // Toggle content visibility
        if (content) {
          content.style.display = isCurrentlyExpanded ? "none" : "block"
        }
      })
  
      // Add keyboard support
      header.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          this.click()
        }
      })
  
      // Make focusable if not already
      if (!header.getAttribute("tabindex")) {
        header.setAttribute("tabindex", "0")
      }
    })
  }
  
  /**
   * Initializes search functionality with debounce
   */
  function initSearch() {
    const searchInput = document.getElementById("search-input")
    if (!searchInput) return
  
    const contentSections = document.querySelectorAll(".content-section")
  
    // Add label for accessibility
    const searchContainer = searchInput.parentElement
    if (searchContainer && !searchContainer.querySelector("label")) {
      const label = document.createElement("label")
      label.setAttribute("for", "search-input")
      label.className = "visually-hidden"
      label.textContent = "Search document"
      searchContainer.insertBefore(label, searchInput)
    }
  
    // Debounce function to limit search frequency
    let searchTimeout
  
    searchInput.addEventListener("input", function () {
      clearTimeout(searchTimeout)
  
      searchTimeout = setTimeout(() => {
        const searchTerm = this.value.toLowerCase().trim()
  
        if (searchTerm === "") {
          // Clear highlights and show all sections
          clearHighlights(document)
          contentSections.forEach((section) => {
            section.style.display = "block"
          })
          return
        }
  
        // Clear previous highlights
        clearHighlights(document)
  
        // Search in each section
        contentSections.forEach((section) => {
          const sectionText = section.textContent.toLowerCase()
          const hasMatch = sectionText.includes(searchTerm)
  
          section.style.display = hasMatch ? "block" : "none"
  
          if (hasMatch) {
            highlightText(section, searchTerm)
          }
        })
  
        // Announce search results for screen readers
        const visibleSections = document.querySelectorAll('.content-section[style="display: block;"]')
        const resultsCount = visibleSections.length
  
        // Create or update aria-live region
        let liveRegion = document.getElementById("search-results-live")
        if (!liveRegion) {
          liveRegion = document.createElement("div")
          liveRegion.id = "search-results-live"
          liveRegion.className = "visually-hidden"
          liveRegion.setAttribute("aria-live", "polite")
          document.body.appendChild(liveRegion)
        }
  
        liveRegion.textContent = `Found ${resultsCount} section${resultsCount !== 1 ? "s" : ""} containing "${searchTerm}"`
      }, 300) // 300ms debounce
    })
  }
  
  /**
   * Safely highlights search terms in text nodes
   */
  function highlightText(element, searchTerm) {
    if (!element || !searchTerm) return
  
    const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, {
      acceptNode: (node) => {
        // Skip script and style tags
        if (
          node.parentNode.nodeName === "SCRIPT" ||
          node.parentNode.nodeName === "STYLE" ||
          node.parentNode.nodeName === "A"
        ) {
          return NodeFilter.FILTER_REJECT
        }
        return NodeFilter.FILTER_ACCEPT
      },
    })
  
    const nodesToReplace = []
    let currentNode
  
    // Collect nodes that contain the search term
    while ((currentNode = walker.nextNode())) {
      if (currentNode.nodeValue.toLowerCase().includes(searchTerm.toLowerCase())) {
        nodesToReplace.push(currentNode)
      }
    }
  
    // Replace text in collected nodes
    nodesToReplace.forEach((node) => {
      const text = node.nodeValue
      const regex = new RegExp(searchTerm.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"), "gi")
  
      const fragment = document.createDocumentFragment()
      let lastIndex = 0
      let match
  
      while ((match = regex.exec(text)) !== null) {
        // Add text before match
        if (match.index > lastIndex) {
          fragment.appendChild(document.createTextNode(text.substring(lastIndex, match.index)))
        }
  
        // Add highlighted match
        const mark = document.createElement("mark")
        mark.className = "search-highlight"
        mark.textContent = match[0]
        fragment.appendChild(mark)
  
        lastIndex = regex.lastIndex
      }
  
      // Add remaining text
      if (lastIndex < text.length) {
        fragment.appendChild(document.createTextNode(text.substring(lastIndex)))
      }
  
      // Replace original node with fragment
      node.parentNode.replaceChild(fragment, node)
    })
  }
  
  /**
   * Safely clears search highlights
   */
  function clearHighlights(element) {
    const marks = element.querySelectorAll("mark.search-highlight")
    marks.forEach((mark) => {
      const parent = mark.parentNode
      parent.replaceChild(document.createTextNode(mark.textContent), mark)
    })
  }
  
  /**
   * Adds mobile-friendly TOC toggle
   */
  function addMobileTocToggle() {
    const toc = document.querySelector(".toc")
    if (!toc) return
  
    // Create toggle button
    const toggleButton = document.createElement("button")
    toggleButton.className = "btn btn-outline-primary toc-toggle-button d-lg-none mb-3"
    toggleButton.innerHTML = '<i class="fas fa-list me-2"></i> Show Table of Contents'
    toggleButton.setAttribute("aria-expanded", "false")
    toggleButton.setAttribute("aria-controls", "tocCollapse")
  
    // Create collapsible container
    const tocCollapse = document.createElement("div")
    tocCollapse.className = "collapse d-lg-block"
    tocCollapse.id = "tocCollapse"
  
    // Get existing TOC elements
    const searchContainer = toc.querySelector(".search-container")
    const tocLinks = toc.querySelector(".toc-links")
  
    // Move elements to collapsible container (don't clone to preserve event listeners)
    if (searchContainer) tocCollapse.appendChild(searchContainer)
    if (tocLinks) tocCollapse.appendChild(tocLinks)
  
    // Add toggle button and collapsible container to TOC
    toc.insertBefore(toggleButton, toc.firstChild)
    toc.appendChild(tocCollapse)
  
    // Add click event to toggle button
    toggleButton.addEventListener("click", function () {
      const isExpanded = this.getAttribute("aria-expanded") === "true"
      this.setAttribute("aria-expanded", !isExpanded)
  
      if (isExpanded) {
        this.innerHTML = '<i class="fas fa-list me-2"></i> Show Table of Contents'
        tocCollapse.classList.remove("show")
      } else {
        this.innerHTML = '<i class="fas fa-times me-2"></i> Hide Table of Contents'
        tocCollapse.classList.add("show")
  
        // Focus first link for keyboard users
        const firstLink = tocCollapse.querySelector(".toc-link")
        if (firstLink) {
          firstLink.focus()
        }
      }
    })
  }
  
  /**
   * Adds previous/next section navigation
   */
  function addSectionNavigation() {
    const contentSections = document.querySelectorAll(".content-section")
    if (contentSections.length <= 1) return
  
    contentSections.forEach((section, index) => {
      const navContainer = document.createElement("div")
      navContainer.className = "section-navigation"
  
      // Previous section button
      if (index > 0) {
        const prevSection = contentSections[index - 1]
        const prevTitle = prevSection.querySelector("h2").textContent
  
        const prevButton = document.createElement("a")
        prevButton.href = `#${prevSection.id}`
        prevButton.className = "btn btn-outline-primary"
        prevButton.innerHTML = `<i class="fas fa-arrow-left me-2"></i> Previous: ${prevTitle}`
        prevButton.setAttribute("role", "button")
        prevButton.setAttribute("aria-label", `Go to previous section: ${prevTitle}`)
  
        navContainer.appendChild(prevButton)
      } else {
        // Empty div for spacing
        const spacer = document.createElement("div")
        navContainer.appendChild(spacer)
      }
  
      // Next section button
      if (index < contentSections.length - 1) {
        const nextSection = contentSections[index + 1]
        const nextTitle = nextSection.querySelector("h2").textContent
  
        const nextButton = document.createElement("a")
        nextButton.href = `#${nextSection.id}`
        nextButton.className = "btn btn-outline-primary"
        nextButton.innerHTML = `Next: ${nextTitle} <i class="fas fa-arrow-right ms-2"></i>`
        nextButton.setAttribute("role", "button")
        nextButton.setAttribute("aria-label", `Go to next section: ${nextTitle}`)
  
        navContainer.appendChild(nextButton)
      }
  
      // Add navigation to section
      section.appendChild(navContainer)
  
      // Add smooth scrolling to navigation buttons
      const navButtons = navContainer.querySelectorAll("a")
      navButtons.forEach((button) => {
        button.addEventListener("click", function (e) {
          e.preventDefault()
  
          const targetId = this.getAttribute("href").substring(1)
          const targetSection = document.getElementById(targetId)
  
          if (targetSection) {
            window.scrollTo({
              top: targetSection.offsetTop - 80,
              behavior: "smooth",
            })
  
            history.pushState(null, null, `#${targetId}`)
  
            // Set focus to the section heading for accessibility
            const heading = targetSection.querySelector("h2")
            if (heading) {
              heading.setAttribute("tabindex", "-1")
              heading.focus()
            }
          }
        })
      })
    })
  }
  
  /**
   * Initializes back to top button
   */
  function initBackToTop() {
    // Create back to top button
    const backToTopButton = document.createElement("button")
    backToTopButton.className = "btn btn-primary back-to-top"
    backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>'
    backToTopButton.setAttribute("aria-label", "Back to top")
  
    document.body.appendChild(backToTopButton)
  
    // Show/hide button based on scroll position
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        backToTopButton.classList.add("visible")
      } else {
        backToTopButton.classList.remove("visible")
      }
    })
  
    // Scroll to top when clicked
    backToTopButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
  
      // Focus on first heading for accessibility
      const firstHeading = document.querySelector("h1")
      if (firstHeading) {
        firstHeading.setAttribute("tabindex", "-1")
        firstHeading.focus()
      }
    })
  }
  
  /**
   * Initializes dark mode toggle with localStorage persistence
   */
  function initDarkMode() {
    const darkModeToggle = document.getElementById("dark-mode-toggle")
    if (!darkModeToggle) return
  
    // Check for saved preference
    const darkModeEnabled = localStorage.getItem("darkModeEnabled") === "true"
  
    // Apply initial state
    if (darkModeEnabled) {
      document.body.classList.add("dark-mode-enabled")
      darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>'
      darkModeToggle.setAttribute("aria-label", "Switch to light mode")
      darkModeToggle.setAttribute("aria-pressed", "true")
    } else {
      darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>'
      darkModeToggle.setAttribute("aria-label", "Switch to dark mode")
      darkModeToggle.setAttribute("aria-pressed", "false")
    }
  
    // Toggle dark mode on click
    darkModeToggle.addEventListener("click", function () {
      const isDarkMode = document.body.classList.toggle("dark-mode-enabled")
  
      // Update button
      if (isDarkMode) {
        this.innerHTML = '<i class="fas fa-sun"></i>'
        this.setAttribute("aria-label", "Switch to light mode")
        this.setAttribute("aria-pressed", "true")
      } else {
        this.innerHTML = '<i class="fas fa-moon"></i>'
        this.setAttribute("aria-label", "Switch to dark mode")
        this.setAttribute("aria-pressed", "false")
      }
  
      // Save preference
      localStorage.setItem("darkModeEnabled", isDarkMode)
  
      // Dispatch event for other scripts to listen to
      const event = new Event("darkModeToggled")
      document.dispatchEvent(event)
    })
  }
  
  /**
   * Adds keyboard navigation support
   */
  function addKeyboardNavigation() {
    // Add keyboard navigation for TOC
    document.addEventListener("keydown", (e) => {
      // Only handle if not in an input field
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") {
        return
      }
  
      const tocLinks = document.querySelectorAll(".toc-link")
      if (tocLinks.length === 0) return
  
      // Find currently active link
      let activeIndex = -1
      tocLinks.forEach((link, index) => {
        if (link.classList.contains("active")) {
          activeIndex = index
        }
      })
  
      // Handle arrow keys for TOC navigation
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
    })
  }
  
  