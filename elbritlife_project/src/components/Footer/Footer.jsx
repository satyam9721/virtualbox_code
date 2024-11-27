import { SlLocationPin } from "react-icons/sl";
import Footer_cart from "../Footer_Cart/Footer_cart";

export default function Footer() {
  return (
    <div className="bg-[#17414f] text-white px-40 py-6 text-xs -mb-0">
      <div className="flex flex-row items-center justify-start gap-10 p-4">
        <Footer_cart details="Phone Number" text="+974 3118 1843" />
        <Footer_cart details="Email Address" text="Elbrithcqhr@gmail.com" />
        <Footer_cart details="Office Location" text=" Ambassador Street, Zone 61,"/>
      </div>
      <div className="flex flex-row gap-10 py-3">
        <div>logo</div>
        <div>
          <p>
            Your health, physical and emotional well-being is important to us.
            We are always by your side and have made it eventhe necessary vitamins.
          </p>
        </div>
      </div>
      <div className="">
        <p className="flex items-center justify-start gap-1 ">
          {" "}
          <SlLocationPin /> Elbrit Life Sciences Private Limited. C20, BKC, G
          Block, Mumbai 400051
        </p>
      </div>
    </div>
  );
}
