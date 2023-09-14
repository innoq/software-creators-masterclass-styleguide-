title: Customer Setting Page
description: Customer Setting Page

# Achtung! Ist noch WIP!!!

```html
<scroll-nav>
    <nav class="navbar-wrapper">
        <div class="navbar">
            <a href="#" class="navbar__brand-link">
                <img class="navbar__logo" src="/snippet/images/logos/soc_logo.svg" alt="Software Creators Academy Logo" />
            </a>
            <a href="#" class="navigation-login">Login</a>
            <input type="checkbox" id="navbar__checkbox" />
            <div class="navigation-main">
                <ul role="list" aria-label="Seitennavigation" class="navbar__items">
                    <li><a href="#" class="navbar__item">Trainings</a></li>
                    <li><a href="#" class="navbar__item">Trainer:innen</a></li>
                    <li><a href="#" class="navbar__item">Preise</a></li>
                    <li><a href="#" class="navbar__item">iSAQB</a></li>
                </ul>
                <ul class="navigation-meta" role="list" aria-label="Verfügbare Sprachen">
                    <li><a lang="de" href="#" title="Zu Deutsch wechseln" aria-label="Zu Deutsch wechseln" class="navigation-meta__item">DE</a></li>
                    <li><a lang="en" href="#" title="Switch to English" aria-label="Switch to English" aria-current="true" class="navigation-meta__item">EN</a></li>
                </ul>
            </div>
            <label class="navbar__burger" for="navbar__checkbox"></label>
        </div>
    </nav>
</scroll-nav>

<div class="announcement">
    <p class="announcement__text">🔥 It‘s H.O.T. <a class="announcement__link" href="/de/topics/data-mesh-workshop/">Get ice cream for free</a></p>
</div>

<main class="customer-setting-page">
    <header class="header header-color--normal">
        <div class="container__fullwidth">
            <div class="breadcrumb">
                <ul class="breadcrumb__list">
                    <li class="breadcrumb__item"><a href="#">Home</a></li>
                    <li class="breadcrumb__item"><span class="breadcrumb__arrow" aria-label="Pfeil nach rechts">›</span>Profil</li>
                </ul>
            </div>
        </div>
    </header>

    <section class="container container--md">
        <span>mareike.mueller@versicherung.de</span>
        <a href="#">Profil bearbeiten</a>
        <p>
            Du kannst dein Profil bei uns ganz einfach löschen. Natürlich hast du danach keinen Zugriff mehr auf bereits absolvierte Trainings und die dazu gehörigen Zertifikate. Diese kannst du aber
            weiterhin auch anfordern unter kontakt@socreatory.com
        </p>
        <button>Profil löschen</button>
    </section>

    <footer class="footer">
        <div class="footer__top">
            <div class="container__fullwidth">
                <div class="footer__content">
                    <img class="footer__logo" src="/snippet/images/logos/soc_logo.svg" alt="Software Creators Academy Logo" />
                    <div class="footer__linkarea">
                        <ul class="footer__links">
                            <li class="footer__link"><a href="#">Trainings</a></li>
                            <li class="footer__link"><a href="#">Trainer:innen</a></li>
                            <li class="footer__link"><a href="#">Modulbaukasten</a></li>
                            <li class="footer__link"><a href="#">News</a></li>
                        </ul>
                        <ul class="footer__links">
                            <li class="footer__link"><a href="#">Impressum</a></li>
                            <li class="footer__link"><a href="#">Datenschutz</a></li>
                            <li class="footer__link"><a href="#">AGB</a></li>
                            <li class="footer__link"><a href="#">Kontakt</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer__bottom">
            <div class="container__fullwidth">
                <div class="footer__content">
                    <div class="footer__company">socreatory — The Software Creators’ Academy</div>
                    <div class="footer__copyright">©2023</div>
                </div>
            </div>
        </div>
    </footer>
</main>
```
