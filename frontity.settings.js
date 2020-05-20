const settings = {
  "name": "wheredoweance",
  "state": {
    "frontity": {
      "url": "https://test.frontity.io",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Events",
              "/events/"
            ],
            [
              "Resources & Publications",
              "/resources-publications/"
            ],
            [
              "About Us",
              "/about-us/"
            ]
          ] /*,
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }*/
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://public-api.wordpress.com/wp/v2/sites/wheredowedance.wordpress.com",
          "Homepage": "/",
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
