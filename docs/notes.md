## Building
running:
- npm run build
- serve -s build

will make it so that the paths in: 
- insanfolio-saas-app/src/components/landing/LandingPage.tsx
- insanfolio-saas-app/src/components/landing/NotFound404Page.tsx
not work. so they will only be able to read the public file after doing `npm run start`. not sure why


--------------------------------

UseEffect() runs twice in develeopment mode. so I should ignore that it makes two draftDataTables whenever i try to only make one.