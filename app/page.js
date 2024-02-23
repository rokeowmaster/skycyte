import Image from "next/image";
import { getAbout, getContacts, getServices } from "@/queries";
import {useContext} from 'react';
import Navbar from "@/components/Navbar";

export default async function Home() {

  const conts = await getContacts()
  const about = await getAbout()
  const services = await getServices()

  // console.log(services)
  return (
    <main className="">
      <Navbar />
      <Image src="/banner.jpg" height={200} width={1024} className="w-full" alt="banner"/>
      <div className="flex justify-between gap-8 mx-8 mt-6">
        <section className="text-center">
          <Image src="/about.png" width={100} height={100} alt="about-icon" className="mx-auto" />
          <h4 className="text-blue-600 font-bold">Who we are</h4>
          {about && about.map(about=>(
            <p key={about._id}>{about.companyDescription}</p>
          ))}
          <a href="/about">More</a>
        </section>
        <section className="text-center">
          <Image src="/services.png" width={100} height={100} alt="services-icon" className="mx-auto" />
          <h4 className="text-blue-600 font-bold">Specialty services</h4>
          <p>We are full-service distributor of medical supplies and equipment focused on providing exceptional service in the Home Health, Hospice and Medical Equipment.</p>
           <a href="/services">More</a>
        </section>
        <section className="text-center">
          <Image src="/product.webp" width={100} height={100} alt="about-icon" className="mx-auto" />
          <h4 className="text-blue-600 font-bold">Product range</h4>
          <p>We market a wide range of non pharmaceutical products covering both the scope of the WHO's essential non-pharm list and the most recent cutting-edge medical equipments <a href="/products">More</a></p>
        </section>
      </div>

      <div className="flex justify-between gap-8mt-8 mx-8 text-center">
        <section>
          <h4>Diagnostic Equipment </h4>
          <p>Whether your are looking for medical diagnostic equipment for your practice, searching for a product for personal use, or just looking to find the best prices, we offer an assortment of products at different price ranges to match a variety of customer needs.</p>
          <br></br>
          <h4>Nursing Equipment</h4>
          <p>From scrubs and footwear to kits and accessories, Medileads Agencies has your nursing equipment and nursing supplies needs covered. </p>
        
        </section>
        <section>
          <h4>Consumable Supplies</h4>
          <p>Consumable medical supplies and disposable medical supplies are always in demand. We offer product options and pricing to suit every budget. Whether you are purchasing on behalf of a large organisation or you are a sole practitioner, you will find what you need.</p>
          <br></br>
          <h4>Medical Furniture</h4>
          <p>Having the right medical furniture helps you to meet patient needs and streamline your work flow. Find all these at Medileads at a budget price.</p>
        
        </section>
        <section>
          <Image src="/aside.PNG" width={1200} height={900} alt="" />
        </section>
      </div>

    </main>
  );
}
