title: Customer Trainings Page
description: Customer Trainings Page

```html
<scroll-nav>
    <nav class="navbar-wrapper">
        <div class="announcement">
            <p class="announcement__text">🔥 It‘s H.O.T. <a class="announcement__link"
                    href="/de/topics/data-mesh-workshop/">Get
                    ice cream for free</a></p>
        </div>
        <div class="navbar">
            <a href="#" class="navbar__brand-link">
                <img class="navbar__logo" src="/snippet/images/logos/soc_logo.svg"
                    alt="Software Creators Academy Logo" />
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
                    <li><a lang="de" href="#" title="Zu Deutsch wechseln" aria-label="Zu Deutsch wechseln"
                            class="navigation-meta__item">DE</a></li>
                    <li><a lang="en" href="#" title="Switch to English" aria-label="Switch to English"
                            aria-current="true" class="navigation-meta__item">EN</a></li>
                </ul>
            </div>
            <label class="navbar__burger" for="navbar__checkbox"></label>
        </div>
    </nav>
</scroll-nav>

<header class="header--breadcrumb header-color--normal">
    <div class="container container--xl">
        <div class="breadcrumb">
            <ul class="breadcrumb__list">
                <li class="breadcrumb__item"><a href="#">Home</a></li>
                <li class="breadcrumb__item"><span class="breadcrumb__arrow" aria-label="Pfeil nach rechts">›</span>Meine Trainings</li>
            </ul>
        </div>
    </div>
</header>


<main>
    <section class="container container--xl container--centered">
        <h1 class="header__heading">Deine Trainings</h1>
        <ul class="cards">
            <li>
                <div class="card card--isaqb">
                    <div class="card__body card__body--isaqb">
                        <div class="card__body__top">
                            <h3 class="card__title"><a href="#" class="card__link">Architecture Documentation</a></h3>
                            <p class="card__text">Card Text Lorem, ipsum dolor Lorem ipsum dolor Lorem ipsum dolor sisit.</p>
                        </div>
                        <div class="pills">
                            <div class="pill"><span class="pill__label">Technik</span><span class="pill__number">20</div>
                            <div class="pill"><span class="pill__label">Methodik</span><span class="pill__number">—</div>
                            <div class="pill"><span class="pill__label">Kommunikation</span><span class="pill__number">10</div>
                        </div>
                    </div>
                </div>
                <div class="card__details">
                    <h3 class="card__details__date">13.-15. September 2023</h3>
                    <a href="#" class="card__details__link">Trainingsdetails ansehen</a>
                    <p class="card__details__caption">Dein Zertifikat ist da</p>
                </div>
            </li>
            <li>
                <div class="card card--power">
                    <div class="card__body card__body--power">
                        <div class="card__body__top">
                            <h3 class="card__title"><a href="#" class="card__link">Leichtgewichtige Architekturdokumentation</a></h3>
                            <p class="card__text">Softwarearchitekturen festhalten und kommunizieren</p>
                        </div>
                    </div>
                </div>
                <div class="card__details">
                    <h3 class="card__details__date">13.-15. September 2023</h3>
                    <a href="#" class="card__details__link">Trainingsdetails ansehen</a>
                    <p class="card__details__caption">Dein Zertifikat ist da</p>
                </div>
            </li>
            <li>
                <div class="card">
                    <div class="card__body">
                        <div class="card__body__top">
                            <h3 class="card__title"><a href="#" class="card__link">Evolution und Verbesserung von Softwarearchitekturen</a></h3>
                            <p class="card__text">Mit Domain-driven Design, Event Storming und ML Design Canvas AI-Produkte entwerfen.</p>
                        </div>
                    </div>
                </div>
                <div class="card__details">
                    <h3 class="card__details__date">13.-15. September 2023</h3>
                    <a href="#" class="card__details__link">Trainingsdetails ansehen</a>
                    <p class="card__details__caption">Dein Zertifikat ist da</p>
                </div>
            </li>
        </ul>
    </section>
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
