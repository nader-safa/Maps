const {
  processLocationObject,
  updateLocationObjectFile,
} = require('./processLocationObject.js')

// Example usage
const filePath = './11-9-content/en.json'

// Process the data
const processedData = processLocationObject(filePath)

console.log('Original vs Processed:')
console.log('=====================')

// Show the changes
processedData.forEach((obj, index) => {
  if (obj.desc) {
    console.log(`\nObject ${index + 1} (${obj.id}):`)
    console.log(`- nprogress: ${obj.nprogress}`)
    console.log(`- ncompleted: ${obj.ncompleted}`)
    console.log(`- group: [${obj.group.join(', ')}]`)
  }
})

// To actually update the file, uncomment this line:
updateLocationObjectFile(filePath, processedData)
