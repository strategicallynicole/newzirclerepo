<template>
  <z-canvas :views="$options.components"></z-canvas>
</template>
<script>
export default {
  components: {
    one: () => import("./views/one"),
    growth: () => import("./views/growth"),
    context: () => import("./views/context"),
    vision: () => import("./views/vision"),
    mission: () => import("./views/mission"),
    history: () => import("./views/history"),
    constraints: () => import("./views/constraints"),
    roots: () => import("./views/roots"),
    roadblocks: () => import("./views/roadblocks"),
    industry: () => import("./views/industry"),
    research: () => import("./views/research"),
    buyers: () => import("./views/buyers"),
    personas: () => import("./views/personas"),
    market: () => import("./views/market"),
    brand: () => import("./views/brand"),
    action: () => import("./views/action"),
    techstack: () => import("./views/techstack"),
    growth: () => import("./views/growth"),
  },
  mounted() {
    this.$zircle.setView("one");
  },
};
</script>
<style>
.z-canvas {
  background-color: transparent !important;
  position: relative !important;
  height: 700px !important;
  width: 100%;
  top: 0%;
  left: 0%;
}
.z-view {
  border: 1px solid white;
  color: white;
  font-size: 0.9em;
  line-height: 20px;
  font-family: "Montserrat";
}
.z-content {
  width: 90%;
  height: 98%;
  line-height: 1em;
  font-size: 1em;
  font-weight: 500;
}
.z-outer-circle {
  border-style: transparent;
  opacity: 1;
}

.z-outer-circle {
  border: 0px !important;
}

.z-canvas {
  background-color: transparent !important;
  position: relative !important;
  height: 700px !important;
  width: 100%;
  top: 0%;
  left: 0%;
}
.z-view {
  border: 1px solid white;
  color: white;
  font-size: 0.9em;
  line-height: 20px;
  font-family: "Montserrat";
}
.z-content {
  width: 98%;
  height: 98%;
  line-height: 1em;
  font-size: 1em;
}
.z-outer-circle {
  border-width: 0px !important;
  border-style: transparent;
  opacity: 0;
}
.z-content.maincontent {
  padding: 20px;
}

.maincontent {
  border: solid 6px transparent !important;
  opacity: 1 !important;
  display: flex;
  align-items: center;
  margin: auto;

  border: 5px;
  border-radius: 100%;
  background: linear-gradient(
    70deg,
    #6633ff 10.59%,
    #3366ff 48.36%,
    #0099ff 85%
  ) !important;
}
.maincontent::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1 !important;
  top: 0;
  bottom: 0;
  border-radius: inherit; /* !importanté */
  background: linear-gradient(90deg, #292929 2.11%, #000000 104.85%);
}
.z-spot {
  border: solid 1px white !important;
  background: linear-gradient(90deg, #292929 2.11%, #000000 104.85%) !important;
}

#app hh {
  animation-name: spin;
  animation-duration: 5000s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  /* transform: rotate(3deg); */
  /* transform: rotate(0.3rad);/ */
  /* transform: rotate(3grad); */
  /* transform: rotate(.03turn);  */
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.pyramid {
  position: absolute;
  right: 0;
  top: 0;
  width: 400px;
  z-index: -20;
}
@media only screen and (max-width: 600px) {
  .pyramid {
    display: hidden;
    width: 0px;
    height: 0px;
  }
}
:root {
  --animate-duration: 3000ms;
  --animate-delay: 1s;
}
</style>
