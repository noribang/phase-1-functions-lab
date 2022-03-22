function distanceFromHqInBlocks(blocks) {
    const distanceInBlocks = Math.abs(blocks - 42)
    return distanceInBlocks
}
function distanceFromHqInFeet(blocks) {
    const hqBlocks = distanceFromHqInBlocks(blocks)
    const distanceInFeet = hqBlocks * 264
    return distanceInFeet
}
function distanceTravelledInFeet(block1, block2) {
    const distanceInFeet = Math.abs(block1 - block2) * 264
    return distanceInFeet
}
function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination)

    if (distanceInFeet <= 400) {
        return 0
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
        return (distanceInFeet - 400) * 0.02
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
        return 25
    } else if (distanceInFeet > 2500) {
        return "cannot travel that far"
    }
         
    
}