Les keys de llenguatge s'agafaràn de forma concatenada amb la key principal
`chrome.i18n.getMessage("autoDeployVersion_language_name")`

Les imatges s'agafaran amb la key principal
`chrome.runtime.getURL('autoDeployVersion_cover.png')`

```js
{
  autoDeployVersion: {
    tags: ["logicommerce", "logicommerce8x", "logicommerceBeyond"],
    props: {
      active: true,
      defaultFormat: "v0.0.0"
    }
  },
  linkedGitIssues: {
    tags: ["logicommerce", "logicommerce8x", "logicommerceBeyond"],
    props: {
      active: true
    }
  },
  trackersCodeEditor: {
    tags: ["logicommerce", "logicommerce8x", "logicommerceBeyond"],
    props: {
      active: true
    }
  },
  lcBackground: {
    tags: ["logicommerce", "logicommerce8x", "logicommerceBeyond"],
    props: {
      active: true,
      image: "https://images.unsplash.com/photo-1439694458393-78ecf14da7f9?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjM0NjEwfQ",
      thumb: "https://images.unsplash.com/photo-1439694458393-78ecf14da7f9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjM0NjEwfQ",
      regular: "https://images.unsplash.com/photo-1439694458393-78ecf14da7f9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjM0NjEwfQ",
      userName: "Brandon Lam",
      userLink: "https://unsplash.com/@brandon_lam",
      downloadLocation: "https://api.unsplash.com/photos/Dd_7xDCuuUo/download"
    }
  },
  lcDeveloperBar: {
    tags: ["logicommerce", "logicommerce8x", "logicommerceBeyond"],
    props: {
      active: true
    }
  },
  sandboxSelectorBtns: {
    tags: ["logicommerce", "logicommerce8x", "logicommerceBeyond"],
    props: {
      active: true
    }
  },
  lcRichPages: {
    tags: ["logicommerce", "logicommerce8x", "logicommerceBeyond"],
    props: {
      active: true,
      gridView: true,
      betterGroupHeaders: true,
      betterTreeLevels: true
    }
  },
  forcedForceView: {
    tags: ["production", "fluid"],
    props: {
      active: true
    }
  },
  scrollToDump: {
    tags: ["development", "fluid", "php"],
    props: {
      active: true
    }
  },
  profile: {
    avatar: {
      actived: false,
      value: chrome.extension.getURL('img/user.svg'),
      name: 'Default',
      description: 'Nothing to say!',
    },
    shopTestingEmail: {
      actived: false,
      value: '',
    },
    shopTestingUsername: {
      actived: false,
      value: '',
    },
    shopTestingPassword: {
      actived: false,
      value: '',
    },
  },
}
```
