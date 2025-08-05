// js
import '../js/click.js';
import '../js/tabs.js';
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';


// css
import 'swiper/css';
import 'swiper/css/pagination';
import '../scss/style.scss';


const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
    modules: [Pagination],  
    pagination: {
        el: '.swiper-pagination',
  },
});

