function calculateTableComponents() {
    const width = parseInt(document.getElementById("width").value);
    const length = parseInt(document.getElementById("length").value);

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
