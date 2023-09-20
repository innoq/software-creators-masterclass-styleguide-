module.exports = {
  title: "Software Creators' Masterclass Style Guide",
  language: "en",
  description: "Styleguide Software Creators' Masterclass",

  pages: {
    "": "./lib/documentation/README.md",

    basics: {
      file: "./lib/documentation/BASICS.md",
      children: {
        breakpoints: "./lib/documentation/breakpoints.md",
        colors: "./lib/documentation/colors.md",
        spacers: "./lib/documentation/spacers.md",
      },
    },

    views: {
      file: "./lib/documentation/VIEWS.md",
      children: {
        about_us: "./lib/views/about/about.md",
        contact: "./lib/views/contact/contact.md",
        customer_trainings_page: "./lib/views/customer-pages/customer-trainings-page/customer-trainings-page.md",
        customer_profile_page: "./lib/views/customer-pages/customer-profile-page/customer-profile-page.md",
        customer_profile_edit_page: "./lib/views/customer-pages/customer-profile-edit-page/customer-profile-edit-page.md",
        home: "./lib/views/home/home.md",
        home_test: "./lib/views/home/home_test.md",
        isaqb: "./lib/views/isaqb/isaqb.md",
        login_page: "./lib/views/login_page/login_page.md",
        login_page_success: "./lib/views/login_page_success/login_page_success.md",
        module_kit: "./lib/views/module_kit/module_kit.md",
        news: "./lib/views/news/news.md",
        news_detail: "./lib/views/news/news_detail.md",
        prices: "./lib/views/prices/prices.md",
        privacy: "./lib/views/privacy/privacy.md",
        site_notice: "./lib/views/site_notice/site_notice.md",
        trainings_overview: "./lib/views/trainings_overview/trainings_overview.md",
        trainings_detail: "./lib/views/trainings_detail/trainings_detail.md",
        trainings_detail_isaqb: "./lib/views/trainings_detail/trainings_detail_isaqb.md",
        trainings_detail_power: "./lib/views/trainings_detail/trainings_detail_power.md",
        trainer_overview: "./lib/views/trainer/trainer_overview.md",
        trainer_detail: "./lib/views/trainer/trainer_detail.md",
      },
    },

    blueprints: {
      file: "./lib/documentation/BLUEPRINTS.md",
      children: {
        example_layout_layout: "./lib/blueprints/example-layout/example-layout.md",
      },
    },

    organisms: {
      file: "./lib/documentation/ORGANISMS.md",
      children: {
        navbar: "./lib/components/navbar/navbar.md",
        footer: "./lib/components/footer/footer.md",
        form: "./lib/components/form/form.md",
        login_form: "./lib/components/login-form/login-form.md",
      },
    },

    molecules: {
      file: "./lib/documentation/MOLECULES.md",
      children: {
        announcement: "./lib/components/announcement/announcement.md",
        cards: "./lib/components/cards/cards.md",
        breadcrumb: "./lib/components/breadcrumb/breadcrumb.md",
        offer_box: "./lib/components/offer-box/offer-box.md",
        quote: "./lib/components/quote/quote.md",
        rating: "./lib/components/rating/rating.md",
      },
    },

    atoms: {
      file: "./lib/documentation/ATOMS.md",
      children: {
        headings: "./lib/components/headings/headings.md",
        link: "./lib/components/link/link.md",
        icons: "./lib/components/icons/icons.md",
        text: "./lib/components/text/text.md",
        buttons: "./lib/components/buttons/buttons.md",
      },
    },
  },

  // Don't edit the following lines
  snippetAssets: {
    js: [
      {
        source: "./lib/assets/javascripts/application.js",
        target: "./application.js",
      },
    ],
    sass: [
      {
        source: "./lib/assets/stylesheets/application.scss",
        target: "./application.css",
      },
      {
        source: "./lib/assets/stylesheets/styleguide.scss",
        target: "./styleguide.css",
      },
    ],
    static: [
      {
        source: "./lib/assets/images",
        target: "./images",
      },
      {
        source: "./lib/assets/fonts",
        target: "./fonts",
      },
    ],
  },

  watchDirs: ["./lib"],
};
