const services = require('./capability-data.cjs');
const projects = [
  {
    "id": "mckesson",
    "client": "McKesson",
    "industry": "Healthcare & distribution",
    "categories": [
      "operations",
      "analytics"
    ],
    "experienceType": "Tola engagement",
    "headline": "Improve material flow and inventory control.",
    "summary": "Inventory operations, supplier coordination, SAP EWM accuracy programs and consolidation across distribution centers.",
    "role": "Tola’s inventory operations lead coordinated distribution operations, inventory control, planning, procurement and SAP teams. Client owners implemented approved system changes and retained purchasing, quality and inventory-adjustment authority.",
    "scope": "Inventory operations across multiple distribution centers, with the engagement based in Irving, Texas.",
    "status": "June 2021–ongoing in the October 18, 2026 inventory-operations record.",
    "tags": [
      "SAP EWM",
      "Inventory control",
      "Material flow",
      "Supplier coordination",
      "Warehouse planning"
    ],
    "metrics": [
      [
        "20%",
        "reported reduction in material-flow lead time",
        "Owner-supplied outcome for inbound and outbound flow improvement; baseline duration and comparison dates were not supplied."
      ],
      [
        "25%",
        "reported reduction in shrinkage",
        "Reported outcome of the inventory accuracy and control program. No loss-dollar baseline or separate cash saving is asserted."
      ],
      [
        "15%",
        "reported improvement in workflow efficiency",
        "Reported outcome of inventory consolidation and coordination; not a 15% payroll-cost reduction."
      ]
    ],
    "work": [
      [
        "Inbound and outbound material-flow improvement",
        "Clearer receiving, staging, replenishment and outbound handoffs, supported by exception reviews and site work instructions.",
        "Mapped physical and system events with site teams, coordinated appointment and capacity constraints, and addressed waiting and rework. Client SAP specialists implemented approved system changes. The source reports 20% lower material-flow lead times."
      ],
      [
        "Service-provider and OEM performance coordination",
        "A liaison and follow-up process for delivery commitments, provider actions and equipment-warranty cases.",
        "Worked with providers, OEM contacts, procurement and operating owners to track commitments, investigate exceptions and coordinate corrective action. Client owners retained contract and purchase authority."
      ],
      [
        "SAP EWM inventory accuracy and shrinkage control",
        "Inventory KPIs, cycle-counting and discrepancy-investigation practices supporting more reliable stock visibility.",
        "Worked with inventory-control and SAP owners on count discipline, movement reconciliation, exception causes and approved corrections. The source reports 25% lower shrinkage; count corrections and financial loss remained distinct."
      ],
      [
        "Inventory consolidation and cross-functional planning",
        "Consolidation strategies and recurring planning reviews to improve storage, movement and operational coordination.",
        "Coordinated planning, procurement and site teams around stock availability, schedule risks and feasible movement. The source reports 15% higher workflow efficiency; operating decisions remained with client owners."
      ]
    ]
  },
  {
    "id": "nestle",
    "client": "Nestlé",
    "industry": "Consumer goods",
    "categories": [
      "operations",
      "analytics",
      "engineering",
      "ai"
    ],
    "headline": "Connected expertise from materials to decisions.",
    "summary": "Materials planning, XTEL–SAP trade promotion integration, and data science across three distinct engagements.",
    "role": "Experience includes materials-planning team leadership, partner-supported integration delivery and Tola-led analytics. Delivery roles, client responsibilities and results are described within each engagement.",
    "scope": "Purina materials planning; trade promotion integration across the reported Purina, Waters, Nutrition and Health Science scope; and U.S. pet-food analytics.",
    "status": "Materials planning: November 2018–June 2021. TPM integration: 2019–2023. Analytics: January 2023–December 2025. These are separate engagement periods.",
    "tags": [
      "SAP EWM",
      "Materials planning",
      "Procurement",
      "Lean inventory",
      "Supplier performance",
      "XTEL",
      "SAP",
      "Azure Blob Storage",
      "Azure Service Bus",
      "IDocs",
      "Trade promotion management",
      "Bayesian modeling",
      "Pet-food supply planning",
      "AWS",
      "Azure ML",
      "Azure DevOps"
    ],
    "work": [
      [
        "Critical-material forecasting and procurement planning",
        "Material requirements, shortage-risk reviews and replenishment planning linked to production needs.",
        "Connected production schedules, consumption, supplier timing and usable stock. Planners reviewed forecasts and buffers; procurement and quality owners approved commitments and material substitutions."
      ],
      [
        "Supplier corrective action and contract performance",
        "Supplier performance reviews, discrepancy follow-up and coordination of delivery and contract obligations.",
        "Worked with procurement, quality and receiving to identify causes, track corrective actions and review subsequent deliveries. The source reports a 10% cost reduction without a dollar baseline."
      ],
      [
        "Lean inventory, cycle counting and surplus reduction",
        "Team training in Lean inventory practices and SAP EWM, supported by count investigation and surplus-action routines.",
        "Preserved first-pass count results, investigated discrepancies and coordinated approved actions on surplus stock. Reported outcomes were 15% higher cycle-count accuracy and 20% less surplus."
      ],
      [
        "Storage planning and warehouse turnaround",
        "Storage and replenishment practices aligned with material movement and production handoffs.",
        "Partnered with logistics and warehouse teams to improve staging, storage and handoff timing while preserving material identification and quality controls. Turnaround improved qualitatively; no percentage was supplied."
      ],
      [
        "Foundation integration: Health Science and Nutrition",
        "High-volume XTEL–SAP pipelines using Azure Blob Storage for payloads and Azure Service Bus for dispatch, with mappings, batching and reconciliation.",
        "During 2019–2021, developed and maintained integration flows with client and partner engineering support. Batching and parallel processing improved reported throughput by 45%, with 99.9% data integrity across 2M+ monthly records. Integrity concerns transfer and reconciliation, rather than business-data accuracy or availability."
      ],
      [
        "Integration leadership and scale",
        "Shared XTEL–SAP architecture using structured files, IDocs and services, with priority promotional synchronization, quality controls, monitoring and vendor collaboration.",
        "During 2021–2023, led technical design across the reported Purina, Waters, Nutrition and Health Science scope. Worked with XTEL on roadmap feedback and client-specific enhancements. Reported outcomes were 40% shorter processing time, 99.8% data accuracy across 2M+ monthly records and 60% fewer production incidents. Client, partner and vendor specialists implemented and operated their components."
      ],
      [
        "Team capability and delivery standards",
        "Coaching and shared technical practices for the client’s data science organization.",
        "Aligned machine-learning work with business priorities and established repeatable approaches to statistical review, engineering and ownership."
      ],
      [
        "Marketing measurement",
        "AWS-based marketing-mix modeling, Bayesian analysis and multi-touch attribution.",
        "Connected channel measurement with allocation scenarios and business review. Client and agency teams supplied business data and measurement access; brand owners approved spending decisions."
      ],
      [
        "Raw-material inventory planning",
        "Probabilistic safety stock and statistical forecasts for more than 200 raw-material SKUs.",
        "Connected demand, supplier variability and inventory policies, with reusable modeling frameworks for client teams to extend."
      ],
      [
        "Demand forecasting and model delivery",
        "Time-series and gradient-boosting forecasts, with Azure Machine Learning training and batch inference and Azure DevOps release automation.",
        "Tola designed the forecast hierarchy, initial model and evaluation approach. Client engineers completed feeds, dashboards and platform operations. The record reports 50% less active planning effort and 25% shorter lead time for comparable model changes."
      ]
    ],
    "metrics": [],
    "experienceType": "Tola, team and partner experience",
    "engagements": [
      {
        "id": "nestle-purina",
        "client": "Nestlé Purina",
        "industry": "Consumer goods",
        "categories": [
          "operations",
          "analytics"
        ],
        "experienceType": "Team experience",
        "headline": "Raw materials ready for production.",
        "summary": "Procurement planning, supplier performance, Lean inventory practices and warehouse coordination in a high-volume production environment.",
        "role": "Experience as Procurement and Raw-Material Inventory Improvement Lead, coordinating procurement, planning, warehouse, quality and SAP teams. Client owners retained purchasing, material qualification and inventory-adjustment authority.",
        "scope": "Critical raw-material planning and warehouse operations in Mechanicsburg, Pennsylvania. This 2018–2021 engagement is separate from the later Nestlé analytics portfolio.",
        "status": "November 2018–June 2021. Continuing operations remained with client procurement, planning and warehouse owners.",
        "tags": [
          "SAP EWM",
          "Materials planning",
          "Procurement",
          "Lean inventory",
          "Supplier performance"
        ],
        "metrics": [
          [
            "10%",
            "reported material-related cost reduction",
            "Owner-reported result of supplier performance and corrective-action work. No dollar baseline or annual measurement period was supplied."
          ],
          [
            "15%",
            "reported improvement in cycle-count accuracy",
            "A relative improvement; baseline accuracy was not supplied, so no final accuracy or percentage-point gain is asserted."
          ],
          [
            "20%",
            "reported reduction in surplus inventory",
            "A stock-reduction measure, distinct from recurring expense savings."
          ]
        ],
        "work": [
          [
            "Critical-material forecasting and procurement planning",
            "Material requirements, shortage-risk reviews and replenishment planning linked to production needs.",
            "Connected production schedules, consumption, supplier timing and usable stock. Planners reviewed forecasts and buffers; procurement and quality owners approved commitments and material substitutions."
          ],
          [
            "Supplier corrective action and contract performance",
            "Supplier performance reviews, discrepancy follow-up and coordination of delivery and contract obligations.",
            "Worked with procurement, quality and receiving to identify causes, track corrective actions and review subsequent deliveries. The source reports a 10% cost reduction without a dollar baseline."
          ],
          [
            "Lean inventory, cycle counting and surplus reduction",
            "Team training in Lean inventory practices and SAP EWM, supported by count investigation and surplus-action routines.",
            "Preserved first-pass count results, investigated discrepancies and coordinated approved actions on surplus stock. Reported outcomes were 15% higher cycle-count accuracy and 20% less surplus."
          ],
          [
            "Storage planning and warehouse turnaround",
            "Storage and replenishment practices aligned with material movement and production handoffs.",
            "Partnered with logistics and warehouse teams to improve staging, storage and handoff timing while preserving material identification and quality controls. Turnaround improved qualitatively; no percentage was supplied."
          ]
        ],
        "label": "Purina materials planning"
      },
      {
        "id": "nestle-tpm",
        "client": "Nestlé — TPM integration",
        "industry": "Consumer goods",
        "categories": [
          "engineering",
          "analytics"
        ],
        "experienceType": "Partner experience",
        "headline": "Connect trade promotion plans to enterprise systems.",
        "summary": "XTEL–SAP integration, Azure data pipelines and technical leadership across trade promotion management workflows.",
        "role": "One Tola consultant developed critical integration patterns and led architecture and delivery coordination, working with NTT DATA, client engineers, SAP specialists and XTEL teams. Client owners retained business approvals, platform access and ongoing operations.",
        "scope": "Foundation integration for Health Science and Nutrition, followed by leadership across the reported Purina, Waters, Nutrition and Health Science scope. This trade promotion management portfolio is separate from Nestlé analytics and materials planning.",
        "status": "Reported project phases: 2019–2021 and 2021–2023. The NTT DATA Technical Lead role is recorded for 2019–2022; overlapping role ranges do not establish separate full-time assignments or an exact transition date.",
        "tags": [
          "XTEL",
          "SAP",
          "Azure Blob Storage",
          "Azure Service Bus",
          "IDocs",
          "Trade promotion management"
        ],
        "metrics": [
          [
            "2M+",
            "monthly records in each reported phase",
            "Phase-specific pipeline volume; the two phases are not added together into a 4M+ monthly total."
          ],
          [
            "40%",
            "reported reduction in integration processing time",
            "2021–2023 leadership phase; separate from the foundation phase’s 45% throughput improvement."
          ],
          [
            "60%",
            "reported reduction in production incidents",
            "2021–2023 leadership phase, associated with proactive monitoring and automated error handling; not an uptime percentage."
          ]
        ],
        "work": [
          [
            "Foundation integration: Health Science and Nutrition",
            "High-volume XTEL–SAP pipelines using Azure Blob Storage for payloads and Azure Service Bus for dispatch, with mappings, batching and reconciliation.",
            "During 2019–2021, developed and maintained integration flows with client and partner engineering support. Batching and parallel processing improved reported throughput by 45%, with 99.9% data integrity across 2M+ monthly records. Integrity concerns transfer and reconciliation, rather than business-data accuracy or availability."
          ],
          [
            "Integration leadership and scale",
            "Shared XTEL–SAP architecture using structured files, IDocs and services, with priority promotional synchronization, quality controls, monitoring and vendor collaboration.",
            "During 2021–2023, led technical design across the reported Purina, Waters, Nutrition and Health Science scope. Worked with XTEL on roadmap feedback and client-specific enhancements. Reported outcomes were 40% shorter processing time, 99.8% data accuracy across 2M+ monthly records and 60% fewer production incidents. Client, partner and vendor specialists implemented and operated their components."
          ]
        ],
        "label": "Trade promotion integration"
      },
      {
        "id": "nestle",
        "client": "Nestlé",
        "industry": "Consumer goods",
        "categories": [
          "analytics",
          "ai"
        ],
        "headline": "Connect marketing insight to supply planning.",
        "summary": "Marketing measurement, raw-material inventory policies and demand forecasting supported by repeatable model delivery.",
        "role": "Tola’s principal data science consultant led analytical design, critical components, coaching and technical delivery. Client employees and specialist vendors implemented integrations, operated platforms and made business decisions.",
        "scope": "Nestlé Purina PetCare’s U.S. pet-food operations: six brands, three plants, three distribution centers, 240 ingredient and packaging materials, and finished-goods demand planning.",
        "status": "Delivery ran January 2023–December 2025, with initial handover complete and outcomes reported through December 2025.",
        "tags": [
          "Bayesian modeling",
          "Pet-food supply planning",
          "AWS",
          "Azure ML",
          "Azure DevOps"
        ],
        "work": [
          [
            "Team capability and delivery standards",
            "Coaching and shared technical practices for the client’s data science organization.",
            "Aligned machine-learning work with business priorities and established repeatable approaches to statistical review, engineering and ownership."
          ],
          [
            "Marketing measurement",
            "AWS-based marketing-mix modeling, Bayesian analysis and multi-touch attribution.",
            "Connected channel measurement with allocation scenarios and business review. Client and agency teams supplied business data and measurement access; brand owners approved spending decisions."
          ],
          [
            "Raw-material inventory planning",
            "Probabilistic safety stock and statistical forecasts for more than 200 raw-material SKUs.",
            "Connected demand, supplier variability and inventory policies, with reusable modeling frameworks for client teams to extend."
          ],
          [
            "Demand forecasting and model delivery",
            "Time-series and gradient-boosting forecasts, with Azure Machine Learning training and batch inference and Azure DevOps release automation.",
            "Tola designed the forecast hierarchy, initial model and evaluation approach. Client engineers completed feeds, dashboards and platform operations. The record reports 50% less active planning effort and 25% shorter lead time for comparable model changes."
          ]
        ],
        "metrics": [
          [
            "50%",
            "reported reduction in active planning effort",
            "Matched weekly planning work decreased from 120 to 60 staff-hours; this is a capacity measure, not verified payroll savings."
          ],
          [
            "18%",
            "reported reduction in excess raw-material inventory",
            "Mean month-end excess value decreased from $5.0 million to $4.1 million using a fixed benchmark."
          ],
          [
            "99%",
            "reported material availability",
            "Eligible production material-request lines supplied in full by the required time during 2025; not a per-material guarantee."
          ]
        ],
        "experienceType": "Tola engagement",
        "label": "Data science and analytics"
      }
    ]
  },
  {
    "id": "gaf",
    "client": "GAF",
    "industry": "Manufacturing",
    "categories": [
      "engineering",
      "analytics"
    ],
    "headline": "Keep payments moving. Make operations clearer.",
    "summary": "Payment-provider migration, SQL reporting and a unified contractor collaboration portal.",
    "role": "Team experience includes a Solution Architect and payment integration lead working with GAF engineering, finance and delivery stakeholders.",
    "scope": "Payment-provider transition, financial reconciliation, SQL performance and a portal serving more than 500 contractor accounts.",
    "status": "Experience recorded during 2022–2025.",
    "tags": [
      "Payment integration",
      "SQL",
      ".NET Core",
      "React",
      "Okta"
    ],
    "work": [
      [
        "Payment-provider transition",
        "Middleware architecture supporting a PayPal-to-Tempus migration.",
        "Designed the gateway for a reported 5 million-plus annual transaction environment, with continuity of payment service as a central delivery requirement."
      ],
      [
        "Financial reporting and SQL performance",
        "Dynamic SQL reporting and database tuning for reconciliation workflows.",
        "Used execution plans and indexing to improve reporting over more than 3 million monthly finance records. The record reports 60% less active reconciliation effort and responses below 200 milliseconds for selected query families."
      ],
      [
        "Unified partner portal",
        "A responsive collaboration platform for more than 500 contractor accounts.",
        "Led architecture using React and Redux, Okta identity management, and .NET Core with Entity Framework. Client application, database and identity teams implemented and maintained their components."
      ]
    ],
    "metrics": [
      [
        "60%",
        "reported reduction in reconciliation effort",
        "Active work in the scoped month-end reconciliation process; not the elapsed duration of the entire financial close."
      ],
      [
        "500+",
        "contractor accounts",
        "Reported scope of the unified partner portal, not simultaneous-user capacity."
      ]
    ],
    "experienceType": "Team experience"
  },
  {
    "id": "long-term-care",
    "client": "Long-term care pharmacy",
    "industry": "Clinical pharmacy",
    "categories": [
      "clinical"
    ],
    "headline": "Clinical pharmacy support across more than 30 care facilities.",
    "summary": "Tola provides medication reviews, clinical consultation and facility support through a direct long-term care pharmacy contract.",
    "role": "Direct Tola engagement with a long-term care pharmaceutical company. A Tola pharmacist lead coordinates client staff and additional qualified personnel as needed; providers retain prescribing decisions.",
    "scope": "Clinical pharmacy services for more than 30 nursing home facilities, including monthly on-site visits and interdisciplinary meetings.",
    "status": "Began July 2023; ongoing as confirmed by the project owner on October 17, 2026.",
    "tags": [
      "Medication review",
      "Clinical consultation",
      "Facility support"
    ],
    "work": [
      [
        "Medication regimen review",
        "Resident chart reviews and written recommendations for medical and nursing staff.",
        "Reviewed indications, dosing, duplications, interactions, allergies and other medication concerns, with recommendations for provider consideration."
      ],
      [
        "Clinical consultation and monitoring",
        "Patient-specific consultation, drug information and medication monitoring recommendations.",
        "Supported requested reviews involving laboratory results, renal function, antimicrobial therapy, anticoagulation and other clinical considerations."
      ],
      [
        "Facility medication systems",
        "Monthly facility visits addressing medication storage, documentation, expiration checks and medication procedures.",
        "Worked with facility personnel on identified issues and authorized medication-related procedures."
      ],
      [
        "Interdisciplinary care",
        "Monthly collaboration with facility teams on patient care and treatment plans.",
        "Shared medication findings, recommended relevant monitoring and coordinated follow-up with responsible care-team members."
      ]
    ],
    "metrics": [
      [
        "30+",
        "nursing home facilities",
        "Service coverage reported by the project owner on October 17, 2026; this is a scope measure, not a measured clinical outcome."
      ]
    ],
    "experienceType": "Tola engagement"
  },
  {
    "id": "bjs",
    "client": "BJ’s Wholesale Club",
    "industry": "Retail",
    "categories": [
      "analytics",
      "ai",
      "engineering"
    ],
    "headline": "Decision science and AI across retail operations.",
    "summary": "Forecasting, membership analytics, executive AI and workflow automation across two distinct engagements.",
    "role": "Experience spans team-led retail analytics and a direct Tola AI-delivery engagement. Each engagement below identifies its own responsibilities and client delivery support.",
    "scope": "Retail inventory, marketing and membership analytics; AI governance, executive reporting, inventory prediction and departmental agents.",
    "status": "Retail analytics began in September 2022 and remained ongoing in the October 2026 record. Initial AI delivery concluded in September 2026, followed by limited support.",
    "tags": [
      "Forecasting",
      "Monte Carlo",
      "Bayesian MMM",
      "Segmentation",
      "AI governance",
      "Conversational analytics",
      "Inventory optimization",
      "Azure",
      "Enterprise integration"
    ],
    "work": [
      [
        "Strategy and data literacy",
        "Cross-functional initiatives and workshops connecting analytics to business priorities.",
        "Worked with IT, finance and operations to establish shared direction and improve the use of data in business decisions."
      ],
      [
        "Inventory forecasting and replenishment",
        "Forecasting and inventory optimization using ARIMA, LSTM and Monte Carlo simulation.",
        "Directed the reported $4.25 million initiative. Supplied results include better forecast accuracy, fewer stockouts, less excess inventory and a contribution to sales growth."
      ],
      [
        "Marketing measurement",
        "Marketing-mix modeling, Bayesian statistics and multi-touch attribution.",
        "Supported advertising allocation within the reported $20 million marketing effort. Revenue uplift and advertising-efficiency figures are not added to inventory-related sales effects."
      ],
      [
        "Membership acquisition and retention",
        "Segmentation and predictive modeling for high-value customer groups.",
        "Collaborated with marketing and pricing on acquisition and engagement, with reported increases of 10% in acquisition and 15% in retention."
      ],
      [
        "AI strategy and governance",
        "An investment roadmap and operating standards for production AI.",
        "Led prioritization, governance, evaluation standards and reporting. Purchasing, payment and operating authority remained with the client."
      ],
      [
        "Executive conversational analytics",
        "Natural-language access to approved business reporting with supporting visualizations.",
        "Architected the application and critical components, with permissions and calculations enforced outside the language model. Client teams completed integrations, testing and ongoing operations."
      ],
      [
        "Client delivery organization",
        "Technical standards, coaching and delivery coordination for a growing client team.",
        "Built and led BJ’s’s organization of more than 20 data scientists and engineers, including offshore personnel; these were client staff, not Tola employees."
      ],
      [
        "Inventory prediction and optimization",
        "Stockout prediction, safety-stock optimization and exception monitoring.",
        "Architected the platform connecting SAP EWM, Oracle and JDE data. BJ’s teams implemented source integrations and retained approval of inventory actions."
      ],
      [
        "Departmental AI agents",
        "Automation for drafting, pricing analysis, quotation review, experimentation and data extraction.",
        "Led a program across seven departments, with client review for consequential actions and client ownership of production operations."
      ]
    ],
    "metrics": [],
    "experienceType": "Tola and team experience",
    "engagements": [
      {
        "id": "bjs",
        "client": "BJ’s Wholesale Club",
        "industry": "Retail",
        "categories": [
          "analytics",
          "ai"
        ],
        "headline": "Decision science across retail operations.",
        "summary": "Inventory forecasting, marketing measurement and membership analytics connected to business priorities.",
        "role": "Team experience includes data science leadership working with BJ’s IT, finance, operations, marketing and pricing teams.",
        "scope": "Inventory optimization, advertising allocation, membership acquisition and retention, and cross-functional data literacy.",
        "status": "The source records an engagement beginning September 2022 and continuing at its October 2026 documentation snapshot.",
        "tags": [
          "Forecasting",
          "Monte Carlo",
          "Bayesian MMM",
          "Segmentation"
        ],
        "work": [
          [
            "Strategy and data literacy",
            "Cross-functional initiatives and workshops connecting analytics to business priorities.",
            "Worked with IT, finance and operations to establish shared direction and improve the use of data in business decisions."
          ],
          [
            "Inventory forecasting and replenishment",
            "Forecasting and inventory optimization using ARIMA, LSTM and Monte Carlo simulation.",
            "Directed the reported $4.25 million initiative. Supplied results include better forecast accuracy, fewer stockouts, less excess inventory and a contribution to sales growth."
          ],
          [
            "Marketing measurement",
            "Marketing-mix modeling, Bayesian statistics and multi-touch attribution.",
            "Supported advertising allocation within the reported $20 million marketing effort. Revenue uplift and advertising-efficiency figures are not added to inventory-related sales effects."
          ],
          [
            "Membership acquisition and retention",
            "Segmentation and predictive modeling for high-value customer groups.",
            "Collaborated with marketing and pricing on acquisition and engagement, with reported increases of 10% in acquisition and 15% in retention."
          ]
        ],
        "metrics": [
          [
            "25%",
            "reported reduction in stockouts",
            "Owner-supplied result for the inventory optimization initiative; not a percentage-point change."
          ],
          [
            "20%",
            "reported reduction in excess inventory",
            "Owner-supplied result for the inventory initiative; no profit or cash-savings claim is implied."
          ]
        ],
        "experienceType": "Team experience",
        "label": "Retail decision science"
      },
      {
        "id": "bjs-ai",
        "client": "BJ’s Wholesale Club — AI delivery",
        "industry": "Retail",
        "categories": [
          "ai",
          "analytics",
          "engineering"
        ],
        "headline": "AI architecture that supports operating decisions.",
        "summary": "AI governance, executive analytics, inventory optimization and departmental automation delivered with the client’s engineering teams.",
        "role": "Tola provided Harith Saeed Abdelrahman as its sole consultant for architecture, critical technical development, team development and delivery leadership. BJ’s supplied the delivery organization and retained operational authority.",
        "scope": "Distribution analytics across five distribution centers, executive reporting and seven participating business functions. This AI-delivery portfolio is presented separately from the retail decision-science engagement.",
        "status": "Initial delivery completed in September 2026; limited escalation and enhancement support continued under a separate authorization.",
        "tags": [
          "AI governance",
          "Conversational analytics",
          "Inventory optimization",
          "Azure",
          "Enterprise integration"
        ],
        "work": [
          [
            "AI strategy and governance",
            "An investment roadmap and operating standards for production AI.",
            "Led prioritization, governance, evaluation standards and reporting. Purchasing, payment and operating authority remained with the client."
          ],
          [
            "Executive conversational analytics",
            "Natural-language access to approved business reporting with supporting visualizations.",
            "Architected the application and critical components, with permissions and calculations enforced outside the language model. Client teams completed integrations, testing and ongoing operations."
          ],
          [
            "Client delivery organization",
            "Technical standards, coaching and delivery coordination for a growing client team.",
            "Built and led BJ’s’s organization of more than 20 data scientists and engineers, including offshore personnel; these were client staff, not Tola employees."
          ],
          [
            "Inventory prediction and optimization",
            "Stockout prediction, safety-stock optimization and exception monitoring.",
            "Architected the platform connecting SAP EWM, Oracle and JDE data. BJ’s teams implemented source integrations and retained approval of inventory actions."
          ],
          [
            "Departmental AI agents",
            "Automation for drafting, pricing analysis, quotation review, experimentation and data extraction.",
            "Led a program across seven departments, with client review for consequential actions and client ownership of production operations."
          ]
        ],
        "metrics": [
          [
            "22%",
            "reported stockout-rate reduction",
            "2022 baseline versus 2024 comparison, normalized to equal eligible item-location exposure across five distribution centers."
          ],
          [
            "98.2%",
            "reported first-shipment unit fill rate",
            "Eligible fulfilled units divided by eligible ordered units across the five-center network in 2024."
          ],
          [
            "21",
            "production agents in the supplied record",
            "Seven departments; initial acceptance completed by September 2026."
          ]
        ],
        "experienceType": "Tola engagement",
        "label": "AI transformation and delivery"
      }
    ]
  },
  {
    "id": "unitedhealth",
    "client": "UnitedHealth Group",
    "industry": "Healthcare",
    "categories": [
      "ai",
      "analytics",
      "engineering"
    ],
    "headline": "Member insights and more consistent model delivery.",
    "summary": "Wellness recommendations, customer journey analytics, lead valuation and Azure deployment automation.",
    "role": "Team experience as a Senior Principal Data Scientist at UnitedHealth Group, combining modeling, architecture and mentoring.",
    "scope": "Health and wellness engagement, web and assisted-service analytics, lead acquisition and model delivery.",
    "status": "July 2021–September 2022.",
    "tags": [
      "Machine learning",
      "Collaborative filtering",
      "Azure",
      "CI/CD"
    ],
    "work": [
      [
        "Mentoring and technical leadership",
        "Individual development plans and technical coaching for data scientists.",
        "Connected practical delivery work with feedback on technical skills and leadership development."
      ],
      [
        "Health and wellness recommendations",
        "A recommendation engine supporting engagement with health and wellness offerings.",
        "Used collaborative filtering to rank eligible wellness offerings. Client teams retained eligibility and clinical decisions; the engine supported engagement with services."
      ],
      [
        "Cross-channel customer analytics",
        "An analytical approach spanning web, click-to-call, chat and IVR interactions.",
        "Applied cluster analysis and predictive analytics to understand customer engagement across channels."
      ],
      [
        "Lead valuation",
        "A real-time model estimating lead value to inform acquisition decisions.",
        "Estimated expected lead value to support acquisition spending, with business owners retaining commercial controls. This was a lead-procurement decision, not insurance-premium pricing."
      ],
      [
        "Azure model delivery",
        "Deployment infrastructure and continuous integration and delivery for models.",
        "Designed the Azure model-delivery approach and CI/CD practices. Client platform engineers implemented and operated infrastructure and pipelines, while scientists maintained model training and evaluation."
      ]
    ],
    "experienceType": "Team experience"
  },
  {
    "id": "creditninja",
    "client": "CreditNinja",
    "industry": "Financial services",
    "categories": [
      "ai",
      "analytics",
      "engineering"
    ],
    "headline": "Make models useful in everyday operations.",
    "summary": "Risk analytics, product economics, lead scoring and scalable model delivery for fintech operations.",
    "role": "Team experience includes a Data Science Manager leading data science and engineering work with CreditNinja’s business teams.",
    "scope": "Risk assessment, profitability analysis, lead conversion, transaction categorization, and batch and real-time model delivery.",
    "status": "Experience recorded October 2020–July 2021.",
    "tags": [
      "AWS SageMaker",
      "Jenkins",
      "NLP",
      "Lead scoring"
    ],
    "work": [
      [
        "Team leadership and risk analytics",
        "Data science and engineering leadership supporting fintech product improvements.",
        "Developed risk-assessment capability, improved data processing and connected model development with product needs."
      ],
      [
        "Product profitability",
        "An early analysis that informed changes to product economics.",
        "Identified inefficiencies in the first month and informed product adjustments. The expanded record defines the reported $1 million as annualized economic benefit, including avoided external costs and released staff capacity; it is not first-month cash or established net savings."
      ],
      [
        "Lead scoring",
        "A model identifying leads likely to convert.",
        "Used conversion probabilities to prioritize eligible leads within the client’s acquisition process. The reported customer-volume growth reflects the broader acquisition initiative; a conversion score did not determine credit eligibility."
      ],
      [
        "Scalable model infrastructure",
        "A platform for batch and real-time scoring.",
        "Designed ML infrastructure using AWS SageMaker and Jenkins to support operational scalability and project delivery."
      ],
      [
        "Transaction categorization",
        "NLP-based classification of bank-statement transactions.",
        "Made transaction information easier to interpret for customers and financial tracking."
      ]
    ],
    "metrics": [],
    "experienceType": "Team experience"
  },
  {
    "id": "aspen",
    "client": "Aspen RxHealth",
    "industry": "Clinical pharmacy",
    "categories": [
      "clinical"
    ],
    "headline": "Medication reviews with practical follow-through.",
    "summary": "Remote medication therapy management, patient education, adherence support and provider communication.",
    "role": "Team experience providing pharmacist-led medication therapy management through Aspen RxHealth.",
    "scope": "Telephone medication reviews, targeted adherence interventions and recommendations to treating providers.",
    "status": "Experience recorded from June 2021; ongoing in the October 2026 portfolio.",
    "tags": [
      "Medication therapy management",
      "Patient education",
      "Provider collaboration"
    ],
    "work": [
      [
        "Comprehensive medication reviews",
        "Medication reconciliation and patient discussions about purpose, dosing and therapy goals.",
        "Reviewed patient medication profiles, identified duplications and interactions, and discussed concerns and follow-up needs."
      ],
      [
        "Targeted adherence support",
        "Individual support addressing barriers to taking medications as intended.",
        "Discussed appropriate refill arrangements, reminders, extended supplies and medication synchronization according to patient needs."
      ],
      [
        "Provider recommendations",
        "Recommendations about identified medication issues and patient-specific gaps in therapy.",
        "Communicated findings to providers and supported coordination between patients and their treating teams."
      ]
    ],
    "experienceType": "Team experience"
  },
  {
    "id": "cvs",
    "client": "CVS Pharmacy",
    "industry": "Clinical pharmacy",
    "categories": [
      "clinical"
    ],
    "headline": "Patient care supported by reliable pharmacy operations.",
    "summary": "Community pharmacy, immunizations, medication access and temporary pharmacy leadership.",
    "role": "Team experience as a community pharmacist at CVS Pharmacy, including temporary pharmacist-in-charge responsibilities.",
    "scope": "Prescription review, counseling, patient outreach, insurance coordination and pharmacy workflow leadership in Dallas, Texas.",
    "status": "June 2021–January 2024.",
    "tags": [
      "Community pharmacy",
      "Medication safety",
      "Pharmacy leadership"
    ],
    "work": [
      [
        "Prescription safety and medication access",
        "Prescription assessment, dispensing, patient counseling and coordination with prescribers and insurers.",
        "Reviewed orders for appropriateness and completeness, identified medication issues and helped resolve refills, clarifications and coverage barriers."
      ],
      [
        "Immunizations and preventive care",
        "Immunization services, patient screening and education.",
        "Assessed patient needs, provided authorized immunizations and explained administration and relevant follow-up information."
      ],
      [
        "Patient outreach and medication management",
        "Telephone follow-up about new or changing therapies, late refills and medication concerns.",
        "Built patient relationships, discussed adherence barriers and coordinated follow-up with the care team."
      ],
      [
        "Pharmacy workflow and temporary leadership",
        "Technician supervision, dispensing and billing coordination, scheduling and team coaching.",
        "Directed daily workflow and served as temporary pharmacist in charge, supporting operational oversight and continuity of patient care."
      ]
    ],
    "experienceType": "Team experience"
  },
  {
    "id": "best-buy",
    "client": "Best Buy Healthcare Venture",
    "industry": "Healthcare",
    "categories": [
      "engineering"
    ],
    "headline": "Architecture and delivery for a new healthcare venture.",
    "summary": "Technical leadership, vendor integration and engineering practices for a greenfield healthcare initiative.",
    "role": "Team experience as technical lead on a 13-person team establishing a new Best Buy healthcare business line.",
    "scope": "Architecture, engineering standards, vendor technology integration and product ownership for selected initiatives.",
    "status": "January 2022–December 2023.",
    "tags": [
      "Solution architecture",
      "Product ownership",
      "Vendor integration"
    ],
    "work": [
      [
        "Architecture and delivery foundations",
        "Core architectural decisions and a foundation supporting work in a regulated healthcare environment.",
        "Worked with technical management and stakeholders to translate business needs into technical direction and delivery priorities."
      ],
      [
        "Vendor integration",
        "Coordination of third-party technology integration into the new initiative.",
        "Aligned internal teams, external vendors and stakeholders on technical dependencies and implementation needs."
      ],
      [
        "Engineering and product leadership",
        "Engineering standards, code review and product ownership for selected initiatives.",
        "Guided technical decisions and prepared documentation explaining resource and budget needs to leadership."
      ]
    ],
    "experienceType": "Team experience"
  },
  {
    "id": "ascend",
    "client": "Ascend Learning",
    "industry": "Education",
    "categories": [
      "engineering"
    ],
    "headline": "Delivery practices that help engineering teams move.",
    "summary": "Cross-functional leadership, release automation, incident response and reusable service architecture.",
    "role": "Team experience leading a 13-person cross-functional team at Ascend Learning, including four months as acting manager.",
    "scope": "Engineering, QA, database, product and project coordination; delivery infrastructure, training and onshore/offshore collaboration.",
    "status": "June 2018–January 2022.",
    "tags": [
      "Release automation",
      "Technical leadership",
      "Service architecture"
    ],
    "work": [
      [
        "Team and delivery foundations",
        "Shared delivery infrastructure, technical direction and cross-functional coordination.",
        "Built the engineering foundation, trained teams and represented delivery needs in stakeholder and architecture forums."
      ],
      [
        "Release automation",
        "An automated path to production supporting continuous delivery.",
        "Improved release practices and helped teams adopt the delivery infrastructure."
      ],
      [
        "Security incident response",
        "Coordination of a remediation plan during a live security incident.",
        "Worked with directors and the CIO to prioritize and execute corrective work under time pressure."
      ],
      [
        "Reusable services and mobile enablement",
        "An approach extending existing web services into mobile experiences.",
        "Guided service reuse and architecture review to reduce duplicated engineering work."
      ]
    ],
    "experienceType": "Team experience"
  },
  {
    "id": "federal-reserve",
    "client": "Federal Reserve Bank of Kansas City",
    "industry": "Financial services",
    "categories": [
      "engineering"
    ],
    "headline": "Coordinate delivery across teams and locations.",
    "summary": "Application delivery leadership and the adoption of user-experience practices across teams.",
    "role": "Team experience includes progression from developer to lead of two teams in Kansas City and New York, with responsibility for stakeholder updates, timelines and feature definition.",
    "scope": "Multi-team application delivery, coordination across technical disciplines, and follow-on UX adoption initiatives.",
    "status": "Experience recorded January 2013–August 2015; the original source reports on-time delivery.",
    "tags": [
      "Application delivery",
      "User experience",
      "Cross-team leadership"
    ],
    "work": [
      [
        "Two-city delivery leadership",
        "Application delivery across teams in Kansas City and New York.",
        "Owned timelines, feature definition and stakeholder communication, coordinating with backend, database, DevOps and security partners."
      ],
      [
        "UX practice and team enablement",
        "User-experience practices introduced across multiple initiatives.",
        "Built leadership support, trained teams through developer level and carried UX practices into subsequent work."
      ]
    ],
    "metrics": [],
    "experienceType": "Team experience"
  },
  {
    "id": "nutrabolt",
    "client": "Nutrabolt",
    "industry": "Consumer goods",
    "categories": [
      "engineering",
      "analytics"
    ],
    "headline": "Translate commercial operations into working systems.",
    "summary": "Technical product ownership for XTEL trade promotion management, data integration and acceptance testing.",
    "role": "Team experience includes a Technical Product Owner leading functional design and requirements with Nutrabolt stakeholders, the Microsoft Fabric team and XTEL delivery teams.",
    "scope": "Three-tier promotion planning, Dynamics 365–Fabric–XTEL data flows, external data, change requests and integration testing.",
    "status": "Role recorded from July 2025 and ongoing at the October 2026 documentation snapshot.",
    "tags": [
      "XTEL TPM",
      "Dynamics 365",
      "Microsoft Fabric",
      "Product ownership"
    ],
    "work": [
      [
        "Functional design and requirements",
        "A trade promotion model reflecting an indirect, distributor-led business.",
        "Led design sessions and requirements prioritization, including parent promotions that cascade into child promotions down the distributor chain."
      ],
      [
        "Data and integration coordination",
        "Data flows connecting Dynamics 365, Microsoft Fabric and XTEL.",
        "Defined data meaning and acceptance requirements across Dynamics 365, Fabric and XTEL ADAM, including VIP and Circana inputs. Client Fabric and ERP specialists and XTEL engineers implemented ingestion, transformations and receiving mappings."
      ],
      [
        "Change control and testing",
        "A managed path from change request to integration and user acceptance testing.",
        "Captured business needs, reviewed feasibility and estimates with XTEL, and facilitated SIT and UAT against agreed requirements."
      ]
    ],
    "metrics": [],
    "experienceType": "Team experience"
  },
  {
    "id": "omnius",
    "client": "Omnius Studio",
    "industry": "Technology & professional services",
    "categories": [
      "engineering",
      "ai"
    ],
    "headline": "Technology direction from company strategy to product delivery.",
    "summary": "Operating leadership, AI-assisted delivery and Soli software for private practice owners.",
    "role": "Team leadership experience at Omnius Studio, spanning company strategy, architecture, delivery and resource decisions within delegated responsibilities. The founder retained corporate and investment authority.",
    "scope": "Agency operations, automation strategy and the Soli spin-off software product for private practice owners.",
    "status": "Began November 2023; ongoing in the October 2026 portfolio. Soli is described as in production.",
    "tags": [
      "Technology leadership",
      "AI-assisted workflows",
      "Product delivery"
    ],
    "work": [
      [
        "Company strategy and operations",
        "A company vision translated into technology and operating decisions.",
        "Aligned priorities across departments and directed hiring, performance and resource decisions."
      ],
      [
        "Automation strategy",
        "A strategy for repeatable systems and AI-assisted client delivery.",
        "Identified manual work that could be improved through automation and connected the work to business priorities."
      ],
      [
        "Soli product delivery",
        "Software taken from concept to production for private practice owners.",
        "Owned architecture, technical direction and the delivery lifecycle while balancing scope, security, timelines and budget."
      ]
    ],
    "experienceType": "Team experience"
  },
  {
    "id": "geographic",
    "client": "Geographic Solutions",
    "industry": "Workforce services",
    "categories": [
      "analytics",
      "ai"
    ],
    "headline": "Turn workforce data into practical insight.",
    "summary": "Labor-market analytics, campaign reporting and a matching tool supporting workforce development.",
    "role": "Team experience includes a Data Scientist Lead developing analytics and matching tools for Geographic Solutions.",
    "scope": "More than 9,000 data records, market-trend analysis, campaign tracking and job-matching support.",
    "status": "Experience recorded October 2015–September 2020.",
    "tags": [
      "Power BI",
      "LDA",
      "K-means",
      "Workforce analytics"
    ],
    "work": [
      [
        "Labor-market and campaign analytics",
        "Analysis of market trends and a Power BI campaign dashboard.",
        "Turned more than 9,000 records into information for workforce-program reporting and campaign tracking."
      ],
      [
        "Job-matching support",
        "A matching tool using LDA and K-means.",
        "Combined Latent Dirichlet Allocation topic modeling and K-means to support counselor-reviewed matching. The tool supported placement work; it did not make hiring decisions."
      ]
    ],
    "metrics": [
      [
        "9K+",
        "records analyzed",
        "Reported scope of the market-trend analysis."
      ]
    ],
    "experienceType": "Team experience"
  },
  {
    "id": "hr-block",
    "client": "H&R Block",
    "industry": "Financial services",
    "categories": [
      "engineering"
    ],
    "headline": "Modern interfaces. A team ready to maintain them.",
    "summary": "UI modernization, delivery planning and engineering enablement across local and offshore teams.",
    "role": "Team experience includes leading five UI developers—three local and two offshore—while reporting to H&R Block’s technical manager, and training approximately six additional backend developers.",
    "scope": "UI technology modernization, executable plans, requirement analysis, resource planning and developer onboarding.",
    "status": "Experience recorded August 2015–July 2016. The engagement ended when the project was paused.",
    "tags": [
      "UI modernization",
      "Engineering enablement",
      "Delivery planning"
    ],
    "work": [
      [
        "UI modernization and execution",
        "Technical direction for a five-person UI team.",
        "Worked with project managers to break work into executable plans, address requirements gaps and manage delivery timelines."
      ],
      [
        "Training and capacity planning",
        "Support for adoption of the new technology stack.",
        "Trained approximately six backend engineers, onboarded incoming developers and contributed to resource and capacity decisions."
      ]
    ],
    "metrics": [],
    "experienceType": "Team experience"
  },
  {
    "id": "damascus",
    "client": "Damascus Edge",
    "industry": "Technology & professional services",
    "categories": [
      "engineering"
    ],
    "headline": "Rapid prototypes, with teams prepared to take ownership.",
    "summary": "Solution architecture, hands-on development and technical handover for client assignments through Damascus Edge.",
    "role": "Team experience delivering client assignments through Damascus Edge, an innovation agency, in collaboration with downstream client architects and teams.",
    "scope": "Time-critical prototypes and solutions spanning front-end, back-end, cloud and database work.",
    "status": "August 2016–September 2017.",
    "tags": [
      "Rapid prototyping",
      "Full-stack delivery",
      "Technical handover"
    ],
    "work": [
      [
        "Solution architecture and prototyping",
        "Working prototypes that clients could review and use to refine requirements.",
        "Planned and built across the application stack, gathered direct feedback and iterated toward client needs."
      ],
      [
        "Documentation and technical handover",
        "Documentation and training supporting client-team ownership.",
        "Worked with client architects to fit operating constraints and helped receiving teams understand the delivered solutions."
      ]
    ],
    "experienceType": "Partner experience"
  },
  {
    "id": "contra",
    "client": "Contra Software",
    "industry": "Technology & professional services",
    "categories": [
      "engineering"
    ],
    "headline": "From an undefined idea to a shippable build.",
    "summary": "Product direction, requirements, architecture and delivery leadership for an early-stage software company.",
    "role": "Team experience as de facto product owner and solution lead at Contra Software, guiding a small development team.",
    "scope": "Business analysis, requirements, solution architecture, feature definition and delivery planning.",
    "status": "November 2017–June 2018. The engagement ended when the startup lost funding.",
    "tags": [
      "Product discovery",
      "Solution architecture",
      "Delivery leadership"
    ],
    "work": [
      [
        "Product definition",
        "A practical product direction and delivery plan for a team working from unclear requirements.",
        "Translated business needs into requirements, architecture, prioritized features and a delivery timeline."
      ],
      [
        "Software delivery",
        "A shippable build developed for early client feedback.",
        "Led a small team toward usable software and rapid feedback. Funding loss ended the engagement."
      ]
    ],
    "experienceType": "Team experience"
  },
  {
    "id": "quick-picker",
    "client": "Quick Picker Technology",
    "industry": "Cross-industry analytics",
    "categories": [
      "analytics",
      "ai"
    ],
    "headline": "Analytics supporting insurance and commercial decisions.",
    "summary": "Insurance risk modeling, management reporting and fleet analysis through Quick Picker Technology.",
    "role": "Team experience as Data Analytics Lead at Quick Picker Technology, a consultancy, for downstream insurance and consumer-goods assignments.",
    "scope": "Claims-related modeling using more than five million records and 81 predictors; management reporting and fleet analytics for Unilever through the consultancy.",
    "status": "November 2008–January 2015.",
    "tags": [
      "Statistical modeling",
      "Business intelligence",
      "Fleet analytics"
    ],
    "work": [
      [
        "Insurance risk and cost analytics",
        "Generalized linear modeling of a large claims-related dataset.",
        "Used claims records and predictive variables to support insurance risk and cost analysis."
      ],
      [
        "Management reporting and fleet analysis",
        "A management tool displaying business performance indicators and trends for Unilever.",
        "Connected reporting and operational analysis to sales visibility and fleet-maintenance decisions through Quick Picker Technology."
      ]
    ],
    "experienceType": "Partner experience"
  },
  {
    "id": "ceva",
    "client": "Ceva Animal Health",
    "industry": "Animal health",
    "categories": [
      "analytics",
      "ai"
    ],
    "headline": "Connect pricing insight to demand planning.",
    "summary": "Competitor rate reconstruction, pricing optimization and capacity-constrained demand forecasting.",
    "role": "Team experience includes analytical method design, engineering and technical delivery for pricing and demand forecasting.",
    "scope": "Ceva Animal Health competitor-pricing analysis and machine-learning forecasting across more than 500 SKU-location combinations.",
    "status": "Historical experience recorded May 2015–August 2018.",
    "tags": [
      "Pricing analytics",
      "XGBoost",
      "Time-series ensembles",
      "Capacity planning"
    ],
    "work": [
      [
        "Pricing analysis and optimization",
        "A system reconstructing competitor rate structures from market observations.",
        "Used monotonic search and parallel processing to feed pricing optimization, with an owner-reported 3–5% margin improvement. The source does not establish an absolute percentage-point change in margin."
      ],
      [
        "Forecasting and constrained planning",
        "Capacity-constrained machine-learning demand forecasts.",
        "Combined time-series ensembles and XGBoost across more than 500 SKU-location combinations. Owner-reported results include $2 million in annual logistics savings, 98% fill rate and MAPE decreasing from 25% to 15%."
      ]
    ],
    "metrics": [
      [
        "25% → 15%",
        "reported forecast MAPE",
        "A 10-percentage-point decrease, equivalent to a 40% relative reduction in mean absolute percentage error."
      ],
      [
        "500+",
        "SKU-location combinations",
        "Owner-supplied scope of the forecasting and capacity-constrained planning work."
      ]
    ],
    "experienceType": "Team experience"
  }
];
const redirects = {
  "bjs-ai": "bjs#bjs-ai",
  "nestle-purina": "nestle#nestle-purina",
  "nestle-tpm": "nestle#nestle-tpm"
};
module.exports = {services,projects,redirects};
