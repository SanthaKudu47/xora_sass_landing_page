import { ReactNode } from "react";

function IconWrapper({
  width = 18,
  height = 18,
  children,
}: {
  width?: number;
  height?: number;
  children: ReactNode;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
}
function XPath() {
  return (
    <path
      className="social_icon"
      d="M18.9014 0.75H22.5816L14.5415 9.96308L24 22.5H16.5941L10.7935 14.8964L4.15631 22.5H0.473926L9.07356 12.6456L0 0.75H7.59394L12.8372 7.69996L18.9014 0.75ZM17.6098 20.2915H19.649L6.48589 2.84246H4.29759L17.6098 20.2915Z"
      fill="#EAEDFF"
    />
  );
}
function DiscordPath() {
  return (
    <path
      className="social_icon"
      d="M20.3303 4.5075C18.7767 3.80325 17.1156 3.29143 15.3789 3C15.1656 3.37361 14.9164 3.87612 14.7446 4.27586C12.8985 4.00687 11.0693 4.00687 9.25716 4.27586C9.08539 3.87612 8.83055 3.37361 8.61536 3C6.87681 3.29143 5.21376 3.80513 3.66019 4.51123C0.526643 9.09902 -0.322811 13.5729 0.101917 17.9832C2.18025 19.4869 4.19441 20.4004 6.17457 20.9981C6.66349 20.3462 7.09953 19.6532 7.47518 18.9228C6.75975 18.6594 6.07453 18.3344 5.42707 17.9571C5.59884 17.8338 5.76686 17.7049 5.92918 17.5722C9.87819 19.3618 14.1689 19.3618 18.0707 17.5722C18.235 17.7049 18.403 17.8338 18.5728 17.9571C17.9235 18.3362 17.2364 18.6613 16.521 18.9247C16.8966 19.6532 17.3308 20.3481 17.8216 21C19.8036 20.4022 21.8197 19.4888 23.898 17.9832C24.3964 12.8705 23.0467 8.43775 20.3303 4.5075ZM8.01318 15.2709C6.82772 15.2709 5.85555 14.1986 5.85555 12.8929C5.85555 11.5872 6.80696 10.5131 8.01318 10.5131C9.21942 10.5131 10.1916 11.5853 10.1708 12.8929C10.1727 14.1986 9.21942 15.2709 8.01318 15.2709ZM15.9867 15.2709C14.8013 15.2709 13.8291 14.1986 13.8291 12.8929C13.8291 11.5872 14.7805 10.5131 15.9867 10.5131C17.193 10.5131 18.1651 11.5853 18.1444 12.8929C18.1444 14.1986 17.193 15.2709 15.9867 15.2709Z"
      fill="#EAEDFF"
    />
  );
}
function InstaPath() {
  return (
    <>
      <path
        className="social_icon"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 5.83594C8.59688 5.83594 5.83594 8.59688 5.83594 12C5.83594 15.4031 8.59688 18.1641 12 18.1641C15.4031 18.1641 18.1641 15.4031 18.1641 12C18.1641 8.59688 15.4031 5.83594 12 5.83594ZM12 15.9984C9.79219 15.9984 8.00156 14.2078 8.00156 12C8.00156 9.79219 9.79219 8.00156 12 8.00156C14.2078 8.00156 15.9984 9.79219 15.9984 12C15.9984 14.2078 14.2078 15.9984 12 15.9984Z"
        fill="#EAEDFF"
      />
      <path
        className="social_icon"
        d="M18.4078 7.0312C19.2 7.0312 19.8469 6.38902 19.8469 5.59214C19.8469 4.79995 19.2 4.15308 18.4078 4.15308C17.6156 4.15308 16.9688 4.79526 16.9688 5.59214C16.9688 6.38433 17.6109 7.0312 18.4078 7.0312Z"
        fill="#EAEDFF"
      />
      <path
        className="social_icon"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 0C8.74219 0 8.33438 0.0140625 7.05469 0.0703125C5.77969 0.126563 4.90313 0.332812 4.14375 0.628125C3.35156 0.9375 2.68125 1.34531 2.01563 2.01562C1.34531 2.68125 0.9375 3.35156 0.628125 4.13906C0.332812 4.90313 0.126563 5.775 0.0703125 7.05C0.0140625 8.33437 0 8.74219 0 12C0 15.2578 0.0140625 15.6656 0.0703125 16.9453C0.126563 18.2203 0.332812 19.0969 0.628125 19.8563C0.9375 20.6484 1.34531 21.3188 2.01563 21.9844C2.68125 22.65 3.35156 23.0625 4.13906 23.3672C4.90313 23.6625 5.775 23.8687 7.05 23.925C8.32969 23.9812 8.7375 23.9953 11.9953 23.9953C15.2531 23.9953 15.6609 23.9812 16.9406 23.925C18.2156 23.8687 19.0922 23.6625 19.8516 23.3672C20.6391 23.0625 21.3094 22.65 21.975 21.9844C22.6406 21.3188 23.0531 20.6484 23.3578 19.8609C23.6531 19.0969 23.8594 18.225 23.9156 16.95C23.9719 15.6703 23.9859 15.2625 23.9859 12.0047C23.9859 8.74688 23.9719 8.33906 23.9156 7.05938C23.8594 5.78438 23.6531 4.90781 23.3578 4.14844C23.0625 3.35156 22.6547 2.68125 21.9844 2.01562C21.3188 1.35 20.6484 0.9375 19.8609 0.632812C19.0969 0.3375 18.225 0.13125 16.95 0.075C15.6656 0.0140625 15.2578 0 12 0ZM12 2.16094C15.2063 2.16094 15.5859 2.175 16.8469 2.23125C18.0188 2.28281 18.6516 2.47969 19.0734 2.64375C19.6313 2.85938 20.0344 3.12188 20.4516 3.53906C20.8734 3.96094 21.1313 4.35938 21.3469 4.91719C21.5109 5.33906 21.7078 5.97656 21.7594 7.14375C21.8156 8.40937 21.8297 8.78906 21.8297 11.9906C21.8297 15.1969 21.8156 15.5766 21.7594 16.8375C21.7078 18.0094 21.5109 18.6422 21.3469 19.0641C21.1313 19.6219 20.8687 20.025 20.4516 20.4422C20.0297 20.8641 19.6313 21.1219 19.0734 21.3375C18.6516 21.5016 18.0141 21.6984 16.8469 21.75C15.5813 21.8062 15.2016 21.8203 12 21.8203C8.79375 21.8203 8.41406 21.8062 7.15313 21.75C5.98125 21.6984 5.34844 21.5016 4.92656 21.3375C4.36875 21.1219 3.96563 20.8594 3.54844 20.4422C3.12656 20.0203 2.86875 19.6219 2.65313 19.0641C2.48906 18.6422 2.29219 18.0047 2.24063 16.8375C2.18438 15.5719 2.17031 15.1922 2.17031 11.9906C2.17031 8.78438 2.18438 8.40469 2.24063 7.14375C2.29219 5.97187 2.48906 5.33906 2.65313 4.91719C2.86875 4.35938 3.13125 3.95625 3.54844 3.53906C3.97031 3.11719 4.36875 2.85938 4.92656 2.64375C5.34844 2.47969 5.98594 2.28281 7.15313 2.23125C8.41406 2.175 8.79375 2.16094 12 2.16094Z"
        fill="#EAEDFF"
      />
    </>
  );
}
function ThreadsPath() {
  return (
    <path
      className="social_icon"
      d="M17.6922 11.1235C17.5888 11.074 17.4838 11.0263 17.3774 10.9806C17.1922 7.56728 15.3271 5.61312 12.1953 5.59312C12.1811 5.59304 12.167 5.59304 12.1528 5.59304C10.2796 5.59304 8.7217 6.39261 7.76281 7.84759L9.48519 9.0291C10.2015 7.94229 11.3257 7.7106 12.1536 7.7106C12.1632 7.7106 12.1728 7.7106 12.1823 7.71069C13.2134 7.71726 13.9916 8.01708 14.4952 8.60175C14.8617 9.02741 15.1068 9.61563 15.2282 10.358C14.3139 10.2026 13.3252 10.1548 12.2682 10.2154C9.29065 10.3869 7.37645 12.1235 7.50501 14.5365C7.57025 15.7605 8.18002 16.8135 9.22194 17.5014C10.1029 18.0829 11.2374 18.3673 12.4166 18.3029C13.9738 18.2175 15.1954 17.6234 16.0477 16.537C16.6949 15.712 17.1043 14.6429 17.2851 13.2957C18.0272 13.7436 18.5772 14.333 18.8809 15.0415C19.3974 16.2459 19.4276 18.225 17.8127 19.8385C16.3978 21.252 14.6971 21.8635 12.1267 21.8824C9.27559 21.8612 7.11929 20.9469 5.71732 19.1646C4.4045 17.4958 3.72602 15.0852 3.70071 12C3.72602 8.91473 4.4045 6.5042 5.71732 4.83534C7.11929 3.05311 9.27555 2.13875 12.1267 2.11756C14.9986 2.13891 17.1924 3.05767 18.6481 4.8485C19.3618 5.7267 19.8999 6.8311 20.2547 8.11879L22.2731 7.58028C21.8431 5.99528 21.1664 4.62946 20.2457 3.49675C18.3796 1.20084 15.6503 0.0243935 12.1337 0H12.1197C8.61026 0.0243088 5.91157 1.20522 4.0986 3.50991C2.4853 5.5608 1.65311 8.41446 1.62515 11.9916L1.62506 12L1.62515 12.0084C1.65311 15.5855 2.4853 18.4393 4.0986 20.4901C5.91157 22.7948 8.61026 23.9757 12.1197 24H12.1337C15.2538 23.9784 17.4531 23.1615 19.2648 21.3514C21.6352 18.9832 21.5638 16.0149 20.7826 14.1926C20.2221 12.8859 19.1534 11.8245 17.6922 11.1235ZM12.3051 16.1884C11.0001 16.2619 9.64436 15.6761 9.57751 14.4215C9.52796 13.4913 10.2395 12.4532 12.3852 12.3296C12.6309 12.3154 12.8721 12.3085 13.1089 12.3085C13.8883 12.3085 14.6174 12.3842 15.2803 12.5291C15.0331 15.6169 13.5828 16.1182 12.3051 16.1884Z"
      fill="#EAEDFF"
    />
  );
}

function XIcon({ size = 18 }: { size?: number }) {
  return (
    <IconWrapper height={size} width={size}>
      <XPath />
    </IconWrapper>
  );
}

function ThreadsIcon({ size = 18 }: { size?: number }) {
  return (
    <IconWrapper height={size} width={size}>
      <ThreadsPath />
    </IconWrapper>
  );
}

function InstaIcon({ size = 18 }: { size?: number }) {
  return (
    <IconWrapper height={size} width={size}>
      <InstaPath />
    </IconWrapper>
  );
}

function DiscordIcon({ size = 18 }: { size?: number }) {
  return (
    <IconWrapper height={size} width={size}>
      <DiscordPath />
    </IconWrapper>
  );
}

function LogoImg({
  color = "#2EF2FF",
  cls = "",
}: {
  color?: string;
  cls?: string;
}) {
  return (
    <>
      <svg
        className={cls}
        width="100%"
        height="100%"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M39.2731 19.8709C40.2351 18.8873 40.2445 17.2957 39.2942 16.3004L24.8403 1.16302C23.8028 0.0763926 21.9986 0.827389 21.9986 2.34592V16.5862C21.9986 17.239 22.2444 17.8667 22.685 18.3391L30.3423 26.5492C30.9843 27.2375 32.0546 27.2506 32.7124 26.5781L39.2731 19.8709ZM10.2222 25.8981C9.25887 26.9282 7.65543 26.9465 6.66982 25.9387L0.727677 19.8631C-0.234785 18.879 -0.24362 17.2863 0.707862 16.2911L15.1618 1.17319C16.1996 0.0876663 18.0024 0.838988 18.0024 2.35703V16.5599C18.0024 17.214 17.7557 17.8429 17.3136 18.3156L10.2222 25.8981ZM12.4712 28.5201C11.2745 29.7435 11.2745 31.7271 12.4712 32.9506L17.8377 38.4369C19.0344 39.6603 20.9747 39.6603 22.1714 38.4369L27.461 33.0291C28.6578 31.8056 28.6578 29.8221 27.461 28.5986L22.0946 23.1123C20.8979 21.8888 18.9576 21.8888 17.7609 23.1123L12.4712 28.5201Z"
          fill={color}
        />
      </svg>
    </>
  );
}

export { XIcon, ThreadsIcon, InstaIcon, DiscordIcon, LogoImg };
