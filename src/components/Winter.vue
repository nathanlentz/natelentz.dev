<template>
  <svg width="200" height="200" viewBox="0 0 200 200">
    <defs>
      <g id="tree">
        <polygon points="-10,0 10,0 0 -50" fill="#38755b" />
        <line x2="0" y2="10" stroke="#778074" stroke-width="2" />
      </g>
      <circle id="big" cx="0" cy="0" r="5" fill="white" />
      <circle id="small" cx="0" cy="0" r="3" fill="white" />
    </defs>

    <circle cx="100" cy="100" r="100" fill="#5DDCFA" />
    <mask
      id="mask0"
      mask-type="alpha"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="200"
      height="200"
    >
      <circle cx="100" cy="100" r="100" fill="#5DDCFA" />
    </mask>
    <g mask="url(#mask0)">
      <path
        d="M284 311.333C284 413.322 201.322 496 99.3334 496C-2.65523 496 -85.3333 413.322 -85.3333 311.333C-85.3333 209.345 -2.65523 126.667 99.3334 126.667C201.322 126.667 284 209.345 284 311.333Z"
        fill="white"
      />
    </g>

    <use href="#tree" x="20" y="75" transform="scale(2)" />
    <use href="#tree" x="70" y="110" transform="scale(1.2)" />
    <use href="#tree" x="120" y="150" />
    <use href="#tree" x="110" y="95" transform="scale(1.5)" />

    <use href="#big" x="100" y="10" class="flake fast" />
    <use href="#big" x="150" y="80" class="flake fast opaque" />
    <use href="#big" x="130" y="60" class="flake fast" />
    <use href="#big" x="150" y="80" class="flake fast opaque" />
    <use href="#big" x="130" y="150" class="flake slow" />
    <use href="#big" x="30" y="20" class="flake slow opaque" />
    <use href="#big" x="130" y="150" class="flake slow" />
    <use href="#big" x="190" y="20" class="flake slow opaque" />
    <use href="#small" x="100" y="50" class="flake slow" />
    <use href="#small" x="50" y="40" class="flake slow opaque" />
    <use href="#small" x="130" y="170" class="flake slow" />
    <use href="#small" x="100" y="20" class="flake slow opaque" />
  </svg>
</template>

<script>
export default {
  name: "Winter",
};
</script>

<style>
.flake {
  animation-duration: inherit;
  animation-name: snowing;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@keyframes snowing {
  from {
    transform: translate(0, -150px);
  }
  to {
    transform: translate(0, 175px);
  }
}

.flake.opaque {
  opacity: 0.7;
}

.flake.slow {
  animation-duration: 7s;
}

.flake.fast {
  animation-duration: 10s;
}

@media screen and (max-width: 749px) {
  svg {
    width: 100px;
    height: 100px;
  }
}
</style>