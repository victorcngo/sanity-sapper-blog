export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
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
                  buildHookId: '61a022370d3ba675f1f2837d',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-gpzbmay3',
                  apiId: '4dd0ffd5-75ac-4226-ba22-3f5abcf94758'
                },
                {
                  buildHookId: '61a02237fa544075bda2c90e',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-w11wfp6n',
                  apiId: '0e9ca890-1658-41e1-8a72-2dc6fc48da71'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/victorcngo/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-w11wfp6n.netlify.app', category: 'apps'}
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
