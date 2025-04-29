
# Spring Money Advisor Marketplace

This module provides a complete advisor marketplace that can be easily integrated into your existing Next.js project.

## Integration Steps

1. Copy the entire `/advisors` directory to your Next.js project.

2. Add the required dependency:
   ```
   npm install framer-motion
   ```

3. Create the following pages in your Next.js project:

   - `pages/advisors/index.js` (Marketplace listing page)
   - `pages/advisors/[id].js` (Individual advisor profile page)

   See the example implementations in `AdvisorRoutes.tsx`.

4. Update your navigation to include links to the advisor marketplace.

5. Replace the sample data in `data/advisors.js` with your actual advisor data, or connect it to your API.

## Features

- Modern, responsive UI with animations
- Complete navigation flow from listing to detailed profiles
- Search functionality instead of complex filters
- Social sharing and contact options
- Mobile-friendly design

## Customization

- Colors can be adjusted in your tailwind config by modifying the Spring Money color palette
- All components are fully responsive and will adapt to your layout
- The module is designed to work seamlessly with Next.js routing

## Components

- `AdvisorMarketplace`: Main listing page with search and advisor cards
- `AdvisorDetails`: Detailed profile view for a single advisor
- `AdvisorCard`: Card component for each advisor in the listing
- `AdvisorHero`: Hero section with search functionality

## Data Structure

See the `types.ts` file for the complete data structure used by the components.
