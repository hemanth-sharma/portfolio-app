import React from "react";
// import project1Image from "../../assets/images";
function Projects() {
  return (
    <>
      <section id="projects" className="w-full lg:mb-12">
        <h2 className="font-semibold text-3xl md:text-4xl text-gray-800 mb-8 mt-[86px]">
          Projects
        </h2>

        {/* InterviewBot AI: SaaS Platform */}
        <article className="flex flex-col xl:flex-row">
          <img
            src={process.env.PUBLIC_URL + "/images/books_recommendation.webp"}
            height="869"
            width="1500"
            alt="InterviewBot AI: SaaS Platform"
            className="shadow-md rounded-lg xl:max-w-2xl xl:max-h-[389px]"
          />
          <div className="xl:flex xl:flex-col xl:ml-8">
            <h3 className="text-2xl font-semibold mt-4">
              InterviewBot AI: SaaS Platform
            </h3>

            <div className="mb-4">
              <p className="text-sm text-gray-600 mt-1 italic md:text-base">
                Next.js, React, Tailwind, FastAPI, LangChain, SpeechToText, PostgreSQL, Pydantic, SQLAlchemy,
                Vercel, Stripe
              </p>
            </div>

            <p className="mb-4">
            InterviewBot AI is an MVP SaaS platform for adaptive, AI-powered mock interviews with feedback on technical, behavioral, and coding skills. It supports voice input with real-time transcription, playback, and an in-browser coding editor for immersive practice. Built with Next.js, FastAPI, PostgreSQL, JWT + Google OAuth, and deployed on Vercel with Supabase, the platform already has early users actively testing, validating interest, and shaping the next development stage.
            </p>

            <div className="flex items-center justify-start mb-6">
              <a
                className="text-lg underline hover:no-underline mr-5"
                href="https://github.com/hemanth-sharma/InterviewBot-AI"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View code for Books Recommendation Project"
              >
                View code
              </a>
              <a
                className="text-lg underline hover:no-underline"
                href="https://interview-bot-ai.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Vist Books Recommendation Project"
              >
                Visit website
              </a>
            </div>
          </div>
        </article>

        {/* Books Recommendation System */}
        <article className="flex flex-col xl:flex-row">
          <img
            src={process.env.PUBLIC_URL + "/images/books_recommendation.webp"}
            height="869"
            width="1500"
            alt="Books Recommendation Project"
            className="shadow-md rounded-lg xl:max-w-2xl xl:max-h-[389px]"
          />
          <div className="xl:flex xl:flex-col xl:ml-8">
            <h3 className="text-2xl font-semibold mt-4">
              Books Recommendation System with NLP
            </h3>

            <div className="mb-4">
              <p className="text-sm text-gray-600 mt-1 italic md:text-base">
                FastAPI, Scikit-Learn, NLTK, MongoDB Atlas, PyMongo,
                BeautifulSoup, Pandas, NumPy, Jinja2
              </p>
            </div>

            <p className="mb-4">
              The Book Recommendation System is a web application that suggests books tailored to users’
              interests. Utilizing NLP to interpret user input, it generates
              personalized recommendations based on a content-based model that
              matches user queries with books in the database. <br></br>The database is
              created using an ETL process, scraping data from Goodreads and
              uploading it to MongoDB Atlas. The FastAPI backend manages data
              processing and recommendation generation, ensuring an efficient
              and responsive experience.
            </p>

            <div className="flex items-center justify-start mb-6">
              <a
                className="text-lg underline hover:no-underline mr-5"
                href="https://github.com/hemanth-sharma/BooksRecommendationSystem.git"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View code for Books Recommendation Project"
              >
                View code
              </a>
              <a
                className="text-lg underline hover:no-underline"
                href="https://books-recommendation-bs00.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Vist Books Recommendation Project"
              >
                Visit website
              </a>
            </div>
          </div>
        </article>

        {/* Artwall Ecommerce Django restframework */}
        <article className="flex flex-col xl:flex-row">
          <img
            src={process.env.PUBLIC_URL + "/images/django_ecommerce1.webp"}
            height="869"
            width="1500"
            alt="Full Stack Ecommerce project"
            className="shadow-md rounded-lg xl:max-w-2xl xl:max-h-[389px]"
          />
          <div className="xl:flex xl:flex-col xl:ml-8">
            <h3 className="text-2xl font-semibold mt-4">
              ArtWall eCommerce Platform
            </h3>

            <div className="mb-4">
              <p className="text-sm text-gray-600 mt-1 italic md:text-base">
                React, Django, Django-restframework, PostgreSQL, AWS S3,
                Bootstrap, Render
              </p>
            </div>

            <p className="mb-4">
              Built a full-stack eCommerce platform for selling art and posters,
              using Django REST Framework for the backend and React with
              Bootstrap for the frontend. Integrated PostgreSQL for product data
              and AWS S3 for secure, scalable image storage. Developed RESTful
              APIs to support product browsing, search, user accounts, wishlist,
              and cart functionality. Deployed seamlessly on Render, hosting
              both backend and frontend. Automated product data collection with
              BeautifulSoup and implemented Simple JWT for authentication.
            </p>

            <div className="flex items-center justify-start mb-6">
              <a
                className="text-lg underline hover:no-underline mr-5"
                href="https://github.com/hemanth-sharma/Ecommerce-ArtWall"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View code for Django Ecommerce website"
              >
                View code
              </a>
              <a
                className="text-lg underline hover:no-underline"
                href="https://ecommerce-artwall-frontend.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Django Ecommerce website"
              >
                Visit website
              </a>
            </div>
          </div>
        </article>

        {/* Stackoverflow Survey Data Exploration */}
        <article className="flex flex-col xl:flex-row">
          <img
            src={process.env.PUBLIC_URL + "/images/stackoverflow_survey.webp"}
            height="869"
            width="1500"
            alt="Stackoverflow Survey project"
            className="shadow-md rounded-lg xl:max-w-2xl xl:max-h-[389px]"
          />
          <div className="xl:flex xl:flex-col xl:ml-8">
            <h3 className="text-2xl font-semibold mt-4">
              Stackoverflow Developer Survey Data Exploration
            </h3>

            <div className="mb-4">
              <p className="text-sm text-gray-600 mt-1 italic md:text-base">
                Python, Matplotlib & Seaborn, Pandas, Numpy, Jupyter
              </p>
            </div>

            <p className="mb-4">
              This project aims to gain insights into the global programming
              community by analyzing the Stackoverflow Developer Survey 2022
              dataset. Specifically, we will explore the role of programmers
              across different fields, positions, and experience levels, with a
              focus on data scientists and analysts. We will also examine
              potential gender biases or under-representations within the
              programming community.
            </p>

            <div className="flex items-center justify-start mb-6">
              <a
                className="text-lg underline hover:no-underline mr-5"
                href="https://github.com/hemanth-sharma/Stackoverflow-Survey-2022-Data-Exploration"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View code for Stackoverflow-Survey-2022-Data-Exploration"
              >
                View code
              </a>
              <a
                className="text-lg underline hover:no-underline"
                href="https://github.com/hemanth-sharma/Stackoverflow-Survey-2022-Data-Exploration/blob/main/Stack_overflow.ipynb"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Stackoverflow-Survey-2022-Data-Exploration Blog"
              >
                Visit notebook
              </a>
            </div>
          </div>
        </article>

        {/* Covid 19 Data Exploration - Dashboard */}
        <article className="mt-16 flex flex-col xl:flex-row">
          <img
            src={process.env.PUBLIC_URL + "/images/covid-19.webp"}
            height="869"
            width="1500"
            alt="covid 19 project"
            className="shadow-md rounded-lg xl:max-w-2xl xl:max-h-[389px]"
          />
          <div className="xl:flex xl:flex-col xl:ml-8">
            <h3 className="text-2xl font-semibold mt-4">
              Covid 19 Data Cleaning and Visualization
            </h3>

            <div className="mb-4">
              <p className="text-sm text-gray-600 mt-1 italic md:text-base">
                SQL, Excel, Power BI, Tableau, SQL Server Management Studio
              </p>
            </div>

            <p className="mb-4">
              This project involves the cleaning and visualization of Covid-19
              data using SQL for data cleaning and Power BI for visualization.
              Through this project, we aim to gain a better understanding of the
              spread and impact of Covid-19 by analyzing and visualizing data
              from reliable sources. By using SQL for data cleaning and Power BI
              for visualization, we can efficiently process and transform large
              datasets into meaningful insights and visualizations that can be
              easily understood and shared.
            </p>

            <div className="flex items-center justify-start mb-5">
              <a
                className="text-lg underline hover:no-underline mr-5"
                href="https://github.com/hemanth-sharma/Covid-Data-Exploration"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View code for Covid19 Data Exploration"
              >
                View code
              </a>
              <a
                className="text-lg underline hover:no-underline"
                href="https://public.tableau.com/app/profile/hemant.sharma4184/viz/Covid19Dashboard_16789767368420/Dashboard1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Covid 19 Tableau Dashboard"
              >
                Visit dashboard
              </a>
            </div>
          </div>
        </article>

        {/* Indian Summer Dashboard - Tableau */}
        {/* <article className="flex flex-col xl:flex-row mt-16">
          <img
            src={process.env.PUBLIC_URL + "/images/indian_summer.webp"}
            height="869"
            width="1500"
            alt="indian summer project web page"
            className="shadow-md rounded-lg xl:max-w-2xl xl:max-h-[389px]"
          />
          <div className="xl:flex xl:flex-col xl:ml-8">
            <h3 className="text-2xl font-semibold mt-4">
              Indian Summer Dashboard
            </h3>

            <div className="mb-4">
              <p className="text-sm text-gray-600 mt-1 italic md:text-base">
                Tableau, SQL, Excel
              </p>
            </div>

            <p className="mb-4">
              Analyzing Indian Summer: Exploring Temperature, Humidity, and Wind
              Patterns of Top 15 Populous Cities in India with SQL, Excel, and
              Tableau. It focuses on gaining insights into the effects of Indian
              summers by analyzing data from 2007-2022 with efficient data
              cleaning in SQL and Excel, and visualizations in Tableau.
            </p>

            <div className="flex items-center justify-start mb-2">
              <a
                className="text-lg underline hover:no-underline"
                href="https://public.tableau.com/app/profile/hemant.sharma4184/viz/IndianSummer/Dashboard1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Indian Summer Dashboard"
              >
                Visit dashboard
              </a>
            </div>
          </div>
        </article> */}

        {/* Sales Dashboard Power BI */}
        {/* <article className="mt-16 flex flex-col xl:flex-row">
          <img
            src={process.env.PUBLIC_URL + "/images/sales_dashboard.webp"}
            height="869"
            width="1500"
            alt="Sales Dashboard power bi"
            className="shadow-md rounded-lg xl:max-w-2xl xl:max-h-[389px]"
          />
          <div className="xl:flex xl:flex-col xl:ml-8">
            <h3 className="text-2xl font-semibold mt-4">
              Sales Data analysis and Visualization
            </h3>

            <div className="mb-4">
              <p className="text-sm text-gray-600 mt-1 italic md:text-base">
                Power BI, MySQL, Excel, Data Modeling
              </p>
            </div>

            <p className="mb-4">
              This project aimed to provide Sales insights for AtliQ Hardware
              dataset through an automated dashboard, reducing manual data
              gathering time and supporting data-driven decision making. Using
              Power BI, for Data Visualization and SQL + Excel for Data Cleaning
              and exploration.
            </p>

            <div className="flex items-center justify-start mb-5">
              <a
                className="text-lg underline hover:no-underline"
                href="https://public.tableau.com/app/profile/hemant.sharma4184"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Covid 19 Tableau Dashboard"
              >
                Visit dashboard
              </a>
            </div>
          </div>
        </article> */}

        {/* Seattle Airbnb Insights */}
        <article className="mt-16 flex flex-col xl:flex-row">
          <img
            src={process.env.PUBLIC_URL + "/images/airbnb.webp"}
            height="869"
            width="1500"
            alt="Sales Dashboard power bi"
            className="shadow-md rounded-lg xl:max-w-2xl xl:max-h-[389px]"
          />
          <div className="xl:flex xl:flex-col xl:ml-8">
            <h3 className="text-2xl font-semibold mt-4">
              Seattle Airbnb Insights Dashboard
            </h3>

            <div className="mb-4">
              <p className="text-sm text-gray-600 mt-1 italic md:text-base">
                Tableau, Excel, SQL server
              </p>
            </div>

            <p className="mb-4">
              This project aims to analyze the Seattle Airbnb market by
              exploring the revenue, bedroom price, and location price of Airbnb
              listings using the Seattle Airbnb open dataset from Kaggle. The
              dataset was cleaned and prepared for analysis using Excel, and
              Tableau was used to create an interactive dashboard that offers
              insights into the Seattle Airbnb market. The dashboard enables
              users to identify areas with high average price and understand
              seasonal trends of 2016.
            </p>

            <div className="flex items-center justify-start mb-5">
              <a
                className="text-lg underline hover:no-underline"
                href="https://public.tableau.com/app/profile/hemant.sharma4184/viz/AirBnBFullProject_16772425344660/Dashboard1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Airbnb Tableau Dashboard"
              >
                Visit dashboard
              </a>
            </div>
          </div>
        </article>
        {/* Netflix Clone Website */}
        <article className="mt-16 flex flex-col xl:flex-row">
          <img
            src={process.env.PUBLIC_URL + "/images/netflix_web.webp"}
            height="869"
            width="1500"
            alt="netflix website profile"
            className="shadow-md rounded-lg xl:max-w-2xl xl:max-h-[389px]"
          />
          <div className="xl:flex xl:flex-col xl:ml-8">
            <h3 className="text-2xl font-semibold mt-4">
              Netflix Website Clone
            </h3>

            <div className="mb-4">
              <p className="text-sm text-gray-600 mt-1 italic md:text-base">
                React, Node, Firebase, JavaScript, HTML/CSS
              </p>
            </div>

            <p className="mb-4">
              This project is a Netflix website clone developed using React,
              JavaScript, and Node.js, with Firebase used for hosting. The
              website retrieves movie details using the TMDB API and allows
              users to view movie trailers. The project showcases the use of
              modern web development technologies (MERN stack) to create a
              functional streaming website.
            </p>

            <div className="flex items-center justify-start mb-5">
              <a
                className="text-lg underline hover:no-underline mr-5"
                href="https://github.com/hemanth-sharma/Netflix-Clone-"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View code for Covid19 Data Exploration"
              >
                View code
              </a>
              <a
                className="text-lg underline hover:no-underline"
                href="https://netflix-clone-2481f.web.app/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Covid 19 Tableau Dashboard"
              >
                Visit website
              </a>
            </div>
          </div>
        </article>

        {/* Code Editor Compiler Website */}
        {/* <article className="mt-16 flex flex-col xl:flex-row">
          <img
            src={process.env.PUBLIC_URL + "/images/codeEditor_.webp"}
            height="869"
            width="1500"
            alt="netflix website profile"
            className="shadow-md rounded-lg xl:max-w-2xl xl:max-h-[389px]"
          />
          <div className="xl:flex xl:flex-col xl:ml-8">
            <h3 className="text-2xl font-semibold mt-4">
                Code Editor and Compiler website
            </h3>

            <div className="mb-4">
              <p className="text-sm text-gray-600 mt-1 italic md:text-base">
                JavaScript, Nodejs, Express, HTML/CSS
              </p>
            </div>

            <p className="mb-4">
              A compiler and code editor website, which supports multiple coding languages.
            </p>

            <div className="flex items-center justify-start mb-5">
              <a
                className="text-lg underline hover:no-underline mr-5"
                href="https://github.com/hemanth-sharma/Code-Editor"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View code for Covid19 Data Exploration"
              >
                View code
              </a>
              <a
                className="text-lg underline hover:no-underline"
                href="https://compilerwithapi-3p34g82fr89l88n1sc9.web.codequotient.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Covid 19 Tableau Dashboard"
              >
                Visit website
              </a>
            </div>
          </div>
        </article> */}
        {/* Amazon Clone Website */}
        {/* Portfolio Website */}
      </section>
    </>
  );
}

export default Projects;
