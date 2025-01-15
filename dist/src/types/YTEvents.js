export var YTEvent;
(function (YTEvent) {
    YTEvent[YTEvent["playerReady"] = 0] = "playerReady";
    YTEvent[YTEvent["stateChanged"] = 1] = "stateChanged";
    YTEvent[YTEvent["error"] = 2] = "error";
})(YTEvent || (YTEvent = {}));
