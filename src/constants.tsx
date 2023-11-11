import type { MenuProps } from "antd";
import Link from "next/link";

// export const BACKEND_URL = "https://backend.paxify.io";
export const BACKEND_URL = "http://localhost:8000";

// Dashboard sidebar constants like Name ,icons etc
type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

export const items: MenuItem[] = [
  getItem(
    "Home",
    "/dashboard/home",
    <Link href="home">
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_0_702)">
          <mask
            id="mask0_0_702"
            style={{ maskType: "luminance" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="21"
            height="20">
            <path d="M20.0001 0H0V20.0001H20.0001V0Z" fill="white" />
          </mask>
          <g mask="url(#mask0_0_702)">
            <path d="M16.6668 16.6668C16.6668 16.8878 16.579 17.0998 16.4228 17.2561C16.2665 17.4124 16.0545 17.5002 15.8335 17.5002H4.1668C3.94579 17.5002 3.73382 17.4124 3.57754 17.2561C3.42126 17.0998 3.33346 16.8878 3.33346 16.6668V9.16679H2.989C2.2273 9.16679 1.86483 8.2292 2.42844 7.71683L9.43932 1.34343C9.59275 1.20383 9.79272 1.12646 10.0001 1.12646C10.2076 1.12646 10.4075 1.20383 10.561 1.34343L17.5719 7.71683C18.1355 8.2292 17.773 9.16679 17.0113 9.16679H16.6668V16.6668Z" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_0_702">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </Link>
  ),

  getItem(
    "Content (stories)",
    "/dashboard/stories",
    <Link href="stories">
      <svg
        width="18"
        height="14"
        viewBox="0 0 18 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M14.8334 2.70826H9.8917C9.5417 2.70826 9.2167 2.53326 9.025 2.24159L8.35003 1.22492C7.92503 0.583252 7.20836 0.208252 6.44169 0.208252H3.16668C1.9 0.208252 0.875 1.23326 0.875 2.49993V11.6666C0.875 12.9333 1.9 13.9583 3.16668 13.9583H14.8334C16.1001 13.9583 17.1251 12.9333 17.1251 11.6666V4.99994C17.1251 3.73327 16.1001 2.70826 14.8334 2.70826ZM5.68335 8.9583C5.34168 8.9583 5.05835 8.675 5.05835 8.3333C5.05835 7.9916 5.33335 7.7083 5.68335 7.7083C6.03335 7.7083 6.30835 7.9916 6.30835 8.3333C6.30835 8.675 6.03335 8.9583 5.68335 8.9583ZM9.0167 8.9583C8.67503 8.9583 8.3917 8.675 8.3917 8.3333C8.3917 7.9916 8.6667 7.7083 9.0167 7.7083C9.3667 7.7083 9.6417 7.9916 9.6417 8.3333C9.6417 8.675 9.3667 8.9583 9.0167 8.9583ZM12.35 8.9583C12.0084 8.9583 11.725 8.675 11.725 8.3333C11.725 7.9916 12 7.7083 12.35 7.7083C12.7 7.7083 12.975 7.9916 12.975 8.3333C12.975 8.675 12.7 8.9583 12.35 8.9583Z" />
      </svg>
    </Link>
  ),

  getItem(
    "Audiences",
    "/dashboard/audiences",
    <Link href="audiences">
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_0_712)">
          <mask
            id="mask0_0_712"
            style={{ maskType: "luminance" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="20"
            height="21">
            <path d="M20 0.000244141H0V20.0002H20V0.000244141Z" fill="white" />
          </mask>
          <g mask="url(#mask0_0_712)">
            <path d="M10.0001 9.16699C11.1052 9.16699 12.165 9.60598 12.9464 10.3874C13.7278 11.1688 14.1667 12.2286 14.1667 13.3337V18.3337H5.83341V13.3337C5.83341 12.2286 6.2724 11.1688 7.0538 10.3874C7.8352 9.60598 8.89501 9.16699 10.0001 9.16699ZM4.40675 11.672C4.27413 12.1193 4.19579 12.581 4.17341 13.047L4.16675 13.3337V18.3337H1.66675V14.5837C1.66658 13.865 1.93177 13.1715 2.41144 12.6363C2.89112 12.1011 3.5515 11.7619 4.26591 11.6837L4.40675 11.672ZM15.5934 11.672C16.335 11.7172 17.0314 12.0436 17.5406 12.5847C18.0497 13.1258 18.3333 13.8407 18.3334 14.5837V18.3337H15.8334V13.3337C15.8334 12.7562 15.7501 12.1987 15.5934 11.672ZM4.58341 6.66699C5.13595 6.66699 5.66585 6.88649 6.05655 7.27719C6.44725 7.66789 6.66675 8.19779 6.66675 8.75033C6.66675 9.30286 6.44725 9.83276 6.05655 10.2235C5.66585 10.6142 5.13595 10.8337 4.58341 10.8337C4.03088 10.8337 3.50098 10.6142 3.11028 10.2235C2.71957 9.83276 2.50008 9.30286 2.50008 8.75033C2.50008 8.19779 2.71957 7.66789 3.11028 7.27719C3.50098 6.88649 4.03088 6.66699 4.58341 6.66699ZM15.4167 6.66699C15.9693 6.66699 16.4992 6.88649 16.8899 7.27719C17.2806 7.66789 17.5001 8.19779 17.5001 8.75033C17.5001 9.30286 17.2806 9.83276 16.8899 10.2235C16.4992 10.6142 15.9693 10.8337 15.4167 10.8337C14.8642 10.8337 14.3343 10.6142 13.9436 10.2235C13.5529 9.83276 13.3334 9.30286 13.3334 8.75033C13.3334 8.19779 13.5529 7.66789 13.9436 7.27719C14.3343 6.88649 14.8642 6.66699 15.4167 6.66699ZM10.0001 1.66699C10.8841 1.66699 11.732 2.01818 12.3571 2.6433C12.9822 3.26842 13.3334 4.11627 13.3334 5.00033C13.3334 5.88438 12.9822 6.73223 12.3571 7.35735C11.732 7.98247 10.8841 8.33366 10.0001 8.33366C9.11603 8.33366 8.26818 7.98247 7.64306 7.35735C7.01794 6.73223 6.66675 5.88438 6.66675 5.00033C6.66675 4.11627 7.01794 3.26842 7.64306 2.6433C8.26818 2.01818 9.11603 1.66699 10.0001 1.66699Z" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_0_712">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </Link>
  ),
  getItem(
    "Analytics",
    "/dashboard/analytics",
    <Link href="analytics">
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_0_719)">
          <path d="M4.16651 2.50024H3.33317C2.4127 2.50024 1.6665 3.24644 1.6665 4.16691V15.0003C1.6665 15.9207 2.4127 16.6669 3.33317 16.6669H4.16651C5.08699 16.6669 5.83318 15.9207 5.83318 15.0003V4.16691C5.83318 3.24644 5.08699 2.50024 4.16651 2.50024Z" />
          <path d="M10.4165 5.8335H9.58317C8.6627 5.8335 7.9165 6.57969 7.9165 7.50017V15.0002C7.9165 15.9207 8.6627 16.6669 9.58317 16.6669H10.4165C11.337 16.6669 12.0832 15.9207 12.0832 15.0002V7.50017C12.0832 6.57969 11.337 5.8335 10.4165 5.8335Z" />
          <path d="M16.6665 4.16699H15.8332C14.9127 4.16699 14.1665 4.91319 14.1665 5.83366V15.0003C14.1665 15.9208 14.9127 16.667 15.8332 16.667H16.6665C17.587 16.667 18.3332 15.9208 18.3332 15.0003V5.83366C18.3332 4.91319 17.587 4.16699 16.6665 4.16699Z" />
        </g>
        <defs>
          <clipPath id="clip0_0_719">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </Link>
  ),
  getItem(
    "Settings",
    "/dashboard/settings",
    <Link href="settings">
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_0_724)">
          <mask
            id="mask0_0_724"
            style={{ maskType: "luminance" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="21"
            height="21">
            <path
              d="M20.0001 0.000244141H0V20.0003H20.0001V0.000244141Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask0_0_724)">
            <path d="M7.23826 3.33373L9.41077 1.16123C9.56704 1.005 9.77897 0.917236 9.99994 0.917236C10.2209 0.917236 10.4328 1.005 10.5891 1.16123L12.7616 3.33373H15.8333C16.0543 3.33373 16.2663 3.42153 16.4226 3.57781C16.5788 3.73409 16.6666 3.94606 16.6666 4.16707V7.23875L18.8391 9.41126C18.9954 9.56753 19.0831 9.77946 19.0831 10.0004C19.0831 10.2214 18.9954 10.4333 18.8391 10.5896L16.6666 12.7621V15.8338C16.6666 16.0548 16.5788 16.2668 16.4226 16.423C16.2663 16.5793 16.0543 16.6671 15.8333 16.6671H12.7616L10.5891 18.8396C10.4328 18.9959 10.2209 19.0836 9.99994 19.0836C9.77897 19.0836 9.56704 18.9959 9.41077 18.8396L7.23826 16.6671H4.16658C3.94557 16.6671 3.73361 16.5793 3.57732 16.423C3.42104 16.2668 3.33325 16.0548 3.33325 15.8338V12.7621L1.16074 10.5896C1.00451 10.4333 0.916748 10.2214 0.916748 10.0004C0.916748 9.77946 1.00451 9.56753 1.16074 9.41126L3.33325 7.23875V4.16707C3.33325 3.94606 3.42104 3.73409 3.57732 3.57781C3.73361 3.42153 3.94557 3.33373 4.16658 3.33373H7.23826ZM9.99994 12.5004C10.663 12.5004 11.2989 12.237 11.7677 11.7682C12.2366 11.2994 12.4999 10.6635 12.4999 10.0004C12.4999 9.33738 12.2366 8.70149 11.7677 8.23265C11.2989 7.76381 10.663 7.50042 9.99994 7.50042C9.33689 7.50042 8.70101 7.76381 8.23216 8.23265C7.76332 8.70149 7.49993 9.33738 7.49993 10.0004C7.49993 10.6635 7.76332 11.2994 8.23216 11.7682C8.70101 12.237 9.33689 12.5004 9.99994 12.5004Z" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_0_724">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </Link>
  ),
  getItem(
    "Studio Creator",
    "/dashboard/studio_creator",
    <Link href="/dashboard/studio_creator">
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.5 1.5C17.3284 1.5 18 2.17157 18 3V17C18 17.8284 17.3284 18.5 16.5 18.5H3.5C2.67157 18.5 2 17.8284 2 17V4.58579L4.29289 2.29289C4.68342 1.90237 5.31658 1.90237 5.70711 2.29289L8 4.58579L10.2929 2.29289C10.6834 1.90237 11.3166 1.90237 11.7071 2.29289L14 4.58579L16 2.58579V17C16 17.4142 15.7893 17.7794 15.5 17.9706V2C15.5 1.72386 15.7239 1.5 16 1.5ZM14 19C13.4477 19 13 19.4477 13 20C13 20.5523 13.4477 21 14 21C14.5523 21 15 20.5523 15 20C15 19.4477 14.5523 19 14 19ZM8.5 12.5C9.32843 12.5 10 13.1716 10 14C10 14.8284 9.32843 15.5 8.5 15.5C7.67157 15.5 7 14.8284 7 14C7 13.1716 7.67157 12.5 8.5 12.5ZM4.5 9C5.32843 9 6 9.67157 6 10.5C6 11.3284 5.32843 12 4.5 12C3.67157 12 3 11.3284 3 10.5C3 9.67157 3.67157 9 4.5 9Z"
          fill="#"
        />
      </svg>
    </Link>
  ),

  getItem(
    "Exit Dashboard",
    "/",
    <Link href="/">
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_0_712)">
          <mask
            id="mask0_0_712"
            style={{ maskType: "luminance" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="20"
            height="21">
            <path d="M20 0.000244141H0V20.0002H20V0.000244141Z" fill="white" />
          </mask>
          <g mask="url(#mask0_0_712)">
            <path d="M10.0001 9.16699C11.1052 9.16699 12.165 9.60598 12.9464 10.3874C13.7278 11.1688 14.1667 12.2286 14.1667 13.3337V18.3337H5.83341V13.3337C5.83341 12.2286 6.2724 11.1688 7.0538 10.3874C7.8352 9.60598 8.89501 9.16699 10.0001 9.16699ZM4.40675 11.672C4.27413 12.1193 4.19579 12.581 4.17341 13.047L4.16675 13.3337V18.3337H1.66675V14.5837C1.66658 13.865 1.93177 13.1715 2.41144 12.6363C2.89112 12.1011 3.5515 11.7619 4.26591 11.6837L4.40675 11.672ZM15.5934 11.672C16.335 11.7172 17.0314 12.0436 17.5406 12.5847C18.0497 13.1258 18.3333 13.8407 18.3334 14.5837V18.3337H15.8334V13.3337C15.8334 12.7562 15.7501 12.1987 15.5934 11.672ZM4.58341 6.66699C5.13595 6.66699 5.66585 6.88649 6.05655 7.27719C6.44725 7.66789 6.66675 8.19779 6.66675 8.75033C6.66675 9.30286 6.44725 9.83276 6.05655 10.2235C5.66585 10.6142 5.13595 10.8337 4.58341 10.8337C4.03088 10.8337 3.50098 10.6142 3.11028 10.2235C2.71957 9.83276 2.50008 9.30286 2.50008 8.75033C2.50008 8.19779 2.71957 7.66789 3.11028 7.27719C3.50098 6.88649 4.03088 6.66699 4.58341 6.66699ZM15.4167 6.66699C15.9693 6.66699 16.4992 6.88649 16.8899 7.27719C17.2806 7.66789 17.5001 8.19779 17.5001 8.75033C17.5001 9.30286 17.2806 9.83276 16.8899 10.2235C16.4992 10.6142 15.9693 10.8337 15.4167 10.8337C14.8642 10.8337 14.3343 10.6142 13.9436 10.2235C13.5529 9.83276 13.3334 9.30286 13.3334 8.75033C13.3334 8.19779 13.5529 7.66789 13.9436 7.27719C14.3343 6.88649 14.8642 6.66699 15.4167 6.66699ZM10.0001 1.66699C10.8841 1.66699 11.732 2.01818 12.3571 2.6433C12.9822 3.26842 13.3334 4.11627 13.3334 5.00033C13.3334 5.88438 12.9822 6.73223 12.3571 7.35735C11.732 7.98247 10.8841 8.33366 10.0001 8.33366C9.11603 8.33366 8.26818 7.98247 7.64306 7.35735C7.01794 6.73223 6.66675 5.88438 6.66675 5.00033C6.66675 4.11627 7.01794 3.26842 7.64306 2.6433C8.26818 2.01818 9.11603 1.66699 10.0001 1.66699Z" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_0_712">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </Link>
  ),
];

// export const PERFORMANCE_TABS_ITEMS = [
//     {
//         text:"Reach",
//         number:"43",
//         label:"28.1%",
//         increase:true,
//         children:<div className='h-[300px] w-full'><AreaChart/></div>,
//         link:false
//     },
//     {
//         text:"Impression",
//         number:"120",
//         label:"12.4%",
//         increase:true,
//         children:<h1>Impression</h1>,
//         link:false
//     },
//     {
//         text:"Click",
//         number:"23",
//         label:"30.3%",
//         increase:false,
//         children:<h1>Click</h1>,
//         link:false
//     },
//     {
//         text:"Active Users",
//         number:"1.5k",
//         label:"17.4%",
//         increase:true,
//         children:<h1>Active Users</h1>,
//         link:false
//     },
//     {
//         text:"Event Tracker",
//         children:<h1>Event Tracker</h1>,
//         link:true
//     },
// ]
