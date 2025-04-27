/**
 * Scrolls to a specific section with offset for the navbar
 * @param sectionId The ID of the section to scroll to
 */
export const scrollToSection = (sectionId: string): void => {
  const section = document.getElementById(sectionId)
  if (section) {
    // Get the navbar height to offset the scroll position
    const navbarHeight = document.querySelector("nav")?.offsetHeight || 0
    const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight
    window.scrollTo({
      top: sectionTop,
      behavior: "smooth",
    })
  }
}
