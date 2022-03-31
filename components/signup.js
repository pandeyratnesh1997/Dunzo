function showOTP(){
    return `<div class="mandatory">
    <div class="red">*</div>
    <div class="grey">Enter the OTP</div>
</div>
<div id="checkOTP">
    <input id="otp1" value="" type="password">
    <input id="otp2" value="" type="password">
    <input id="otp3" value="" type="password">
    <input id="otp4" value="" type="password">
    <input id="otp5" value="" type="password">
    <input id="otp6" value="" type="password">
</div>
<div id="count">
    <div>Resend</div>
    <div id="countdown">
        <div>00:</div>
        <div id="timer">30</div>
    </div>
</div>`;
}

export default showOTP;