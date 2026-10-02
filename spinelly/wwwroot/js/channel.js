// Keeps the station bug honest: whichever section sits mid-screen is "Now" on air,
// and while a tape is in the deck the bug names the tape instead of "Projects".
// Blazor has no scroll events of its own, so this one observer is the bridge.
window.spinellyChannel = {
    _now: 'home',
    _tape: null,

    _render: function () {
        const labels = {
            home: 'Intro', projects: 'Projects', about: 'About',
            education: 'Education', skills: 'Skills', contact: 'Contact'
        };
        const out = document.getElementById('bug-now-text');
        document.documentElement.dataset.now = this._now;
        if (!out) return;
        out.textContent = this._now === 'projects' && this._tape ? this._tape : (labels[this._now] || this._now);
    },

    watch: function () {
        const observer = new IntersectionObserver(entries => {
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    this._now = entry.target.id;
                    this._render();
                }
            }
        }, { rootMargin: '-45% 0px -50% 0px' });

        document.querySelectorAll('main section[id]').forEach(s => observer.observe(s));
        this._render();
    },

    onAir: function (name) {
        this._tape = name || null;
        this._render();
    }
};
