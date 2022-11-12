'use strict'

const localVideo = document.getElementById('localVideo')

const startPushBtn = document.getElementById('btnStartPush')
const endPushBtn = document.getElementById('btnEndPush')
const startPullBtn = document.getElementById('btnStartPull')
const endPullBtn = document.getElementById('btnEndPull')

startPushBtn.addEventListener('click', startPush)

function startPush() {
    console.log("start push stream...")

    window.postMessage({type: 'SS_UI_REQUEST', text: "push"}, '*')
}

window.addEventListener('message', function(event) {
    if (event.origin != this.window.location.origin) {
        return
    }

    if (event.data.type && event.data.type === 'SS_DIALOG_SUCCESS') {
        console.log("用户同意屏幕共享，streamId：" + event.data.streamId)
        startScreenStreamFrom(event.data.streamId)
    } else if (event.data.type && event.data.type === 'SS_DIALOG_CANCEL') {
        console.log("用户取消屏幕共享")
    }
})

function startScreenStreamFrom(streamId) {
    const constrains = {
        audio: false,
        video: {
            mandatory: {
                chromeMediaSource: 'desktop',
                chromeMediaSourceId: streamId,
                maxWidth: window.screen.width,
                maxHeight: window.screen.height
            }
        }
    }

    navigator.mediaDevices.getUserMedia(constrains).then(handleSuccess).catch(handleError)
}

function handleSuccess(stream) {
    console.log("get screen stream success")
    localVideo.srcObject = stream
}

function handleError(err) {
    console.log("get screen stream error: " + err.toString())
}
