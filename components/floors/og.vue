<template>
  <z-view>
    <div>Obergeschoss</div>
    <div slot="extension">
      <z-spot
        v-for="(device, index) in rooms"
        :angle="-150 + (240 / (rooms.length - 1) * index)"
        :distance="100"
        :to-view="device.view"
        :label="device.name"
        :key="'dev_' + index"
        size="m"
      >
        <i :class="device.icon"></i>
      </z-spot>
    </div>
  </z-view>
</template>

<script>
export default {
  data() {
    return {
      rooms: [
        { name: "Wohnen", view: "wohnen", icon: "fas fa-book" },
        { name: "Essen", view: "eg", icon: "fas fa-book" },
        { name: "Küche", view: "eg", icon: "fas fa-book" },
        { name: "Kammer", view: "eg", icon: "fas fa-book" },
        { name: "Gäste", view: "eg", icon: "fas fa-book" },
        { name: "WC", view: "eg", icon: "fas fa-book" },
        { name: "Das Zimmer", view: "eg", icon: "fas fa-book" }
      ]
    };
  }
};
</script>
