import Footer from './Footer'

const Layout = ({ children }) => {
    return (
        <div className='layout flex flex-col justify-between lg:flex-row lg:items-end container mx-auto max-w-[1200px]'>
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout