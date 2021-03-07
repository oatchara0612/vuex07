<template>
  <div class="home">
    <div class="row">
      <HelloWorld
        class="col-3"
        v-for="(item, index) in Menu"
        :key="index"
        :img="item.img"
        :name="item.name"
        :price="item.price"
        @menuorder="Order"
      />
    </div>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  computed: {
    ...mapGetters(["Menu", "Order"]),
  },
};
</script>
