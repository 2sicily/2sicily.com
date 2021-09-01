import React from 'react';
import { RichText } from 'prismic-reactjs';
import { linkResolver, hrefResolver } from '../../prismic-configuration'
import Link from 'next/link'

const MySlice = ({ slice }) => (
  <section className="max-w-7xl mx-auto flex flex-col xl:flex-row xl:items-start items-center">
  <div className="w-full xl:w-2/3 p-4">
    <div className="border-t border-b border-brand-zero flex flex-col sm:flex-row justify-center p-4 mb-4 space-x-0 sm:space-x-8">
      <div className="flex w-min self-center py-1">
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.5 20H22.5V18C22.5 16.3431 21.1569 15 19.5 15C18.5444 15 17.6931 15.4468 17.1438 16.1429M17.5 20H7.5M17.5 20V18C17.5 17.3438 17.3736 16.717 17.1438 16.1429M7.5 20H2.5V18C2.5 16.3431 3.84315 15 5.5 15C6.45561 15 7.30686 15.4468 7.85625 16.1429M7.5 20V18C7.5 17.3438 7.62642 16.717 7.85625 16.1429M7.85625 16.1429C8.5935 14.301 10.3948 13 12.5 13C14.6052 13 16.4065 14.301 17.1438 16.1429M15.5 7C15.5 8.65685 14.1569 10 12.5 10C10.8431 10 9.5 8.65685 9.5 7C9.5 5.34315 10.8431 4 12.5 4C14.1569 4 15.5 5.34315 15.5 7ZM21.5 10C21.5 11.1046 20.6046 12 19.5 12C18.3954 12 17.5 11.1046 17.5 10C17.5 8.89543 18.3954 8 19.5 8C20.6046 8 21.5 8.89543 21.5 10ZM7.5 10C7.5 11.1046 6.60457 12 5.5 12C4.39543 12 3.5 11.1046 3.5 10C3.5 8.89543 4.39543 8 5.5 8C6.60457 8 7.5 8.89543 7.5 10Z" stroke="#4458BE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span className="font-light ml-2 text-brand-zero">{slice.primary.sleeps}&nbsp;guests</span>
      </div>
      <div className="flex w-min self-center py-1">
      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.75 3.5C2.30228 3.5 2.75 3.94772 2.75 4.5V14H24.25V19.5C24.25 20.0523 23.8023 20.5 23.25 20.5C22.6977 20.5 22.25 20.0523 22.25 19.5V16H2.75V19.5C2.75 20.0523 2.30228 20.5 1.75 20.5C1.19772 20.5 0.75 20.0523 0.75 19.5V4.5C0.75 3.94772 1.19772 3.5 1.75 3.5ZM9.75 7.25H10.5H19.0714C20.6789 7.25 22.0194 8.26753 22.7133 9.66683C23.0568 10.3597 23.25 11.1569 23.25 12V12.75H22.5H10.5H9.75V12V8V7.25ZM19.0714 8.75H11.25V11.25H21.678C21.6136 10.9211 21.5081 10.6129 21.3694 10.3332C20.8776 9.34127 20.0021 8.75 19.0714 8.75ZM4.75 10C4.75 9.30964 5.30964 8.75 6 8.75C6.69036 8.75 7.25 9.30964 7.25 10C7.25 10.6904 6.69036 11.25 6 11.25C5.30964 11.25 4.75 10.6904 4.75 10ZM6 7.25C4.48122 7.25 3.25 8.48122 3.25 10C3.25 11.5188 4.48122 12.75 6 12.75C7.51878 12.75 8.75 11.5188 8.75 10C8.75 8.48122 7.51878 7.25 6 7.25Z" fill="#4458BE"/>
      </svg>

        <span className="font-light ml-2 text-brand-zero">{slice.primary.bedrooms}&nbsp;bedrooms</span>
      </div>
      <div className="flex w-min self-center py-1">
      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M8.22335 2.78778C6.74803 2.78778 5.55205 3.98376 5.55205 5.45909V9.84104H20.7639C22.2325 9.84104 23.6309 11.0757 23.3075 12.7233C22.7912 15.3543 21.3393 17.6482 19.3129 19.2455C19.3439 19.2723 19.3735 19.3014 19.4016 19.3326L20.9412 21.0433C21.3107 21.4538 21.2774 22.0861 20.8669 22.4555C20.4564 22.825 19.8241 22.7917 19.4546 22.3812L17.915 20.6705C17.8156 20.5601 17.7454 20.4335 17.7038 20.3004C17.321 20.5059 16.9246 20.6895 16.5164 20.8495C16.2064 20.9709 15.8857 21.0209 15.5782 21.0209H9.42173C9.11424 21.0209 8.79358 20.9709 8.48352 20.8495C8.07524 20.6895 7.67884 20.5059 7.29599 20.3003C7.25438 20.4332 7.18419 20.5595 7.08493 20.6697L5.54534 22.3804C5.17588 22.7909 4.54359 22.8242 4.13308 22.4547C3.72257 22.0853 3.68929 21.453 4.05875 21.0425L5.59834 19.3318C5.62631 19.3007 5.65579 19.2718 5.68656 19.2451C3.66044 17.6478 2.20874 15.3541 1.69246 12.7233C1.38266 11.1447 2.65335 9.94518 4.05205 9.84748V5.45909C4.05205 3.15534 5.9196 1.28778 8.22335 1.28778C9.92624 1.28778 11.3908 2.30819 12.0389 3.7709C13.7427 3.9664 15.066 5.41354 15.066 7.16974H8.22335C8.22335 5.70446 9.1445 4.45432 10.4393 3.96681C9.95936 3.25552 9.14598 2.78778 8.22335 2.78778ZM3.16439 12.4345C3.06231 11.9143 3.49555 11.341 4.23607 11.341H20.7639C21.5044 11.341 21.9377 11.9143 21.8356 12.4345C21.2051 15.6474 18.9548 18.283 15.9692 19.4528C15.8565 19.497 15.7248 19.5209 15.5782 19.5209H9.42173C9.27513 19.5209 9.14346 19.497 9.03073 19.4528C6.04512 18.283 3.7949 15.6474 3.16439 12.4345Z" fill="#4458BE"/>
      </svg>
        <span className="font-light ml-2 text-brand-zero">{slice.primary.bathrooms}&nbsp;bathrooms</span>
      </div>
    </div>
    <div className="font-light text-black">
      {RichText.render(slice.primary.description, linkResolver)}
    </div>
  </div>
  <div className="w-full xl:w-1/3 p-4 max-w-md text-center">
    <div className="border border-brand-zero shadow-md p-4">
      <div className="font-serif text-lg text-black">{slice.primary.callToActionHeading}</div>
      <div className="text-base font-light pt-2 pb-3 text-black">{slice.primary.callToActionDescription}</div>
      <div className="flex w-full justify-center">
      {slice.primary.callToActionLink && slice.primary.callToActionLinkText && 
      <Link href={hrefResolver(slice.primary.callToActionLink)}>
          <a className="text-lg text-brand-one font-sans italic hover:text-opacity-70 flex items-center">
          <div>
          {slice.primary.callToActionLinkText &&
            slice.primary.callToActionLinkText
          }
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
          </a>
      </Link>
      }
      </div>
    </div>
  </div>
  </section>
  
);

export default MySlice;
