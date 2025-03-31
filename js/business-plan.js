// Enhanced business-plan.js with updated content based on strategic enhancements

document.addEventListener("DOMContentLoaded", () => {
    // Define the business plan sections structure with enhanced content
    const businessPlanSections = [
      {
        id: "executive-summary",
        title: "Executive Summary",
        content: `
                  <div class="mb-4">
                      <h3>Company Overview</h3>
                      <p>Mynd & Bodi Institute (MBI) is pioneering an innovative healthcare model centered on proactive wellness. We are building an integrated, AI-powered membership platform that combines preventive medicine, direct primary care, and holistic wellness services under one experience. Instead of the traditional reactive "sick care," MBI's mission is to deliver continuous health optimization – identifying and addressing risks early, keeping people healthier, and reducing costs for individuals and organizations alike.</p>
                      
                      <div class="highlight-box">
                          <h4>What This Means</h4>
                          <p>MBI represents a fundamental shift in healthcare delivery, focusing on prevention and optimization rather than treatment, powered by advanced AI and data analytics.</p>
                      </div>
                  </div>
                  
                  <div class="mb-4">
                      <h3>Investment Highlights</h3>
                      <ul>
                          <li><strong>Enormous Market Potential:</strong> MBI targets a convergence of high-growth segments (preventive care, AI healthtech, DPC, wellness) representing a $400B+ addressable market by 2030.</li>
                          <li><strong>Differentiated Model with Multiple Revenue Streams:</strong> Our integrated approach and diverse offerings create several revenue sources (consumer memberships, employer programs, partnerships, data analytics), reducing risk and amplifying growth avenues.</li>
                          <li><strong>Strong Early Economics:</strong> The model is designed for favorable unit economics (projected LTV:CAC > 10:1) and high-margin services via technology leverage. We project reaching profitability by Year 3 (with ~$3M EBITDA on $29M revenue).</li>
                          <li><strong>Experienced Leadership & Scalable Platform:</strong> MBI's team combines deep healthcare and tech expertise, and we have built a scalable foundation (cloud infrastructure, AI algorithms, beta user feedback) that will enable rapid growth post-launch.</li>
                          <li><strong>Clear Path to Long-Term Impact:</strong> Our phased roadmap culminates in a preventative-first insurance model, positioning MBI to not only build a successful business but also transform healthcare incentives at scale.</li>
                      </ul>
                  </div>
                  
                  <div class="collapsible-section">
                      <div class="collapsible-header" aria-expanded="false" aria-controls="market-opportunity-content">
                          <h4>Market Opportunity</h4>
                          <i class="fas fa-chevron-down collapse-icon"></i>
                      </div>
                      <div id="market-opportunity-content" class="collapsible-content">
                          <p>MBI is strategically positioned at the intersection of several high-growth healthcare trends. We sit in the sweet spot where preventive care, primary care innovation, corporate wellness, and AI-driven healthtech overlap. For example:</p>
                          
                          <ul>
                              <li>The preventive healthcare market is projected to reach ~$773B by 2034 (8–10% CAGR) as consumers and payers increasingly prioritize avoiding disease.</li>
                              <li>Direct primary care (DPC), a cornerstone of our model, is growing steadily (from $65.6B in 2024 to ~$70B+ in 2025 in the U.S.) as patients seek more personalized care.</li>
                              <li>AI in healthcare is exploding (~49% CAGR) – expected to hit $164B by 2030 – enabling predictive analytics and automation that MBI will harness.</li>
                              <li>Corporate wellness is becoming a corporate imperative, forecasted to grow from ~$70B in 2024 to ~$129B by 2034 as employers invest in employee health.</li>
                          </ul>
                          
                          <div class="highlight-box">
                              <h4>What This Means</h4>
                              <p>The convergence of these trends creates a combined addressable market of hundreds of billions of dollars. MBI's integrated model is uniquely positioned to capture this opportunity by delivering value across all these areas simultaneously. Few, if any, competitors can address preventive care, primary care, wellness, and AI analytics together – giving MBI a powerful first-mover advantage if executed well.</p>
                          </div>
                      </div>
                  </div>
              `,
      },
      {
        id: "solution-value-proposition",
        title: "Solution & Value Proposition",
        content: `
                  <div class="mb-4">
                      <p>MBI's core offering will be a membership-based platform delivering comprehensive health and wellness management. We create value for multiple stakeholders:</p>
                  </div>
                  
                  <div class="collapsible-section">
                      <div class="collapsible-header" aria-expanded="false" aria-controls="individual-members-content">
                          <h4>For Individual Members</h4>
                          <i class="fas fa-chevron-down collapse-icon"></i>
                      </div>
                      <div id="individual-members-content" class="collapsible-content">
                          <p>A "one-stop" wellness membership that provides unlimited primary care (virtual-first with in-person options), integrated mental health support, nutritional coaching, fitness guidance, and more – all coordinated through an easy app interface. Personalized AI-driven health pathways will analyze wearable data, labs, and assessments to recommend proactive steps. Members stay engaged through gamified wellness incentives (e.g. rewards for meeting health goals) and enjoy seamless experiences like AI-assisted scheduling and 24/7 virtual assistance. In short, MBI will offer concierge-level, whole-person care at an accessible price point.</p>
                      </div>
                  </div>
                  
                  <div class="collapsible-section">
                      <div class="collapsible-header" aria-expanded="false" aria-controls="corporate-clients-content">
                          <h4>For Corporate Clients (Employers)</h4>
                          <i class="fas fa-chevron-down collapse-icon"></i>
                      </div>
                      <div id="corporate-clients-content" class="collapsible-content">
                          <p>A turnkey wellness solution that can significantly reduce healthcare costs by keeping employees healthier. Companies subscribing to MBI's corporate program will see improved employee productivity, reduced sick days, and enhanced retention thanks to the premium health benefits. We also provide data-driven insights: an employer dashboard will show aggregate health trends and ROI metrics, demonstrating the value of preventive care. Offering MBI as a benefit helps employers attract talent and save on insurance claims long-term.</p>
                      </div>
                  </div>
                  
                  <div class="collapsible-section">
                      <div class="collapsible-header" aria-expanded="false" aria-controls="healthcare-providers-content">
                          <h4>For Healthcare Providers/Partners</h4>
                          <i class="fas fa-chevron-down collapse-icon"></i>
                      </div>
                      <div id="healthcare-providers-content" class="collapsible-content">
                          <p>MBI will collaborate with a network of forward-thinking physicians, coaches, and specialists. Our model offers providers an attractive partnership – we handle administrative burden and utilize AI to streamline care protocols (e.g. instant documentation, AI-assisted decision support). Providers get higher reimbursements faster (eventually via automated claims for any insurance components) and access to an engaged patient population through MBI. By focusing on prevention, providers can achieve better outcomes with their patients, aligning with value-based care trends. MBI essentially becomes a channel for providers to practice high-quality care without the red tape.</p>
                      </div>
                  </div>
                  
                  <div class="highlight-box">
                      <h4>What This Means</h4>
                      <p>MBI isn't just an app or a clinic – it's an ecosystem. Individuals get comprehensive, personalized care; employers get healthier, happier employees; providers get to practice medicine in a rewarding way. This 360° value proposition is a key differentiator. Each group's incentives align around preventive health, reinforcing MBI's mission.</p>
                  </div>
              `,
      },
      {
        id: "business-model",
        title: "Business Model",
        content: `
                  <div class="mb-4">
                      <p>MBI intends to generate revenue through multiple complementary streams, ensuring diversified growth:</p>
                  </div>
                  
                  <div class="collapsible-section">
                      <div class="collapsible-header" aria-expanded="false" aria-controls="tiered-membership-content">
                          <h4>Tiered Membership Subscriptions</h4>
                          <i class="fas fa-chevron-down collapse-icon"></i>
                      </div>
                      <div id="tiered-membership-content" class="collapsible-content">
                          <p>We will offer individual memberships at Basic, Premium, and Elite tiers, with escalating levels of service and personalization. For example, a Basic tier ($99/month) may include unlimited virtual care and annual wellness screening, while an Elite tier ($349/month) offers dedicated health coaching, advanced testing (genetic, etc.), and concierge services. This tiered approach maximizes accessibility (entry-level option) while monetizing those who desire premium features. (All tiers focus on prevention and wellness.)</p>
                      </div>
                  </div>
                  
                  <div class="collapsible-section">
                      <div class="collapsible-header" aria-expanded="false" aria-controls="corporate-wellness-programs-content">
                          <h4>Corporate Wellness Programs</h4>
                          <i class="fas fa-chevron-down collapse-icon"></i>
                      </div>
                      <div id="corporate-wellness-programs-content" class="collapsible-content">
                          <p>Custom enterprise packages for employers, priced per employee per month. Companies can subsidize memberships for their workforce. This B2B2C model drives volume and can be tailored (e.g. biometric screening events, aggregated reporting). Employers pay because they expect ROI in reduced medical claims and improved productivity.</p>
                      </div>
                  </div>
                  
                  <div class="collapsible-section">
                      <div class="collapsible-header" aria-expanded="false" aria-controls="white-label-partnerships-content">
                          <h4>White-Label & Partnerships</h4>
                          <i class="fas fa-chevron-down collapse-icon"></i>
                      </div>
                      <div id="white-label-partnerships-content" class="collapsible-content">
                          <p>In the mid-term, MBI can license its technology platform to insurance companies or healthcare systems seeking to offer preventive programs under their brand. This could include our AI risk prediction engine or member engagement app, generating SaaS-like revenue. Partnerships with payers could also involve shared-savings arrangements, where MBI is rewarded for reducing costs in covered populations.</p>
                      </div>
                  </div>
                  
                  <div class="collapsible-section">
                      <div class="collapsible-header" aria-expanded="false" aria-controls="data-insights-content">
                          <h4>Data & Insights (Future)</h4>
                          <i class="fas fa-chevron-down collapse-icon"></i>
                      </div>
                      <div id="data-insights-content" class="collapsible-content">
                          <p>Anonymized, aggregated health data from our member base can be extremely valuable for research, pharmaceutical and wellness product companies. With strict privacy compliance, MBI can offer subscription insights or participate in research partnerships. This data monetization would be a byproduct of our platform's scale and could become a significant revenue stream, while also furthering medical knowledge.</p>
                          <p>(Each of these streams will be rolled out in phases – initial focus on memberships and corporate clients, with white-label and data opportunities in later stages once we have scale.)</p>
                      </div>
                  </div>
                  
                  <div class="highlight-box">
                      <h4>Why this model is powerful</h4>
                      <p>The diversified approach means MBI isn't reliant on any single revenue source. High-margin subscription fees provide recurring income; corporate deals add scaling power and credibility; partnerships and data can exponentially grow revenue without large user acquisition costs. This creates a sustainable financial engine and competitive moat (network of partners and proprietary data) over time.</p>
                  </div>
              `,
      },
      {
        id: "competitive-differentiation",
        title: "Competitive Differentiation",
        content: `
                  <div class="mb-4">
                      <p>MBI distinguishes itself in a crowded health market through several integrated advantages:</p>
                  </div>
                  
                  <div class="collapsible-section">
                      <div class="collapsible-header" aria-expanded="false" aria-controls="integrated-ecosystem-content">
                          <h4>1. Comprehensive Ecosystem</h4>
                          <i class="fas fa-chevron-down collapse-icon"></i>
                      </div>
                      <div id="integrated-ecosystem-content" class="collapsible-content">
                          <p>Most competitors address one slice of care. MBI's platform integrates primary care, mental health, nutrition, fitness, and wellness coaching in one membership. This breadth means we can capture revenue that is split among many players today, and deliver better outcomes by coordinating all aspects of a member's health journey.</p>
                      </div>
                  </div>
                  
                  <div class="collapsible-section">
                      <div class="collapsible-header" aria-expanded="false" aria-controls="advanced-ai-content">
                          <h4>2. Advanced AI & Personalization</h4>
                          <i class="fas fa-chevron-down collapse-icon"></i>
                      </div>
                      <div id="advanced-ai-content" class="collapsible-content">
                          <p>At MBI's core is a proprietary AI engine that analyzes data from wearables, biometric screenings, genomics, and lifestyle inputs. This isn't just a buzzword – our AI will continuously learn to flag early risk indicators (e.g. subtle changes in resting heart rate trends) and recommend tailored interventions. Competitors might use basic analytics, but MBI is building a true "brain" for preventive healthcare. This yields more personalized and timely care than any one doctor could provide alone.</p>
                      </div>
                  </div>
                  
                  <div class="collapsible-section">
                      <div class="collapsible-header" aria-expanded="false" aria-controls="provider-alignment-content">
                          <h4>3. Provider Alignment and Network</h4>
                          <i class="fas fa-chevron-down collapse-icon"></i>
                      </div>
                      <div id="provider-alignment-content" class="collapsible-content">
                          <p>Unlike some tech startups that sideline doctors, MBI is partnering with providers from Day 1. We ease their paperwork with instant claims and standardized protocols, so they can focus on care. By aligning incentives (providers are paid to keep patients healthy, not just for volume of visits), we create a win-win system that traditional fee-for-service models can't match. This provider-friendly stance helps us build a broad network faster.</p>
                      </div>
                  </div>
                  
                  <div class="collapsible-section">
                      <div class="collapsible-header" aria-expanded="false" aria-controls="preventative-first-content">
                          <h4>4. Preventative-First Insurance Pathway</h4>
                          <i class="fas fa-chevron-down collapse-icon"></i>
                      </div>
                      <div id="preventative-first-content" class="collapsible-content">
                          <p>MBI has a clear long-term plan to evolve into a preventative-focused insurer (details in Growth Strategy). This is a game-changer differentiator – moving "upstream" to become the payer allows us to financially reward health improvements. While other wellness companies might stop at coaching or clinics, MBI's vision to integrate insurance is a bold differentiator that could disrupt the industry. It signals to investors that we're not just building a boutique service, but potentially redefining how healthcare is financed.</p>
                      </div>
                  </div>
              `,
      },
      {
        id: "growth-strategy",
        title: "Growth Strategy",
        content: `
                  <div class="mb-4">
                      <p>MBI's growth will follow a phased roadmap, each stage building on successes and learnings to reach the next. Our approach is deliberately phased to manage risk and ensure product-market fit at each step:</p>
                  </div>
                  
                  <div class="collapsible-section">
                      <div class="collapsible-header" aria-expanded="false" aria-controls="launch-phase-content">
                          <h4>Launch Phase (0–12 months)</h4>
                          <i class="fas fa-chevron-down collapse-icon"></i>
                      </div>
                      <div id="launch-phase-content" class="collapsible-content">
                          <p>Begin with an invite-only or pilot program targeting high-engagement early adopters. We will onboard a few hundred members (e.g. health enthusiasts or employees at a partner company) to validate the model. Focus in this phase is on refining the member experience, testing our AI insights with real data, and proving that members use and value the service. We'll also establish a small network of partner providers in one region. Success = testimonials, improved health metrics for members, and iteration of the platform based on feedback.</p>
                      </div>
                  </div>
                  
                  <div class="collapsible-section">
                      <div class="collapsible-header" aria-expanded="false" aria-controls="expansion-phase-content">
                          <h4>Expansion Phase (12–36 months)</h4>
                          <i class="fas fa-chevron-down collapse-icon"></i>
                      </div>
                      <div id="expansion-phase-content" class="collapsible-content">
                          <p>With proof-of-concept in hand, expand to broader consumer market and initiate B2B offerings. This includes scaling to thousands of individual users via digital marketing and word-of-mouth referrals, and signing on mid-sized employers for corporate wellness pilots. We'll broaden provider partnerships to multiple regions. Key goals: optimize unit economics (drive down cost of acquisition), build the brand, and ensure the service scales operationally (onboarding, support, etc.). By the end of this phase, we aim for tens of thousands of members and presence in multiple cities.</p>
                      </div>
                  </div>
                  
                  <div class="collapsible-section">
                      <div class="collapsible-header" aria-expanded="false" aria-controls="scale-phase-content">
                          <h4>Scale Phase (36–60 months)</h4>
                          <i class="fas fa-chevron-down collapse-icon"></i>
                      </div>
                      <div id="scale-phase-content" class="collapsible-content">
                          <p>Aggressively grow enterprise and partnership channels. Sign major corporate clients (Fortune 500 companies) and pursue white-label deals with, for example, an insurance company leveraging MBI for their wellness offerings. This phase could include geographic expansion beyond our initial regions, possibly international pilots in high-demand markets. We'll continue to enhance the platform's AI capabilities with the larger data set. By Year 5, we target a membership base in the hundreds of thousands and solid profitability, proving the business at scale.</p>
                      </div>
                  </div>
                  
                  <div class="collapsible-section">
                      <div class="collapsible-header" aria-expanded="false" aria-controls="insurance-transition-content">
                          <h4>Insurance Transition Phase (60+ months)</h4>
                          <i class="fas fa-chevron-down collapse-icon"></i>
                      </div>
                      <div id="insurance-transition-content" class="collapsible-content">
                          <p>Leverage the extensive health data and outcomes collected to transition into offering preventative-first insurance products. This may involve obtaining insurance licenses or partnering with an insurer to underwrite plans. In this model, MBI can assume (or share) risk for healthcare costs, with a wealth of data to price premiums and the platform to control costs. Essentially, we evolve into an insurance company that profits by keeping people healthy (a complete realignment of incentives). This phase would unlock enormous value (insurance is a $1+ trillion industry) and solidify MBI's mission to transform healthcare at the highest level.</p>
                          <p>(Each phase has specific milestones and KPIs. The strategy is designed to validate and de-risk the concept before big expansion, then capitalize on our data and success to revolutionize the industry.)</p>
                      </div>
                  </div>
              `,
      },
      {
        id: "financial-projections",
        title: "Financial Projections",
        content: `
                  <div class="mb-4">
                      <p>We anticipate rapid growth with improving margins as the business scales. Our high-level 5-year projections:</p>
                      <ul>
                          <li><strong>Year 1:</strong> ~$4.2M revenue, –$1.8M EBITDA (net loss as we invest in building the platform and team). This reflects a few thousand membership subscriptions and initial B2B deals, with heavy upfront investment.</li>
                          <li><strong>Year 3:</strong> ~$28.7M revenue, $3.2M EBITDA (profitability achieved by around Q3 of Year 3). By this point, membership scale and operational efficiency turn EBITDA positive. Revenue growth driven by larger employer deals and strong consumer adoption.</li>
                          <li><strong>Year 5:</strong> ~$87.3M revenue, $19.6M EBITDA (~22% EBITDA margin). We project substantial membership growth and multiple enterprise partnerships by Year 5, yielding robust cash flow. At this scale, we estimate MBI could attain a $500M+ valuation (using comparable healthtech multiples and our growth rate).</li>
                      </ul>
                      <p>These projections are based on conservative assumptions of membership ramp-up and do not include potential upside from data monetization or insurance expansion. They demonstrate a clear path to a highly valuable business.</p>
                  </div>
              `,
      },
      {
        id: "leadership-team",
        title: "Leadership Team",
        content: `
                  <div class="mb-4">
                      <p>MBI is led by a seasoned team of healthcare innovators, technologists, and business executives, each with a track record relevant to our mission:</p>
                      <ul>
                          <li><strong>Healthcare Transformation:</strong> Leaders who have redesigned care models at major health systems and driven value-based care initiatives.</li>
                          <li><strong>AI & Data Science:</strong> Experts who have deployed machine learning in clinical settings and know how to leverage big data securely (including a former lead from a health AI startup).</li>
                          <li><strong>Direct Primary Care Operations:</strong> Advisors and team members who have run DPC or concierge practices, bringing hands-on knowledge of delivering personalized care.</li>
                          <li><strong>Insurance & Compliance:</strong> Professionals experienced in insurance product development and navigating healthcare regulations – critical for our long-term plans.</li>
                          <li><strong>Corporate Wellness & Partnerships:</strong> Team members who have built corporate health programs and understand employer needs and sales cycles.</li>
                      </ul>
                      <p>This diverse expertise positions us to execute MBI's complex, cross-disciplinary model.</p>
                  </div>
              `,
      },
      {
        id: "investment-opportunity",
        title: "Investment Opportunity",
        content: `
                  <div class="mb-4">
                      <p>MBI is seeking $8.5 million in Series A funding. This capital will be used to accelerate our go-to-market and product development in key areas:</p>
                      <ul>
                          <li><strong>Technology & AI:</strong> Expand our platform's capabilities (AI algorithms, mobile app features) and ensure scalable infrastructure for growth.</li>
                          <li><strong>Member Acquisition:</strong> Drive initial user growth through targeted marketing and partnerships, proving out consumer demand in key markets.</li>
                          <li><strong>Corporate Partnerships:</strong> Build a dedicated B2B sales effort and account management for employer clients, converting our pipeline of interested companies.</li>
                          <li><strong>Regulatory Compliance:</strong> Strengthen our compliance framework and legal structure, paving the way for future insurance offerings (e.g. begin necessary licensing processes).</li>
                          <li><strong>Healthcare Network Expansion:</strong> Onboard additional providers and wellness coaches in our platform, and integrate electronic health record systems to streamline their involvement.</li>
                      </ul>
                      <p>In return, investors have the opportunity to join us at an early stage of transforming healthcare. MBI's vision isn't just another telehealth app – it's a platform aiming to bend the health cost curve and redefine preventive care. With strong market tailwinds, an experienced team, and a clear execution plan, we believe MBI can achieve significant scale and deliver exceptional returns to shareholders. More importantly, success means millions of lives improved and a model for a better healthcare system.</p>
                  </div>
                  
                  <div class="mt-4">
                      <h3>Conclusion</h3>
                      <p>MBI stands at the forefront of a new era in healthcare. By focusing on prevention and leveraging technology, we have the potential to deliver better outcomes and lower costs – a rare combination that addresses the needs of patients, employers, and payers alike. As we execute our strategy, we aim to create substantial business value and make a meaningful impact on health and wellbeing. Investing in MBI is investing in the future of healthcare.</p>
                  </div>
              `,
      },
    ]
  
    // Generate TOC and content
    const tocLinksContainer = document.querySelector(".toc-links")
    const contentContainer = document.querySelector(".content-container")
  
    // Add content sections
    let tocHtml = ""
  
    businessPlanSections.forEach((section) => {
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
  
  