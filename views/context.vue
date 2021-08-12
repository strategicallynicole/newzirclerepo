<template>    <z-view style="border: 1px #0099EE solid;  background-image: linear-gradient(90deg, #292929 2.11%, #000000 104.85%); font-size: 32px; color: white;">
     Context


    <z-spot
        slot="extension"
        color="#8F6AFA"
        :angle="250"
        size="large"
        to-view="roadblocks" style="border: 1px solid white;  font-size: 16px; color: white;">
         Roadblocks
        </z-spot>
    <z-spot
        slot="extension"
        color="black"
        :angle="200"
        size="large"
        to-view="roots" style="border: 1px solid white; font-size: 16px;   color: white;">
         Roots
        </z-spot>


     <z-spot
        slot="extension"
        color="black"
        :angle="150"
        size="large"
        to-view="constraints" style="border: 1px solid white;   font-size: 16px;  color: white;">
         Constraints
        </z-spot>


    <z-spot
        slot="extension"
        color="black"
        :angle="100"
        size="large"
        to-view="history" style="border: 1px solid white;  font-size: 16px;  color: white;">
         History
        </z-spot>

        <z-spot
        slot="extension"
        color="black"
        :angle="0"
        size="large"
        to-view="vision" style="border: 1px solid white; font-size: 16px;  color: white;">
         Vision
        </z-spot>

         <z-spot
        slot="extension"
        color="black"
        :angle="50"
        size="large"
        to-view="mission" style="border: 1px solid white; font-size: 16px;  color: white;">
    Mission
        </z-spot>
    </z-view></template>