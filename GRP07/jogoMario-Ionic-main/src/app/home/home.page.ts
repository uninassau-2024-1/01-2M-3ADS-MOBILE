import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor() {}  

  ngOnInit(): void {
    const mario = document.querySelector('.mario') as HTMLImageElement;
    const pipe = document.querySelector('.pipe') as HTMLImageElement;

    const jump = () => {
      mario.classList.add('jump');

      setTimeout(() => {
        mario.classList.remove('jump');
      }, 500);
    }

    const loop = setInterval(() => {
      const pipePosition = pipe.offsetLeft;
      const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
      console.log(pipePosition)

      if (pipePosition < 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${pipePosition}px`;
        
        mario.src = "https://raw.githubusercontent.com/nickdiegao/assets-mario/main/game-over.png";
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);
      }
    }, 10);

    document.addEventListener('keydown', jump);
  }
}
