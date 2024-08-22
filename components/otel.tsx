import Image from 'next/image'

import Anadolu from '@/public/images/anadolu.jpg'

export default function Zigzag() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          <Image style={{"marginLeft":"auto", marginRight:"auto"}} src={Anadolu} width={1024} height={576} alt={"Photo"} />
            <h1 style={{marginTop:10}} className="h2 mb-4">Büyükada Anadolu Kulübü</h1>
            <p className="text-xl text-gray-400">İstanbul Büyükada'da yer alan Anadolu Kulübü Atatürk'ün direktifi ile devrimlerin sosyal aşaması olarak 1926 yılında kurulmuştur. Kozmopolit Buluşma'da Anadolu Kulübü Büyükada'da Atatürk'ün hediyesi olan Tarihi Köşk ve Binalarda konaklanırken aynı zamanda konaklayan misafirlerimiz kulübün plaj imkanlarından da faydalanabilecektir. Kozmopolit Gala'mız da eşsiz adalar manzarası ve keyifli atmosferi eşliğinde yine Anadolu Kulübü'nün deniz kenarında yapılacaktır. Otel konaklamalarında kahvaltı dahildir.</p>
          </div>

          {/* Items */}
          <div className="grid gap-10">

            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
             
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-4 lg:col-span-4" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <h3 className="h3 mb-3" style={{marginTop:25}}>Cuma Programı </h3>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2 mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>12:00 - 14:00 Otele Giriş</span>
                    </li>
                    <li className="flex items-center mb-2 mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>14:00 - 19:00 Serbest Zaman</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>19:00 - 01:00 Kozmopolit Merhaba Partisi</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-4 lg:col-span-5" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <h3 className="h3 mb-3" style={{marginTop:25}}>Cumartesi Programı</h3>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2 mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>08:00 - 10:00 Kahvaltı</span>
                    </li>
                    <li className="flex items-center mb-2 mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>12:00 - 14:00 Otele Giriş</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>10:00 - 12:00 BüyükAda Gezi Turu</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>12:00 - 13:00 Serbest Zaman</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>13:00 - 17:00 Kozmopolit Tekne Partisi - Adalar ve Boğaz Turu</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>17:00 - 19:30 Serbest Zaman</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>19:30 - 23:00 Kozmopolit Gala</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>23:00 - 02:00 Kozmopolit Gala After</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-4 lg:col-span-3" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <h3 className="h3 mb-3" style={{marginTop:25}}>Pazar Programı</h3>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2 mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>08:00 - 10:00 Kahvaltı</span>
                    </li>
                    <li className="flex items-center mb-2 mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>12:00 Otelden Çıkış</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
