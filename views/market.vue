 <template> <z-view style="border: 1px #0099EE solid;  background-image: linear-gradient(90deg, #292929 2.11%, #000000 104.85%); font-size: 32px; color: white;">
     Market


    <z-spot
        slot="extension"
        color="#8F6AFA"
        :angle="225"
        size="large"
        to-view="research" style="border: 1px solid white;  font-size: 16px; color: white;">
         Research Surveys
        </z-spot>
    <z-spot
        slot="extension"
        color="black"
        :angle="180"
        size="large"
        to-view="buyers" style="border: 1px solid white; font-size: 16px;   color: white;">
         Buyer Base
        </z-spot>


     <z-spot
        slot="extension"
        color="black"
        :angle="135"
        size="large"
        to-view="personas" style="border: 1px solid white;   font-size: 16px;  color: white;">
         Personas
        </z-spot>


    <z-spot
        slot="extension"
        color="black"
        :angle="90"
        size="large"
        to-view="industry" style="border: 1px solid white;  font-size: 16px;  color: white;">
         Industry Analysis
        </z-spot>
        </z-view></template>