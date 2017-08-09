'use strict';

module.exports = (() => {
    const brand_title = 'First in Software';

    const home = {
        features: [
            {
                img_location: './assets/pre-planning-thumb.png',
                title: 'Pre-Planning',
                description: 'Manage and view occupancies on the map and retrieve pre-plan data at the touch of a finger.'
            },
            {
                img_location: './assets/vehicle-tracking-thumb.png',
                title: 'AVL',
                description: 'Visually track the real time location of responding units.'
            },
            {
                img_location: './assets/cad-thumb.png',
                title: 'CAD Integration',
                description: 'CADDirect integrates directly with your CAD system to access incident data, locate and view incidents on the map.'
            },
            {
                img_location: './assets/hydrant-management-thumb.png',
                title: 'Hydrant Management',
                description: 'Manage and view your hydrants on the map color coded per NFPA.'
            },
            {
                img_location: './assets/mobile-friendly-thumb.png',
                title: 'Desktop / Mobile',
                description: 'Works on all platforms and every major phone, tablet and PC. Windows, iPad, iPhone, Android and more!'
            }
        ],
        tags: [
            {
                title: 'Situational Awareness',
                description: 'View pre-incident plans, hazards, hydrant locations, AVL and other data including mutual aid. All in one system!'
            },
            {
                title: 'Operations',
                description: 'Incident location(s) mapping, integrated GPS display and routing for improved response times, AVL for improved resource tracking'
            },
            {
                title: 'Mutual Aid Support and Collaboration',
                description: 'Interoperable with mutual aid agencies, including Fire, EMS, Police, and Emergency Management, to easily view apparatus locations and share data such as pre-plans, hydrants, etc.'
            },
            {
                title: 'Integrated CAD Systems',
                description: 'Host mutual aid agencies that operate on different CAD systems, each agency has secure access to their CAD system'
            }
        ],
        testimonios: [
            {
                author: 'Asst. Chief John Landry, Westlake FD',
                content: 'Responder360 is very user friendly, helped cut our response times and client support is outstanding! Highly recommend Responder360 to all emergency responders.'
            },
            {
                author: 'Chief Dan Shelor, Champions ESD',
                content: 'Responder360 is an invaluable tool for us. Not only are our Chiefs able to see the apparatus responding to the call but our units are able to see other apparatus responding so the potential for intersection collisions is reduced. Additionally, being able to locate the nearest hydrant or finding that elusive apartment building in the middle of the night has been a huge help. I highly recommend Responder360.'
            }
        ]
    };

    return {
        home
    }
})();