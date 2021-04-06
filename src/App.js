import '../src/assets/fonts/themify-icons/themify-icons.css'
import Content from './components/content';
import Footer from './components/footer/footer';
import Header from './components/header';
import Slider from './components/slider';


function App() {
  return (
    <>
         {/* Header */}
         <Header></Header>
         {/* Slider */}
         <Slider />
         {/* Content */}
         <Content />
         {/* Footer */}
         <Footer></Footer>
    </>
  );
}

export default App;
