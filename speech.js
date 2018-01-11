;(function () {

    window.Speech = (function () {

        var enabled = false;

        var ssu = null;

        var voices = [];

        var init = function (callback) {
            if ("SpeechSynthesisUtterance" in window) {
                enabled = true;
                ssu = new window.SpeechSynthesisUtterance();
                window.speechSynthesis.addEventListener("voiceschanged", function () {
                    voices = window.speechSynthesis.getVoices();
                    callback && callback();
                });
            } else {
                enabled = false;
            }
            return window.Speech.setDefaults();
        };

        var getStatus = function () {
            return enabled;
        };

        var setDefaults = function () {
            return setLang("en-GB")
                .setVoiceByLang("en-GB")
                .setPitch(1.0)
                .setRate(1.0)
                .setVolume(1.0);
        };

        var setLang = function (lang) {
            if (enabled === true) {
                ssu.lang = lang;
            }
            return window.Speech;
        };

        var getVoices = function () {
            return voices;
        };

        var getVoicesByLang = function (lang) {
            var results = [];
            for (var i = 0; voices[i] !== undefined; i ++) {
                if (voices[i].lang.indexOf(lang) !== - 1) {
                    results.push(voices[i]);
                }
            }
            return results;
        };

        var setVoice = function (voice) {
            if (enabled === true) {
                ssu.voice = voice || null;
            }
            return window.Speech;
        };

        var setVoiceByLang = function (lang) {
            if (enabled === true) {
                var voices = getVoicesByLang(lang);
                if (voices[0] !== undefined) {
                    setVoice(voices[0]);
                }
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

        var setVolume = function (volume) {
            if (enabled === true) {
                ssu.volume = volume;
            }
            return window.Speech;
        };

        var setText = function (text) {
            if (enabled === true) {
                ssu.text = text;
            }
            return window.Speech;
        };

        var start = function () {
            if (enabled === true) {
                window.speechSynthesis.speak(ssu);
            }
            return window.Speech;
        };

        var stop = function () {
            if (enabled === true) {
                window.speechSynthesis.cancel();
            }
            return window.Speech;
        };

        var pause = function () {
            if (enabled === true) {
                window.speechSynthesis.pause();
            }
            return window.Speech;
        };

        var resume = function () {
            if (enabled === true) {
                window.speechSynthesis.resume();
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

        return {
            "init": init,
            "getStatus": getStatus,
            "setDefaults": setDefaults,
            "setLang": setLang,
            "getVoices": getVoices,
            "getVoicesByLang": getVoicesByLang,
            "setVoice": setVoice,
            "setVoiceByLang": setVoiceByLang,
            "setPitch": setPitch,
            "setRate": setRate,
            "setText": setText,
            "setVolume": setVolume,
            "start": start,
            "stop": stop,
            "pause": pause,
            "resume": resume,
            "setOnError": setOnError,
            "setOnStart": setOnStart,
            "setOnBoundary": setOnBoundary,
            "setOnPause": setOnPause,
            "setOnResume": setOnResume,
            "setOnEnd": setOnEnd,
            "setOnMark": setOnMark
        };

    })();

})();
