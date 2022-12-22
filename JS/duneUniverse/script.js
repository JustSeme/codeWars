function harvesterRescue({ harvester: [hx, hy], worm: [[wx, wy], wv], carryall: [[cx, cy], cv] }) {
    const wdist = Math.sqrt((wx - hx) ** 2 + (wy - hy) ** 2)
    const cdist = Math.sqrt((cx - hx) ** 2 + (cy - hy) ** 2)
    return ((cdist / cv + 1) < (wdist / wv)) ? 'The spice must flow! Rescue the harvester!' : 'Damn the spice! I\'ll rescue the miners!'
}

console.log(harvesterRescue({ harvester: [0, 0], worm: [[0, 600], 50], carryall: [[0, 880], 80] }))