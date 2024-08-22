'use client'

import { useState } from 'react'

export default function Banner() {
  const [bannerOpen, setBannerOpen] = useState<boolean>(true)

  return (
    <>
      {bannerOpen && (
        <div className="fixed bottom-0 right-0  md:bottom-8 md:right-8 md:w-auto z-50">
            <div className="max-w-3xl mx-auto text-center pb-6 md:pb-6" data-aos="fade-up" data-aos-delay="400">
                <a className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0" href="https://forms.gle/FEKLEBiXathNaLe28" target='_blank'>Kayıt Ol</a>
              </div>

        </div>
      )}
    </>
  )
}
