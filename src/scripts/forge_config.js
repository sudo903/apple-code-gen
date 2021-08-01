module.exports = {
    packagerConfig: {
        icon: "./src/icons/app.ico",
        appCopyright: "@jsdev911",
        asar: true,
        prune: true,
      },
      publishers: [
        {
          name: "@electron-forge/publisher-github",
          config: {
            repository: {
              owner: "sudo903",
              name: "apple-code-gen"
            }
          }
        }
      ],
      makers: [
        {
          name: "@electron-forge/maker-squirrel",
          config: {
            name: "apple-code-gen",
            iconUrl:`${process.cwd()}\\src\\icons\\app.ico`,
            loadingGif:"./src/icons/install.gif",
            noMsi: true,
            setupIcon: "./src/icons/app.ico"
          }
        },
        {
          name: "@electron-forge/maker-zip",
          platforms: [
            "darwin"
          ]
        },
        {
          name: "@electron-forge/maker-deb",
          config: {
            options: {
              "icon": "./src/icons/app_icon_linux.png"
            }
          }
        },
        {
          name: "@electron-forge/maker-rpm",
          config: {
            options: {
              icon: "./src/icons/app_icon_linux.png"
            }
          }
        }
      ]
}