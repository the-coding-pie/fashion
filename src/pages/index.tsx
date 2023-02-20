import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <div className="home w-full h-full">
        <div className="my-container mb-8">
          <section className="hero bg-lightWhite flex items-center gap-x-12 rounded-[59px] w-full px-12 pt-12 min-h-[70vh]">
            <div className="content">
              <h1 className="text-7xl text-black font-black">
                <div className="inline-block bg-white -rotate-2 px-6">
                  <div className="rotate-2">LET'S</div>
                </div>
                <div className="px-6">
                  <div className="leading-[97px]">EXPLORE</div>
                </div>
                <div className="bg-primary -rotate-2 px-6 inline-block">
                  <div className="rotate-2">UNIQUE</div>
                </div>
                <div className="px-6">
                  <div className="leading-[97px]">CLOTHES.</div>
                </div>
              </h1>

              <p className="mt-2 mb-7 pl-6">
                Live for Influential and Innovative fashion!
              </p>

              <div className="action flex items-center gap-x-4 mb-12">
                <Image
                  src={"/assets/shape.svg"}
                  width={110}
                  height={28}
                  alt="shape"
                />
                <button className="btn primary text-base px-5">Shop Now</button>
              </div>
            </div>
            <div className="image flex-1 h-full relative">
              <Image
                src={"/assets/star.svg"}
                width={36}
                height={36}
                alt="star 1 left"
                className="absolute left-0 top-0"
              />
              <Image
                src={"/assets/star.svg"}
                width={36}
                height={36}
                alt="star 2 right"
                className="absolute right-14 top-7"
              />
              <Image
                src={"/assets/star.svg"}
                width={36}
                height={36}
                alt="star 2 bottom left"
                className="absolute left-0 bottom-6"
              />
              <Image
                src={"/assets/star.svg"}
                width={36}
                height={36}
                alt="star 2 bottom right"
                className="absolute right-0 bottom-14"
              />
              <Image
                src={"/assets/bannerGirl.svg"}
                width={870}
                height={784}
                alt="happy girl"
                className="object-cover w-full h-full"
              />
            </div>
          </section>
        </div>

        <section className="brands bg-primary flex items-center justify-between gap-x-6 px-[72px] py-6 mb-8">
          <Link href={""}>
            <Image
              src={"/assets/logos/hnm.png"}
              width={90}
              height={69}
              alt="h and m"
            />
          </Link>
          <Link href={""}>
            <Image
              src={"/assets/logos/obey.png"}
              width={90}
              height={69}
              alt="obey"
            />
          </Link>
          <Link href={""}>
            <Image
              src={"/assets/logos/shopify.png"}
              width={112}
              height={69}
              alt="shopify"
            />
          </Link>
          <Link href={""}>
            <Image
              src={"/assets/logos/lacoste.png"}
              width={112}
              height={69}
              alt="lacoste"
            />
          </Link>
          <Link href={""}>
            <Image
              src={"/assets/logos/levis.png"}
              width={90}
              height={69}
              alt="levis"
            />
          </Link>
          <Link href={""}>
            <Image
              src={"/assets/logos/amazon.png"}
              width={90}
              height={69}
              alt="amazon"
            />
          </Link>
        </section>

        <section className="new-arrivals my-container mb-24">
          <div className="title relative w-max mb-12">
            <h2 className="text-3xl font-black">NEW ARRIVALS</h2>
            <Image
              src={"/assets/shape.svg"}
              width={110}
              height={28}
              alt="shape"
              className="absolute right-0 bottom-0 -z-10"
            />
          </div>

          <div className="items grid grid-cols-3 gap-x-12">
            <Link href={""} className="inline-block">
              <div className="item">
                <Image
                  src={"/assets/girl1.png"}
                  width={484}
                  height={600}
                  alt="girl 1"
                  className="w-full h-full object-cover mb-4"
                />
                <div className="bottom flex items-center justify-between">
                  <div className="left">
                    <h4 className="text-lg font-medium leading-5">
                      Hoodies & Sweetshirt
                    </h4>
                    <span className="text-sm font-medium text-gray-500">
                      Explore Now!
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5 text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </div>
              </div>
            </Link>
            <Link href={""} className="inline-block">
              <div className="item">
                <Image
                  src={"/assets/girl2.png"}
                  width={484}
                  height={600}
                  alt="girl 2"
                  className="w-full h-full object-cover mb-4"
                />
                <div className="bottom flex items-center justify-between">
                  <div className="left">
                    <h4 className="text-lg font-medium leading-5">
                      Coats & Parkas
                    </h4>
                    <span className="text-sm font-medium text-gray-500">
                      Explore Now!
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5 text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </div>
              </div>
            </Link>
            <Link href={""} className="inline-block">
              <div className="item">
                <Image
                  src={"/assets/girl3.png"}
                  width={484}
                  height={600}
                  alt="girl 3"
                  className="w-full h-full object-cover mb-4"
                />
                <div className="bottom flex items-center justify-between">
                  <div className="left">
                    <h4 className="text-lg font-medium leading-5">
                      Tees & T-Shirt
                    </h4>
                    <span className="text-sm font-medium text-gray-500">
                      Explore Now!
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5 text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </section>

        <section
          className="ad h-[600px] my-container flex gap-x-8 mb-24"
          style={{
            background:
              "linear-gradient(1.32deg, #E0C340 0.13%, #DFC23E 3.97%, #E1C441 7.2%, #E3C743 10.13%, #E4C542 12.98%, #E6C744 15.99%, #E7C845 19.52%, #E5C643 23.96%, #E6C945 30.43%, #E3C743 36.49%, #E9CA48 42.49%, #EDCE49 49.35%, #F0D44C 55.42%, #F4D84F 61.43%, #F6DA52 65.74%, #F7DB53 72.23%, #F9DD55 77.43%, #F9DF56 83.84%, #FAE157 91.52%, #F9DF56 97.87%)",
          }}
        >
          <div className="image flex-1 h-full relative">
            <Image
              src={"/assets/star.svg"}
              width={36}
              height={36}
              alt="star 1 left"
              className="absolute left-28 top-28"
            />
            <Image
              src={"/assets/star.svg"}
              width={36}
              height={36}
              alt="star 2 right"
              className="absolute right-28 top-20"
            />
            <Image
              src={"/assets/star.svg"}
              width={36}
              height={36}
              alt="star 2 bottom left"
              className="absolute left-36 bottom-48"
            />
            <Image
              src={"/assets/star.svg"}
              width={36}
              height={36}
              alt="star 2 bottom right"
              className="absolute right-28 bottom-36"
            />
            <Image
              src={"/assets/girlYellow.png"}
              width={870}
              height={784}
              alt="thinking girl"
              className="object-contain w-full h-full drop-shadow-2xl"
            />
          </div>

          <div className="content h-full flex flex-col items-start justify-center">
            <h1 className="text-7xl text-black font-black mb-3">
              <div className="inline-block bg-white -rotate-2 px-6">
                <div className="rotate-2">PAYDAY</div>
              </div>
              <div className="px-6">
                <div className="leading-[94px]">SALE NOW</div>
              </div>
            </h1>

            <p className="mb-3 px-6 font-medium">
              Spend minimal $100 get 30% off <br /> voucher code for your next
              purchase
            </p>
            <h3 className="font-bold px-6">1 June - 10 June 2021</h3>
            <p className="mb-4 px-6 text-sm">*Terms & Conditions apply</p>
            <button className="btn primary ml-6 font-medium">SHOP NOW</button>
          </div>
        </section>

        <section className="youngs-favourite my-container mb-24">
          <div className="title relative w-max mb-12">
            <h2 className="text-3xl font-black">Young’s Favourite</h2>
            <Image
              src={"/assets/shape.svg"}
              width={110}
              height={28}
              alt="shape"
              className="absolute right-0 bottom-0 -z-10"
            />
          </div>

          <div className="cards grid grid-cols-2 gap-x-8">
            <Link href={""} className="inline-block">
              <div className="item">
                <Image
                  src={"/assets/girl4.png"}
                  width={484}
                  height={808}
                  alt="girl 4"
                  className="w-full h-full object-cover mb-4"
                />
                <div className="bottom flex items-center justify-between">
                  <div className="left">
                    <h4 className="text-lg font-medium leading-5">
                      Trending on instagram
                    </h4>
                    <span className="text-sm font-medium text-gray-500">
                      Explore Now!
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5 text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </div>
              </div>
            </Link>
            <Link href={""} className="inline-block">
              <div className="item">
                <Image
                  src={"/assets/girl5.png"}
                  width={484}
                  height={808}
                  alt="girl 5"
                  className="w-full h-full object-cover mb-4"
                />
                <div className="bottom flex items-center justify-between">
                  <div className="left">
                    <h4 className="text-lg font-medium leading-5">
                      All Under $40
                    </h4>
                    <span className="text-sm font-medium text-gray-500">
                      Explore Now!
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5 text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </section>

        <section className="app-store my-container mb-20 flex items-center justify-center gap-x-44">
          <div className="left">
            <h3 className="mb-5 font-black text-2xl">
              DOWNLOAD APP & <br /> GET THE VOUCHER!
            </h3>
            <p className="text-gray-500 mb-5 text-sm">
              Get 30% off for first transaction using <br /> Rondovision mobile
              app for now.
            </p>

            <div className="buttons flex items-center gap-x-2">
              <button className="w-[140px] h-[60px]">
                <Image
                  src={"/assets/appStore.png"}
                  width={204}
                  height={71}
                  alt="app store"
                  className="
                  w-full h-full object-contain"
                />
              </button>
              <button className="w-[140px] h-[60px]">
                <Image
                  src={"/assets/playStore.png"}
                  width={204}
                  height={71}
                  alt="play store"
                  className="w-full h-full object-contain"
                />
              </button>
            </div>
          </div>

          <Image
            src={"/assets/mobile.png"}
            width={400}
            height={710}
            alt="mobile"
          />
        </section>

        <section className="join-community bg-primary text-center flex flex-col items-center justify-center h-[350px]">
          <h4 className="font-black text-2xl mb-2 text-white">
            JOIN SHOPPING COMMUNITY TO <br /> GET MONTHLY PROMO
          </h4>
          <p className="text-gray-100 mb-4">
            Type your email down below and be young wild generation
          </p>
          <div className="input p-1 text-sm rounded-lg bg-white">
            <input
              type="text"
              placeholder="Add your email here"
              className="bg-transparent w-52 px-4 pl-2 outline-none border-none"
            />
            <button className="btn primary py-2 px-6">SEND</button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
