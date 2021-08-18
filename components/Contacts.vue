<template>
  <section class="contacts" id="contacts">
    <div class="contacts__container container">
      <div class="contacts__block contacts-block">
        <div class="contacts-block__contacts">
          <div class="contacts-block__phones-block">
            <h2 class="contacts-block__title title">{{ $t('home.contacts.title') }}</h2>
            <div class="contacts-block__phones">
              <p>email: real-cyprus@mail.ru</p>
              <p>{{ $t('home.contacts.town[0]') }}: +7 747 595 5000</p>
              <p>{{ $t('home.contacts.town[1]') }}: +7 747 595 5000</p>
              <p>{{ $t('home.contacts.town[2]') }}: +7 747 595 5000</p>
            </div>
          </div>
          <form class="contacts-block__form">
            <input type="text" placeholder="Name" name="name">
            <input type="email" placeholder="E-mail" name="email">
            <input type="text" placeholder="Theme" name="theme">
            <textarea name="" id="" cols="30" rows="10" placeholder="Add a message..."></textarea>
            <button class="contacts-block__submit">{{ $t('home.contacts.button') }}</button>
          </form>
          </div>
          <div class="contacts__img">
            <img src="@/assets/img/interior.jpg" alt="">
          </div>
        </div>
        <div class="footer-bottom">
          <div class="container">
            <div class="row d-flex">
              <p class="col-lg-12 footer-text text-center">Copyright &copy;2021 All rights reserved | This template is made with &thinsp;<i class="fa fa-heart" aria-hidden="true"></i>&thinsp; by &thinsp;<a>Gliese b studio</a></p>
            </div>
          </div>
        </div>
      </div>
  </section>
</template>