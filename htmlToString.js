/**
 * Converts HTML content to a single-line string format with escaped quotes
 * @param {string} html - The HTML content to convert
 * @returns {string} - The converted string with escaped quotes
 */
function htmlToString(html) {
  // Remove all newlines and extra whitespace
  let result = html.replace(/\s+/g, ' ').trim()

  // Escape double quotes
  result = result.replace(/"/g, '\\"')

  // Remove any remaining extra spaces between tags
  result = result.replace(/>\s+</g, '><')

  return result
}

/**
 * Alternative function that preserves the exact formatting you showed
 * @param {string} html - The HTML content to convert
 * @returns {string} - The converted string with escaped quotes
 */
function convertHtmlToEscapedString(html) {
  // Remove all newlines and normalize whitespace
  let result = html.replace(/\n/g, '').replace(/\r/g, '')

  // Remove extra spaces but preserve single spaces
  result = result.replace(/\s+/g, ' ')

  // Escape double quotes
  result = result.replace(/"/g, '\\"')

  // Remove spaces between tags
  result = result.replace(/>\s+</g, '><')

  return result
}

// Example usage:
const sampleHtml = `<article class="project-item">
  <span class="status-badge status-complete">Complete</span>
  <h2 class="project-title">
    i) Women in Trade for Inclusive and Sustainable Growth (2019-2025) (EP)
  </h2>
  <p class="project-partner">
    <strong>Lead Implementing Partner:</strong> JEDCO - Jordan Enterprise
    Development Corporation
  </p>
  <p class="project-sectors">
    <strong>Sectors:</strong> Dead Sea Cosmetics and Processed Food.
  </p>
  <p class="project-results-label"><strong>Results:</strong></p>
  <ul class="results-list">
    <li>Capacity Building: 99 SMEs (66 WLSMEs) and 5 TSIs</li>
    <li>Market Access: 3 trade missions and Export Sales: $1,100,000.00</li>
    <li>Market Intelligence: 1 local market research</li>
  </ul>
</article>`

console.log('Converted HTML:')
console.log(htmlToString(sampleHtml))

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { htmlToString, convertHtmlToEscapedString }
}
