import Nav from '@components/Nav'
import Provider from '@components/Provider'
import '@styles/globals.css'


export const metadata = {
    title: 'Promptopia',
    description: 'Promptopia is a platform for creating and sharing AI prompts'
}
const RootLayout = ({children}) => {
  return (
    <html lang='eng'>
        <body>
          <Provider>
          <div className="main">
            <div className='gradient'/>
          </div>
          <div className='app'>
            <Nav/>
            {children}
          </div>
          </Provider>
        </body>
      
    </html>
  )
}

export default RootLayout
