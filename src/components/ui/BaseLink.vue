<template>

  <router-link to="">
    <slot></slot>
  </router-link>
</template>

<style>

a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: #3a0061;
  border: 1px solid #3a0061;
  color: white;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  display: inline-block;
}

a:hover,
a:active
 {
  background-color: #270041;
  border-color: #270041;
}



</style>