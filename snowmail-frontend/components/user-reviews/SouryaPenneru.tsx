"use client"

import React from 'react'
import { SocialIcon } from 'react-social-icons';
import {TbFolderFilled} from "react-icons/tb";

type Props = {}

function SouryaPenneru({}: Props) {
  return (
    <div className="mt-12">
      <article className="flex flex-col rounded-lg space-y-4 flex-shrink-0 w-[200px] md:w-[300px] xl:w-[400px] h-[250px] md:h-[350px] xl:h-[450px] snap-center bg-[#363636] p-6 hover:opacity-100 opacity-60 cursor-pointer transition-opacity duration-200 glow-outline" style={{ margin: '1.5rem 1.5rem 1.5rem 0' }}>
      
        <div className="flex items-center ml-6">
          <TbFolderFilled className="text-[#3792c0] h-16 w-12" />
          <div className="ml-auto">
            <SocialIcon 
              url="https://github.com/sourishdas07/Bull-Forecast" 
              fgColor="gray" 
              bgColor="transparent"
            />
          </div>
        </div>

        <div className="px-0 md:px-10 text-center">
          <h4 className="text-2xl text-[#3792c0] font-semibold hover:tw-shadow-glow">Bull Forecast</h4>
          
          <p className="mt-2 mb-2 text-gray-300">
            Bull Forecast is a web app that uses Additive Regression to provide real-time price updates and predictions about 
            all publicly traded stocks in the NYSE and NASDAQ and over 50 cryptocurrencies in a user-friendly manner. 
          </p>

          <div className="flex justify-center">
            <hr className="border-t border-gray-500 w-1/2 my-4" />
          </div>

          <div className="flex font-light text-center">
            <p className="font-div text-sm mt-4 mb-6 font-thin text-[#3792c0]">Python, Streamlit, Pandas, Matplotlib, Yahoo Finance</p>
          </div>
        </div>

      </article>

      <style jsx>{`
        .glow-outline {
        box-shadow: 0 0 20px 5px rgba(59, 130, 246, 0.8);
        }
        .glow-outline:hover {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}

export default SouryaPenneru