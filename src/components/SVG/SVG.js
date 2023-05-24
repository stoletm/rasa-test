export const ArrowDownIcon = (props) => {
    const defaultColor = '#797A80';

    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.25 10.75L12 14.25L8.75 10.75" stroke={props.color ? props.color : defaultColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}

export const ArrowLeftIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.25 8.75L9.75 12L13.25 15.25" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const ArrowRightIcon = (props) => {
    const defaultColor = '#760135';

    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.75 8.75L14.25 12L10.75 15.25" stroke={props.color ? props.color : defaultColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}

export const ArrowUpIcon = (props) => {
    const defaultColor = '#760135'
    
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.25 14.25L12 10.75L8.75 14.25" stroke={props.color ? props.color : defaultColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
};

export const BigArrowLeftIcon = () => (
    <svg width="43" height="44" viewBox="0 0 43 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.2" transform="rotate(180,20.7874,22.22905)">
            <path d="m 17.6842,27.9922 6.2064,-5.7631 -6.2064,-5.7632" stroke="#000000" strokeWidth="2.65991" strokeLinecap="round" strokeLinejoin="round" id="path2" />
        </g>
    </svg>
)

export const BigArrowRightIcon = () => (
    <svg width="43" height="44" viewBox="0 0 43 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.2">
        <path d="M17.6842 27.9922L23.8906 22.2291L17.6842 16.4659" stroke="black" strokeWidth="2.65991" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
    </svg>
);

export const LinkArrowIcon = () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.3125 5.0625L14.4375 9L10.3125 12.9375" stroke="#760135" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14.25 9H3.5625" stroke="#760135" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const LocationIcon = (props) => {
    const {color} = props;
    
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.2084 9.16658C15.2084 12.4999 10.0001 16.0416 10.0001 16.0416C10.0001 16.0416 4.79175 12.4999 4.79175 9.16658C4.79175 6.24992 7.23866 3.95825 10.0001 3.95825C12.7615 3.95825 15.2084 6.24992 15.2084 9.16658Z" stroke={color} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 11.0417C11.0355 11.0417 11.875 10.2023 11.875 9.16675C11.875 8.13121 11.0355 7.29175 10 7.29175C8.96447 7.29175 8.125 8.13121 8.125 9.16675C8.125 10.2023 8.96447 11.0417 10 11.0417Z" stroke={color} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}

export const LoginIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.75 8.75L13.25 12L9.75 15.25" stroke="#760135" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H9.75" stroke="#760135" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13 12H4.75" stroke="#760135" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>  
);

export const MenuIcon = () => (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.75 6.25C3.75 5.55964 4.30964 5 5 5H25C25.6904 5 26.25 5.55964 26.25 6.25C26.25 6.94036 25.6904 7.5 25 7.5H5C4.30964 7.5 3.75 6.94036 3.75 6.25ZM3.75 15C3.75 14.3096 4.30964 13.75 5 13.75H25C25.6904 13.75 26.25 14.3096 26.25 15C26.25 15.6904 25.6904 16.25 25 16.25H5C4.30964 16.25 3.75 15.6904 3.75 15ZM3.75 23.75C3.75 23.0596 4.30964 22.5 5 22.5H25C25.6904 22.5 26.25 23.0596 26.25 23.75C26.25 24.4404 25.6904 25 25 25H5C4.30964 25 3.75 24.4404 3.75 23.75Z" fill="black"/>
    </svg>
);

export const OKIcon = () => (
    <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="46" height="46" rx="9" fill="#E6E7EB"/>
        <path d="M21.8924 27.5984C20.1482 27.4164 18.5754 26.9869 17.2289 25.9337C17.0619 25.8027 16.8894 25.6764 16.7369 25.5301C16.1475 24.9641 16.0882 24.3158 16.5545 23.6477C16.9535 23.076 17.6232 22.9231 18.3193 23.2514C18.4541 23.315 18.5825 23.3944 18.7055 23.4797C21.2149 25.2039 24.6623 25.2515 27.1811 23.5572C27.4307 23.3659 27.6974 23.2099 28.0066 23.1302C28.6077 22.9759 29.1683 23.1967 29.4909 23.7227C29.8595 24.3233 29.8548 24.9096 29.4007 25.376C28.7041 26.0909 27.8664 26.6082 26.9356 26.9692C26.0554 27.3104 25.0914 27.4822 24.1372 27.5963C24.2812 27.753 24.3491 27.83 24.4391 27.9205C25.7347 29.2222 27.0359 30.5185 28.3273 31.8243C28.7673 32.2692 28.8592 32.8208 28.6169 33.3383C28.352 33.9039 27.7592 34.2759 27.1778 34.2361C26.8095 34.2107 26.5222 34.0273 26.267 33.7702C25.2893 32.7864 24.2932 31.8207 23.3353 30.8183C23.0565 30.5268 22.9225 30.5819 22.6764 30.835C21.6928 31.8476 20.6932 32.8446 19.6877 33.836C19.2362 34.2811 18.6989 34.3612 18.1753 34.107C17.6187 33.8372 17.2645 33.269 17.2919 32.698C17.3107 32.3118 17.5006 32.0168 17.7658 31.7521C19.0479 30.4719 20.3265 29.1883 21.6056 27.9059C21.6902 27.8206 21.7692 27.7301 21.8924 27.5984Z" fill="#7E7F85"/>
        <path d="M22.955 23.1387C19.8432 23.1281 17.2916 20.5485 17.3098 17.4318C17.3277 14.2807 19.8809 11.7413 23.0233 11.75C26.172 11.7585 28.6994 14.3344 28.6836 17.5182C28.6676 20.6286 26.0983 23.1496 22.955 23.1387ZM25.783 17.4393C25.7776 15.8918 24.5451 14.6598 23.0007 14.6584C21.4433 14.6568 20.1998 15.9111 20.2118 17.4728C20.2233 19.0144 21.4664 20.2376 23.0151 20.232C24.559 20.2266 25.7882 18.9866 25.783 17.4393Z" fill="#7E7F85"/>
    </svg>
);

export const PhoneIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.89286 4.75H6.06818C5.34017 4.75 4.75 5.34017 4.75 6.06818C4.75 13.3483 10.6517 19.25 17.9318 19.25C18.6598 19.25 19.25 18.6598 19.25 17.9318V15.1071L16.1429 13.0357L14.5317 14.6468C14.2519 14.9267 13.8337 15.0137 13.4821 14.8321C12.8858 14.524 11.9181 13.9452 10.9643 13.0357C9.98768 12.1045 9.41548 11.1011 9.12829 10.494C8.96734 10.1537 9.06052 9.76091 9.32669 9.49474L10.9643 7.85714L8.89286 4.75Z" stroke="#25B456" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>  
);

export const QuestionMarkIcon = () => (
    <svg width="45" height="38" viewBox="0 0 45 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.7821 32.5142C11.5744 31.499 7.5082 28.1197 6.28664 23.7917C5.40445 20.6661 5.40445 17.4132 6.28664 14.2876C7.5082 9.95958 11.5744 6.58025 16.7821 5.56505C20.543 4.83188 24.457 4.83187 28.2179 5.56504C33.4256 6.58025 37.4918 9.95958 38.7134 14.2876C39.5955 17.4132 39.5955 20.6661 38.7134 23.7917C37.4918 28.1197 33.4256 31.499 28.2179 32.5142C24.457 33.2474 20.543 33.2474 16.7821 32.5142Z" stroke="#C4C6CC" strokeWidth="2.8125"/>
        <ellipse cx="22.5" cy="24.4935" rx="1.875" ry="1.55827" fill="#760135"/>
        <path d="M18.75 15.9231V15.7774C18.75 13.7063 20.4289 12.0274 22.5 12.0274V12.0274H23.0681C24.8254 12.0274 26.25 13.452 26.25 15.2093V15.2093C26.25 16.1551 25.8292 17.0519 25.1018 17.6564L22.5 19.8188" stroke="#760135" strokeWidth="2.8125" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const TelegramIcon = () => (
    <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="46" height="46" rx="9" fill="#E6E7EB"/>
        <path d="M14.5569 22.6999L18.5802 24.174L20.1486 29.1324C20.2168 29.4675 20.626 29.5345 20.8987 29.3335L23.149 27.5243C23.3536 27.3233 23.6946 27.3233 23.9674 27.5243L27.9907 30.4056C28.2634 30.6066 28.6726 30.4726 28.7408 30.1375L31.7412 16.0663C31.8094 15.7313 31.4685 15.3962 31.1275 15.5303L14.5569 21.8288C14.1477 21.9628 14.1477 22.5659 14.5569 22.6999ZM19.944 23.4369L27.8543 18.6795C27.9907 18.6125 28.1271 18.8135 27.9907 18.8805L21.5124 24.8441C21.3079 25.0451 21.1033 25.3131 21.1033 25.6481L20.8987 27.2563C20.8987 27.4573 20.5578 27.5243 20.4896 27.2563L19.6713 24.308C19.4667 23.973 19.6031 23.571 19.944 23.4369Z" fill="#7E7F85"/>
    </svg>
);

export const TwitterIcon = () => (
    <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="46" height="46" rx="9" fill="#E6E7EB"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M33 16.1749C32.263 16.5002 31.4723 16.7211 30.6428 16.8196C31.4902 16.3122 32.1407 15.5064 32.445 14.5484C31.6514 15.02 30.7741 15.3602 29.8402 15.5452C29.0913 14.7484 28.0261 14.25 26.8445 14.25C24.5799 14.25 22.7419 16.0884 22.7419 18.3535C22.7419 18.6758 22.7777 18.9892 22.8493 19.2876C19.4389 19.1175 16.4164 17.4821 14.3934 14.9991C14.0413 15.6049 13.8384 16.3092 13.8384 17.0613C13.8384 18.4848 14.5635 19.7413 15.6645 20.4754C14.9931 20.4545 14.3606 20.2695 13.8056 19.9621C13.8056 19.98 13.8056 19.9949 13.8056 20.0129C13.8056 22.0005 15.2199 23.6598 17.0967 24.0358C16.7535 24.1283 16.3895 24.1791 16.0166 24.1791C15.751 24.1791 15.4944 24.1522 15.2438 24.1045C15.7659 25.7339 17.2817 26.9217 19.0749 26.9545C17.6696 28.0558 15.9032 28.7124 13.9787 28.7124C13.6475 28.7124 13.3222 28.6915 13 28.6556C14.8141 29.8196 16.9714 30.5 19.2897 30.5C26.8356 30.5 30.9621 24.2477 30.9621 18.8251C30.9621 18.646 30.9591 18.4699 30.9502 18.2938C31.7528 17.7149 32.448 16.9927 32.997 16.169L33 16.1749Z" fill="#7E7F85"/>
    </svg>
);

export const VKIcon = () => (
    <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="46" height="46" rx="9" fill="#E6E7EB"/>
        <path d="M23.7815 29.25C17.8025 29.25 14.3921 24.5578 14.25 16.75H17.245C17.3434 22.4807 19.5514 24.9082 21.3003 25.4087V16.75H24.1204V21.6924C25.8474 21.4797 27.6619 19.2275 28.274 16.75H31.0942C30.8635 18.0349 30.4037 19.2515 29.7435 20.3237C29.0834 21.3958 28.2371 22.3006 27.2575 22.9812C28.3509 23.6032 29.3167 24.4835 30.0911 25.5641C30.8655 26.6446 31.4309 27.9009 31.75 29.25H28.6457C28.3592 28.0782 27.777 27.0293 26.972 26.2347C26.167 25.44 25.175 24.9351 24.1204 24.783V29.25H23.7815Z" fill="#7E7F85"/>
    </svg>
);