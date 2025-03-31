// Enhanced whitepaper.js with updated content based on strategic enhancements

document.addEventListener("DOMContentLoaded", () => {
    // Define the whitepaper sections structure with enhanced content
    const whitepaperSections = [
      {
        id: "executive-summary",
        title: "Executive Summary",
        content: `
                  <div class="mb-4">
                      <h3>Reinventing Healthcare through AI & Preventative Care</h3>
                      <p>The U.S. healthcare system faces a critical inflection point. Costs are soaring (projected to reach $6.8 trillion by 2030) while health outcomes lag behind other nations. Mynd & Bodi Institute (MBI) is developing a fundamentally different approach: an AI-powered, preventative healthcare platform that identifies risks before they become serious, delivers personalized wellness interventions, and realigns incentives from treatment to prevention. This forward-looking model aims to transform healthcare economics by keeping people healthier in the first place.</p>
                      
                      <div class="highlight-box">
                          <h4>What This Means</h4>
                          <p>Rather than waiting for patients to get sick, MBI's platform will proactively manage health, potentially reducing expensive late-stage treatments. This preventative-first vision addresses a huge market need and positions MBI as a catalyst for systemic change.</p>
                      </div>
                  </div>
              `,
      },
      {
        id: "market-landscape",
        title: "1. Market Landscape and Opportunity",
        content: `
                  <div class="mb-4">
                      <p>The preventive healthcare market is vast and rapidly growing, signaling strong opportunity for MBI's model. Key drivers include rising chronic disease burdens, unsustainable healthcare costs, and post-pandemic consumer demand for wellness solutions. Technology advancements (AI, wearables, telehealth) have also matured to enable new care delivery approaches. Below is an overview of the landscape:</p>
                      
                      <h3>Healthcare Spending vs. Outcomes</h3>
                      <p>The U.S. spends ~17.8% of GDP on health (nearly twice the OECD average), yet trails in outcomes and life expectancy. This inefficiency stems from a reactive "sick-care" approach – treating illnesses after they appear. It underscores a ripe opportunity for disruptive models focusing on early intervention and continuous wellness monitoring.</p>
                      
                      <h3>Preventive Care Momentum</h3>
                      <p>Consumers and employers are increasingly health-conscious. Chronic conditions drive 90% of annual U.S. healthcare expenditures ($4.5T). Preventing even a fraction of these illnesses could save billions. Post-COVID, there's greater awareness of staying healthy proactively.</p>
                      
                      <h3>Market Size & Growth</h3>
                      <p>Globally, the preventive healthcare sector is projected to reach $773 billion by 2034, growing ~10% annually. Related segments like AI-driven healthtech (expected ~$164B by 2030) and corporate wellness (doubling from ~$60B in 2024 to ~$130B by 2034) are also booming, reflecting convergence toward preventative solutions.</p>
                      
                      <div class="highlight-box">
                          <h4>What This Means</h4>
                          <p>The market is primed for innovative preventive healthcare solutions. High spending on late-stage illness has become unsustainable, creating demand for models that keep people healthier earlier. MBI's vision aligns perfectly with these trends by emphasizing early risk detection, personalized wellness, and continuous care.</p>
                      </div>
                  </div>
                  
                  <div class="mb-4">
                      <h3>Key Market Segments</h3>
                      <p>MBI sits at the intersection of several high-growth segments in healthcare. Understanding these segments highlights where MBI can capture value:</p>
                  </div>
                  
                  <div class="collapsible-section">
                      <div class="collapsible-header" aria-expanded="false" aria-controls="dpc-content">
                          <h4>Direct Primary Care (DPC) & Concierge Medicine</h4>
                          <i class="fas fa-chevron-down collapse-icon"></i>
                      </div>
                      <div id="dpc-content" class="collapsible-content">
                          <p>Patients and physicians alike are gravitating toward membership-based primary care models that bypass insurance. In the U.S., over 2,100 DPC practices operate across 48 states (as of 2023), supported by laws clarifying DPC is not insurance. The global DPC market (~$65.6B in 2024) is growing ~7% CAGR, projected to reach $92B by 2029. Concierge medicine, with higher-end fees, is growing ~10% annually. These models prove demand for personalized, preventive-centric care (e.g. same-day access, longer visits) – though they often remain expensive and limited to affluent patients.</p>
                          
                          <p><strong>Opportunity:</strong> MBI can adopt the personalized, preventative focus of DPC/concierge care while democratizing it through technology (virtual services) at a lower price point.</p>
                      </div>
                  </div>
                  
                  <div class="collapsible-section">
                      <div class="collapsible-header" aria-expanded="false" aria-controls="corporate-wellness-content">
                          <h4>Corporate Wellness Programs</h4>
                          <i class="fas fa-chevron-down collapse-icon"></i>
                      </div>
                      <div id="corporate-wellness-content" class="collapsible-content">
                          <p>Employers are investing heavily to keep employees healthy and productive. The corporate wellness market is expected to double from ~$60B in 2024 to ~$130B by 2034 (≈7% CAGR). Common offerings range from gym subsidies to on-site clinics and mental health programs. Technology is personalizing these efforts (e.g. wearables for activity challenges).</p>
                          
                          <p><strong>Opportunity:</strong> MBI can partner with employers to offer its platform as an employee benefit, helping companies reduce healthcare costs via prevention. This aligns with corporate priorities to improve workforce health and productivity.</p>
                      </div>
                  </div>
                  
                  <div class="collapsible-section">
                      <div class="collapsible-header" aria-expanded="false" aria-controls="ai-healthtech-content">
                          <h4>AI-Driven Healthtech</h4>
                          <i class="fas fa-chevron-down collapse-icon"></i>
                      </div>
                      <div id="ai-healthtech-content" class="collapsible-content">
                          <p>Artificial intelligence is transforming healthcare, enabling a shift from reactive to predictive care. The AI health market is experiencing explosive growth (nearly 50% CAGR) and is projected to reach ~$164B by 2030. AI is being used for early disease risk identification, virtual health assistants, and personalized care recommendations. Investors reward healthtech startups leveraging AI with higher valuations.</p>
                          
                          <p><strong>Opportunity:</strong> MBI is being built in a highly AI-friendly environment. By harnessing machine learning on consumer health data (wearables, genomics, EHRs), MBI's platform can predict health issues before they manifest and tailor interventions, delivering preventative care at scale. This convergence of AI + preventive medicine strongly favors MBI's timing.</p>
                      </div>
                  </div>
                  
                  <div class="collapsible-section">
                      <div class="collapsible-header" aria-expanded="false" aria-controls="holistic-wellness-content">
                          <h4>Holistic Wellness & Preventative Services</h4>
                          <i class="fas fa-chevron-down collapse-icon"></i>
                      </div>
                      <div id="holistic-wellness-content" class="collapsible-content">
                          <p>Beyond clinical care, consumers are spending more on wellness – from dietary supplements to meditation apps. ~75% of U.S. adults take dietary supplements (55% regularly), reflecting a cultural shift toward "staying healthy" rather than only treating illness. Preventative services (screenings, nutrition counseling, etc.) are expanding, often now covered by insurance due to policy shifts.</p>
                          
                          <p><strong>Opportunity:</strong> MBI's holistic approach (integrating nutrition, mental health, fitness, etc.) is poised to capitalize on this willingness to invest in wellness. By offering a one-stop platform for body and mind (true to "Mynd & Bodi"), MBI can tap into multiple wellness revenue streams while improving overall health outcomes.</p>
                      </div>
                  </div>
              `,
      },
      {
        id: "competitive-analysis",
        title: "2. Competitive Analysis",
        content: `
                  <div class="mb-4">
                      <p>The preventative health and wellness space has a range of players, from tech-enabled primary care startups to digital wellness apps and telehealth providers. While there are established competitors, no single solution fully integrates AI-driven preventive care, primary care, and holistic wellness the way MBI envisions. Below we profile two notable players to illustrate the landscape and where MBI can differentiate:</p>
                  </div>
                  
                  <div class="collapsible-section">
                      <div class="collapsible-header" aria-expanded="false" aria-controls="forward-content">
                          <h4>Forward (Forward Health) – "Apple Store" of Primary Care</h4>
                          <i class="fas fa-chevron-down collapse-icon"></i>
                      </div>
                      <div id="forward-content" class="collapsible-content">
                          <p>Forward is a well-known membership-based preventive care startup with sleek high-tech clinics. For ~$149/month (annual contract), members get unlimited in-person visits, 24/7 tele-access to a care team, and no co-pays. Forward doesn't take insurance, operating a direct-pay model. They emphasize technology in care: clinics are outfitted with IoT body scanners, genomic tests, and AI risk assessments. Members use a sophisticated app to track health data (weight, BP, heart rate) and receive AI-driven nudges. Forward's founder (ex-Google) designed the system to continuously monitor health signals and flag issues proactively. However, it's unclear how clinically effective these AI predictions are in practice – much of the care still relies on traditional doctor visits. Forward has raised substantial venture funding and built a strong brand among tech-savvy, affluent consumers seeking a cutting-edge, preventive experience.</p>
                          
                          <h5>Strengths:</h5>
                          <ul>
                              <li>Premium consumer experience with high satisfaction for those who can afford it</li>
                              <li>Virtually no wait times and "all-inclusive" care (labs, basic meds, etc.) included</li>
                              <li>Heavy use of data could yield predictive insights over time</li>
                              <li>Strong funding has enabled proprietary tech development</li>
                          </ul>
                          
                          <h5>Weaknesses:</h5>
                          <ul>
                              <li>High price & limited reach – ~$1,800/year out-of-pocket is prohibitive for many</li>
                              <li>Clinics only in a few cities, making scaling slow and capital-intensive</li>
                              <li>By not accepting insurance, Forward forgoes customers whose employers would pay for such benefits</li>
                              <li>Despite marketing as "AI-driven," the reliance on physical clinics means it hasn't truly reduced the cost of care delivery (labor and facilities still dominate)</li>
                          </ul>
                          
                          <h5>Opportunity for MBI:</h5>
                          <p>Forward validates demand for preventive, data-driven care, but MBI can deliver a similar experience at lower cost and with more virtual scale. By leveraging telehealth and selective local partnerships (instead of owning clinics outright), MBI's model can be far more scalable geographically. Additionally, MBI can pursue hybrid revenue models (including employer-paid plans or insurance partnerships) to widen access beyond Forward's niche. In short, MBI can offer concierge-style preventive care for the masses – something Forward's model struggles to do.</p>
                      </div>
                  </div>
                  
                  <div class="collapsible-section">
                      <div class="collapsible-header" aria-expanded="false" aria-controls="parsley-content">
                          <h4>Parsley Health – Holistic Integrative Care</h4>
                          <i class="fas fa-chevron-down collapse-icon"></i>
                      </div>
                      <div id="parsley-content" class="collapsible-content">
                          <p>Parsley Health is another membership-based primary care startup, charging about $150/month (~$1,800/year) for functional medicine services. Parsley focuses on a holistic blend of traditional medicine with lifestyle and nutrition coaching. They operate clinics in select cities (NY, LA, SF, etc.) and heavily use telehealth for nationwide reach. Notably, Parsley's memberships are also out-of-pocket (insurance generally not accepted for the core fee). Members typically get a set number of doctor visits and health coaching sessions annually, plus comprehensive lab work focusing on root causes and prevention. This integrative approach appeals to health-conscious consumers seeking more than a typical 15-minute doctor visit.</p>
                          
                          <h5>Strengths:</h5>
                          <ul>
                              <li>Truly holistic care model addressing nutrition, stress, and lifestyle alongside medical treatment</li>
                              <li>Appeals to patients who want a "whole body" approach</li>
                              <li>Telehealth option gives wider access than clinic-only models</li>
                              <li>Parsley's physicians spend extended time with patients and create personalized wellness plans, delivering a high-touch experience for members</li>
                          </ul>
                          
                          <h5>Weaknesses:</h5>
                          <ul>
                              <li>Price & Insurance Barrier – similar to Forward, Parsley's ~$1.8k/year fee limits its audience to those able to pay out-of-pocket</li>
                              <li>While less clinic-dependent than Forward, it still has physical centers which constrain scaling and incur overhead</li>
                              <li>The integrative approach, though valuable, can be harder to standardize and scale (relying on specialist doctors and coaches for each patient)</li>
                          </ul>
                          
                          <h5>Opportunity for MBI:</h5>
                          <p>MBI can incorporate Parsley's whole-person philosophy (integrating mental health, nutrition, and preventive medicine) while using AI to scale it. By automating parts of health coaching and monitoring (through an app, algorithms, and smart content), MBI could offer a Parsley-like experience at a lower cost-per-member. Additionally, MBI's plan to eventually partner with insurers or employers could cover services that Parsley leaves as out-of-pocket, making preventive holistic care accessible to a broader population.</p>
                      </div>
                  </div>
                  
                  <div class="mt-4">
                      <h3>Overall Competitive Takeaway</h3>
                      <p>Current players each address parts of the preventative care puzzle, but none combine everything: tech-enabled primary care (Forward), holistic wellness (Parsley), corporate adoption, and AI-driven data insights. MBI's strategy is to deliver an integrated ecosystem – one membership that covers mind and body, virtual and in-person, powered by AI – which is a unique proposition. This differentiation will be crucial as MBI positions itself against both clinical-focused competitors and wellness apps.</p>
                  </div>
              `,
      },
    ]
  
    // Generate TOC and content
    const tocLinksContainer = document.querySelector(".toc-links")
    const contentContainer = document.querySelector(".content-container")
  
    // Add content sections
    let tocHtml = ""
  
    whitepaperSections.forEach((section) => {
      // Add to TOC
      tocHtml += `<a href="#${section.id}" class="toc-link level-1">${section.title}</a>`
  
      // Add content section
      const sectionElement = document.createElement("section")
      sectionElement.id = section.id
      sectionElement.className = "content-section"
      sectionElement.innerHTML = `
              <h2>${section.title}</h2>
              ${section.content}
          `
  
      contentContainer.appendChild(sectionElement)
    })
  
    // Set TOC HTML
    tocLinksContainer.innerHTML = tocHtml
  
    // Initialize collapsible sections
    initCollapsibleSections()
  })
  
  