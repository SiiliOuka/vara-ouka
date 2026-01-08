# Vara.ouka.fi
## Getting Started

## Install nvm (Node Version Manager)
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

### Download and install Node.js (you may need to restart the terminal)
```bash
nvm install
```

### Verify the right Node.js version is used
```bash
node -v
```
Should print `v20.16.0`

### Verify the right npm version is used
```bash
npm -v
```
Should print `10.8.1`

### Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Page changes
You can edit the Finnish page in page.js file and the English page in en/page.js

## Style changes
Styles can be modified in global.scss or in the files in the styles-folder.

## Deployment
Just push to main-branch and the deployment process will be triggered automatically.
