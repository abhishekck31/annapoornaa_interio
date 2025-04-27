/**
 * Scrolls to the top of the page
 * Can be used after navigation or when needed
 */
export const scrollToTop = (): void => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}

/**
 * Navigates to a specific page and ensures the view starts at the top
 * @param url The URL to navigate to
 */
export const navigateToPage = (url: string): void => {
  // For client-side navigation
  window.location.href = url

  // Ensure we're at the top of the page
  window.scrollTo(0, 0)
}
