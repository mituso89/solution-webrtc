var apiObj = null;

function StartMeeting() {
  const domain = "tuan-webrtc.online";
  const options = {
    roomName: "JitsiMeetAPIExample123",
    width: 700,
    height: 700,
    parentNode: document.querySelector("#jitsi-meet-conf-container"),
  };
  apiObj = new JitsiMeetExternalAPI(domain, options);
}
