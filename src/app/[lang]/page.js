import EventHeader from '@/components/sections/EventHeader';
import Partners from '@/components/sections/Partners';
import Sponsors from '@/components/sections/Sponsors';
import EventPhotos from '@/components/sections/EventPhotos';
import Venue from '@/components/sections/Venue';
import EventAbout from '@/components/sections/EventAbout';

export default function Home() {
  return (
    <div className="flex flex-col justify-around gap-20">
      <section id="event" className="scroll-mt-20">
        <EventHeader />
      </section>
      <section id="about" className="scroll-mt-20">
        <EventAbout />
      </section>
      <section id="photos" className="scroll-mt-20">
        <EventPhotos />
      </section>
      <section id="sponsors" className="scroll-mt-20">
        <Sponsors />
      </section>
      <section id="communities" className="scroll-mt-20">
        <Partners />
      </section>
      <section id="venue" className="scroll-mt-20">
        <Venue />
      </section>
    </div>
  );
}
