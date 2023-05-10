import "./Preloader.scss";
const Preloader = () => {
  return (
    <>
      <div className="loader">
        <div className="blinder-container">
          <div className="blinder"></div>
          <div className="blinder"></div>
          <div className="blinder"></div>
          <div className="blinder"></div>
          <div className="blinder"></div>
        </div>
        {/* <!--  start svg --> */}
        <svg viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                type="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>

          <mask
            id="mask0_1_32"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="86"
            height="86"
          >
            <circle cx="43" cy="43.1161" r="42.4299" fill="white" />
          </mask>

          <g mask="url(#mask0_1_32)" filter="url(#goo)">
            <circle
              cx="43"
              cy="43.1161"
              r="40.4299"
              stroke="white"
              strokeWidth="4"
            />
            <circle cx="43" cy="-25.3367" r="45.8453" fill="white" />
            <path
              className="drip-loader"
              d="M43.9141 -15.413C43.5625 -16.2057 42.4375 -16.2057 42.0859 -15.413L34.2829 2.17821C33.4045 3.67557 32.9009 5.41937 32.9009 7.28079C32.9009 12.8584 37.4224 17.3799 43 17.3799C48.5776 17.3799 53.0991 12.8584 53.0991 7.28079C53.0991 5.41928 52.5954 3.6754 51.717 2.17799L43.9141 -15.413Z"
              fill="white"
            />
          </g>
        </svg>
        {/* <!--  end svg --> */}
      </div>

      <section>
        <div className="mask">
          <h1>So snazzy.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
            distinctio mollitia quidem quis cupiditate recusandae, tenetur modi
            accusantium cum adipisci.
          </p>
        </div>
      </section>

      <img
        src="src/assets/product_2.jpeg"
        style={{ display: "none" }}
        alt="pic"
      />
    </>
    // <!-- = end = -->
  );
};

export default Preloader;
