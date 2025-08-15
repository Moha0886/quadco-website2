"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function AboutUsPage() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // Use only images that exist in /public
  const images = [
    "/file.svg",
    "/globe.svg",
    "/window.svg"
  ];

  return (
    <main className="min-h-screen text-gray-800" style={{background: 'linear-gradient(135deg, #003366 0%, #e0e7ef 100%)'}}>
      {/* Company Name & Slogan */}
      <section className="text-center py-10 px-4">
        <h1 className="text-4xl font-bold">Quadco Consults</h1>
        <p className="text-xl mt-2 text-blue-700">Simplifying work, accelerating growth.</p>
      </section>

      {/* About Us */}
      <section className="max-w-4xl mx-auto py-8 px-4 text-center">
        <h2 className="text-3xl font-semibold mb-4">About Us</h2>
        <p className="text-lg">
          Quadco Consults transforms your ideas into new products and services through leading-edge technology expertise and business domain knowledge. We help organizations achieve operational excellence and sustainable growth.
        </p>
      </section>

      {/* Vision & Mission */}
      <section className="bg-gray-100 py-12 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Our Vision</h3>
            <p>To provide the most innovative customer-focused offerings.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
            <p>To become known as the best enabler for operational efficiency improvement, leveraging technology and expertise.</p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="max-w-4xl mx-auto py-12 px-4">
        <h3 className="text-2xl font-semibold mb-4 text-center">Core Service Areas</h3>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 list-disc pl-5">
          <li>IT Transformation</li>
          <li>Advisory</li>
          <li>Infrastructure & Operations</li>
          <li>Engineering</li>
          <li>Facility Management</li>
          <li>Security</li>
          <li>Oil & Gas</li>
        </ul>
      </section>

      {/* QAQC Policy */}
      <section className="bg-gray-50 py-12 px-4 max-w-5xl mx-auto">
        <h3 className="text-2xl font-semibold mb-4 text-center">Quality Policy (QAQC)</h3>
        <p className="text-md leading-relaxed">
          At QUADCO, we aim to become the lead provider of solutions in all industries we are active in across Nigeria. To achieve this, we are committed to a policy of total quality excellence with a goal of zero non-conformities. We ensure products and services meet their intended purpose and performance criteria, satisfying customer requirements and safeguarding health and safety for all stakeholders. Our objectives include operating competitively and successfully, preventing injuries, ill health, and environmental pollution, and guaranteeing long-term viability through expansion, market share, and profitability. Management assures: Clear definition and documentation of organization, responsibilities, authorities, interfaces, and objectives. Proper documentation of the Quality Management System. Regular audits to verify management systems and processes. Continuous quality improvement programs. Highly competent personnel, with periodic appraisal and training. Policy communication, understanding, acceptance, implementation, and maintenance throughout the organization. Framework for setting, reviewing objectives, and periodic policy review.
        </p>
      </section>

      {/* HSE Policy */}
      <section className="bg-gray-100 py-12 px-4 max-w-5xl mx-auto">
        <h3 className="text-2xl font-semibold mb-4 text-center">HSE Policy</h3>
        <p className="text-md leading-relaxed">
          The long-term business success of Quadco depends on our ability to continually improve the quality of our services and products while protecting people and the environment. Emphasis must be placed on ensuring human health, operational safety, environmental protection, quality enhancement, and community goodwill. This commitment is in the best interests of our customers, employees, contractors, stockholders, and the communities in which we live and work. Quadco requires the active commitment to, and accountability for, HSE from all employees and contractors. Line management has a leadership role in communicating, implementing, and ensuring compliance with HSE policies and standards. We are committed to: Protect and strive for improvement of the health, safety and security of our personnel and clients at all times. Eliminate quality non-conformances and HSE accidents. Meet specified customer requirements and ensure continuous customer satisfaction. Set Quality & HSE performance objectives, measure results, assess and continually improve processes, services and product quality through the use of an effective management system. Plan for, respond to and recover from any emergency, crisis and business disruption. Minimise our impact on the environment through pollution prevention, reduction of natural resource consumption and emissions, and the reduction and recycling of waste. Apply our technical skills to all HSE aspects in the design and engineering of our services and products. Communicate openly with stakeholders and ensure an understanding of our HSE policies, standards, programs and performance. Reward outstanding HSE performance. Improve our performance on issues relevant to our stakeholders that are of global concern and on which we can have an impact, and share with them our knowledge of successful HSE programs and initiatives.
        </p>
      </section>

      {/* Image Slider at the bottom */}
      <section className="w-full mt-12">
        <Slider {...sliderSettings}>
          {images.map((src, index) => (
            <div key={index}>
              <img src={src} alt={`Slide ${index + 1}`} className="w-full h-[150px] object-contain bg-blue-50" />
            </div>
          ))}
        </Slider>
      </section>
    </main>
  );
}
