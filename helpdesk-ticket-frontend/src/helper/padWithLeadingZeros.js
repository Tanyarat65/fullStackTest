function padWithLeadingZeros(totalLength, num) {
    return String(num).padStart(totalLength, '0')
}

export default padWithLeadingZeros