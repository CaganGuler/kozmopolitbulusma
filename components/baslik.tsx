import VideoThumb from '@/public/images/temp3.jpeg'
import ModalVideo from '@/components/modal-video'

export default function Hero() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">


        {/* Hero content */}
        <div className="relative pt-20 pb-10 md:pt-20 md:pb-16">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-4 md:pb-4">
            <h1 className="h1 mb-4" data-aos="fade-up">KOZMOPOLİT BULUŞMA</h1>
            <p className="h3 mb-4" data-aos="fade-up" data-aos-delay="200">13-14-15 Eylül'de İstanbul'da !</p>
            <p className="h4 mb-4" data-aos="fade-up" data-aos-delay="200">3 Bölge Buluşması Nedir?</p>
            <p className="text-xl text-gray-400 mb-4" data-aos="fade-up" data-aos-delay="200">3 Bölge Buluşması ile ülkemizdeki tüm Rotaract'lar bir araya gelerek dostluk bağlarını güçlendirmektedir. Bir yandan buluşmanın gerçekleştiği bölgede çeşitli etkinlikler yapılarak doyasıya eğlenirken bir yandan da bir çok ortak projenin kapıları aralanmaktadır. Her yıl ülkemizdeki bir bölge tarafından ev sahipliği alınan 3 Bölge Buluşması'nın, 2024-25 dönemi ev sahipliği, 2420.Bölge Rotaract Temsilciliği ve Ev Sahibi Bölge Kulüpleri olarak bizlere aittir.</p>
              
          </div>


          <div className="max-w-3xl mx-auto text-center pb-6 md:pb-6" data-aos="fade-up" data-aos-delay="400">
                <a className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0" href="https://forms.gle/FEKLEBiXathNaLe28" target='_blank'>Kayıt Ol</a>
              </div>

          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={1024}
            thumbHeight={576}
            thumbAlt="Intro Video"
            video="/videos/intro-video.mp4"
            videoWidth={1920}
            videoHeight={1080} />

        </div>

      </div>
    </section>
  )
}
