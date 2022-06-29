import { useNavigate } from "react-router-dom";

export default function NavTitle({ title, backButton }) {
  const navigate = useNavigate();
  return (
    <div className="navTitle">
      <span>
        <svg
          width="42"
          height="42"
          viewBox="0 0 42 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.5575 34.7112C16.8821 35.4731 18.4546 35.679 19.9306 35.2837C21.4067 34.8885 22.6659 33.9243 23.4325 32.6025L30.7475 19.95C30.9546 19.5915 31.089 19.1958 31.143 18.7854C31.197 18.375 31.1696 17.9579 31.0623 17.5581C30.955 17.1583 30.77 16.7835 30.5178 16.4553C30.2656 16.127 29.9512 15.8517 29.5925 15.645L27.405 14.385L15.5575 34.7112ZM15.2688 34.545C14.0653 33.8479 13.1876 32.7018 12.8283 31.3582C12.469 30.0147 12.6576 28.5834 13.3525 27.3787L18.8913 17.7537C19.3067 17.0306 19.4184 16.1722 19.2019 15.3669C18.9853 14.5615 18.4583 13.8749 17.7363 13.4575L13.7113 11.1387C13.3543 10.9304 12.9596 10.7947 12.55 10.7395C12.1403 10.6844 11.7238 10.7108 11.3245 10.8174C10.9251 10.9239 10.5508 11.1085 10.2231 11.3604C9.89535 11.6122 9.62072 11.9265 9.41501 12.285L4.92626 20.125C3.96167 21.8073 3.70276 23.8032 4.2062 25.6759C4.70963 27.5486 5.93441 29.1456 7.61251 30.1175L10.7275 31.92L15.2688 34.545Z"
            stroke="black"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.8988 12.425L17.1938 10.185C18.1691 8.49862 19.774 7.26841 21.6559 6.76471C23.5378 6.26102 25.5427 6.52504 27.23 7.49876L30.345 9.30126L34.8863 11.9263C33.6805 11.2321 32.2485 11.0449 30.9048 11.4058C29.5611 11.7668 28.4156 12.6463 27.72 13.8513L20.125 26.95C19.7077 27.672 19.021 28.1991 18.2156 28.4156C17.4103 28.6321 16.5519 28.5204 15.8288 28.105L13.6325 26.8363M35.175 12.0925C35.832 12.4697 36.4081 12.9729 36.8702 13.5731C37.3324 14.1734 37.6715 14.8589 37.8682 15.5905C38.0649 16.3221 38.1153 17.0853 38.0166 17.8364C37.9178 18.5875 37.6717 19.3117 37.2925 19.9675L32.13 28.875C31.711 29.5976 31.0228 30.1249 30.216 30.3413C29.4092 30.5578 28.5495 30.4458 27.825 30.03L25.6375 28.7613L35.175 12.0925Z"
            stroke="black"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
      <span className="font-big" style={{ flexGrow: 1, textAlign: "left" }}>
        {title}
      </span>
      {backButton ? <span onClick={() => navigate(-1)}>Indietro</span> : null}
    </div>
  );
}
