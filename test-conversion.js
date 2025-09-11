const fs = require('fs')

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

// Read the HTML file
const htmlContent = fs.readFileSync('test.html', 'utf8')

// Convert to string format
const convertedString = htmlToString(htmlContent)

console.log('Converted HTML to string format:')
console.log(convertedString)

// Save the result to a file for easy copying
fs.writeFileSync('converted-output.txt', convertedString)
console.log('\nResult saved to converted-output.txt')
