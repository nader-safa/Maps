const fs = require('fs')

/**
 * Processes location objects by counting status badges in the desc field
 * and updating nprogress, ncompleted, and group properties accordingly
 * @param {string} filePath - Path to the JSON file to process
 * @returns {Array} - Processed array of location objects
 */
function processLocationObject(filePath) {
  try {
    // Read the JSON file
    const data = fs.readFileSync(filePath, 'utf8')
    const locationObjects = JSON.parse(data)

    // Process each location object
    const processedObjects = locationObjects
      .map((obj) => {
        // If no desc property, add default values
        if (!obj.desc) {
          return null
        }

        // Count status badges in the desc field
        const statusCompleteCount = (obj.desc.match(/status-complete/g) || [])
          .length
        const statusProgressCount = (obj.desc.match(/status-progress/g) || [])
          .length

        // Create new groups array based on found statuses
        const groups = []
        if (statusProgressCount > 0) {
          groups.push('In Progress')
        }
        if (statusCompleteCount > 0) {
          groups.push('Completed')
        }

        // Return updated object
        return {
          ...obj,
          nprogress: statusProgressCount.toString(),
          ncompleted: statusCompleteCount.toString(),
          group: groups,
          style: 'subdivision',
          type: 'hidden',
          layer: 'world',
        }
      })
      .filter(Boolean)

    return processedObjects
  } catch (error) {
    console.error('Error processing location object:', error)
    return []
  }
}

/**
 * Updates the JSON file with processed data
 * @param {string} filePath - Path to the JSON file to update
 * @param {Array} processedData - Processed array of location objects
 */
function updateLocationObjectFile(filePath, processedData) {
  try {
    const jsonString = JSON.stringify(processedData, null, 2)
    fs.writeFileSync(filePath, jsonString, 'utf8')
    console.log('File updated successfully!')
  } catch (error) {
    console.error('Error updating file:', error)
  }
}

// Example usage
if (require.main === module) {
  const filePath = './desiredLocationObject.json'
  const processedData = processLocationObject(filePath)

  console.log('Processed data:')
  console.log(JSON.stringify(processedData, null, 2))

  // Uncomment the line below to actually update the file
  updateLocationObjectFile(filePath, processedData)
}

module.exports = {
  processLocationObject,
  updateLocationObjectFile,
}
