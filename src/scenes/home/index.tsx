import { SelectedPage } from '@/shared/types'
import HeroSection from './HeroSection';
import ActionButton from '@/shared/ActionButton';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {

  // const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return <section
    id="home"
    className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0"
  >
    {/* Image and Main Hero */}
    <div>
      {/* Main Header */}
      <HeroSection />
    </div>
    <div>
      <ActionButton setSelectedPage={setSelectedPage}>
        Contact Me!
      </ActionButton>
    </div>


  </section>
}

export default Home