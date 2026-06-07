/* ==========================================================================
   ESportsArena Design System // Application Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const compiledPromptCode = document.getElementById('compiledPromptCode');
  const copyBtn = document.getElementById('copyBtn');
  const advancedToggle = document.getElementById('advancedToggle');
  const advancedAccordion = document.getElementById('advancedAccordion');
  const advancedContent = document.getElementById('advancedContent');
  
  const customNicheGroup = document.getElementById('customNicheGroup');
  const customNicheInput = document.getElementById('customNicheInput');

  const servicesCheckboxContainer = document.getElementById('servicesCheckboxContainer');
  const customServiceInput = document.getElementById('customServiceInput');
  const addCustomServiceBtn = document.getElementById('addCustomServiceBtn');

  // Form Fields
  const fields = {
    bizName: document.getElementById('bizName'),
    bizNiche: document.getElementById('bizNiche'),
    colorPalette: document.getElementById('colorPalette'),
    designVibe: document.getElementById('designVibe'),
    mainCTA: document.getElementById('mainCTA'),
    tagline: document.getElementById('tagline'),
    address: document.getElementById('address'),
    phone: document.getElementById('phone'),
    email: document.getElementById('email'),
    hours: document.getElementById('hours'),
    secondaryCTA: document.getElementById('secondaryCTA'),
    typographyStyle: document.getElementById('typographyStyle'),
    colorMode: document.getElementById('colorMode'),
    ruleSEO: document.getElementById('ruleSEO'),
    ruleResponsive: document.getElementById('ruleResponsive'),
    ruleComponents: document.getElementById('ruleComponents')
  };

  // Niche configuration with array of choices for services
  const nicheDefaults = {
    "Roofing Services": {
      tagline: "Trusted Roofing & Restoration Specialists in North County",
      services: [
        "Residential Roofing",
        "Commercial Roofing",
        "Roof Repair",
        "Leak Inspections",
        "Storm Damage Restoration",
        "Gutter Installation"
      ],
      cta: "Schedule Free Estimate"
    },
    "Esports & Gaming Center": {
      tagline: "High-Performance Gaming Arena & Tournament Center",
      services: [
        "Hourly Gaming PC Rentals",
        "Weekly Esports Tournaments",
        "Private VIP Team Rooms",
        "Console Gaming Lounges",
        "Food & Beverage Hub"
      ],
      cta: "Book Gaming Station"
    },
    "Fitness & Crossfit Gym": {
      tagline: "Unleash Your Power - Elite Performance Coaching",
      services: [
        "Group CrossFit Classes",
        "One-on-One Strength Coaching",
        "Olympic Weightlifting",
        "Nutrition Consulting",
        "Open Gym Access"
      ],
      cta: "Claim Free Trial Class"
    },
    "Specialty Coffee Shop": {
      tagline: "Craft Roasted Coffee & House-Baked Goods",
      services: [
        "Single-Origin Pour Overs",
        "Signature Espresso Beverages",
        "Artisanal Bakery Goods",
        "Whole Bean Retail",
        "Barista Training Workshops"
      ],
      cta: "Order Online Now"
    },
    "Creative Web Agency": {
      tagline: "Premium Visual Identities & Custom Digital Platforms",
      services: [
        "Custom Website Design",
        "Brand Strategy",
        "High-End Web Applications",
        "Search Engine Optimization",
        "Digital Marketing Campaigns"
      ],
      cta: "Book Strategy Session"
    },
    "Software & SaaS Development": {
      tagline: "High-Performance Software Engineering & Custom SaaS Solutions",
      services: [
        "Custom SaaS Development",
        "Cloud Architecture Design",
        "Mobile App Engineering",
        "Enterprise Software Systems",
        "DevOps & CI/CD Deployment",
        "API Integration & Development"
      ],
      cta: "Request Project Proposal"
    },
    "IT Support & Tech Solutions": {
      tagline: "Reliable Managed IT Services & Security Systems",
      services: [
        "Network Setup & Security",
        "Cybersecurity Auditing",
        "Cloud Migration Services",
        "24/7 Managed IT Support",
        "Data Recovery & Backup",
        "Smart Hardware Deployment"
      ],
      cta: "Request IT Audit"
    },
    "High-End Steakhouse": {
      tagline: "Prime Dry-Aged Steaks & Curated Wine Pairings",
      services: [
        "Signature USDA Prime Steaks",
        "Fresh Seafood Selection",
        "Handcrafted Cocktails",
        "Private Event Dining",
        "Chef's Tasting Experience"
      ],
      cta: "Reserve a Table"
    },
    "Dental Practice": {
      tagline: "Modern Cosmetic & Family Dentistry in a Gentle Environment",
      services: [
        "Preventative Teeth Cleanings",
        "Cosmetic Bonding & Veneers",
        "Professional Teeth Whitening",
        "Dental Implants",
        "Invisalign Clear Aligners"
      ],
      cta: "Schedule Appointment"
    },
    "Pet Grooming & Spa": {
      tagline: "Premium Care & Pampering for Your Best Friends",
      services: [
        "Dog Grooming",
        "Cat Grooming",
        "Luxury Bathing",
        "Nail Trimming",
        "Hair Dematting",
        "Pet Massage"
      ],
      cta: "Book Grooming Session"
    },
    "Law Firm & Legal Services": {
      tagline: "Dedicated Legal Defense & Trusted Counsel",
      services: [
        "Criminal Defense",
        "Personal Injury Cases",
        "Family Law Counsel",
        "Estate Planning & Wills",
        "Business Consulting",
        "Contract Review & Drafting"
      ],
      cta: "Schedule Consultation"
    },
    "Barbershop & Hair Salon": {
      tagline: "Classic Cuts & Modern Styling for the Modern Gentleman/Woman",
      services: [
        "Precision Haircuts",
        "Hot Towel Shaves",
        "Beard Grooming & Styling",
        "Hair Coloring",
        "Keratin Treatments",
        "Styling & Blowouts"
      ],
      cta: "Book Appointment"
    },
    "Auto Repair & Detailing": {
      tagline: "Expert Auto Repairs & Premium Detailing Services",
      services: [
        "Engine Diagnostics",
        "Brake Replacements",
        "Oil & Filter Change",
        "Exterior Detailing",
        "Paint Correction",
        "Ceramic Coating Protection"
      ],
      cta: "Book Service"
    },
    "Real Estate Agency": {
      tagline: "Helping You Find Your Way Home",
      services: [
        "Residential Buying",
        "Seller Representation",
        "Property Valuation",
        "Commercial Leasing",
        "Rental Placements",
        "Market Analysis"
      ],
      cta: "Schedule Home Valuation"
    },
    "Plumbing & HVAC Services": {
      tagline: "Reliable Heating, Cooling & Plumbing Specialists",
      services: [
        "Leak Repairs",
        "HVAC Installation",
        "Pipe Unclogging",
        "Furnace Maintenance",
        "Water Heater Service",
        "Drain Cleaning"
      ],
      cta: "Request Emergency Repair"
    },
    "Bakery & Pastry Shop": {
      tagline: "Freshly Baked Happiness Everyday",
      services: [
        "Custom Birthday Cakes",
        "Artisanal Bread Selection",
        "Wedding Cakes",
        "French Pastries",
        "Catering Platters",
        "Baking Classes"
      ],
      cta: "Order Custom Cake"
    },
    "Medical Clinic": {
      tagline: "Compassionate Care for Your Family's Health",
      services: [
        "General Checkups",
        "Pediatric Care",
        "Immunizations",
        "Chronic Disease Management",
        "Telehealth Consultations",
        "Lab Testing & Diagnostics"
      ],
      cta: "Book Doctor's Visit"
    },
    "Custom Niche": {
      tagline: "Premium Quality Services Tailored to Your Specific Needs",
      services: [
        "Premium Service A",
        "Professional Service B",
        "Specialty Service C"
      ],
      cta: "Contact Us Today"
    }
  };

  // Helper function to create service checkbox DOM
  function createServiceCheckbox(serviceText) {
    const label = document.createElement('label');
    label.className = 'custom-checkbox';
    
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.checked = true;
    input.value = serviceText;
    input.addEventListener('change', compilePrompt);
    
    const boxSpan = document.createElement('span');
    boxSpan.className = 'box';
    
    const textSpan = document.createElement('span');
    textSpan.className = 'label-text';
    textSpan.textContent = serviceText;
    
    label.appendChild(input);
    label.appendChild(boxSpan);
    label.appendChild(textSpan);
    
    servicesCheckboxContainer.appendChild(label);
  }

  // Populate dynamic service checkboxes based on Niche
  function updateServicesList(niche) {
    servicesCheckboxContainer.innerHTML = '';
    const defaults = nicheDefaults[niche];
    if (defaults && defaults.services) {
      defaults.services.forEach(service => {
        createServiceCheckbox(service);
      });
    }
  }

  // Handle custom service additions
  addCustomServiceBtn.addEventListener('click', () => {
    const text = customServiceInput.value.trim();
    if (text) {
      createServiceCheckbox(text);
      customServiceInput.value = '';
      compilePrompt();
    }
  });

  customServiceInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addCustomServiceBtn.click();
    }
  });

  // Initialize form with defaults when niche changes
  fields.bizNiche.addEventListener('change', (e) => {
    const val = e.target.value;
    if (nicheDefaults[val]) {
      fields.tagline.value = nicheDefaults[val].tagline;
      fields.mainCTA.value = nicheDefaults[val].cta;
      updateServicesList(val);
    }
    customNicheGroup.style.display = (val === 'Custom Niche') ? 'block' : 'none';
    compilePrompt();
  });

  customNicheInput.addEventListener('input', compilePrompt);

  // Accordion Toggle
  advancedToggle.addEventListener('click', () => {
    const isActive = advancedAccordion.classList.toggle('active');
    if (isActive) {
      advancedContent.style.maxHeight = advancedContent.scrollHeight + 100 + 'px'; // Add padding offset
    } else {
      advancedContent.style.maxHeight = '0px';
    }
  });

  // Event Listeners for Live Compile on standard fields
  Object.entries(fields).forEach(([key, element]) => {
    if (element) {
      const eventType = element.type === 'checkbox' ? 'change' : 'input';
      element.addEventListener(eventType, compilePrompt);
    }
  });

  // Dynamic Prompt Compilation
  function compilePrompt() {
    const name = fields.bizName.value.trim() || "[Business Name]";
    const niche = (fields.bizNiche.value === 'Custom Niche')
      ? (customNicheInput.value.trim() || 'Custom Niche')
      : fields.bizNiche.value;
    const colors = fields.colorPalette.value;
    const vibe = fields.designVibe.value;
    const mainCTA = fields.mainCTA.value.trim() || "Get Started";
    
    const tagline = fields.tagline.value.trim();
    const address = fields.address.value.trim();
    const phone = fields.phone.value.trim();
    const email = fields.email.value.trim();
    const hours = fields.hours.value.trim();
    const secondaryCTA = fields.secondaryCTA.value.trim();
    const typographyStyle = fields.typographyStyle.value;
    const colorMode = fields.colorMode.value;

    // Get checked services
    const checkedCheckboxes = servicesCheckboxContainer.querySelectorAll('input[type="checkbox"]:checked');
    const selectedServices = Array.from(checkedCheckboxes).map(cb => cb.value);

    // Checkbox Compilation Rules
    const useSEO = fields.ruleSEO.checked;
    const useResponsive = fields.ruleResponsive.checked;
    const useComponents = fields.ruleComponents.checked;

    // Building the prompt structure
    let prompt = `You are a senior creative director and front-end architect specializing in ultra-premium local business websites. 
Build a single-page website for "${name}" – a top-tier provider of ${niche}.

=========================================
CORE PROJECT SPECIFICATIONS
=========================================
- Business Name: ${name}
- Niche/Industry: ${niche}
- Colors & Styling Theme: ${colors}
- Visual Vibe/Design Style: ${vibe}
- Main CTA Action: ${mainCTA}
`;

    if (tagline) prompt += `- Business Tagline: "${tagline}"\n`;
    if (address) prompt += `- Full Address: ${address}\n`;
    if (phone) prompt += `- WhatsApp/Phone: ${phone}\n`;
    if (email) prompt += `- Contact Email: ${email}\n`;
    if (hours) prompt += `- Business Hours: ${hours}\n`;
    if (secondaryCTA) prompt += `- Secondary CTA: ${secondaryCTA}\n`;
    if (typographyStyle) prompt += `- Typography Style: ${typographyStyle}\n`;
    if (colorMode) prompt += `- Color Mode Strategy: ${colorMode}\n`;

    if (selectedServices.length > 0) {
      prompt += `\n=========================================
SERVICES TO HIGHLIGHT
=========================================
List and design individual components or cards for each of these primary services:
${selectedServices.map(s => ` - ${s}`).join('\n')}
`;
    }

    prompt += `\n=========================================
DESIGN & ARCHITECTURE GUIDELINES
=========================================
1. Layout Structure: Build a stunning hero section containing the tagline, main CTA, and a high-end presentation (e.g., custom split layouts, sleek shapes, or glowing media wrappers). Follow with a grid of Services, an elegant About/Story section, and a custom Contact & Hours footer map/card block.
2. Visual Quality: Use harmonized color accents matching the palette. Avoid plain colors. Leverage subtle gradients, borders, shadows, and smooth hover effects on buttons and interactive elements.
`;

    prompt += `3. Tech Stack: Build the interface as a React application (functional components with hooks, no class components) styled entirely with Tailwind CSS utility classes. Do not write custom CSS files or inline styles — express all spacing, layout (flexbox/grid), color, typography, and hover/focus states through Tailwind classes. Use Framer Motion for scroll reveals, hover/tap micro-interactions, and section transitions, and use lucide-react for all icons (no inline SVGs or icon fonts). Install any required packages as needed.\n`;

    if (useResponsive) {
      prompt += `4. Responsiveness: Implement absolute mobile-first architecture. Ensure all font sizes scale down beautifully, images maintain correct aspect ratios, and padding is tight on mobile screens but comfortable on desktop.\n`;
    }

    if (useSEO) {
      prompt += `5. SEO Rules: Set proper HTML5 semantic elements (main, header, footer, section, article). Include a logical heading hierarchy (single H1, followed by H2 and H3 structures) and alt attributes for all visual tags.\n`;
    }

    if (useComponents) {
      prompt += `6. Component Modularity: Break the page down into focused functional components (e.g., Hero, Services, About, ContactFooter) in separate files, each receiving its content via props with clear, typed interfaces.\n`;
    }

    prompt += `\n=========================================
DELIVERY
=========================================
Deliver a fully functional React + Tailwind CSS single-page application. Provide each component as its own file (JSX), plus the root App component that assembles them, ready to run in a standard React + Tailwind project with no errors. Do not use incomplete mock code or stub outputs — all markup, props, and styling must be fully integrated.`;

    compiledPromptCode.textContent = prompt;
  }

  // Copy to Clipboard Animation
  copyBtn.addEventListener('click', async () => {
    const promptText = compiledPromptCode.textContent;
    try {
      await navigator.clipboard.writeText(promptText);
      
      // Animate Button state change
      copyBtn.classList.add('copied');
      const origText = copyBtn.querySelector('.btn-text').textContent;
      copyBtn.querySelector('.btn-text').textContent = 'PROMPT COPIED // SUCCESS';
      
      setTimeout(() => {
        copyBtn.classList.remove('copied');
        copyBtn.querySelector('.btn-text').textContent = origText;
      }, 1500);

    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  });

  // Initial Run - populate services grid and compile
  updateServicesList(fields.bizNiche.value);
  compilePrompt();
});
