const questions = [

{
    id:1,

    category:"Fire",

    icon:"🔥",

    risk:"extreme",

    title:"Kitchen Oil Fire",

    situation:"While cooking, a pan containing oil catches fire. What should you do FIRST?",

    options:[

        {
            text:"Pour water on the fire.",
            correct:false,
            feedback:"Water spreads burning oil and can cause the fire to flare up violently."
        },

        {
            text:"Turn off the gas supply (if safe) and cover the pan with a metal lid.",
            correct:true,
            feedback:"Excellent. Cutting off the fuel source and smothering the flames is the safest action."
        },

        {
            text:"Open all windows immediately.",
            correct:false,
            feedback:"Opening windows does not extinguish the fire and may increase airflow."
        },

        {
            text:"Carry the burning pan outside.",
            correct:false,
            feedback:"Moving a burning pan may spill hot oil and cause severe burns."
        }

    ],

    didYouKnow:"Most kitchen fires occur because cooking is left unattended.",

    tip:"Keep a metal lid or fire blanket near your cooking area.",

    learnMore:"Never use water on oil or grease fires."

},

{
    id:2,

    category:"Gas Leakage",

    icon:"💨",

    risk:"extreme",

    title:"LPG Gas Leakage",

    situation:"You smell LPG gas in your kitchen. What should you do FIRST?",

    options:[

        {
            text:"Switch on the kitchen light.",
            correct:false,
            feedback:"Electrical switches may create sparks capable of igniting leaked LPG."
        },

        {
            text:"Light a match to locate the leak.",
            correct:false,
            feedback:"This is extremely dangerous and may cause an explosion."
        },

        {
            text:"Open doors and windows naturally, avoid electrical switches and close the gas supply if safe.",
            correct:true,
            feedback:"Correct. Natural ventilation and avoiding sparks is the safest response."
        },

        {
            text:"Switch on the exhaust fan.",
            correct:false,
            feedback:"The fan switch can also create a spark."
        }

    ],

    didYouKnow:"LPG is heavier than air and may collect near the floor.",

    tip:"Always turn off the LPG regulator before leaving home for a long period.",

    learnMore:"Never operate electrical switches when gas leakage is suspected."

},

{
    id:3,

    category:"Earthquake",

    icon:"🌍",

    risk:"high",

    title:"Earthquake Inside Home",

    situation:"An earthquake begins while you are inside your house. What should you do FIRST?",

    options:[

        {
            text:"Run outside immediately.",
            correct:false,
            feedback:"Running during strong shaking can result in injuries from falling objects."
        },

        {
            text:"Stand near a window.",
            correct:false,
            feedback:"Glass may shatter and cause injuries."
        },

        {
            text:"Drop, Cover and Hold On.",
            correct:true,
            feedback:"Correct. This is the internationally recommended earthquake safety action."
        },

        {
            text:"Use the lift to evacuate.",
            correct:false,
            feedback:"Lifts may stop working during an earthquake."
        }

    ],

    didYouKnow:"Most earthquake injuries occur because people panic and run.",

    tip:"Identify safe places in every room before an earthquake occurs.",

    learnMore:"Stay away from windows and heavy furniture."

},

{
    id:4,

    category:"Flood",

    icon:"🌧️",

    risk:"high",

    title:"Flooded Road",

    situation:"Heavy rain has caused flooding outside your building. What should you do?",

    options:[

        {
            text:"Walk through floodwater if it looks shallow.",
            correct:false,
            feedback:"Floodwater may hide open drains, sharp objects or electrical hazards."
        },

        {
            text:"Drive through the flooded road.",
            correct:false,
            feedback:"Vehicles can lose control even in relatively shallow water."
        },

        {
            text:"Avoid flooded areas and stay away from submerged electrical installations.",
            correct:true,
            feedback:"Correct. Avoid unnecessary exposure to floodwater."
        },

        {
            text:"Allow children to play in the water.",
            correct:false,
            feedback:"Floodwater may be contaminated and unsafe."
        }

    ],

    didYouKnow:"Just a small amount of flowing water can sweep a person off balance.",

    tip:"Stay indoors unless travel is absolutely necessary.",

    learnMore:"Avoid touching electrical equipment if standing in water."

},

{
    id:5,

    category:"Building Safety",

    icon:"🏢",

    risk:"high",

    title:"Major Building Crack",

    situation:"You notice a large crack developing in a wall or structural column of your building. What should you do FIRST?",

    options:[

        {
            text:"Ignore it.",
            correct:false,
            feedback:"Structural cracks should never be ignored."
        },

        {
            text:"Repair it yourself.",
            correct:false,
            feedback:"Structural damage should be assessed by qualified professionals."
        },

        {
            text:"Inform the housing society or concerned authority immediately and avoid the affected area if necessary.",
            correct:true,
            feedback:"Correct. Early reporting can help prevent accidents."
        },

        {
            text:"Wait a few weeks to see if it becomes bigger.",
            correct:false,
            feedback:"Delaying action may increase the risk if the damage worsens."
        }

    ],

    didYouKnow:"Not all cracks are dangerous, but large or widening cracks should be evaluated promptly.",

    tip:"Report unusual structural changes to your society management without delay.",

    learnMore:"If there is immediate danger, move away from the affected area and contact the relevant authorities."

}

];
