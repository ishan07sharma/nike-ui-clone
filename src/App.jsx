// import hero from './sections/hero';
import Nav from './components/Nav';
// import Hero from './sections/Hero';
// import Services from './sections/Services';
// import Specialoffer from './sections/Specialoffer';
// import Footer from './sections/Footer';
// import Popularprdoducts from './sections/Popularprdoducts';
// import Subscribe from './sections/Subscribe';
// import Superquality from './sections/Superquality';
import{Hero,Services,Specialoffer,Footer,PopularPrdoducts,Subscribe,Superquality,CustomerReview} from './sections/index'

const App=() => {
    return(
    <main className="relative">
            <nav>
              <Nav/>
            </nav>
            <section className="xl:padding-1 wide:padding-r padding-b padding-x ">
          
                <Hero/>
            </section>
        <section className="padding">
          <PopularPrdoducts/>
        </section>
        <section className="padding">
          <Superquality/>
        </section>
        <section className="padding-x py-10">
          <Services/> 
        </section>
        <section className="padding">
          <Specialoffer/>
        </section>
        <section className="padding bg-pale-blue">
        <CustomerReview/>
        </section>
        <section className="padding-x sm:py-32 w-full">
        <Subscribe/>
        </section>
        <section className="padding-x padding-t pb-8 bg-black">
            <Footer/>
        </section>


  </main>

    )
}
export default App
