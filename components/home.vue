<template>
  <z-view>
    <div>
      <p>Fr. 19.04.2019</p>
      <p>11:44</p>
      </br>
      <h1>MY.HOME</h1>
      
    </div>
    <z-spot slot="extension" :angle="-175" to-view="eg">EG</z-spot>
    <z-spot slot="extension" :angle="-130" to-view="og">OG</z-spot>
    <z-spot slot="extension" :angle="-85" to-view="dg">DG</z-spot>
    <z-spot slot="extension" :angle="45" to-view="foo">foo</z-spot>

          <z-spot
        :angle="150"
        :distance="120"
        size="s"
        label="Settings"
        to-view="settings">
        <i class="fas fa-sliders-h"></i>
      </z-spot>
  </z-view>
</template>