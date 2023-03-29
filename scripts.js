const canvas = document.getElementById('table-layout');
const ctx = canvas.getContext('2d');
let width = 2;
let length = 2;
let frameSize = 80;
let offsetX = 10;
let offsetY = 10;
let maxSize = 8;

function refreshTable() {
    drawTableLayout();
    calculateTableComponents();
    updateButtonStyles();
}

function modifyTable(deltaWidth, deltaLength) {
    width += deltaWidth;
    length += deltaLength;

    if (width < 2) width = 2;
    if (length < 2) length = 2;
    if (width > maxSize) width = maxSize;
    if (length > maxSize) length = maxSize;

    refreshTable();
}

function drawTableLayout() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let x = 0; x < width; x++) {
        for (let y = 0; y < length; y++) {
            ctx.strokeRect(offsetX + x * frameSize, offsetY + y * frameSize, frameSize, frameSize);
        }
    }
}

function updateButtonStyles() {
    let leftBtn = document.querySelector('.left-btn.fa-minus-square');
    let rightBtn = document.querySelector('.right-btn.fa-plus-square');
    let topBtn = document.querySelector('.top-btn.fa-minus-square');
    let bottomBtn = document.querySelector('.bottom-btn.fa-plus-square');
    
    // For width
    if (width === 2) {
        leftBtn.style.opacity = "0.3";
    } else {
        leftBtn.style.opacity = "1";
    }

    if (width === maxSize) {
        rightBtn.style.opacity = "0.3";
    } else {
        rightBtn.style.opacity = "1";
    }

    // For length
    if (length === 2) {
        topBtn.style.opacity = "0.3";
    } else {
        topBtn.style.opacity = "1";
    }

    if (length === maxSize) {
        bottomBtn.style.opacity = "0.3";
    } else {
        bottomBtn.style.opacity = "1";
    }
}

function calculateTableComponents() {
    const frames = width * length;
    const touching_edges = (width - 1) * length + width * (length - 1);
    const frame_locks = touching_edges * 2;

    const corner_rails = 4;
    const side_rails = 2 * (width - 1) + 2 * (length - 1);
    const rail_frame_locks = (corner_rails + side_rails) * 2;

    const total_frame_locks = frame_locks + rail_frame_locks;

    const legs = frames;
    const feet = legs;

    const corner_tiles = 4;
    const full_tiles = (width - 1) * (length - 1);
    const half_tiles = 2 * (width - 1) + 2 * (length - 1) - 4;

    const rail_clips = corner_rails + side_rails;

    const full_tile_locks = full_tiles * 4;
    const corner_tile_locks = corner_tiles * 6;
    const half_tile_locks = half_tiles * 4;
    const total_tile_locks = full_tile_locks + corner_tile_locks + half_tile_locks;

    const resultsElement = document.getElementById("results");

    resultsElement.innerHTML = `
        <p>Frames: ${frames}</p>
        <p>Frame Locks: ${total_frame_locks}</p>
        <p>Corner Rails: ${corner_rails}</p>
        <p>Side Rails: ${side_rails}</p>
        <p>Legs: ${legs}</p>
        <p>Feet: ${feet}</p>
        <p>Corner Tiles: ${corner_tiles}</p>
        <p>Full Tiles: ${full_tiles}</p>
        <p>Half Tiles: ${half_tiles}</p>
        <p>Rail Clips: ${rail_clips}</p>
        <p>Tile Locks: ${total_tile_locks}</p>
    `;
}

refreshTable();
drawTableLayout();
calculateTableComponents();
updateButtonStyles();
