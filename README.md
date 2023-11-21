# NeiroAI Adobe Express

You can access the deployed version of the plugin here: https://new.express.adobe.com/new?category=addOns&claimCode=wihk24k24:3P783O49

## Local Setup

To run this project locally, you need to have pnpm package manager installed.

Follow these steps to get started:

```bash
pnpm i --frozen-lockfile
pnpm run start
```

## Deployment

```bash
pnpm i --frozen-lockfile
pnpm run package
```

After packaging, upload the generated archive to Adobe Express.

## Development Environment Setup

Before starting development, install the following extensions in VS Code (or your preferred IDE):

-   [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
-   [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
-   [PostCSS](https://marketplace.visualstudio.com/items?itemName=csstools.postcss)
-   [PostCSS Intellisense](https://marketplace.visualstudio.com/items?itemName=vunguyentuan.vscode-postcss)
-   [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
-   [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

## Stack

-   TypeScript
-   React
-   SWR-react
-   PostCSS
-   SWR
-   CVA

## Tooling Stack

-   ESLint
-   Stylelint
-   Prettier
-   EditorConfig
-   Husky
-   Lint-staged

## File Structure

-   `api`: API handlers
-   `app`: Root component
-   `layouts`: Define the structural template of sections or pages
-   `widgets`: Contains widgets that are used within the layouts
-   `components`: Shared UI components
-   `declarations`: Declaration TypeScript files
-   `styles`: Shared PostCSS style files
-   `utils`: Utility functions
