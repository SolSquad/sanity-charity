export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60155237a6b6204364008251',
                  title: 'Sanity Studio',
                  name: 'sanity-charity-studio',
                  apiId: '4b58f165-dfa1-49b9-87eb-9d119375589b'
                },
                {
                  buildHookId: '60155237a6b6203cdf00851d',
                  title: 'Blog Website',
                  name: 'sanity-charity',
                  apiId: '28e1a666-ea3c-4287-b823-22a30f99a127'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/SolSquad/sanity-charity',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-charity.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
