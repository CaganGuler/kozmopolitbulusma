export const metadata = {
  title: 'Kozmopolit 3 Bölge Buluşması',
  description: '13-14-15 Eylül\"de İstanbul\"da !',
}

import Baslik from '@/components/baslik'
import Paketler from '@/components/paketler'
import Otel from '@/components/otel'

export default function Home() {
  return (
    <>
      <Baslik />
      <Paketler />
      <Otel />
    </>
  )
}
