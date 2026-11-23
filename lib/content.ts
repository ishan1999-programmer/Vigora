export type Product = {
  slug: string;
  name: string;
  image: string;
  alt: string;
  intro?: string;
  specifications: string[];
  features: string[];
  table?: { headers: string[]; rows: string[][] };
};

export const products: Product[] = [
  {
    slug: 'soft-flow-dyeing-machine', name: 'Soft Flow Dyeing Machine', image: '/images/soft-flow.jpg', alt: 'Soft Flow textile dyeing machine shown in the brochure',
    intro: 'The Soft Flow Dyeing Machine is suitable for dyeing a wide range of knitted and woven fabric construction in rope form.',
    specifications: ['Fully automatic PLC control', 'High quality body material: SS 316 L', 'Machine capacity: 20 kg to 1200 kg', 'Low liquor ratio: 4 to 6', 'Suitable for all types of fabric', 'Fabric loading from 20 kg up to 1200 kg', 'Maximum fabric speed: 300 mtr/min', 'High temperature: maximum 140°C', 'Suitable for 60 to 800 gsm fabric', 'Pre-heated tank (optional)'],
    features: ['Fully automatic PLC & HMI', 'Flow meter to calculate accurate water consumption & control', 'Magnetic water level indication', 'Analogue level sensor for main vessel & pressure transducer sensor for cool tank', 'Suitable for all kinds of fabric like Rayon, Viscose, Cotton, PV & PC', 'Seam detector to calculate cycle time', 'Low power consumption', 'Low piling effect'],
    table: { headers: ['Model No.', 'VS-150', 'VS-300', 'VS-450', 'VS-600', 'VS-750', 'VS-900'], rows: [['No. of Tube', '1', '2', '3', '4', '5', '6'], ['Capacity (Kg.)', '150', '300', '450', '600', '900', '1200'], ['Length (MM)', '2500', '3500', '4300', '6000', '7600', '9200'], ['Width (MM)', '4500', '4500', '4500', '4500', '4500', '4500'], ['Height (MM)', '3700', '3700', '3700', '3700', '3700', '3700']] }
  },
  {
    slug: 'hthp-u-jet-fabric-dyeing-machine', name: 'HTHP ‘U’-Jet Fabric Dyeing Machine', image: '/images/u-jet.jpg', alt: 'HTHP U-Jet fabric dyeing machine shown in the brochure',
    specifications: ['Fully automatic PLC control', 'High quality body material: SS 316 L', 'Machine capacity: 50 kg to 500 kg', 'Low liquor ratio: 1:3 to 4', 'Suitable for polyester fabric', 'Fabric loading from 50 kg up to 400 kg', 'Maximum fabric speed: 700 mtr./min', 'High temperature: maximum 140°C', 'Suitable for 60 to 400 gsm fabric', 'Pre-heated tank (optional)'],
    features: ['Low liquor ratio reduces water & chemical consumption', 'Reduces thermic & electric energy', 'Lowest maintenance & running cost', 'Hassle-free operation', 'Best quality dyeing result'],
    table: { headers: ['Model No.', 'VJ-50', 'VJ-100', 'VJ-150', 'VJ-250', 'VJ-300', 'VJ-400', 'VJ-500'], rows: [['Capacity (Kg.) Full Basket', '50', '100', '150', '250', '300', '400', '500'], ['Capacity (Kg.) Half Basket', '75', '125', '200', '300', '400', '500', '–'], ['Length (MM)', '1200', '1970', '2080', '2150', '2150', '2200', '2400'], ['Width (MM)', '3250', '4110', '4370', '4530', '4650', '4750', '4950'], ['Height (MM)', '2850', '3300', '3400', '3600', '3950', '4050', '4150']] }
  },
  {
    slug: 'hthp-u-jet-with-reel', name: 'HTHP ‘U’-Jet Dyeing Machine with Reel', image: '/images/u-jet-reel.jpg', alt: 'HTHP U-Jet dyeing machine with reel shown in the brochure',
    specifications: ['U Jet dyeing with fabric reel for continuous and uniform dyeing', 'Ideal for sensitive fabrics like polyester blends, silk and delicate materials', 'Gentle handling with low liquor ratio', 'High dyeing efficiency and excellent color uniformity', 'Energy efficient and user friendly operation', 'Inside reel with silicon rubber', 'Inside reel motor VFD control'],
    features: ['Uniform dyeing', 'Suitable for delicate & sensitive fabrics', 'Low liquor ratio & energy saving', 'Excellent colour result', 'Easy operation and low maintenance'],
    table: { headers: ['Model No.', 'VJR-50', 'VJR-100', 'VJR-200', 'VJR-300', 'VJR-400', 'VJR-500'], rows: [['Capacity (Kg.) Full Basket', '50', '100', '150', '250', '300', '400'], ['Capacity (Kg.) Half Basket', '75', '125', '200', '300', '400', '500'], ['Length (MM)', '1200', '1970', '2080', '2150', '2150', '2200'], ['Width (MM)', '3250', '4110', '4370', '4530', '4650', '4750'], ['Height (MM)', '2850', '3300', '3400', '3600', '3950', '4050']] }
  },
  {
    slug: 'long-top-tube-fabric-dyeing-machine', name: 'Long Top Tube Fabric Dyeing Machine', image: '/images/long-top-tube.jpg', alt: 'Long Top Tube fabric dyeing machine shown in the brochure',
    intro: 'High Performance Dyeing for Uniform Result',
    specifications: ['Highly efficient heat exchanger to ensure the shortest possible dyeing cycle with uniform formation', 'Pressure vessel and all wet parts of machine made of stainless steel 316 L', 'All safety devices required for a pressure vessel are incorporated with the machine', 'Magnetic level indicator duly calibrated in terms of liter', 'Feed pump to colour kitchen tank', 'Fully automatic PLC control', 'Nozzle sizes available: 65 mm to 350 mm', 'Pre-heated tank (optional)'],
    features: ['Uniform dyeing with excellent results', 'High durability and long life', 'Easy operation with PLC control and energy efficient process', 'Suitable for a wide range of fabrics'],
    table: { headers: ['Model No.', 'VLT-100', 'VLT-200', 'VLT-125X2', 'VLT-150X2', 'VLT-250X2'], rows: [['Fabric Loading Capacity (Kg.)', '100', '200', '125x2', '150x2', '250x2'], ['Length (MM)', '1500', '1500', '1700', '1700', '1800'], ['Width (MM)', '8800', '10500', '9000', '9500', '10500'], ['Height (MM)', '2925', '2925', '3200', '3200', '3200']] }
  },
  {
    slug: 'long-bottom-tube-fabric-dyeing-machine', name: 'Long Bottom Tube Fabric Dyeing Machine', image: '/images/long-bottom-tube.jpg', alt: 'Long Bottom Tube fabric dyeing machine shown in the brochure',
    specifications: ['Feed pump to colour kitchen tank', 'Fully automatic PLC control', 'Nozzle sizes available: 65 mm to 350 mm', 'Pre-heated tank (optional)'],
    features: ['Uniform dyeing with excellent results', 'High durability and long life', 'Easy operation with PLC control and energy efficient process', 'Suitable for a wide range of fabrics'],
    table: { headers: ['Model No.', 'VLB-150', 'VLB-200', 'VLB-150X2', 'VLB-250X2'], rows: [['Fabric Loading Capacity (Kg.)', '150', '200', '150x2', '250x2'], ['Length (MM)', '1750', '1750', '2300', '2300'], ['Width (MM)', '10200', '11200', '10300', '11300'], ['Height (MM)', '3100', '3100', '3450', '3450']] }
  },
  {
    slug: 'rotary-drum-washer', name: 'Rotary Drum Washer', image: '/images/rotary-drum-washer.jpg', alt: 'Rotary Drum Washer shown in the brochure',
    specifications: ['Fully automatic with PLC', 'Quick draining system to save time', 'Capacity: 100 kg to 500 kg', 'Temperature: up to 140°C', 'Maximum working pressure: 4 kg/cm2', 'Vessel: SS 316 L or SS 304', 'Main basket rotating by gear motor with inverter', 'Indirect heating system', 'Pre-heated tank (optional)'],
    features: ['Reduce power consumption', 'Reduce thermic energy', 'Reduce maintenance cost', 'Fabric move without bag/with bag'],
    table: { headers: ['Model No.', 'VRD-100', 'VRD-250', 'VRD-400'], rows: [['Capacity (Kg.)', '100', '250', '400'], ['Length (MM)', '2700', '2900', '6550'], ['Width (MM)', '2000', '2300', '2550'], ['Height (MM)', '2100', '2600', '2800']] }
  },
  {
    slug: 'hydro-extractor', name: 'Hydro Extractor', image: '/images/hydro-extractor.jpg', alt: 'Hydro Extractor shown in the brochure',
    specifications: ['Sturdy & robust construction', 'High extraction efficiency', 'Low power consumption', 'Smooth and vibration-free operation', 'Easy operation and maintenance'],
    features: ['Better water extraction', 'Energy saving', 'Longer machine life', 'Safe and reliable performance', 'Suitable for all fabrics types'],
    table: { headers: ['Model No.', 'Capacity in Kgs.', 'Basket Size Dia x Depth (mm)', 'Basket Speed (RPM)'], rows: [['VHE-200', '200', '1525x610', '720'], ['VHE-300', '300', '1525x960', '650'], ['VHE-400', '400', '1525x1140', '600']] }
  },
  {
    slug: 'fabric-weight-reduction-machine', name: 'Fabric Weight Reduction Machine', image: '/images/fabric-weight-reduction.jpg', alt: 'Fabric Weight Reduction Machine shown in the brochure',
    specifications: ['Capacity: 150 to 1000 kg', 'Maximum temperature: up to 98°C', 'Vessel: SS 316L', 'Structure: SS-304', 'Main liquor trough: SS-316', 'Base frame: mild steel', 'Fully automatic with PLC', 'Main pump inverter', 'Pre-heating system for recovery tank'],
    features: ['Sturdy construction', 'Compact design', 'Less energy consumption', 'Longer service life', 'Reduce power consumption', 'Reduce thermic energy', 'Reduce maintenance', 'Lowest running cost'],
    table: { headers: ['Model No.', 'VWR-400', 'VWR-600', 'VWR-800', 'VWR-1000'], rows: [['Capacity (Kg.)', '400', '600', '800', '1000'], ['R. Tank (Liters)', '2200', '3300', '4400', '5500'], ['Length (MM)', '2600', '3100', '3600', '4200'], ['Width (MM)', '4900', '4900', '4900', '4900'], ['Height (MM)', '4350', '4350', '4350', '4350']] }
  }
];

export const automationSolutions = [
  'Dyeing Controllers', 'PLC & HMI Control Systems', 'Process Automation', 'Temperature Control',
  'Level Control', 'Motor Drives & VFD Solutions', 'Sensors & Instrumentation', 'SCADA & Remote Monitoring'
];

export const automationBenefits = [
  'Enhanced Productivity', 'Improved Fabric Quality', 'Energy & Cost Savings', 'Reliable & Safe Operation', 'Easy Integration'
];

export const contacts = {
  addresses: [
    { label: 'Works', lines: ['L/5108, Road No. 51, Near State Bank of India', 'G.I.D.C. Sachin, Surat - 394230 (INDIA)'] },
    { label: 'Head Office', lines: ['106, Mulberry Haven, Sonari, Bhestan,', 'Surat - 395023 (INDIA)'] },
    { label: 'Delhi NCR Branch', lines: ['Plot No. 1/1, Indra Industrialian Complex, Budhena Chowk,', 'Faridabad-121002'] },
    { label: 'Mumbai Branch', lines: ['Nanotek Industrial Automation', '101, CFC Building No 3, Asmeeta Textile Park, M.I.D.C.,', 'Plot No. 1, Additional Kalyan Bhiwandi Indl. Area,', 'Kongaon, Bhiwandi, Thane, Maharashtra - 421311 (INDIA)'] }
  ],
  phones: ['9313046720', '9999686720', '9167710008'],
  emails: ['vigoramachineworks@gmail.com', 'nanotekautomation@yahoo.com', 'nanotekagencies@gmail.com'],
  websites: ['www.vigoramachineworks.com', 'www.nanotekindia.in']
};

export const companyIntro = [
  'We would like to take this opportunity to introduce our companies, Vigora Machine Works and Nanotek Agencies, as reliable partners for your industrial requirements.',
  'Based in Surat, Gujarat, we cater to clients across all over India. With an experience of more than two decades in the industry, we have built a strong reputation for quality, reliability, and customer satisfaction.',
  'Vigora Machine Works is engaged in the manufacturing and supply of high-quality textile processing machinery. We are committed to delivering efficient, durable, and technologically advanced solutions tailored to meet the evolving needs of the textile industry.',
  'Nanotek Agencies, on the other hand, specializes in providing automation solutions along with a wide range of spares, instruments, and sensors. Our focus is on enhancing operational efficiency, precision, and productivity through reliable and innovative products.',
  'With our combined expertise and customer-centric approach, we aim to provide complete and dependable solutions under one roof. We assure you of our best quality products, competitive pricing, and prompt service support at all times.'
];
