import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import {Bus} from'./components/bus/bus';
import { DetailBus } from './components/detail-bus/detail-bus';
import { PassengerInformation } from './components/passenger-information/passenger-information';
import { Activity } from './components/activity/activity';
import { Blog } from './components/blog/blog';
import { BlogDetail } from './components/blog-detail/blog-detail';
import { Transportaion } from './components/transportaion/transportaion';
import { CusBooking } from './components/cus-booking/cus-booking';
import { Netional } from './components/netional/netional';
import { Rival } from './components/rival/rival';
import { Royal } from './components/royal/royal';
import { Contact } from './components/contact/contact';

export const routes: Routes = [
    {path:"", title:'Bus-Booking',component:Home},
    {path:"about", title:'About',component:About},
     {path:"contact", title:'Contact Us',component:Contact},
    {path:"bus", title:'Bus',component:Bus},
   { path: 'detail-bus/:id', component: DetailBus },
    {path:"pssenger-imformation", title:'PassengerInformation',component:PassengerInformation},
    {path:"activity", title:'Central Market | The Cambodian Market',component:Activity},
    {path:"national", title:'Central Market | The Cambodian Market',component:Netional},
    {path:"rival", title:'Central Market | The Cambodian Market',component:Rival},
    {path:"royal", title:'Central Market | The Cambodian Market',component:Royal},
    {path:"blog", title:'Blog',component:Blog},
    {path:"blog-detail", title:'Blog-Detail',component:BlogDetail},
    {path:"trasportation", title:'Transportation',component:Transportaion},
    {path:"cus-booking", title:'Customer-Booking',component:CusBooking},
    // {path:'bus1',component: Bus,data: { title: 'Korola Bus', img: 'assets/image/b5.png'}},
    //  {path:'bus2',component: Bus,data: { title: 'Roral Bus', img: 'assets/image/b9.jpg'}},
    //   {path:'bus3',component: Bus,data: { title: 'BMW Bus', img:'assets/image/b6.png'}},
    //    {path:'bus4',component: Bus,data: { title: 'Spacial Bus', img: 'assets/image/b7.png' }},
    //     {path:'bus5',component: Bus,data: { title: 'Family Bus', img:'assets/image/b8.jpg' }},
];
