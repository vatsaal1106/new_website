# Next.js Landing Page

This is a Next.js landing page application configured for deployment on AWS Amplify.

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Building for Production

```bash
npm run build
```

## Deploying to AWS Amplify

### Option 1: Deploy via AWS Amplify Console (Recommended)

1. Push your code to a Git repository (GitHub, GitLab, BitBucket, etc.)

2. Log in to the [AWS Amplify Console](https://console.aws.amazon.com/amplify/home)

3. Choose "Connect app"

4. Select your Git provider and repository

5. Configure build settings:
   - Amplify will automatically detect that this is a Next.js app
   - The included `amplify.yml` file will be used for build settings

6. Review and save

7. Amplify will deploy your application and provide a URL when complete

### Option 2: Deploy via Amplify CLI

1. Install the Amplify CLI:
   ```bash
   npm install -g @aws-amplify/cli
   ```

2. Configure the Amplify CLI:
   ```bash
   amplify configure
   ```

3. Initialize Amplify in your project:
   ```bash
   amplify init
   ```

4. Add hosting:
   ```bash
   amplify add hosting
   ```

5. Deploy:
   ```bash
   amplify publish
   ```

## Project Structure

- `app/`: Contains the Next.js pages and routes
- `components/`: Reusable UI components
- `public/`: Static assets
- `styles/`: Global styles

## Configuration Files

- `next.config.mjs`: Next.js configuration
- `amplify.yml`: AWS Amplify build configuration
- `tailwind.config.ts`: Tailwind CSS configuration 