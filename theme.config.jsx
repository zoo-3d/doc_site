import { useRouter } from 'next/router'

export default {
    logo: <span>Index Title</span>,
    project: {
        link: 'support mail',
        icon: (
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z"/>
                <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z"/>
            </svg>
        )
    },
    // ... other theme options
    editLink: {
        component: null
    },
    feedback: {
        content: null
    },
    gitTimestamp: null,
    // To set a title template for each page, except for the homepage, a suffix will be added.
    useNextSeoProps() {
        const { asPath } = useRouter()
        const url = `/${asPath}`

        let r = {
            canonical: url,
            titleTemplate: '%s',
        }
        if (asPath !== '/') {
            r['titleTemplate'] = '%s | Title'
        }
        return r
    },
    head: (
        <>
            <link rel="apple-touch-icon" sizes="76x76" href="/static/favicons/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon-16x16.png" />
            <link rel="manifest" href="/static/favicons/site.webmanifest" />
            <link rel="mask-icon" href="/static/favicons/safari-pinned-tab.svg" color="#5bbad5" />
        </>
    ),
    footer: {
        text: (
          <span>
            {new Date().getFullYear()} ©{' '}
            <a href="/" target="_blank">
              Footer
            </a>
            .
          </span>
        )
      }
  }