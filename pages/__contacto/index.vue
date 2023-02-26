<template>
  <div
    id="contactenos"
    class="relative w-full lg:py-20 py-10 px-12"
  >
    <div class="relative z-10 text-center py-10 md:py-16">
      <div class="w-24 h-2 bg-green-500 mb-4 mx-auto shadow-md"></div>
      <h1
        class="text-green-500 uppercase text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading tracking-wider font-bold mb-6"
        style="text-shadow: 1px 1px 1px green;"
      >
      Contáctanos
      </h1>
      <p
        class="text-white mb-10 text-base md:text-lg font-heading tracking-wider font-base max-w-screen-md mx-auto"
        style="text-shadow: 1px 1px 1px green;"
      >
      Comunícate con nosotros, estaremos encantados de atenderte
      </p>
    </div>
    <img
      src="/images/image67.jpg"
      class="w-full h-full absolute inset-0 object-cover object-bottom"
    />
    <div class="w-full h-full absolute inset-0 object-cover lg:object-bottom bg-gradient-to-t from-transparent via-amber-900 to-transparent opacity-50">
    </div>
  </div>
  <!-- Contact -->
  <div class="container mx-auto px-6 my-12 text-base">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
      <div>
        <b>Información de contacto: </b>
        <a
          href="https://api.whatsapp.com/send/?phone=59175805037&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center my-2"
          ><svg
            class="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            ></path>
          </svg>
          +591 75805037</a
        >
        <a href="mailto:gerencia@bioarcoiris.org" class="flex items-center my-2"
          ><svg
            class="w-4 h-4 mt-2 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            ></path>
          </svg>
          gerencia@bioarcoiris.org</a
        >
        <b>Dirección: </b>
        <a class="flex items-start my-2"
          ><svg
            class="w-6 h-6 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            ></path>
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            ></path>
          </svg>
          Av. Juan Bautista de la Sagarnaga, Coroico.
          <br />
          LA PAZ - BOLIVIA</a
        >
      </div>
      <div>
        <form
          name="bioarcoiris"
          action="/gracias"
          method="post"
          netlify
          netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="loungeboral" />
          <div>
            <label class="block text-base tracking-tight text-gray-600">Nombre</label>
            <input
              name="name"
              type="text"
              placeholder="Nombre"
              required
              class="mt-2 w-full border-none text-sm p-4 bg-white text-gray-700"
            />
          </div>
          <div class="mt-6">
            <label class="block text-base tracking-tight text-gray-600"
              >Correo electronico</label
            >
            <input
              name="email"
              type="email"
              placeholder="ejemplo@gmail.com"
              required
              class="mt-2 w-full border-none text-sm p-4 bg-white text-gray-700"
            />
          </div>
          <div class="mt-6">
            <label class="block text-base tracking-tight text-gray-600">Mensaje</label>
            <textarea
              name="message"
              placeholder="Escriba su mensaje"
              required
              class="mt-2 w-full border-none text-sm p-4 bg-white text-gray-700"
            ></textarea>
          </div>
          <button
            class="inline-block bg-green-600 hover:bg-green-700 text-white uppercase text-sm tracking-widest font-heading px-8 py-4 mt-6"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
