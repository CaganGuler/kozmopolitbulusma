import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ModalVideo from '@/components/modal-video'
import Alara from '@/public/images/alara.jpeg'
import Logo from '@/public/images/footer-logo.png'

// components/PhoneIcon.js

const PhoneIcon = ({ width = 24, height = 24, color = 'white' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
  <path fill="#0f0" d="M13,42h22c3.866,0,7-3.134,7-7V13c0-3.866-3.134-7-7-7H13c-3.866,0-7,3.134-7,7v22	C6,38.866,9.134,42,13,42z"></path><path fill="#fff" d="M35.45,31.041l-4.612-3.051c-0.563-0.341-1.267-0.347-1.836-0.017c0,0,0,0-1.978,1.153	c-0.265,0.154-0.52,0.183-0.726,0.145c-0.262-0.048-0.442-0.191-0.454-0.201c-1.087-0.797-2.357-1.852-3.711-3.205	c-1.353-1.353-2.408-2.623-3.205-3.711c-0.009-0.013-0.153-0.193-0.201-0.454c-0.037-0.206-0.009-0.46,0.145-0.726	c1.153-1.978,1.153-1.978,1.153-1.978c0.331-0.569,0.324-1.274-0.017-1.836l-3.051-4.612c-0.378-0.571-1.151-0.722-1.714-0.332	c0,0-1.445,0.989-1.922,1.325c-0.764,0.538-1.01,1.356-1.011,2.496c-0.002,1.604,1.38,6.629,7.201,12.45l0,0l0,0l0,0l0,0	c5.822,5.822,10.846,7.203,12.45,7.201c1.14-0.001,1.958-0.248,2.496-1.011c0.336-0.477,1.325-1.922,1.325-1.922	C36.172,32.192,36.022,31.419,35.45,31.041z"></path>
  </svg>
);

const MailIcon = ({ width = 24, height = 24, color = 'white' }) => (
  <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z" fill="#DDDDDD"/>
  </svg>
);
export default function Footer() {
  return (
    <footer>
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center pb-4 md:pb-4">
        <h1 className="h3 mb-4" data-aos="fade-up">Sorularınız İçin</h1>
        </div>
        
          {/* Top area: Blocks */}
          <div className="">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            {/* 1st block */}
            <div className="max-w-3xl mx-auto text-center pb-4 md:pb-4">
            
              <Image style={{"marginLeft":"auto", marginRight:"auto", marginBottom:20}} src={Alara} width={180} height={180} alt={"Photo"} />
              <div className="text-gray-100">Alara Georgia Nicole Koçhisarlı</div>
              <div className="text-gray-400">2420. Bölge Rotaract Temsilciliği</div>
              <div className="text-gray-400">2024-2025 Dönemi</div>
              <div className="text-gray-400">Bölge Organizasyonlarından Sorumlu BRT Yardımcısı</div>
              <div style={{display:"flex", justifyContent:"center"}}>
              <MailIcon/>
              <a href='mailto:bos@rotaract2420.com'>bos@rotaract2420.com</a>
              </div>
              <div style={{display:"flex", justifyContent:"center"}}>
              <PhoneIcon/>
              <a href="tel:05313205515" > 0531 320 55 15</a>  
              </div>           
            </div>
            </div>


            {/* 2nd, 3rd and 4th blocks */}
           

          </div>

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">

            {/* Social links */}
            <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
              <li className="ml-4">
                <a  target="_blank" href="https://instagram.com/kozmopolitbulusma" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Instagram">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20.145" cy="11.892" r="1" />
                    <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                    <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
                  </svg>
                </a>
              </li>
            </ul>

            {/* Copyrights note */}
            <div className="text-gray-400 text-sm mr-4">&copy; Rotaract 2420. Bölge </div>
            <Image style={{"marginLeft":"auto", marginRight:"auto"}} src={Logo} width={400} height={350} alt={"Photo"} />

          </div>

        </div>
      </div>
    </footer>
  )
}
