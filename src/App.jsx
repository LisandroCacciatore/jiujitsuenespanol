import { CurrencyProvider } from './hooks/useCurrency'
import { CheckoutProvider } from './context/CheckoutContext'
import { VideoProvider } from './context/VideoContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import TrainingQuiz from './components/TrainingQuiz'
import WattersQuote from './components/WattersQuote'
import FreeVideos from './components/FreeVideos'
import TwoWays from './components/TwoWays'
import ComparisonSection from './components/ComparisonSection'
import Highlights from './components/Highlights'
import About from './components/About'
import QualifyingSection from './components/QualifyingSection'
import ContentLibrary from './components/ContentLibrary'
import Testimonials from './components/Testimonials'
import InstagramCta from './components/InstagramCta'
import Blog from './components/Blog'
import LeadCapture from './components/LeadCapture'
import Faq from './components/Faq'
import FinalCta from './components/FinalCta'
import Footer from './components/Footer'
import CheckoutModal from './components/CheckoutModal'
import VideoModal from './components/VideoModal'
import StickyCta from './components/StickyCta'
import SocialProof from './components/SocialProof'
import ExitIntent from './components/ExitIntent'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <CurrencyProvider>
      <CheckoutProvider>
        <VideoProvider>
          <Navbar />
          <main>
            <Hero />
            <Stats />
            <TrainingQuiz />
            <FreeVideos />
            <TwoWays />
            <Faq />
            <ComparisonSection />
            <Highlights />
            <About />
            <QualifyingSection />
            <ContentLibrary />
            <Testimonials />
            <WattersQuote />
            <LeadCapture />
            <InstagramCta />
            <Blog />
            <FinalCta />
          </main>
          <Footer />
          <CheckoutModal />
          <VideoModal />
          <StickyCta />
          <SocialProof />
          <ExitIntent />
          <ScrollToTop />
        </VideoProvider>
      </CheckoutProvider>
    </CurrencyProvider>
  )
}