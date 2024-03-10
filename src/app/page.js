'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

export default function Home() {
  return (
    <main className=" min-h-screen flex-col">
      <header className='header'>
        <div className='flex absolute'>
          <Image src="/images/netflixlogo.png" width={25} height={25} className='justify-start mx-4 my-3'></Image>
        </div>
        <div className='flex justify-center '>
          <Link href="/" className=' text-red-600 font-bold text-3xl align-middle my-5'>
            <Image src='/images/Netflix-Logo.wine_.png' width={120} height={120}></Image>
          </Link>
        </div>
        <div className='flex justify-end absolute right-8 top-6'>
          <input type='search' placeholder='Digite o nome do filme' className=' text-center'></input>
        </div>
      </header>
      <div className='Container'>
        <Splide>
          <SplideSlide className=''>
            <img src="/images/fastandfurious10.jpg" alt="Image 1" className='item1' />
            <div className='filme'>
              <div className='quadrado'></div>
              <h1 className='titulo'><span id='velozes'>Velozes e Furiosos</span></h1>
              <p className='descricao'><span id='furiosos'>Dom Toretto e sua família precisam lidar com o adversário mais letal que
                 já enfrentaram. Alimentada pela vingança, uma ameaça terrível emerge das sombras
                  do passado para destruir o mundo de Dom e todos que ele ama.</span></p>
                  <button className='assistir'>Assistir</button>
            </div>
          </SplideSlide>
          <SplideSlide className='item1'>
            <img src="/images/onepiece.jpg" alt="Image 2" className='item1' />
            <div className='filme'>
              <div className='quadrado'></div>
              <h1 className='titulo'><span id='velozes'>One Piece</span></h1>
              <p className='descricao'><span id='furiosos'>Adaptada da série de manga homônima, One Piece é um anime
               que conta a história do jovem Monkey D. Luffy, que ganhou poderes de borracha depois de comer uma fruta do diabo.
                O enredo mostra as aventuras de Luffy e seu grupo.</span></p>
                  <button className='assistir'>Assistir</button>
                </div>
          </SplideSlide>
          <SplideSlide className='item1'>
            <img src="/images/justiceiro.jpg" alt="Image 3" className='item1' />
            <div className='filme'>
              <div className='quadrado'></div>
              <h1 className='titulo'><span id='velozes'>Punisher</span></h1>
              <p className='descricao'><span id='furiosos'>O Justiceiro é um personagem fictício, um anti-herói que
               aparece nas histórias em quadrinhos publicadas pela Marvel Comics. Criado pelo escritor Gerry Conway
                e pelos artistas Ross Andru e John Romita, apareceu pela primeira vez em The Amazing Spider-Man #129.</span></p>
                  <button className='assistir'>Assistir</button>
              </div>
          </SplideSlide>
        </Splide>
      </div>
      <div className='segunda-parte'>
        <div className='imagens'>
          <img src='/images/agente.jpg' id='capa'></img>
          <img src='/images/sociedade.jpeg' id='capa'></img>
          <img src='/images/TheKiller.jpg' id='capa'></img>
          <img src='/images/wandinha.jpg' id='capa'></img>
        </div>
        <div className='imagens'>
          <img src='/images/thewitcher.jpg' id='capa2'></img>
          <img src='/images/you.jpg' id='capa2'></img>
          <img src='/images/umbrella.jpeg' id='capa2'></img>
          <img src='/images/bom.jpg' id='capa2'></img>
        </div>
      </div>
    </main>
  );
}
