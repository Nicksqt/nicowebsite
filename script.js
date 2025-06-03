// Microsoft NVIDIA Website JavaScript

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initialize elements
  const searchContainer = document.getElementById("searchContainer")
  const modal = document.getElementById("modal")
  const notification = document.getElementById("notification")
  const closeBtn = document.querySelector(".close")

  // Close modal when clicking outside
  if (modal) {
    window.onclick = (event) => {
      if (event.target === modal) {
        window.closeModal()
      }
    }
  }

  // Close modal with close button
  if (closeBtn) {
    closeBtn.onclick = () => {
      window.closeModal()
    }
  }

  // Close modal function
  window.closeModal = () => {
    if (modal) {
      modal.style.display = "none"
      document.body.style.overflow = "auto"
    }
  }

  // Toggle search function
  window.toggleSearch = () => {
    if (searchContainer) {
      searchContainer.classList.toggle("active")
      if (searchContainer.classList.contains("active")) {
        const searchInput = document.getElementById("searchInput")
        if (searchInput) {
          searchInput.focus()
        }
      }
    }
  }

  // Handle search function
  window.handleSearch = (event) => {
    if (event.key === "Enter") {
      const query = event.target.value.trim()
      if (query) {
        window.showNotification(`Searching for "${query}"...`)
        window.toggleSearch()
      }
    }
  }

  // Show modal function
  window.showModal = (content) => {
    if (modal) {
      const modalBody = document.getElementById("modal-body")
      if (modalBody) {
        modalBody.innerHTML = `<p>${content}</p>`
      }
      modal.style.display = "block"
      document.body.style.overflow = "hidden"
    }
  }

  // Show account modal function
  window.showAccountModal = () => {
    window.showModal(`
      <h2>Sign in to Microsoft</h2>
      <p>Access your Microsoft account to sync your settings, files, and preferences across all your devices.</p>
      <div style="margin-top: 20px;">
        <button class="nvidia-button" onclick="window.showNotification('Redirecting to sign in...')">Sign in</button>
        <button class="nvidia-button" onclick="window.showNotification('Redirecting to create account...')" style="margin-left: 10px; background: transparent; color: var(--nvidia-green); border: 1px solid var(--nvidia-green);">Create account</button>
      </div>
    `)
  }

  // Show product details function
  window.showProductDetails = (productName) => {
    const productInfo = {
      "Microsoft 365":
        "Microsoft 365 includes premium Office apps, 1TB of cloud storage, and advanced security features.",
      Word: "Microsoft Word is a word processing application for creating documents, reports, and letters.",
      Excel: "Microsoft Excel is a spreadsheet application for data analysis, calculations, and visualizations.",
      PowerPoint: "Microsoft PowerPoint is a presentation application for creating slideshows and presentations.",
      Outlook: "Microsoft Outlook is an email and calendar application for managing communications.",
    }

    const info = productInfo[productName] || `Learn more about ${productName} and its features.`
    window.showModal(`
      <h2>${productName}</h2>
      <p>${info}</p>
      <div style="margin-top: 20px;">
        <button class="nvidia-button" onclick="window.showNotification('Redirecting to ${productName}...')">Learn more</button>
      </div>
    `)
  }

  // Show notification function
  window.showNotification = (message) => {
    if (notification) {
      const notificationText = document.getElementById("notification-text")
      if (notificationText) {
        notificationText.textContent = message
      }

      notification.classList.add("show")

      setTimeout(() => {
        notification.classList.remove("show")
      }, 3000)
    }
  }

  // Close banner function
  window.closeBanner = () => {
    const banner = document.getElementById("topBanner")
    if (banner) {
      banner.style.display = "none"
    }
  }

  // Toggle mobile menu function
  window.toggleMobileMenu = () => {
    const mobileNav = document.getElementById("mobileNav")
    if (mobileNav) {
      mobileNav.classList.toggle("active")
    }
  }

  // Scroll effects
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    const header = document.getElementById("mainHeader")

    if (header) {
      if (scrolled > 100) {
        header.style.background = "rgba(0, 0, 0, 0.95)"
      } else {
        header.style.background = "var(--nvidia-black)"
      }
    }
  })

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    // Close modal with Escape key
    if (e.key === "Escape") {
      window.closeModal()
      if (searchContainer && searchContainer.classList.contains("active")) {
        window.toggleSearch()
      }
    }
  })
})
