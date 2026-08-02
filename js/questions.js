const questions = [

{
    id:1,

    pillar:"Emergency Response",

    type:"scenario",

    category:"Fire Safety",

    icon:"🔥",

    risk:"Extreme",

    title:"Kitchen Oil Fire",

    situation:"While cooking, a pan containing oil catches fire. What should you do FIRST?",

    options:[

        {
            text:"Pour water on the fire.",
            correct:false,
            feedback:"Water spreads burning oil and can cause severe burns."
        },

        {
            text:"Turn off the gas supply (if safe) and cover the pan with a metal lid.",
            correct:true,
            feedback:"Excellent. Smothering the fire and stopping the fuel source is the safest action."
        },

        {
            text:"Open all windows immediately.",
            correct:false,
            feedback:"Opening windows does not extinguish the fire."
        },

        {
            text:"Carry the burning pan outside.",
            correct:false,
            feedback:"Moving a burning pan can spread burning oil and cause injuries."
        }

    ],

    didYouKnow:"Most kitchen fires start due to unattended cooking.",

    tip:"Keep a metal lid or fire blanket near your cooking area.",

    learnMore:"Never use water on oil or grease fires."

}

{
    id:2,

    pillar:"Emergency Response",

    type:"scenario",

    category:"Fire Safety",

    icon:"🔥",

    risk:"High",

    title:"Electrical Appliance Fire",

    situation:"A television catches fire due to an electrical fault. What should you do FIRST?",

    options:[

        {
            text:"Throw water on the television.",
            correct:false,
            feedback:"Water conducts electricity and may result in electric shock."
        },

        {
            text:"Switch off the main power supply (if safe) and use an appropriate fire extinguisher.",
            correct:true,
            feedback:"Correct. Disconnecting electricity reduces the risk of electrocution and fire spread."
        },

        {
            text:"Touch the burning television to unplug it.",
            correct:false,
            feedback:"Touching a burning electrical appliance can be extremely dangerous."
        },

        {
            text:"Ignore it because the fire will stop by itself.",
            correct:false,
            feedback:"Electrical fires can spread rapidly."
        }

    ],

    didYouKnow:"Electrical faults are a common cause of residential fires.",

    tip:"Replace damaged electrical wiring and avoid overloaded sockets.",

    learnMore:"Never use water on an electrical fire unless the power has been disconnected."

}

{
    id:3,

    pillar:"Community Preparedness",

    type:"scenario",

    category:"Fire Safety",

    icon:"🔥",

    risk:"High",

    title:"Fire in a Neighbouring Flat",

    situation:"You notice smoke and flames coming from a neighbouring apartment. What should you do FIRST?",

    options:[

        {
            text:"Rush into the flat alone to rescue everyone.",
            correct:false,
            feedback:"Entering a burning building without training can put your own life at risk."
        },

        {
            text:"Raise the alarm, call the Fire Brigade and evacuate if necessary.",
            correct:true,
            feedback:"Correct. Alerting others and calling emergency services is the safest first response."
        },

        {
            text:"Wait to see if someone else reports the fire.",
            correct:false,
            feedback:"Every minute matters during a fire emergency."
        },

        {
            text:"Use the lift to leave the building.",
            correct:false,
            feedback:"Never use lifts during a fire."
        }

    ],

    didYouKnow:"Smoke inhalation causes more fire-related deaths than burns.",

    tip:"Know your building's evacuation route.",

    learnMore:"Use the staircase during a fire evacuation."

}

{
    id:4,

    pillar:"Community Preparedness",

    type:"awareness",

    category:"Fire Safety",

    icon:"🚒",

    risk:"Moderate",

    title:"Fire Safety Drill",

    situation:"Has your housing society, workplace or educational institution conducted a fire safety drill during the last 12 months?",

    options:[

        {
            text:"Yes",
            correct:true,
            feedback:"Excellent. Regular fire drills improve preparedness and reduce panic during emergencies."
        },

        {
            text:"No",
            correct:false,
            feedback:"Regular fire drills help people learn evacuation routes and emergency procedures."
        },

        {
            text:"I don't know",
            correct:false,
            feedback:"Find out whether your building conducts fire drills and participate whenever possible."
        },

        {
            text:"Not Applicable",
            correct:false,
            feedback:"Even if formal drills are not conducted, everyone should know the emergency exits and assembly point."
        }

    ],

    didYouKnow:"The Disaster Management Act, 2005 promotes disaster preparedness through planning, training and capacity building.",

    tip:"Participate in every fire drill organised by your society or workplace.",

    learnMore:"Fire drills help identify evacuation problems before a real emergency occurs."

}

];
