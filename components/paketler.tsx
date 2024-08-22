import Topkapi from '@/public/images/topkapi.png'
import Galata from '@/public/images/galata.png'
import Ayasofya from '@/public/images/ayasofya.png'
import Dolmabahce from '@/public/images/dolmabahce.png'
import KizKulesi from '@/public/images/kizkulesi.png'
import Yerebatan from '@/public/images/yerebatan.png'
import Ciragan from '@/public/images/ciragan.png'
import Bogaz from '@/public/images/bogaz.png'
import Kapalicarsi from '@/public/images/kapalicarsi.png'





import Image from 'next/image'

export default function Features() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Paketler</h2>
            <div style={{borderTop:"1px solid white"}}></div>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col paket-cards" style={{padding:10}} data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              {<h4 className="h4 mb-2 text-center">TOPKAPI SARAYI</h4>}
              <Image style={{"marginLeft":"auto", marginRight:"auto",marginBottom:10}} src={Topkapi} width={1024} height={576} alt={"Photo"} />
              <li><span className="text-sm text-gray-400 text-center">2 Gece Konaklama - Bir Kişilik Oda</span></li>
              <li><span className="text-sm text-gray-400 text-center">Kozmopolit Gala + After</span></li>
              <li><span className="text-sm text-gray-400 text-center">Kozmopolit Tekne Partisi - Adalar ve Boğaz Turu</span></li>
              <li><span className="text-lg text-center">Fiyat: 11.600₺</span></li>

            </div>

            <div className="relative flex flex-col paket-cards" style={{padding:10}} data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
            { <h4 className="h4 mb-2 text-center">GALATA KULESİ</h4>}
              <Image style={{"marginLeft":"auto", marginRight:"auto",marginBottom:10}} src={Galata} width={1024} height={576} alt={"Photo"} />
              <li><span className="text-sm text-gray-400 text-center">2 Gece Konaklama - İki Kişilik Oda</span></li>
              <li><span className="text-sm text-gray-400 text-center">Kozmopolit Gala + After</span></li>
              <li><span className="text-sm text-gray-400 text-center">Kozmopolit Tekne Partisi - Adalar ve Boğaz Turu</span></li>
              <li><span className="text-lg text-center">Fiyat: 7.200₺</span></li>

            </div>

            <div className="relative flex flex-col paket-cards" style={{padding:10}} data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              {<h4 className="h4 mb-2 text-center">AYASOFYA</h4>}
              <Image style={{"marginLeft":"auto", marginRight:"auto",marginBottom:10}} src={Ayasofya} width={1024} height={576} alt={"Photo"} />
              <li><span className="text-sm text-gray-400 text-center">2 Gece Konaklama - Üç Kişilik Oda</span></li>
              <li><span className="text-sm text-gray-400 text-center">Kozmopolit Gala + After</span></li>
              <li><span className="text-sm text-gray-400 text-center">Kozmopolit Tekne Partisi - Adalar ve Boğaz Turu</span></li>
              <li><span className="text-lg text-center">Fiyat: 6.750₺</span></li>

            </div>
            <div className="relative flex flex-col paket-cards" style={{padding:10}} data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <h4 className="h4 mb-2 text-center">DOLMABAHÇE SARAYI</h4>
              <Image style={{"marginLeft":"auto", marginRight:"auto",marginBottom:10}} src={Dolmabahce} width={1024} height={576} alt={"Photo"} />
              <li><span className="text-sm text-gray-400 text-center">1 Gece Konaklama - Bir Kişilik Oda</span></li>
              <li><span className="text-sm text-gray-400 text-center">Kozmopolit Gala + After</span></li>   
              <li><span className="text-lg text-center">Fiyat: 7.200₺</span></li>
              </div>

              <div className="relative flex flex-col paket-cards" style={{padding:10}} data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <h4 className="h4 mb-2 text-center">KIZ KULESİ</h4>
              <Image style={{"marginLeft":"auto", marginRight:"auto",marginBottom:10}} src={KizKulesi} width={1024} height={576} alt={"Photo"} />
              <li><span className="text-sm text-gray-400 text-center">1 Gece Konaklama - İki Kişilik Oda</span></li>
              <li><span className="text-sm text-gray-400 text-center">Kozmopolit Gala + After</span></li>         
              <li><span className="text-lg text-center">Fiyat: 5.000₺</span></li>   
              </div>

              <div className="relative flex flex-col paket-cards" style={{padding:10}} data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <h4 className="h4 mb-2 text-center">YEREBATAN SARNICI</h4>
              <Image style={{"marginLeft":"auto", marginRight:"auto",marginBottom:10}} src={Yerebatan} width={1024} height={576} alt={"Photo"} />
              <li><span className="text-sm text-gray-400 text-center">1 Gece Konaklama - Üç Kişilik Oda</span></li>
              <li><span className="text-sm text-gray-400 text-center">Kozmopolit Gala + After</span></li>
              <li><span className="text-lg text-center">Fiyat: 4.600₺</span></li>   
            </div>
            <div className="relative flex flex-col paket-cards" style={{padding:10}} data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <h4 className="h4 mb-2 text-center">ÇIRAĞAN SARAYI</h4>
              <Image style={{"marginLeft":"auto", marginRight:"auto",marginBottom:10}} src={Ciragan} width={1024} height={576} alt={"Photo"} />
              <li><span className="text-sm text-gray-400 text-center">Kozmopolit Gala + After</span></li>
              <li><span className="text-lg text-center">Fiyat: 2.300₺</span></li>   
            </div>

            <div className="relative flex flex-col paket-cards" style={{padding:10}} data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <h4 className="h4 mb-2 text-center">BOĞAZ</h4>
              <Image style={{"marginLeft":"auto", marginRight:"auto",marginBottom:10}} src={Bogaz} width={1024} height={576} alt={"Photo"} />
              <li><span className="text-sm text-gray-400 text-center">Kozmopolit Tekne Partisi - Adalar ve Boğaz Turu</span></li>
              <li><span className="text-lg text-center">Fiyat: 900₺</span></li>   
            </div>

            <div className="relative flex flex-col paket-cards" style={{padding:10}} data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <h4 className="h4 mb-2 text-center">KAPALIÇARŞI</h4>
              <Image style={{"marginLeft":"auto", marginRight:"auto",marginBottom:10}} src={Kapalicarsi} width={1024} height={576} alt={"Photo"} />
              <li><span className="text-sm text-gray-400 text-center">Kozmopolit Merhaba Partisi</span></li>
              <li><span className="text-lg text-center">Fiyat: 500₺</span></li>   
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
