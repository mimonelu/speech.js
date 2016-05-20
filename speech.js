;(function () {

    window.Speech = (function () {

        var enabled = false;

        var ssu = null;

        var voices = null;

        var initialize = function () {
            if ("SpeechSynthesisUtterance" in window) {
                enabled = true;
                ssu = new window.SpeechSynthesisUtterance();
                voices = window.speechSynthesis.getVoices();
            } else {
                enabled = false;
                console.error("Web Speech Synthesis API is not supported.");
            }
            return window.Speech;
        };

        var getStatus = function () {
            return enabled;
        };

        var setDefaults = function () {
            if (enabled === true) {
                ssu.pitch = 1.0;
                ssu.rate = 1.0;
                ssu.voice = voices[0] || null;
                ssu.volume = 1.0;
                ssu.lang = "ja-JP";
            }
            return window.Speech;
        };

        var setLang = function (lang) {
            if (enabled === true) {
                ssu.lang = lang;
            }
            return window.Speech;
        };

        var setPitch = function (pitch) {
            if (enabled === true) {
                ssu.pitch = pitch;
            }
            return window.Speech;
        };

        var setRate = function (rate) {
            if (enabled === true) {
                ssu.rate = rate;
            }
            return window.Speech;
        };

        var setText = function (text) {
            if (enabled === true) {
                ssu.text = text;
            }
            return window.Speech;
        };

        var getVoices = function () {
            return voices;
        };

        var setVoice = function (voiceIndex) {
            if (enabled === true) {
                ssu.voice = voices[voiceIndex] || null;
            }
            return window.Speech;
        };

        var setVolume = function (volume) {
            if (enabled === true) {
                ssu.volume = volume;
            }
            return window.Speech;
        };

        var setOnError = function (callback) {
            if (enabled === true) {
                ssu.onerror = callback;
            }
            return window.Speech;
        };

        var setOnStart = function (callback) {
            if (enabled === true) {
                ssu.onstart = callback;
            }
            return window.Speech;
        };

        var setOnBoundary = function (callback) {
            if (enabled === true) {
                ssu.onboundary = callback;
            }
            return window.Speech;
        };

        var setOnPause = function (callback) {
            if (enabled === true) {
                ssu.onpause = callback;
            }
            return window.Speech;
        };

        var setOnResume = function (callback) {
            if (enabled === true) {
                ssu.onresume = callback;
            }
            return window.Speech;
        };

        var setOnEnd = function (callback) {
            if (enabled === true) {
                ssu.onend = callback;
            }
            return window.Speech;
        };

        var setOnMark = function (callback) {
            if (enabled === true) {
                ssu.onmark = callback;
            }
            return window.Speech;
        };

        var start = function () {
            if (enabled === true) {
                window.speechSynthesis.speak(ssu);
            }
            return window.Speech;
        };

        return {
            "initialize": initialize,
            "getStatus": getStatus,
            "setDefaults": setDefaults,
            "setLang": setLang,
            "setPitch": setPitch,
            "setRate": setRate,
            "setText": setText,
            "getVoices": getVoices,
            "setVoice": setVoice,
            "setVolume": setVolume,
            "setOnError": setOnError,
            "setOnStart": setOnStart,
            "setOnBoundary": setOnBoundary,
            "setOnPause": setOnPause,
            "setOnResume": setOnResume,
            "setOnEnd": setOnEnd,
            "setOnMark": setOnMark,
            "start": start
        };

    })();

    window.Speech.initialize().setDefaults();

})();
