import * as React from "react";

function SvgComponent(props: any) {
  return (
    <svg
      style={{
        objectFit: "cover",
      }}
      baseProfile='full'
      viewBox='0 0 1440 821'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M0 0h1440v821H0z' />
      <path
        d='M0 821V0v574c273 62 546 124 786 124s447-62 654-124v247z'
        fill='#ED1D7F'
        className='prefix__transition-all prefix__duration-300 prefix__ease-in-out prefix__delay-150'
        style={{
          transformOrigin: "center center",
        }}
      />
      <path
        d='M0 821V0v862c288.5-85 577-170 817-170s431.5 85 623 170v-41z'
        fill='#d40e6b'
        className='prefix__transition-all prefix__duration-300 prefix__ease-in-out prefix__delay-150'
        style={{
          transformOrigin: "center center",
        }}
      />
      {/* <path
        d='M0 821V0v1293c237 20.5 474 41 714 41s483-20.5 726-41V821z'
        fill='current'
        className='prefix__transition-all prefix__duration-300 prefix__ease-in-out prefix__delay-150'
        style={{
          transformOrigin: "center center",
        }}
      /> */}
    </svg>
  );
}

export default SvgComponent;
