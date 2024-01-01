const Left = ({ width, height, color }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 159 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.4815 6.96439C12.2325 2.36239 4.47652 2.8934 1.99352 7.3744C-0.489478 11.8544 1.94952 17.9374 6.34252 20.5714C12.7275 24.3984 24.4645 23.2534 27.9255 15.8324C28.8905 13.7634 28.9005 11.2274 26.0235 11.1834C24.6415 11.1624 23.5095 12.3914 23.1015 13.7124C22.4705 15.7564 23.1845 18.0784 24.6475 19.6404C29.8845 25.2324 41.1985 21.8774 47.4335 20.2434C56.3795 17.8984 64.8975 14.2314 73.5795 11.1014C86.2575 6.53042 100.165 3.0944 113.096 6.8924"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M65.7556 20.4514C79.9556 11.5074 97.7036 8.37937 114.106 11.9314C120.1 13.2294 126.079 15.3914 132.186 14.8264C129.802 13.8314 127.552 11.1274 127.354 8.55137C127.149 5.87437 129.069 3.08737 131.374 1.71037C133.679 0.333366 137.145 0.992366 138.351 3.39137C139.557 5.78937 137.448 9.27037 134.79 8.89137"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M141.863 15.9103C147.264 13.4863 152.666 11.0613 158.067 8.63733C156.847 11.5893 156.231 14.7893 156.269 17.9823C154.164 17.0183 151.718 17.3053 149.442 17.7313C143.092 18.9193 130.768 22.7423 122.259 18.6423C131.531 19.5813 137.515 17.8623 141.863 15.9103Z"
        fill={color}
      />
    </svg>
  );
};

export default Left;