title: Customer Trainings Detail Page
description: Customer Trainings Detail Page

```html
<scroll-nav>
    <nav class="navbar-wrapper">
        <div class="announcement">
            <p class="announcement__text">🔥 It‘s H.O.T. <a class="announcement__link" href="/de/topics/data-mesh-workshop/">Get ice cream for free</a></p>
        </div>
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

<header class="header">
    <div class="header__wrapper">
        <div class="breadcrumb">
            <ul class="breadcrumb__list">
                <li class="breadcrumb__item"><a href="#">Home</a></li>
                <li class="breadcrumb__item"><span class="breadcrumb__arrow" aria-label="Pfeil nach rechts">›</span>Trainingsname</li>
            </ul>
        </div>
    </div>
</header>

<main class="container container--xl container-vertical-spacing-lg">
    <h2 class="section__title--sub">Vorab-Checkliste</h2>
    <ol class="tile-grid--sm training-checklist">
        <li class="training-checklist__item">
            <div class="training-checklist__item__wrapper">
                <div class="training-checklist__item__body">
                    <h3 class="training-checklist__item__title">Mach den Technick-Check</h3>
                    <p class="training-checklist__item__caption">Wichtiger Hinweis-Text</p>
                    <a href="#" class="training-checklist__item__link">Link</a>
                </div>
            </div>
        </li>
        <li class="training-checklist__item">
            <div class="training-checklist__item__wrapper">
                <div class="training-checklist__item__body">
                    <h3 class="training-checklist__item__title">Mach den Technick-Check</h3>
                    <p>Wichtiger Hinweis-Text</p>
                    <ul>
                        <li>Node</li>
                        <li>Git</li>
                        <li>kaffee</li>
                    </ul>
                </div>
            </div>
        </li>
    </ol>
    <section class="tile-grid--sm m-t-lg">
        <div class="tile-grid__wrapper">
            <h2 class="section__title--sub">Zeitplan</h2>
            <ul class="tuple-list">
                <li class="tuple-list__entry">
                    <span class="tuple-list__label">MO 22.12.</span>
                    <span class="tuple-list__value"
                        >9 — 13 Uhr und 14 — 17:30 Uhr <br />
                        <small>kurze Pausen ca. jede Stunde</small>
                    </span>
                </li>
                <li class="tuple-list__entry">
                    <span class="tuple-list__label">DI 14.9</span>
                    <span class="tuple-list__value"
                        >9 — 13 Uhr und 14 — 17:30 Uhr <br />
                        <small>kurze Pausen ca. jede Stunde</small>
                    </span>
                </li>
                <li class="tuple-list__entry">
                    <span class="tuple-list__label">Mi 15.9.</span>
                    <span class="tuple-list__value"
                        >9 — 13 Uhr und 14 — 17:30 Uhr <br />
                        <small>kurze Pausen ca. jede Stunde</small>
                    </span>
                </li>
            </ul>
        </div>
        <div class="tile-grid__wrapper">
            <h2 class="section__title--sub">Wichtige Links</h2>
            <ul class="resource-list">
                <li>
                    <div class="resource-list__item">
                        <a href="#">Wichtiger Link</a>
                    </div>
                </li>
                <li>
                    <div class="resource-list__item">
                        <a href="#">Wichtiger Link</a>
                    </div>
                </li>
                <li>
                    <div class="resource-list__item">
                        <a href="#">Wichtiger Link</a>
                    </div>
                </li>
                <li>
                    <div class="resource-list__item">
                        <a href="#">Wichtiger Link</a>
                    </div>
                </li>
            </ul>
        </div>
        <div class="tile-grid__wrapper">
            <h2 class="section__title--sub">Hinweise</h2>
            <div class="markdown-text--medium">
                <p>Hier steht ein Freitext, der weitere Hinweise enthält, die man ausfüllen kann. Oder auch nicht.</p>
            </div>
        </div>
        <div class="tile-grid__wrapper">
            <h2 class="section__title--sub">Zoom Link</h2>
            <a href="">Linkslinkrechts</a>
        </div>
    </section>
    <h2 class="section__title--sub m-t-lg">Deiner Trainer:innen</h2>
    <div class="profiles">
        <div class="profile">
            <img class="profile__image" src="/snippet/images/profiles/Arne_Landwehr.jpg" />
            <h3 class="profile__name"><a href="#" class="profile__link">Arne Landwehr</a></h3>
            <a href="#">Email schreibenk</a>
        </div>
        <div class="profile">
            <img class="profile__image" src="/snippet/images/profiles/Arne_Landwehr.jpg" />
            <h3 class="profile__name"><a href="#" class="profile__link">Arne Landwehr</a></h3>
            <a href="#">Email schreiben</a>
        </div>
    </div>
</main>
<footer>
    <div class="footer__top">
        <div class="footer__top__content">
            <div class="footer__top__content__right">
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
            <div class="footer__top__content__left">
                <h2>Newsletter</h2>
                <p>Frische Architektur direkt in deinem Postfach. Melde dich jetzt an und erfahre alle zwei Monate als erste(r) von neuen Angeboten und Themen</p>
                <form class="form" action="#" method="post" target="_blank">
                    <div class="form__field">
                        <label class="form__label" for="cr_form-input--text8475472">Wie heißt Du? <abbr title="required">*</abbr></label>
                        <input class="form__input" type="text" name="1121423" id="cr_form-input--text8475472" />
                    </div>
                    <div class="form__field">
                        <label class="form__label" for="text8475487">E-Mail <abbr title="required">*</abbr></label>
                        <input class="form__input" type="email" name="email" id="text8475487" />
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div class="footer__bottom">
        <div class="footer__bottom__content">
            <span class="footer__company">socreatory — The Software Creators’ Academy</span>
            <span class="footer__copyright">©2023</span>
        </div>
    </div>
</footer>
```
