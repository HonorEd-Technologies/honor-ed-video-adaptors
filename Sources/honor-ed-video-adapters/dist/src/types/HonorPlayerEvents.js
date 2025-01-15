export var HonorPlayerEvent;
(function (HonorPlayerEvent) {
    HonorPlayerEvent[HonorPlayerEvent["playerReady"] = 0] = "playerReady";
    HonorPlayerEvent[HonorPlayerEvent["stateChanged"] = 1] = "stateChanged";
    HonorPlayerEvent[HonorPlayerEvent["error"] = 2] = "error";
})(HonorPlayerEvent || (HonorPlayerEvent = {}));
