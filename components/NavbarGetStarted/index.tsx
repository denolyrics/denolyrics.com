"use client";
import Link from "next/link";
import { useContext } from "react";
import { usePathname } from "next/navigation";

// CONTEXT

import NavbarContext from "../../context/NavbarContext";
import { NavbarContextType } from "../../context/NavbarContext/types";

function NavbarGetStarted() {
  const { ShowItemsMobile, setShowItemsMobile } = useContext(
    NavbarContext
  ) as NavbarContextType;
  const pathname = usePathname();

  return (
    <>
      {ShowItemsMobile && (
        <div className="z-30 px-3 py-3 mt-10 bg-[#363141] flex flex-col absolute top-0 right-0 bottom-0 left-0">
          {paths.map((path) => {
            return (
              <Link
                key={path.id}
                onClick={() => setShowItemsMobile((valueState) => !valueState)}
                href={path.path}
                className={`select-none px-5 py-2.5 font-bold border border-transparent ${
                  pathname === path.path ? "text-[#C9D1D9]" : "text-[#a2a9b0]"
                }`}
              >
                {path.name}
              </Link>
            );
          })}

          <div className="flex justify-center items-center">
            <Link
              onClick={() => setShowItemsMobile((valueState) => !valueState)}
              href="https://app.denolyrics.com"
              className="select-none text-white hover:shadow-md bg-active mt-10 hover:bg-black focus:outline-none font-medium rounded-lg px-5 py-2.5 border border-transparent"
            >
              Get started for free
            </Link>{" "}
          </div>
        </div>
      )}
      <nav
        className={`block md:hidden p-3 ${
          ShowItemsMobile ? "bg-[#363141]" : ""
        }`}
      >
        <div className="grid grid-cols-2">
          <Link href="/" className="font-extrabold">
            DenoLyrics
          </Link>
          <div
            className="flex justify-end"
            onClick={() => setShowItemsMobile((valueState) => !valueState)}
          >
            {ShowItemsMobile ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </div>
        </div>
      </nav>
      <nav className="hidden md:block font-semibold px-5 py-2">
        <div className="grid grid-cols-2">
          <div className="inline-flex justify-start items-center">
            <svg
              width={30}
              height={30}
              viewBox="0 0 182 194"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="denolyrics">
                <g id="Clip path group">
                  <mask
                    id="mask0_1_99"
                    style={{ maskType: "luminance" }}
                    maskUnits="userSpaceOnUse"
                    x={0}
                    y={0}
                    width={150}
                    height={150}
                  >
                    <g id="770974d8db">
                      <path id="Vector" d="M0 0H150V150H0V0Z" fill="white" />
                    </g>
                  </mask>
                  <g mask="url(#mask0_1_99)">
                    <g id="Group">
                      <g id="Clip path group_2">
                        <mask
                          id="mask1_1_99"
                          style={{ maskType: "luminance" }}
                          maskUnits="userSpaceOnUse"
                          x={0}
                          y={0}
                          width={150}
                          height={150}
                        >
                          <g id="eacf326b7d">
                            <path
                              id="Vector_2"
                              d="M6 0H144C145.594 0 147.12 0.630208 148.245 1.75521C149.37 2.88021 150 4.40625 150 6V144C150 145.589 149.37 147.115 148.245 148.24C147.12 149.365 145.594 150 144 150H6C4.40625 150 2.88021 149.365 1.75521 148.24C0.630208 147.115 0 145.589 0 144V6C0 2.68229 2.6875 0 6 0Z"
                              fill="white"
                            />
                          </g>
                        </mask>
                        <g mask="url(#mask1_1_99)">
                          <g id="Group_2">
                            <path
                              id="Vector_3"
                              d="M0 0H150V150H0V0Z"
                              fill="white"
                            />
                            <path
                              id="Vector_4"
                              d="M6 0H144C145.594 0 147.12 0.630208 148.245 1.75521C149.37 2.88021 150 4.40625 150 6V144C150 145.589 149.37 147.115 148.245 148.24C147.12 149.365 145.594 150 144 150H6C4.40625 150 2.88021 149.365 1.75521 148.24C0.630209 147.115 0 145.589 0 144V6C0 2.68229 2.6875 0 6 0Z"
                              stroke="#292936"
                              strokeWidth={4}
                            />
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
                <g id="Clip path group_3">
                  <mask
                    id="mask2_1_99"
                    style={{ maskType: "luminance" }}
                    maskUnits="userSpaceOnUse"
                    x={16}
                    y={16}
                    width={150}
                    height={150}
                  >
                    <g id="68ea387da9">
                      <path
                        id="Vector_5"
                        d="M16 16H166V166H16V16Z"
                        fill="white"
                      />
                    </g>
                  </mask>
                  <g mask="url(#mask2_1_99)">
                    <g id="Group_3">
                      <g id="Clip path group_4">
                        <mask
                          id="mask3_1_99"
                          style={{ maskType: "luminance" }}
                          maskUnits="userSpaceOnUse"
                          x={16}
                          y={16}
                          width={150}
                          height={150}
                        >
                          <g id="4ebd488f08">
                            <path
                              id="Vector_6"
                              d="M22 16H160C161.594 16 163.12 16.6302 164.245 17.7552C165.37 18.8802 166 20.4062 166 22V160C166 161.589 165.37 163.115 164.245 164.24C163.12 165.365 161.594 166 160 166H22C20.4063 166 18.8802 165.365 17.7552 164.24C16.6302 163.115 16 161.589 16 160V22C16 18.6823 18.6875 16 22 16Z"
                              fill="white"
                            />
                          </g>
                        </mask>
                        <g mask="url(#mask3_1_99)">
                          <g id="Group_4">
                            <path
                              id="Vector_7"
                              d="M16 16H166V166H16V16Z"
                              fill="white"
                            />
                            <path
                              id="Vector_8"
                              d="M22 16H160C161.594 16 163.12 16.6302 164.245 17.7552C165.37 18.8802 166 20.4063 166 22V160C166 161.589 165.37 163.115 164.245 164.24C163.12 165.365 161.594 166 160 166H22C20.4063 166 18.8802 165.365 17.7552 164.24C16.6302 163.115 16 161.589 16 160V22C16 18.6823 18.6875 16 22 16Z"
                              stroke="#292936"
                              strokeWidth={4}
                            />
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
                <g id="Clip path group_5">
                  <mask
                    id="mask4_1_99"
                    style={{ maskType: "luminance" }}
                    maskUnits="userSpaceOnUse"
                    x={32}
                    y={32}
                    width={150}
                    height={162}
                  >
                    <g id="42ae55c4d8">
                      <path
                        id="Vector_9"
                        d="M32 32H182V193.719H32V32Z"
                        fill="white"
                      />
                    </g>
                  </mask>
                  <g mask="url(#mask4_1_99)">
                    <g id="Group_5">
                      <g id="Clip path group_6">
                        <mask
                          id="mask5_1_99"
                          style={{ maskType: "luminance" }}
                          maskUnits="userSpaceOnUse"
                          x={32}
                          y={32}
                          width={150}
                          height={162}
                        >
                          <g id="ed335db663">
                            <path
                              id="Vector_10"
                              d="M38 32H176C177.594 32 179.12 32.6302 180.245 33.7552C181.37 34.8802 182 36.4062 182 38V187.552C182 189.146 181.37 190.672 180.245 191.797C179.12 192.922 177.594 193.552 176 193.552H38C36.4063 193.552 34.8802 192.922 33.7552 191.797C32.6302 190.672 32 189.146 32 187.552V38C32 34.6823 34.6875 32 38 32Z"
                              fill="white"
                            />
                          </g>
                        </mask>
                        <g mask="url(#mask5_1_99)">
                          <g id="Group_6">
                            <path
                              id="Vector_11"
                              d="M32 32H182V193.719H32V32Z"
                              fill="white"
                            />
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
                <g id="Clip path group_7">
                  <mask
                    id="mask6_1_99"
                    style={{ maskType: "luminance" }}
                    maskUnits="userSpaceOnUse"
                    x={32}
                    y={32}
                    width={150}
                    height={162}
                  >
                    <g id="42737cb418">
                      <path
                        id="Vector_12"
                        d="M32.0052 32H181.995V194H32.0052V32Z"
                        fill="white"
                      />
                    </g>
                  </mask>
                  <g mask="url(#mask6_1_99)">
                    <g id="Group_7">
                      <g id="Clip path group_8">
                        <mask
                          id="mask7_1_99"
                          style={{ maskType: "luminance" }}
                          maskUnits="userSpaceOnUse"
                          x={32}
                          y={32}
                          width={150}
                          height={162}
                        >
                          <g id="183a5cd628">
                            <path
                              id="Vector_13"
                              d="M38.0052 32H175.995C177.589 32 179.115 32.6302 180.24 33.7604C181.365 34.8906 181.995 36.4167 181.995 38.0156V187.979C181.995 189.578 181.365 191.109 180.24 192.234C179.115 193.365 177.589 194 175.995 194H38.0052C36.4114 194 34.8854 193.365 33.7604 192.234C32.6354 191.109 32.0052 189.578 32.0052 187.979V38.0156C32.0052 34.6927 34.6927 32 38.0052 32Z"
                              fill="white"
                            />
                          </g>
                        </mask>
                        <g mask="url(#mask7_1_99)">
                          <g id="Group_8">
                            <path
                              id="Vector_14"
                              d="M38.0052 32H175.995C177.589 32 179.115 32.6302 180.24 33.7604C181.365 34.8906 181.995 36.4167 181.995 38.0156V187.979C181.995 189.578 181.365 191.109 180.24 192.234C179.115 193.365 177.589 194 175.995 194H38.0052C36.4114 194 34.8854 193.365 33.7604 192.234C32.6354 191.109 32.0052 189.578 32.0052 187.979V38.0156C32.0052 34.6927 34.6927 32 38.0052 32Z"
                              stroke="#292936"
                              strokeWidth="4.00561"
                            />
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
                <g id="Group_9">
                  <g id="Group_10">
                    <g id="Group_11">
                      <path
                        id="Vector_15"
                        d="M78.2969 143.998H55.6094V79.9982H78.4844C84.9271 79.9982 90.474 81.2794 95.1302 83.8315C99.7813 86.3732 103.359 90.0346 105.859 94.8107C108.359 99.5763 109.609 105.285 109.609 111.936C109.609 118.602 108.349 124.332 105.839 129.123C103.339 133.915 99.7448 137.597 95.0677 140.165C90.3854 142.722 84.7969 143.998 78.2969 143.998ZM69.151 132.394H77.7344C83.7604 132.394 88.3281 130.769 91.4427 127.519C94.5521 124.269 96.1094 119.076 96.1094 111.936C96.1094 104.826 94.5521 99.6596 91.4427 96.4357C88.3281 93.2013 83.776 91.5815 77.776 91.5815H69.151V132.394Z"
                        fill="#292936"
                      />
                    </g>
                  </g>
                </g>
                <g id="Group_12">
                  <g id="Group_13">
                    <g id="Group_14">
                      <path
                        id="Vector_16"
                        d="M119.598 143.998V79.9982H133.14V132.832H160.577V143.998H119.598Z"
                        fill="#292936"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <Link
              href="/"
              className="select-none px-5 py-2.5 border border-transparent"
            >
              DenoLyrics
            </Link>
          </div>
          <div className="flex justify-end items-end gap-3">
            <div className="flex justify-center items-center">
              <Link
                href="https://app.denolyrics.com"
                className="select-none text-white hover:shadow-md bg-[#292936] hover:bg-black focus:outline-none font-medium rounded-lg px-5 py-2.5 border border-transparent"
              >
                Get started for free
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarGetStarted;

const paths = [
  {
    id: "1",
    name: "Home",
    path: "/",
  },
  {
    id: "2",
    name: "Pricing",
    path: "/pricing",
  },
  {
    id: "3",
    name: "What’s New",
    path: "/releases",
  },
];
