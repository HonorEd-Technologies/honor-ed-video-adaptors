export default (elementId, config) => {
    if (!window.YT) {
        throw Error('Player instantiated before API loaded');
    }
    const player = new window.YT.Player(elementId, config);
    return player;
};
//# sourceMappingURL=convertYTPlayer.js.map