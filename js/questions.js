/*
===========================================================
Disaster Preparedness Awareness & Self-Assessment Initiative
Question Bank Version 1.0

Prepared by:
Amit Padhye

Certificate Program in Disaster Management Law
VPM's TMC Law College, Thane

===========================================================
*/

const questions = [

/* ==========================================================
   FIRE SAFETY
========================================================== */

{
    id:1,

    pillar:"Emergency Response",

    category:"Fire Safety",

    type:"Scenario",

    importance:"Critical",

    icon:"🔥",

    risk:"Extreme",

    title:"Kitchen Oil Fire",

    situation:"While cooking, a pan containing oil catches fire. What should you do FIRST?",

    options:[

        {
            text:"Pour water on the fire.",
            score:0,
            feedback:"Water spreads burning oil and may cause the flames to flare up violently."
        },

        {
            text:"Turn off the gas supply (if safe) and cover the pan with a metal lid.",
            score:1,
            feedback:"Correct. Smothering the fire and removing the heat source is the safest response."
        },

        {
            text:"Carry the burning pan outside.",
            score:0,
            feedback:"Moving a burning pan may spill hot oil and cause severe burns."
        },

        {
            text:"Open all windows immediately.",
            score:0,
            feedback:"Opening windows does not extinguish the fire and may increase airflow."
        }

    ],

    tip:"Keep a metal lid or fire blanket easily accessible in your kitchen.",

    didYouKnow:"Many residential fires start in the kitchen due to unattended cooking.",

    learnMore:"Never use water on oil or grease fires.",

    reference:"NDMA Fire Safety Guidelines"

},

{
    id:2,

    pillar:"Emergency Response",

    category:"Fire Safety",

    type:"Scenario",

    importance:"Critical",

    icon:"🔥",

    risk:"High",

    title:"Electrical Appliance Fire",

    situation:"Your television suddenly starts smoking and catches fire due to an electrical fault. What should you do FIRST?",

    options:[

        {
            text:"Throw water on the television.",
            score:0,
            feedback:"Water can conduct electricity and may result in electric shock."
        },

        {
            text:"Touch the television and unplug it immediately.",
            score:0,
            feedback:"Touching a burning electrical appliance can be extremely dangerous."
        },

        {
            text:"Switch off the main power supply (if safe) and use an appropriate fire extinguisher.",
            score:1,
            feedback:"Correct. Disconnecting electricity reduces the risk of electrocution and fire spread."
        },

        {
            text:"Ignore it because the fire will stop on its own.",
            score:0,
            feedback:"Electrical fires can spread rapidly and require immediate action."
        }

    ],

    tip:"Avoid overloading electrical sockets and replace damaged wiring promptly.",

    didYouKnow:"Electrical faults are one of the leading causes of residential fires.",

    learnMore:"Never use water on a live electrical fire.",

    reference:"National Building Code of India - Fire & Life Safety"

},
{
    id:3,

    pillar:"Community Preparedness",

    category:"Fire Safety",

    type:"Scenario",

    importance:"High",

    icon:"🔥",

    risk:"High",

    title:"Fire in a Neighbour's Flat",

    situation:"You notice smoke and flames coming from a neighbouring apartment. What should you do FIRST?",

    options:[

        {
            text:"Raise the alarm, call the Fire Brigade (101 or 112) and warn other residents if it is safe to do so.",
            score:1,
            feedback:"Correct. Alerting emergency services immediately and warning others can save lives."
        },

        {
            text:"Wait to see if someone else reports the fire.",
            score:0,
            feedback:"Every minute counts during a fire emergency."
        },

        {
            text:"Use the lift to evacuate the building.",
            score:0,
            feedback:"Never use lifts during a fire. Always use the staircase."
        },

        {
            text:"Rush into the burning flat alone to rescue everyone.",
            score:0,
            feedback:"Entering a burning building without proper training or equipment is extremely dangerous."
        }

    ],

    tip:"Know your building's emergency exits and evacuation route before an emergency occurs.",

    didYouKnow:"Smoke inhalation is responsible for many fire-related deaths, often more than burns.",

    learnMore:"During evacuation, stay low if there is smoke and use the staircase.",

    reference:"NDMA Fire Safety Guidelines"

},

{
    id:4,

    pillar:"Emergency Response",

    category:"LPG & Electrical Safety",

    type:"Scenario",

    importance:"Critical",

    icon:"💨",

    risk:"Extreme",

    title:"LPG Gas Leakage",

    situation:"You return home and smell LPG gas inside your kitchen. What should you do FIRST?",

    options:[

        {
            text:"Switch on the kitchen light to check the source of the leak.",
            score:0,
            feedback:"Electrical switches may create sparks capable of igniting leaked LPG."
        },

        {
            text:"Light a match or lighter to identify the leakage point.",
            score:0,
            feedback:"This is extremely dangerous and may cause an explosion."
        },

        {
            text:"Open doors and windows naturally, avoid operating electrical switches and close the LPG regulator if it is safe to do so.",
            score:1,
            feedback:"Correct. Natural ventilation and avoiding sparks is the safest immediate response."
        },

        {
            text:"Switch on the exhaust fan to remove the gas quickly.",
            score:0,
            feedback:"The fan switch can also create a spark and ignite the leaked gas."
        }

    ],

    tip:"Always keep the LPG regulator and hose pipe in good condition and inspect them regularly.",

    didYouKnow:"LPG is heavier than air and may accumulate near the floor, making even small sparks dangerous.",

    learnMore:"If the smell persists after closing the regulator and ventilating the area, contact your LPG distributor or emergency services.",

    reference:"Oil Marketing Companies (LPG Consumer Safety Guidelines)"

},
{
    id:5,

    pillar:"Home Safety",

    category:"LPG & Electrical Safety",

    type:"Practice",

    importance:"Critical",

    icon:"🔥",

    risk:"High",

    title:"LPG Regulator Safety",

    situation:"Before going to sleep or leaving home for several hours, what is the safest practice regarding your LPG connection?",

    options:[

        {
            text:"Leave the LPG regulator ON because the stove knobs are closed.",
            score:0,
            feedback:"Leaving the regulator ON increases the risk if a leak develops unnoticed."
        },

        {
            text:"Turn OFF the LPG regulator after ensuring all burner knobs are OFF.",
            score:1,
            feedback:"Correct. Turning OFF the regulator when the gas is not required is the safest practice."
        },

        {
            text:"Disconnect the LPG hose every night.",
            score:0,
            feedback:"Disconnecting the hose daily is unnecessary and may damage the connection."
        },

        {
            text:"Keep one kitchen window open and leave the regulator ON.",
            score:0,
            feedback:"Ventilation alone is not a substitute for turning OFF the regulator."

        }

    ],

    tip:"Always check that both the burner knobs and LPG regulator are turned OFF before sleeping or leaving home.",

    didYouKnow:"A large number of domestic LPG accidents occur due to leaking connections and improper handling.",

    learnMore:"Regularly inspect the rubber hose and replace it immediately if it becomes cracked or damaged.",

    reference:"LPG Consumer Safety Guidelines"

},

{
    id:6,

    pillar:"Home Safety",

    category:"LPG & Electrical Safety",

    type:"Scenario",

    importance:"High",

    icon:"⚡",

    risk:"High",

    title:"Sparking Electrical Socket",

    situation:"You notice sparks coming from an electrical socket while plugging in an appliance. What should you do FIRST?",

    options:[

        {
            text:"Continue using the socket because the sparks stop after a few seconds.",
            score:0,
            feedback:"Sparking indicates a possible electrical fault and should never be ignored."
        },

        {
            text:"Switch OFF the power supply to that circuit (if safe) and have the socket inspected by a qualified electrician.",
            score:1,
            feedback:"Correct. Isolating the electrical supply and arranging professional inspection is the safest action."
        },

        {
            text:"Pour water on the socket to cool it.",
            score:0,
            feedback:"Water can conduct electricity and may cause electrocution."
        },

        {
            text:"Insert another plug firmly until the sparking stops.",
            score:0,
            feedback:"Using a faulty socket increases the risk of fire and electric shock."
        }

    ],

    tip:"Avoid overloading extension boards and replace damaged electrical accessories immediately.",

    didYouKnow:"Loose electrical connections generate heat, which can eventually start a fire.",

    learnMore:"Periodic electrical safety inspections help prevent residential fires.",

    reference:"National Electrical Safety Guidelines"

},
{
    id:7,

    pillar:"Emergency Response",

    category:"Earthquake",

    type:"Scenario",

    importance:"Critical",

    icon:"🌍",

    risk:"Extreme",

    title:"Earthquake While Indoors",

    situation:"You are inside your house when an earthquake suddenly begins. What should you do FIRST?",

    options:[

        {
            text:"Run outside immediately while the building is shaking.",
            score:0,
            feedback:"Running during strong shaking increases the risk of injury from falling objects."
        },

        {
            text:"Stand near a window and watch outside.",
            score:0,
            feedback:"Windows and glass may shatter during an earthquake."
        },

        {
            text:"Drop to the ground, take cover under sturdy furniture, protect your head and neck, and hold on until the shaking stops.",
            score:1,
            feedback:"Correct. 'Drop, Cover and Hold On' is the internationally recommended earthquake safety action."
        },

        {
            text:"Use the lift to leave the building immediately.",
            score:0,
            feedback:"Lifts may stop working or become unsafe during an earthquake."
        }

    ],

    tip:"Identify safe places such as under sturdy tables before an earthquake occurs.",

    didYouKnow:"Most earthquake injuries occur due to falling objects rather than building collapse.",

    learnMore:"Stay away from windows, mirrors and heavy furniture that may fall.",

    reference:"NDMA Earthquake Safety Guidelines"

},

{
    id:8,

    pillar:"Emergency Response",

    category:"Earthquake",

    type:"Scenario",

    importance:"Critical",

    icon:"🏢",

    risk:"High",

    title:"Earthquake While Using a Lift",

    situation:"You are inside a lift when you feel an earthquake. What is the safest action?",

    options:[

        {
            text:"Try to force the lift door open immediately.",
            score:0,
            feedback:"Forcing the lift doors may place you in greater danger."
        },

        {
            text:"Press every floor button repeatedly.",
            score:0,
            feedback:"This may not improve safety and can delay appropriate action."
        },

        {
            text:"Remain calm, press the nearest floor button if possible, exit when the doors open safely, and use the staircase thereafter.",
            score:1,
            feedback:"Correct. Leave the lift safely at the nearest opportunity and avoid using it again."
        },

        {
            text:"Jump continuously inside the lift.",
            score:0,
            feedback:"Jumping inside the lift can cause injuries and does not improve safety."
        }

    ],

    tip:"Avoid using lifts during or immediately after an earthquake.",

    didYouKnow:"Modern lifts have safety systems, but power failures and mechanical faults can occur during earthquakes.",

    learnMore:"Always use staircases after an earthquake until the building is declared safe.",

    reference:"NDMA Earthquake Safety Guidelines"

},

{
    id:9,

    pillar:"Emergency Response",

    category:"Earthquake",

    type:"Scenario",

    importance:"High",

    icon:"🌍",

    risk:"High",

    title:"After the Earthquake Stops",

    situation:"The shaking has stopped. What should you do NEXT?",

    options:[

        {
            text:"Rush back inside the building to collect your valuables.",
            score:0,
            feedback:"Aftershocks may occur and damaged buildings may become unsafe."
        },

        {
            text:"Use the lift to leave the building quickly.",
            score:0,
            feedback:"Never use lifts after an earthquake until they are declared safe."
        },

        {
            text:"Move carefully to an open area, watch for aftershocks, check for injuries, and follow official instructions.",
            score:1,
            feedback:"Correct. Be alert for aftershocks and avoid damaged structures."
        },

        {
            text:"Light candles immediately because electricity may fail.",
            score:0,
            feedback:"If there is a gas leak, an open flame may start a fire or explosion."
        }

    ],

    tip:"Keep an emergency kit with a torch, drinking water, medicines and important documents ready.",

    didYouKnow:"Aftershocks can continue for hours or even days after the main earthquake.",

    learnMore:"Check yourself and others for injuries before re-entering any building.",

    reference:"NDMA Earthquake Safety Guidelines"

},
{
    id:10,

    pillar:"Emergency Response",

    category:"Flood & Monsoon Safety",

    type:"Scenario",

    importance:"High",

    icon:"🌧️",

    risk:"High",

    title:"Flood Water Entering Your Building",

    situation:"Heavy rainfall has caused floodwater to enter the ground floor of your building. What should you do FIRST?",

    options:[

        {
            text:"Walk through the floodwater to check the damage.",
            score:0,
            feedback:"Floodwater may hide open drains, sharp objects or live electrical hazards."
        },

        {
            text:"Switch OFF the main electrical supply if it is safe to do so, move to a higher floor if necessary, and follow official instructions.",
            score:1,
            feedback:"Correct. Preventing electrical hazards and moving to safety should be your priority."
        },

        {
            text:"Allow children to play in the floodwater.",
            score:0,
            feedback:"Floodwater is often contaminated and may contain sewage, chemicals and disease-causing organisms."
        },

        {
            text:"Drive your vehicle into the flooded parking area to move it.",
            score:0,
            feedback:"Floodwater depth may be misleading and can trap both people and vehicles."
        }

    ],

    tip:"Keep emergency supplies and important documents stored above expected flood levels.",

    didYouKnow:"Floodwater may remain electrically dangerous if power has not been disconnected.",

    learnMore:"Always avoid unnecessary contact with floodwater.",

    reference:"NDMA Flood Management Guidelines"

},

{
    id:11,

    pillar:"Emergency Response",

    category:"Flood & Monsoon Safety",

    type:"Scenario",

    importance:"High",

    icon:"🚗",

    risk:"High",

    title:"Driving Through Floodwater",

    situation:"While driving, you come across a flooded road. What should you do?",

    options:[

        {
            text:"Drive through slowly because your vehicle is large.",
            score:0,
            feedback:"Even shallow moving water can carry away vehicles."
        },

        {
            text:"Wait until another vehicle crosses first and then follow it.",
            score:0,
            feedback:"Following another vehicle does not guarantee the road is safe."
        },

        {
            text:"Turn around, avoid the flooded road and use a safer alternate route.",
            score:1,
            feedback:"Correct. Avoiding floodwater is always the safest decision."
        },

        {
            text:"Increase speed to cross the flooded section quickly.",
            score:0,
            feedback:"Speed increases the risk of losing control and damaging the vehicle."
        }

    ],

    tip:"Never underestimate the depth or force of moving floodwater.",

    didYouKnow:"Many flood-related deaths occur because people attempt to drive through flooded roads.",

    learnMore:"Turn around, don't drive through floodwater.",

    reference:"NDMA Flood Safety Guidelines"

},

{
    id:12,

    pillar:"Disaster Awareness",

    category:"Flood & Monsoon Safety",

    type:"Knowledge",

    importance:"Medium",

    icon:"📢",

    risk:"Moderate",

    title:"Heavy Rainfall Warning",

    situation:"The India Meteorological Department (IMD) issues a Red Alert for extremely heavy rainfall in your area. What should you do?",

    options:[

        {
            text:"Ignore the alert because weather forecasts are often inaccurate.",
            score:0,
            feedback:"Ignoring official weather warnings may place you and your family at unnecessary risk."
        },

        {
            text:"Travel as planned because the rain may stop later.",
            score:0,
            feedback:"Unnecessary travel during severe weather should be avoided."
        },

        {
            text:"Stay updated through official sources, avoid unnecessary travel and follow instructions issued by local authorities.",
            score:1,
            feedback:"Correct. Official weather alerts help you prepare before conditions become dangerous."
        },

        {
            text:"Share unverified social media messages with everyone.",
            score:0,
            feedback:"Always rely on official information from IMD and government authorities."
        }

    ],

    tip:"Keep your mobile phone charged and monitor official weather updates during the monsoon.",

    didYouKnow:"The IMD uses colour-coded alerts (Green, Yellow, Orange and Red) to indicate weather severity.",

    learnMore:"Follow only official weather bulletins and local administration advisories.",

    reference:"India Meteorological Department (IMD)"

},
{
    id:13,

    pillar:"Community Preparedness",

    category:"Building & Community Preparedness",

    type:"Preparedness",

    importance:"High",

    icon:"🧯",

    risk:"Moderate",

    title:"Fire Safety Drill",

    situation:"Has your housing society, workplace or educational institution conducted a fire safety drill during the last 12 months?",

    options:[

        {
            text:"Yes, and I participated in it.",
            score:1,
            feedback:"Excellent. Regular fire drills improve preparedness and reduce panic during emergencies."
        },

        {
            text:"No fire drill has been conducted.",
            score:0,
            feedback:"Regular fire drills help occupants understand evacuation procedures and emergency response."
        },

        {
            text:"I don't know.",
            score:0,
            feedback:"Find out whether your building conducts fire drills and participate whenever possible."
        },

        {
            text:"I was informed but did not participate.",
            score:0,
            feedback:"Participating in fire drills helps you respond more confidently during a real emergency."
        }

    ],

    tip:"Take every fire drill seriously—it could help save lives during an actual emergency.",

    didYouKnow:"Regular mock drills are encouraged under disaster preparedness and fire safety programmes.",

    learnMore:"Know your evacuation route before an emergency occurs.",

    reference:"NDMA Fire Safety Guidelines"

},

{
    id:14,

    pillar:"Community Preparedness",

    category:"Building & Community Preparedness",

    type:"Knowledge",

    importance:"High",

    icon:"🚪",

    risk:"High",

    title:"Emergency Exit & Assembly Point",

    situation:"If an emergency evacuation is announced in your building, do you know the nearest emergency exit and assembly point?",

    options:[

        {
            text:"Yes, I know both the emergency exit and assembly point.",
            score:1,
            feedback:"Correct. Knowing where to evacuate before an emergency saves valuable time."
        },

        {
            text:"I know the exit but not the assembly point.",
            score:0,
            feedback:"You should know both the evacuation route and the designated assembly area."
        },

        {
            text:"I have never checked.",
            score:0,
            feedback:"Take a few minutes to identify your building's emergency exits and assembly point."
        },

        {
            text:"I will follow other people if an emergency happens.",
            score:0,
            feedback:"Relying only on others may cause confusion and delay evacuation."

        }

    ],

    tip:"Locate emergency exits and assembly points as soon as you move into a new building.",

    didYouKnow:"Assembly points allow emergency responders to confirm everyone has safely evacuated.",

    learnMore:"Never block staircases or emergency exits with personal belongings.",

    reference:"National Building Code of India"

},

{
    id:15,

    pillar:"Community Preparedness",

    category:"Building & Community Preparedness",

    type:"Knowledge",

    importance:"High",

    icon:"🧯",

    risk:"High",

    title:"Fire Extinguisher Awareness",

    situation:"Do you know where the nearest fire extinguisher or fire hydrant is located in your building?",

    options:[

        {
            text:"Yes, I know exactly where it is located.",
            score:1,
            feedback:"Excellent. Knowing the location of firefighting equipment can save valuable time during an emergency."
        },

        {
            text:"I have seen one but don't know its exact location.",
            score:0,
            feedback:"Take a few minutes to locate the nearest extinguisher and hydrant."
        },

        {
            text:"No, I have never looked for one.",
            score:0,
            feedback:"Being aware of emergency equipment is an important part of disaster preparedness."
        },

        {
            text:"I don't think my building has one.",
            score:0,
            feedback:"Check with your housing society or building management regarding available firefighting equipment."

        }

    ],

    tip:"Learn the location of fire extinguishers before an emergency occurs.",

    didYouKnow:"Portable fire extinguishers are intended to control small fires during their early stages.",

    learnMore:"Only attempt to use a fire extinguisher if the fire is small, you know how to use it, and it is safe to do so.",

    reference:"National Building Code of India"

},
{
    id:16,

    pillar:"Family Preparedness",

    category:"Family Preparedness",

    type:"Practice",

    importance:"High",

    icon:"📞",

    risk:"Moderate",

    title:"Emergency Contact List",

    situation:"Does your family maintain an easily accessible emergency contact list containing important phone numbers such as Police, Fire Brigade, Ambulance and close relatives?",

    options:[

        {
            text:"Yes, we maintain an updated emergency contact list.",
            score:1,
            feedback:"Excellent. During emergencies, quick access to important contact numbers saves valuable time."
        },

        {
            text:"We have some numbers saved only in our mobile phones.",
            score:0,
            feedback:"Mobile phones may become unavailable due to battery failure or network issues. Keep a written copy as well."
        },

        {
            text:"No, we do not have any emergency contact list.",
            score:0,
            feedback:"Prepare a simple emergency contact list and keep it where every family member can find it."
        },

        {
            text:"I have never thought about maintaining one.",
            score:0,
            feedback:"Planning ahead improves your family's readiness during emergencies."
        }

    ],

    tip:"Keep one printed emergency contact list at home and another in your emergency kit.",

    didYouKnow:"Communication networks may become overloaded during major disasters.",

    learnMore:"Every family member should know whom to contact during an emergency.",

    reference:"NDMA Family Preparedness Guidelines"

},

{
    id:17,

    pillar:"Family Preparedness",

    category:"Family Preparedness",

    type:"Practice",

    importance:"High",

    icon:"🎒",

    risk:"Moderate",

    title:"Home Emergency Kit",

    situation:"Does your home have an emergency kit that can be used during disasters?",

    options:[

        {
            text:"Yes, we have a ready emergency kit containing essential supplies.",
            score:1,
            feedback:"Excellent. A ready emergency kit helps your family remain self-sufficient during the initial hours of a disaster."
        },

        {
            text:"We keep a few emergency items but not a complete kit.",
            score:0,
            feedback:"Consider preparing a complete emergency kit with water, food, torch, medicines and important documents."
        },

        {
            text:"No, we do not have an emergency kit.",
            score:0,
            feedback:"Preparing an emergency kit is one of the simplest ways to improve disaster preparedness."
        },

        {
            text:"I don't know what an emergency kit should contain.",
            score:0,
            feedback:"An emergency kit should include water, dry food, torch, batteries, medicines, first aid supplies and copies of important documents."
        }

    ],

    tip:"Review your emergency kit every six months and replace expired items.",

    didYouKnow:"Emergency response agencies recommend keeping enough basic supplies for at least 72 hours.",

    learnMore:"Store your emergency kit where it is easily accessible.",

    reference:"NDMA Emergency Preparedness Guidelines"

},

{
    id:18,

    pillar:"Family Preparedness",

    category:"Family Preparedness",

    type:"Preparedness",

    importance:"High",

    icon:"👨‍👩‍👧",

    risk:"Moderate",

    title:"Family Emergency Plan",

    situation:"Has your family discussed what everyone should do if a disaster occurs while family members are in different locations?",

    options:[

        {
            text:"Yes, our family has discussed and agreed on an emergency plan.",
            score:1,
            feedback:"Excellent. A family emergency plan reduces confusion during disasters."
        },

        {
            text:"We have discussed it briefly but never made a proper plan.",
            score:0,
            feedback:"Discuss meeting points, emergency contacts and responsibilities with all family members."
        },

        {
            text:"No, we have never discussed it.",
            score:0,
            feedback:"Preparing a simple family emergency plan takes very little time but can make a significant difference."
        },

        {
            text:"We will decide what to do only if an emergency actually happens.",
            score:0,
            feedback:"Planning before a disaster is much more effective than making decisions during an emergency."
        }

    ],

    tip:"Choose a common meeting place and ensure every family member knows emergency contact numbers.",

    didYouKnow:"Children should also know whom to contact if they become separated from their family.",

    learnMore:"Practice your family emergency plan once or twice every year.",

    reference:"NDMA Family Disaster Preparedness Guidelines"

},
{
    id:19,

    pillar:"Disaster Awareness",

    category:"Disaster & Legal Awareness",

    type:"Knowledge",

    importance:"High",

    icon:"☎️",

    risk:"High",

    title:"National Emergency Number",

    situation:"What is India's single national emergency helpline number that can be used to seek immediate assistance during emergencies?",

    options:[

        {
            text:"100",
            score:0,
            feedback:"100 is traditionally associated with Police, but India now has a single emergency response number."
        },

        {
            text:"108",
            score:0,
            feedback:"108 is used for ambulance services in many states but is not the unified emergency number."
        },

        {
            text:"112",
            score:1,
            feedback:"Correct. 112 is India's single emergency response number for Police, Fire and Medical assistance."
        },

        {
            text:"101",
            score:0,
            feedback:"101 connects to the Fire Service but 112 is the unified national emergency number."
        }

    ],

    tip:"Save 112 in every family member's mobile phone.",

    didYouKnow:"The Emergency Response Support System (ERSS) integrates Police, Fire and Ambulance services through 112.",

    learnMore:"Use 112 only for genuine emergencies.",

    reference:"Emergency Response Support System (ERSS), Government of India"

},

{
    id:20,

    pillar:"Disaster Awareness",

    category:"Disaster & Legal Awareness",

    type:"Knowledge",

    importance:"Medium",

    icon:"📘",

    risk:"Moderate",

    title:"Disaster Management Act, 2005",

    situation:"Have you heard about the Disaster Management Act, 2005?",

    options:[

        {
            text:"Yes, I know about it.",
            score:1,
            feedback:"Excellent. The Act provides the legal framework for disaster management in India."
        },

        {
            text:"I have heard its name but don't know much about it.",
            score:0,
            feedback:"The Disaster Management Act, 2005 established national, state and district disaster management authorities."
        },

        {
            text:"No, I have never heard about it.",
            score:0,
            feedback:"Learning about the Act helps citizens understand how disasters are managed in India."
        },

        {
            text:"I am not sure.",
            score:0,
            feedback:"The Disaster Management Act plays an important role in disaster preparedness and response."

        }

    ],

    tip:"Basic awareness of disaster management laws helps citizens understand their role during emergencies.",

    didYouKnow:"The Disaster Management Act, 2005 established the NDMA, SDMAs and DDMAs.",

    learnMore:"The Act promotes prevention, preparedness, mitigation, response and recovery.",

    reference:"Disaster Management Act, 2005"

},

{
    id:21,

    pillar:"Disaster Awareness",

    category:"Disaster & Legal Awareness",

    type:"Knowledge",

    importance:"Medium",

    icon:"🏛️",

    risk:"Moderate",

    title:"District Disaster Management Authority",

    situation:"Which authority is primarily responsible for coordinating disaster management activities at the district level?",

    options:[

        {
            text:"Municipal Corporation alone.",
            score:0,
            feedback:"Municipal Corporations assist in disaster management but district-level coordination is handled through a dedicated authority."
        },

        {
            text:"District Disaster Management Authority (DDMA).",
            score:1,
            feedback:"Correct. The DDMA coordinates disaster management activities at the district level."
        },

        {
            text:"Local Police Station only.",
            score:0,
            feedback:"Police play an important role but are only one part of the disaster response system."
        },

        {
            text:"Resident Welfare Association.",
            score:0,
            feedback:"Housing societies assist locally but are not the statutory district disaster management authority."

        }

    ],

    tip:"Know the emergency services and disaster management authorities operating in your district.",

    didYouKnow:"The District Collector/District Magistrate generally chairs the DDMA.",

    learnMore:"District Disaster Management Plans are prepared for every district.",

    reference:"Disaster Management Act, 2005"

},

{
    id:22,

    pillar:"Disaster Awareness",

    category:"Disaster & Legal Awareness",

    type:"Practice",

    importance:"High",

    icon:"📱",

    risk:"Moderate",

    title:"Official Disaster Alerts",

    situation:"Where should you obtain weather forecasts and disaster warnings during emergencies?",

    options:[

        {
            text:"Forwarded social media messages.",
            score:0,
            feedback:"Unverified messages may spread misinformation and panic."
        },

        {
            text:"Friends and relatives only.",
            score:0,
            feedback:"Always verify information through official sources."
        },

        {
            text:"Official sources such as IMD, NDMA, State Disaster Management Authority and local administration.",
            score:1,
            feedback:"Correct. Always rely on official government sources for disaster warnings."
        },

        {
            text:"Random videos on the internet.",
            score:0,
            feedback:"Online videos may contain outdated or inaccurate information."

        }

    ],

    tip:"Follow official disaster management agencies on trusted platforms for verified updates.",

    didYouKnow:"Early warning systems help reduce loss of life by providing advance notice before many disasters.",

    learnMore:"Never forward disaster-related messages unless they are from verified official sources.",

    reference:"NDMA & India Meteorological Department"

},
{
    id:23,

    pillar:"Medical & First Aid",

    category:"Medical & First Aid",

    type:"Scenario",

    importance:"Critical",

    icon:"⚡",

    risk:"Critical",

    title:"Person Receives an Electric Shock",

    situation:"You see a person receiving an electric shock after touching a damaged electrical appliance. What should you do FIRST?",

    options:[

        {
            text:"Touch the person immediately and pull them away.",
            score:0,
            feedback:"Touching the person directly may cause you to receive an electric shock as well."
        },

        {
            text:"Switch OFF the electrical supply if it is safe to do so, or separate the person from the source using a dry non-conductive object before calling for medical help.",
            score:1,
            feedback:"Correct. Always remove the electrical danger before touching the victim."
        },

        {
            text:"Pour water on the person.",
            score:0,
            feedback:"Water conducts electricity and can worsen the situation."
        },

        {
            text:"Wait for someone else to help.",
            score:0,
            feedback:"Immediate but safe action can save lives."

        }

    ],

    tip:"Never touch a person who is still in contact with a live electrical source.",

    didYouKnow:"Electric shock can stop the heart or breathing even if there are no visible burns.",

    learnMore:"Call emergency medical services immediately after ensuring the scene is safe.",

    reference:"Electrical Safety Guidelines"

},

{
    id:24,

    pillar:"Medical & First Aid",

    category:"Medical & First Aid",

    type:"Knowledge",

    importance:"High",

    icon:"🚑",

    risk:"High",

    title:"Medical Emergency",

    situation:"A family member suddenly becomes unconscious and is not responding. What should you do FIRST?",

    options:[

        {
            text:"Wait for a few minutes to see if they recover.",
            score:0,
            feedback:"Delaying medical assistance can reduce the person's chance of survival."
        },

        {
            text:"Call the emergency medical service (112 or your local ambulance service), check breathing and begin first aid if you are trained.",
            score:1,
            feedback:"Correct. Early medical assistance and prompt first aid can save lives."
        },

        {
            text:"Give food or water immediately.",
            score:0,
            feedback:"Never give food or water to an unconscious person."
        },

        {
            text:"Ask the person to walk around.",
            score:0,
            feedback:"An unconscious person cannot respond and requires immediate medical attention."

        }

    ],

    tip:"Keep emergency numbers easily available for all family members.",

    didYouKnow:"Quick emergency response greatly improves survival during medical emergencies.",

    learnMore:"Learn basic CPR and first aid whenever possible.",

    reference:"Emergency Medical Response Guidelines"

},

{
    id:25,

    pillar:"Medical & First Aid",

    category:"Medical & First Aid",

    type:"Preparedness",

    importance:"Medium",

    icon:"🩹",

    risk:"Moderate",

    title:"First Aid Kit",

    situation:"Does your home have a properly stocked first aid kit that is easily accessible?",

    options:[

        {
            text:"Yes, we maintain a complete and regularly checked first aid kit.",
            score:1,
            feedback:"Excellent. A well-maintained first aid kit is essential for handling minor injuries and emergencies."
        },

        {
            text:"We have a few medicines but not a proper first aid kit.",
            score:0,
            feedback:"Consider preparing a complete first aid kit with essential supplies."
        },

        {
            text:"No, we do not have one.",
            score:0,
            feedback:"Preparing a first aid kit is a simple but important step in disaster preparedness."
        },

        {
            text:"I don't know what should be included in a first aid kit.",
            score:0,
            feedback:"A basic first aid kit should include bandages, antiseptic, gauze, adhesive tape, scissors, gloves and essential medicines."

        }

    ],

    tip:"Check expiry dates of medicines and replenish used items regularly.",

    didYouKnow:"A first aid kit should be available at home, in vehicles and workplaces.",

    learnMore:"Store the kit where every family member can easily access it.",

    reference:"Indian Red Cross Society"

},

{
    id:26,

    pillar:"Medical & First Aid",

    category:"Medical & First Aid",

    type:"Preparedness",

    importance:"Medium",

    icon:"❤️",

    risk:"Moderate",

    title:"CPR / First Aid Training",

    situation:"Is at least one member of your household trained in CPR (Cardiopulmonary Resuscitation) or basic first aid?",

    options:[

        {
            text:"Yes, at least one family member is trained.",
            score:1,
            feedback:"Excellent. CPR and first aid skills can save lives before professional help arrives."
        },

        {
            text:"No, but we plan to undergo training.",
            score:0,
            feedback:"That's a good decision. Even basic first aid knowledge is extremely valuable."
        },

        {
            text:"No, nobody has received any training.",
            score:0,
            feedback:"Consider attending a certified first aid or CPR training programme."
        },

        {
            text:"I am not sure.",
            score:0,
            feedback:"Find out whether someone in your family has received first aid or CPR training."

        }

    ],

    tip:"Basic CPR training takes only a few hours but can save a life.",

    didYouKnow:"Immediate CPR can significantly improve survival in cases of sudden cardiac arrest.",

    learnMore:"Many organizations such as the Indian Red Cross Society and St. John Ambulance conduct first aid training programmes.",

    reference:"Indian Red Cross Society"

}

];
