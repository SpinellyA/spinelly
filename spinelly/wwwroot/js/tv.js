// Playback bridge for the CRT showcase. The <video> has no native controls —
// the TV chassis buttons drive it, and media events report state back to Blazor
// so the play/pause icon stays truthful even when playback ends on its own.
window.spinellyTv = {
    init: function (el, dotnet) {
        if (!el || el.dataset.tvBound === '1') return;
        el.dataset.tvBound = '1';
        el.addEventListener('play', () => dotnet.invokeMethodAsync('OnPlayStateChanged', true));
        el.addEventListener('pause', () => dotnet.invokeMethodAsync('OnPlayStateChanged', false));
        el.addEventListener('ended', () => dotnet.invokeMethodAsync('OnPlayStateChanged', false));
    },

    // Returns false when the browser blocks playback (Safari can refuse audible
    // playback once the user gesture is no longer "fresh"). The caller then just
    // leaves the play button showing.
    play: async function (el) {
        if (!el) return false;
        try {
            await el.play();
            return true;
        } catch {
            return false;
        }
    },

    pause: function (el) {
        if (el) el.pause();
    },

    setVolume: function (el, volume, muted) {
        if (!el) return;
        el.volume = volume;
        el.muted = muted;
    }
};
