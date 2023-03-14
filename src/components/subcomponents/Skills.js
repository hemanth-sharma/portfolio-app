import React from "react";

import SqlIcon from "../../assets/Icons/SQL_icon";
import NumpyIcon from "../../assets/Icons/Numpy_icon";
import PandasIcon from "../../assets/Icons/PandasIcon";
import JavascriptSVGIcon from "../../assets/Icons/JavascriptSVG_Icon";
import CppIcon from "../../assets/Icons/CppIcon";
import PowerBIIcon from "../../assets/Icons/Powerbi_Icon";
import TableauIcon from "../../assets/Icons/TableauIcon";
import MatplotlibIcon from "../../assets/Icons/MatplotlibIcon";
import JupyterIcon from "../../assets/Icons/JupyterIcon";
import ExcelIcon from "../../assets/Icons/Excel_Icon";
import MySQLIcon from "../../assets/Icons/MySQL_Icon";
import SSMSIconSVG from "../../assets/Icons/SSMS_Icon";
import GitIcon from "../../assets/Icons/GitSVG_icon";
import NodeIconSVG from "../../assets/Icons/NodeIcon_SVG";
import ExpressIconSVG from "../../assets/Icons/ExpressIcon_SVG";
import ReactIconSVG from "../../assets/Icons/ReactIcon_SVG";

function Skills() {
  return (
    <div>
      <section id="skills" className="w-full flex flex-col lg:mb-12">
        <h2 className="font-semibold text-3xl md:text-4xl text-gray-800 mb-6 mt-[86px]">
          Skills
        </h2>

        <p className="mb-2">
          My toolkit primarily includes the following technologies, but is
          always expanding:
        </p>

        {/* <!-- Languages --> */}
        <section className="my-3 md:mt-5">
          <h3 className="font-light uppercase text-sm sm:text-base border-b mb-3 md:mb-4 w-32">
            Languages
          </h3>
          <ul className="flex flex-wrap pl-6 -mr-8">
            {/* <!-- Python --> */}
            <li className="flex flex-col items-center justify-center w-12 h-16 pr-[68px] md:pr-[74px]">
              <svg
                width="240px"
                height="240px"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <linearGradient
                  id="b"
                  x1="10.458"
                  x2="26.314"
                  y1="12.972"
                  y2="26.277"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#26abe7" offset="0" />
                  <stop stopColor="#086dbf" offset="1" />
                </linearGradient>
                <path
                  d="m24.047 5c-1.555 5e-3 -2.633 0.142-3.936 0.367-3.848 0.67-4.549 2.077-4.549 4.67v3.963h9v2h-13.692c-2.636 0-4.943 1.242-5.674 4.219-0.826 3.417-0.863 5.557 0 9.125 0.655 2.661 2.098 4.656 4.735 4.656h3.632v-5.104c0-2.966 2.686-5.896 5.764-5.896h7.236c2.523 0 5-1.862 5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672 0.061-6e-3 -1.756-0.371-3.298-0.365zm-4.984 4c0.821 0 1.5 0.677 1.5 1.502 0 0.833-0.679 1.498-1.5 1.498-0.837 0-1.5-0.664-1.5-1.498 0-0.822 0.663-1.502 1.5-1.502z"
                  fill="url(#b)"
                />
                <linearGradient
                  id="a"
                  x1="35.334"
                  x2="23.517"
                  y1="37.911"
                  y2="21.034"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#feb705" offset="0" />
                  <stop stopColor="#ffda1c" offset="1" />
                </linearGradient>
                <path
                  d="m23.078 43c1.555-5e-3 2.633-0.142 3.936-0.367 3.848-0.67 4.549-2.077 4.549-4.67v-3.963h-9v-2h13.693c2.636 0 4.943-1.242 5.674-4.219 0.826-3.417 0.863-5.557 0-9.125-0.656-2.661-2.099-4.656-4.736-4.656h-3.632v5.104c0 2.966-2.686 5.896-5.764 5.896h-7.236c-2.523 0-5 1.862-5 4.377v8.586c0 2.439 1.759 4.263 4.218 4.672-0.061 6e-3 1.756 0.371 3.298 0.365zm4.985-4c-0.821 0-1.5-0.677-1.5-1.502 0-0.833 0.679-1.498 1.5-1.498 0.837 0 1.5 0.664 1.5 1.498 0 0.822-0.664 1.502-1.5 1.502z"
                  fill="url(#a)"
                />
              </svg>

              <span className="text-xs md:text-sm mt-1">Python</span>
            </li>
            {/* <!-- SQL --> */}
            <li className="flex flex-col items-center justify-center w-12 h-16 pr-[68px] md:pr-[74px]">
              <SqlIcon />

              <span className="text-xs md:text-sm mt-1">SQL</span>
            </li>
            {/* <!-- Numpy --> */}
            <li className="flex flex-col items-center justify-center w-12 h-16 pr-[68px] md:pr-[74px]">
              <NumpyIcon />

              <span className="text-xs md:text-sm mt-1">Numpy</span>
            </li>
            {/* <!-- Pandas --> */}
            <li className="flex flex-col items-center justify-center w-12 h-16 pr-[68px] md:pr-[74px]">
              <PandasIcon />

              <span className="text-xs md:text-sm mt-1">Pandas</span>
            </li>
            {/* <!-- JavaScript --> */}
            <li className="flex flex-col items-center justify-center w-12 h-16 pr-[68px] md:pr-[74px]">
              <JavascriptSVGIcon />

              <span className="text-xs md:text-sm mt-1">JavaScript</span>
            </li>
            {/* <!-- C++ --> */}
            <li className="flex flex-col items-center justify-center w-12 h-16 pr-[68px] md:pr-[74px]">
              <CppIcon />

              <span className="text-xs md:text-sm mt-1">C++</span>
            </li>
          </ul>
        </section>

        {/* <!-- Data Visualization Tools --> */}
        <section className="my-3 md:mt-5">
          <h3 className="font-light uppercase text-sm md:text-base border-b mb-3 md:mb-4 w-32">
            Data Visualization Tools
          </h3>
          <ul className="flex flex-wrap pl-6 -mr-8">
            {/* <!-- Power BI --> */}
            <li className="flex flex-col items-center justify-center w-12 h-16 pr-[68px] md:pr-[74px]">
              <PowerBIIcon />

              <span className="text-xs md:text-sm mt-1">PowerBI</span>
            </li>
            {/* <!-- Tableau --> */}
            <li className="flex flex-col items-center justify-center w-12 h-16 pr-[68px] md:pr-[74px]">
              <TableauIcon />

              <span className="text-xs md:text-sm mt-1">Tableau</span>
            </li>
            {/* <!-- Matplotlib --> */}
            <li className="flex flex-col items-center justify-center w-12 h-16 pr-[68px] md:pr-[74px]">
              <MatplotlibIcon />

              <span className="text-xs md:text-sm mt-1">Matplotlib</span>
            </li>
            {/* <!-- Jupyter --> */}
            <li className="flex flex-col items-center justify-center w-12 h-16 pr-[68px] md:pr-[74px]">
              <JupyterIcon />

              <span className="text-xs md:text-sm mt-1">Jupyter</span>
            </li>
            {/* <!-- Excel --> */}
            <li className="flex flex-col items-center justify-center w-12 h-16 pr-[68px] md:pr-[74px]">
              <ExcelIcon />

              <span className="text-xs md:text-sm mt-1">Excel</span>
            </li>
          </ul>
        </section>

        {/* <!-- Data Visualization Tools --> */}
        <section className="my-3 md:mt-5">
          <h3 className="font-light uppercase text-sm md:text-base border-b mb-3 md:mb-4 w-32">
            Database Tools
          </h3>
          <ul className="flex flex-wrap pl-6 -mr-8">
            {/* <!-- MySQL --> */}
            <li className="flex flex-col items-center justify-center w-12 h-16 pr-[68px] md:pr-[74px]">
              <MySQLIcon />

              <span className="text-xs md:text-sm mt-1">MySQL</span>
            </li>
            {/* <!-- Sql Server --> */}
            <li className="flex flex-col items-center justify-center w-12 h-16 pr-[68px] md:pr-[74px]">
              <SSMSIconSVG />

              <span className="text-xs md:text-sm mt-1">SSMS</span>
            </li>

            {/* <!-- Git --> */}
            <li className="flex flex-col items-center justify-center w-12 h-16 pr-[68px] md:pr-[74px]">
              <GitIcon />

              <span className="text-xs md:text-sm mt-1">Git</span>
            </li>

            {/* <!-- Nodejs --> */}
            <li className="flex flex-col items-center justify-center w-12 h-16 pr-[68px] md:pr-[74px]">
              <NodeIconSVG />

              <span className="text-xs md:text-sm mt-1">Node.js</span>
            </li>
            {/* <!-- Express --> */}
            <li className="flex flex-col items-center justify-center w-12 h-16 pr-[68px] md:pr-[74px]">
              <ExpressIconSVG />

              <span className="text-xs md:text-sm mt-1">Express</span>
            </li>
            {/* <!-- React --> */}
            <li className="flex flex-col items-center justify-center w-12 h-16 pr-[68px] md:pr-[74px]">
              <ReactIconSVG />

              <span className="text-xs md:text-sm mt-1">React.js</span>
            </li>
          </ul>
        </section>
      </section>
    </div>
  );
}

export default Skills;
