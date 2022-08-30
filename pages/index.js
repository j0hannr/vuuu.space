import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useTranslation, Trans } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextSeo } from "next-seo";

/**
 *
 * todo
 * ---
 * # form jump issue
 * # connect db or notion (https://commotion.page/blog/how-to-create-a-form-app-with-the-notion-api)
 * # proper layout with moritz
 * # include https://fonts.google.com/specimen/Barlow?query=barlow
 * # check favicon
 * # image component
 * # seo component
 * # translation => config issues (fs) (https://github.com/i18next/next-i18next/blob/master/examples/simple/pages/index.js)
 * # hydration failed: img => Image fix
 * # publish on vuuu.space
 * # dark mode
 *
 */

export default function LandingPage() {
  const router = useRouter();
  const { t } = useTranslation("common");

  return (
    <>
      <NextSeo
        title={t("seo.title")}
        description={t("seo.description")}
        openGraph={{
          locale: router.locale,
        }}
      />
      <Head></Head>

      <main className="overflow-hidden max-w-screen">
        <div className="px-6">
          <div className="pt-6 sm:pt-6 sm:px-6 md:pt-10 md:px-8  max-w-screen-2xl mx-auto overflow-visible">
            <div className="fixed top-0 left-0 right-0 z-40 p-2 md:mt-3 ">
              <div className="max-w-screen-xl p-2 md:p-3 mx-auto justify-center  grid  grid-cols-[1fr_200px_1fr] mb-6 transition-all duration-150 sm:max-h-full">
                <p className="text-gray-300 text-xl">
                  deja<span className=" text-gray-500">vuuu</span>
                </p>
              </div>
            </div>

            <section className="h-screen sm:h-auto sm:left-5 mb-[1rem] sm:mb-[18rem] lg:left-32 max-w-screen-xl mx-auto pt-32 md:pt-48 lg:pt-64 px-5 pb-4 relative flex flex-col">
              {/* large dot with gray background and height and width 50px layer blur */}
              <div className="w-full overflow-visible absolute  z-0">
                <div className="top-[-18rem] bg-gradient-to-r from-[#FFFFFF] to-[#0621E8] blur-3xl opacity-50 absolute left-[5rem] lg:left-[20rem] h-[800px] w-[800px] rounded-full"></div>
                <div className="top-[-17rem] bg-gradient-to-r from-[#50FFDC] to-[#50FFDC] blur-3xl opacity-50  absolute left-[5rem] lg:left-[19rem] h-[800px] w-[800px] rounded-full"></div>
                <div className="top-[-1rem] bg-gradient-to-r from-[#FFEC50] to-[#FFAF27] blur-3xl opacity-50 top-20       absolute left-[-5rem] lg:left-20 h-[500px] w-[600px] rounded-full"></div>
              </div>

              <div className="relative">
                <h1 className="text-3xl sm:text-5xl  text-left">
                  <span className="opacity-30">{t("what did you do today")}</span>
                  <br></br>
                  <span className="opacity-80">{t("yesterday")}</span>
                  <br></br>
                  <span className="opacity-20">{t("saturday")}</span>
                  <br></br>
                  <span className="opacity-10">{t("last year")}</span>
                  <br></br>
                </h1>
                <SignUpForm />
              </div>
            </section>

            {/* another section with "our brain tries to forget anything" & "write to remember more" */}
            <section className="min-h-[75vh] relative  flex items-center ">
              <h2 className="z-10 text-3xl sm:text-5xl  md:ml-56">
                <div className="opacity-30">our brain tends to forget things</div>
                <div className="opacity-80">write to remember</div>
                <div className="opacity-20">and read back when you can’t</div>
              </h2>

              <div className="rotate-[140deg] bg-gradient-to-r from-[#FFFFFF] to-[#0621E8] blur-3xl opacity-50 top-[0rem] absolute left-[-10rem] lg:left-[-10rem] lg:top-24 h-[500px] w-[500px] rounded-full"></div>
            </section>

            {/* another section with "writing a diary helps you to" & "reflect yourself" & "value your time" & "appreciate others" & "reduce stress" */}
            <section className="min-h-[75vh] relative   flex items-center ">
              <h2 className="z-10 text-3xl sm:text-5xl  md:ml-56">
                <div className="opacity-30">writing a diary helps you to</div>
                <div className="opacity-80">reflect yourself</div>
                <div className="opacity-30">value your time</div>
                <div className="opacity-20">appreciate others</div>
                <div className="opacity-10">reduce stress</div>
              </h2>
              <div className="absolute right-0 bg-gradient-to-r from-[#FFEC50] to-[#FFAF27] blur-3xl opacity-50 h-[500px] w-[700px] rounded-full"></div>
            </section>

            <section className="  md:grid md:grid-cols-2 items-center py-28">
              <div className=" h-[300px] relative">
                <Image src="/img/feature-text-editor.png" alt="g" layout="fill" objectFit="contain" quality={100} />
              </div>
              <div className="">
                <h4 className="text-3xl sm:text-5xl  text-left">text editor</h4>
                <br></br>
                <p className="text-gray-300  text-2xl max-w-[500px]">to focus on your story we have created a very simplistic text editor - you have all the freedom to express yourself</p>
              </div>
            </section>

            <section className="  md:grid md:grid-cols-2 items-center py-28">
              <div className=" h-[300px] relative">
                <Image src="/img/feature-location.png" alt="g" layout="fill" objectFit="contain" quality={100} />
              </div>
              <div className="">
                <h4 className="text-3xl sm:text-5xl  text-left">location tagging</h4>
                <br></br>
                <p className="text-gray-300  text-2xl max-w-[500px]">to focus on your story we have created a very simplistic text editor - you have all the freedom to express yourself</p>
              </div>
            </section>

            <section className="  md:grid md:grid-cols-2 items-center py-28">
              <div className=" h-[300px] relative">
                <Image src="/img/feature-encryption.png" alt="g" layout="fill" objectFit="contain" quality={100} />
              </div>
              <div className="">
                <h4 className="text-3xl sm:text-5xl  text-left">privacy first</h4>
                <br></br>
                <p className="text-gray-300  text-2xl max-w-[500px]">
                  since writings are as personal as it gets - all your writings will be encrypted before they are uploaded. We use a privat key that you only now. Nobody can read your writings.
                </p>
              </div>
            </section>

            <section className="md:grid md:grid-cols-2 items-center py-28">
              <div className=" h-[500px] relative">
                <Image src="/img/feature-mail-reminder.png" alt="g" layout="fill" objectFit="contain" quality={100} />
              </div>
              <div className="">
                <h4 className="text-3xl sm:text-5xl  text-left">reminder</h4>
                <br></br>
                <p className="text-gray-300  text-2xl max-w-[500px]">
                  in this busy world it can be easy to forget to pause and reflect. Decide how you like to be reminded to take some time to write.
                </p>
              </div>
            </section>

            {/* footer at the bottom of the page */}
            <footer className="relative mt-auto h-[42rem]">
              <section className="z-50 h-screen sm:h-auto sm:left-5 lg:left-32 mx-auto pt-32 md:pt-48 lg:pt-64 pb-4 relative">
                <SignUpForm />
              </section>
              {/* place to yellow circels 100px next to each other horizontally with overlap */}
              <div className="absolute bottom-[-20rem] left-0 w-full h-full">
                <div className="bg-gradient-to-r from-[#FFFFFF] to-[#0621E8] blur-3xl opacity-50 bottom-[0rem] absolute left-[10rem] lg:left-[32rem] h-[700px] w-[700px] rounded-full"></div>
                <div className="bg-gradient-to-r from-[#50FFDC] to-[#50FFDC] blur-3xl opacity-50 bottom-[0rem] absolute righ-[15rem] lg:right-[32rem] h-[700px] w-[700px] rounded-full"></div>
              </div>
              {/* text in the middle of the foot at the bottom of the page */}
              <div className="w-full absolute bottom-10 z-50">
                <h2 className="text-xl sm:text-xl text-center">
                  <p className="text-white">
                    <span className="text-white opacity-60">deja</span>
                    <span className="text-white opacity-100">vuuu</span>
                  </p>
                </h2>
                <Link className="text-sm sm:text-xl text-center z-50" href="/" locale={router.locale === "en" ? "de" : "en"}>
                  <button className="text-white">{router.locale === "en" ? "Deutsch" : "English"}</button>
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </main>
    </>
  );
}

export function SignUpForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [registerOnWaitinglist, setRegisterOnWaitinglist] = useState(false);
  const [email, setEmail] = useState(false);

  const onSubmit = async (data) => {
    // upload data to server
    const res = await fetch("/api/notion", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: watch("email") }),
    });

    if (res.ok !== true) {
      setRegisterOnWaitinglist("error");
      return false;
    }

    // post response to console
    const json = await res.json();
    console.log(json);

    setEmail(watch("email"));
    setRegisterOnWaitinglist(true); // set response
  };

  return (
    <div className="absolute mt-12 dark:bg-slate-800 bg-white border-sm border-gray-300 w-full max-w-screen-sm flex flex-col p-4 rounded-xl mb-2">
      {!registerOnWaitinglist && (
        <>
          <h2 className="mb-2  text-2xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#FFEC50] to-[#FFAF27] leading-6">Join the waiting list →</h2>
          <p className="text-gray-300">
            We will inform you as soon as we launch our beta{" "}
            <span role="img" aria-label="thumbs-up">
              👍
            </span>
          </p>

          <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
            <input className="outline-none dark:bg-slate-800" placeholder="max@minimum.com" autoComplete="email" type="email" {...register("email", { required: true })} />
            <button className="bg-gradient-to-r from-[#FFEC50] text-white py-1 px-4 absolute right-2 rounded-lg to-[#FFAF27]" type="submit">
              Join
            </button>
          </form>
        </>
      )}
      {registerOnWaitinglist == true && (
        <>
          <h2 className="mb-2  text-2xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#FFEC50] to-[#FFAF27] leading-6">You are on the waiting list</h2>
          <p className="text-gray-300">
            We will inform you as soon as we launch our beta{" "}
            <span role="img" aria-label="thumbs-up">
              👍
            </span>
          </p>
          <br></br>
          <p className="mt-2 text-blue-300">{email}</p>
        </>
      )}
      {registerOnWaitinglist == "error" && (
        <>
          <h2 className="mb-2  text-2xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#FFEC50] to-[#FFAF27] leading-6">Unfortunately, we could not add your email address to the waiting list.</h2>
          <p className="text-gray-300">
            Please try again later or contact us.
          </p>
          <br></br>
          <p className="mt-2 text-blue-300">vuuu@arrenberg.studio</p>
        </>
      )}
    </div>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
