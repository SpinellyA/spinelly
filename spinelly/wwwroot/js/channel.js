// Keeps the station bug honest: whichever section sits mid-screen is "Now" on air,
// and while a tape is in the deck the bug names the tape instead of "Projects".
// Blazor has no scroll events of its own, so this one observer is the bridge.
window.spinellyChannel = {
    _now: 'home',
    _tape: null,

    _render: function () {
        const labels = {
            home: 'Intro', projects: 'Projects', about: 'About',
            education: 'Education', skills: 'Skills', contact: 'Contact',
            resume: 'Resume'
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

        // Arriving from another page (/resume → /#projects), the router lands on
        // the top of Home; carry the visitor on to the section they asked for.
        const target = location.hash && document.getElementById(location.hash.slice(1));
        if (target) target.scrollIntoView();
    },

    // Pages without scrolling sections (the resume) name themselves.
    page: function (id) {
        this._now = id;
        this._tape = null;
        this._render();
    },

    onAir: function (name) {
        this._tape = name || null;
        this._render();
    }
};
