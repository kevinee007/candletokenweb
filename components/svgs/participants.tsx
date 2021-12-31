/** @jsx jsx */
import { jsx, SxStyleProp, Box } from "theme-ui";
import { keyframes } from "@emotion/core";
import { useMemo } from "react";

const float = keyframes({
  "0%": {
    transform: "translateZ(0)",
  },
  "65%": {
    transform: "translate3d(0,10px,0)",
  },
  "100%": {
    transform: "translateZ(0)",
  },
});

type Props = {
  pushSx?: SxStyleProp;
};

type ImageProps = {
  src: string;
  alt?: string;
  pushSx?: SxStyleProp;
};

const getRandomDelay = () => Math.random() * 1.5 + "s";
const getRandomDuration = (min = 4, max = 5) => {
  const candidate = Math.random() * max;
  if (candidate < min) return min + "s";
  return candidate + "s";
};

const FloatingImage = ({ src, alt, pushSx }: ImageProps) => {
  const animationDelay = useMemo(() => getRandomDelay(), []);
  const animationDuration = useMemo(() => getRandomDuration(), []);
  return (
    <img
      src={src}
      alt={alt}
      sx={{
        animation: `${float} ease-in-out infinite`,
        animationDelay,
        animationDuration,
        position: "absolute",
        boxShadow: "magical",
        borderRadius: "lg",
        bg: "background",
        width: "86px",
        height: "86px",
        objectFit: "cover",
        ...pushSx,
      }}
    />
  );
};

const images: ImageProps[] = [
  {
    src: "/images/avatars/avatar-female-1.png",
    alt: "floating avatar",
    pushSx: {
      left: 39,
      top: 42,
      bg: "primary",
    },
  },
  {
    src: "/images/avatars/avatar-female-2.png",
    alt: "floating avatar",
    pushSx: {
      right: 12,
      bottom: 120,
      display: ["none", null, "block"],
    },
  },
  {
    src: "/images/avatars/avatar-male-1.png",
    alt: "floating avatar",
    pushSx: {
      right: 87,
      top: 12,
      bg: "primary",
      display: ["none", null, "block"],
    },
  },
  {
    src: "/images/avatars/avatar-male-2.png",
    alt: "floating avatar",
    pushSx: {
      top: 112,
      left: ["unset", null, 174],
      right: [0, null, "unset"],
    },
  },
  {
    src: "/images/avatars/avatar-male-3.png",
    alt: "floating avatar",
    pushSx: {
      left: 122,
      bottom: 0,
      display: ["none", "block"],
    },
  },
  {
    src: "/images/avatars/avatar-male-4.png",
    alt: "floating avatar",
    pushSx: {
      right: 57,
      bottom: -31,
      bg: "primary",
      display: ["none", null, "block"],
    },
  },
];

const ParticipantsSvg = ({ pushSx }: Props) => (
  <Box
    sx={{
      position: "relative",
      width: "100%",
      ...pushSx,
    }}>
    {images.map((i) => (
      <FloatingImage key={`participants-svg-floating-image-${i.src}`} {...i} />
    ))}
    <svg viewBox="0 0 551 373" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.334 18.2188C16.542 18.2188 17.7725 16.3799 17.7725 13.0713C17.7725 9.75586 16.542 7.91699 14.334 7.91699C12.126 7.91699 10.8955 9.75586 10.8955 13.0713C10.8955 16.3799 12.126 18.2188 14.334 18.2188ZM12.2969 13.0713C12.2969 10.4941 13.001 9.13379 14.334 9.13379C15.2227 9.13379 15.8311 9.74219 16.1387 10.9111L12.3242 13.9189C12.3037 13.6523 12.2969 13.3721 12.2969 13.0713ZM14.334 17.0088C13.4453 17.0088 12.8369 16.4004 12.5293 15.2383L16.3369 12.21C16.3574 12.4834 16.3643 12.7637 16.3643 13.0713C16.3643 15.6416 15.6602 17.0088 14.334 17.0088ZM26.7344 18V16.79H24.0342V8.13574H22.6396L19.7822 10.0088V11.4443L22.5234 9.66016H22.6328V16.79H19.8027V18H26.7344Z"
        fill="#999999"
      />
      <path
        d="M14.334 47.2188C16.542 47.2188 17.7725 45.3799 17.7725 42.0713C17.7725 38.7559 16.542 36.917 14.334 36.917C12.126 36.917 10.8955 38.7559 10.8955 42.0713C10.8955 45.3799 12.126 47.2188 14.334 47.2188ZM12.2969 42.0713C12.2969 39.4941 13.001 38.1338 14.334 38.1338C15.2227 38.1338 15.8311 38.7422 16.1387 39.9111L12.3242 42.9189C12.3037 42.6523 12.2969 42.3721 12.2969 42.0713ZM14.334 46.0088C13.4453 46.0088 12.8369 45.4004 12.5293 44.2383L16.3369 41.21C16.3574 41.4834 16.3643 41.7637 16.3643 42.0713C16.3643 44.6416 15.6602 46.0088 14.334 46.0088ZM19.7207 39.9658V40.0068H21.0674V39.9658C21.0674 38.8652 21.792 38.1338 22.8857 38.1338C23.9727 38.1338 24.6836 38.79 24.6836 39.8018C24.6836 40.5469 24.3691 41.0664 23.0908 42.4541L19.7891 46.0225V47H26.2422V45.7559H21.7852V45.6396L23.9863 43.2949C25.5928 41.6133 26.085 40.7656 26.085 39.7266C26.085 38.0654 24.8066 36.9307 22.9268 36.9307C21.0469 36.9307 19.7207 38.1885 19.7207 39.9658Z"
        fill="#999999"
      />
      <path
        d="M13.334 79.2188C15.542 79.2188 16.7725 77.3799 16.7725 74.0713C16.7725 70.7559 15.542 68.917 13.334 68.917C11.126 68.917 9.89551 70.7559 9.89551 74.0713C9.89551 77.3799 11.126 79.2188 13.334 79.2188ZM11.2969 74.0713C11.2969 71.4941 12.001 70.1338 13.334 70.1338C14.2227 70.1338 14.8311 70.7422 15.1387 71.9111L11.3242 74.9189C11.3037 74.6523 11.2969 74.3721 11.2969 74.0713ZM13.334 78.0088C12.4453 78.0088 11.8369 77.4004 11.5293 76.2383L15.3369 73.21C15.3574 73.4834 15.3643 73.7637 15.3643 74.0713C15.3643 76.6416 14.6602 78.0088 13.334 78.0088ZM20.7783 74.4951H21.9199C23.2188 74.4951 24.0459 75.1787 24.0459 76.252C24.0459 77.3047 23.2393 77.9678 21.9541 77.9678C20.7715 77.9678 19.9443 77.3252 19.8486 76.3203H18.5156C18.6045 78.0635 19.9854 79.2051 21.9951 79.2051C24.0322 79.2051 25.4746 78.0088 25.4746 76.3066C25.4746 74.9736 24.6885 74.0645 23.3691 73.8936V73.7842C24.4355 73.5381 25.0713 72.6836 25.0713 71.5078C25.0713 69.9902 23.7861 68.9307 21.9473 68.9307C20.0469 68.9307 18.8096 70.0107 18.707 71.7607H20.0332C20.1221 70.749 20.8262 70.127 21.8994 70.127C22.9727 70.127 23.6836 70.749 23.6836 71.7129C23.6836 72.6836 22.9453 73.3604 21.8789 73.3604H20.7783V74.4951Z"
        fill="#999999"
      />
      <path
        d="M13.334 115.219C15.542 115.219 16.7725 113.38 16.7725 110.071C16.7725 106.756 15.542 104.917 13.334 104.917C11.126 104.917 9.89551 106.756 9.89551 110.071C9.89551 113.38 11.126 115.219 13.334 115.219ZM11.2969 110.071C11.2969 107.494 12.001 106.134 13.334 106.134C14.2227 106.134 14.8311 106.742 15.1387 107.911L11.3242 110.919C11.3037 110.652 11.2969 110.372 11.2969 110.071ZM13.334 114.009C12.4453 114.009 11.8369 113.4 11.5293 112.238L15.3369 109.21C15.3574 109.483 15.3643 109.764 15.3643 110.071C15.3643 112.642 14.6602 114.009 13.334 114.009ZM23.0205 115H24.3398V112.977H25.7891V111.78H24.333V109.053H23.0547V111.78H20.0605V111.685L23.2461 105.136H21.8037L18.5566 111.842V112.977H23.0205V115Z"
        fill="#999999"
      />
      <path
        d="M13.334 259.219C15.542 259.219 16.7725 257.38 16.7725 254.071C16.7725 250.756 15.542 248.917 13.334 248.917C11.126 248.917 9.89551 250.756 9.89551 254.071C9.89551 257.38 11.126 259.219 13.334 259.219ZM11.2969 254.071C11.2969 251.494 12.001 250.134 13.334 250.134C14.2227 250.134 14.8311 250.742 15.1387 251.911L11.3242 254.919C11.3037 254.652 11.2969 254.372 11.2969 254.071ZM13.334 258.009C12.4453 258.009 11.8369 257.4 11.5293 256.238L15.3369 253.21C15.3574 253.483 15.3643 253.764 15.3643 254.071C15.3643 256.642 14.6602 258.009 13.334 258.009ZM22.0088 259.219C24.1348 259.219 25.6045 258.05 25.6045 256.354C25.6045 255.124 24.7773 254.105 23.5537 253.846V253.736C24.5791 253.456 25.208 252.622 25.208 251.556C25.208 250.011 23.8818 248.917 22.0088 248.917C20.1357 248.917 18.8096 250.011 18.8096 251.556C18.8096 252.615 19.4453 253.463 20.457 253.736V253.846C19.2129 254.14 18.4131 255.138 18.4131 256.354C18.4131 258.05 19.876 259.219 22.0088 259.219ZM22.0088 253.285C20.9219 253.285 20.2041 252.643 20.2041 251.679C20.2041 250.722 20.9219 250.079 22.0088 250.079C23.0889 250.079 23.8135 250.722 23.8135 251.679C23.8135 252.643 23.0889 253.285 22.0088 253.285ZM22.0088 258.05C20.7373 258.05 19.8623 257.312 19.8623 256.238C19.8623 255.165 20.7373 254.427 22.0088 254.427C23.2803 254.427 24.1553 255.165 24.1553 256.238C24.1553 257.312 23.2803 258.05 22.0088 258.05Z"
        fill="#999999"
      />
      <path
        d="M13.334 151.219C15.542 151.219 16.7725 149.38 16.7725 146.071C16.7725 142.756 15.542 140.917 13.334 140.917C11.126 140.917 9.89551 142.756 9.89551 146.071C9.89551 149.38 11.126 151.219 13.334 151.219ZM11.2969 146.071C11.2969 143.494 12.001 142.134 13.334 142.134C14.2227 142.134 14.8311 142.742 15.1387 143.911L11.3242 146.919C11.3037 146.652 11.2969 146.372 11.2969 146.071ZM13.334 150.009C12.4453 150.009 11.8369 149.4 11.5293 148.238L15.3369 145.21C15.3574 145.483 15.3643 145.764 15.3643 146.071C15.3643 148.642 14.6602 150.009 13.334 150.009ZM21.9062 151.198C23.9707 151.198 25.3584 149.831 25.3584 147.801C25.3584 145.866 24.0869 144.52 22.2617 144.52C21.3799 144.52 20.6621 144.834 20.1973 145.429H20.0811L20.3408 142.373H24.791V141.136H19.2129L18.7275 146.741H20.0811C20.457 146.071 21.1338 145.702 21.9678 145.702C23.1709 145.702 23.9844 146.563 23.9844 147.835C23.9844 149.106 23.1777 149.954 21.9678 149.954C20.8809 149.954 20.0605 149.291 19.9443 148.327H18.5771C18.6592 150.036 20.0059 151.198 21.9062 151.198Z"
        fill="#999999"
      />
      <path
        d="M13.334 295.219C15.542 295.219 16.7725 293.38 16.7725 290.071C16.7725 286.756 15.542 284.917 13.334 284.917C11.126 284.917 9.89551 286.756 9.89551 290.071C9.89551 293.38 11.126 295.219 13.334 295.219ZM11.2969 290.071C11.2969 287.494 12.001 286.134 13.334 286.134C14.2227 286.134 14.8311 286.742 15.1387 287.911L11.3242 290.919C11.3037 290.652 11.2969 290.372 11.2969 290.071ZM13.334 294.009C12.4453 294.009 11.8369 293.4 11.5293 292.238L15.3369 289.21C15.3574 289.483 15.3643 289.764 15.3643 290.071C15.3643 292.642 14.6602 294.009 13.334 294.009ZM18.5088 288.335C18.5088 290.153 19.7871 291.473 21.5508 291.473C22.1729 291.473 22.8359 291.206 23.1504 290.81L23.2666 290.857C23.1982 290.98 23.1299 291.09 22.8975 291.411L20.2725 295H21.8926C22.0156 294.843 23.9023 292.225 24.0664 291.979C25.0371 290.57 25.4404 289.504 25.4404 288.369C25.4404 286.353 24.0049 284.931 21.9746 284.931C19.9717 284.931 18.5088 286.373 18.5088 288.335ZM21.9746 286.154C23.1572 286.154 24.0527 287.07 24.0527 288.273C24.0527 289.477 23.1572 290.393 21.9746 290.393C20.792 290.393 19.8965 289.477 19.8965 288.273C19.8965 287.07 20.792 286.154 21.9746 286.154Z"
        fill="#999999"
      />
      <path
        d="M13.334 185.219C15.542 185.219 16.7725 183.38 16.7725 180.071C16.7725 176.756 15.542 174.917 13.334 174.917C11.126 174.917 9.89551 176.756 9.89551 180.071C9.89551 183.38 11.126 185.219 13.334 185.219ZM11.2969 180.071C11.2969 177.494 12.001 176.134 13.334 176.134C14.2227 176.134 14.8311 176.742 15.1387 177.911L11.3242 180.919C11.3037 180.652 11.2969 180.372 11.2969 180.071ZM13.334 184.009C12.4453 184.009 11.8369 183.4 11.5293 182.238L15.3369 179.21C15.3574 179.483 15.3643 179.764 15.3643 180.071C15.3643 182.642 14.6602 184.009 13.334 184.009ZM25.4951 181.794C25.4951 179.989 24.2031 178.656 22.4463 178.656C21.8242 178.656 21.1406 178.937 20.8262 179.319L20.7168 179.278C20.7783 179.155 20.7783 179.142 21.0791 178.718L23.7041 175.136H22.084C21.9541 175.3 20.0674 177.918 19.9102 178.157C18.9531 179.531 18.5566 180.598 18.5566 181.767C18.5566 183.783 19.999 185.205 22.0293 185.205C24.0322 185.205 25.4951 183.763 25.4951 181.794ZM22.0225 183.975C20.8398 183.975 19.9443 183.065 19.9443 181.862C19.9443 180.652 20.8398 179.743 22.0225 179.743C23.2051 179.743 24.1006 180.652 24.1006 181.862C24.1006 183.065 23.2051 183.975 22.0225 183.975Z"
        fill="#999999"
      />
      <path
        d="M17.0801 329V327.79H14.3799V319.136H12.9854L10.1279 321.009V322.444L12.8691 320.66H12.9785V327.79H10.1484V329H17.0801ZM21.9883 329.219C24.1963 329.219 25.4268 327.38 25.4268 324.071C25.4268 320.756 24.1963 318.917 21.9883 318.917C19.7803 318.917 18.5498 320.756 18.5498 324.071C18.5498 327.38 19.7803 329.219 21.9883 329.219ZM19.9512 324.071C19.9512 321.494 20.6553 320.134 21.9883 320.134C22.877 320.134 23.4854 320.742 23.793 321.911L19.9785 324.919C19.958 324.652 19.9512 324.372 19.9512 324.071ZM21.9883 328.009C21.0996 328.009 20.4912 327.4 20.1836 326.238L23.9912 323.21C24.0117 323.483 24.0186 323.764 24.0186 324.071C24.0186 326.642 23.3145 328.009 21.9883 328.009Z"
        fill="#999999"
      />
      <path
        d="M14.334 221.219C16.542 221.219 17.7725 219.38 17.7725 216.071C17.7725 212.756 16.542 210.917 14.334 210.917C12.126 210.917 10.8955 212.756 10.8955 216.071C10.8955 219.38 12.126 221.219 14.334 221.219ZM12.2969 216.071C12.2969 213.494 13.001 212.134 14.334 212.134C15.2227 212.134 15.8311 212.742 16.1387 213.911L12.3242 216.919C12.3037 216.652 12.2969 216.372 12.2969 216.071ZM14.334 220.009C13.4453 220.009 12.8369 219.4 12.5293 218.238L16.3369 215.21C16.3574 215.483 16.3643 215.764 16.3643 216.071C16.3643 218.642 15.6602 220.009 14.334 220.009ZM20.5342 221H22.0381L26.3926 212.387V211.136H19.6797V212.359H24.9434V212.455L20.5342 221Z"
        fill="#999999"
      />
      <path
        d="M18.0801 365V363.79H15.3799V355.136H13.9854L11.1279 357.009V358.444L13.8691 356.66H13.9785V363.79H11.1484V365H18.0801ZM26.7344 365V363.79H24.0342V355.136H22.6396L19.7822 357.009V358.444L22.5234 356.66H22.6328V363.79H19.8027V365H26.7344Z"
        fill="#999999"
      />
      <rect x="49" y="6" width="149" height="7" rx="3.5" fill="#EAEAEA" />
      <rect x="49" y="107" width="149" height="7" rx="3.5" fill="#EAEAEA" />
      <rect x="49" y="251" width="149" height="7" rx="3.5" fill="#EAEAEA" />
      <rect x="49" y="39" width="58" height="7" rx="3.5" fill="#EAEAEA" />
      <rect x="49" y="212" width="58" height="7" rx="3.5" fill="#EAEAEA" />
      <rect x="49" y="356" width="58" height="7" rx="3.5" fill="#EAEAEA" />
      <rect x="209" y="6" width="266" height="7" rx="3.5" fill="#EAEAEA" />
      <rect x="209" y="107" width="266" height="7" rx="3.5" fill="#C4C4C4" />
      <rect x="209" y="251" width="266" height="7" rx="3.5" fill="#C4C4C4" />
      <rect x="113" y="39" width="99" height="7" rx="3.5" fill="#EAEAEA" />
      <rect x="113" y="212" width="99" height="7" rx="3.5" fill="#EAEAEA" />
      <rect x="113" y="356" width="99" height="7" rx="3.5" fill="#EAEAEA" />
      <rect x="113" y="139" width="99" height="7" rx="3.5" fill="#EAEAEA" />
      <rect x="113" y="283" width="99" height="7" rx="3.5" fill="#EAEAEA" />
      <rect x="113" y="177" width="99" height="7" rx="3.5" fill="#EAEAEA" />
      <rect x="113" y="321" width="99" height="7" rx="3.5" fill="#EAEAEA" />
      <rect x="97" y="74" width="177" height="7" rx="3.5" fill="#EAEAEA" />
      <rect x="218" y="39" width="278" height="7" rx="3.5" fill="#C4C4C4" />
      <rect x="218" y="139" width="278" height="7" rx="3.5" fill="#C4C4C4" />
      <rect x="218" y="283" width="278" height="7" rx="3.5" fill="#C4C4C4" />
      <rect x="218" y="177" width="278" height="7" rx="3.5" fill="#C4C4C4" />
      <rect x="218" y="321" width="278" height="7" rx="3.5" fill="#C4C4C4" />
      <rect x="294" y="74" width="186" height="7" rx="3.5" fill="#C4C4C4" />
      <rect
        y="3"
        width="551"
        height="369"
        fill="url(#participants-svg-paint0_linear)"
      />
      <defs>
        <linearGradient
          id="participants-svg-paint0_linear"
          x1="275.5"
          y1="3"
          x2="275.5"
          y2="372"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="white" stopOpacity="0" />
          <stop offset="1" stopColor="white" stopOpacity="0.953125" />
        </linearGradient>
      </defs>
    </svg>
  </Box>
);

export default ParticipantsSvg;
